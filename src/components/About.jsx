import { motion } from 'framer-motion'
import { FiZap, FiCloud, FiActivity, FiCode } from 'react-icons/fi'

const pillars = [
  {
    icon: <FiZap size={22} />,
    title: 'Event-Driven Architecture',
    desc: 'Designing Kafka-based event streams for high-throughput, decoupled microservices that scale effortlessly.',
    iconBg: 'bg-orange-500/10 text-orange-400',
  },
  {
    icon: <FiCloud size={22} />,
    title: 'Cloud-Native Deployments',
    desc: 'Building containerized services with Docker, CI/CD pipelines, and blue-green deployments on AWS & Azure.',
    iconBg: 'bg-sky-500/10 text-sky-400',
  },
  {
    icon: <FiActivity size={22} />,
    title: 'Reliability Engineering',
    desc: 'Implementing Circuit Breakers, retry mechanisms, and observability dashboards for 99.9% uptime.',
    iconBg: 'bg-emerald-500/10 text-emerald-400',
  },
  {
    icon: <FiCode size={22} />,
    title: 'Performance Optimization',
    desc: 'Reducing response times from 45s to 3s through async programming, multithreading, and smart caching.',
    iconBg: 'bg-violet-500/10 text-violet-400',
  },
]

const vp = { once: true, margin: '-80px' }

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - text */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={vp}
              transition={{ duration: 0.5 }}
              className="text-orange-400 text-sm font-mono font-medium tracking-wider mb-4"
            >
              {'// ABOUT ME'}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white leading-tight mb-8"
            >
              Engineering systems
              <br />
              <span className="text-zinc-500">that never sleep.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-5 text-zinc-400 leading-relaxed"
            >
              <p>
                With <span className="text-zinc-200 font-medium">~3 years</span> of professional experience,
                I specialize in designing and shipping large-scale distributed systems. My work spans the full SDLC
                — from architectural design and code reviews to production deployments.
              </p>
              <p>
                I thrive at the intersection of <span className="text-zinc-200 font-medium">performance and reliability</span>,
                building systems that handle millions of events while maintaining rock-solid uptime. My toolkit includes
                Java, Spring Boot, Kafka, and cloud platforms like AWS and Azure.
              </p>
              <p>
                Beyond code, I'm passionate about <span className="text-zinc-200 font-medium">mentoring</span> junior
                engineers and driving engineering excellence through TDD, observability, and continuous improvement.
              </p>
            </motion.div>
          </div>

          {/* Right - cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="glass-card rounded-2xl p-6 group"
              >
                <div className={`w-11 h-11 rounded-xl ${p.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {p.icon}
                </div>
                <h3 className="text-white font-semibold text-sm mb-2 font-display">{p.title}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
