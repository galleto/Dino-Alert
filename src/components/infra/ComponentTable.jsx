import { StatusBadge } from '../common/Badges.jsx';
import { COMPONENT_TYPES, ZONES } from '../../data/demoData.js';
import { formatMetric } from '../../data/engine.js';

export default function ComponentTable({ components, snapshot, selectedId, onSelect }) {
  return (
    <div className="table-wrap">
      <table className="table">
        <caption className="sr-only">Componentes de la infraestructura simulada</caption>
        <thead>
          <tr>
            <th scope="col">Componente</th>
            <th scope="col">Tipo</th>
            <th scope="col">Zona</th>
            <th scope="col">Estado</th>
            <th scope="col" className="num">Procesador</th>
            <th scope="col" className="num">Respuesta</th>
            <th scope="col" className="num">Alertas</th>
          </tr>
        </thead>
        <tbody>
          {components.map((c) => {
            const m = snapshot.metricsNow[c.id];
            const n = snapshot.alerts.filter((a) => a.componentId === c.id && a.status !== 'cerrada').length;
            return (
              <tr key={c.id} aria-selected={selectedId === c.id} data-selected={selectedId === c.id}>
                <th scope="row">
                  <button type="button" className="row-btn" onClick={() => onSelect(c.id)}>{c.name}</button>
                </th>
                <td>{COMPONENT_TYPES[c.type].label}</td>
                <td>{ZONES[c.zone].label}</td>
                <td><StatusBadge status={snapshot.states[c.id]} short /></td>
                <td className="num">{formatMetric('cpu', m.cpu)}</td>
                <td className="num">{formatMetric('latency', m.latency)}</td>
                <td className="num">{n || '—'}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
