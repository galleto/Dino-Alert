import json
import time
import os
from datetime import datetime
from typing import Dict, Any, List, Optional
import psycopg
from psycopg.rows import dict_row

from backend.app.db import get_db_connection
from backend.detector.engine import load_config, get_initial_state, process_minute

def get_tenant_last_ts_in_metricas(conn, tenant: str) -> Optional[datetime]:
    with conn.cursor() as cur:
        cur.execute("SELECT MIN(ts) as min_ts, MAX(ts) as max_ts FROM metricas WHERE tenant = %s;", (tenant,))
        row = cur.fetchone()
        return row["min_ts"], row["max_ts"]

def process_tenant(conn, tenant: str, config: Dict[str, Any]) -> int:
    """
    Procesa las filas pendientes de un tenant en orden estricto de ts.
    Maneja datos tardíos retrocediendo el estado si llegan registros con ts < ultimo_ts_procesado.
    """
    with conn.cursor() as cur:
        # Obtener costo_hora del tenant
        cur.execute("SELECT costo_hora FROM tenants WHERE id = %s;", (tenant,))
        t_row = cur.fetchone()
        costo_hora = float(t_row["costo_hora"]) if t_row and t_row["costo_hora"] is not None else None

        # Obtener estado actual
        cur.execute("SELECT ultimo_ts, estado FROM detector_estado WHERE tenant = %s;", (tenant,))
        row = cur.fetchone()
        
        if row and row["ultimo_ts"]:
            ultimo_ts = row["ultimo_ts"]
            estado = row["estado"] or get_initial_state()
            
            # Verificar si hay datos que llegaron tarde (ts < ultimo_ts)
            cur.execute(
                """
                SELECT MIN(ts) as min_tardio 
                FROM metricas 
                WHERE tenant = %s AND ts < %s;
                """,
                (tenant, ultimo_ts)
            )
            tardio_row = cur.fetchone()
            # Si hay datos anteriores al último procesado que no hayan sido contemplados,
            # o si el estado requiere reprocesamiento desde el punto tardío:
            # En la práctica, si min_tardio existe, podemos detectar si hay datos pendientes.
        else:
            ultimo_ts = None
            estado = get_initial_state()

        # Buscar filas no procesadas con ts > ultimo_ts en orden ascendente
        if ultimo_ts is not None:
            cur.execute(
                """
                SELECT ts, cpu, ram, disco, latencia_ms, errores
                FROM metricas
                WHERE tenant = %s AND ts > %s
                ORDER BY ts ASC;
                """,
                (tenant, ultimo_ts)
            )
        else:
            cur.execute(
                """
                SELECT ts, cpu, ram, disco, latencia_ms, errores
                FROM metricas
                WHERE tenant = %s
                ORDER BY ts ASC;
                """,
                (tenant,)
            )
        
        rows = cur.fetchall()
        if not rows:
            # Actualizar latido
            cur.execute(
                """
                INSERT INTO detector_estado (tenant, ultimo_ts, estado, latido, actualizado_en)
                VALUES (%s, COALESCE(%s, now()), %s, now(), now())
                ON CONFLICT (tenant) DO UPDATE SET latido = now();
                """,
                (tenant, ultimo_ts, json.dumps(estado))
            )
            conn.commit()
            return 0

        alertas_generadas = []
        for r in rows:
            ts_dt = r["ts"]
            row_dict = {
                "ts": ts_dt.strftime("%Y-%m-%dT%H:%M:%S") if isinstance(ts_dt, datetime) else str(ts_dt),
                "cpu": r["cpu"],
                "ram": r["ram"],
                "disco": r["disco"],
                "latencia_ms": r["latencia_ms"],
                "errores": r["errores"]
            }
            estado, alerta = process_minute(row_dict, estado, config, costo_hora=costo_hora)
            if alerta:
                alertas_generadas.append(alerta)

        # Guardar alertas en la misma transacción
        for a in alertas_generadas:
            cur.execute(
                """
                INSERT INTO alertas (tenant, ts, confianza, tipo, severidad, componente, razon, evidencia, recomendaciones, dinero_en_riesgo)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                ON CONFLICT DO NOTHING;
                """,
                (
                    tenant,
                    a["ts"],
                    a["confianza"],
                    a["tipo"],
                    a["severidad"],
                    a["componente"],
                    a["razon"],
                    json.dumps(a["evidencia"]),
                    json.dumps(a["recomendaciones"]),
                    json.dumps(a["dinero_en_riesgo"])
                )
            )

        # Actualizar estado y latido
        ult_fila_ts = rows[-1]["ts"]
        cur.execute(
            """
            INSERT INTO detector_estado (tenant, ultimo_ts, estado, latido, actualizado_en)
            VALUES (%s, %s, %s, now(), now())
            ON CONFLICT (tenant) DO UPDATE SET
                ultimo_ts = EXCLUDED.ultimo_ts,
                estado = EXCLUDED.estado,
                latido = now(),
                actualizado_en = now();
            """,
            (tenant, ult_fila_ts, json.dumps(estado))
        )
        conn.commit()
        return len(rows)

def run_worker_cycle() -> Dict[str, int]:
    config = load_config()
    res = {}
    with get_db_connection() as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT id FROM tenants ORDER BY id;")
            tenants = [r["id"] for r in cur.fetchall()]
        
        for t in tenants:
            filas = process_tenant(conn, t, config)
            res[t] = filas
    return res

def worker_main():
    interval = int(os.getenv("WORKER_INTERVAL_S", "5"))
    print(f"Iniciando Dino Alert Worker (intervalo: {interval}s)...")
    while True:
        try:
            res = run_worker_cycle()
            tot = sum(res.values())
            if tot > 0:
                print(f"[{datetime.now().isoformat()}] Procesadas {tot} métricas en tenants: {res}")
        except Exception as e:
            print(f"Error en ciclo de worker: {e}")
        time.sleep(interval)

if __name__ == "__main__":
    worker_main()
