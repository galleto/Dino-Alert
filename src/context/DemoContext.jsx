import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { TICKS, CLIENTS } from '../data/demoData.js';
import { buildSnapshot, buildHistory } from '../data/engine.js';
import { useSystemReducedMotion } from '../hooks/useSystemReducedMotion.js';
import { useHashRoute } from '../hooks/useHashRoute.js';

const DemoContext = createContext(null);

export const DEFAULT_PREFS = {
  theme: 'dark',        // 'dark' | 'light'
  motion: 'system',     // 'system' | 'full' | 'reduced'
  labels: 'all',        // 'all' | 'flagged'
  quality: 'high',      // 'high' | 'light'
};

const DEFAULT_DEMO = { clientId: CLIENTS[0].id, scenarioId: 'suspicious', tick: 45, speed: 1 };

export function DemoProvider({ children }) {
  const route = useHashRoute();
  const [clientId, setClientIdRaw] = useState(DEFAULT_DEMO.clientId);
  const [scenarioId, setScenarioIdRaw] = useState(DEFAULT_DEMO.scenarioId);
  const [tick, setTick] = useState(DEFAULT_DEMO.tick);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(DEFAULT_DEMO.speed);
  const [overrides, setOverrides] = useState({});
  const [prefs, setPrefs] = useState(DEFAULT_PREFS);
  const [focusRequest, setFocusRequest] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);

  const systemReduced = useSystemReducedMotion();
  const reducedMotion = prefs.motion === 'system' ? systemReduced : prefs.motion === 'reduced';

  /* Reloj de la simulación */
  useEffect(() => {
    if (!playing) return undefined;
    const id = setInterval(() => {
      setTick((t) => {
        if (t >= TICKS - 1) { setPlaying(false); return t; }
        return t + 1;
      });
    }, 1000 / speed);
    return () => clearInterval(id);
  }, [playing, speed]);

  useEffect(() => {
    document.documentElement.dataset.theme = prefs.theme;
    document.documentElement.dataset.motion = reducedMotion ? 'reduced' : 'full';
  }, [prefs.theme, reducedMotion]);

  const notify = useCallback((message) => {
    setToast({ message, id: Date.now() });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 3200);
  }, []);

  const setClientId = useCallback((id) => {
    setClientIdRaw(id);
    setFocusRequest(null);
    setSelectedId(null);
    const c = CLIENTS.find((x) => x.id === id);
    if (c) notify(`Mostrando ${c.name}`);
  }, [notify]);

  const setScenarioId = useCallback((id) => {
    setScenarioIdRaw(id);
  }, []);

  const setAlertStatus = useCallback((alertId, status) => {
    setOverrides((o) => {
      const next = { ...o };
      if (status === 'activa') delete next[alertId]; else next[alertId] = status;
      return next;
    });
    notify(status === 'cerrada' ? 'Alerta cerrada' : status === 'revision' ? 'Alerta marcada en revisión' : 'Alerta reabierta');
  }, [notify]);

  /** Pide a la escena 3D centrar un componente y lleva al usuario a una vista con escena. */
  const locateComponent = useCallback((componentId, page = 'monitoreo') => {
    setSelectedId(componentId);
    setFocusRequest({ id: componentId, nonce: Date.now() });
    if (route.page !== page && page) route.navigate(page);
  }, [route]);

  const resetDemo = useCallback(() => {
    setClientIdRaw(DEFAULT_DEMO.clientId);
    setScenarioIdRaw(DEFAULT_DEMO.scenarioId);
    setTick(DEFAULT_DEMO.tick);
    setSpeed(DEFAULT_DEMO.speed);
    setPlaying(false);
    setOverrides({});
    setPrefs(DEFAULT_PREFS);
    setFocusRequest(null);
    setSelectedId(null);
    notify('Configuración de demostración restablecida');
  }, [notify]);

  const snapshot = useMemo(
    () => buildSnapshot(clientId, scenarioId, tick, overrides),
    [clientId, scenarioId, tick, overrides],
  );
  const history = useMemo(() => buildHistory(snapshot.client), [snapshot.client]);

  const value = {
    route,
    clientId, setClientId,
    scenarioId, setScenarioId,
    tick, setTick, playing, setPlaying, speed, setSpeed,
    overrides, setAlertStatus,
    prefs, setPrefs, reducedMotion,
    focusRequest, setFocusRequest, locateComponent,
    selectedId, setSelectedId,
    snapshot, history,
    toast, notify, resetDemo,
  };
  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
}

export function useDemo() {
  const ctx = useContext(DemoContext);
  if (!ctx) throw new Error('useDemo debe usarse dentro de DemoProvider');
  return ctx;
}
