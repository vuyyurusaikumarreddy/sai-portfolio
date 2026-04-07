import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink, FiArrowUpRight } from 'react-icons/fi'

const projects = [
  {
    title: 'Scalable Data Pipeline',
    subtitle: 'Enterprise ETL Architecture',
    description:
      'Built scalable ETL pipelines with Azure Databricks to process data from Delta Lake and Storage Gen2. Orchestrated workflows with Azure Data Factory, optimizing query performance by 35% and enabling automatic reporting.',
    tech: ['Azure Data Factory', 'Databricks', 'PySpark', 'SQL', 'Delta Lake'],
    gradient: 'from-blue-600 via-indigo-600 to-violet-600',
    number: '01',
    featured: true,
  },
  {
    title: 'Grocery Store',
    subtitle: 'Full-Stack E-Commerce',
    description:
      'Engineered a web-based e-commerce platform enabling farmers to upload product images and descriptions while buyers browse and order products. Complete with authentication, cart, and payment flow.',
    tech: ['Spring Boot', 'React', 'AWS', 'REST APIs'],
    github: 'https://github.com/vuyyurusaikumarreddy',
    gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
    number: '02',
  },
  {
    title: 'Self-Checkout System',
    subtitle: 'AI-Powered Retail',
    description:
      'Engineered an innovative shopping cart system using a custom-trained AWS Rekognition model, halving checkout times with computer vision for automatic product identification.',
    tech: ['Flask', 'AWS Rekognition', 'React', 'TensorFlow', 'Python'],
    github: 'https://github.com/vuyyurusaikumarreddy',
    gradient: 'from-rose-600 via-pink-600 to-fuchsia-600',
    number: '03',
  },
  {
    title: 'Spotify Clone',
    subtitle: 'Music Streaming UI',
    description:
      'Developed a Spotify-inspired music streaming frontend with modern UI/UX, playlist management, audio playback, and responsive design across all devices.',
    tech: ['JavaScript', 'HTML/CSS', 'REST APIs', 'Responsive Design'],
    github: 'https://github.com/vuyyurusaikumarreddy/spotify-frontend-sample',
    gradient: 'from-green-600 via-emerald-600 to-teal-600',
    number: '04',
  },
]

const vp = { once: true, margin: '-80px' }

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16"
        >
          <div>
            <p className="text-orange-400 text-sm font-mono font-medium tracking-wider mb-4">{'// PROJECTS'}</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white">
              Selected work<span className="text-orange-400">.</span>
            </h2>
          </div>
          <a
            href="https://github.com/vuyyurusaikumarreddy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-orange-400 transition-colors group"
          >
            View all on GitHub
            <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={14} />
          </a>
        </motion.div>

        {/* Featured project - full width */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card rounded-3xl overflow-hidden mb-6 group"
        >
          <div className={`h-1.5 bg-gradient-to-r ${projects[0].gradient}`} />
          <div className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div className="flex-1">
                <span className="text-zinc-700 text-6xl lg:text-8xl font-bold font-display leading-none">{projects[0].number}</span>
                <h3 className="text-2xl lg:text-3xl font-bold text-white font-display mt-4 mb-2">{projects[0].title}</h3>
                <p className="text-orange-400/80 font-medium text-sm mb-4">{projects[0].subtitle}</p>
                <p className="text-zinc-400 leading-relaxed max-w-xl mb-6">{projects[0].description}</p>
                <div className="flex flex-wrap gap-2">
                  {projects[0].tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-zinc-800/60 text-zinc-400 border border-zinc-700/40 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center w-48 h-48 rounded-2xl bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-zinc-800/50">
                <span className="text-6xl">📊</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other projects grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.slice(1).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />
              <div className="p-6 lg:p-7 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-zinc-800 text-4xl font-bold font-display">{project.number}</span>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-orange-400 hover:border-orange-500/30 transition-all"
                      >
                        <FaGithub size={16} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-orange-400 hover:border-orange-500/30 transition-all"
                      >
                        <FiExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white font-display mb-1">{project.title}</h3>
                <p className="text-orange-400/80 text-xs font-medium mb-3">{project.subtitle}</p>
                <p className="text-zinc-500 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-1 rounded-md bg-zinc-800/60 text-zinc-500 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
