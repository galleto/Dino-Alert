/** Mini tendencia de los últimos minutos. */
export default function Sparkline({ values, tick, color = 'currentColor', width = 96, height = 26, points = 20 }) {
  const from = Math.max(0, tick - points + 1);
  const slice = values.slice(from, tick + 1);
  const valid = slice.filter((v) => v !== null);
  if (!valid.length) return <span className="sparkline-empty">Sin datos</span>;
  const max = Math.max(...valid) * 1.1 || 1;
  const min = Math.min(...valid) * 0.9;
  const span = max - min || 1;
  let d = '';
  let pen = false;
  slice.forEach((v, i) => {
    if (v === null) { pen = false; return; }
    const px = (i / Math.max(1, points - 1)) * width;
    const py = height - ((v - min) / span) * height;
    d += `${pen ? 'L' : 'M'}${px.toFixed(1)},${py.toFixed(1)}`;
    pen = true;
  });
  return (
    <svg className="sparkline" width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden="true">
      <path d={d} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
