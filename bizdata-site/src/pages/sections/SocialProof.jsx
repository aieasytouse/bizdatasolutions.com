import { Star, Quote } from 'lucide-react'
import ScrollReveal from '../../components/ScrollReveal'
import AnimatedCounter from '../../components/AnimatedCounter'

const stats = [
  { value: '66', suffix: '%', label: 'Avg. Cost Reduction' },
  { value: '30', suffix: 'd', label: 'Average Deployment' },
  { value: '30', suffix: '+', label: 'Automations Built' },
  { value: '24', suffix: '/7', label: 'AI Support Coverage' },
  { value: '100', suffix: '%', label: 'SOC 2 Ready' },
]

const testimonials = [

  {
    name: 'James M.',
    title: 'CEO',
    company: 'Laibon Enterprise LLC.',
    text: "I was skeptical that a small firm could deliver enterprise-grade AI. I was wrong. The Private ChatGPT solution they built for us has cut our research time in half. Implementation was seamless.",
    rating: 5,
  },
  {
    name: 'Isaac N.',
    title: 'CEO',
    company: 'Transportation company',
    text: 'The business process automation they built for our AP department eliminated 40 hours of manual work per week. The system pays for itself every single month. Working directly with the founder meant fast decisions and zero hand-holding.',
    rating: 5,
  },
]

export default function SocialProof() {
  return (
    <section id="results" className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      {/* Background accent */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(201,138,10,0.04) 0%, transparent 65%)',
        }}
      />

      {/* Subtle image overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/pic10.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.03 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <ScrollReveal className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{
              background: 'rgba(201,138,10,0.08)',
              border: '1px solid rgba(201,138,10,0.25)',
              color: '#C98A0A',
            }}
          >
            Proven Results
          </div>
          <h2 className="font-sora font-bold text-4xl sm:text-5xl mb-4">
            <span style={{ color: '#F0F4F1' }}>Numbers That</span>
            <span className="text-gold-gradient"> Speak</span>
          </h2>
        </ScrollReveal>

        {/* Stats Banner */}
        <ScrollReveal>
          <div
            className="rounded-2xl p-8 mb-16"
            style={{
              background: 'linear-gradient(135deg, rgba(15,61,42,0.9) 0%, rgba(10,46,31,0.95) 100%)',
              border: '1px solid rgba(201,138,10,0.25)',
              boxShadow: '0 0 60px rgba(201,138,10,0.06)',
            }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="stat-value text-4xl sm:text-5xl font-sora font-extrabold mb-1">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={2000} />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#8AADA0' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1} direction="up">
              <div className="testimonial-card rounded-2xl p-6 h-full flex flex-col">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star key={si} size={14} style={{ color: '#C98A0A', fill: '#C98A0A' }} />
                  ))}
                </div>

                <Quote size={20} className="mb-3" style={{ color: 'rgba(201,138,10,0.35)' }} />

                <p className="text-sm leading-relaxed flex-1 mb-6 italic" style={{ color: '#8AADA0' }}>
                  "{t.text}"
                </p>

                <div
                  className="flex items-center gap-3 pt-4"
                  style={{ borderTop: '1px solid rgba(201,138,10,0.1)' }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold font-sora"
                    style={{
                      background: 'linear-gradient(135deg, #C98A0A, #E8A820)',
                      color: '#0A2E1F',
                    }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold font-sora" style={{ color: '#F0F4F1' }}>{t.name}</div>
                    <div className="text-xs" style={{ color: '#8AADA0' }}>{t.title}, {t.company}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Disclaimer */}
        <ScrollReveal className="text-center mt-8">
          <p className="text-xs" style={{ color: 'rgba(138,173,160,0.45)' }}>
            * Testimonials represent typical client results. Individual outcomes vary based on implementation scope and business context.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
