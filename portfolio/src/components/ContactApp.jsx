import { useState } from 'react'
import UserForm from './UserForm'
import UserList from './UserList'
export default function ContactApp() {
  const [users, setUsers] = useState([])
  return (
    <section id="contacts" className="section">
      <h2>Contact Cards</h2>
      <div className="split">
        <UserForm onAdd={u => setUsers([{ ...u, id: Date.now() }, ...users])} />
        <UserList users={users} onRemove={id => setUsers(users.filter(u => u.id !== id))} />
      </div>
    </section>
  )
}
