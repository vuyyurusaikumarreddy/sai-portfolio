import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

function useCountUp(end, duration = 2, decimals = 0, trigger = false) {
  const [value, setValue] = useState(0)
  const rafRef = useRef(null)

  useEffect(() => {
    if (!trigger) return
    const start = performance.now()
    const ms = duration * 1000

    const step = (now) => {
      const progress = Math.min((now - start) / ms, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(parseFloat((eased * end).toFixed(decimals)))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step)
      }
    }

    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [trigger, end, duration, decimals])

  return value
}

function StatItem({ stat, inView, delay }) {
  const count = useCountUp(stat.value, 2.5, stat.decimals || 0, inView)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay }}
      className="text-center group"
    >
      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white mb-2 tracking-tight">
        {count}
        <span className="text-orange-400">{stat.suffix}</span>
      </div>
      <p className="text-zinc-500 text-sm font-medium tracking-wide">{stat.label}</p>
    </motion.div>
  )
}

const stats = [
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 99.9, suffix: '%', label: 'Service Uptime', decimals: 1 },
  { value: 20, suffix: '+', label: 'Microservices Built' },
  { value: 15, suffix: 'x', label: 'Performance Boost' },
]

export default function Stats() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative py-20 px-6 lg:px-10 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[200px] bg-orange-600/[0.04] blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} inView={inView} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
