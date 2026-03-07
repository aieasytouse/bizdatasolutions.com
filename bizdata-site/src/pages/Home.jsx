import Hero from './sections/Hero'
import Services from './sections/Services'
import About from './sections/About'
import HowWeWork from './sections/HowWeWork'
import SocialProof from './sections/SocialProof'
import Contact from './sections/Contact'

// Thin cyan divider between sections
function Divider() {
  return <div className="section-divider mx-auto max-w-5xl" />
}

export default function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <Services />
      <Divider />
      <About />
      <Divider />
      <HowWeWork />
      <Divider />
      <SocialProof />
      <Divider />
      <Contact />
    </>
  )
}
