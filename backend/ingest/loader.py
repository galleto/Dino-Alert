import zipfile
import tempfile
from pathlib import Path
from typing import Dict, Any, List, Optional
import psycopg
from backend.app.db import get_db_connection
from backend.ingest.parser import (
    assert_not_solucion,
    parse_metricas_csv,
    parse_logs_md,
    parse_contexto_md,
)

def ensure_tenant_exists(conn, tenant_id: str, nombre: Optional[str] = None, contexto_md: Optional[str] = None):
    with conn.cursor() as cur:
        cur.execute(
            """
            INSERT INTO tenants (id, nombre, contexto_md)
            VALUES (%s, %s, %s)
            ON CONFLICT (id) DO UPDATE
            SET contexto_md = COALESCE(EXCLUDED.contexto_md, tenants.contexto_md)
            """,
            (tenant_id, nombre or tenant_id.capitalize(), contexto_md)
        )

def insert_metricas_batch(conn, rows: List[Dict[str, Any]]):
    if not rows:
        return
    with conn.cursor() as cur:
        cur.executemany(
            """
            INSERT INTO metricas (tenant, ts, cpu, ram, disco, latencia_ms, errores)
            VALUES (%(tenant)s, %(ts)s, %(cpu)s, %(ram)s, %(disco)s, %(latencia_ms)s, %(errores)s)
            ON CONFLICT (tenant, ts) DO NOTHING
            """,
            rows
        )

def insert_logs_batch(conn, rows: List[Dict[str, Any]]):
    if not rows:
        return
    with conn.cursor() as cur:
        cur.executemany(
            """
            INSERT INTO logs (tenant, ts, fuente, nivel, mensaje)
            VALUES (%(tenant)s, %(ts)s, %(fuente)s, %(nivel)s, %(mensaje)s)
            """,
            rows
        )

def load_from_directory_or_zip(
    input_path: str | Path,
    emit_sql_path: Optional[str | Path] = None
) -> Dict[str, Any]:
    assert_not_solucion(input_path)
    path = Path(input_path)
    if not path.exists():
        raise FileNotFoundError(f"Ruta no encontrada: {input_path}")

    stats = {
        "tenants": set(),
        "metricas_count": 0,
        "logs_count": 0,
        "warnings": []
    }

    sql_statements = []

    def process_dir(dir_path: Path):
        nonlocal sql_statements
        assert_not_solucion(dir_path)
        
        # 1. Buscar todos_metricas.csv en la raíz del dir
        todos_csv = dir_path / "todos_metricas.csv"
        if todos_csv.exists():
            rows = []
            for r in parse_metricas_csv(todos_csv):
                stats["tenants"].add(r["tenant"])
                rows.append(r)
            
            with get_db_connection() as conn:
                for t in stats["tenants"]:
                    ensure_tenant_exists(conn, t)
                insert_metricas_batch(conn, rows)
                conn.commit()
            stats["metricas_count"] += len(rows)
            
            if emit_sql_path:
                for r in rows[:100]:  # muestra en SQL
                    sql_statements.append(
                        f"INSERT INTO metricas (tenant, ts, cpu, ram, disco, latencia_ms, errores) "
                        f"VALUES ('{r['tenant']}', '{r['ts']}', {r['cpu'] if r['cpu'] is not None else 'NULL'}, "
                        f"{r['ram'] if r['ram'] is not None else 'NULL'}, {r['disco'] if r['disco'] is not None else 'NULL'}, "
                        f"{r['latencia_ms'] if r['latencia_ms'] is not None else 'NULL'}, "
                        f"{r['errores'] if r['errores'] is not None else 'NULL'}) ON CONFLICT DO NOTHING;\n"
                    )

        # 2. Subdirectorios por tenant
        for sub in dir_path.iterdir():
            if sub.is_dir() and not sub.name.startswith((".", "_")):
                tenant_id = sub.name
                stats["tenants"].add(tenant_id)
                contexto_file = sub / "contexto.md"
                contexto_content = parse_contexto_md(contexto_file) if contexto_file.exists() else None
                
                with get_db_connection() as conn:
                    ensure_tenant_exists(conn, tenant_id, contexto_md=contexto_content)
                    conn.commit()

                # metricas.csv
                metricas_file = sub / "metricas.csv"
                if metricas_file.exists() and not todos_csv.exists():
                    rows = list(parse_metricas_csv(metricas_file, default_tenant=tenant_id))
                    with get_db_connection() as conn:
                        insert_metricas_batch(conn, rows)
                        conn.commit()
                    stats["metricas_count"] += len(rows)

                # logs.md
                logs_file = sub / "logs.md"
                if logs_file.exists():
                    log_rows = list(parse_logs_md(logs_file, tenant=tenant_id))
                    with get_db_connection() as conn:
                        insert_logs_batch(conn, log_rows)
                        conn.commit()
                    stats["logs_count"] += len(log_rows)

    if path.is_file() and path.suffix.lower() == ".zip":
        with tempfile.TemporaryDirectory() as tmpdir:
            tmp_path = Path(tmpdir)
            with zipfile.ZipFile(path, 'r') as zip_ref:
                for member in zip_ref.namelist():
                    assert_not_solucion(member)
                zip_ref.extractall(tmp_path)
            process_dir(tmp_path)
    elif path.is_dir():
        process_dir(path)
    else:
        raise ValueError(f"Formato no soportado: {input_path}")

    if emit_sql_path and sql_statements:
        Path(emit_sql_path).write_text("".join(sql_statements), encoding="utf-8")

    stats["tenants"] = list(stats["tenants"])
    return stats
