import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Sections from './components/Sections'
import Contact from './components/Contact'
import Admin from './components/Admin'
import ContactApp from './components/ContactApp'
import LikeCards from './components/LikeCards'

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('theme', theme) }, [theme])
  return (
    <>
      <Navbar theme={theme} toggle={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))} />
      <main>
        <Sections />
        <ContactApp />
        <LikeCards />
        <Contact />
        <Admin />
      </main>
      <footer className="footer">© {new Date().getFullYear()} Jadam Sirisha · Built with React</footer>
    </>
  )
}
