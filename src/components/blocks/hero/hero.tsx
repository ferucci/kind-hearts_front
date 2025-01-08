import { Link } from 'react-scroll'

import { TypographyVariant } from '@/common'
import { Button, Typography } from '@/components'
import { Props } from '@/common/interface'
import { apiUrl } from '@/utils'
import s from './hero.module.scss'

export const Hero = ({ isButton = false, slogan = '', data }: Props) => {

  const { hero } = data[0];

  return (
    <section className={s.section}>
      <div className={'container'}>
        <div className={s.wrapper}>
          <div className={s.content}>

            <Typography as={'h1'} className={s.title} variant={TypographyVariant.large}>
              {slogan + ' ' + hero.title}
            </Typography>
            <Typography as={'span'} className={s.slogan} variant={TypographyVariant.subtitle2}>
              {slogan === '' ? hero.subtitle : null}
            </Typography>

            {isButton && (
              <Button
                as={Link}
                className={s.button}
                href={'#'}
                offset={-80}
                smooth
                to={'consultation'}
              >
                Want to help
              </Button>
            )}
          </div>
          <span
            aria-hidden
            className={s.img}
            style={{
              backgroundImage: `url(${apiUrl}${hero.images.main_image.url})`,
            }}
          />
          <span
            aria-hidden
            className={`${s.img} ${s.imgMobile}`}
            style={{
              backgroundImage: `url(${apiUrl}${hero.images.mobile_image.url})`,
            }}
          />
        </div>
      </div>
    </section>
  )
}
