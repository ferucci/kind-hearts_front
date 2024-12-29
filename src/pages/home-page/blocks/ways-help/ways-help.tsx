import { TypographyVariant } from '@/common'
import { Typography } from '@/components'

import s from './ways-help.module.scss'
import { Props } from '@/common/interface'
import { VARS } from '@/utils'

export const WaysHelp = ({ data }: Props) => {
  const { ways_to_help, contacts } = data[0]
  return (
    <section className={'section'} id={'ways-help'}>
      <div className={'container'}>
        <div className={s.wrapper}>
          <div className={s.content}>
            <Typography as={'h2'} variant={TypographyVariant.title}>
              {ways_to_help.title}
            </Typography>
            <div className={s.text}>
              <Typography>
                {ways_to_help.description}
              </Typography>
            </div>
            <div className={s.text}>
              <Typography variant={TypographyVariant.subtitle1}>
                To help the fund, contact our manager at{' '}
                <Typography as={'a'} className={s.link} href={`tel:+${contacts.phone.phone}`}>
                  {contacts.phone.visual}
                </Typography>{' '}
                or&nbsp;leave a request on the website.
              </Typography>
            </div>
          </div>
          <div aria-hidden className={s.pictureWrapper}>
            <div
              className={s.picture}
              style={{
                backgroundImage: `url(${VARS.url}${ways_to_help.image.url})`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
