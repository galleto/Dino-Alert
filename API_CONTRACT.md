# API_CONTRACT.md — Contrato de la API REST de Dino Alert

Todos los endpoints retornan JSON estructurado con encabezado `Content-Type: application/json`.
En caso de error, siempre se devuelve una respuesta humana con el formato:
```json
{
  "error": "DESCRIPCION_CORTA",
  "detalle": "Explicación detallada del problema."
}
```

CORS configurado para los orígenes de `CORS_ORIGINS`.
Si `ACCESS_CODE` está configurado en el entorno, las operaciones de escritura (`POST`, `PATCH`, `PUT`) requieren el encabezado:
`X-Access-Code: <ACCESS_CODE>`

---

## 1. Endpoints Base

### `GET /api/health`
Verifica el estado del servicio y la conectividad con la base de datos PostgreSQL/TimescaleDB.
- **Respuesta 200 OK:**
```json
{
  "status": "ok",
  "db": "connected",
  "timescaledb": true,
  "timestamp": "2026-10-15T12:00:00"
}
```

---

## 2. Gestión de Tenants

### `GET /api/tenants`
Lista todos los tenants registrados.
- **Respuesta 200 OK:**
```json
[
  {
    "id": "gracko",
    "nombre": "Gracko Despacho Contable",
    "zona_horaria": "America/Mexico_City",
    "idioma": "es",
    "moneda": "MXN",
    "costo_hora": 2500.0,
    "creado_en": "2026-10-09T22:00:00"
  }
]
```

### `POST /api/tenants`
Registra un nuevo tenant manualmente.
- **Request Body:**
```json
{
  "id": "nueva_empresa",
  "nombre": "Nueva Empresa S.A.",
  "zona_horaria": "America/Mexico_City",
  "idioma": "es",
  "moneda": "MXN",
  "costo_hora": 1500.0,
  "contexto_md": "# Contexto de la empresa..."
}
```
- **Respuesta 201 Created:**
```json
{
  "status": "creado",
  "id": "nueva_empresa"
}
```

---

## 3. Ingesta de Datos

### `POST /api/ingest`
Carga un archivo CSV (`metricas.csv`, `todos_metricas.csv`), `logs.md` o un archivo `.zip` con la estructura del dataset. Tamaño máximo: 200 MB.
- **Content-Type:** `multipart/form-data`
- **Form fields:**
  - `file`: Archivo a cargar.
  - `tenant` (opcional si viene en el zip o en `todos_metricas.csv`).
- **Respuesta 200 OK:**
```json
{
  "status": "completado",
  "filas_metricas": 9200,
  "filas_logs": 1200,
  "tenants_afectados": ["gracko"],
  "advertencias": []
}
```

---

## 4. Alertas y Señuelos

### `GET /api/alertas`
Lista alertas generadas con soporte para filtros y paginación.
- **Query Params:**
  - `tenant` (opcional): Filtrar por tenant.
  - `estado` (opcional): `activa`, `revision`, `cerrada`.
  - `tipo` (opcional): `disco`, `memoria`, etc.
  - `limit` (default: 50), `offset` (default: 0).
- **Respuesta 200 OK:**
```json
{
  "total": 1,
  "alertas": [
    {
      "id": 1,
      "tenant": "gracko",
      "ts": "2026-10-11T21:40:00",
      "confianza": 0.892,
      "tipo": "disco",
      "severidad": "alta",
      "componente": "servidor",
      "razon": "Crecimiento sostenido del volumen de disco /data con tiempo estimado a saturación menor a 12 horas.",
      "evidencia": [
        "disco subió de 58% a 82% en 360 min",
        "WARN en logs: disco /data al 80%"
      ],
      "recomendaciones": [
        "Revisar carpetas temporales en /data",
        "Liberar espacio antes del respaldo nocturno"
      ],
      "dinero_en_riesgo": {
        "monto": 5000.0,
        "moneda": "MXN",
        "supuestos": "2 horas de paro al costo configurado de 2500 MXN/h"
      },
      "audio_url": null,
      "estado": "activa",
      "feedback": null,
      "creada_en": "2026-10-11T21:40:02"
    }
  ]
}
```

### `GET /api/alertas/export`
Exporta las alertas en el formato CSV exacto esperado por el evaluador del reto:
`tenant,timestamp,confianza,tipo`
- **Query Params:**
  - `tenant` (opcional): Filtrar por tenant.
- **Content-Type:** `text/csv; charset=utf-8`
- **Contenido del CSV:**
```csv
tenant,timestamp,confianza,tipo
gracko,2026-10-11T21:40:00,0.892,disco
```

### `PATCH /api/alertas/{id}/feedback`
Envía retroalimentación sobre la calidad de la alerta.
- **Request Body:**
```json
{
  "feedback": "util" // o "falsa_alarma"
}
```
- **Respuesta 200 OK:**
```json
{
  "id": 1,
  "feedback": "util",
  "actualizado": true
}
```

### `GET /api/senuelos`
Lista los eventos que fueron evaluados y descartados como señuelos benignos con su justificación.
- **Query Params:** `tenant` (opcional).
- **Respuesta 200 OK:**
```json
[
  {
    "id": 1,
    "tenant": "gracko",
    "ts_inicio": "2026-10-09T17:00:00",
    "ts_fin": "2026-10-09T19:30:00",
    "explicacion": "Coincide con evento de negocio 'carga masiva de declaraciones' programado en contexto.md",
    "evidencia": {
      "disco_delta": 7.0,
      "cpu_delta": 6.0
    }
  }
]
```

---

## 5. Telemetría y Mantenimiento

### `GET /api/metricas/{tenant}`
Obtiene las métricas de un tenant para un rango de tiempo.
- **Query Params:**
  - `desde` (opcional): Timestamp inicial.
  - `hasta` (opcional): Timestamp final.
  - `limit` (default: 1440).
- **Respuesta 200 OK:**
```json
[
  {
    "ts": "2026-10-08T08:00:00",
    "cpu": 26.3,
    "ram": 53.8,
    "disco": 58.1,
    "latencia_ms": 40.0,
    "errores": 0.0
  }
]
```

### `POST /api/tenants/{id}/reprocesar`
Limpia el estado y alertas de un tenant para procesarlo nuevamente desde el primer minuto.
- **Respuesta 200 OK:**
```json
{
  "tenant": "gracko",
  "status": "reiniciado",
  "mensaje": "El worker procesará este tenant desde el inicio."
}
```
