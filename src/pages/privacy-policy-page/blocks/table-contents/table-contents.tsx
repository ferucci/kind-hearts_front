import { Link } from 'react-scroll'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'
import { linkList } from '@/pages/privacy-policy-page/blocks/table-contents/data'

import s from './table-contents.module.scss'

type Props = {
  className?: string
}
export const TableContents = ({ className }: Props) => {
  return (
    <nav className={`${s.wrapper} ${className}`}>
      <Typography as={'h3'} variant={TypographyVariant.title}>
        Table of&nbsp;Contents
      </Typography>
      <ul className={s.list}>
        {linkList.map(link => (
          <li key={link.href}>
            <Typography
              as={Link}
              className={s.link}
              href={'#'}
              offset={-120}
              role={'menuitem'}
              smooth
              to={link.href}
              variant={TypographyVariant.subtitle2}
            >
              {link.label}
            </Typography>
          </li>
        ))}
      </ul>
    </nav>
  )
}
