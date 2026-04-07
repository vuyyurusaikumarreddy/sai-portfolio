import { motion } from 'framer-motion'
import { FiMapPin, FiCalendar } from 'react-icons/fi'

const education = [
  {
    school: 'University at Buffalo',
    degree: 'Master of Science',
    field: 'Engineering Sciences',
    location: 'Buffalo, NY',
    period: 'Jan 2023 - May 2024',
    flag: '🇺🇸',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    school: 'Jawaharlal Nehru Technical University',
    degree: 'Bachelor of Technology',
    field: 'Computer Science and Engineering',
    location: 'Andhra Pradesh, India',
    period: 'Jul 2018 - May 2022',
    flag: '🇮🇳',
    color: 'from-orange-500 to-amber-500',
  },
]

const vp = { once: true, margin: '-80px' }

export default function Education() {
  return (
    <section id="education" className="relative py-28 px-6 lg:px-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-orange-400 text-sm font-mono font-medium tracking-wider mb-4">{'// EDUCATION'}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white">
            Academic roots<span className="text-orange-400">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              <div className={`h-1 bg-gradient-to-r ${edu.color}`} />
              <div className="p-8">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{edu.flag}</span>
                  <div>
                    <h3 className="text-lg font-bold text-white font-display group-hover:text-orange-400 transition-colors">
                      {edu.school}
                    </h3>
                    <p className="text-zinc-300 font-medium text-sm">{edu.degree}</p>
                    <p className="text-zinc-500 text-sm mb-4">{edu.field}</p>
                    <div className="flex flex-wrap gap-4 text-xs text-zinc-500">
                      <span className="inline-flex items-center gap-1.5">
                        <FiMapPin size={12} className="text-zinc-600" /> {edu.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <FiCalendar size={12} className="text-zinc-600" /> {edu.period}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
