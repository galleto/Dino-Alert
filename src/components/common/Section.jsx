export default function Section({ title, aside, children, className = '' }) {
  return (
    <section className={`section ${className}`}>
      {(title || aside) && (
        <div className="section__head">
          {title && <h2 className="section__title">{title}</h2>}
          {aside}
        </div>
      )}
      {children}
    </section>
  );
}
