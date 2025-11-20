import { ShieldCheck, ScanFace, FileSearch, BadgeCheck, Fingerprint, Waves } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  {
    icon: <ScanFace className="text-[#D4A900]" size={24} />,
    title: 'Polygraph Testing',
    desc: 'Accredited, discreet examinations for pre-employment, incident investigations, and periodic screening.'
  },
  {
    icon: <FileSearch className="text-[#D4A900]" size={24} />,
    title: 'Background Intelligence',
    desc: 'Deep-dive due diligence, OSINT, and risk profiling to inform high-stakes decisions.'
  },
  {
    icon: <Fingerprint className="text-[#D4A900]" size={24} />,
    title: 'Forensic Analysis',
    desc: 'Document authenticity checks, audio analysis, and digital trace examinations.'
  },
  {
    icon: <ShieldCheck className="text-[#D4A900]" size={24} />,
    title: 'Insider Threat',
    desc: 'Behavioral analytics and monitoring strategies to mitigate insider risks.'
  },
  {
    icon: <Waves className="text-[#D4A900]" size={24} />,
    title: 'Voice Stress',
    desc: 'Voice-based stress detection as a non-invasive supplementary assessment.'
  },
  {
    icon: <BadgeCheck className="text-[#D4A900]" size={24} />,
    title: 'Compliance Audits',
    desc: 'Policy review, process verification, and training to align with regulations.'
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white">
            Intelligence services built for trust
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-3 text-[#F3F0E8]/80">
            We combine validated science with modern technology to deliver clear, defensible results.
          </motion.p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }} className="p-6 rounded-2xl border border-[#F3F0E8]/10 bg-[#1E1E1E]/70 hover:bg-[#1E1E1E]/90 transition-colors">
              <div className="size-11 rounded-xl bg-[#D4A900]/10 border border-[#D4A900]/30 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-white font-semibold text-lg">{item.title}</h3>
              <p className="mt-2 text-[#F3F0E8]/80 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
