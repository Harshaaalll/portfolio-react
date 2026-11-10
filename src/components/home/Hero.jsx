import { Link } from 'react-router-dom'
import home from '../../data/home.json'

export default function Hero() {
  const stats = [
    { num: '90', suffix: '%', label: 'Audit time reduced' },
    { num: String(home.cards.length), label: 'Projects built' },
    { num: '13', suffix: '+', label: 'Language models integrated' },
    { num: '3', label: 'AI agent systems built' },
  ]

  return (
    <section className="hero" id="home">
      <div className="hero-grid-bg" />
      <div className="hero-glow" />
      <div className="hero-content">
        <div className="hero-tag">Open to opportunities</div>
        <h1 className="hero-name">
          Harshal<br />
          <span className="line2">Bhambhani</span>
        </h1>
        <p className="hero-desc">
          AI engineer at <strong>OTO Capital</strong>, building production voice agents. BITS Pilani Hyderabad
          graduate (EEE, 2026). From NLP pipelines at <strong>Standard Chartered</strong> to live voice agents,
          multi-agent systems, knowledge-graph RAG, and real estate analytics — I build things that get deployed
          and actually used.
        </p>
        <div className="hero-ctas">
          <a href="#projects" className="btn-primary">View Projects →</a>
          <Link to="/portfolio" className="btn-secondary">See Portfolio</Link>
          <a href="/Harshal_Bhambhani_Resume_Oct.pdf" className="btn-secondary" download>↓ Download CV</a>
          <a href="mailto:bhambhaniharshal@gmail.com" className="btn-secondary">Get in Touch</a>
        </div>
        <div className="hero-stats">
          {stats.map((s) => (
            <div className="stat-item" key={s.label}>
              <div className="stat-num">
                {s.num}
                {s.suffix && <span>{s.suffix}</span>}
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
