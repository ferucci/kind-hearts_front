import { ComponentPropsWithoutRef, forwardRef, memo } from 'react'
import { Link } from 'react-scroll'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'
import { CONTACTS, childrenStaggerVariants, parentStaggerVariants } from '@/utils'
import { motion } from 'framer-motion'

import s from './menu.module.scss'

const menu: Omit<MenuItemProps, 'callback'>[] = [
  { text: 'What we do', to: 'directions' },
  { text: 'Ways to help', to: 'ways-help' },
  { text: 'Our cases', to: 'cases' },
  { text: 'Tax benefits', to: 'state-support' },
  { text: 'Contacts', to: 'contacts' },
]

const mobileMenu = [
  { content: CONTACTS.phone.label, href: CONTACTS.phone.href },
  {
    content: CONTACTS.instagram.label,
    href: CONTACTS.instagram.href,
  },
]

type Props = {
  open: boolean
  setIsOpen: (value: boolean) => void
}

export const Menu = forwardRef<HTMLDivElement, Props>(({ open, setIsOpen }, ref) => {
  return (
    <div className={s.wrapper} data-open={open} id={'burger-menu'} ref={ref} role={'menu'}>
      <div className={s.menu}>
        <motion.ul className={s.items} variants={parentStaggerVariants}>
          {menu.map((item, index) => (
            <MenuItem callback={() => setIsOpen(false)} key={index} text={item.text} to={item.to} />
          ))}
        </motion.ul>
        <motion.ul className={s.mobile} variants={parentStaggerVariants}>
          {mobileMenu.map((item, index) => {
            return (
              <MobileMenuItem href={item.href} key={index}>
                {item.content}
              </MobileMenuItem>
            )
          })}
        </motion.ul>
      </div>
    </div>
  )
})

type MenuItemProps = {
  callback: () => void
  text: string
  to: string
}

const MenuItem = memo(({ callback, text, to }: MenuItemProps) => {
  return (
    <motion.li className={s.item} variants={childrenStaggerVariants}>
      <Link
        className={'link'}
        href={'#'}
        offset={-50}
        onClick={callback}
        role={'menuitem'}
        smooth
        to={to}
      >
        {text}
      </Link>
    </motion.li>
  )
})

type MobileMenuItemProps = {
  href: string
} & ComponentPropsWithoutRef<typeof Typography>

const MobileMenuItem = memo(({ href, ...rest }: MobileMenuItemProps) => {
  const openVariant = {
    opacity: 1,
    transition: {
      delay: 0.4,
      y: { delay: 0.4, stiffness: 1000, velocity: -100 },
    },
    y: 0,
  }

  const itemVariants = { ...childrenStaggerVariants, open: openVariant }

  return (
    <motion.li variants={itemVariants}>
      <Typography
        as={'a'}
        href={href}
        role={'menuitem'}
        target={'_blank'}
        variant={TypographyVariant.subtitle1}
        {...rest}
      />
    </motion.li>
  )
})
