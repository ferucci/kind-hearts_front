import { TypographyVariant } from '@/common'
import { Typography } from '@/components'
import { Advantage, AdvantageType } from '@/pages'

import s from './advantages.module.scss'
import { Props } from '@/common/interface'

export const Advantages = ({ data }: Props) => {

  const { advantages } = data[0]

  return (
    <section>
      <Typography as={'h2'} className={'sr-only'}>
        Our advantages
      </Typography>
      <div className={'container'}>
        <div className={'section__wrapper'}>
          <div className={s.box}>
            <div className={s.text}>

              {advantages.descriptions.map(
                (description: { id: number; text: string }, idx: number) => (
                  <Typography key={idx} variant={TypographyVariant.subtitle2}>
                    {description.text}
                  </Typography>
                ))}

            </div>
            <ul className={s.items}>
              {advantages ? advantages.item.map((item: AdvantageType, index) => (
                <li className={s.item} key={index}>
                  <Advantage
                    number={item.number}
                    text={item.text}
                    time={item.time}
                    title={item.title}
                  />
                </li>
              )) : null}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
