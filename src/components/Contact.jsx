import { motion } from 'framer-motion'
import { useState } from 'react'
import { HiOutlineMail, HiPhone } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiSend, FiArrowUpRight } from 'react-icons/fi'

const contacts = [
  {
    icon: <HiOutlineMail size={20} />,
    label: 'Email',
    value: 'saikumarreddyvuyyuru2001@gmail.com',
    href: 'mailto:saikumarreddyvuyyuru2001@gmail.com',
    color: 'group-hover:text-orange-400',
  },
  {
    icon: <HiPhone size={20} />,
    label: 'Phone',
    value: '(716) 936-4737',
    href: 'tel:+17169364737',
    color: 'group-hover:text-emerald-400',
  },
  {
    icon: <FaLinkedin size={20} />,
    label: 'LinkedIn',
    value: 'saikumarreddyvuyyuru',
    href: 'https://www.linkedin.com/in/saikumarreddyvuyyuru/',
    color: 'group-hover:text-sky-400',
  },
  {
    icon: <FaGithub size={20} />,
    label: 'GitHub',
    value: 'vuyyurusaikumarreddy',
    href: 'https://github.com/vuyyurusaikumarreddy',
    color: 'group-hover:text-violet-400',
  },
]

const vp = { once: true, margin: '-80px' }

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    window.open(
      `mailto:saikumarreddyvuyyuru2001@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`
    )
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-28 px-6 lg:px-10">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-600/[0.04] rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5 }}
            >
              <p className="text-orange-400 text-sm font-mono font-medium tracking-wider mb-4">{'// CONTACT'}</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white leading-tight mb-6">
                Let's build<br />
                <span className="text-zinc-500">something great<span className="text-orange-400">.</span></span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-10 max-w-md">
                I'm always interested in hearing about new opportunities, challenging projects, or just a good conversation about distributed systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-3"
            >
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl border border-zinc-800/50 hover:border-zinc-700/50 hover:bg-zinc-900/30 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`text-zinc-500 ${c.color} transition-colors`}>
                      {c.icon}
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-medium">{c.label}</p>
                      <p className="text-sm text-zinc-300 group-hover:text-white transition-colors">{c.value}</p>
                    </div>
                  </div>
                  <FiArrowUpRight size={16} className="text-zinc-700 group-hover:text-zinc-400 transition-colors" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right - form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 lg:p-10 space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs text-zinc-500 font-medium tracking-wider uppercase mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800/60 text-zinc-200 placeholder-zinc-700 focus:border-orange-500/40 focus:outline-none focus:ring-1 focus:ring-orange-500/20 transition-all text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs text-zinc-500 font-medium tracking-wider uppercase mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800/60 text-zinc-200 placeholder-zinc-700 focus:border-orange-500/40 focus:outline-none focus:ring-1 focus:ring-orange-500/20 transition-all text-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs text-zinc-500 font-medium tracking-wider uppercase mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800/60 text-zinc-200 placeholder-zinc-700 focus:border-orange-500/40 focus:outline-none focus:ring-1 focus:ring-orange-500/20 transition-all text-sm resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 text-sm font-semibold text-zinc-900 bg-gradient-to-r from-orange-400 to-amber-400 rounded-xl hover:from-orange-300 hover:to-amber-300 transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30"
              >
                {sent ? (
                  'Message Sent!'
                ) : (
                  <>
                    Send Message <FiSend size={14} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
