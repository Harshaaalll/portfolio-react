import { Link } from 'react-router-dom'
import home from '../../data/home.json'

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-label">03 — Projects</div>
      <h2 className="section-title">
        Things I've <em>shipped</em>
      </h2>
      <div className="projects-grid">
        {home.cards.map((c) => (
          <Link to={`/portfolio#${c.id}`} className="project-card" key={c.id}>
            <div className="project-header">
              <div className="project-icon" dangerouslySetInnerHTML={{ __html: c.icon }} />
              <span className="project-arrow">↗</span>
            </div>
            <div className="project-title" dangerouslySetInnerHTML={{ __html: c.title }} />
            <div className="project-desc" dangerouslySetInnerHTML={{ __html: c.desc }} />
            <div className="project-tags">
              {c.tags.map((t) => (
                <span className="project-tag" key={t} dangerouslySetInnerHTML={{ __html: t }} />
              ))}
            </div>
            <div className="project-result" dangerouslySetInnerHTML={{ __html: c.result }} />
          </Link>
        ))}
      </div>
    </section>
  )
}
