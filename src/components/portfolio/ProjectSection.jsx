// Renders one project write-up from structured data. The strings are authored
// HTML fragments (bold, line breaks, entities), so they are set as inner HTML.
const html = (s) => ({ __html: s })

function Header({ h }) {
  return (
    <div className="proj-header">
      <div>
        <div className="proj-number" dangerouslySetInnerHTML={html(h.number)} />
        <div className="proj-title" dangerouslySetInnerHTML={html(h.title)} />
        <div className="proj-subtitle" dangerouslySetInnerHTML={html(h.subtitle)} />
      </div>
      <div className="proj-tags">
        {h.tags.map((t) => (
          <span className={t.cls} key={t.text} dangerouslySetInnerHTML={html(t.text)} />
        ))}
      </div>
    </div>
  )
}

function Tldr({ cells }) {
  return (
    <div className="tldr-box">
      {cells.map((c) => (
        <div className={`tldr-cell ${c.cls}`.trim()} key={c.label}>
          <div className="tldr-label" dangerouslySetInnerHTML={html(c.label)} />
          <div className="tldr-text" dangerouslySetInnerHTML={html(c.text)} />
        </div>
      ))}
    </div>
  )
}

function Metrics({ items }) {
  return (
    <div className="metrics-row">
      {items.map((m) => (
        <div className="metric-box" key={m.label}>
          <div className="metric-val" dangerouslySetInnerHTML={html(m.val)} />
          <div className="metric-label" dangerouslySetInnerHTML={html(m.label)} />
        </div>
      ))}
    </div>
  )
}

function Flowchart({ b }) {
  // the title, caption and SVG are rendered together so the DOM matches the original exactly
  const markup =
    `<div class="flowchart-title">${b.title}</div>` +
    `<div class="flowchart-caption">${b.caption}</div>` +
    b.svg
  return <div className="flowchart-wrap" dangerouslySetInnerHTML={html(markup)} />
}

function Workflow({ steps }) {
  return (
    <div className="workflow-steps">
      {steps.map((s) => (
        <div className="wf-step" key={s.num + s.title}>
          <div className="wf-step-num" dangerouslySetInnerHTML={html(s.num)} />
          <div className="wf-step-title" dangerouslySetInnerHTML={html(s.title)} />
          <div className="wf-step-desc" dangerouslySetInnerHTML={html(s.desc)} />
          <div className="wf-step-tech" dangerouslySetInnerHTML={html(s.tech)} />
        </div>
      ))}
    </div>
  )
}

function TwoCol({ cols }) {
  return (
    <div className="two-col">
      {cols.map((c) => (
        <div className="info-block" key={c.title}>
          <div className="info-block-title" dangerouslySetInnerHTML={html(c.title)} />
          <ul className="info-list">
            {c.items.map((it, i) => (
              <li key={i} dangerouslySetInnerHTML={html(it)} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

function Insight({ b }) {
  return (
    <div className={`insight-box${b.variant ? ` ${b.variant}` : ''}`}>
      <div className="insight-label" dangerouslySetInnerHTML={html(b.label)} />
      <div className="insight-text" dangerouslySetInnerHTML={html(b.text)} />
    </div>
  )
}

function Block({ b }) {
  switch (b.type) {
    case 'tldr':
      return <Tldr cells={b.cells} />
    case 'metrics':
      return <Metrics items={b.items} />
    case 'sub':
      return <div className="section-sub" dangerouslySetInnerHTML={html(b.text)} />
    case 'flowchart':
      return <Flowchart b={b} />
    case 'workflow':
      return <Workflow steps={b.steps} />
    case 'twocol':
      return <TwoCol cols={b.cols} />
    case 'insight':
      return <Insight b={b} />
    case 'github':
      return (
        <a href={b.href} target="_blank" rel="noreferrer" className="github-link" dangerouslySetInnerHTML={html(b.text)} />
      )
    default:
      return null
  }
}

export default function ProjectSection({ project }) {
  return (
    <div className={`project-section ${project.cls}`} id={project.id}>
      <Header h={project.header} />
      {project.blocks.map((b, i) => (
        <Block b={b} key={`${b.type}-${i}`} />
      ))}
    </div>
  )
}
