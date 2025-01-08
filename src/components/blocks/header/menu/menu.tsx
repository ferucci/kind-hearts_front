import { ComponentPropsWithoutRef, forwardRef, memo } from 'react'
import { Link } from 'react-scroll'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'
import { childrenStaggerVariants, parentStaggerVariants } from '@/utils'
import { motion } from 'framer-motion'

import s from './menu.module.scss'
import { D } from '@/common/interface'

const getMenuData = (data: D[]): Omit<MenuItemProps, 'callback'>[] => {

  const menu: Omit<MenuItemProps, 'callback'>[] = [
    { text: data[0].what_we_do.title, to: 'directions' },
    { text: data[0].ways_to_help.title, to: 'ways-help' },
    { text: data[0].our_cases_title, to: 'cases' },
    { text: data[0].how_supported.menuItem_title, to: 'state-support' },
    { text: data[0].contacts.title, to: 'contacts' },
  ]

  return menu
}

const getMobileMenu = (data: D[]) => {
  const mobileMenu = [
    { content: data[0].contacts.phone.visual, href: data[0].contacts.phone.phone },
    {
      content: data[0].contacts.instagram.label,
      href: data[0].contacts.instagram.href,
    },
  ]

  return mobileMenu
}

type Props = {
  open: boolean
  setIsOpen: (value: boolean) => void
  data: D[]
}

export const Menu = forwardRef<HTMLDivElement, Props>(({ open, setIsOpen, data }, ref) => {

  return (
    <div className={s.wrapper} data-open={open} id={'burger-menu'} ref={ref} role={'menu'}>
      <div className={s.menu}>
        <motion.ul className={s.items} variants={parentStaggerVariants}>
          {getMenuData(data).map((item, index) => (
            <MenuItem callback={() => setIsOpen(false)} key={index} text={item.text} to={item.to} />
          ))}
        </motion.ul>
        <motion.ul className={s.mobile} variants={parentStaggerVariants}>
          {getMobileMenu(data).map((item, index) => {
            return (
              <MobileMenuItem href={String(item.href)} key={index}>
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
