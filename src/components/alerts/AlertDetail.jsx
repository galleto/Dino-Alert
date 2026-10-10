import { Crosshair, Stethoscope, Eye, CheckCircle2, RotateCcw } from 'lucide-react';
import { PriorityBadge, AlertStatusBadge, StatusBadge, SimulatedTag } from '../common/Badges.jsx';
import AlertTimeline from './AlertTimeline.jsx';
import MetricEvidence from './MetricEvidence.jsx';
import { useDemo } from '../../context/DemoContext.jsx';

/** Contenido del panel lateral de una alerta. */
export default function AlertDetail({ alert, onClose }) {
  const { snapshot, setAlertStatus, locateComponent, route } = useDemo();
  if (!alert) return null;
  const go = (fn) => () => { fn(); onClose?.(); };

  return (
    <div className="alert-detail">
      <div className="badge-row">
        <PriorityBadge priority={alert.priority} />
        <AlertStatusBadge status={alert.status} />
        <SimulatedTag />
      </div>
      <p className="lead">{alert.summary}</p>

      <dl className="facts">
        <div><dt>Componente</dt><dd>{alert.componentName}</dd></div>
        <div><dt>Comenzó</dt><dd>{alert.startedAt} (hace {alert.durationMin} min simulados)</dd></div>
        <div><dt>Estado del componente</dt><dd><StatusBadge status={alert.severity} /></dd></div>
      </dl>

      <h3 className="h-sub">Lo que se observó</h3>
      <ul className="plain-list">
        {alert.observations.map((o) => <li key={o}>{o}</li>)}
      </ul>

      <MetricEvidence snapshot={snapshot} alert={alert} metric={alert.metrics[0]} height={150} />

      <h3 className="h-sub">Cronología</h3>
      <AlertTimeline items={alert.timeline} />

      <h3 className="h-sub">Qué revisar</h3>
      <ol className="steps-list">
        {alert.recommendations.map((r) => <li key={r}>{r}</li>)}
      </ol>
      {alert.status === 'cerrada' && alert.severity !== 'normal' && (
        <p className="note">Cerraste esta alerta, pero las lecturas simuladas siguen mostrando la señal en el componente.</p>
      )}

      <div className="action-row">
        <button type="button" className="btn btn--primary" onClick={go(() => route.navigate('diagnostico', alert.id))}>
          <Stethoscope size={16} aria-hidden="true" />Abrir diagnóstico
        </button>
        <button type="button" className="btn" onClick={go(() => locateComponent(alert.componentId))}>
          <Crosshair size={16} aria-hidden="true" />Ubicar en la escena
        </button>
      </div>
      <div className="action-row">
        {alert.status !== 'revision' && (
          <button type="button" className="btn btn--ghost" onClick={() => setAlertStatus(alert.id, 'revision')}><Eye size={16} aria-hidden="true" />Marcar en revisión</button>
        )}
        {alert.status !== 'cerrada' ? (
          <button type="button" className="btn btn--ghost" onClick={() => setAlertStatus(alert.id, 'cerrada')}><CheckCircle2 size={16} aria-hidden="true" />Cerrar alerta</button>
        ) : (
          <button type="button" className="btn btn--ghost" onClick={() => setAlertStatus(alert.id, 'activa')}><RotateCcw size={16} aria-hidden="true" />Reabrir alerta</button>
        )}
      </div>
    </div>
  );
}
