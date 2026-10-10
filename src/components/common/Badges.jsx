import { STATUS_META, PRIORITY_META, ALERT_STATUS_META } from '../../data/demoData.js';
import StatusIcon from './StatusIcon.jsx';

export function StatusBadge({ status = 'normal', short = false }) {
  return (
    <span className="badge badge--status" data-status={status}>
      <StatusIcon status={status} size={14} />
      {short ? STATUS_META[status].short : STATUS_META[status].label}
    </span>
  );
}

export function PriorityBadge({ priority }) {
  const meta = PRIORITY_META[priority] || PRIORITY_META.info;
  return (
    <span className="badge badge--priority" data-priority={priority}>
      <span className="priority-bars" aria-hidden="true">
        {[1, 2, 3].map((i) => <i key={i} data-on={i <= meta.rank} />)}
      </span>
      {priority === 'info' ? meta.label : `Prioridad ${meta.label.toLowerCase()}`}
    </span>
  );
}

export function AlertStatusBadge({ status }) {
  return <span className="badge badge--alert-status" data-astatus={status}>{ALERT_STATUS_META[status]?.label || status}</span>;
}

export function SimulatedTag({ children = 'Datos simulados' }) {
  return <span className="sim-tag" title="Información de demostración generada en el navegador; no proviene de un detector real.">{children}</span>;
}
