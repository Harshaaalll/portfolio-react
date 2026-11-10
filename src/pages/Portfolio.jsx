import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import portfolioCss from '../styles/portfolio.css?inline'
import PageStyle from '../components/PageStyle.jsx'
import ProjectSection from '../components/portfolio/ProjectSection.jsx'
import { styleFrom } from '../lib/utils.js'
import data from '../data/projects.json'

export default function Portfolio() {
  const [active, setActive] = useState('')

  useEffect(() => {
    document.title = 'Portfolio — Harshal Bhambhani'
  }, [])

  // highlight the nav button of the section currently in view (same rule as the original page)
  useEffect(() => {
    const sections = document.querySelectorAll('.project-section')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const { header, nav, projects } = data

  return (
    <>
      <PageStyle css={portfolioCss} />

      <nav>
        <Link to="/" className="nav-logo">
          harshal<span>.</span>
        </Link>
        <Link to="/" className="nav-back">
          ← Back to main
        </Link>
      </nav>

      <div className="page-header">
        <div className="page-header-label" dangerouslySetInnerHTML={{ __html: header.label }} />
        <h1 dangerouslySetInnerHTML={{ __html: header.title }} />
        <p dangerouslySetInnerHTML={{ __html: header.intro }} />
        <div className="header-legend">
          {header.legend.map((l) => (
            <div className="legend-item" key={l.text}>
              <span className="legend-dot" style={styleFrom(l.style)} />
              {l.text}
            </div>
          ))}
        </div>
      </div>

      <div className="project-nav">
        {nav.map((n) => (
          <a
            key={n.href}
            href={n.href}
            className={`proj-nav-btn${active === n.href.slice(1) ? ' active' : ''}`}
            dangerouslySetInnerHTML={{ __html: n.label }}
          />
        ))}
      </div>

      {projects.map((p) => (
        <ProjectSection project={p} key={p.id} />
      ))}

      <footer>
        <p>
          © 2026 Harshal Bhambhani · <Link to="/">Back to main site</Link>
        </p>
        <p>All projects represent real work with production intent</p>
      </footer>
    </>
  )
}
