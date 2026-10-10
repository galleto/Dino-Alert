import csv
import re
from pathlib import Path
from typing import Generator, Dict, Any, List, Optional, Tuple

def assert_not_solucion(path: str | Path):
    path_str = str(path)
    if "_solucion" in path_str:
        raise ValueError(f"Acceso estrictamente prohibido a rutas con '_solucion': {path_str}")

def parse_float_safe(val: Optional[str]) -> Optional[float]:
    if val is None:
        return None
    s = val.strip()
    if s == "" or s.lower() in ("null", "none", "nan"):
        return None
    try:
        return float(s)
    except ValueError:
        return None

def parse_int_safe(val: Optional[str]) -> Optional[float]:
    f = parse_float_safe(val)
    return f

def parse_metricas_csv(
    file_path: str | Path,
    default_tenant: Optional[str] = None
) -> Generator[Dict[str, Any], None, None]:
    assert_not_solucion(file_path)
    path = Path(file_path)
    if not path.exists():
        raise FileNotFoundError(f"Archivo no encontrado: {file_path}")

    with path.open("r", encoding="utf-8", errors="replace") as f:
        reader = csv.DictReader(f)
        for row in reader:
            tenant = row.get("tenant") or default_tenant
            if not tenant:
                raise ValueError("Fila de métrica sin tenant especificado ni default_tenant")
            ts = row.get("timestamp")
            if not ts or not ts.strip():
                continue
            
            yield {
                "tenant": tenant.strip(),
                "ts": ts.strip(),
                "cpu": parse_float_safe(row.get("cpu")),
                "ram": parse_float_safe(row.get("ram")),
                "disco": parse_float_safe(row.get("disco")),
                "latencia_ms": parse_float_safe(row.get("latencia_ms")),
                "errores": parse_float_safe(row.get("errores")),
            }

def parse_logs_md(
    file_path: str | Path,
    tenant: str
) -> Generator[Dict[str, Any], None, None]:
    assert_not_solucion(file_path)
    path = Path(file_path)
    if not path.exists():
        raise FileNotFoundError(f"Archivo no encontrado: {file_path}")

    content = path.read_text(encoding="utf-8", errors="replace")
    
    # Expresión regular para encontrar bloques de logs
    # Formato: ## fuente \n\n ```text \n (lineas) \n ```
    sections = re.findall(r"##\s+([a-zA-Z0-9_\-]+)\s+```(?:text)?\s*(.*?)\s*```", content, re.DOTALL)
    
    log_line_regex = re.compile(r"^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?)\s+([A-Z]+)\s+(.*)$")
    
    for fuente, block in sections:
        fuente_limpia = fuente.strip()
        for line in block.splitlines():
            line = line.strip()
            if not line:
                continue
            match = log_line_regex.match(line)
            if match:
                ts, nivel, msg = match.groups()
                yield {
                    "tenant": tenant,
                    "ts": ts,
                    "fuente": fuente_limpia,
                    "nivel": nivel,
                    "mensaje": msg.strip()
                }
            else:
                # Línea sin nivel estándar
                parts = line.split(" ", 2)
                if len(parts) >= 2:
                    ts = parts[0]
                    yield {
                        "tenant": tenant,
                        "ts": ts,
                        "fuente": fuente_limpia,
                        "nivel": "INFO",
                        "mensaje": line[len(ts):].strip()
                    }

def parse_contexto_md(file_path: str | Path) -> str:
    assert_not_solucion(file_path)
    path = Path(file_path)
    if not path.exists():
        return ""
    return path.read_text(encoding="utf-8", errors="replace")
