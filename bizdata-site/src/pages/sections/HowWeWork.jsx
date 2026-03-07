import { Phone, FileText, Rocket, LifeBuoy } from 'lucide-react'
import ScrollReveal from '../../components/ScrollReveal'
import CircuitBackground from '../../components/CircuitBackground'

const steps = [
  {
    number: '01',
    Icon: Phone,
    title: 'Discovery Call',
    description:
      'We start with a free 30-minute call to understand your business, identify your biggest pain points, and map out where AI can have the most immediate impact.',
    detail: 'Free · No obligation · Immediate value',
  },
  {
    number: '02',
    Icon: FileText,
    title: 'Custom Proposal',
    description:
      'You receive a tailored solution blueprint with a clear scope of work, implementation timeline, and projected ROI — specific to your business, not a generic template.',
    detail: 'Fixed pricing · Clear deliverables · ROI projection',
  },
  {
    number: '03',
    Icon: Rocket,
    title: 'Build & Deploy',
    description:
      'We implement your solution in 30 days with minimal disruption to your operations. You stay informed at every step with weekly check-ins and demos.',
    detail: '30-day deployment · Weekly updates · Zero disruption',
  },
  {
    number: '04',
    Icon: LifeBuoy,
    title: 'Ongoing Support',
    description:
      'After launch, we continuously monitor, optimize, and enhance your AI systems. As your business grows, your AI grows with it.',
    detail: 'Continuous optimization · Priority support · Regular reviews',
  },
]

export default function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="py-24 relative overflow-hidden"
      style={{ background: 'var(--bg-surface)' }}
    >
      <CircuitBackground />

      {/* Vignette */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, var(--bg-primary) 0%, rgba(15,61,42,0.7) 30%, rgba(15,61,42,0.7) 70%, var(--bg-primary) 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{
              background: 'rgba(201,138,10,0.08)',
              border: '1px solid rgba(201,138,10,0.25)',
              color: '#C98A0A',
            }}
          >
            Our Process
          </div>
          <h2 className="font-sora font-bold text-4xl sm:text-5xl mb-4">
            <span style={{ color: '#F0F4F1' }}>From Idea to Impact</span>
            <br />
            <span className="text-gold-gradient">in 30 Days</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#8AADA0' }}>
            A clear, predictable process that gets you from discovery to deployed AI — without the typical enterprise delays.
          </p>
        </ScrollReveal>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.1} direction="up">
              <div className="relative h-full">
                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 left-[calc(50%+36px)] w-[calc(100%-72px)] h-px z-10"
                    style={{
                      background: 'linear-gradient(90deg, rgba(201,138,10,0.4), rgba(201,138,10,0.08))',
                    }}
                  />
                )}

                <div
                  className="gold-card rounded-2xl p-6 h-full flex flex-col"
                  style={{ background: 'rgba(10,46,31,0.8)' }}
                >
                  {/* Step number + Icon */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'rgba(201,138,10,0.12)',
                        border: '1px solid rgba(201,138,10,0.3)',
                      }}
                    >
                      <step.Icon size={20} style={{ color: '#C98A0A' }} />
                    </div>
                    <span
                      className="font-sora font-extrabold text-3xl"
                      style={{
                        background: 'linear-gradient(135deg, rgba(201,138,10,0.5), rgba(232,168,32,0.2))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-sora font-bold text-lg mb-3" style={{ color: '#F0F4F1' }}>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: '#8AADA0' }}>
                    {step.description}
                  </p>
                  <div
                    className="text-xs font-semibold pt-4"
                    style={{
                      color: '#C98A0A',
                      borderTop: '1px solid rgba(201,138,10,0.12)',
                    }}
                  >
                    {step.detail}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
