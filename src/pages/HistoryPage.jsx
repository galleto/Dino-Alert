import { useMemo, useState } from 'react';
import { Search, ArrowUp, ArrowDown, ArrowUpDown, SearchX } from 'lucide-react';
import { useDemo } from '../context/DemoContext.jsx';
import SidePanel from '../components/common/SidePanel.jsx';
import AlertDetail from '../components/alerts/AlertDetail.jsx';
import EmptyState from '../components/common/EmptyState.jsx';
import { PriorityBadge, SimulatedTag } from '../components/common/Badges.jsx';
import { PRIORITY_META } from '../data/demoData.js';
import { tickToDate } from '../data/engine.js';

const fmt = new Intl.DateTimeFormat('es-MX', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
const STATUS_LABEL = { activa: 'Activa', revision: 'En revisión', cerrada: 'Cerrada', registrado: 'Registrado' };
const TYPE_LABEL = { alerta: 'Alerta', mantenimiento: 'Mantenimiento', respaldo: 'Respaldo', acceso: 'Acceso', 'actualización': 'Actualización' };

export default function HistoryPage() {
  const { snapshot, history } = useDemo();
  const [query, setQuery] = useState('');
  const [type, setType] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');
  const [sort, setSort] = useState({ key: 'date', dir: 'desc' });
  const [openRow, setOpenRow] = useState(null);

  const rows = useMemo(() => {
    const current = snapshot.alerts.map((a) => ({
      id: a.id, date: tickToDate(a.startTick), componentName: a.componentName, type: 'alerta',
      title: a.title, priority: a.priority, status: a.status, summary: a.summary, alertId: a.id,
    }));
    const events = snapshot.events.filter((e) => e.type !== 'alerta').map((e) => ({
      id: `cur-${e.id}`, date: tickToDate(e.tick), componentName: e.componentName, type: e.type,
      title: e.text, priority: 'info', status: 'registrado', summary: 'Evento rutinario de la ventana simulada actual.',
    }));
    const past = history.map((h) => ({ ...h, status: h.type === 'alerta' ? h.status : 'registrado' }));
    return [...current, ...events, ...past];
  }, [snapshot.alerts, snapshot.events, history]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = rows.filter((r) => {
      if (type && r.type !== type) return false;
      if (priority && r.priority !== priority) return false;
      if (status && r.status !== status) return false;
      if (q && !`${r.title} ${r.componentName}`.toLowerCase().includes(q)) return false;
      return true;
    });
    const dir = sort.dir === 'asc' ? 1 : -1;
    return list.sort((a, b) => {
      if (sort.key === 'priority') return (PRIORITY_META[a.priority].rank - PRIORITY_META[b.priority].rank) * dir || b.date - a.date;
      if (sort.key === 'component') return a.componentName.localeCompare(b.componentName, 'es') * dir || b.date - a.date;
      return (a.date - b.date) * dir;
    });
  }, [rows, query, type, priority, status, sort]);

  const toggleSort = (key) => setSort((s) => ({ key, dir: s.key === key && s.dir === 'desc' ? 'asc' : 'desc' }));
  const SortIcon = ({ k }) => {
    if (sort.key !== k) return <ArrowUpDown size={13} aria-hidden="true" />;
    return sort.dir === 'asc' ? <ArrowUp size={13} aria-hidden="true" /> : <ArrowDown size={13} aria-hidden="true" />;
  };
  const ariaSort = (k) => (sort.key === k ? (sort.dir === 'asc' ? 'ascending' : 'descending') : 'none');

  const openAlert = openRow?.alertId ? snapshot.alerts.find((a) => a.id === openRow.alertId) : null;

  return (
    <div className="page">
      <header className="page-head">
        <div>
          <h1 className="page-title">Historial</h1>
          <p className="page-sub">Eventos y alertas de los últimos 14 días más la ventana simulada actual.</p>
        </div>
        <SimulatedTag>Historial ficticio</SimulatedTag>
      </header>

      <div className="filters" role="search">
        <label className="search">
          <Search size={16} aria-hidden="true" />
          <span className="sr-only">Buscar en el historial</span>
          <input type="search" placeholder="Buscar evento o componente" value={query} onChange={(e) => setQuery(e.target.value)} />
        </label>
        <label className="select-inline"><span className="sr-only">Tipo</span>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">Todos los tipos</option>
            {Object.entries(TYPE_LABEL).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
        </label>
        <label className="select-inline"><span className="sr-only">Prioridad</span>
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="">Todas las prioridades</option>
            {Object.entries(PRIORITY_META).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
          </select>
        </label>
        <label className="select-inline"><span className="sr-only">Estado</span>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">Todos los estados</option>
            {Object.entries(STATUS_LABEL).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
        </label>
        <span className="filters__count" aria-live="polite">{filtered.length} registros</span>
      </div>

      {filtered.length ? (
        <div className="table-wrap">
          <table className="table">
            <caption className="sr-only">Historial de eventos y alertas</caption>
            <thead>
              <tr>
                <th scope="col" aria-sort={ariaSort('date')}><button type="button" className="th-btn" onClick={() => toggleSort('date')}>Fecha y hora<SortIcon k="date" /></button></th>
                <th scope="col" aria-sort={ariaSort('component')}><button type="button" className="th-btn" onClick={() => toggleSort('component')}>Componente<SortIcon k="component" /></button></th>
                <th scope="col">Evento</th>
                <th scope="col">Tipo</th>
                <th scope="col" aria-sort={ariaSort('priority')}><button type="button" className="th-btn" onClick={() => toggleSort('priority')}>Prioridad<SortIcon k="priority" /></button></th>
                <th scope="col">Estado</th>
                <th scope="col"><span className="sr-only">Detalle</span></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r) => (
                <tr key={r.id} data-current={!r.historical}>
                  <td className="nowrap">{fmt.format(r.date)}{!r.historical && <span className="now-dot" title="Ventana simulada actual">hoy</span>}</td>
                  <td>{r.componentName}</td>
                  <td className="cell-title">{r.title}</td>
                  <td>{TYPE_LABEL[r.type] || r.type}</td>
                  <td><PriorityBadge priority={r.priority} /></td>
                  <td>{STATUS_LABEL[r.status]}</td>
                  <td><button type="button" className="btn btn--sm" onClick={() => setOpenRow(r)}>Ver detalle</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <EmptyState icon={SearchX} title="Sin registros con esos filtros"
          action={<button type="button" className="btn" onClick={() => { setQuery(''); setType(''); setPriority(''); setStatus(''); }}>Quitar filtros</button>}>
          Prueba con otro tipo, prioridad o estado.
        </EmptyState>
      )}

      <SidePanel open={Boolean(openRow)} title={openRow?.title || ''} subtitle={openRow ? fmt.format(openRow.date) : ''} onClose={() => setOpenRow(null)}>
        {openAlert ? <AlertDetail alert={openAlert} onClose={() => setOpenRow(null)} /> : openRow && (
          <div className="alert-detail">
            <div className="badge-row"><PriorityBadge priority={openRow.priority} /><SimulatedTag>Registro de demostración</SimulatedTag></div>
            <p className="lead">{openRow.summary}</p>
            <dl className="facts">
              <div><dt>Componente</dt><dd>{openRow.componentName}</dd></div>
              <div><dt>Tipo</dt><dd>{TYPE_LABEL[openRow.type] || openRow.type}</dd></div>
              <div><dt>Estado</dt><dd>{STATUS_LABEL[openRow.status]}</dd></div>
            </dl>
            <p className="muted small">Los registros de días anteriores son ficticios y no tienen métricas detalladas en este prototipo.</p>
          </div>
        )}
      </SidePanel>
    </div>
  );
}
