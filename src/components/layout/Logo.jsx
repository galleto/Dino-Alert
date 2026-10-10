/** Marca DinoAlert: perfil de T-Rex rosa + logotipo. */
export default function Logo({ compact = false }) {
  return (
    <span className="logo">
      <svg viewBox="0 0 40 32" width="34" height="28" aria-hidden="true">
        <path d="M4 25v-8c0-6 4-10 11-10h9c5 0 9 3 9 7.5V18h-8v2.6h5v3H19.5V26l-2.6 3.5h-3.7l-1.2-4.5H4z" fill="var(--pink)" />
        <path d="M24 18h9v1.5c0 1.2-1 2.1-2.2 2.1H24z" fill="var(--pink-light)" />
        <circle cx="25" cy="12" r="1.8" fill="var(--bg-0)" />
        <path d="M33 4l3-2M35.5 8.5l3.2-.6M31 1.5l.6-1.5" stroke="var(--yellow)" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      {!compact && <span className="logo__word">DinoAlert</span>}
    </span>
  );
}
