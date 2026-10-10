import os
import csv
from pathlib import Path
from typing import Dict, List, Any

def get_incident_labels(corrida_dir: Path | str) -> Dict[str, List[Dict[str, Any]]]:
    """
    Único lector de _solucion en todo el sistema.
    Solo se ejecuta si la variable de entorno EVAL_USE_SOLUCION == 'true'.
    Fallback a la solución global de data/_solucion si la corrida particular no la tiene.
    """
    use_sol = os.getenv("EVAL_USE_SOLUCION", "false").lower()
    if use_sol != "true":
        raise PermissionError(
            "Acceso denegado a _solucion: la variable de entorno EVAL_USE_SOLUCION debe ser 'true' para evaluar."
        )

    base = Path(corrida_dir)
    solucion_dir = base / "_solucion"
    if not solucion_dir.exists():
        # Fallback a zikit-dataset-main/data/_solucion
        raiz = base
        while raiz.parent != raiz and raiz.name != "zikit-dataset-main":
            raiz = raiz.parent
        solucion_dir = raiz / "data" / "_solucion"
        if not solucion_dir.exists():
            raise FileNotFoundError(f"Carpeta _solucion no encontrada ni en {base} ni en {solucion_dir}")

    labels_by_tenant = {}
    for tenant_dir in solucion_dir.iterdir():
        if tenant_dir.is_dir():
            tenant = tenant_dir.name
            etiquetas_file = tenant_dir / "etiquetas.csv"
            if not etiquetas_file.exists():
                continue
            
            items = []
            with etiquetas_file.open("r", encoding="utf-8") as f:
                reader = csv.DictReader(f)
                for row in reader:
                    items.append({
                        "inicio_incidente": row["inicio_incidente"].strip(),
                        "tipo": row["tipo"].strip(),
                        "es_real": row["es_real"].strip().lower() == "true"
                    })
            labels_by_tenant[tenant] = items

    return labels_by_tenant
