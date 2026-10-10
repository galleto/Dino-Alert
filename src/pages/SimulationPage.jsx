import { useMemo } from 'react';
import { Play, Pause, RotateCcw, SkipForward, FlaskConical, CheckCircle2, Eye, AlertTriangle, WifiOff } from 'lucide-react';
import { useDemo } from '../context/DemoContext.jsx';
import MonitoringScene from '../scenes/MonitoringScene.jsx';
import LineChart from '../components/charts/LineChart.jsx';
import Segmented from '../components/common/Segmented.jsx';
import StatusIcon from '../components/common/StatusIcon.jsx';
import { PriorityBadge } from '../components/common/Badges.jsx';
import { SCENARIOS, TICKS, METRICS, SIGNAL_KINDS, STATUS_META } from '../data/demoData.js';
import { tickToTime, resolveSignals, componentById, metricSeries, formatMetric, metricThreshold } from '../data/engine.js';

const SCENARIO_ICON = { normal: CheckCircle2, suspicious: Eye, elevated: AlertTriangle, dataloss: WifiOff };
const LINE_COLORS = ['var(--pink)', 'var(--orange)', 'var(--yellow)', 'var(--pink-light)'];

export default function SimulationPage() {
  const {
    snapshot, scenarioId, setScenarioId, tick, setTick, playing, setPlaying, speed, setSpeed,
    prefs, reducedMotion, selectedId, setSelectedId, focusRequest, route, notify,
  } = useDemo();
  const { client } = snapshot;

  // Marcas de la línea de tiempo: inicio y escalamiento de cada señal del escenario.
  const marks = useMemo(() => {
    const out = [];
    resolveSignals(client, snapshot.scenario).forEach((s) => {
      const name = componentById(client, s.componentId).name;
      out.push({ tick: s.start, type: s.severity, label: `${SIGNAL_KINDS[s.kind].label}: ${name}` });
      if (s.escalate) out.push({ tick: s.escalate.at, type: 'risk', label: `Escala a riesgo: ${name}` });
    });
    return out.sort((a, b) => a.tick - b.tick);
  }, [client, snapshot.scenario]);

  // Gráfica: la métrica principal de cada señal del escenario (o una de referencia si no hay señales).
  const chart = useMemo(() => {
    const signals = resolveSignals(client, snapshot.scenario).filter((s) => s.kind !== 'no-data').slice(0, 3);
    const picks = signals.length
      ? signals.map((s) => ({ comp: componentById(client, s.componentId), metric: SIGNAL_KINDS[s.kind].metrics[0] }))
      : [{ comp: client.components.find((c) => c.role === 'db'), metric: 'cpu' }];
    const allPercent = picks.every((p) => METRICS[p.metric].percent);
    const sameMetric = picks.every((p) => p.metric === picks[0].metric);
    // Para comparar métricas con unidades distintas se expresan como % de su límite de referencia.
    const normalize = !sameMetric && !allPercent;
    const series = picks.map((p, i) => {
      const raw = metricSeries(p.comp, p.metric, snapshot.signals);
      const base = metricThreshold(p.comp, p.metric) || 1;
      return {
        label: `${METRICS[p.metric].label}, ${p.comp.name}`,
        color: LINE_COLORS[i],
        values: normalize ? raw.map((v) => (v === null ? null : Math.round((v / base) * 100))) : raw,
      };
    });
    return { series, normalize, metric: picks[0].metric, allPercent };
  }, [client, snapshot.scenario, snapshot.signals]);

  const chooseScenario = (id) => {
    setScenarioId(id);
    notify(`Escenario: ${SCENARIOS.find((s) => s.id === id).name}`);
  };
  const reset = () => { setPlaying(false); setTick(0); notify('Simulación reiniciada a las 09:00'); };
  const step = () => setTick(Math.min(TICKS - 1, tick + 1));
  const togglePlay = () => {
    if (!playing && tick >= TICKS - 1) setTick(0);
    setPlaying(!playing);
  };

  return (
    <div className="page page--lab">
      <header className="page-head">
        <div>
          <h1 className="page-title">Laboratorio de simulación</h1>
          <p className="page-sub">Explora cómo se vería {client.name} en distintas situaciones.</p>
        </div>
      </header>

      <div className="notice notice--sim" role="note">
        <FlaskConical size={18} aria-hidden="true" />
        <p>Todo lo que ocurre aquí es <strong>simulado</strong>. Los escenarios se generan en el navegador para demostrar la interfaz; no hay un detector real conectado.</p>
      </div>

      <fieldset className="scenario-picker">
        <legend className="block-title">Escenario</legend>
        {SCENARIOS.map((s) => {
          const Icon = SCENARIO_ICON[s.id];
          return (
            <label key={s.id} className="scenario-option" data-active={scenarioId === s.id}>
              <input type="radio" name="scenario" value={s.id} checked={scenarioId === s.id} onChange={() => chooseScenario(s.id)} />
              <Icon size={20} aria-hidden="true" />
              <span className="scenario-option__name">{s.name}</span>
              <span className="scenario-option__desc">{s.description}</span>
            </label>
          );
        })}
      </fieldset>

      <section className="player" aria-label="Controles de la simulación">
        <div className="player__buttons">
          <button type="button" className="btn btn--primary" onClick={togglePlay}>
            {playing ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}{playing ? 'Pausar' : 'Iniciar'}
          </button>
          <button type="button" className="btn" onClick={step} disabled={tick >= TICKS - 1}><SkipForward size={16} aria-hidden="true" />Avanzar 1 min</button>
          <button type="button" className="btn btn--ghost" onClick={reset}><RotateCcw size={16} aria-hidden="true" />Reiniciar</button>
          <Segmented label="Velocidad" size="sm" value={speed} onChange={setSpeed}
            options={[{ value: 1, label: '1×' }, { value: 2, label: '2×' }, { value: 4, label: '4×' }]} />
        </div>
        <div className="player__clock" aria-live="off">
          <span className="player__time">{tickToTime(tick)}</span>
          <span className="muted small">minuto {tick + 1} de {TICKS}</span>
        </div>

        <div className="scrubber">
          <label htmlFor="scrub" className="sr-only">Minuto simulado</label>
          <input id="scrub" type="range" min="0" max={TICKS - 1} value={tick}
            onChange={(e) => setTick(Number(e.target.value))}
            aria-valuetext={`${tickToTime(tick)}`} style={{ '--p': `${(tick / (TICKS - 1)) * 100}%` }} />
          <div className="scrubber__marks" aria-hidden="true">
            {marks.map((m) => (
              <span key={`${m.tick}-${m.label}`} className="scrubber__mark" data-type={m.type} data-past={m.tick <= tick}
                style={{ left: `${(m.tick / (TICKS - 1)) * 100}%` }} title={`${tickToTime(m.tick)} ${m.label}`} />
            ))}
          </div>
          <div className="scrubber__scale" aria-hidden="true"><span>09:00</span><span>09:30</span><span>09:59</span></div>
        </div>

        {marks.length > 0 && (
          <ol className="mark-list">
            {marks.map((m) => (
              <li key={`${m.tick}-${m.label}`} data-past={m.tick <= tick}>
                <button type="button" className="mark-list__btn" onClick={() => { setPlaying(false); setTick(m.tick); }}>
                  <time>{tickToTime(m.tick)}</time><StatusIcon status={m.type} size={14} />{m.label}
                </button>
              </li>
            ))}
          </ol>
        )}
      </section>

      <div className="lab-grid">
        <div className="lab-scene">
          <MonitoringScene
            compact
            components={client.components}
            links={client.links}
            states={snapshot.states}
            mood={snapshot.overall}
            selectedId={selectedId}
            onSelect={setSelectedId}
            focusRequest={focusRequest}
            reducedMotion={reducedMotion}
            quality={prefs.quality}
            labels="flagged"
          />
        </div>
        <div className="lab-side">
          <section className="card-plain">
            <h2 className="block-title">Estado a las {snapshot.time}</h2>
            <p className="overall-big" data-status={snapshot.overall}><StatusIcon status={snapshot.overall} size={20} />{snapshot.overallText}</p>
            <ul className="count-grid count-grid--inline">
              {Object.entries(STATUS_META).map(([k, m]) => (
                <li key={k} data-status={k}><span className="count-grid__n">{snapshot.counts[k]}</span><span className="count-grid__label">{m.short}</span></li>
              ))}
            </ul>
          </section>
          <section className="card-plain">
            <h2 className="block-title">Alertas generadas</h2>
            {snapshot.alerts.length ? (
              <ul className="link-list">
                {snapshot.alerts.map((a) => (
                  <li key={a.id}>
                    <button type="button" className="link-row" onClick={() => route.navigate('diagnostico', a.id)}>
                      <span>{a.title}</span><PriorityBadge priority={a.priority} />
                    </button>
                  </li>
                ))}
              </ul>
            ) : <p className="muted small">Ninguna todavía. {marks[0] ? `La primera señal aparece a las ${tickToTime(marks[0].tick)}.` : 'Este escenario no genera alertas.'}</p>}
          </section>
        </div>
      </div>

      <section className="card-plain">
        <h2 className="block-title">{chart.normalize ? 'Señales del escenario (% de su límite de referencia)' : `${METRICS[chart.metric].label} de los componentes con señal`}</h2>
        <LineChart
          series={chart.series}
          tick={tick}
          height={220}
          unit={chart.normalize ? '%' : METRICS[chart.metric].unit}
          markers={marks.map((m) => ({ tick: m.tick, label: '', type: m.type }))}
          domain={!chart.normalize && chart.allPercent ? [0, 100] : undefined}
          threshold={chart.normalize ? { value: 100, label: 'Límite de referencia' } : undefined}
          formatValue={chart.normalize ? (v) => `${Math.round(v)} %` : (v) => formatMetric(chart.metric, v)}
        />
      </section>
    </div>
  );
}
