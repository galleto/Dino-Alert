import os
import psycopg
from psycopg.rows import dict_row
from pathlib import Path

DEFAULT_DATABASE_URL = "postgresql://dinoalert:dinoalert@localhost:5432/dinoalert"

def get_database_url() -> str:
    return os.getenv("DATABASE_URL", DEFAULT_DATABASE_URL)

def get_db_connection():
    return psycopg.connect(get_database_url(), row_factory=dict_row)

def run_migrations():
    """Ejecuta el archivo 001_init.sql de manera idempotente."""
    migration_file = Path(__file__).resolve().parent.parent / "migrations" / "001_init.sql"
    if not migration_file.exists():
        raise FileNotFoundError(f"Archivo de migración no encontrado en: {migration_file}")
    
    sql_script = migration_file.read_text(encoding="utf-8")
    with get_db_connection() as conn:
        with conn.cursor() as cur:
            cur.execute(sql_script)
        conn.commit()
    print("Migraciones ejecutadas exitosamente.")

def check_db_health() -> dict:
    try:
        with get_db_connection() as conn:
            with conn.cursor() as cur:
                cur.execute("SELECT 1 as ok;")
                cur.execute("SELECT EXISTS (SELECT 1 FROM pg_extension WHERE extname = 'timescaledb') as has_timescale;")
                row = cur.fetchone()
                has_timescale = row["has_timescale"] if row else False
        return {"status": "ok", "db": "connected", "timescaledb": bool(has_timescale)}
    except Exception as e:
        return {"status": "error", "db": "disconnected", "error": str(e), "timescaledb": False}
