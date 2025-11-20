import { Menu, ShieldCheck, Phone, Mail } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#how', label: 'How it works' },
    { href: '#why', label: 'Why us' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 backdrop-blur-md bg-slate-900/60 border border-white/10 rounded-2xl shadow-2xl">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center">
                <ShieldCheck className="text-emerald-400" size={22} />
              </div>
              <div>
                <p className="text-white font-semibold leading-tight">Sentinel Intelligence</p>
                <p className="text-xs text-emerald-300/80">Security & Polygraph Services</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-slate-300 hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="tel:+18001234567" className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 transition-colors">
                <Phone size={18} className="opacity-80 group-hover:opacity-100" />
                <span className="text-sm">+1 (800) 123-4567</span>
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 text-slate-900 font-semibold hover:bg-emerald-400 transition-colors">
                <Mail size={18} />
                <span className="text-sm">Get a quote</span>
              </a>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg border border-white/10 text-slate-200">
              <Menu />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4 space-y-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="block text-slate-300 hover:text-white">
                  {l.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-3">
                <a href="tel:+18001234567" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-emerald-400/30 bg-emerald-500/10 text-emerald-300">
                  <Phone size={18} />
                  <span className="text-sm">+1 (800) 123-4567</span>
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 text-slate-900 font-semibold">
                  <Mail size={18} />
                  <span className="text-sm">Get a quote</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
