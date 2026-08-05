import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './app/Home'
import Resume from './app/Resume'
import Projects from './app/Projects'
import Contact from './app/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function AnimatedRoutes() {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [fadeClass, setFadeClass] = useState('fade-in')

  useEffect(() => {
    if (location !== displayLocation) {
      setFadeClass('fade-out')
      setTimeout(() => {
        setDisplayLocation(location)
        setFadeClass('fade-in')
      }, 300)
    }
  }, [location])

  return (
    <div className={fadeClass}>
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ position: 'relative', flex: 1 }}>
          <AnimatedRoutes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
