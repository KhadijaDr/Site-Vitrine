import { useState, useEffect, useCallback } from 'react'

interface UseCounterAnimationOptions {
  duration?: number
  delay?: number
  easing?: 'linear' | 'ease-out' | 'ease-in-out'
}

export function useCounterAnimation(
  targetValue: number,
  options: UseCounterAnimationOptions = {}
) {
  const { duration = 2000, delay = 0, easing = 'ease-out' } = options
  const [count, setCount] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  const animate = useCallback(() => {
    if (hasAnimated) return // Ne pas relancer si déjà animé
    
    setIsAnimating(true)
    const startTime = Date.now()
    const startValue = 0

    const updateCounter = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      let easedProgress = progress
      switch (easing) {
        case 'ease-out':
          easedProgress = 1 - Math.pow(1 - progress, 3)
          break
        case 'ease-in-out':
          easedProgress = progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2
          break
        default:
          easedProgress = progress
      }

      const currentValue = Math.floor(startValue + (targetValue - startValue) * easedProgress)
      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(updateCounter)
      } else {
        setCount(targetValue)
        setIsAnimating(false)
        setHasAnimated(true)
      }
    }

    if (delay > 0) {
      setTimeout(updateCounter, delay)
    } else {
      updateCounter()
    }
  }, [targetValue, duration, delay, easing, hasAnimated])

  useEffect(() => {
    animate()
  }, [animate])

  return { count, isAnimating, animate }
}

export function useMultipleCounters(
  targets: Record<string, number>,
  options: UseCounterAnimationOptions = {}
) {
  const [counters, setCounters] = useState<Record<string, number>>({})
  const [isAnimating, setIsAnimating] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  const animateAll = useCallback(() => {
    if (hasAnimated) return // Ne pas relancer si déjà animé
    
    setIsAnimating(true)
    const startTime = Date.now()
    const { duration = 2000, delay = 0, easing = 'ease-out' } = options

    const updateCounters = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      let easedProgress = progress
      switch (easing) {
        case 'ease-out':
          easedProgress = 1 - Math.pow(1 - progress, 3)
          break
        case 'ease-in-out':
          easedProgress = progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2
          break
        default:
          easedProgress = progress
      }

      const newCounters: Record<string, number> = {}
      Object.entries(targets).forEach(([key, target]) => {
        newCounters[key] = Math.floor(target * easedProgress)
      })

      setCounters(newCounters)

      if (progress < 1) {
        requestAnimationFrame(updateCounters)
      } else {
        setCounters(targets)
        setIsAnimating(false)
        setHasAnimated(true)
      }
    }

    if (delay > 0) {
      setTimeout(updateCounters, delay)
    } else {
      updateCounters()
    }
  }, [targets, options, hasAnimated])

  useEffect(() => {
    animateAll()
  }, [animateAll])

  return { counters, isAnimating, animateAll }
} 