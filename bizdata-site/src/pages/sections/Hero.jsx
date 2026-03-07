import { motion } from 'framer-motion'
import { ArrowRight, Calendar, ShieldCheck, Clock, TrendingDown, Headphones } from 'lucide-react'
import CircuitBackground from '../../components/CircuitBackground'

const trustItems = [
  { icon: TrendingDown, label: '66% Cost Reduction' },
  { icon: Clock,        label: '30-Day Deployment' },
  { icon: ShieldCheck,  label: 'SOC 2 Ready' },
  { icon: Headphones,   label: '24/7 AI Support' },
]

export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* ── Circuit background ── */}
      <CircuitBackground />

      {/* ── Glow orbs ── */}
      <div className="orb-1 hero-orb" />
      <div className="orb-2 hero-orb" />
      <div className="orb-3 hero-orb" />

      {/* ── Vignette keep center readable ── */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse 90% 80% at 30% 50%, transparent 0%, rgba(10,46,31,0.4) 55%, var(--bg-primary) 90%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Content ── */}
          <div>
            {/* Status badge */}
            <motion.div
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-5"
              style={{
                background: 'rgba(201,138,10,0.08)',
                border: '1px solid rgba(201,138,10,0.3)',
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="glow-dot" />
              <span className="text-xs font-semibold font-sora" style={{ color: '#C98A0A' }}>
                Neural AI Systems · Hartford, CT
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="font-sora font-semibold text-xl sm:text-2xl italic mb-7 max-w-lg"
              style={{
                background: 'linear-gradient(135deg, #C98A0A 0%, #E8A820 60%, #F0F4F1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              "We Work With You to Make AI Work for Your Business."
            </motion.p>

            {/* Headline */}
            <motion.h1
              className="font-sora font-extrabold text-5xl sm:text-6xl lg:text-6xl xl:text-7xl leading-[1.06] tracking-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-gold-gradient">AI Solutions</span>
              <br />
              <span style={{ color: '#F0F4F1' }}>Built for Your</span>
              <br />
              <span style={{ color: '#F0F4F1' }}>Business</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              className="text-lg leading-relaxed mb-9 max-w-lg"
              style={{ color: '#8AADA0' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We help small and mid-sized businesses{' '}
              <span style={{ color: '#F0F4F1', fontWeight: 500 }}>cut costs, save time, and grow faster</span>{' '}
              with practical AI automation — no technical team required.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row items-start gap-3 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button
                onClick={() => scrollToSection('services')}
                className="group relative flex items-center gap-2 px-7 py-4 rounded-xl font-sora font-bold text-sm transition-all duration-300 overflow-hidden btn-gold"
              >
                <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-600 skew-x-12" />
                <span className="relative" style={{ color: '#0A2E1F' }}>See Our Services</span>
                <ArrowRight size={16} className="relative group-hover:translate-x-1 transition-transform" style={{ color: '#0A2E1F' }} />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="group flex items-center gap-2 px-7 py-4 rounded-xl font-sora font-semibold text-sm transition-all duration-300"
                style={{
                  color: '#F0F4F1',
                  border: '1px solid rgba(201,138,10,0.25)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201,138,10,0.6)'
                  e.currentTarget.style.background = 'rgba(201,138,10,0.06)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201,138,10,0.25)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                <Calendar size={16} style={{ color: '#C98A0A' }} />
                Free Consultation
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex flex-wrap gap-x-6 gap-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {trustItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs" style={{ color: '#8AADA0' }}>
                  <item.icon size={13} className="flex-shrink-0" style={{ color: '#C98A0A' }} />
                  <span>{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Hero Image with circuit frame ── */}
          <motion.div
            className="hidden lg:flex justify-center items-center"
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="relative">
              {/* Outer gold glow ring */}
              <div
                className="absolute inset-0 rounded-3xl z-0"
                style={{
                  background: 'radial-gradient(circle, rgba(201,138,10,0.12) 0%, transparent 70%)',
                  filter: 'blur(30px)',
                  transform: 'scale(1.2)',
                }}
              />

              {/* Rotating circuit frame */}
              <motion.div
                className="absolute inset-0 rounded-3xl z-0"
                style={{
                  border: '1px solid rgba(201,138,10,0.2)',
                  borderRadius: '28px',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              />

              {/* Main image */}
              <div
                className="relative z-10 rounded-3xl overflow-hidden"
                style={{
                  border: '1px solid rgba(201,138,10,0.3)',
                  boxShadow: '0 0 60px rgba(201,138,10,0.12), 0 32px 64px rgba(0,0,0,0.6)',
                }}
              >
                <img
                  src="/images/pic02.jpg"
                  alt="AI Intelligence"
                  className="w-full max-w-lg object-cover"
                  style={{ aspectRatio: '1/1' }}
                />
                {/* Emerald overlay at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-28"
                  style={{ background: 'linear-gradient(to top, rgba(10,46,31,0.9), transparent)' }}
                />
                {/* Live status badge */}
                <div
                  className="absolute bottom-5 left-5 right-5 flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{
                    background: 'rgba(10,46,31,0.9)',
                    border: '1px solid rgba(201,138,10,0.3)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <span className="glow-dot flex-shrink-0" />
                  <span className="font-sora font-semibold text-xs" style={{ color: '#F0F4F1' }}>
                    Neural AI System — Active
                  </span>
                  <span className="ml-auto text-xs font-bold" style={{ color: '#C98A0A' }}>24/7</span>
                </div>
              </div>

              {/* Corner circuit nodes */}
              {[
                { pos: 'top-0 left-0',  delay: 0 },
                { pos: 'top-0 right-0', delay: 0.8 },
                { pos: 'bottom-0 left-0',  delay: 1.6 },
                { pos: 'bottom-0 right-0', delay: 2.4 },
              ].map((corner, i) => (
                <div
                  key={i}
                  className={`absolute ${corner.pos} w-3 h-3 rounded-full z-20`}
                  style={{
                    background: '#C98A0A',
                    boxShadow: '0 0 10px rgba(201,138,10,0.8)',
                    animation: `nodeBlink 2.5s ease-in-out infinite ${corner.delay}s`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--bg-primary))' }}
      />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div
          className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
          style={{ border: '1px solid rgba(201,138,10,0.3)' }}
        >
          <div className="w-1 h-2 rounded-full" style={{ background: '#C98A0A' }} />
        </div>
      </motion.div>
    </section>
  )
}
