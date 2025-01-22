import { memo } from 'react'

import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

import s from './state-supports.module.scss'
import { Props } from '@/common/interface'

export const StateSupports = ({ data }: Props) => {

  const { how_supported } = data[0];

  if (!how_supported) return;
  const getSupports = () => {

    const supports: SupportCardProps[] = how_supported.advantages.map(item => ({
      text: item.text, title: item.title, number: item.number
    }))

    return supports
  }

  return (
    <section className={'section'} id={'state-support'}>
      <div className={'container'}>
        <div className={s.wrapper}>
          <div className={s.illustration}>
            <div className={s.cards}>
              {getSupports().map((item, index) => (
                <SupportCard key={index} {...item} />
              ))}
            </div>
          </div>
          <div className={s.content}>
            <Typography as={'h2'} variant={TypographyVariant.title}>
              {how_supported.title}
            </Typography>
            <div className={s.text}>
              {how_supported.paragraphs.map(item =>
                <Typography key={item.id} variant={TypographyVariant.subtitle2}>
                  {item.text}
                </Typography>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

type SupportCardProps = {
  text: string
  title: string
  number: number
}

const SupportCard = memo(({ text, number, title }: SupportCardProps) => {
  return (
    <div className={s.card}>
      <Typography as={'span'} variant={TypographyVariant.large}>
        {title} {number}
      </Typography>
      <Typography as={'span'} className={s.subtext} variant={TypographyVariant.title}>
        {text}
      </Typography>
    </div>
  )
})
