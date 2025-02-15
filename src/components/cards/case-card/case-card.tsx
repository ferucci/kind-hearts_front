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
  const convertDate = (dateStr: string): string => {
    const dateParts = dateStr.split('-');

    // объект Date, передаю год и месяц (месяц начинается с нуля)
    const date = new Date(Number(dateParts[0]), Number(dateParts[1]) - 1);

    // метод toLocaleString для получения месяца на английском языке
    return date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
  };
  return (
    <article className={`${s.card} ${className}`}>
      <Picture className={s.img} {...rest} />
      <Typography as={'h3'} className={s.title} variant={TypographyVariant.subtitle1}>
        {title}
        {dateTime && (
          <time className={s.date} dateTime={dateTime}>
            {convertDate(dateTime)}
          </time>
        )}
      </Typography>
    </article>
  )
})
