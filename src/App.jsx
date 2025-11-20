import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#1E1E1E]">
      {/* subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_-20%,rgba(212,169,0,0.15),transparent)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <HowItWorks />
        <WhyUs />
        <Contact />

        <footer className="py-12 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#F3F0E8]/70">
            <p>© {new Date().getFullYear()} Sentinel Intelligence. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
