import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
          service: e.target.service.value,
        })
      })

      if (res.ok) {
        setStatus('Thank you — we will reach out shortly.')
        e.target.reset()
      } else {
        const data = await res.json().catch(() => ({}))
        setStatus(data.detail || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setStatus(err.message)
    }
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white">
            Speak with an examiner
          </motion.h2>
          <p className="mt-3 text-slate-300">Tell us a little about your case and preferred service. We respond within 1 business day.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 rounded-2xl border border-white/10 bg-slate-900/60 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Full name" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" />
            <input name="email" type="email" required placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" />
          </div>

          <select name="service" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/40">
            <option value="Polygraph">Polygraph</option>
            <option value="Background Intelligence">Background Intelligence</option>
            <option value="Forensic Analysis">Forensic Analysis</option>
          </select>

          <textarea name="message" rows="4" placeholder="Tell us about your needs" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"></textarea>

          <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-slate-900 font-semibold hover:bg-emerald-400 transition-colors">
            <Send size={18} /> Send inquiry
          </button>

          {status && <p className="text-sm text-emerald-300">{status}</p>}
        </form>
      </div>
    </section>
  )
}
