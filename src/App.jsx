import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ScrollManager from './components/ScrollManager.jsx'

// the 18 project write-ups are the heavy part, so load them only when /portfolio is opened
const Portfolio = lazy(() => import('./pages/Portfolio.jsx'))

export default function App() {
  return (
    <>
      <ScrollManager />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* keep the old GitHub Pages URLs working */}
          <Route path="/portfolio.html" element={<Navigate to="/portfolio" replace />} />
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  )
}
