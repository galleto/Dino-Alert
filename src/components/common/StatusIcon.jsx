import { CheckCircle2, Eye, AlertTriangle, WifiOff } from 'lucide-react';

const ICONS = { normal: CheckCircle2, suspicious: Eye, risk: AlertTriangle, nodata: WifiOff };

export default function StatusIcon({ status = 'normal', size = 16, ...rest }) {
  const Icon = ICONS[status] || CheckCircle2;
  return <Icon size={size} aria-hidden="true" className={`status-icon status-icon--${status}`} {...rest} />;
}
