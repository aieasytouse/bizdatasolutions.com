import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Calendar } from 'lucide-react'

export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 400px
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 left-4 right-4 z-50 md:hidden"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <button
            onClick={scrollToContact}
            className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-sora font-semibold text-sm btn-gold"
            style={{ boxShadow: '0 8px 32px rgba(201,138,10,0.4)', color: '#0A2E1F' }}
          >
            <Calendar size={18} />
            Schedule Free Consultation
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
