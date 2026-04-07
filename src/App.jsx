import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

function App() {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 })

  useEffect(() => {
    const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <div className="relative min-h-screen noise">
      {/* Cursor glow - desktop only */}
      <div
        className="cursor-glow hidden lg:block"
        style={{ left: mousePos.x, top: mousePos.y }}
      />

      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Stats />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Education />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}

export default App
