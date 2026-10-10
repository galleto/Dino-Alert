import { useMemo } from 'react';
import { Crosshair, Stethoscope, ArrowRight, ArrowLeft } from 'lucide-react';
import { StatusBadge, PriorityBadge, SimulatedTag } from '../common/Badges.jsx';
import Sparkline from '../charts/Sparkline.jsx';
import { useDemo } from '../../context/DemoContext.jsx';
import { COMPONENT_TYPES, ZONES, METRICS, STATUS_META } from '../../data/demoData.js';
import { metricSeries, formatMetric, dependenciesOf, componentById } from '../../data/engine.js';

/** Detalle de un servidor, equipo o servicio. */
export default function ComponentDetail({ componentId, onLocate, locateLabel = 'Centrar en la escena' }) {
  const { snapshot, route } = useDemo();
  const comp = componentById(snapshot.client, componentId);
  const series = useMemo(() => {
    if (!comp) return {};
    const out = {};
    Object.keys(METRICS).forEach((m) => { out[m] = metricSeries(comp, m, snapshot.signals); });
    return out;
  }, [comp, snapshot.signals]);
  if (!comp) return null;

  const status = snapshot.states[comp.id];
  const alerts = snapshot.alerts.filter((a) => a.componentId === comp.id);
  const events = snapshot.events.filter((e) => e.componentId === comp.id).slice(0, 4);
  const deps = dependenciesOf(snapshot.client, comp.id);
  const name = (id) => componentById(snapshot.client, id)?.name || id;

  return (
    <div className="comp-detail">
      <div className="badge-row">
        <StatusBadge status={status} />
        <SimulatedTag>Métricas simuladas</SimulatedTag>
      </div>
      <p className="lead">{comp.description}</p>
      <p className="muted small">{COMPONENT_TYPES[comp.type].label} en {ZONES[comp.zone].label.toLowerCase()}. {STATUS_META[status].description}</p>

      <h3 className="h-sub">Lecturas a las {snapshot.time}</h3>
      <ul className="metric-list">
        {Object.entries(METRICS).map(([key, m]) => (
          <li key={key}>
            <span className="metric-list__label">{m.label}</span>
            <Sparkline values={series[key]} tick={snapshot.tick} color={status === 'normal' ? 'var(--lilac)' : status === 'risk' ? 'var(--orange)' : 'var(--pink)'} />
            <span className="metric-list__value">{formatMetric(key, snapshot.metricsNow[comp.id][key])}</span>
          </li>
        ))}
      </ul>

      <h3 className="h-sub">Alertas relacionadas</h3>
      {alerts.length ? (
        <ul className="link-list">
          {alerts.map((a) => (
            <li key={a.id}>
              <button type="button" className="link-row" onClick={() => route.navigate('diagnostico', a.id)}>
                <span>{a.title}</span>
                <PriorityBadge priority={a.priority} />
              </button>
            </li>
          ))}
        </ul>
      ) : <p className="muted small">Sin alertas en este escenario.</p>}

      <h3 className="h-sub">Conexiones</h3>
      <ul className="dep-list">
        {deps.dependsOn.map((d) => <li key={`o${d}`}><ArrowRight size={14} aria-hidden="true" />Depende de {name(d)} <StatusBadge status={snapshot.states[d]} short /></li>)}
        {deps.usedBy.map((d) => <li key={`i${d}`}><ArrowLeft size={14} aria-hidden="true" />Lo usa {name(d)} <StatusBadge status={snapshot.states[d]} short /></li>)}
        {!deps.dependsOn.length && !deps.usedBy.length && <li className="muted">Sin conexiones registradas.</li>}
      </ul>

      <h3 className="h-sub">Eventos recientes</h3>
      {events.length ? (
        <ul className="event-list">
          {events.map((e) => <li key={e.id}><time>{e.time}</time>{e.text}</li>)}
        </ul>
      ) : <p className="muted small">Sin eventos en la ventana simulada.</p>}

      <div className="action-row">
        {onLocate && (
          <button type="button" className="btn" onClick={() => onLocate(comp.id)}><Crosshair size={16} aria-hidden="true" />{locateLabel}</button>
        )}
        {alerts[0] && (
          <button type="button" className="btn btn--primary" onClick={() => route.navigate('diagnostico', alerts[0].id)}><Stethoscope size={16} aria-hidden="true" />Abrir diagnóstico</button>
        )}
      </div>
    </div>
  );
}
