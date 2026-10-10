import { Building2, Clock, Play, Pause, Sun, Moon } from 'lucide-react';
import { CLIENTS } from '../../data/demoData.js';
import { useDemo } from '../../context/DemoContext.jsx';
import StatusIcon from '../common/StatusIcon.jsx';
import { SimulatedTag } from '../common/Badges.jsx';
import Logo from './Logo.jsx';

export default function TopBar() {
  const { clientId, setClientId, snapshot, playing, setPlaying, route, prefs, setPrefs } = useDemo();
  return (
    <header className="topbar">
      <a href="#/monitoreo" className="topbar__brand" aria-label="DinoAlert"><Logo compact /></a>
      <div className="client-select">
        <Building2 size={17} aria-hidden="true" />
        <label htmlFor="client-select" className="sr-only">Cliente</label>
        <select id="client-select" value={clientId} onChange={(e) => setClientId(e.target.value)}>
          {CLIENTS.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
      </div>

      <div className="overall" data-status={snapshot.overall} role="status" aria-live="polite">
        <StatusIcon status={snapshot.overall} size={18} />
        <span className="overall__text">{snapshot.overallText}</span>
      </div>

      <div className="topbar__right">
        <button type="button" className="scenario-chip" onClick={() => route.navigate('simulacion')} title="Cambiar escenario en el laboratorio">
          Escenario: {snapshot.scenario.name}
        </button>
        <span className="clock" title="Hora de la última lectura simulada">
          <Clock size={15} aria-hidden="true" />Última lectura {snapshot.time}
        </span>
        <button type="button" className="icon-btn" onClick={() => setPlaying(!playing)} aria-label={playing ? 'Pausar simulación' : 'Reproducir simulación'} title={playing ? 'Pausar simulación' : 'Reproducir simulación'}>
          {playing ? <Pause size={17} /> : <Play size={17} />}
        </button>
        <button type="button" className="icon-btn" onClick={() => setPrefs({ ...prefs, theme: prefs.theme === 'dark' ? 'light' : 'dark' })} aria-label={prefs.theme === 'dark' ? 'Usar tema claro' : 'Usar tema oscuro'} title="Cambiar tema">
          {prefs.theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
        </button>
        <SimulatedTag />
      </div>
    </header>
  );
}
