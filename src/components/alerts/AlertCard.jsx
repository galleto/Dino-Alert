import { ChevronRight, Clock } from 'lucide-react';
import { PriorityBadge, AlertStatusBadge } from '../common/Badges.jsx';
import StatusIcon from '../common/StatusIcon.jsx';

export default function AlertCard({ alert, onOpen, compact = false }) {
  return (
    <article className={`alert-card ${compact ? 'alert-card--compact' : ''}`} data-priority={alert.priority} data-astatus={alert.status}>
      <button type="button" className="alert-card__hit" onClick={() => onOpen(alert)} aria-label={`Ver detalles: ${alert.title}`} />
      <div className="alert-card__icon"><StatusIcon status={alert.severity} size={18} /></div>
      <div className="alert-card__main">
        <h3 className="alert-card__title">{alert.title}</h3>
        {!compact && <p className="alert-card__summary">{alert.summary}</p>}
        <div className="alert-card__meta">
          <PriorityBadge priority={alert.priority} />
          {!compact && <AlertStatusBadge status={alert.status} />}
          <span className="meta-time"><Clock size={13} aria-hidden="true" />Desde {alert.startedAt}</span>
          {!compact && <span className="meta-comp">{alert.componentName}</span>}
        </div>
      </div>
      <span className="alert-card__go" aria-hidden="true">{compact ? <ChevronRight size={16} /> : <span className="link-like">Ver detalles<ChevronRight size={15} /></span>}</span>
    </article>
  );
}
