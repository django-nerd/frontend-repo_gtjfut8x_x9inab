import { ListChecks, Shield, FileCheck2 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-3 gap-8 items-start">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-1">
          <h2 className="text-3xl font-bold text-white">How a polygraph works with us</h2>
          <p className="mt-3 text-slate-300">A calm, professional process led by accredited examiners. Confidential from start to finish.</p>
        </motion.div>

        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="p-6 rounded-2xl border border-white/10 bg-slate-900/60">
            <div className="size-11 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center mb-4">
              <ListChecks className="text-emerald-400" />
            </div>
            <h3 className="text-white font-semibold">Pre-test interview</h3>
            <p className="mt-2 text-slate-300 text-sm">We clarify the scope, explain the procedure, and agree on test questions together.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="p-6 rounded-2xl border border-white/10 bg-slate-900/60">
            <div className="size-11 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center mb-4">
              <Shield className="text-emerald-400" />
            </div>
            <h3 className="text-white font-semibold">Examination</h3>
            <p className="mt-2 text-slate-300 text-sm">Sensors record physiological data while we ask standardized, validated questions.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="p-6 rounded-2xl border border-white/10 bg-slate-900/60">
            <div className="size-11 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center mb-4">
              <FileCheck2 className="text-emerald-400" />
            </div>
            <h3 className="text-white font-semibold">Analysis & report</h3>
            <p className="mt-2 text-slate-300 text-sm">Data is evaluated using scoring methods and peer review. You receive a clear report.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
