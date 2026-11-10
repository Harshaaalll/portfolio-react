import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <a href="#" className="nav-logo">
        harshal<span>.</span>
      </a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <Link to="/portfolio" style={{ color: 'var(--accent)' }}>
            Portfolio →
          </Link>
        </li>
      </ul>
    </nav>
  )
}
