import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { animate, useAnimation, useMotionValue, useTransform } from 'framer-motion'

export const useAdvantage = (number: number, time: number) => {
  const count = useMotionValue(0)
  const rounded = useTransform(count, Math.round)

  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      animate(count, number, {
        duration: time,
      })
    }
  }, [controls, inView])

  return { ref, rounded }
}
