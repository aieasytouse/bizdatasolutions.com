import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Calendar, CheckCircle2, AlertCircle } from 'lucide-react'
import ScrollReveal from '../../components/ScrollReveal'
import { services } from '../../data/services'

const API_ENDPOINT = 'https://zluofjedy1.execute-api.us-east-1.amazonaws.com/Prod/bds-contact-us'

const contactDetails = [
  { Icon: Mail,   label: 'Email',    value: 'info@bizdatasolutions.com', href: 'mailto:info@bizdatasolutions.com' },
  { Icon: Phone,  label: 'Phone',    value: '(617) 642-7271',            href: 'tel:6176427271' },
  //{ Icon: MapPin, label: 'Location', value: '850 Clark Street #1493, South Windsor, CT 06074', href: null },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '', service: '', message: '',
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const triggerMailtoFallback = () => {
    const subject = encodeURIComponent(`New Inquiry from ${formData.name} — ${formData.company}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nService: ${formData.service || 'Not specified'}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:info@bizdatasolutions.com?subject=${subject}&body=${body}`
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    let apiSuccess = false
    try {
      const res = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        apiSuccess = true
        setStatus('success')
        setFormData({ name: '', company: '', email: '', phone: '', service: '', message: '' })
      }
    } catch {
      // API unreachable — fall through to mailto
    }
    if (!apiSuccess) {
      triggerMailtoFallback()
      setStatus('success')
      setFormData({ name: '', company: '', email: '', phone: '', service: '', message: '' })
    }
  }

  const inputStyle = {
    width: '100%',
    background: 'rgba(10,46,31,0.5)',
    border: '1px solid rgba(201,138,10,0.2)',
    borderRadius: '12px',
    padding: '12px 16px',
    color: '#F0F4F1',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    fontFamily: 'DM Sans, sans-serif',
  }

  const handleInputFocus = (e) => {
    e.target.style.borderColor = 'rgba(201,138,10,0.55)'
    e.target.style.boxShadow = '0 0 0 3px rgba(201,138,10,0.08)'
  }
  const handleInputBlur = (e) => {
    e.target.style.borderColor = 'rgba(201,138,10,0.2)'
    e.target.style.boxShadow = 'none'
  }

  const inputProps = { style: inputStyle, onFocus: handleInputFocus, onBlur: handleInputBlur }

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      {/* Gold radial accent */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(201,138,10,0.05) 0%, transparent 65%)',
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
            Get Started
          </div>
          <h2 className="font-sora font-bold text-4xl sm:text-5xl mb-4">
            <span style={{ color: '#F0F4F1' }}>Ready to Transform Your</span>
            <br />
            <span className="text-gold-gradient">Business with AI?</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: '#8AADA0' }}>
            Schedule a free 30-minute discovery call. No pressure, no obligation. Just practical advice on how AI can work for your specific business.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Contact Info (left) */}
          <ScrollReveal className="lg:col-span-2" direction="right">
            <div className="space-y-6 mb-8">
              {contactDetails.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="service-icon-wrap flex-shrink-0">
                    <item.Icon size={18} style={{ color: '#C98A0A' }} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider mb-1 font-semibold" style={{ color: '#C98A0A' }}>
                      {item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} className="text-sm transition-colors" style={{ color: '#F0F4F1' }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = '#C98A0A' }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = '#F0F4F1' }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm" style={{ color: '#F0F4F1' }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Calendar CTA */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: 'linear-gradient(135deg, rgba(201,138,10,0.08) 0%, rgba(15,61,42,0.5) 100%)',
                border: '1px solid rgba(201,138,10,0.25)',
              }}
            >
              <Calendar size={24} className="mb-3" style={{ color: '#C98A0A' }} />
              <h4 className="font-sora font-bold text-base mb-2" style={{ color: '#F0F4F1' }}>
                Prefer to Book Directly?
              </h4>
              <p className="text-sm mb-4 leading-relaxed" style={{ color: '#8AADA0' }}>
                Choose a time that works for you. Free 30-minute discovery call — no strings attached.
              </p>
              <a
                href="mailto:info@bizdatasolutions.com?subject=Schedule%20Free%20Consultation"
                className="block w-full text-center py-3 rounded-xl font-sora font-semibold text-sm btn-gold transition-all"
              >
                Schedule Free Consultation
              </a>
            </div>
          </ScrollReveal>

          {/* Contact Form (right) */}
          <ScrollReveal className="lg:col-span-3" direction="left">
            <div
              className="rounded-2xl p-8"
              style={{
                background: 'rgba(15,61,42,0.4)',
                border: '1px solid rgba(201,138,10,0.18)',
              }}
            >
              {status === 'success' ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-12 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle2 size={52} className="mb-4" style={{ color: '#C98A0A' }} />
                  <h3 className="font-sora font-bold text-xl mb-2" style={{ color: '#F0F4F1' }}>
                    Message Sent!
                  </h3>
                  <p className="text-sm max-w-xs" style={{ color: '#8AADA0' }}>
                    We'll get back to you within 24 hours. Looking forward to learning about your business.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm hover:underline"
                    style={{ color: '#C98A0A' }}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs mb-1.5 font-semibold uppercase tracking-wider" style={{ color: '#8AADA0' }}>
                        Name *
                      </label>
                      <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="John Smith" {...inputProps} />
                    </div>
                    <div>
                      <label className="block text-xs mb-1.5 font-semibold uppercase tracking-wider" style={{ color: '#8AADA0' }}>
                        Company *
                      </label>
                      <input type="text" name="company" required value={formData.company} onChange={handleChange} placeholder="Acme Corp" {...inputProps} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs mb-1.5 font-semibold uppercase tracking-wider" style={{ color: '#8AADA0' }}>
                        Email *
                      </label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@company.com" {...inputProps} />
                    </div>
                    <div>
                      <label className="block text-xs mb-1.5 font-semibold uppercase tracking-wider" style={{ color: '#8AADA0' }}>
                        Phone <span style={{ opacity: 0.5 }}>(optional)</span>
                      </label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(617) 555-0100" {...inputProps} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs mb-1.5 font-semibold uppercase tracking-wider" style={{ color: '#8AADA0' }}>
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: 'pointer', appearance: 'none' }}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    >
                      <option value="" style={{ background: '#0A2E1F' }}>Select a service...</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.slug} style={{ background: '#0A2E1F' }}>
                          {s.title}
                        </option>
                      ))}
                      <option value="not-sure" style={{ background: '#0A2E1F' }}>Not Sure — Help Me Decide</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs mb-1.5 font-semibold uppercase tracking-wider" style={{ color: '#8AADA0' }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your business and the challenges you're looking to solve..."
                      rows={4}
                      style={{ ...inputStyle, resize: 'none' }}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    />
                  </div>

                  {status === 'error' && (
                    <div
                      className="flex items-center gap-2 text-sm rounded-lg px-4 py-3"
                      style={{
                        color: '#f87171',
                        background: 'rgba(248,113,113,0.08)',
                        border: '1px solid rgba(248,113,113,0.2)',
                      }}
                    >
                      <AlertCircle size={16} />
                      Something went wrong. Please try again or email us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-sora font-bold text-sm btn-gold disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <div
                          className="w-4 h-4 border-2 rounded-full animate-spin"
                          style={{ borderColor: 'rgba(10,46,31,0.3)', borderTopColor: '#0A2E1F' }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} style={{ color: '#0A2E1F' }} />
                        <span style={{ color: '#0A2E1F' }}>Send Message</span>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center" style={{ color: 'rgba(138,173,160,0.5)' }}>
                    We respond within 24 hours. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
