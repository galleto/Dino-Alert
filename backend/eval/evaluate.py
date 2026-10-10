import os
import json
from datetime import datetime, timedelta
from pathlib import Path
from typing import Dict, Any, List, Tuple

from backend.eval.labels import get_incident_labels
from backend.ingest.parser import parse_metricas_csv
from backend.detector.engine import load_config, get_initial_state, process_minute

# MAX_ANTICIPACION = 48 horas (2880 minutos)
MAX_ANTICIPACION_MIN = 48 * 60

def evaluate_run(corrida_path: Path, config: Dict[str, Any]) -> Dict[str, Any]:
    """
    Ejecuta el detector sobre una corrida y compara contra las etiquetas reales.
    """
    labels = get_incident_labels(corrida_path)
    todos_csv = corrida_path / "todos_metricas.csv"
    
    # Procesar métricas por tenant
    tenants_data: Dict[str, List[Dict[str, Any]]] = {}
    if todos_csv.exists():
        for r in parse_metricas_csv(todos_csv):
            t = r["tenant"]
            if t not in tenants_data:
                tenants_data[t] = []
            tenants_data[t].append(r)
    else:
        for t_dir in corrida_path.iterdir():
            if t_dir.is_dir() and not t_dir.name.startswith((".", "_")):
                m_csv = t_dir / "metricas.csv"
                if m_csv.exists():
                    tenants_data[t_dir.name] = list(parse_metricas_csv(m_csv, default_tenant=t_dir.name))

    results_by_tenant = {}

    for tenant, rows in tenants_data.items():
        state = get_initial_state()
        alerts = []
        for r in rows:
            state, a = process_minute(r, state, config)
            if a:
                alerts.append(a)

        tenant_labels = labels.get(tenant, [])
        incidentes_reales = [l for l in tenant_labels if l["es_real"]]
        
        # Comparar alertas contra incidentes
        detectados = 0
        anticipaciones = []
        alertas_despues = 0
        alertas_antes = 0
        falsas_alarmas = 0

        # Para cada incidente real, verificar si hubo alerta en ventana [impacto - 48h, impacto)
        incidentes_cubiertos = set()

        for a in alerts:
            a_ts = datetime.fromisoformat(a["ts"])
            # Buscar si corresponde a algún incidente real
            es_asociada = False
            for idx, inc in enumerate(incidentes_reales):
                inc_ts = datetime.fromisoformat(inc["inicio_incidente"])
                dt_min = (inc_ts - a_ts).total_seconds() / 60.0

                if 0 <= dt_min <= MAX_ANTICIPACION_MIN:
                    # Alerta antes del impacto
                    es_asociada = True
                    incidentes_cubiertos.add(idx)
                    anticipaciones.append(dt_min)
                elif -120 <= dt_min < 0:
                    # Alerta dentro de las 2 horas DESPUÉS del impacto
                    alertas_despues += 1
                    es_asociada = True

            if not es_asociada:
                falsas_alarmas += 1

        results_by_tenant[tenant] = {
            "total_incidentes": len(incidentes_reales),
            "detectados": len(incidentes_cubiertos),
            "falsas_alarmas": falsas_alarmas,
            "alertas_despues": alertas_despues,
            "anticipaciones": anticipaciones,
            "total_alertas": len(alerts)
        }

    return results_by_tenant

def run_evaluation_suite():
    os.environ["EVAL_USE_SOLUCION"] = "true"
    splits_file = Path("eval/splits.json")
    splits = json.loads(splits_file.read_text(encoding="utf-8"))
    config = load_config()

    corridas_dir = Path("zikit-dataset-main/data/corridas")

    report = {}
    for split_name in ("train", "val"):
        print(f"Evaluando split: {split_name} ({len(splits[split_name])} corridas)...")
        split_results = {"por_empresa": {}, "total": {
            "total_incidentes": 0, "detectados": 0, "falsas_alarmas": 0,
            "alertas_despues": 0, "anticipaciones": [], "total_alertas": 0
        }}

        for c_name in splits[split_name]:
            c_path = corridas_dir / c_name
            c_res = evaluate_run(c_path, config)
            
            for tenant, stats in c_res.items():
                if tenant not in split_results["por_empresa"]:
                    split_results["por_empresa"][tenant] = {
                        "total_incidentes": 0, "detectados": 0, "falsas_alarmas": 0,
                        "alertas_despues": 0, "anticipaciones": [], "total_alertas": 0
                    }
                t_acc = split_results["por_empresa"][tenant]
                t_acc["total_incidentes"] += stats["total_incidentes"]
                t_acc["detectados"] += stats["detectados"]
                t_acc["falsas_alarmas"] += stats["falsas_alarmas"]
                t_acc["alertas_despues"] += stats["alertas_despues"]
                t_acc["anticipaciones"].extend(stats["anticipaciones"])
                t_acc["total_alertas"] += stats["total_alertas"]

                tot = split_results["total"]
                tot["total_incidentes"] += stats["total_incidentes"]
                tot["detectados"] += stats["detectados"]
                tot["falsas_alarmas"] += stats["falsas_alarmas"]
                tot["alertas_despues"] += stats["alertas_despues"]
                tot["anticipaciones"].extend(stats["anticipaciones"])
                tot["total_alertas"] += stats["total_alertas"]

        report[split_name] = split_results

    return report
