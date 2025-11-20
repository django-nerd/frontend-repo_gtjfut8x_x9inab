import { Award, ShieldCheck, UserCheck } from 'lucide-react'
import { motion } from 'framer-motion'

export default function WhyUs() {
  return (
    <section id="why" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-3 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2">
          <div className="grid sm:grid-cols-2 gap-6">
            {[{
              icon: <Award className='text-[#D4A900]' />, title: 'Accredited experts', desc: 'Certified examiners with law-enforcement and corporate experience.'
            },{
              icon: <ShieldCheck className='text-[#D4A900]' />, title: 'Defensible methods', desc: 'We follow APA standards and maintain robust QA for every case.'
            },{
              icon: <UserCheck className='text-[#D4A900]' />, title: 'Human-first', desc: 'A respectful process that prioritizes dignity, privacy, and clarity.'
            }].map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.6 }} className="p-6 rounded-2xl border border-[#F3F0E8]/10 bg-[#1E1E1E]/70">
                <div className="size-11 rounded-xl bg-[#D4A900]/10 border border-[#D4A900]/30 flex items-center justify-center mb-4">
                  {b.icon}
                </div>
                <h3 className="text-white font-semibold">{b.title}</h3>
                <p className="mt-2 text-[#F3F0E8]/80 text-sm">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-1">
          <div className="p-6 rounded-2xl border border-[#D4A900]/30 bg-[#D4A900]/10">
            <h3 className="text-white font-semibold text-lg">What clients say</h3>
            <p className="mt-3 text-[#F3F0E8]">“Professional, discreet, and thorough. The report gave us exactly what we needed to proceed confidently.”</p>
            <p className="mt-4 text-[#D4A900] text-sm">— Corporate Security Director</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
