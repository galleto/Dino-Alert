import { CheckCircle2 } from 'lucide-react';
import { useDemo } from '../../context/DemoContext.jsx';

export default function Toast() {
  const { toast } = useDemo();
  return (
    <div className="toast-region" role="status" aria-live="polite">
      {toast && (
        <div className="toast" key={toast.id}>
          <CheckCircle2 size={16} aria-hidden="true" />{toast.message}
        </div>
      )}
    </div>
  );
}
