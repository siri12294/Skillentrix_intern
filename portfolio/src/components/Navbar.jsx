import { useState } from 'react'
const links = ['home', 'about', 'skills', 'projects', 'contacts', 'cards', 'contact', 'admin']
export default function Navbar({ theme, toggle }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <a href="#home" className="logo">Sirisha<span>.</span></a>
      <nav className={open ? 'open' : ''}>
        {links.map(l => <a key={l} href={`#${l}`} onClick={() => setOpen(false)}>{l}</a>)}
      </nav>
      <div className="nav-actions">
        <button className="icon-btn" onClick={toggle} aria-label="Toggle theme">{theme === 'dark' ? '☀️' : '🌙'}</button>
        <button className="icon-btn menu" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
      </div>
    </header>
  )
}
