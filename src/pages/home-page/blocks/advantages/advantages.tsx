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
              <Typography variant={TypographyVariant.subtitle2}>
                {advantages.description ?? advantages.description}
              </Typography>
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
