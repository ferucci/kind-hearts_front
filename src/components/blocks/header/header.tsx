import { BurgerButton, Logo, Menu, useHeader } from '@/components'
import { backgroundVariants, overlayVariants } from '@/utils'
import { AnimatePresence, motion } from 'framer-motion'

import s from './header.module.scss'
import { Props } from '@/common/interface'

export const Header = ({ data }: Props) => {
  const { burgerButtonRef, height, isOpenMenu, menuWrapperRef, navigationRef, setIsOpenMenu } =
    useHeader()

  return (
    <header className={s.header}>
      <AnimatePresence>
        {isOpenMenu && (
          <motion.div
            animate={isOpenMenu ? 'open' : 'closed'}
            aria-hidden
            className={'overlay'}
            exit={overlayVariants.closed}
            initial={overlayVariants.closed}
            variants={overlayVariants}
          />
        )}
      </AnimatePresence>
      <div className={s.fixed}>
        <div className={'container'}>
          <motion.nav
            animate={isOpenMenu ? 'open' : 'closed'}
            className={s.wrapper}
            custom={height}
            initial={false}
            ref={navigationRef}
          >
            <Logo data={data} />
            <BurgerButton isOpen={isOpenMenu} ref={burgerButtonRef} setIsOpen={setIsOpenMenu} />
            <Menu data={data} open={isOpenMenu} ref={menuWrapperRef} setIsOpen={setIsOpenMenu} />
            <motion.div className={s.background} variants={backgroundVariants} />
          </motion.nav>
        </div>
      </div>
    </header>
  )
}
