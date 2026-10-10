import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

/** Panel lateral que muestra detalles sin perder el contexto. Esc lo cierra. */
export default function SidePanel({ open, title, subtitle, onClose, children, footer, wide = false }) {
  const ref = useRef(null);
  const lastFocus = useRef(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  useEffect(() => {
    if (!open) return undefined;
    lastFocus.current = document.activeElement;
    ref.current?.focus({ preventScroll: true });
    const onKey = (e) => { if (e.key === 'Escape') closeRef.current?.(); };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      if (lastFocus.current?.focus) lastFocus.current.focus();
    };
  }, [open, title]);

  if (!open) return null;
  return (
    <aside className={`side-panel ${wide ? 'side-panel--wide' : ''}`} role="dialog" aria-label={title} tabIndex={-1} ref={ref}>
      <header className="side-panel__head">
        <div>
          <h2 className="side-panel__title">{title}</h2>
          {subtitle && <div className="side-panel__sub">{subtitle}</div>}
        </div>
        <button type="button" className="icon-btn" onClick={onClose} aria-label="Cerrar panel"><X size={18} /></button>
      </header>
      <div className="side-panel__body">{children}</div>
      {footer && <footer className="side-panel__foot">{footer}</footer>}
    </aside>
  );
}
