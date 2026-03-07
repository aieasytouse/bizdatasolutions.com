import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { services } from '../data/services'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [location])

  const scrollToSection = (id) => {
    setMobileOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
      style={scrolled ? {
        background: 'rgba(10,46,31,0.96)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(201,138,10,0.15)',
        boxShadow: '0 4px 30px rgba(0,0,0,0.4)',
      } : {
        background: 'transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
            <img
              src="/images/bizda.jpg"
              alt="Business Data Solutions LLC"
              className="h-12 w-12 object-cover object-center transition-all duration-300 group-hover:scale-105"
              style={{
                mixBlendMode: 'screen',
                filter: 'brightness(1.1) drop-shadow(0 0 10px rgba(201,138,10,0.4))',
              }}
            />
            <div className="hidden sm:block">
              <div className="font-sora font-bold text-sm leading-tight tracking-wide" style={{ color: '#F0F4F1' }}>
                Business Data Solutions <span style={{ color: '#C98A0A' }}>LLC</span>
              </div>
              <div className="font-dm text-xs leading-tight" style={{ color: '#8AADA0' }}>
                AI, Implemented. Results, Delivered.
              </div>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { label: 'Home',    id: 'hero' },
              { label: 'About',   id: 'about' },
              { label: 'Results', id: 'results' },
              { label: 'Contact', id: 'contact' },
            ].map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{ color: '#8AADA0' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#F0F4F1'
                  e.currentTarget.style.background = 'rgba(201,138,10,0.06)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#8AADA0'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {label}
              </button>
            ))}

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{ color: '#8AADA0' }}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => setDropdownOpen(true)}
              >
                Services
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                  style={{ color: '#C98A0A' }}
                />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    className="absolute top-full right-0 mt-2 w-80 rounded-2xl overflow-hidden"
                    style={{
                      background: 'rgba(10,42,28,0.98)',
                      border: '1px solid rgba(201,138,10,0.2)',
                      boxShadow: '0 24px 64px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,138,10,0.05)',
                      backdropFilter: 'blur(24px)',
                    }}
                    initial={{ opacity: 0, y: -6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <div className="px-4 pt-3 pb-2" style={{ borderBottom: '1px solid rgba(201,138,10,0.1)' }}>
                      <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#C98A0A' }}>
                        Our Services
                      </p>
                    </div>
                    <div className="p-2">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          to={`/services/${service.slug}`}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group"
                          style={{ color: '#8AADA0' }}
                          onClick={() => setDropdownOpen(false)}
                          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(201,138,10,0.06)' }}
                          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
                        >
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all"
                            style={{
                              background: 'rgba(201,138,10,0.1)',
                              border: '1px solid rgba(201,138,10,0.2)',
                            }}
                          >
                            <service.Icon size={14} style={{ color: '#C98A0A' }} />
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs font-semibold font-sora truncate" style={{ color: '#F0F4F1' }}>
                              {service.title}
                            </div>
                            <div className="text-xs leading-tight mt-0.5 truncate opacity-70" style={{ color: '#8AADA0' }}>
                              {service.tagline}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* ── Desktop CTA ── */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollToSection('contact')}
              className="relative px-5 py-2.5 rounded-xl font-sora font-semibold text-sm btn-gold transition-all duration-300"
            >
              <span className="relative z-10">Schedule a Demo</span>
            </button>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: '#F0F4F1' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden"
            style={{
              background: 'rgba(10,42,28,0.98)',
              borderTop: '1px solid rgba(201,138,10,0.12)',
              backdropFilter: 'blur(24px)',
            }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 py-4 space-y-1">
              {[
                { label: 'Home',    id: 'hero' },
                { label: 'About',   id: 'about' },
                { label: 'Results', id: 'results' },
                { label: 'Contact', id: 'contact' },
              ].map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="block w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all"
                  style={{ color: '#8AADA0' }}
                >
                  {label}
                </button>
              ))}

              <div className="pt-1">
                <div className="px-3 py-1.5 text-xs font-bold uppercase tracking-widest" style={{ color: '#C98A0A' }}>
                  Services
                </div>
                <div className="space-y-0.5">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm transition-all"
                      style={{ color: '#8AADA0' }}
                    >
                      <service.Icon size={13} className="flex-shrink-0" style={{ color: '#C98A0A' }} />
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-3 pb-1">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-3.5 rounded-xl font-sora font-bold text-sm btn-gold"
                >
                  Schedule a Demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
