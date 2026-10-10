import { STATUS_META, ZONES } from '../data/demoData.js';
import StatusIcon from '../components/common/StatusIcon.jsx';

/** Vista 2D cuando WebGL no está disponible: mismos datos, mismas acciones. */
export default function SceneFallback({ components, states, selectedId, onSelect, reason }) {
  const zones = Object.keys(ZONES).filter((z) => components.some((c) => c.zone === z));
  return (
    <div className="scene-fallback">
      <p className="scene-fallback__note">
        {reason === 'error'
          ? 'La vista 3D se detuvo en este equipo. Mostramos la misma infraestructura en 2D.'
          : 'Este navegador no admite WebGL. Mostramos la infraestructura en 2D.'}
      </p>
      <div className="fallback-zones">
        {zones.map((z) => (
          <section key={z} className="fallback-zone" aria-label={ZONES[z].label}>
            <h3>{ZONES[z].label}</h3>
            <div className="fallback-grid">
              {components.filter((c) => c.zone === z).map((c) => {
                const st = states[c.id] || 'normal';
                return (
                  <button key={c.id} type="button" className="fallback-tile" data-status={st}
                    aria-pressed={selectedId === c.id} onClick={() => onSelect(c.id)}>
                    <StatusIcon status={st} size={16} />
                    <span className="fallback-tile__name">{c.name}</span>
                    <span className="fallback-tile__status">{STATUS_META[st].short}</span>
                  </button>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
