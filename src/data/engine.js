/**
 * Motor de simulación (solo frontend).
 * Convierte cliente + escenario + minuto simulado en:
 * estados de componentes, métricas, alertas, eventos e historial.
 * Es determinista: la misma entrada siempre produce la misma salida.
 */
import {
  TICKS, DEMO_START_HOUR, CLIENTS, SCENARIOS, SIGNAL_KINDS, TYPE_BASELINES,
  METRICS, STATUS_META, ROUTINE_EVENTS, HISTORY_TEMPLATES, PRIORITY_META,
} from './demoData.js';

/* ---------- utilidades deterministas ---------- */
export function hashString(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function rand01(seed, t) {
  const x = Math.sin(seed * 0.000137 + t * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

function smoothNoise(seed, t) {
  return (rand01(seed, t) * 0.6 + rand01(seed, t - 1) * 0.25 + rand01(seed, t - 2) * 0.15) * 2 - 1;
}

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

/* ---------- tiempo simulado ---------- */
export function tickToTime(tick) {
  const total = DEMO_START_HOUR * 60 + tick;
  const h = Math.floor(total / 60) % 24;
  const m = total % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

/* ---------- catálogos ---------- */
export const getClient = (id) => CLIENTS.find((c) => c.id === id) || CLIENTS[0];
export const getScenario = (id) => SCENARIOS.find((s) => s.id === id) || SCENARIOS[0];

export function componentById(client, id) {
  return client.components.find((c) => c.id === id) || null;
}

function baselineFor(comp) {
  const base = TYPE_BASELINES[comp.type];
  const seed = hashString(comp.id + comp.name);
  const k = 0.85 + (seed % 30) / 100; // variación 0.85–1.14
  return {
    cpu: base.cpu * k,
    ram: base.ram * (0.9 + (seed % 17) / 100),
    disk: base.disk * (0.88 + (seed % 23) / 100),
    latency: base.latency * k,
    errors: base.errors,
  };
}

/** Señales del escenario resueltas a componentes concretos del cliente. */
export function resolveSignals(client, scenario) {
  return scenario.signals
    .map((s, index) => {
      const comp = client.components.find((c) => c.role === s.role);
      if (!comp) return null;
      return { ...s, index, componentId: comp.id };
    })
    .filter(Boolean);
}

function severityAt(signal, tick) {
  if (tick < signal.start) return null;
  if (signal.escalate && tick >= signal.escalate.at) return signal.escalate.to;
  return signal.severity;
}

/* ---------- métricas ---------- */
export function metricValue(comp, metric, tick, signals) {
  const signalsHere = signals.filter((s) => s.componentId === comp.id && tick >= s.start);
  if (signalsHere.some((s) => s.kind === 'no-data')) return null;
  const base = baselineFor(comp)[metric];
  const seed = hashString(`${comp.id}:${metric}`);
  const wave = Math.sin((tick + (seed % 60)) / 9) * 0.05;
  let v = base * (1 + smoothNoise(seed, tick) * 0.07 + wave);
  if (metric === 'errors') v = Math.max(0, base + smoothNoise(seed, tick) * base * 0.8);
  for (const s of signalsHere) {
    v += SIGNAL_KINDS[s.kind].delta(metric, tick - s.start, base);
  }
  if (METRICS[metric].percent) v = clamp(v, 0, 99);
  if (metric === 'latency') v = Math.max(1, v);
  if (metric === 'errors') v = Math.max(0, v);
  return Math.round(v * 10) / 10;
}

/** Serie completa 0..TICKS-1 de una métrica (los valores futuros los oculta la gráfica). */
export function metricSeries(comp, metric, signals) {
  const out = [];
  for (let t = 0; t < TICKS; t++) out.push(metricValue(comp, metric, t, signals));
  return out;
}

export function metricThreshold(comp, metric) {
  const m = METRICS[metric];
  if (m.thresholdFactor) return Math.round(baselineFor(comp)[metric] * m.thresholdFactor);
  return m.threshold;
}

export function formatMetric(metric, value) {
  if (value === null || value === undefined) return 'Sin datos';
  const m = METRICS[metric];
  if (metric === 'errors') return `${value.toFixed(1)} ${m.unit}`;
  if (m.percent) return `${Math.round(value)} %`;
  return `${Math.round(value)} ${m.unit}`;
}

/* ---------- alertas ---------- */
function priorityFor(signal, severity, comp) {
  if (severity === 'risk') return 'alta';
  if (severity === 'suspicious') return 'media';
  if (severity === 'nodata') return comp.role === 'gateway' ? 'media' : 'baja';
  return 'baja';
}

function lastValue(series, upTo) {
  for (let t = upTo; t >= 0; t--) if (series[t] !== null) return { t, v: series[t] };
  return null;
}

function buildObservations(signal, comp, signals, tick) {
  const kind = SIGNAL_KINDS[signal.kind];
  if (signal.kind === 'no-data') {
    const mins = tick - signal.start + 1;
    return [
      `No se reciben lecturas desde las ${tickToTime(signal.start)} (${mins} min).`,
      `La última lectura válida fue a las ${tickToTime(Math.max(0, signal.start - 1))}.`,
    ];
  }
  return kind.metrics.slice(0, 2).map((metric) => {
    const series = metricSeries(comp, metric, signals);
    const before = series[Math.max(0, signal.start - 1)];
    const now = lastValue(series, tick);
    const label = METRICS[metric].label.toLowerCase();
    if (!now || before === null) return `Sin lecturas suficientes de ${label}.`;
    const dir = now.v >= before ? 'subió' : 'bajó';
    return `El ${label === 'memoria' ? 'uso de memoria' : label} ${dir} de ${formatMetric(metric, before)} a ${formatMetric(metric, now.v)} desde las ${tickToTime(signal.start)}.`;
  });
}

function buildTimeline(signal, tick, override) {
  const items = [
    { tick: Math.max(0, signal.start - 1), label: 'Última lectura dentro de lo habitual', type: 'normal' },
    {
      tick: signal.start,
      label: signal.kind === 'no-data' ? 'Se deja de recibir información' : 'Primera desviación observada',
      type: signal.severity,
    },
  ];
  if (signal.escalate && tick >= signal.escalate.at) {
    items.push({ tick: signal.escalate.at, label: 'La señal se mantiene y escala a riesgo elevado', type: 'risk' });
  }
  if (tick > signal.start) items.push({ tick, label: 'Lectura más reciente', type: 'current' });
  if (override) items.push({ tick, label: override === 'cerrada' ? 'Alerta cerrada por el usuario' : 'Marcada en revisión por el usuario', type: 'user' });
  return items.map((i) => ({ ...i, time: tickToTime(i.tick) }));
}

export function buildAlerts(client, scenario, tick, overrides = {}) {
  const signals = resolveSignals(client, scenario);
  return signals
    .filter((s) => tick >= s.start)
    .map((s) => {
      const comp = componentById(client, s.componentId);
      const kind = SIGNAL_KINDS[s.kind];
      const severity = severityAt(s, tick);
      const id = `${client.id}-${scenario.id}-${s.index}`;
      const override = overrides[id];
      return {
        id,
        kind: s.kind,
        kindLabel: kind.label,
        title: kind.title(comp.name),
        componentId: comp.id,
        componentName: comp.name,
        severity,
        priority: priorityFor(s, severity, comp),
        status: override || 'activa',
        startTick: s.start,
        startedAt: tickToTime(s.start),
        escalateTick: s.escalate ? s.escalate.at : null,
        escalated: Boolean(s.escalate && tick >= s.escalate.at),
        durationMin: tick - s.start + 1,
        summary: kind.summary,
        metrics: kind.metrics,
        observations: buildObservations(s, comp, signals, tick),
        interpretations: kind.interpretations,
        recommendations: kind.recommendations,
        timeline: buildTimeline(s, tick, override),
      };
    })
    .sort(sortAlerts);
}

export function sortAlerts(a, b) {
  const pr = PRIORITY_META[b.priority].rank - PRIORITY_META[a.priority].rank;
  if (pr !== 0) return pr;
  return b.startTick - a.startTick;
}

/* ---------- eventos ---------- */
export function buildEvents(client, scenario, tick) {
  const signals = resolveSignals(client, scenario);
  const events = [];
  for (const r of ROUTINE_EVENTS) {
    if (r.at > tick) continue;
    const comp = client.components.find((c) => c.role === r.role);
    if (!comp) continue;
    events.push({ id: `ev-${r.at}`, tick: r.at, time: tickToTime(r.at), type: r.type, componentId: comp.id, componentName: comp.name, text: r.text, level: 'info' });
  }
  for (const s of signals) {
    const comp = componentById(client, s.componentId);
    if (tick >= s.start) {
      events.push({
        id: `sig-${s.index}`, tick: s.start, time: tickToTime(s.start), type: 'alerta',
        componentId: comp.id, componentName: comp.name,
        text: SIGNAL_KINDS[s.kind].title(comp.name), level: s.severity,
        alertId: `${client.id}-${scenario.id}-${s.index}`,
      });
    }
    if (s.escalate && tick >= s.escalate.at) {
      events.push({
        id: `esc-${s.index}`, tick: s.escalate.at, time: tickToTime(s.escalate.at), type: 'alerta',
        componentId: comp.id, componentName: comp.name,
        text: `Escala a riesgo elevado: ${comp.name}`, level: 'risk',
        alertId: `${client.id}-${scenario.id}-${s.index}`,
      });
    }
  }
  return events.sort((a, b) => b.tick - a.tick);
}

/* ---------- foto completa del momento ---------- */
export function buildSnapshot(clientId, scenarioId, tick, overrides) {
  const client = getClient(clientId);
  const scenario = getScenario(scenarioId);
  const signals = resolveSignals(client, scenario);

  const states = {};
  const metricsNow = {};
  for (const comp of client.components) {
    let status = 'normal';
    for (const s of signals) {
      if (s.componentId !== comp.id) continue;
      const sev = severityAt(s, tick);
      if (sev && STATUS_META[sev].rank > STATUS_META[status].rank) status = sev;
    }
    states[comp.id] = status;
    metricsNow[comp.id] = {};
    for (const m of Object.keys(METRICS)) metricsNow[comp.id][m] = metricValue(comp, m, tick, signals);
  }

  const counts = { normal: 0, suspicious: 0, risk: 0, nodata: 0 };
  Object.values(states).forEach((s) => { counts[s] += 1; });
  let overall = 'normal';
  for (const s of Object.values(states)) if (STATUS_META[s].rank > STATUS_META[overall].rank) overall = s;

  const alerts = buildAlerts(client, scenario, tick, overrides);
  return {
    client, scenario, signals, tick, time: tickToTime(tick),
    states, metricsNow, counts, overall,
    overallText: overallText(counts),
    alerts,
    openAlerts: alerts.filter((a) => a.status !== 'cerrada'),
    events: buildEvents(client, scenario, tick),
  };
}

export function overallText(counts) {
  const parts = [];
  const n = (k, one, many) => `${k} ${k === 1 ? one : many}`;
  if (counts.risk) parts.push(`riesgo elevado en ${n(counts.risk, 'componente', 'componentes')}`);
  if (counts.suspicious) parts.push(`${n(counts.suspicious, 'señal', 'señales')} por revisar`);
  if (counts.nodata) parts.push(`${n(counts.nodata, 'componente', 'componentes')} sin datos`);
  if (!parts.length) return 'Todo en orden';
  const text = parts.length === 1 ? parts[0] : `${parts.slice(0, -1).join(', ')} y ${parts[parts.length - 1]}`;
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/* ---------- relaciones ---------- */
export function dependenciesOf(client, componentId) {
  const dependsOn = [];
  const usedBy = [];
  for (const [a, b] of client.links) {
    if (a === componentId) dependsOn.push(b);
    if (b === componentId) usedBy.push(a);
  }
  return { dependsOn, usedBy };
}

/* ---------- historial ficticio de días anteriores ---------- */
const DAY_MS = 86400000;
export function buildHistory(client) {
  const seed = hashString(client.id);
  const items = [];
  // Fecha base fija de demostración para que el historial no dependa del reloj real.
  const base = new Date(2026, 9, 9, DEMO_START_HOUR, 0, 0).getTime();
  const typed = ['mantenimiento', 'respaldo', 'acceso', 'actualización'];
  for (let i = 0; i < 22; i++) {
    const r = rand01(seed, i * 3 + 1);
    const daysAgo = 1 + Math.floor(rand01(seed, i * 7 + 2) * 14);
    const minutes = Math.floor(rand01(seed, i * 11 + 5) * 600);
    const comp = client.components[Math.floor(rand01(seed, i * 13 + 3) * client.components.length)];
    const date = new Date(base - daysAgo * DAY_MS + minutes * 60000 - 120 * 60000);
    if (r < 0.55) {
      const tpl = HISTORY_TEMPLATES[Math.floor(rand01(seed, i * 17) * HISTORY_TEMPLATES.length)];
      items.push({
        id: `h-${client.id}-${i}`, date, componentId: comp.id, componentName: comp.name,
        type: 'alerta', title: SIGNAL_KINDS[tpl.kind].title(comp.name),
        priority: tpl.priority, status: rand01(seed, i * 19) < 0.85 ? 'cerrada' : 'revision',
        summary: SIGNAL_KINDS[tpl.kind].summary, historical: true,
      });
    } else {
      const type = typed[Math.floor(rand01(seed, i * 23) * typed.length)];
      const texts = {
        mantenimiento: 'Mantenimiento programado',
        respaldo: 'Respaldo completado',
        acceso: 'Acceso de administración registrado',
        'actualización': 'Actualización instalada',
      };
      items.push({
        id: `h-${client.id}-${i}`, date, componentId: comp.id, componentName: comp.name,
        type, title: `${texts[type]}: ${comp.name}`, priority: 'info', status: 'cerrada',
        summary: 'Evento rutinario registrado.', historical: true,
      });
    }
  }
  return items;
}

/** Fecha simulada (Date) de un minuto del día de demostración. */
export function tickToDate(tick) {
  return new Date(2026, 9, 9, DEMO_START_HOUR, tick, 0);
}
