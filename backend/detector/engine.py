import math
import yaml
from pathlib import Path
from datetime import datetime, timedelta
from typing import Dict, Any, List, Optional, Tuple

METRICAS = ("cpu", "ram", "disco", "latencia_ms", "errores")

def load_config() -> Dict[str, Any]:
    cfg_file = Path(__file__).resolve().parent.parent / "config" / "detector.yaml"
    if cfg_file.exists():
        return yaml.safe_load(cfg_file.read_text(encoding="utf-8"))
    return {
        "warmup_horas": 6,
        "cooldown_min": 180,
        "umbral_vigilar": 0.50,
        "umbral_alerta": 0.70,
        "reescalar_delta": 0.15,
        "abs_cpu_umbral": 92.0,
        "abs_ram_umbral": 92.0,
        "abs_disco_umbral": 92.0,
        "abs_errores_umbral": 10.0,
        "abs_latencia_mult": 4.5,
        "mad_factor": 1.4826,
        "epsilon": 1e-4,
        "z_alto": 3.0,
    }

def calculate_median(values: List[float]) -> float:
    if not values:
        return 0.0
    s = sorted(values)
    n = len(s)
    mid = n // 2
    if n % 2 == 1:
        return s[mid]
    return (s[mid - 1] + s[mid]) / 2.0

def calculate_mad(values: List[float], med: float) -> float:
    if not values:
        return 0.0
    devs = [abs(x - med) for x in values]
    return calculate_median(devs)

def get_initial_state() -> Dict[str, Any]:
    return {
        "primer_ts": None,
        "ultimo_ts": None,
        "ultimo_val_valido": {m: None for m in METRICAS},
        "minutos_desde_valido": {m: 0 for m in METRICAS},
        # Historial reciente de métricas para mediana/MAD rápida (últimos 360 min)
        "historial_reciente": {m: [] for m in METRICAS},
        # Historial por hora del día: {hora_str: {m: [valores]}}
        "historial_por_hora": {str(h): {m: [] for m in METRICAS} for h in range(24)},
        # Estado de alertas
        "alerta_activa": None, # dict con datos de la alerta activa
        "cooldown_hasta": None,
        "estado_tenant": "normal", # "normal", "vigilando", "alerta", "enfriamiento"
    }

def process_minute(
    row: Dict[str, Any],
    state: Dict[str, Any],
    config: Dict[str, Any],
    costo_hora: Optional[float] = None
) -> Tuple[Dict[str, Any], Optional[Dict[str, Any]]]:
    """
    Procesa un minuto de telemetría de forma estrictamente incremental (ts <= t).
    Devuelve (nuevo_estado, alerta_generada_o_actualizada)
    """
    ts_str = row["ts"]
    ts = datetime.fromisoformat(ts_str) if isinstance(ts_str, str) else ts_str
    
    if state["primer_ts"] is None:
        state["primer_ts"] = ts_str
    state["ultimo_ts"] = ts_str

    # 5.2 Preprocesamiento (NULL nunca es 0)
    es_apagon = True
    metricas_minuto = {}
    for m in METRICAS:
        val = row.get(m)
        if val is not None:
            es_apagon = False
            state["ultimo_val_valido"][m] = float(val)
            state["minutos_desde_valido"][m] = 0
            metricas_minuto[m] = float(val)
        else:
            state["minutos_desde_valido"][m] += 1
            metricas_minuto[m] = None

    # Guardar en historial reciente y por hora si hay valor válido
    hora_str = str(ts.hour)
    for m, val in metricas_minuto.items():
        if val is not None:
            hr = state["historial_reciente"][m]
            hr.append(val)
            if len(hr) > 360: # mantener últimas 6 horas
                hr.pop(0)
            
            hh = state["historial_por_hora"][hora_str][m]
            hh.append(val)
            if len(hh) > 1440: # limitar memoria
                hh.pop(0)

    # Verificar si está en calentamiento
    primer_dt = datetime.fromisoformat(state["primer_ts"]) if isinstance(state["primer_ts"], str) else state["primer_ts"]
    minutos_transcurridos = int((ts - primer_dt).total_seconds() // 60)
    en_calentamiento = minutos_transcurridos < (config["warmup_horas"] * 60)

    # 5.3 Línea base
    z_scores = {}
    medianas = {}
    for m in METRICAS:
        val = metricas_minuto[m]
        if val is None:
            z_scores[m] = 0.0
            continue

        valores_hora = state["historial_por_hora"][hora_str][m]
        # Si hay suficiente historia por hora (al menos 120 puntos = 2 horas acumuladas de esa hora)
        if len(valores_hora) >= 120:
            med = calculate_median(valores_hora)
            mad = calculate_mad(valores_hora, med)
        else:
            # Fallback últimas 6 horas
            valores_rec = state["historial_reciente"][m]
            med = calculate_median(valores_rec)
            mad = calculate_mad(valores_rec, med)

        medianas[m] = med
        denom = (config["mad_factor"] * mad) + config["epsilon"]
        z = (val - med) / denom
        z_scores[m] = max(0.0, z)

    # 5.5 Reglas absolutas (Señales de severidad inmediata)
    violaciones_abs = []
    
    # 1. CPU
    cpu_val = metricas_minuto.get("cpu")
    if cpu_val is not None and cpu_val >= config["abs_cpu_umbral"]:
        violaciones_abs.append(("cpu", f"Uso de CPU crítico en {cpu_val:.1f}% (umbral {config['abs_cpu_umbral']}%)", 0.85, "servidor"))

    # 2. RAM
    ram_val = metricas_minuto.get("ram")
    if ram_val is not None and ram_val >= config["abs_ram_umbral"]:
        violaciones_abs.append(("memoria", f"Uso de memoria RAM crítico en {ram_val:.1f}% (umbral {config['abs_ram_umbral']}%)", 0.88, "servidor"))

    # 3. Disco
    disco_val = metricas_minuto.get("disco")
    if disco_val is not None and disco_val >= config["abs_disco_umbral"]:
        violaciones_abs.append(("disco", f"Uso de disco crítico en {disco_val:.1f}% (umbral {config['abs_disco_umbral']}%)", 0.90, "servidor"))

    # 4. Errores sostenidos
    err_val = metricas_minuto.get("errores")
    if err_val is not None and err_val >= config["abs_errores_umbral"]:
        violaciones_abs.append(("errores_app", f"Tasa de errores elevada: {err_val:.0f} errores/min (umbral {config['abs_errores_umbral']})", 0.80, "aplicacion"))

    # 5. Latencia multiplicativa
    lat_val = metricas_minuto.get("latencia_ms")
    med_lat = medianas.get("latencia_ms", 0.0)
    if lat_val is not None and med_lat > 5.0 and lat_val >= (med_lat * config["abs_latencia_mult"]):
        violaciones_abs.append(("latencia", f"Latencia de respuesta en {lat_val:.0f} ms (supera {config['abs_latencia_mult']}x la mediana de {med_lat:.0f} ms)", 0.78, "aplicacion"))

    # 5.7 Estados y máquina de alertas
    alerta_emitida = None

    # Verificar si está en cooldown
    cooldown_hasta = state.get("cooldown_hasta")
    if cooldown_hasta:
        cd_dt = datetime.fromisoformat(cooldown_hasta) if isinstance(cooldown_hasta, str) else cooldown_hasta
        if ts < cd_dt:
            # Enfriamiento activo
            state["estado_tenant"] = "enfriamiento"
            return state, None

    if violaciones_abs:
        # Elegir la violación más grave
        violaciones_abs.sort(key=lambda x: x[2], reverse=True)
        tipo_dom, razon_dom, conf_dom, comp_dom = violaciones_abs[0]

        evidencias = [v[1] for v in violaciones_abs]
        if es_apagon:
            evidencias.append("Apagón de telemetría concurrente.")

        monto_riesgo = round(costo_hora * 2.0, 2) if costo_hora else None
        dinero_riesgo = {
            "monto": monto_riesgo,
            "moneda": "MXN",
            "supuestos": f"Estimación de 2h de afectación a {costo_hora} MXN/h" if costo_hora else "Costo por hora no configurado"
        }

        alerta_activa = state.get("alerta_activa")
        if not alerta_activa:
            # Nueva alerta
            alerta_emitida = {
                "ts": ts_str,
                "confianza": round(conf_dom, 3),
                "tipo": tipo_dom,
                "severidad": "alta",
                "componente": comp_dom,
                "razon": razon_dom,
                "evidencia": evidencias,
                "recomendaciones": [
                    "Identificar procesos que consumen recursos anormalmente.",
                    "Verificar logs del componente afectado."
                ],
                "dinero_en_riesgo": dinero_riesgo,
            }
            state["alerta_activa"] = {
                "tipo": tipo_dom,
                "confianza": conf_dom,
                "ts_inicio": ts_str,
                "ultimo_ts": ts_str
            }
            state["estado_tenant"] = "alerta"
        else:
            # Ya hay alerta activa: re-escalar solo si la confianza sube al menos reescalar_delta
            if (conf_dom - alerta_activa["confianza"]) >= config["reescalar_delta"]:
                alerta_emitida = {
                    "ts": ts_str,
                    "confianza": round(conf_dom, 3),
                    "tipo": tipo_dom,
                    "severidad": "alta",
                    "componente": comp_dom,
                    "razon": f"Escalamiento: {razon_dom}",
                    "evidencia": evidencias,
                    "recomendaciones": [
                        "Intervención urgente requerida.",
                        "Revisar recursos y reiniciar servicios críticos si es necesario."
                    ],
                    "dinero_en_riesgo": dinero_riesgo,
                }
                state["alerta_activa"]["confianza"] = conf_dom
                state["alerta_activa"]["ultimo_ts"] = ts_str
    else:
        # No hay violaciones
        if state.get("alerta_activa"):
            # Si pasaron más de 30 minutos sin señales, cerrar alerta y poner cooldown
            alerta_activa = state["alerta_activa"]
            ult_ts = datetime.fromisoformat(alerta_activa["ultimo_ts"]) if isinstance(alerta_activa["ultimo_ts"], str) else alerta_activa["ultimo_ts"]
            if (ts - ult_ts).total_seconds() >= 1800:
                state["alerta_activa"] = None
                state["cooldown_hasta"] = (ts + timedelta(minutes=config["cooldown_min"])).isoformat()
                state["estado_tenant"] = "enfriamiento"
        else:
            state["estado_tenant"] = "normal"

    return state, alerta_emitida
