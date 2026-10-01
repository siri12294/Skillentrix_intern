import { useState } from 'react'
function LikeCard({ title }) {
  const [liked, setLiked] = useState(false)
  return (
    <article className="card hover center">
      <h3>{title}</h3>
      <p className={liked ? 'ok' : 'muted'}>{liked ? 'Liked' : 'Not Liked'}</p>
      <button className={'btn' + (liked ? '' : ' ghost')} onClick={() => setLiked(!liked)}>{liked ? '❤️ Unlike' : '🤍 Like'}</button>
    </article>
  )
}
export default function LikeCards() {
  return (
    <section id="cards" className="section">
      <h2>Like Cards</h2>
      <div className="grid">{['React', 'JavaScript', 'CSS'].map(t => <LikeCard key={t} title={t} />)}</div>
    </section>
  )
}
