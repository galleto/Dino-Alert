import { Crosshair, Info, Stethoscope, ArrowRight, ArrowLeft, FlaskConical } from 'lucide-react';
import { useDemo } from '../context/DemoContext.jsx';
import MetricEvidence from '../components/alerts/MetricEvidence.jsx';
import AlertTimeline from '../components/alerts/AlertTimeline.jsx';
import EmptyState from '../components/common/EmptyState.jsx';
import { PriorityBadge, AlertStatusBadge, StatusBadge, SimulatedTag } from '../components/common/Badges.jsx';
import { COMPONENT_TYPES } from '../data/demoData.js';
import { componentById, dependenciesOf } from '../data/engine.js';

export default function DiagnosisPage() {
  const { snapshot, route, locateComponent, setAlertStatus } = useDemo();
  const alerts = snapshot.alerts;
  const alert = alerts.find((a) => a.id === route.param) || null;

  if (!alerts.length) {
    return (
      <div className="page">
        <header className="page-head"><h1 className="page-title">Diagnóstico</h1></header>
        <EmptyState icon={Stethoscope} title={`No hay alertas que diagnosticar a las ${snapshot.time}`}
          action={<button type="button" className="btn" onClick={() => route.navigate('simulacion')}><FlaskConical size={16} aria-hidden="true" />Ir al laboratorio</button>}>
          Elige un escenario con señales o avanza la simulación para ver un diagnóstico.
        </EmptyState>
      </div>
    );
  }

  if (!alert) {
    return (
      <div className="page">
        <header className="page-head">
          <div>
            <h1 className="page-title">Diagnóstico</h1>
            <p className="page-sub">
              {route.param ? 'Esa alerta no existe en el escenario actual. ' : ''}Elige una alerta para entender qué está pasando.
            </p>
          </div>
        </header>
        <ul className="pick-list">
          {alerts.map((a) => (
            <li key={a.id}>
              <button type="button" className="pick-list__btn" onClick={() => route.navigate('diagnostico', a.id)}>
                <span className="pick-list__title">{a.title}</span>
                <PriorityBadge priority={a.priority} />
                <span className="muted small">Desde {a.startedAt}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const comp = componentById(snapshot.client, alert.componentId);
  const deps = dependenciesOf(snapshot.client, comp.id);
  const related = [...deps.dependsOn.map((id) => ({ id, rel: 'depende de' })), ...deps.usedBy.map((id) => ({ id, rel: 'lo usa' }))];

  return (
    <div className="page page--diagnosis">
      <header className="page-head">
        <div>
          <p className="page-kicker">Diagnóstico de alerta</p>
          <h1 className="page-title">{alert.title}</h1>
          <div className="badge-row">
            <PriorityBadge priority={alert.priority} />
            <AlertStatusBadge status={alert.status} />
            <StatusBadge status={alert.severity} />
          </div>
        </div>
        <label className="select-inline">
          <span className="sr-only">Cambiar de alerta</span>
          <select value={alert.id} onChange={(e) => route.navigate('diagnostico', e.target.value)}>
            {alerts.map((a) => <option key={a.id} value={a.id}>{a.title}</option>)}
          </select>
        </label>
      </header>

      <div className="notice" role="note">
        <Info size={18} aria-hidden="true" />
        <p>
          Este diagnóstico usa <strong>datos simulados</strong> generados en el navegador. Las observaciones describen
          las lecturas de la demostración; las interpretaciones son hipótesis para orientar la revisión, no conclusiones verificadas.
        </p>
      </div>

      <div className="diag-grid">
        <div className="diag-main">
          <section className="card-plain">
            <h2 className="block-title">Qué se observó</h2>
            <p className="tag-line"><SimulatedTag>Observación sobre datos simulados</SimulatedTag></p>
            <ul className="plain-list">
              {alert.observations.map((o) => <li key={o}>{o}</li>)}
            </ul>
            <dl className="facts facts--row">
              <div><dt>Inicio de la señal</dt><dd>{alert.startedAt}</dd></div>
              <div><dt>Duración</dt><dd>{alert.durationMin} min simulados</dd></div>
              <div><dt>Última lectura</dt><dd>{snapshot.time}</dd></div>
            </dl>
          </section>

          <section className="card-plain">
            <h2 className="block-title">Métricas que cambiaron</h2>
            <div className="evidence-grid">
              {alert.metrics.map((m) => <MetricEvidence key={m} snapshot={snapshot} alert={alert} metric={m} />)}
            </div>
          </section>

          <section className="card-plain">
            <h2 className="block-title">Cómo evolucionó</h2>
            <AlertTimeline items={alert.timeline} />
          </section>
        </div>

        <div className="diag-side">
          <section className="card-plain">
            <h2 className="block-title">Componente relacionado</h2>
            <p className="comp-head"><strong>{comp.name}</strong><span className="muted small">{COMPONENT_TYPES[comp.type].label}</span></p>
            <p className="small">{comp.description}</p>
            {related.length > 0 && (
              <>
                <h3 className="h-sub">Podría afectar o verse afectado por</h3>
                <ul className="dep-list">
                  {related.map((r) => (
                    <li key={`${r.rel}-${r.id}`}>
                      {r.rel === 'depende de' ? <ArrowRight size={14} aria-hidden="true" /> : <ArrowLeft size={14} aria-hidden="true" />}
                      {r.rel === 'depende de' ? 'Depende de' : 'Lo usa'} {componentById(snapshot.client, r.id)?.name}
                      <StatusBadge status={snapshot.states[r.id]} short />
                    </li>
                  ))}
                </ul>
              </>
            )}
            <button type="button" className="btn" onClick={() => locateComponent(comp.id)}><Crosshair size={16} aria-hidden="true" />Ubicar en la escena</button>
          </section>

          <section className="card-plain card-plain--hypothesis">
            <h2 className="block-title">Posibles interpretaciones</h2>
            <p className="tag-line"><span className="hyp-tag">Hipótesis, no verificadas</span></p>
            <ul className="plain-list">
              {alert.interpretations.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </section>

          <section className="card-plain">
            <h2 className="block-title">Qué revisar primero</h2>
            <ol className="steps-list">
              {alert.recommendations.map((r) => <li key={r}>{r}</li>)}
            </ol>
            <div className="action-row">
              {alert.status !== 'revision' && <button type="button" className="btn btn--primary" onClick={() => setAlertStatus(alert.id, 'revision')}>Marcar en revisión</button>}
              {alert.status !== 'cerrada'
                ? <button type="button" className="btn btn--ghost" onClick={() => setAlertStatus(alert.id, 'cerrada')}>Cerrar alerta</button>
                : <button type="button" className="btn btn--ghost" onClick={() => setAlertStatus(alert.id, 'activa')}>Reabrir alerta</button>}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
