import { memo } from 'react'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'
import { useAdvantage } from '@/pages'
import { motion } from 'framer-motion'

import s from './advantage.module.scss'

export type AdvantageType = {
  number: number
  text?: string
  time: number
  title?: string
}

export const Advantage = memo(({ number, text, time, title }: AdvantageType) => {
  const { ref, rounded } = useAdvantage(+number, time)

  return (
    <>
      <Typography as={'span'} className={s.subtitle} variant={TypographyVariant.title}>
        {title && title}
        <motion.span initial={false} ref={ref} whileInView={'visible'}>
          {rounded}
        </motion.span>
      </Typography>
      {text && <Typography as={'span'}>{text}</Typography>}
    </>
  )
})
