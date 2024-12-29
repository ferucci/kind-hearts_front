import { useEffect, useRef, useState } from 'react'

import { useDimensions } from '@/utils'

export const useHeader = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const menuWrapperRef = useRef<HTMLDivElement | null>(null)
  const burgerButtonRef = useRef<HTMLButtonElement | null>(null)

  const navigationRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const body = document.querySelector('body')

    if (isOpenMenu) {
      body?.classList.add('disable-scroll')
    } else {
      body?.classList.remove('disable-scroll')
    }
  }, [isOpenMenu])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !menuWrapperRef.current?.contains(event.target as Node) &&
        !burgerButtonRef.current?.contains(event.target as Node)
      ) {
        setIsOpenMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpenMenu])

  const { height } = useDimensions(menuWrapperRef)

  return { burgerButtonRef, height, isOpenMenu, menuWrapperRef, navigationRef, setIsOpenMenu }
}
