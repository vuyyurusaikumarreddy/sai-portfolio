import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import ScrollLink from './ScrollLink'

const links = [
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 py-12 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Brand */}
          <ScrollLink to="hero" offset={0} className="cursor-pointer group flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-sm font-display">
              S
            </div>
            <span className="text-sm font-medium text-zinc-500 group-hover:text-white transition-colors font-display tracking-wide">
              SAI VUYYURU
            </span>
          </ScrollLink>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {links.map((l) => (
              <ScrollLink
                key={l.to}
                to={l.to}
                className="text-xs text-zinc-600 hover:text-zinc-300 transition-colors cursor-pointer tracking-wide"
              >
                {l.name}
              </ScrollLink>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { icon: <FaGithub size={16} />, href: 'https://github.com/vuyyurusaikumarreddy' },
              { icon: <FaLinkedin size={16} />, href: 'https://www.linkedin.com/in/saikumarreddyvuyyuru/' },
              { icon: <HiOutlineMail size={16} />, href: 'mailto:saikumarreddyvuyyuru2001@gmail.com' },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-zinc-800/50 flex items-center justify-center text-zinc-600 hover:text-orange-400 hover:border-orange-500/20 transition-all"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="section-divider mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-700">
            &copy; {new Date().getFullYear()} Sai Kumar Reddy Vuyyuru. Built with React & Tailwind.
          </p>
          <p className="text-xs text-zinc-800">
            Designed with precision. Engineered with passion.
          </p>
        </div>
      </div>
    </footer>
  )
}
