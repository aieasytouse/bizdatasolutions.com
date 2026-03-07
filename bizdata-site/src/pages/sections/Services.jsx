import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ScrollReveal from '../../components/ScrollReveal'
import CircuitBackground from '../../components/CircuitBackground'
import { services } from '../../data/services'

function ServiceCard({ service, index }) {
  return (
    <ScrollReveal delay={index * 0.08} direction="up">
      <Link to={`/services/${service.slug}`} className="block h-full group">
        <div className="gold-card rounded-2xl p-6 h-full flex flex-col cursor-pointer">

          {/* Icon */}
          <div className="service-icon-wrap mb-5">
            <service.Icon size={22} style={{ color: '#C98A0A' }} />
          </div>

          {/* Title & Tagline */}
          <h3 className="font-sora font-bold text-lg leading-snug mb-2" style={{ color: '#F0F4F1' }}>
            {service.title}
          </h3>
          <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#C98A0A' }}>
            {service.tagline}
          </p>
          <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: '#8AADA0' }}>
            {service.shortDescription}
          </p>

          {/* Metrics */}
          <div className="flex flex-wrap gap-2 mb-5">
            {service.metrics.map((m, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-md text-xs font-semibold"
                style={{
                  color: '#C98A0A',
                  background: 'rgba(201,138,10,0.1)',
                  border: '1px solid rgba(201,138,10,0.2)',
                }}
              >
                {m.value}{m.suffix} {m.label}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div
            className="flex items-center gap-1.5 text-sm font-semibold group-hover:gap-3 transition-all"
            style={{ color: '#C98A0A' }}
          >
            Learn More
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </ScrollReveal>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      <CircuitBackground density="fine" />

      {/* Radial gold accent at top */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(201,138,10,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{
              background: 'rgba(201,138,10,0.08)',
              border: '1px solid rgba(201,138,10,0.25)',
              color: '#C98A0A',
            }}
          >
            What We Do
          </div>
          <h2 className="font-sora font-bold text-4xl sm:text-5xl mb-4">
            <span style={{ color: '#F0F4F1' }}>AI Solutions for Every</span>
            <br />
            <span className="text-gold-gradient">Business Need</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: '#8AADA0' }}>
            From automating customer support to building custom AI applications — measurable results in 30 days or less.
          </p>
        </ScrollReveal>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal className="text-center mt-14" delay={0.2}>
          <p className="mb-4 text-sm" style={{ color: '#8AADA0' }}>
            Not sure which service is right for you?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-sora font-semibold text-sm transition-all duration-300"
            style={{
              color: '#C98A0A',
              border: '1px solid rgba(201,138,10,0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(201,138,10,0.08)'
              e.currentTarget.style.borderColor = 'rgba(201,138,10,0.6)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(201,138,10,0.3)'
            }}
          >
            Schedule a Free Discovery Call
            <ArrowRight size={15} />
          </button>
        </ScrollReveal>
      </div>
    </section>
  )
}
