import { ReactNode, memo } from 'react'
import { Link } from 'react-router-dom'

import { TypographyVariant } from '@/common'
import { Button, Picture, Typography } from '@/components'

import s from './direction-card.module.scss'

export type DirectionPropsType = {
  img: { alt: string; basePath: string }
  linkTo: string
  text: ReactNode
  title: string
  buttonText?: string
}
export const DirectionCard = memo(({ ...props }: DirectionPropsType) => {
  return (
    <article className={s.card}>
      <div className={s.imgWrapper}>
        <Picture
          alt={props.img.alt}
          avif={''}
          className={s.img}
          height={330}
          loading={'lazy'}
          src={`${props.img.basePath}.jpg`}
          webp={''}
          width={530}
        />
      </div>
      <Typography as={'h3'} className={s.title} variant={TypographyVariant.subtitle1}>
        {props.title}
      </Typography>

      <div className={s.text}>{props.text}</div>

      <Button as={Link} className={s.link} to={props.linkTo}>
        {props.buttonText}
      </Button>
    </article>
  )
})
