/** Control segmentado accesible (grupo de botones con aria-pressed). */
export default function Segmented({ label, options, value, onChange, size = 'md' }) {
  return (
    <div className={`segmented segmented--${size}`} role="group" aria-label={label}>
      {options.map((o) => (
        <button key={o.value} type="button" aria-pressed={value === o.value} onClick={() => onChange(o.value)}>
          {o.icon && <o.icon size={15} aria-hidden="true" />}
          {o.label}
        </button>
      ))}
    </div>
  );
}
