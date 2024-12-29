import { RefObject, useEffect, useRef } from 'react'

export const useDimensions = (ref: RefObject<HTMLDivElement>) => {
  const dimensions = useRef({ height: 0, width: 0 })

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth
      dimensions.current.height = ref.current.offsetHeight
    }
  }, [ref])

  return dimensions.current
}
