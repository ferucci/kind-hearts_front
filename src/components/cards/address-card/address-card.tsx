import { memo } from 'react'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

import s from './address-card.module.scss'

export type AddressCardProps = {
  backgroundColor?: string
  borderColor?: string
  text: string
  title: string
}
export const AddressCard = memo(
  ({ backgroundColor, borderColor, text, title }: AddressCardProps) => {
    return (
      <article className={s.card} style={{ backgroundColor, borderColor }}>
        <Typography as={'h3'} variant={TypographyVariant.subtitle1}>
          {title}
        </Typography>
        <Typography>{text}</Typography>
      </article>
    )
  }
)
