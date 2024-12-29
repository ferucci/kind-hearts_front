import { forwardRef } from 'react'

import s from './burger-button.module.scss'

type Props = {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

export const BurgerButton = forwardRef<HTMLButtonElement, Props>(({ isOpen, setIsOpen }, ref) => {
  return (
    <button
      aria-controls={'burger-menu'}
      aria-expanded={isOpen}
      className={s.button}
      data-open={isOpen}
      id={'burger-button'}
      onClick={() => setIsOpen(!isOpen)}
      ref={ref}
      type={'button'}
    >
      <span className={s.line} />
      <span className={'sr-only'}>{isOpen ? 'Close menu' : 'Open menu'}</span>
    </button>
  )
})
