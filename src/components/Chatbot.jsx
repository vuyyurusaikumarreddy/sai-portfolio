import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChat, HiX, HiPaperAirplane } from 'react-icons/hi'
import saiPhoto from '../assets/SAI.jpg'

const INITIAL_MESSAGES = [
  {
    id: 1,
    role: 'bot',
    text: "Hey! I'm Sai's portfolio assistant. Ask me anything about his skills, experience, or projects!",
  },
]

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState(INITIAL_MESSAGES)
  const [input, setInput] = useState('')
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = (e) => {
    e.preventDefault()
    const text = input.trim()
    if (!text) return

    const userMsg = { id: Date.now(), role: 'user', text }
    setMessages((prev) => [...prev, userMsg])
    setInput('')

    // Placeholder bot reply — replace with real backend call later
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: 'bot',
          text: "Thanks for your message! This chatbot isn't connected to a backend yet — stay tuned!",
        },
      ])
    }, 800)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle button */}
      {/* Ping ring behind button */}
      {!open && (
        <span className="absolute inset-0 rounded-full bg-orange-500/30 animate-ping pointer-events-none" />
      )}

      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setOpen((v) => !v)}
        className="relative w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-zinc-900 flex items-center justify-center shadow-xl shadow-orange-500/40 hover:shadow-orange-500/60 transition-shadow cursor-pointer ring-2 ring-orange-400/30 ring-offset-2 ring-offset-zinc-950"
        aria-label="Toggle chatbot"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <HiX size={24} />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} transition={{ duration: 0.15 }}>
              <HiChat size={24} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute bottom-20 right-0 w-80 sm:w-96 rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl shadow-black/50"
            style={{
              background: 'linear-gradient(135deg, rgba(24,24,27,0.95), rgba(9,9,11,0.98))',
              backdropFilter: 'blur(20px)',
            }}
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-zinc-800 flex items-center gap-3">
              <img src={saiPhoto} alt="Sai" className="w-9 h-9 rounded-full object-cover ring-1 ring-orange-500/30" />
              <div>
                <p className="text-sm font-semibold text-white">Sai's Assistant</p>
                <p className="text-xs text-zinc-500 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                  Online
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto px-4 py-4 flex flex-col gap-3 custom-scrollbar">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'ml-auto bg-orange-500/15 text-orange-100 rounded-br-md border border-orange-500/10'
                      : 'mr-auto bg-zinc-800/60 text-zinc-300 rounded-bl-md border border-zinc-700/30'
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="px-4 py-3 border-t border-zinc-800 flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 bg-zinc-900/50 border border-zinc-800 rounded-full px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 outline-none focus:border-orange-500/40 transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-9 h-9 rounded-full bg-orange-500/15 text-orange-400 flex items-center justify-center hover:bg-orange-500/25 transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Send message"
              >
                <HiPaperAirplane size={16} className="rotate-90" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
