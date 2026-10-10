-- ============================================================
-- Dino Alert: Migración 001_init.sql (Idempotente)
-- ============================================================

-- Extensión TimescaleDB si está disponible en el entorno
DO $$
BEGIN
    CREATE EXTENSION IF NOT EXISTS timescaledb CASCADE;
EXCEPTION WHEN OTHERS THEN
    RAISE NOTICE 'TimescaleDB no está disponible, usando PostgreSQL estándar.';
END $$;

-- 1. Tenants (Empresas)
CREATE TABLE IF NOT EXISTS tenants (
    id TEXT PRIMARY KEY,
    nombre TEXT NOT NULL,
    zona_horaria TEXT DEFAULT 'America/Mexico_City',
    idioma TEXT DEFAULT 'es',
    moneda TEXT DEFAULT 'MXN',
    costo_hora NUMERIC NULL,
    contexto_md TEXT NULL,
    creado_en TIMESTAMP DEFAULT now()
);

-- 2. Métricas de Telemetría (minuto a minuto)
CREATE TABLE IF NOT EXISTS metricas (
    tenant TEXT NOT NULL,
    ts TIMESTAMP NOT NULL,
    cpu REAL NULL,
    ram REAL NULL,
    disco REAL NULL,
    latencia_ms REAL NULL,
    errores REAL NULL,
    PRIMARY KEY (tenant, ts),
    CONSTRAINT fk_metricas_tenant FOREIGN KEY (tenant) REFERENCES tenants(id) ON DELETE CASCADE
);

-- Convertir a hypertable si TimescaleDB está presente
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM pg_extension WHERE extname = 'timescaledb') THEN
        IF NOT EXISTS (SELECT 1 FROM timescaledb_information.hypertables WHERE hypertable_name = 'metricas') THEN
            PERFORM create_hypertable('metricas', 'ts', if_not_exists => TRUE, migrate_data => TRUE);
        END IF;
    END IF;
EXCEPTION WHEN OTHERS THEN
    RAISE NOTICE 'No se pudo crear hypertable, continuando con tabla estándar.';
END $$;

CREATE INDEX IF NOT EXISTS idx_metricas_tenant_ts ON metricas (tenant, ts DESC);

-- 3. Logs de servidores, firewall y aplicaciones
CREATE TABLE IF NOT EXISTS logs (
    id BIGSERIAL PRIMARY KEY,
    tenant TEXT NOT NULL,
    ts TIMESTAMP NOT NULL,
    fuente TEXT NOT NULL,
    nivel TEXT NULL,
    mensaje TEXT NOT NULL,
    CONSTRAINT fk_logs_tenant FOREIGN KEY (tenant) REFERENCES tenants(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_logs_tenant_ts ON logs (tenant, ts);
CREATE INDEX IF NOT EXISTS idx_logs_tenant_fuente ON logs (tenant, fuente, ts);

-- 4. Alertas tempranas generadas por el detector
CREATE TABLE IF NOT EXISTS alertas (
    id BIGSERIAL PRIMARY KEY,
    tenant TEXT NOT NULL,
    ts TIMESTAMP NOT NULL,
    confianza REAL NOT NULL,
    tipo TEXT NOT NULL,
    severidad TEXT DEFAULT 'media',
    componente TEXT DEFAULT 'servidor',
    razon TEXT NOT NULL,
    evidencia JSONB DEFAULT '[]'::jsonb,
    recomendaciones JSONB DEFAULT '[]'::jsonb,
    dinero_en_riesgo JSONB DEFAULT '{"monto": null, "moneda": "MXN", "supuestos": "Sin costo configurado"}'::jsonb,
    audio_url TEXT NULL,
    estado TEXT DEFAULT 'activa',
    reemplazada_por BIGINT NULL,
    feedback TEXT NULL,
    creada_en TIMESTAMP DEFAULT now(),
    CONSTRAINT fk_alertas_tenant FOREIGN KEY (tenant) REFERENCES tenants(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_alertas_tenant_ts ON alertas (tenant, ts DESC);
CREATE INDEX IF NOT EXISTS idx_alertas_estado ON alertas (estado);

-- 5. Señuelos descartados / explicados
CREATE TABLE IF NOT EXISTS senuelos (
    id BIGSERIAL PRIMARY KEY,
    tenant TEXT NOT NULL,
    ts_inicio TIMESTAMP NOT NULL,
    ts_fin TIMESTAMP NOT NULL,
    explicacion TEXT NOT NULL,
    evidencia JSONB DEFAULT '{}'::jsonb,
    creado_en TIMESTAMP DEFAULT now(),
    CONSTRAINT fk_senuelos_tenant FOREIGN KEY (tenant) REFERENCES tenants(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_senuelos_tenant ON senuelos (tenant, ts_inicio);

-- 6. Estado incremental del detector por tenant
CREATE TABLE IF NOT EXISTS detector_estado (
    tenant TEXT PRIMARY KEY,
    ultimo_ts TIMESTAMP NOT NULL,
    estado JSONB DEFAULT '{}'::jsonb,
    latido TIMESTAMP DEFAULT now(),
    actualizado_en TIMESTAMP DEFAULT now(),
    CONSTRAINT fk_detector_tenant FOREIGN KEY (tenant) REFERENCES tenants(id) ON DELETE CASCADE
);

-- 7. Catálogo y clasificación de plantillas de log
CREATE TABLE IF NOT EXISTS plantillas_log (
    hash TEXT PRIMARY KEY,
    plantilla TEXT NOT NULL,
    clase TEXT NOT NULL DEFAULT 'ruido',
    fuente_clasificacion TEXT DEFAULT 'determinista',
    creada_en TIMESTAMP DEFAULT now()
);

-- 8. Acciones recomendadas y firma de seguridad (Solana)
CREATE TABLE IF NOT EXISTS acciones (
    id BIGSERIAL PRIMARY KEY,
    alerta_id BIGINT NOT NULL,
    accion TEXT NOT NULL,
    reversible BOOLEAN DEFAULT TRUE,
    nivel TEXT DEFAULT 'normal',
    nonce TEXT UNIQUE NOT NULL,
    estado TEXT DEFAULT 'pendiente',
    firmas JSONB DEFAULT '[]'::jsonb,
    tx_auditoria TEXT NULL,
    creada_en TIMESTAMP DEFAULT now(),
    CONSTRAINT fk_acciones_alerta FOREIGN KEY (alerta_id) REFERENCES alertas(id) ON DELETE CASCADE
);

-- 9. Llaves públicas autorizadas para firma (Solana)
CREATE TABLE IF NOT EXISTS llaves_autorizadas (
    tenant TEXT NOT NULL,
    pubkey TEXT NOT NULL,
    rol TEXT DEFAULT 'admin',
    PRIMARY KEY (tenant, pubkey),
    CONSTRAINT fk_llaves_tenant FOREIGN KEY (tenant) REFERENCES tenants(id) ON DELETE CASCADE
);
