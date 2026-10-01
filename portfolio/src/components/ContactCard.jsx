export default function ContactCard({ user, onRemove }) {
  return (
    <article className="card hover contact">
      <div className="avatar">{user.name[0]?.toUpperCase()}</div>
      <div><h3>{user.name}</h3><p className="muted">✉️ {user.email}</p><p className="muted">📞 {user.phone}</p></div>
      <button className="x" onClick={() => onRemove(user.id)} aria-label="Remove">✕</button>
    </article>
  )
}
