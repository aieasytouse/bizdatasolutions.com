import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import { services } from '../data/services'

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      {/* Background image with dark emerald overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/pic001.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.07 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, rgba(10,46,31,0.97) 100%)' }}
        />
      </div>

      {/* Top divider */}
      <div className="relative z-10">
        <div className="section-divider" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

            {/* ── Brand Column ── */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4 group">
                <img
                  src="/images/bizda.jpg"
                  alt="Business Data Solutions LLC"
                  className="h-14 w-14 object-cover transition-all duration-300 group-hover:scale-105"
                  style={{
                    mixBlendMode: 'screen',
                    filter: 'brightness(1.1) drop-shadow(0 0 10px rgba(201,138,10,0.4))',
                  }}
                />
                <div>
                  <div className="font-sora font-bold text-sm leading-tight" style={{ color: '#F0F4F1' }}>
                    Business Data Solutions <span style={{ color: '#C98A0A' }}>LLC</span>
                  </div>
                  <div className="text-xs leading-tight mt-0.5" style={{ color: '#C98A0A' }}>
                    AI Solutions
                  </div>
                </div>
              </Link>
              <p className="text-sm font-sora italic mb-3" style={{ color: '#C98A0A', opacity: 0.85 }}>
                "Enabling AI for your business sustainable growth"
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: '#8AADA0' }}>
                Practical automation built for small and mid-sized businesses — no technical team required.
              </p>
              <div className="flex items-center gap-2">
                {[
                  { href: 'https://linkedin.com', Icon: Linkedin, label: 'LinkedIn' },
                  { href: 'https://twitter.com',  Icon: Twitter,  label: 'Twitter / X' },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
                    style={{
                      border: '1px solid rgba(201,138,10,0.15)',
                      color: '#8AADA0',
                    }}
                    aria-label={label}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#C98A0A'
                      e.currentTarget.style.borderColor = 'rgba(201,138,10,0.5)'
                      e.currentTarget.style.background = 'rgba(201,138,10,0.06)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#8AADA0'
                      e.currentTarget.style.borderColor = 'rgba(201,138,10,0.15)'
                      e.currentTarget.style.background = 'transparent'
                    }}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* ── Services Column ── */}
            <div>
              <h4
                className="font-sora font-semibold text-xs uppercase tracking-widest mb-5"
                style={{ color: '#C98A0A' }}
              >
                Services
              </h4>
              <ul className="space-y-2.5">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      to={`/services/${service.slug}`}
                      className="text-sm transition-colors flex items-center gap-2 group"
                      style={{ color: '#8AADA0' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#C98A0A' }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = '#8AADA0' }}
                    >
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0 transition-colors"
                        style={{ background: 'rgba(201,138,10,0.3)' }}
                      />
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Company Column ── */}
            <div>
              <h4
                className="font-sora font-semibold text-xs uppercase tracking-widest mb-5"
                style={{ color: '#C98A0A' }}
              >
                Company
              </h4>
              <ul className="space-y-2.5">
                {[
                  { label: 'Home',         id: 'hero' },
                  { label: 'About',        id: 'about' },
                  { label: 'How We Work',  id: 'how-we-work' },
                  { label: 'Results',      id: 'results' },
                  { label: 'Contact',      id: 'contact' },
                ].map(({ label, id }) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollToSection(id)}
                      className="text-sm transition-colors flex items-center gap-2 group"
                      style={{ color: '#8AADA0' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#C98A0A' }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = '#8AADA0' }}
                    >
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgba(201,138,10,0.3)' }} />
                      {label}
                    </button>
                  </li>
                ))}
                <li>
                  <a
                    href="#"
                    className="text-sm transition-colors flex items-center gap-2"
                    style={{ color: '#8AADA0' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#C98A0A' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#8AADA0' }}
                  >
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgba(201,138,10,0.3)' }} />
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* ── Contact Column ── */}
            <div>
              <h4
                className="font-sora font-semibold text-xs uppercase tracking-widest mb-5"
                style={{ color: '#C98A0A' }}
              >
                Contact
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail size={13} className="mt-0.5 flex-shrink-0" style={{ color: '#C98A0A' }} />
                  <a
                    href="mailto:info@bizdatasolutions.com"
                    className="text-sm transition-colors"
                    style={{ color: '#8AADA0' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#C98A0A' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#8AADA0' }}
                  >
                    info@bizdatasolutions.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={13} className="mt-0.5 flex-shrink-0" style={{ color: '#C98A0A' }} />
                  <a
                    href="tel:6175447230"
                    className="text-sm transition-colors"
                    style={{ color: '#8AADA0' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#C98A0A' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#8AADA0' }}
                  >
                    (617) 544-7230
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={13} className="mt-0.5 flex-shrink-0" style={{ color: '#C98A0A' }} />
                  <span className="text-sm leading-relaxed" style={{ color: '#8AADA0' }}>
                    850 Clark Street #1493<br />South Windsor, CT 06074
                  </span>
                </li>
              </ul>
              <button
                onClick={() => scrollToSection('contact')}
                className="mt-6 w-full py-2.5 rounded-xl font-sora font-semibold text-sm transition-all btn-gold"
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* ── Bottom Bar ── */}
          <div className="section-divider mb-6" />
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
            style={{ color: 'rgba(138,173,160,0.55)' }}
          >
            <span>© 2025 Business Data Solutions LLC. All rights reserved. Est. 2019.</span>
            <div className="flex items-center gap-4">
              <a href="#" className="transition-colors hover:text-gold" style={{ color: 'inherit' }}>Privacy Policy</a>
              <span style={{ color: 'rgba(201,138,10,0.2)' }}>•</span>
              <a href="#" className="transition-colors hover:text-gold" style={{ color: 'inherit' }}>Terms of Service</a>
              <span style={{ color: 'rgba(201,138,10,0.2)' }}>•</span>
              <span className="flex items-center gap-1">
                Hartford, CT <MapPin size={9} style={{ color: '#C98A0A' }} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
