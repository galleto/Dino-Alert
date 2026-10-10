import { useState } from 'react';
import { ChevronRight, CalendarClock } from 'lucide-react';
import MonitoringScene from '../scenes/MonitoringScene.jsx';
import { useDemo } from '../context/DemoContext.jsx';
import AlertCard from '../components/alerts/AlertCard.jsx';
import AlertDetail from '../components/alerts/AlertDetail.jsx';
import ComponentDetail from '../components/infra/ComponentDetail.jsx';
import SidePanel from '../components/common/SidePanel.jsx';
import StatusIcon from '../components/common/StatusIcon.jsx';
import EmptyState from '../components/common/EmptyState.jsx';
import { STATUS_META } from '../data/demoData.js';
import { componentById } from '../data/engine.js';

export default function MonitoringPage() {
  const {
    snapshot, prefs, reducedMotion, focusRequest, selectedId, setSelectedId, locateComponent, route,
  } = useDemo();
  const [openAlertId, setOpenAlertId] = useState(null);
  const { client } = snapshot;
  const alert = snapshot.alerts.find((a) => a.id === openAlertId) || null;
  const selected = selectedId ? componentById(client, selectedId) : null;
  const priority = snapshot.openAlerts.slice(0, 3);

  return (
    <div className="monitor">
      <section className="monitor__stage" aria-labelledby="monitor-title">
        <div className="stage-head">
          <div>
            <h1 id="monitor-title" className="page-title">{client.name}</h1>
            <p className="page-sub">{client.sector}. Centro de monitoreo.</p>
          </div>
        </div>
        <MonitoringScene
          components={client.components}
          links={client.links}
          states={snapshot.states}
          mood={snapshot.overall}
          selectedId={selectedId}
          onSelect={(id) => { setSelectedId(id); if (id) setOpenAlertId(null); }}
          onPick={(id) => { if (id) { locateComponent(id, null); setOpenAlertId(null); } else setSelectedId(null); }}
          focusRequest={focusRequest}
          reducedMotion={reducedMotion}
          quality={prefs.quality}
          labels={prefs.labels}
        />
      </section>

      <aside className="monitor__aside" aria-label="Resumen">
        <section className="panel-block">
          <h2 className="block-title">Estado del entorno</h2>
          <p className="overall-big" data-status={snapshot.overall}>
            <StatusIcon status={snapshot.overall} size={22} />{snapshot.overallText}
          </p>
          <ul className="count-grid">
            {Object.entries(STATUS_META).map(([key, meta]) => (
              <li key={key} data-status={key}>
                <span className="count-grid__n">{snapshot.counts[key]}</span>
                <span className="count-grid__label"><StatusIcon status={key} size={13} />{meta.short}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="panel-block">
          <div className="block-head">
            <h2 className="block-title">Alertas prioritarias</h2>
            <a className="link-like" href="#/alertas">Ver todas<ChevronRight size={14} aria-hidden="true" /></a>
          </div>
          {priority.length ? (
            <div className="stack-sm">
              {priority.map((a) => (
                <AlertCard key={a.id} alert={a} compact onOpen={(al) => { setOpenAlertId(al.id); setSelectedId(null); }} />
              ))}
            </div>
          ) : (
            <EmptyState title="Sin alertas abiertas">
              Prueba un escenario con señales desde el laboratorio de simulación.
            </EmptyState>
          )}
        </section>

        <section className="panel-block panel-block--grow">
          <div className="block-head">
            <h2 className="block-title">Últimos eventos</h2>
            <a className="link-like" href="#/historial">Historial<ChevronRight size={14} aria-hidden="true" /></a>
          </div>
          {snapshot.events.length ? (
            <ul className="event-feed">
              {snapshot.events.slice(0, 6).map((e) => (
                <li key={e.id} data-level={e.level}>
                  <button type="button" className="event-feed__btn" onClick={() => {
                    if (e.alertId) { setOpenAlertId(e.alertId); setSelectedId(null); } else { locateComponent(e.componentId, null); setOpenAlertId(null); }
                  }}>
                    <time>{e.time}</time>
                    <span className="event-feed__text">{e.text}</span>
                    {e.type !== 'alerta' && <span className="event-feed__comp">{e.componentName}</span>}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState icon={CalendarClock} title="Aún no hay eventos">La simulación empieza a registrar eventos a partir de las 09:02.</EmptyState>
          )}
        </section>
      </aside>

      <SidePanel open={Boolean(selected) && !alert} title={selected?.name || ''} subtitle="Componente" onClose={() => setSelectedId(null)}>
        {selected && <ComponentDetail componentId={selected.id} onLocate={(id) => locateComponent(id, null)} />}
      </SidePanel>
      <SidePanel open={Boolean(alert)} title={alert?.title || ''} subtitle={alert ? `Alerta de ${alert.componentName}` : ''} onClose={() => setOpenAlertId(null)}>
        {alert && <AlertDetail alert={alert} onClose={() => setOpenAlertId(null)} />}
      </SidePanel>
      <span className="sr-only" aria-live="polite">{route.page === 'monitoreo' && selected ? `Seleccionado: ${selected.name}` : ''}</span>
    </div>
  );
}
