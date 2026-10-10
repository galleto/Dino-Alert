# SCHEMA.md — Contrato SQL de Dino Alert

PostgreSQL (TimescaleDB) es la única fuente de verdad para el sistema. Los evaluadores y jueces pueden interactuar directamente con la base de datos realizando `INSERT` y `SELECT`.

## 1. Tablas y Columnas

### `tenants`
Empresas registradas en el sistema.
- `id` (TEXT, PK): Identificador único del tenant (ej. `gracko`, `empresa_juez`).
- `nombre` (TEXT, NOT NULL): Nombre legible.
- `zona_horaria` (TEXT, DEFAULT `'America/Mexico_City'`): Zona horaria IANA.
- `idioma` (TEXT, DEFAULT `'es'`): Idioma de comunicación.
- `moneda` (TEXT, DEFAULT `'MXN'`): Código de moneda para impacto financiero.
- `costo_hora` (NUMERIC, NULL): Costo estimado de parada por hora.
- `contexto_md` (TEXT, NULL): Contenido completo del archivo `contexto.md`.
- `creado_en` (TIMESTAMP, DEFAULT `now()`).

### `metricas`
Telemetría minuto a minuto (Hypertable).
- `tenant` (TEXT, PK compuesto, FK -> tenants.id).
- `ts` (TIMESTAMP, PK compuesto): Timestamp exacto de la lectura local sin zona.
- `cpu` (REAL, NULL): Porcentaje de CPU (0.0 a 100.0). NULL si faltante o apagón.
- `ram` (REAL, NULL): Porcentaje de memoria RAM (0.0 a 100.0). NULL si faltante.
- `disco` (REAL, NULL): Porcentaje de disco (0.0 a 100.0). NULL si faltante.
- `latencia_ms` (REAL, NULL): Latencia de respuesta en milisegundos. NULL si faltante.
- `errores` (REAL, NULL): Cantidad de errores en ese minuto. NULL si faltante.

> **Regla de conflicto:** `ON CONFLICT (tenant, ts) DO NOTHING` o actualización de valores no nulos.

### `logs`
Líneas de log de servidores, firewall y aplicaciones.
- `id` (BIGSERIAL, PK).
- `tenant` (TEXT, FK -> tenants.id).
- `ts` (TIMESTAMP): Timestamp del log.
- `fuente` (TEXT): `servidor`, `firewall`, `app` u otra fuente.
- `nivel` (TEXT, NULL): `DEBUG`, `INFO`, `WARN`, `ERROR`.
- `mensaje` (TEXT): Cuerpo del mensaje.

### `alertas`
Alertas generadas por el detector.
- `id` (BIGSERIAL, PK).
- `tenant` (TEXT, FK -> tenants.id).
- `ts` (TIMESTAMP): Minuto en que se generó la alerta.
- `confianza` (REAL): Nivel de confianza entre 0.0 y 1.0 (3 decimales).
- `tipo` (TEXT): Tipo genérico (`disco`, `memoria`, `cpu`, `latencia`, `errores_app`, `red_seguridad`, etc.).
- `severidad` (TEXT): `baja`, `media`, `alta`.
- `componente` (TEXT): `servidor`, `aplicacion`, `red`, etc.
- `razon` (TEXT): Justificación explicativa de la alerta.
- `evidencia` (JSONB): Lista de observaciones y métricas con anomalía.
- `recomendaciones` (JSONB): Pasos sugeridos de diagnóstico/mitigación.
- `dinero_en_riesgo` (JSONB): Objeto `{monto: number|null, moneda: text, supuestos: text}`.
- `audio_url` (TEXT, NULL): Enlace de voz explicativa (opcional).
- `estado` (TEXT): `activa`, `revision`, `cerrada`.
- `reemplazada_por` (BIGINT, NULL): ID de la alerta que la superó si llegaron datos tardíos.
- `feedback` (TEXT, NULL): `util` o `falsa_alarma`.
- `creada_en` (TIMESTAMP, DEFAULT `now()`).

### `senuelos`
Patrones sospechosos que el detector analizó y descartó como benignos.
- `id` (BIGSERIAL, PK).
- `tenant` (TEXT, FK -> tenants.id).
- `ts_inicio` (TIMESTAMP), `ts_fin` (TIMESTAMP).
- `explicacion` (TEXT): Por qué fue descartado (ej. "Coincide con ventana de respaldo nocturno").
- `evidencia` (JSONB).

---

## 2. Ejemplos de INSERT listos para copiar

### Ejemplo 1: Inserción de un Tenant Nuevo Inventado
```sql
INSERT INTO tenants (id, nombre, zona_horaria, idioma, moneda, costo_hora, contexto_md)
VALUES (
    'clinica_demo',
    'Clínica San Jerónimo',
    'America/Mexico_City',
    'es',
    'MXN',
    3500.00,
    '# Contexto de Clínica San Jerónimo\nAtención médica 24/7. Respaldo de expediente clínico a las 03:00.'
) ON CONFLICT (id) DO NOTHING;
```

### Ejemplo 2: Inserción de Métricas con Celdas NULL y Apagones
```sql
-- Fila 1: Telemetría normal
INSERT INTO metricas (tenant, ts, cpu, ram, disco, latencia_ms, errores)
VALUES ('clinica_demo', '2026-10-15 08:00:00', 32.5, 48.0, 55.1, 45.0, 0.0)
ON CONFLICT (tenant, ts) DO NOTHING;

-- Fila 2: Métrica faltante (celdas NULL en cpu y latencia)
INSERT INTO metricas (tenant, ts, cpu, ram, disco, latencia_ms, errores)
VALUES ('clinica_demo', '2026-10-15 08:01:00', NULL, 48.2, 55.1, NULL, 0.0)
ON CONFLICT (tenant, ts) DO NOTHING;

-- Fila 3: Apagón de telemetría (todas las métricas son NULL)
INSERT INTO metricas (tenant, ts, cpu, ram, disco, latencia_ms, errores)
VALUES ('clinica_demo', '2026-10-15 08:02:00', NULL, NULL, NULL, NULL, NULL)
ON CONFLICT (tenant, ts) DO NOTHING;
```

### Ejemplo 3: Inserción de Logs
```sql
INSERT INTO logs (tenant, ts, fuente, nivel, mensaje) VALUES
('clinica_demo', '2026-10-15 08:01:15', 'servidor', 'INFO', 'snapshot completado en 120 ms'),
('clinica_demo', '2026-10-15 08:02:00', 'app', 'WARN', 'reintento de conexión a base de datos');
```

### Ejemplo 4: Consultar Alertas Generadas
```sql
SELECT id, tenant, ts, confianza, tipo, severidad, razon, dinero_en_riesgo
FROM alertas
WHERE tenant = 'clinica_demo'
ORDER BY ts DESC;
```
