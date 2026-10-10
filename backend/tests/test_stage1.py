import pytest
import os
import psycopg
from pathlib import Path
from fastapi.testclient import TestClient
from backend.app.main import app
from backend.app.db import get_db_connection, run_migrations
from backend.ingest.parser import assert_not_solucion, parse_metricas_csv
from backend.ingest.loader import load_from_directory_or_zip

@pytest.fixture(scope="session", autouse=True)
def setup_database():
    run_migrations()

client = TestClient(app)

def test_guard_solucion():
    """Criterio: Guarda de _solucion rechaza rutas prohibidas."""
    with pytest.raises(ValueError, match="_solucion"):
        assert_not_solucion("data/_solucion/etiquetas.csv")
    
    with pytest.raises(ValueError, match="_solucion"):
        assert_not_solucion("/tmp/path/_solucion/sub")

def test_api_health():
    """Criterio: /api/health responde 200 y status ok."""
    resp = client.get("/api/health")
    assert resp.status_code == 200
    data = resp.json()
    assert data["status"] == "ok"
    assert data["db"] == "connected"

def test_load_corrida_01():
    """Criterio: Ingesta de corrida_01 con recuentos correctos y NULLs donde había vacíos."""
    corrida_path = Path("zikit-dataset-main/data/corridas/corrida_01")
    if not corrida_path.exists():
        pytest.skip("corrida_01 no encontrada en la ruta especificada")
    
    stats = load_from_directory_or_zip(corrida_path)
    assert stats["metricas_count"] > 0
    assert len(stats["tenants"]) == 4

    # Verificar que hay NULLs en la base
    with get_db_connection() as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT COUNT(*) as n FROM metricas WHERE cpu IS NULL OR ram IS NULL OR latencia_ms IS NULL;")
            null_count = cur.fetchone()["n"]
            assert null_count > 0, "Debe haber registros con métricas NULL"

def test_insert_invented_tenant_visible_in_api():
    """Criterio: INSERT manual de tenant inventado visible en la API."""
    tenant_id = "tenant_test_juez_99"
    with get_db_connection() as conn:
        with conn.cursor() as cur:
            cur.execute(
                """
                INSERT INTO tenants (id, nombre, zona_horaria, idioma, moneda, costo_hora, contexto_md)
                VALUES (%s, 'Empresa de Prueba Juez', 'America/Mexico_City', 'es', 'MXN', 5000.0, 'Contexto test')
                ON CONFLICT (id) DO NOTHING;
                """,
                (tenant_id,)
            )
            conn.commit()

    resp = client.get("/api/tenants")
    assert resp.status_code == 200
    tenants = resp.json()
    ids = [t["id"] for t in tenants]
    assert tenant_id in ids

def test_export_alertas_format():
    """Criterio: Exportación CSV de alertas cumple formato."""
    with get_db_connection() as conn:
        with conn.cursor() as cur:
            cur.execute(
                """
                INSERT INTO alertas (tenant, ts, confianza, tipo, razon)
                VALUES ('tenant_test_juez_99', '2026-10-15 10:00:00', 0.850, 'disco', 'Alerta de prueba')
                ON CONFLICT DO NOTHING;
                """
            )
            conn.commit()

    resp = client.get("/api/alertas/export?tenant=tenant_test_juez_99")
    assert resp.status_code == 200
    csv_text = resp.text
    lines = [line.strip() for line in csv_text.strip().splitlines() if line.strip()]
    assert lines[0] == "tenant,timestamp,confianza,tipo"
    assert "tenant_test_juez_99,2026-10-15T10:00:00,0.850,disco" in lines[1]
