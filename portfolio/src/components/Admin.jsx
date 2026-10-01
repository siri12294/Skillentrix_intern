import { useState } from 'react'
import { ADMIN } from '../config'
import { loadResponses } from '../storage'
export default function Admin() {
  const [auth, setAuth] = useState(false)
  const [c, setC] = useState({ user: '', pass: '' })
  const [err, setErr] = useState('')
  const [rows, setRows] = useState([])
  const login = async e => {
    e.preventDefault()
    if (c.user === ADMIN.user && c.pass === ADMIN.pass) { setAuth(true); setErr(''); setRows(await loadResponses()) }
    else setErr('Invalid credentials')
  }
  return (
    <section id="admin" className="section">
      <h2>{auth ? 'User Responses' : 'Admin Login'}</h2>
      {!auth ? (
        <form className="card form narrow" onSubmit={login}>
          <input placeholder="Username" value={c.user} onChange={e => setC({ ...c, user: e.target.value })} required />
          <input type="password" placeholder="Password" value={c.pass} onChange={e => setC({ ...c, pass: e.target.value })} required />
          <button className="btn">Login</button>
          {err && <p className="err">{err}</p>}
        </form>
      ) : (
        <div>
          <div className="cta"><button className="btn ghost" onClick={async () => setRows(await loadResponses())}>Refresh</button><button className="btn ghost" onClick={() => setAuth(false)}>Logout</button></div>
          {rows.length === 0 && <p className="muted">No responses yet.</p>}
          <div className="grid">
            {rows.map((r, i) => (
              <article key={i} className="card">
                <h3>{r.name}</h3><p className="muted">{r.email}</p><p>{r.message}</p>
                <small className="muted">🕒 {new Date(r.timestamp).toLocaleString()}</small>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
