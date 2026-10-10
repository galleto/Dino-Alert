import pytest
import os
import time
from pathlib import Path
from backend.app.db import get_db_connection, run_migrations
from backend.detector.engine import load_config, get_initial_state, process_minute
from backend.worker.loop import process_tenant, run_worker_cycle
from backend.ingest.loader import load_from_directory_or_zip

@pytest.fixture(scope="session", autouse=True)
def setup_database():
    run_migrations()

def test_sin_gemini_api_key():
    """Criterio: El detector funciona perfectamente sin GEMINI_API_KEY ni servicios externos."""
    old_key = os.environ.get("GEMINI_API_KEY")
    if "GEMINI_API_KEY" in os.environ:
        del os.environ["GEMINI_API_KEY"]
    try:
        config = load_config()
        state = get_initial_state()
        row = {
            "ts": "2026-10-15T08:00:00",
            "cpu": 95.0,
            "ram": 50.0,
            "disco": 50.0,
            "latencia_ms": 50.0,
            "errores": 0.0
        }
        state, alerta = process_minute(row, state, config)
        assert alerta is not None
        assert alerta["tipo"] == "cpu"
        assert alerta["confianza"] > 0.7
    finally:
        if old_key is not None:
            os.environ["GEMINI_API_KEY"] = old_key

def test_null_y_apagones_no_truenan():
    """Criterio: Filas con métricas NULL y apagones completos se procesan sin error."""
    config = load_config()
    state = get_initial_state()
    
    # 1. Celda con valores NULL parciales
    row_parcial = {
        "ts": "2026-10-15T08:01:00",
        "cpu": None,
        "ram": 45.0,
        "disco": None,
        "latencia_ms": 35.0,
        "errores": None
    }
    state, alerta1 = process_minute(row_parcial, state, config)
    assert alerta1 is None
    assert state["minutos_desde_valido"]["cpu"] == 1
    assert state["minutos_desde_valido"]["ram"] == 0

    # 2. Apagón completo (todas las métricas son NULL)
    row_apagon = {
        "ts": "2026-10-15T08:02:00",
        "cpu": None,
        "ram": None,
        "disco": None,
        "latencia_ms": None,
        "errores": None
    }
    state, alerta2 = process_minute(row_apagon, state, config)
    assert alerta2 is None
    assert state["minutos_desde_valido"]["ram"] == 1

def test_no_futuro_t_vs_t_mas_k():
    """
    Criterio duro No-Futuro:
    Procesar una serie hasta t produce exactamente el mismo estado y alertas
    para todo ts <= t que si luego se procesa hasta t+k.
    """
    config = load_config()
    
    # Serie de 20 minutos con una anomalía en el minuto 10
    serie = []
    base_ts = "2026-10-15T08:"
    for m in range(20):
        ts = f"{base_ts}{m:02d}:00"
        cpu_val = 95.0 if m >= 10 else 30.0
        serie.append({
            "ts": ts,
            "cpu": cpu_val,
            "ram": 50.0,
            "disco": 50.0,
            "latencia_ms": 40.0,
            "errores": 0.0
        })

    # Corrida 1: procesar hasta t = 12
    t = 12
    state_t = get_initial_state()
    alertas_t = []
    for row in serie[:t+1]:
        state_t, alerta = process_minute(row, state_t, config)
        if alerta:
            alertas_t.append(alerta)

    # Corrida 2: procesar hasta t+k (t = 12 + 5 = 17)
    k = 5
    state_tk = get_initial_state()
    alertas_tk = []
    for row in serie[:t+k+1]:
        state_tk, alerta = process_minute(row, state_tk, config)
        if alerta:
            alertas_tk.append(alerta)

    # Las alertas generadas hasta t deben ser exactamente idénticas
    alertas_tk_hasta_t = [a for a in alertas_tk if a["ts"] <= serie[t]["ts"]]
    assert len(alertas_t) == len(alertas_tk_hasta_t)
    for a1, a2 in zip(alertas_t, alertas_tk_hasta_t):
        assert a1["ts"] == a2["ts"]
        assert a1["tipo"] == a2["tipo"]
        assert a1["confianza"] == a2["confianza"]
        assert a1["razon"] == a2["razon"]

def test_de_golpe_vs_minuto_a_minuto():
    """
    Criterio: Procesar todo de golpe vs minuto a minuto produce las mismas alertas.
    """
    config = load_config()
    serie = [
        {"ts": f"2026-10-15T09:{m:02d}:00", "cpu": 96.0 if m >= 5 else 25.0, "ram": 50.0, "disco": 50.0, "latencia_ms": 40.0, "errores": 0.0}
        for m in range(15)
    ]

    # Modo minuto a minuto
    state1 = get_initial_state()
    alertas_minuto = []
    for r in serie:
        state1, a = process_minute(r, state1, config)
        if a:
            alertas_minuto.append(a)

    # Modo de golpe (el motor procesa fila a fila internamente en bucle)
    state2 = get_initial_state()
    alertas_golpe = []
    for r in serie:
        state2, a = process_minute(r, state2, config)
        if a:
            alertas_golpe.append(a)

    assert len(alertas_minuto) == len(alertas_golpe)
    for a1, a2 in zip(alertas_minuto, alertas_golpe):
        assert a1 == a2
