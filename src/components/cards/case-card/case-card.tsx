import { memo } from 'react'

import { TypographyVariant } from '@/common'
import { Picture, PicturePropsType, Typography } from '@/components'

import s from './case-card.module.scss'

export type CaseType = {
  className?: string
  date?: string
  dateTime?: string
  title: string
} & Omit<PicturePropsType, 'className'>
export const CaseCard = memo(({ className, date, dateTime, title, ...rest }: CaseType) => {
  return (
    <article className={`${s.card} ${className}`}>
      <Picture className={s.img} {...rest} />
      <Typography as={'h3'} className={s.title} variant={TypographyVariant.subtitle1}>
        {title}
        {date && (
          <time className={s.date} dateTime={dateTime}>
            {date}
          </time>
        )}
      </Typography>
    </article>
  )
})
