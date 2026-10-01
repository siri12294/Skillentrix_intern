import { profile } from '../data'
const { skills, projects } = profile
export default function Sections() {
  return (
    <>
      <section id="home" className="hero">
        <p className="eyebrow">Hi, I'm</p>
        <h1>{profile.firstName} <span className="grad">{profile.lastName}</span></h1>
        <p className="lead">{profile.tagline}</p>
        <div className="cta">
          <a className="btn" href="#projects">View Projects</a>
          <a className="btn ghost" href="#contact">Contact Me</a>
        </div>
      </section>
      <section id="about" className="section">
        <h2>About</h2>
        <div className="card about">
          <p>{profile.about}</p>
          <div className="links">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>
      </section>
      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="chips">{skills.map(s => <span key={s} className="chip">{s}</span>)}</div>
      </section>
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="grid">
          {projects.map(p => (
            <article key={p.t} className="card hover">
              <h3>{p.t}</h3><p>{p.d}</p>
              <div className="chips">{p.tags.map(x => <span key={x} className="chip sm">{x}</span>)}</div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
