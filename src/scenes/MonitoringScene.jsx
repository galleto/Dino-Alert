import { Component, useEffect, useRef, useState } from 'react';
import { RotateCcw, ZoomIn, ZoomOut, Crosshair } from 'lucide-react';
import { SceneController } from './SceneController.js';
import { hasWebGL } from './webgl.js';
import SceneFallback from './SceneFallback.jsx';
import { STATUS_META } from '../data/demoData.js';

class SceneErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { failed: false }; }
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch(err) { console.error('[DinoAlert] Error en la escena 3D:', err); }
  render() { return this.state.failed ? this.props.fallback : this.props.children; }
}

/**
 * Escena 3D del centro de monitoreo.
 * Recibe los mismos datos que el resto de la app (componentes, enlaces, estados).
 */
function SceneCanvas({
  components, links, states, mood, selectedId, onSelect, focusRequest,
  reducedMotion, quality, labels, dimmedIds, compact, onFail,
}) {
  const hostRef = useRef(null);
  const ctrlRef = useRef(null);
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;

  useEffect(() => {
    let ctrl;
    try {
      ctrl = new SceneController(hostRef.current, {
        onSelect: (id) => onSelectRef.current?.(id),
        onError: onFail,
        quality, reducedMotion, labels, compact,
      });
    } catch (err) {
      console.error('[DinoAlert] No se pudo iniciar WebGL:', err);
      onFail?.(err);
      return undefined;
    }
    ctrlRef.current = ctrl;
    return () => { ctrl.dispose(); ctrlRef.current = null; };
    // El controlador solo se recrea si cambia la calidad (opciones del renderizador).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quality, compact]);

  useEffect(() => { ctrlRef.current?.setInfrastructure(components, links); }, [components, links, quality, compact]);
  useEffect(() => { ctrlRef.current?.setStates(states, mood); }, [states, mood, components, quality, compact]);
  useEffect(() => { ctrlRef.current?.setSelected(selectedId); }, [selectedId, components, quality, compact]);
  useEffect(() => { ctrlRef.current?.setDimmed(dimmedIds); }, [dimmedIds, components, quality, compact]);
  useEffect(() => { ctrlRef.current?.setLabels(labels); }, [labels, quality, compact]);
  useEffect(() => { ctrlRef.current?.setReducedMotion(reducedMotion); }, [reducedMotion, quality, compact]);
  useEffect(() => {
    if (focusRequest?.id) ctrlRef.current?.focusOn(focusRequest.id);
  }, [focusRequest, components, quality, compact]);

  const act = (fn) => () => ctrlRef.current && fn(ctrlRef.current);

  return (
    <>
      <div ref={hostRef} className="scene-host" />
      <div className="scene-tools" role="toolbar" aria-label="Controles de cámara">
        <button type="button" className="icon-btn" onClick={act((c) => c.zoom(0.8))} aria-label="Acercar" title="Acercar"><ZoomIn size={18} /></button>
        <button type="button" className="icon-btn" onClick={act((c) => c.zoom(1.25))} aria-label="Alejar" title="Alejar"><ZoomOut size={18} /></button>
        <button type="button" className="icon-btn" onClick={act((c) => c.resetView())} aria-label="Restablecer vista" title="Restablecer vista"><RotateCcw size={18} /></button>
        {selectedId && (
          <button type="button" className="icon-btn" onClick={act((c) => c.focusOn(selectedId))} aria-label="Centrar componente seleccionado" title="Centrar selección"><Crosshair size={18} /></button>
        )}
      </div>
    </>
  );
}

export default function MonitoringScene(props) {
  const { components, states, selectedId, onSelect, onPick, compact, showLegend = true, illustrative = true } = props;
  const [supported] = useState(() => hasWebGL());
  const [failed, setFailed] = useState(false);
  const fallback = <SceneFallback components={components} states={states} selectedId={selectedId} onSelect={onSelect} reason={failed ? 'error' : 'unsupported'} />;

  return (
    <div className={`scene ${compact ? 'scene--compact' : ''}`}>
      {supported && !failed ? (
        <SceneErrorBoundary fallback={fallback}>
          <SceneCanvas {...props} onFail={() => setFailed(true)} />
        </SceneErrorBoundary>
      ) : fallback}

      {/* Alternativa accesible por teclado a hacer clic en la escena */}
      <div className="scene-picker">
        <label className="sr-only" htmlFor={`picker-${compact ? 'c' : 'm'}`}>Ir a un componente</label>
        <select
          id={`picker-${compact ? 'c' : 'm'}`}
          value={selectedId || ''}
          onChange={(e) => (onPick || onSelect)(e.target.value || null)}
        >
          <option value="">Ir a un componente…</option>
          {components.map((c) => (
            <option key={c.id} value={c.id}>{c.name} ({STATUS_META[states[c.id] || 'normal'].short})</option>
          ))}
        </select>
      </div>

      {showLegend && (
        <div className="scene-legend" aria-label="Leyenda de estados">
          {Object.entries(STATUS_META).map(([key, meta]) => (
            <span key={key} className="legend-item" data-status={key}>
              <i aria-hidden="true" />{meta.label}
            </span>
          ))}
          {!compact && <span className="legend-note">Meteorito: señal que se acerca a un componente</span>}
        </div>
      )}
      {illustrative && <p className="scene-disclaimer">Representación ilustrativa con datos simulados</p>}
    </div>
  );
}
