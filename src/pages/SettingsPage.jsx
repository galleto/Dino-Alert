import { Moon, Sun, RotateCcw } from 'lucide-react';
import { useDemo, DEFAULT_PREFS } from '../context/DemoContext.jsx';
import Segmented from '../components/common/Segmented.jsx';
import { CLIENTS } from '../data/demoData.js';

function Row({ title, help, children }) {
  return (
    <div className="setting-row">
      <div className="setting-row__text">
        <h3>{title}</h3>
        {help && <p>{help}</p>}
      </div>
      <div className="setting-row__control">{children}</div>
    </div>
  );
}

export default function SettingsPage() {
  const { prefs, setPrefs, clientId, setClientId, resetDemo, reducedMotion, notify } = useDemo();
  const set = (key, label) => (value) => { setPrefs({ ...prefs, [key]: value }); notify(`${label} actualizado`); };

  return (
    <div className="page page--narrow">
      <header className="page-head">
        <div>
          <h1 className="page-title">Configuración visual</h1>
          <p className="page-sub">Estas preferencias solo afectan a esta sesión del navegador; no se guardan en ningún servidor.</p>
        </div>
      </header>

      <section className="card-plain">
        <h2 className="block-title">Cliente de demostración</h2>
        <div className="client-options" role="radiogroup" aria-label="Cliente de demostración">
          {CLIENTS.map((c) => (
            <label key={c.id} className="client-option" data-active={clientId === c.id}>
              <input type="radio" name="client" checked={clientId === c.id} onChange={() => setClientId(c.id)} />
              <span className="client-option__name">{c.name}</span>
              <span className="client-option__desc">{c.sector}. {c.components.length} componentes.</span>
            </label>
          ))}
        </div>
      </section>

      <section className="card-plain">
        <h2 className="block-title">Interfaz</h2>
        <Row title="Tema" help="La escena 3D conserva su fondo oscuro en ambos temas para que las señales mantengan contraste.">
          <Segmented label="Tema" value={prefs.theme} onChange={set('theme', 'Tema')}
            options={[{ value: 'dark', label: 'Oscuro', icon: Moon }, { value: 'light', label: 'Claro', icon: Sun }]} />
        </Row>
        <Row title="Animaciones" help={`Con movimiento reducido se detienen pulsos, meteoritos y transiciones de cámara. Estado actual: ${reducedMotion ? 'reducido' : 'completo'}.`}>
          <Segmented label="Animaciones" value={prefs.motion} onChange={set('motion', 'Movimiento')}
            options={[{ value: 'system', label: 'Según el sistema' }, { value: 'full', label: 'Completas' }, { value: 'reduced', label: 'Reducidas' }]} />
        </Row>
        <Row title="Etiquetas en la escena" help="Mostrar el nombre de todos los componentes o solo de los que tienen una señal.">
          <Segmented label="Etiquetas" value={prefs.labels} onChange={set('labels', 'Etiquetas')}
            options={[{ value: 'all', label: 'Todas' }, { value: 'flagged', label: 'Solo con señal' }]} />
        </Row>
        <Row title="Calidad 3D" help="La opción ligera desactiva sombras y suavizado para equipos más modestos.">
          <Segmented label="Calidad 3D" value={prefs.quality} onChange={set('quality', 'Calidad 3D')}
            options={[{ value: 'high', label: 'Alta' }, { value: 'light', label: 'Ligera' }]} />
        </Row>
      </section>

      <section className="card-plain">
        <h2 className="block-title">Restablecer</h2>
        <Row title="Volver a la configuración inicial" help="Regresa al primer cliente, al escenario de señales sospechosas, a las 09:45 y a las preferencias predeterminadas. También reabre las alertas cerradas.">
          <button type="button" className="btn" onClick={resetDemo} disabled={false}><RotateCcw size={16} aria-hidden="true" />Restablecer demostración</button>
        </Row>
        <p className="muted small">Preferencias predeterminadas: tema {DEFAULT_PREFS.theme === 'dark' ? 'oscuro' : 'claro'}, animaciones según el sistema, todas las etiquetas, calidad alta.</p>
      </section>
    </div>
  );
}
