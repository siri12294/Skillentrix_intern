import { useState } from 'react'
export default function UserForm({ onAdd }) {
  const [f, setF] = useState({ name: '', email: '', phone: '' })
  const submit = e => { e.preventDefault(); onAdd(f); setF({ name: '', email: '', phone: '' }) }
  return (
    <form className="card form" onSubmit={submit}>
      <h3>Add User</h3>
      {['name', 'email', 'phone'].map(k => (
        <input key={k} type={k === 'email' ? 'email' : 'text'} placeholder={k[0].toUpperCase() + k.slice(1)} value={f[k]} onChange={e => setF({ ...f, [k]: e.target.value })} required />
      ))}
      <button className="btn">Add Contact</button>
    </form>
  )
}
