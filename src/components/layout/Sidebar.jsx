import { Radar, Bell, Server, Stethoscope, History, FlaskConical, Settings } from 'lucide-react';
import Logo from './Logo.jsx';
import { useDemo } from '../../context/DemoContext.jsx';

export const NAV = [
  { page: 'monitoreo', label: 'Monitoreo', icon: Radar },
  { page: 'alertas', label: 'Alertas', icon: Bell },
  { page: 'infraestructura', label: 'Infraestructura', icon: Server },
  { page: 'diagnostico', label: 'Diagnóstico', icon: Stethoscope },
  { page: 'historial', label: 'Historial', icon: History },
  { page: 'simulacion', label: 'Laboratorio', icon: FlaskConical },
  { page: 'configuracion', label: 'Configuración', icon: Settings },
];

export default function Sidebar() {
  const { route, snapshot } = useDemo();
  const open = snapshot.openAlerts.length;
  return (
    <nav className="sidebar" aria-label="Navegación principal">
      <a href="#/monitoreo" className="sidebar__brand" aria-label="DinoAlert, ir al centro de monitoreo"><Logo /></a>
      <p className="sidebar__slogan">Detecta hoy, evita la llamada.</p>
      <ul className="sidebar__list">
        {NAV.map(({ page, label, icon: Icon }) => (
          <li key={page}>
            <a href={`#/${page}`} className="nav-link" aria-current={route.page === page ? 'page' : undefined}>
              <Icon size={19} aria-hidden="true" />
              <span className="nav-link__label">{label}</span>
              {page === 'alertas' && open > 0 && <span className="nav-count" aria-label={`${open} abiertas`}>{open}</span>}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
