export default function EmptyState({ icon: Icon, title, children, action }) {
  return (
    <div className="empty-state">
      {Icon && <Icon size={28} aria-hidden="true" />}
      <p className="empty-state__title">{title}</p>
      {children && <p className="empty-state__text">{children}</p>}
      {action}
    </div>
  );
}
