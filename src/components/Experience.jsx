import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiMapPin, FiCalendar, FiChevronDown } from 'react-icons/fi'

const experiences = [
  {
    company: 'M&T Bank',
    role: 'Software Engineer',
    location: 'Buffalo, NY',
    period: 'Jun 2025 - Present',
    current: true,
    tech: ['Java', 'Spring Boot', 'Kafka', 'Azure', 'Docker', 'Dynatrace', 'Grafana'],
    highlights: [
      { metric: '99.9%', label: 'Service Uptime', desc: 'Architected Spring Boot microservices processing high-volume event streams via Kafka-based event-driven architecture.' },
      { metric: '35%', label: 'Fewer Failures', desc: 'Implemented Resilience4j Circuit Breaker and Retry mechanisms for downstream REST clients during peak traffic.' },
      { metric: '98%', label: 'Faster Tests', desc: 'Optimized test suite using AI-assisted test generation tools, significantly decreasing pipeline runtime.' },
      { metric: '40%', label: 'Faster Deploys', desc: 'Designed Docker-based CI/CD pipelines with blue-green deployments and automated rollback strategies.' },
      { metric: '15x', label: 'Response Speed', desc: 'Optimized endpoints using CompletableFutures and async programming, reducing response from 45s to under 3s.' },
    ],
  },
  {
    company: 'Collaborate Solutions',
    role: 'Software Engineer',
    location: 'Boston, MA',
    period: 'Oct 2024 - May 2025',
    tech: ['Java', 'Spring Boot', 'AWS', 'Kubernetes', 'Kafka', 'MongoDB', 'Jenkins'],
    highlights: [
      { metric: '20+', label: 'Microservices', desc: 'Developed RESTful microservices in AWS/Kubernetes environment using Spring Boot and Kafka.' },
      { metric: '20%', label: 'Less Latency', desc: 'Designed idempotent APIs, structured error handling, and JWT-based authentication.' },
      { metric: 'Java 17', label: 'Migration', desc: 'Led migration from Java 8 to Java 17, improving memory efficiency and resolving dependency bottlenecks.' },
      { metric: '30%', label: 'Faster Releases', desc: 'Automated regression and performance testing using Python and shell scripts.' },
    ],
  },
  {
    company: 'Phenom People',
    role: 'Product Development Engineer',
    location: 'Hyderabad, India',
    period: 'Feb 2022 - Dec 2022',
    tech: ['Python', 'Java', 'Docker', 'MongoDB', 'REST APIs', 'Swagger'],
    highlights: [
      { metric: '85%', label: 'Test Coverage', desc: 'Achieved under TDD practices while mentoring junior developers on testing standards.' },
      { metric: '40%', label: 'Fewer Defects', desc: 'Reduced production defects through rigorous testing and code quality standards.' },
      { metric: '100%', label: 'Data Integrity', desc: 'Led MongoDB migration using Python automation scripts with zero downtime.' },
      { metric: '25%', label: 'Query Boost', desc: 'Improved query performance through indexing and database optimization.' },
    ],
  },
]

const vp = { once: true, margin: '-80px' }

function ExperienceCard({ exp, i }) {
  const [expanded, setExpanded] = useState(i === 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={vp}
      transition={{ duration: 0.5, delay: i * 0.15 }}
      className="relative"
    >
      {/* Timeline connector */}
      {i < experiences.length - 1 && (
        <div className="absolute left-[19px] top-[52px] bottom-[-48px] w-px bg-gradient-to-b from-zinc-700 to-transparent hidden lg:block" />
      )}

      <div className="flex gap-6 lg:gap-10">
        {/* Timeline dot */}
        <div className="hidden lg:flex flex-col items-center pt-5">
          <div className={`w-[10px] h-[10px] rounded-full ${exp.current ? 'bg-orange-400 shadow-lg shadow-orange-500/40' : 'bg-zinc-600'} ring-4 ring-zinc-950`} />
        </div>

        <div className="flex-1 glass-card rounded-2xl overflow-hidden">
          {/* Header */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full p-6 lg:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left cursor-pointer"
          >
            <div>
              <div className="flex items-center gap-3 mb-1">
                {exp.current && (
                  <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-orange-500/10 text-orange-400 rounded-full border border-orange-500/20">
                    Current
                  </span>
                )}
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white font-display">{exp.company}</h3>
              <p className="text-orange-400/80 font-medium text-sm">{exp.role}</p>
              <div className="flex flex-wrap gap-4 mt-2 text-xs text-zinc-500">
                <span className="inline-flex items-center gap-1.5"><FiMapPin size={12} /> {exp.location}</span>
                <span className="inline-flex items-center gap-1.5"><FiCalendar size={12} /> {exp.period}</span>
              </div>
            </div>
            <FiChevronDown
              size={20}
              className={`text-zinc-500 transition-transform duration-300 flex-shrink-0 ${expanded ? 'rotate-180' : ''}`}
            />
          </button>

          {/* Expanded content */}
          <motion.div
            initial={false}
            animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 lg:px-8 pb-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {exp.tech.map((t) => (
                  <span key={t} className="text-[11px] px-2.5 py-1 rounded-md bg-zinc-800/80 text-zinc-400 font-mono">
                    {t}
                  </span>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {exp.highlights.map((h, j) => (
                  <div
                    key={j}
                    className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/40 hover:border-zinc-700/60 transition-colors group"
                  >
                    <div className="flex items-baseline gap-2 mb-1.5">
                      <span className="text-2xl font-bold font-display text-white group-hover:text-orange-400 transition-colors">
                        {h.metric}
                      </span>
                      <span className="text-xs text-zinc-500 font-medium">{h.label}</span>
                    </div>
                    <p className="text-xs text-zinc-500 leading-relaxed">{h.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 lg:px-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-orange-400 text-sm font-mono font-medium tracking-wider mb-4">{'// EXPERIENCE'}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white">
            Where I've made<br />
            <span className="text-zinc-500">an impact<span className="text-orange-400">.</span></span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
