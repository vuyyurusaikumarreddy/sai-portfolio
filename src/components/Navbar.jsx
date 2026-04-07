import { useState, useEffect } from 'react'
import ScrollLink from './ScrollLink'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { FiDownload } from 'react-icons/fi'

const links = [
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Education', to: 'education' },
  { name: 'Contact', to: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)

      // Determine active section
      const sections = links.map((l) => l.to)
      let current = ''
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id
        }
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50 shadow-2xl shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <ScrollLink to="hero" offset={0} className="cursor-pointer group flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-sm font-display shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-shadow">
              S
            </div>
            <span className="hidden sm:inline text-sm font-medium text-zinc-400 group-hover:text-white transition-colors font-display tracking-wide">
              SAI VUYYURU
            </span>
          </ScrollLink>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <ScrollLink
                key={l.to}
                to={l.to}
                className={`px-3.5 py-1.5 text-[13px] rounded-full transition-all cursor-pointer font-medium tracking-wide ${
                  active === l.to
                    ? 'text-orange-400 bg-orange-500/5'
                    : 'text-zinc-500 hover:text-zinc-200'
                }`}
              >
                {l.name}
              </ScrollLink>
            ))}
            <a
              href="/SAI_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex items-center gap-2 px-4 py-1.5 text-[13px] font-semibold text-zinc-900 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full hover:from-orange-300 hover:to-amber-300 transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:-translate-y-px"
            >
              <FiDownload size={13} />
              Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-zinc-400 hover:text-white p-2">
            {open ? <HiX size={22} /> : <HiMenuAlt4 size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-2xl flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-6">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <ScrollLink
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="text-2xl font-display text-zinc-300 hover:text-orange-400 transition-colors cursor-pointer"
                  >
                    {l.name}
                  </ScrollLink>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                href="/SAI_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-8 py-3 font-semibold text-zinc-900 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"
              >
                <FiDownload size={16} />
                Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
