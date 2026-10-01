import ContactCard from './ContactCard'
export default function UserList({ users, onRemove }) {
  if (!users.length) return <div className="card muted center">No contacts yet. Add one!</div>
  return <div className="grid one">{users.map(u => <ContactCard key={u.id} user={u} onRemove={onRemove} />)}</div>
}
