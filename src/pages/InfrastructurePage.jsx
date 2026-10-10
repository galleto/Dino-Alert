import { useMemo, useState } from 'react';
import { Search, Box, List, SearchX } from 'lucide-react';
import { useDemo } from '../context/DemoContext.jsx';
import MonitoringScene from '../scenes/MonitoringScene.jsx';
import ComponentTable from '../components/infra/ComponentTable.jsx';
import ComponentDetail from '../components/infra/ComponentDetail.jsx';
import SidePanel from '../components/common/SidePanel.jsx';
import Segmented from '../components/common/Segmented.jsx';
import EmptyState from '../components/common/EmptyState.jsx';
import { COMPONENT_TYPES, STATUS_META } from '../data/demoData.js';
import { componentById } from '../data/engine.js';

export default function InfrastructurePage() {
  const { snapshot, prefs, reducedMotion, focusRequest, setFocusRequest, selectedId, setSelectedId } = useDemo();
  const [view, setView] = useState('3d');
  const [query, setQuery] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');
  const { client } = snapshot;

  const filtered = useMemo(() => client.components.filter((c) => {
    if (type && c.type !== type) return false;
    if (status && snapshot.states[c.id] !== status) return false;
    const q = query.trim().toLowerCase();
    if (q && !`${c.name} ${c.description}`.toLowerCase().includes(q)) return false;
    return true;
  }), [client.components, type, status, query, snapshot.states]);

  const filtering = Boolean(query || type || status);
  const dimmedIds = useMemo(() => (filtering ? filtered.map((c) => c.id) : null), [filtering, filtered]);
  const selected = selectedId ? componentById(client, selectedId) : null;

  const locateIn3D = (id) => {
    setView('3d');
    setSelectedId(id);
    // Si veníamos de la lista, la escena se monta y aplica el enfoque en el mismo ciclo.
    setFocusRequest({ id, nonce: Date.now() });
  };

  return (
    <div className="page page--infra">
      <header className="page-head">
        <div>
          <h1 className="page-title">Explorador de infraestructura</h1>
          <p className="page-sub">{client.components.length} componentes representados para {client.name}.</p>
        </div>
        <Segmented label="Tipo de vista" value={view} onChange={setView} options={[
          { value: '3d', label: 'Vista 3D', icon: Box }, { value: 'list', label: 'Lista', icon: List },
        ]} />
      </header>

      <div className="filters" role="search">
        <label className="search">
          <Search size={16} aria-hidden="true" />
          <span className="sr-only">Buscar componentes</span>
          <input type="search" placeholder="Buscar componente" value={query} onChange={(e) => setQuery(e.target.value)} />
        </label>
        <label className="select-inline">
          <span className="sr-only">Tipo</span>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">Todos los tipos</option>
            {Object.entries(COMPONENT_TYPES).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
          </select>
        </label>
        <label className="select-inline">
          <span className="sr-only">Estado</span>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">Todos los estados</option>
            {Object.entries(STATUS_META).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
          </select>
        </label>
        <span className="filters__count" aria-live="polite">{filtered.length} de {client.components.length}</span>
      </div>

      {view === '3d' ? (
        <div className="infra-stage">
          <MonitoringScene
            components={client.components}
            links={client.links}
            states={snapshot.states}
            mood={snapshot.overall}
            selectedId={selectedId}
            onSelect={setSelectedId}
            onPick={(id) => (id ? locateIn3D(id) : setSelectedId(null))}
            focusRequest={focusRequest}
            reducedMotion={reducedMotion}
            quality={prefs.quality}
            labels={prefs.labels}
            dimmedIds={dimmedIds}
          />
          {filtering && <p className="stage-note">Los componentes que no coinciden con los filtros aparecen atenuados.</p>}
        </div>
      ) : filtered.length ? (
        <ComponentTable components={filtered} snapshot={snapshot} selectedId={selectedId} onSelect={setSelectedId} />
      ) : (
        <EmptyState icon={SearchX} title="Ningún componente coincide"
          action={<button type="button" className="btn" onClick={() => { setQuery(''); setType(''); setStatus(''); }}>Quitar filtros</button>}>
          Ajusta la búsqueda, el tipo o el estado.
        </EmptyState>
      )}

      <SidePanel open={Boolean(selected)} title={selected?.name || ''} subtitle="Componente" onClose={() => setSelectedId(null)}>
        {selected && (
          <ComponentDetail componentId={selected.id} onLocate={locateIn3D} locateLabel={view === '3d' ? 'Centrar en la escena' : 'Ubicar en la escena 3D'} />
        )}
      </SidePanel>
    </div>
  );
}
