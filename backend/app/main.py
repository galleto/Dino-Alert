import os
import csv
import io
import tempfile
from pathlib import Path
from typing import Optional, List, Any
from datetime import datetime
from fastapi import FastAPI, UploadFile, File, Form, Header, HTTPException, Query, Response, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from backend.app.db import get_db_connection, check_db_health, run_migrations
from backend.ingest.loader import load_from_directory_or_zip, ensure_tenant_exists, insert_metricas_batch, insert_logs_batch
from backend.ingest.parser import parse_metricas_csv, parse_logs_md, assert_not_solucion

app = FastAPI(
    title="Dino Alert API",
    description="Sistema de detección temprana de incidentes TI para PyMEs",
    version="1.0.0"
)

# CORS
cors_origins_str = os.getenv("CORS_ORIGINS", "http://localhost:5173,http://127.0.0.1:5173")
origins = [o.strip() for o in cors_origins_str.split(",") if o.strip()]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins if origins else ["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

ACCESS_CODE = os.getenv("ACCESS_CODE", "")

def verify_access_code(x_access_code: Optional[str]):
    if ACCESS_CODE and x_access_code != ACCESS_CODE:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail={"error": "NO_AUTORIZADO", "detalle": "Código de acceso inválido o ausente en X-Access-Code."}
        )

@app.on_event("startup")
def startup_event():
    try:
        run_migrations()
    except Exception as e:
        print(f"Advertencia al ejecutar migraciones en startup: {e}")

# 1. Health
@app.get("/api/health")
def health():
    h = check_db_health()
    if h["status"] != "ok":
        return Response(
            content=f'{{"status": "error", "detalle": "{h.get("error", "Error de conexión")}"}}',
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            media_type="application/json"
        )
    return {
        "status": "ok",
        "db": h["db"],
        "timescaledb": h["timescaledb"],
        "timestamp": datetime.now().isoformat()
    }

# 2. Tenants
class TenantCreate(BaseModel):
    id: str
    nombre: str
    zona_horaria: Optional[str] = "America/Mexico_City"
    idioma: Optional[str] = "es"
    moneda: Optional[str] = "MXN"
    costo_hora: Optional[float] = None
    contexto_md: Optional[str] = None

@app.get("/api/tenants")
def list_tenants():
    with get_db_connection() as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT id, nombre, zona_horaria, idioma, moneda, costo_hora, creado_en FROM tenants ORDER BY creado_en DESC;")
            rows = cur.fetchall()
            return [dict(r) for r in rows]

@app.post("/api/tenants", status_code=status.HTTP_201_CREATED)
def create_tenant(t: TenantCreate, x_access_code: Optional[str] = Header(None)):
    verify_access_code(x_access_code)
    with get_db_connection() as conn:
        with conn.cursor() as cur:
            cur.execute(
                """
                INSERT INTO tenants (id, nombre, zona_horaria, idioma, moneda, costo_hora, contexto_md)
                VALUES (%s, %s, %s, %s, %s, %s, %s)
                ON CONFLICT (id) DO UPDATE SET
                    nombre = EXCLUDED.nombre,
                    zona_horaria = EXCLUDED.zona_horaria,
                    idioma = EXCLUDED.idioma,
                    moneda = EXCLUDED.moneda,
                    costo_hora = EXCLUDED.costo_hora,
                    contexto_md = COALESCE(EXCLUDED.contexto_md, tenants.contexto_md);
                """,
                (t.id, t.nombre, t.zona_horaria, t.idioma, t.moneda, t.costo_hora, t.contexto_md)
            )
            conn.commit()
    return {"status": "creado", "id": t.id}

# 3. Ingest
@app.post("/api/ingest")
async def ingest_file(
    file: UploadFile = File(...),
    tenant: Optional[str] = Form(None),
    x_access_code: Optional[str] = Header(None)
):
    verify_access_code(x_access_code)
    filename = file.filename or ""
    assert_not_solucion(filename)
    
    with tempfile.NamedTemporaryFile(delete=False, suffix=Path(filename).suffix) as tmp:
        contents = await file.read()
        tmp.write(contents)
        tmp_path = Path(tmp.name)

    try:
        if filename.endswith(".zip"):
            stats = load_from_directory_or_zip(tmp_path)
            return {
                "status": "completado",
                "filas_metricas": stats["metricas_count"],
                "filas_logs": stats["logs_count"],
                "tenants_afectados": stats["tenants"],
                "advertencias": stats["warnings"]
            }
        elif filename.endswith(".csv"):
            rows = list(parse_metricas_csv(tmp_path, default_tenant=tenant))
            tenants = list({r["tenant"] for r in rows})
            with get_db_connection() as conn:
                for t in tenants:
                    ensure_tenant_exists(conn, t)
                insert_metricas_batch(conn, rows)
                conn.commit()
            return {
                "status": "completado",
                "filas_metricas": len(rows),
                "filas_logs": 0,
                "tenants_afectados": tenants,
                "advertencias": []
            }
        elif filename.endswith(".md"):
            if not tenant:
                raise HTTPException(status_code=400, detail={"error": "PARAMETRO_FALTANTE", "detalle": "Logs .md requiere el campo tenant."})
            log_rows = list(parse_logs_md(tmp_path, tenant=tenant))
            with get_db_connection() as conn:
                ensure_tenant_exists(conn, tenant)
                insert_logs_batch(conn, log_rows)
                conn.commit()
            return {
                "status": "completado",
                "filas_metricas": 0,
                "filas_logs": len(log_rows),
                "tenants_afectados": [tenant],
                "advertencias": []
            }
        else:
            raise HTTPException(status_code=400, detail={"error": "FORMATO_INVALIDO", "detalle": "Archivo debe ser .zip, .csv o .md"})
    finally:
        if tmp_path.exists():
            tmp_path.unlink()

# 4. Alertas y Export
@app.get("/api/alertas")
def get_alertas(
    tenant: Optional[str] = Query(None),
    estado: Optional[str] = Query(None),
    tipo: Optional[str] = Query(None),
    limit: int = Query(50, ge=1, le=1000),
    offset: int = Query(0, ge=0)
):
    query = "SELECT * FROM alertas WHERE 1=1"
    params = []
    if tenant:
        query += " AND tenant = %s"
        params.append(tenant)
    if estado:
        query += " AND estado = %s"
        params.append(estado)
    if tipo:
        query += " AND tipo = %s"
        params.append(tipo)
    
    count_query = query.replace("SELECT *", "SELECT COUNT(*)")
    query += " ORDER BY ts DESC LIMIT %s OFFSET %s"
    
    with get_db_connection() as conn:
        with conn.cursor() as cur:
            cur.execute(count_query, params)
            total = cur.fetchone()["count"]
            cur.execute(query, params + [limit, offset])
            rows = cur.fetchall()
            return {"total": total, "alertas": [dict(r) for r in rows]}

@app.get("/api/alertas/export")
def export_alertas_csv(tenant: Optional[str] = Query(None)):
    query = "SELECT tenant, ts, confianza, tipo FROM alertas WHERE 1=1"
    params = []
    if tenant:
        query += " AND tenant = %s"
        params.append(tenant)
    query += " ORDER BY ts ASC;"

    with get_db_connection() as conn:
        with conn.cursor() as cur:
            cur.execute(query, params)
            rows = cur.fetchall()

    output = io.StringIO(newline="")
    writer = csv.writer(output)
    writer.writerow(["tenant", "timestamp", "confianza", "tipo"])
    for r in rows:
        ts_str = r["ts"].strftime("%Y-%m-%dT%H:%M:%S") if isinstance(r["ts"], datetime) else str(r["ts"])
        conf_str = f"{r['confianza']:.3f}"
        writer.writerow([r["tenant"], ts_str, conf_str, r["tipo"]])

    return Response(
        content=output.getvalue(),
        media_type="text/csv",
        headers={"Content-Disposition": "attachment; filename=alertas.csv"}
    )

class FeedbackRequest(BaseModel):
    feedback: str

@app.patch("/api/alertas/{id}/feedback")
def update_feedback(id: int, fb: FeedbackRequest, x_access_code: Optional[str] = Header(None)):
    verify_access_code(x_access_code)
    if fb.feedback not in ("util", "falsa_alarma"):
        raise HTTPException(status_code=400, detail={"error": "VALOR_INVALIDO", "detalle": "feedback debe ser 'util' o 'falsa_alarma'"})
    with get_db_connection() as conn:
        with conn.cursor() as cur:
            cur.execute("UPDATE alertas SET feedback = %s WHERE id = %s RETURNING id;", (fb.feedback, id))
            row = cur.fetchone()
            if not row:
                raise HTTPException(status_code=404, detail={"error": "NO_ENCONTRADO", "detalle": f"Alerta {id} no encontrada."})
            conn.commit()
    return {"id": id, "feedback": fb.feedback, "actualizado": True}

# 5. Senuelos
@app.get("/api/senuelos")
def list_senuelos(tenant: Optional[str] = Query(None)):
    query = "SELECT * FROM senuelos"
    params = []
    if tenant:
        query += " WHERE tenant = %s"
        params.append(tenant)
    query += " ORDER BY ts_inicio DESC;"
    with get_db_connection() as conn:
        with conn.cursor() as cur:
            cur.execute(query, params)
            rows = cur.fetchall()
            return [dict(r) for r in rows]

# 6. Métricas
@app.get("/api/metricas/{tenant}")
def get_metricas(
    tenant: str,
    desde: Optional[str] = Query(None),
    hasta: Optional[str] = Query(None),
    limit: int = Query(1440, ge=1, le=10000)
):
    query = "SELECT ts, cpu, ram, disco, latencia_ms, errores FROM metricas WHERE tenant = %s"
    params = [tenant]
    if desde:
        query += " AND ts >= %s"
        params.append(desde)
    if hasta:
        query += " AND ts <= %s"
        params.append(hasta)
    query += " ORDER BY ts ASC LIMIT %s"
    params.append(limit)
    
    with get_db_connection() as conn:
        with conn.cursor() as cur:
            cur.execute(query, params)
            rows = cur.fetchall()
            return [dict(r) for r in rows]

# 7. Reprocesar
@app.post("/api/tenants/{id}/reprocesar")
def reprocesar_tenant(id: str, x_access_code: Optional[str] = Header(None)):
    verify_access_code(x_access_code)
    with get_db_connection() as conn:
        with conn.cursor() as cur:
            cur.execute("DELETE FROM alertas WHERE tenant = %s;", (id,))
            cur.execute("DELETE FROM senuelos WHERE tenant = %s;", (id,))
            cur.execute("DELETE FROM detector_estado WHERE tenant = %s;", (id,))
            conn.commit()
    return {"tenant": id, "status": "reiniciado", "mensaje": "El worker procesará este tenant desde el inicio."}
