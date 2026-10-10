import { useMemo } from 'react';
import LineChart from '../charts/LineChart.jsx';
import { METRICS } from '../../data/demoData.js';
import { metricSeries, metricThreshold, formatMetric, componentById } from '../../data/engine.js';

const COLORS = { cpu: 'var(--pink)', ram: 'var(--pink-light)', disk: 'var(--orange)', latency: 'var(--pink)', errors: 'var(--orange)' };

/** Gráfica de una métrica del componente con las marcas de la alerta. */
export default function MetricEvidence({ snapshot, alert, metric, height = 170 }) {
  const comp = componentById(snapshot.client, alert.componentId);
  const values = useMemo(() => metricSeries(comp, metric, snapshot.signals), [comp, metric, snapshot.signals]);
  const markers = [{ tick: alert.startTick, label: 'Inicio', type: 'start' }];
  if (alert.escalateTick !== null) markers.push({ tick: alert.escalateTick, label: 'Escala', type: 'risk' });
  const m = METRICS[metric];
  return (
    <div className="evidence">
      <h4 className="evidence__title">{m.label} <span>({m.unit})</span></h4>
      <LineChart
        series={[{ label: m.label, values, color: COLORS[metric] }]}
        tick={snapshot.tick}
        unit={m.unit}
        height={height}
        threshold={{ value: metricThreshold(comp, metric), label: 'Límite de referencia' }}
        markers={markers}
        domain={m.percent ? [0, 100] : undefined}
        formatValue={(v) => formatMetric(metric, v)}
      />
    </div>
  );
}
