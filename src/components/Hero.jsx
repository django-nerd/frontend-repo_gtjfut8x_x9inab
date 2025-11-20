import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-28 overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(16,185,129,0.25),transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 items-center">
        <div className="py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 text-xs"
          >
            Trusted corporate-grade security intelligence
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
          >
            Polygraph, Risk Assessments and Intelligence Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-5 text-slate-300 text-lg leading-relaxed"
          >
            We help enterprises verify truth, detect fraud, and safeguard operations with discrete, science-backed assessments and modern investigative workflows.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-500 text-slate-900 font-semibold hover:bg-emerald-400 transition-colors">
              Book a Polygraph
            </a>
            <a href="#services" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/10 text-white hover:bg-white/5 transition-colors">
              Explore Services
            </a>
          </motion.div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[620px] rounded-2xl overflow-hidden border border-white/10 bg-black/40">
          <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />

          {/* Soft gradient overlay to blend edges; pointer-events-none so scene stays interactive */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>
      </div>

      {/* Decorative lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden>
        <svg className="absolute -left-20 top-0 h-[120%]" viewBox="0 0 800 1000" fill="none">
          <path d="M0 0 L0 1000" stroke="white" />
          <path d="M200 0 L200 1000" stroke="white" />
          <path d="M400 0 L400 1000" stroke="white" />
          <path d="M600 0 L600 1000" stroke="white" />
          <path d="M800 0 L800 1000" stroke="white" />
        </svg>
      </div>
    </section>
  )
}
