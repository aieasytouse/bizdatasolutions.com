import { UserCheck, Building2, Target, MapPin } from 'lucide-react'
import ScrollReveal from '../../components/ScrollReveal'

const differentiators = [
  {
    Icon: UserCheck,
    title: 'Personalized Attention',
    description:
      'You work directly with the founder — not an account manager or offshore team. Every decision, every line of code, every strategy session involves the person who actually built the system.',
    highlight: 'Direct founder access on every project.',
  },
  {
    Icon: Building2,
    title: 'Enterprise Expertise',
    description:
      'Our AI solutions are built on the same architecture powering Fortune 500 companies — AWS, SOC 2 compliant frameworks, and production-grade engineering standards.',
    highlight: 'Fortune 500 tech. Small business price.',
  },
  {
    Icon: Target,
    title: 'Practical Results',
    description:
      "We measure success in business outcomes — cost reductions, hours saved, revenue generated. Not buzzwords, not technology demos. If it doesn't move your bottom line, we don't build it.",
    highlight: 'ROI-first. Always.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      {/* Gold radial accent */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(201,138,10,0.05) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{
              background: 'rgba(201,138,10,0.08)',
              border: '1px solid rgba(201,138,10,0.25)',
              color: '#C98A0A',
            }}
          >
            Why Business Data Solutions?
          </div>
          <h2 className="font-sora font-bold text-4xl sm:text-5xl mb-4">
            <span style={{ color: '#F0F4F1' }}>Enterprise AI Expertise,{' '}</span>
            <span className="text-gold-gradient">Human Scale</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#8AADA0' }}>
           With years of experience delivering enterprise-grade technology solutions, we build practical, working systems that drive measurable business results. Here’s why organizations across the country choose Business Data Solutions.
          </p>
        </ScrollReveal>

        {/* Main content: image left, cards right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT: Image + text block */}
          <ScrollReveal direction="right">
            <div className="relative">
              {/* Main image */}
              <div
                className="rounded-3xl overflow-hidden mb-7 relative"
                style={{
                  border: '1px solid rgba(201,138,10,0.25)',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.6), 0 0 40px rgba(201,138,10,0.08)',
                }}
              >
                <img
                  src="/images/pic01.jpg"
                  alt="AI Business Analytics"
                  className="w-full object-cover"
                  style={{ aspectRatio: '16/9' }}
                />
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(201,138,10,0.06) 0%, transparent 50%)',
                  }}
                />
              </div>

              {/* Text content */}
              <p className="text-base leading-relaxed mb-4" style={{ color: '#8AADA0' }}>
                Founded in 2019, Business Data Solutions was created to give small and mid-sized businesses access to the same enterprise-grade technology that powers Fortune 500 companies. With years of experience delivering large-scale solutions, we build practical, working systems that drive measurable business results. Now, in the era of AI, we are once again ensuring that no business is left behind.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#8AADA0' }}>
                At Business Data Solutions, we bring enterprise-level expertise with a relentless focus on{' '}
                <span style={{ color: '#F0F4F1', fontWeight: 500 }}>measurable business impact</span>, not billable hours. Every engagement is intentional, every solution is built around your operational realities, and success is defined in dollars saved, risk reduced, and time returned to your team.
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: '#C98A0A' }}>
                <MapPin size={14} />
                <span>Based in Hartford, CT — serving businesses nationwide</span>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT: Differentiator Cards */}
          <div className="space-y-4">
            {differentiators.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.12} direction="left">
                <div className="gold-card rounded-2xl p-6 group">
                  <div className="flex items-start gap-4">
                    <div className="service-icon-wrap flex-shrink-0">
                      <item.Icon size={20} style={{ color: '#C98A0A' }} />
                    </div>
                    <div>
                      <h3 className="font-sora font-bold text-base mb-2" style={{ color: '#F0F4F1' }}>
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed mb-3" style={{ color: '#8AADA0' }}>
                        {item.description}
                      </p>
                      <span
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider"
                        style={{ color: '#C98A0A' }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: '#C98A0A' }}
                        />
                        {item.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* Stats strip */}
            <ScrollReveal delay={0.36}>
              <div
                className="rounded-2xl p-5 grid grid-cols-3 gap-4 mt-2"
                style={{
                  background: 'linear-gradient(135deg, rgba(201,138,10,0.07) 0%, rgba(15,61,42,0.5) 100%)',
                  border: '1px solid rgba(201,138,10,0.2)',
                }}
              >
                {[
                  { value: '20+', label: 'Years Experience' },
                  { value: '30+', label: 'Automations Built' },
                  { value: '100%', label: 'Client Retention' },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-sora font-extrabold mb-0.5 text-gold-gradient">
                      {s.value}
                    </div>
                    <div className="text-xs" style={{ color: '#8AADA0' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
