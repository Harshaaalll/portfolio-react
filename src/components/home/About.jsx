import home from '../../data/home.json'

const education = [
  {
    school: 'BITS Pilani, Hyderabad Campus',
    degree: 'B.E. Electrical & Electronics Engineering',
    minor: 'Minor: Computing & Intelligence (ML, AI, DB Systems)',
    years: '2022 — 2026',
    score: 'CGPA 6.9',
  },
  { school: 'MDS Public School', degree: 'Class XII — CBSE', years: '2021', score: '92.2%' },
  { school: "St. Paul's Convent School", degree: 'Class X — CBSE', years: '2019', score: '91.2%' },
]

export default function About() {
  return (
    <section id="about">
      <div className="section-label">01 — About</div>
      <h2 className="section-title">
        Engineer by training,<br />
        <em>builder by instinct</em>
      </h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I started in <strong>Electrical and Electronics Engineering</strong> at BITS Hyderabad, but what
            genuinely pulled my interest was the <strong>Computing and Intelligence minor</strong> I picked up
            alongside — machine learning, AI, database systems, statistics. That curiosity has driven everything
            since.
          </p>
          <p>
            My first real-world exposure was a machine learning engineering internship at{' '}
            <strong>DG Liger Consulting</strong>, where I built my first RAG chatbot and learned the hard gap
            between theory and production. Then came a <strong>Data Science internship at Standard Chartered GBS</strong>{' '}
            — six months of building a production NLP pipeline that real auditors depended on every day.
          </p>
          <p>
            Since August 2026 I have been an <strong>AI Engineer at OTO Capital</strong>, building live voice
            agents for lending clients, after a short consulting engagement at <strong>Goel Exports</strong> on
            their Odoo workflow.
          </p>
          <p>
            I don't just build models. I build <strong>systems that get deployed</strong>, used, and measured.
            The feedback loop between shipping something and watching it change how people work is what drives me
            forward.
          </p>
          <p>
            Outside the code: <strong>double-sport state representative</strong> (basketball and cricket),
            volleyball gold medalist, and former captain of logistics teams managing 20+ people at large-scale
            campus events.
          </p>
          <div className="skills-grid">
            {home.skills.map((s) => (
              <span className="skill-tag" key={s} dangerouslySetInnerHTML={{ __html: s }} />
            ))}
          </div>
        </div>
        <div className="about-right">
          {education.map((e) => (
            <div className="education-item" key={e.school}>
              <div className="edu-school">{e.school}</div>
              <div className="edu-degree">{e.degree}</div>
              {e.minor && (
                <div className="edu-degree" style={{ color: 'var(--accent)', fontSize: '0.75rem' }}>
                  {e.minor}
                </div>
              )}
              <div className="edu-meta">
                <span>{e.years}</span>
                <span className="edu-score">{e.score}</span>
              </div>
            </div>
          ))}
          <div
            style={{
              marginTop: '2rem',
              padding: '1.5rem',
              border: '1px solid rgba(79,195,161,0.2)',
              borderRadius: '8px',
              background: 'rgba(79,195,161,0.04)',
            }}
          >
            <div
              style={{
                fontSize: '0.72rem',
                color: 'var(--accent2)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}
            >
              Coursework Highlights
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text2)', lineHeight: 1.8 }}>
              Machine Learning · Statistics &amp; Probability for Analytics · Database Systems · Artificial
              Intelligence · DSA · Operating Systems · OOP · Computer Programming
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
