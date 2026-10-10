const TYPE_LABEL = { normal: 'Normal', suspicious: 'Señal', risk: 'Riesgo', nodata: 'Sin datos', current: 'Ahora', user: 'Acción' };

/** Línea de tiempo: la secuencia sí importa, por eso se presenta ordenada. */
export default function AlertTimeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((it, i) => (
        <li key={`${it.tick}-${i}`} className="timeline__item" data-type={it.type}>
          <span className="timeline__dot" aria-hidden="true" />
          <time className="timeline__time">{it.time}</time>
          <span className="timeline__text">{it.label}</span>
          <span className="timeline__kind">{TYPE_LABEL[it.type] || ''}</span>
        </li>
      ))}
    </ol>
  );
}
