import { useState } from 'react'
import { saveResponse } from '../storage'
export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const on = e => setF({ ...f, [e.target.name]: e.target.value })
  const submit = async e => {
    e.preventDefault()
    await saveResponse(f)
    setF({ name: '', email: '', message: '' })
    setStatus('Thanks! Your message was sent.')
    setTimeout(() => setStatus(''), 4000)
  }
  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>
      <form className="card form" onSubmit={submit}>
        <input name="name" placeholder="Your name" value={f.name} onChange={on} required />
        <input name="email" type="email" placeholder="Your email" value={f.email} onChange={on} required />
        <textarea name="message" rows="5" placeholder="Your message" value={f.message} onChange={on} required />
        <button className="btn">Send Message</button>
        {status && <p className="ok">{status}</p>}
      </form>
    </section>
  )
}
