import { useEffect } from 'react'
import homeCss from '../styles/home.css?inline'
import PageStyle from '../components/PageStyle.jsx'
import Nav from '../components/home/Nav.jsx'
import Hero from '../components/home/Hero.jsx'
import About from '../components/home/About.jsx'
import Experience from '../components/home/Experience.jsx'
import Projects from '../components/home/Projects.jsx'
import Contact from '../components/home/Contact.jsx'
import Footer from '../components/home/Footer.jsx'

export default function Home() {
  useEffect(() => {
    document.title = 'Harshal Bhambhani — AI & Data Engineer'
  }, [])

  return (
    <>
      <PageStyle css={homeCss} />
      <Nav />
      <Hero />
      <About />
      <div className="divider" />
      <Experience />
      <div className="divider" />
      <Projects />
      <div className="divider" />
      <Contact />
      <Footer />
    </>
  )
}
