import { useState, useEffect } from 'react'

const useCountUp = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start)
  const [hasStarted, setHasStarted] = useState(false)

  const startAnimation = () => {
    if (hasStarted) return
    setHasStarted(true)
    
    const startTime = Date.now()
    const startValue = start
    const endValue = typeof end === 'string' ? parseInt(end.replace(/\D/g, '')) : end
    
    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart)
      
      setCount(currentValue)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }

  return { count, startAnimation }
}

export default useCountUp