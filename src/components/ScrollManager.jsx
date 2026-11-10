import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scrolls to the #hash target after a route change, or to the top when there is none.
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      return undefined
    }
    const id = decodeURIComponent(hash.slice(1))
    let tries = 0
    // the target may not be mounted yet on the first frame after navigation
    const timer = setInterval(() => {
      const el = document.getElementById(id)
      tries += 1
      if (el) {
        el.scrollIntoView({ behavior: 'auto', block: 'start' })
        clearInterval(timer)
      } else if (tries > 20) {
        clearInterval(timer)
      }
    }, 50)
    return () => clearInterval(timer)
  }, [pathname, hash])

  return null
}
