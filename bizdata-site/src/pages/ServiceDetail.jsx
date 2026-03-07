import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft, ArrowRight, CheckCircle2, X, Check,
  Calendar, ChevronRight
} from 'lucide-react'
import { getServiceBySlug, services } from '../data/services'
import ScrollReveal from '../components/ScrollReveal'

export default function ServiceDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const service = getServiceBySlug(slug)

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
        <h1 className="font-sora font-bold text-4xl text-white mb-4">Service Not Found</h1>
        <p className="text-slate-custom mb-8">The service you're looking for doesn't exist.</p>
        <Link to="/" className="text-cyan hover:underline flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    )
  }

  const scrollToContact = () => {
    navigate('/')
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }, 150)
  }

  // Other services for the "explore more" section
  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <div className="min-h-screen pt-20">

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="dot-grid absolute inset-0 z-0 opacity-40" />
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full z-0"
          style={{
            background: 'radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)',
            filter: 'blur(40px)',
            transform: 'translate(-50%, -50%)',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-slate-custom hover:text-cyan text-sm mb-10 transition-colors"
            >
              <ArrowLeft size={15} />
              Back to Services
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Icon */}
            <div className="service-icon-wrap w-16 h-16 mb-6" style={{ width: 64, height: 64 }}>
              <service.Icon size={28} className="text-cyan" />
            </div>

            <div className="text-cyan text-sm font-semibold uppercase tracking-widest mb-3">
              {service.tagline}
            </div>

            <h1 className="font-sora font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              {service.title}
            </h1>

            <p className="text-slate-custom text-lg sm:text-xl max-w-2xl leading-relaxed mb-10">
              {service.description}
            </p>

            {/* Metrics */}
            <div className="flex flex-wrap gap-4 mb-10">
              {service.metrics.map((m, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center px-6 py-4 rounded-xl"
                  style={{
                    background: 'rgba(0, 212, 255, 0.06)',
                    border: '1px solid rgba(0, 212, 255, 0.2)',
                  }}
                >
                  <span className="stat-value text-3xl font-sora font-extrabold">
                    {m.value}{m.suffix}
                  </span>
                  <span className="text-slate-custom text-xs mt-1 font-semibold uppercase tracking-wider">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToContact}
                className="btn-gradient-border flex items-center gap-2 px-7 py-3.5 rounded-xl font-sora font-bold text-navy text-sm transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #00D4FF, #00A8CC)' }}
              >
                <Calendar size={16} />
                {service.cta.primary}
              </button>
              <button
                onClick={scrollToContact}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-sora font-semibold text-white text-sm border border-white/15 hover:border-cyan/40 hover:bg-white/5 transition-all"
              >
                {service.cta.secondary}
                <ArrowRight size={15} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto" />

      {/* Service-specific detail sections */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* How It Works (Customer Support & Private ChatGPT) */}
        {service.howItWorks && (
          <ScrollReveal>
            <h2 className="font-sora font-bold text-2xl sm:text-3xl text-white mb-8">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.howItWorks.map((step, i) => (
                <div key={i} className="glass-card rounded-2xl p-6">
                  <div
                    className="text-4xl font-sora font-extrabold mb-4"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0,212,255,0.4), rgba(255,255,255,0.15))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {step.step}
                  </div>
                  <h3 className="font-sora font-bold text-white text-base mb-3">{step.title}</h3>
                  <p className="text-slate-custom text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}

        {/* Automation Categories (Business Process) */}
        {service.automationCategories && (
          <ScrollReveal>
            <h2 className="font-sora font-bold text-2xl sm:text-3xl text-white mb-8">
              What We Automate
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.automationCategories.map((cat, i) => (
                <div key={i} className="glass-card rounded-xl p-5">
                  <h4 className="font-sora font-semibold text-cyan text-sm mb-3">{cat.title}</h4>
                  <ul className="space-y-1.5">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-slate-custom text-sm">
                        <CheckCircle2 size={13} className="text-cyan flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}

        {/* Timeline (Business Process) */}
        {service.timeline && (
          <ScrollReveal>
            <h2 className="font-sora font-bold text-2xl sm:text-3xl text-white mb-8">
              Implementation Timeline
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {service.timeline.map((t, i) => (
                <div key={i} className="glass-card rounded-xl p-5">
                  <div className="text-cyan text-xs font-bold uppercase tracking-widest mb-2">{t.week}</div>
                  <h4 className="font-sora font-bold text-white text-base mb-2">{t.title}</h4>
                  <p className="text-slate-custom text-sm leading-relaxed">{t.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}

        {/* Enterprise Features */}
        {service.features && (
          <ScrollReveal>
            <h2 className="font-sora font-bold text-2xl sm:text-3xl text-white mb-8">
              Enterprise Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {service.features.map((f, i) => (
                <div key={i} className="glass-card rounded-xl p-5 flex items-start gap-4">
                  <CheckCircle2 size={18} className="text-cyan flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sora font-semibold text-white text-sm mb-1">{f.title}</h4>
                    <p className="text-slate-custom text-sm leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}

        {/* Use Cases (Enterprise) */}
        {service.useCases && (
          <ScrollReveal>
            <h2 className="font-sora font-bold text-2xl sm:text-3xl text-white mb-8">
              Industry Use Cases
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {service.useCases.map((uc, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5 text-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,212,255,0.06) 0%, rgba(13,31,60,0.8) 100%)',
                    border: '1px solid rgba(0,212,255,0.15)',
                  }}
                >
                  <div className="stat-value text-3xl font-sora font-extrabold mb-1">{uc.metric}</div>
                  <div className="text-slate-custom text-xs mb-2">{uc.description}</div>
                  <div className="text-cyan text-xs font-semibold uppercase tracking-wider">{uc.industry}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}

        {/* Compliance badges (Enterprise) */}
        {service.compliance && (
          <ScrollReveal>
            <h2 className="font-sora font-bold text-2xl sm:text-3xl text-white mb-6">
              Security & Compliance
            </h2>
            <div className="flex flex-wrap gap-3">
              {service.compliance.map((c, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full text-sm font-semibold text-cyan"
                  style={{
                    background: 'rgba(0,212,255,0.08)',
                    border: '1px solid rgba(0,212,255,0.25)',
                  }}
                >
                  <CheckCircle2 size={13} className="inline mr-1.5 -mt-0.5" />
                  {c}
                </span>
              ))}
            </div>
          </ScrollReveal>
        )}

        {/* Comparison Table (Private ChatGPT) */}
        {service.comparison && (
          <ScrollReveal>
            <h2 className="font-sora font-bold text-2xl sm:text-3xl text-white mb-8">
              Public AI vs. Private ChatGPT
            </h2>
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {/* Header */}
              <div
                className="grid grid-cols-3 px-6 py-4"
                style={{ background: 'rgba(13,31,60,0.8)' }}
              >
                <div className="text-slate-custom text-sm font-semibold">Feature</div>
                <div className="text-center text-slate-custom text-sm font-semibold">Public AI Tools</div>
                <div className="text-center text-cyan text-sm font-semibold">Private ChatGPT</div>
              </div>
              {service.comparison.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 px-6 py-3.5 border-t border-white/5 ${
                    i % 2 === 0 ? 'bg-white/[0.02]' : ''
                  }`}
                >
                  <div className="text-white text-sm">{row.feature}</div>
                  <div className="flex justify-center">
                    {row.public ? (
                      <Check size={16} className="text-green-400" />
                    ) : (
                      <X size={16} className="text-red-400" />
                    )}
                  </div>
                  <div className="flex justify-center">
                    {row.private ? (
                      <Check size={16} className="text-cyan" />
                    ) : (
                      <X size={16} className="text-red-400" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}

        {/* Department Use Cases (Private ChatGPT) */}
        {service.departments && (
          <ScrollReveal>
            <h2 className="font-sora font-bold text-2xl sm:text-3xl text-white mb-8">
              Use Cases by Department
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {service.departments.map((dept, i) => (
                <div key={i} className="glass-card rounded-xl p-5 flex items-start gap-4">
                  <div className="service-icon-wrap flex-shrink-0 w-10 h-10" style={{ width: 40, height: 40 }}>
                    <ChevronRight size={16} className="text-cyan" />
                  </div>
                  <div>
                    <h4 className="font-sora font-semibold text-white text-sm mb-1">{dept.name}</h4>
                    <p className="text-slate-custom text-sm">{dept.use}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}

        {/* Capabilities (Sales Engineering) */}
        {service.capabilities && (
          <ScrollReveal>
            <h2 className="font-sora font-bold text-2xl sm:text-3xl text-white mb-8">
              Core Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.capabilities.map((cap, i) => (
                <div key={i} className="glass-card rounded-xl p-6">
                  <div className="text-3xl mb-4">{cap.icon}</div>
                  <h4 className="font-sora font-bold text-white text-base mb-3">{cap.title}</h4>
                  <p className="text-slate-custom text-sm leading-relaxed">{cap.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}

        {/* Value Props (Custom AI Applications) */}
        {service.valueProps && (
          <ScrollReveal>
            <h2 className="font-sora font-bold text-2xl sm:text-3xl text-white mb-8">
              Why Custom Over Off-the-Shelf
            </h2>
            <div className="space-y-5">
              {service.valueProps.map((vp, i) => (
                <div
                  key={i}
                  className="glass-card rounded-xl p-6 flex items-start gap-6"
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-sora font-bold text-navy text-sm"
                    style={{ background: 'linear-gradient(135deg, #00D4FF, #00A8CC)' }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-sora font-bold text-white text-base mb-1">{vp.title}</h4>
                    <p className="text-slate-custom text-sm leading-relaxed mb-2">{vp.description}</p>
                    <span className="text-cyan text-xs font-semibold">{vp.highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}

        {/* Benefits (if present) */}
        {service.benefits && (
          <ScrollReveal>
            <h2 className="font-sora font-bold text-2xl sm:text-3xl text-white mb-6">
              What You Get
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-custom">
                  <CheckCircle2 size={16} className="text-cyan flex-shrink-0" />
                  {b}
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}

        {/* Examples (Custom AI) */}
        {service.examples && (
          <ScrollReveal>
            <h2 className="font-sora font-bold text-2xl sm:text-3xl text-white mb-6">
              Example Applications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.examples.map((ex, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-5 py-4 rounded-xl"
                  style={{
                    background: 'rgba(0,212,255,0.05)',
                    border: '1px solid rgba(0,212,255,0.15)',
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-cyan flex-shrink-0" />
                  <span className="text-white text-sm font-medium">{ex}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}
      </div>

      {/* Full-width CTA Banner */}
      <section className="py-16 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(0,212,255,0.06) 0%, rgba(0,100,200,0.04) 100%)',
            borderTop: '1px solid rgba(0,212,255,0.1)',
            borderBottom: '1px solid rgba(0,212,255,0.1)',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-sora font-bold text-3xl sm:text-4xl text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-slate-custom text-base mb-8 leading-relaxed">
            Schedule a free 30-minute discovery call. We'll discuss your specific needs and show you exactly how this solution applies to your business.
          </p>
          <button
            onClick={scrollToContact}
            className="btn-gradient-border inline-flex items-center gap-2 px-8 py-4 rounded-xl font-sora font-bold text-navy text-base transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #00D4FF, #00A8CC)' }}
          >
            <Calendar size={18} />
            Schedule Free Consultation
          </button>
        </div>
      </section>

      {/* Explore More Services */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h3 className="font-sora font-bold text-xl text-white mb-8">Explore More Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {otherServices.map((s, i) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="glass-card rounded-xl p-5 flex items-start gap-3 group"
              >
                <div className="service-icon-wrap flex-shrink-0 w-10 h-10" style={{ width: 40, height: 40 }}>
                  <s.Icon size={16} className="text-cyan" />
                </div>
                <div>
                  <div className="font-sora font-semibold text-white text-sm mb-1 group-hover:text-cyan transition-colors">
                    {s.title}
                  </div>
                  <div className="text-slate-custom text-xs leading-relaxed line-clamp-2">
                    {s.tagline}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
