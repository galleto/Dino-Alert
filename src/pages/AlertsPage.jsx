import { useMemo, useState } from 'react';
import { Search, BellOff } from 'lucide-react';
import { useDemo } from '../context/DemoContext.jsx';
import AlertCard from '../components/alerts/AlertCard.jsx';
import AlertDetail from '../components/alerts/AlertDetail.jsx';
import SidePanel from '../components/common/SidePanel.jsx';
import Segmented from '../components/common/Segmented.jsx';
import EmptyState from '../components/common/EmptyState.jsx';
import { SimulatedTag } from '../components/common/Badges.jsx';
import { PRIORITY_META } from '../data/demoData.js';

const PRIORITY_OPTS = [
  { value: 'todas', label: 'Todas' }, { value: 'alta', label: 'Alta' }, { value: 'media', label: 'Media' }, { value: 'baja', label: 'Baja' },
];
const STATUS_OPTS = [
  { value: 'abiertas', label: 'Abiertas' }, { value: 'activa', label: 'Activas' }, { value: 'revision', label: 'En revisión' }, { value: 'cerrada', label: 'Cerradas' }, { value: 'todas', label: 'Todas' },
];

export default function AlertsPage() {
  const { snapshot, setScenarioId, notify } = useDemo();
  const [query, setQuery] = useState('');
  const [priority, setPriority] = useState('todas');
  const [status, setStatus] = useState('abiertas');
  const [component, setComponent] = useState('');
  const [openId, setOpenId] = useState(null);

  const filtered = useMemo(() => snapshot.alerts.filter((a) => {
    if (priority !== 'todas' && a.priority !== priority) return false;
    if (status === 'abiertas' && a.status === 'cerrada') return false;
    if (!['abiertas', 'todas'].includes(status) && a.status !== status) return false;
    if (component && a.componentId !== component) return false;
    const q = query.trim().toLowerCase();
    if (q && !`${a.title} ${a.componentName} ${a.summary}`.toLowerCase().includes(q)) return false;
    return true;
  }), [snapshot.alerts, priority, status, component, query]);

  const groups = ['alta', 'media', 'baja'].map((p) => ({ p, items: filtered.filter((a) => a.priority === p) })).filter((g) => g.items.length);
  const alert = snapshot.alerts.find((a) => a.id === openId) || null;
  const involved = snapshot.client.components.filter((c) => snapshot.alerts.some((a) => a.componentId === c.id));
  const hasFilters = query || priority !== 'todas' || status !== 'abiertas' || component;

  return (
    <div className="page">
      <header className="page-head">
        <div>
          <h1 className="page-title">Alertas e incidentes</h1>
          <p className="page-sub">{snapshot.openAlerts.length} abiertas en {snapshot.client.name}, escenario “{snapshot.scenario.name}”.</p>
        </div>
        <SimulatedTag />
      </header>

      <div className="filters" role="search">
        <label className="search">
          <Search size={16} aria-hidden="true" />
          <span className="sr-only">Buscar alertas</span>
          <input type="search" placeholder="Buscar por título o componente" value={query} onChange={(e) => setQuery(e.target.value)} />
        </label>
        <Segmented label="Prioridad" options={PRIORITY_OPTS} value={priority} onChange={setPriority} size="sm" />
        <Segmented label="Estado" options={STATUS_OPTS} value={status} onChange={setStatus} size="sm" />
        <label className="select-inline">
          <span className="sr-only">Componente</span>
          <select value={component} onChange={(e) => setComponent(e.target.value)}>
            <option value="">Todos los componentes</option>
            {involved.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </label>
      </div>

      {groups.length ? groups.map((g) => (
        <section key={g.p} className="alert-group" aria-labelledby={`grp-${g.p}`}>
          <h2 id={`grp-${g.p}`} className="group-title" data-priority={g.p}>Prioridad {PRIORITY_META[g.p].label.toLowerCase()} <span>{g.items.length}</span></h2>
          <div className="stack">
            {g.items.map((a) => <AlertCard key={a.id} alert={a} onOpen={(al) => setOpenId(al.id)} />)}
          </div>
        </section>
      )) : (
        <EmptyState
          icon={BellOff}
          title={snapshot.alerts.length ? 'Ninguna alerta coincide con los filtros' : `No hay alertas a las ${snapshot.time}`}
          action={snapshot.alerts.length ? (hasFilters && (
            <button type="button" className="btn" onClick={() => { setQuery(''); setPriority('todas'); setStatus('abiertas'); setComponent(''); }}>Quitar filtros</button>
          )) : (
            <button type="button" className="btn" onClick={() => { setScenarioId('suspicious'); notify('Escenario cambiado a “Señales sospechosas”'); }}>Cargar escenario con señales</button>
          )}
        >
          {snapshot.alerts.length ? 'Ajusta la búsqueda o los filtros.' : 'Las lecturas simuladas están dentro de lo habitual.'}
        </EmptyState>
      )}

      <SidePanel open={Boolean(alert)} title={alert?.title || ''} subtitle={alert ? `Alerta de ${alert.componentName}` : ''} onClose={() => setOpenId(null)}>
        {alert && <AlertDetail alert={alert} onClose={() => setOpenId(null)} />}
      </SidePanel>
    </div>
  );
}
