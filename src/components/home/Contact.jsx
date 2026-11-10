const links = [
  { href: 'mailto:bhambhaniharshal@gmail.com', icon: '✉', label: 'Email', value: 'bhambhaniharshal@gmail.com' },
  { href: 'tel:+918561972727', icon: '☎', label: 'Phone', value: '+91 8561972727' },
  {
    href: 'https://www.linkedin.com/in/harshal-bhambhani-hhbb24',
    icon: 'in',
    label: 'LinkedIn',
    value: 'linkedin.com/in/harshal-bhambhani-hhbb24',
    external: true,
  },
  { href: 'https://github.com/Harshaaalll', icon: 'gh', label: 'GitHub', value: 'github.com/Harshaaalll', external: true },
]

const summary = [
  { label: 'Role', value: 'AI Engineer' },
  { label: 'Location', value: 'Bangalore' },
  { label: 'Status', value: 'Open to opportunities', color: 'var(--accent2)' },
  { label: 'Focus', value: 'Voice agents · NLP · GenAI' },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-label">04 — Contact</div>
      <h2 className="section-title">
        Let's <em>connect</em>
      </h2>
      <div className="contact-grid">
        <div className="contact-left">
          <p>
            I'm open to opportunities in AI engineering, voice agents, data science, and GenAI development. If
            you're building something interesting or want to discuss the work — I'd love to talk.
          </p>
          <div className="contact-links">
            {links.map((l) => (
              <a
                href={l.href}
                className="contact-link"
                key={l.label}
                {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                <div className="contact-link-icon">{l.icon}</div>
                <div className="contact-link-text">
                  <div className="contact-link-label">{l.label}</div>
                  <div className="contact-link-value">{l.value}</div>
                </div>
                <div className="contact-link-arrow">→</div>
              </a>
            ))}
          </div>
        </div>
        <div>
          <div
            style={{
              padding: '2rem',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              background: 'var(--bg2)',
            }}
          >
            <div
              style={{
                fontSize: '0.72rem',
                color: 'var(--text3)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}
            >
              Quick summary
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {summary.map((s) => (
                <div key={s.label} style={{ padding: '1rem', background: 'var(--bg3)', borderRadius: '8px' }}>
                  <div
                    style={{
                      fontSize: '0.68rem',
                      color: 'var(--text3)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: '0.4rem',
                    }}
                  >
                    {s.label}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: s.color || 'var(--text)' }}>{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
