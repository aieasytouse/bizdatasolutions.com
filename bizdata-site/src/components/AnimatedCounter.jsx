import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

export default function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    const numericTarget = parseFloat(target)
    const isDecimal = target.toString().includes('.')
    const startTime = performance.now()

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing: ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = eased * numericTarget

      setCount(isDecimal ? parseFloat(current.toFixed(2)) : Math.floor(current))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(numericTarget)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, target, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}
