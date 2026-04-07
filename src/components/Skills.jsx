import { motion } from 'framer-motion'
import {
  FaJava, FaPython, FaDocker, FaAws, FaGitAlt, FaLinux, FaReact, FaDatabase, FaCloud,
} from 'react-icons/fa'
import {
  SiSpringboot, SiApachekafka, SiPostgresql, SiMysql, SiMongodb, SiRedis,
  SiGrafana, SiJenkins, SiKubernetes, SiJavascript,
} from 'react-icons/si'

const skills = [
  { name: 'Java', icon: <FaJava size={26} />, level: 95 },
  { name: 'Spring Boot', icon: <SiSpringboot size={22} />, level: 92 },
  { name: 'Kafka', icon: <SiApachekafka size={22} />, level: 85 },
  { name: 'REST APIs', icon: <FaDatabase size={20} />, level: 93 },
  { name: 'PostgreSQL', icon: <SiPostgresql size={22} />, level: 88 },
  { name: 'MySQL', icon: <SiMysql size={26} />, level: 87 },
  { name: 'MongoDB', icon: <SiMongodb size={22} />, level: 82 },
  { name: 'Redis', icon: <SiRedis size={22} />, level: 78 },
  { name: 'AWS', icon: <FaAws size={26} />, level: 85 },
  { name: 'Azure', icon: <FaCloud size={22} />, level: 82 },
  { name: 'Docker', icon: <FaDocker size={26} />, level: 88 },
  { name: 'Kubernetes', icon: <SiKubernetes size={24} />, level: 75 },
  { name: 'CI/CD', icon: <SiJenkins size={22} />, level: 85 },
  { name: 'Python', icon: <FaPython size={24} />, level: 80 },
  { name: 'JavaScript', icon: <SiJavascript size={20} />, level: 75 },
  { name: 'React', icon: <FaReact size={24} />, level: 72 },
  { name: 'Grafana', icon: <SiGrafana size={22} />, level: 80 },
  { name: 'Linux', icon: <FaLinux size={24} />, level: 82 },
  { name: 'Git', icon: <FaGitAlt size={22} />, level: 90 },
]

const marqueeItems = [
  'JAVA', 'SPRING BOOT', 'KAFKA', 'MICROSERVICES', 'AWS', 'AZURE', 'DOCKER',
  'KUBERNETES', 'POSTGRESQL', 'REDIS', 'MONGODB', 'PYTHON', 'CI/CD', 'GRAFANA',
  'REST APIs', 'CIRCUIT BREAKER', 'EVENT-DRIVEN', 'AGILE',
]

const vp = { once: true, margin: '-80px' }

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 lg:px-10 overflow-hidden">
      {/* Scrolling marquee background */}
      <div className="absolute top-12 left-0 right-0 opacity-[0.03] overflow-hidden pointer-events-none">
        <div className="animate-marquee whitespace-nowrap flex gap-12">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="text-7xl font-bold font-display">{item}</span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-orange-400 text-sm font-mono font-medium tracking-wider mb-4">{'// TECH STACK'}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white">
            Tools of the trade<span className="text-orange-400">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={vp}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="glass-card rounded-xl p-4 group cursor-default"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-zinc-500 group-hover:text-orange-400 transition-colors duration-300">
                  {skill.icon}
                </span>
                <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </div>
              <div className="h-1 rounded-full bg-zinc-800 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.03, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
