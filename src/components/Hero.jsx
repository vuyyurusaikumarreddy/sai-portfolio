import { motion } from 'framer-motion'
import ScrollLink from './ScrollLink'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail, HiChevronDown } from 'react-icons/hi'
import { FiArrowRight } from 'react-icons/fi'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background mesh */}
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-orange-600/[0.07] blur-[120px]" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-amber-500/[0.05] blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full py-32">
        <div className="max-w-4xl">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 mb-10"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span className="text-zinc-400 text-sm font-medium">Available for new opportunities</span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold font-display leading-[0.95] tracking-tight mb-8">
              <span className="text-white">Sai Kumar</span>
              <br />
              <span className="gradient-text-hero">Reddy Vuyyuru</span>
            </h1>
          </motion.div>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-px bg-gradient-to-r from-orange-500 to-transparent" />
            <div className="text-lg sm:text-xl font-mono text-zinc-400">
              <TypeAnimation
                sequence={[
                  'Software Engineer',
                  2500,
                  'Distributed Systems Engineer',
                  2500,
                  'Cloud & Microservices Architect',
                  2500,
                  'Backend Developer',
                  2500,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                cursor
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base sm:text-lg text-zinc-500 max-w-xl leading-relaxed mb-12"
          >
            I design and build <span className="text-zinc-300">high-performance distributed systems</span> using
            Java, Spring Boot & event-driven architectures. Currently engineering resilient microservices
            at <span className="text-orange-400/90">M&T Bank</span>.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start gap-4 mb-16"
          >
            <ScrollLink
              to="contact"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-zinc-900 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full hover:from-orange-300 hover:to-amber-300 transition-all cursor-pointer shadow-xl shadow-orange-500/20 hover:shadow-orange-500/30 hover:-translate-y-px"
            >
              Let's Talk
              <FiArrowRight className="group-hover:translate-x-0.5 transition-transform" />
            </ScrollLink>
            <ScrollLink
              to="projects"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold text-zinc-300 border border-zinc-800 rounded-full hover:border-zinc-600 hover:bg-zinc-900/50 hover:text-white transition-all cursor-pointer"
            >
              View Work
            </ScrollLink>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center gap-4"
          >
            <span className="text-xs text-zinc-600 font-medium tracking-wider uppercase">Find me</span>
            <div className="w-8 h-px bg-zinc-800" />
            {[
              { icon: <FaGithub size={18} />, href: 'https://github.com/vuyyurusaikumarreddy', label: 'GitHub' },
              { icon: <FaLinkedin size={18} />, href: 'https://www.linkedin.com/in/saikumarreddyvuyyuru/', label: 'LinkedIn' },
              { icon: <HiOutlineMail size={18} />, href: 'mailto:saikumarreddyvuyyuru2001@gmail.com', label: 'Email' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-orange-400 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all"
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ScrollLink to="about" className="cursor-pointer">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 text-zinc-600 hover:text-zinc-400 transition-colors"
          >
            <span className="text-[10px] tracking-[3px] uppercase">Scroll</span>
            <HiChevronDown size={16} />
          </motion.div>
        </ScrollLink>
      </motion.div>
    </section>
  )
}
