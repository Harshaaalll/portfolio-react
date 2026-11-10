import home from '../../data/home.json'
import { styleFrom } from '../../lib/utils.js'

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-label">02 — Experience</div>
      <h2 className="section-title">
        Where I've <em>built things</em>
      </h2>
      <div className="experience-list">
        {home.experience.map((e) => (
          <div className="exp-item" key={e.role + e.date}>
            <div className="exp-date" dangerouslySetInnerHTML={{ __html: e.date }} />
            <div className="exp-content">
              <div className="exp-company">
                <div className="exp-dot" style={styleFrom(e.dot)} />
                <div className="exp-role" dangerouslySetInnerHTML={{ __html: e.role }} />
              </div>
              <div className="exp-org" dangerouslySetInnerHTML={{ __html: e.org }} />
              <ul className="exp-bullets">
                {e.bullets.map((b) => (
                  <li key={b} dangerouslySetInnerHTML={{ __html: b }} />
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
