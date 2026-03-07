import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MobileStickyCTA from './components/MobileStickyCTA'
import Home from './pages/Home'
import ServiceDetail from './pages/ServiceDetail'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-navy font-dm text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
          </Routes>
        </main>
        <Footer />
        <MobileStickyCTA />
      </div>
    </BrowserRouter>
  )
}
