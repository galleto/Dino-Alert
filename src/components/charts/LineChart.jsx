import { useId, useMemo, useState } from 'react';
import { TICKS } from '../../data/demoData.js';
import { tickToTime } from '../../data/engine.js';

const W = 640;
const PAD = { top: 18, right: 14, bottom: 26, left: 44 };

/**
 * Gráfica de línea en SVG.
 * - Muestra solo lo ocurrido hasta `tick` (lo posterior aún no sucede en la simulación).
 * - Los huecos (null) se marcan como "sin datos".
 */
export default function LineChart({
  series, tick, height = 190, unit = '', threshold, markers = [], domain, ariaLabel, formatValue,
}) {
  const uid = useId().replace(/:/g, '');
  const [hover, setHover] = useState(null);
  const H = height;
  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;
  const fmt = formatValue || ((v) => `${Math.round(v)}${unit ? ` ${unit}` : ''}`);

  const { yMin, yMax } = useMemo(() => {
    if (domain) return { yMin: domain[0], yMax: domain[1] };
    let max = threshold?.value || 0;
    series.forEach((s) => s.values.forEach((v, i) => { if (v !== null && i <= tick) max = Math.max(max, v); }));
    return { yMin: 0, yMax: Math.max(1, max * 1.15) };
  }, [series, tick, domain, threshold]);

  const x = (i) => PAD.left + (i / (TICKS - 1)) * innerW;
  const y = (v) => PAD.top + innerH - ((v - yMin) / (yMax - yMin)) * innerH;

  const paths = series.map((s) => {
    let d = '';
    let pen = false;
    s.values.forEach((v, i) => {
      if (i > tick || v === null) { pen = false; return; }
      d += `${pen ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`;
      pen = true;
    });
    return d;
  });

  const gaps = [];
  if (series[0]) {
    let start = null;
    series[0].values.forEach((v, i) => {
      if (i > tick) return;
      if (v === null && start === null) start = i;
      if (v !== null && start !== null) { gaps.push([start, i - 1]); start = null; }
    });
    if (start !== null) gaps.push([start, tick]);
  }

  const yTicks = [0, 0.5, 1].map((k) => yMin + (yMax - yMin) * k);
  const xTicks = [0, 10, 20, 30, 40, 50, 59];

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * W;
    const i = Math.round(((px - PAD.left) / innerW) * (TICKS - 1));
    setHover(i >= 0 && i <= tick ? i : null);
  };

  const last = series.map((s) => {
    for (let i = tick; i >= 0; i--) if (s.values[i] !== null) return s.values[i];
    return null;
  });
  const label = ariaLabel || `${series.map((s, k) => `${s.label}: ${last[k] === null ? 'sin datos' : fmt(last[k])}`).join('; ')} a las ${tickToTime(tick)}`;

  return (
    <figure className="chart">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={label} onPointerMove={onMove} onPointerLeave={() => setHover(null)}>
        <defs>
          <pattern id={`hatch-${uid}`} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="6" className="chart-hatch" />
          </pattern>
        </defs>
        {yTicks.map((v) => (
          <g key={v}>
            <line x1={PAD.left} x2={W - PAD.right} y1={y(v)} y2={y(v)} className="chart-grid" />
            <text x={PAD.left - 8} y={y(v) + 4} className="chart-axis" textAnchor="end">{Math.round(v)}</text>
          </g>
        ))}
        {xTicks.map((t) => (
          <text key={t} x={x(t)} y={H - 6} className="chart-axis" textAnchor="middle">{tickToTime(t)}</text>
        ))}
        {tick < TICKS - 1 && (
          <rect x={x(tick)} y={PAD.top} width={x(TICKS - 1) - x(tick)} height={innerH} className="chart-future" />
        )}
        {gaps.map(([a, b]) => (
          <g key={a}>
            <rect x={x(a) - 2} y={PAD.top} width={Math.max(4, x(b) - x(a) + 4)} height={innerH} fill={`url(#hatch-${uid})`} className="chart-gap" />
            <text x={(x(a) + x(b)) / 2} y={PAD.top + 14} className="chart-gap-label" textAnchor="middle">Sin datos</text>
          </g>
        ))}
        {threshold && (
          <g>
            <line x1={PAD.left} x2={W - PAD.right} y1={y(threshold.value)} y2={y(threshold.value)} className="chart-threshold" />
            <text x={W - PAD.right} y={y(threshold.value) - 5} className="chart-threshold-label" textAnchor="end">{threshold.label}</text>
          </g>
        )}
        {markers.filter((m) => m.tick <= tick).map((m, i) => (
          <g key={`${m.tick}-${i}`} className={`chart-marker chart-marker--${m.type || 'start'}`}>
            <line x1={x(m.tick)} x2={x(m.tick)} y1={PAD.top} y2={PAD.top + innerH} />
            <text x={x(m.tick) + 4} y={PAD.top + innerH - 6}>{m.label}</text>
          </g>
        ))}
        {paths.map((d, k) => (
          <path key={series[k].label} d={d} className="chart-line" style={{ stroke: series[k].color }} />
        ))}
        <line x1={x(tick)} x2={x(tick)} y1={PAD.top - 6} y2={PAD.top + innerH} className="chart-playhead" />
        {hover !== null && (
          <g className="chart-hover">
            <line x1={x(hover)} x2={x(hover)} y1={PAD.top} y2={PAD.top + innerH} />
            {series.map((s) => s.values[hover] !== null && (
              <circle key={s.label} cx={x(hover)} cy={y(s.values[hover])} r="4" style={{ fill: s.color }} />
            ))}
          </g>
        )}
      </svg>
      <figcaption className="chart-caption">
        {hover !== null ? (
          <span>{tickToTime(hover)}: {series.map((s) => `${s.label} ${s.values[hover] === null ? 'sin datos' : fmt(s.values[hover])}`).join(', ')}</span>
        ) : (
          <span className="chart-legend">
            {series.map((s, k) => (
              <span key={s.label}><i style={{ background: s.color }} aria-hidden="true" />{s.label}: {last[k] === null ? 'sin datos' : fmt(last[k])}</span>
            ))}
          </span>
        )}
      </figcaption>
    </figure>
  );
}
