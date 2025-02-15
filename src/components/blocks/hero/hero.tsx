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
            {hero.subtitle && (
              <Typography as={'span'} className={s.slogan} variant={TypographyVariant.subtitle2}>
                {slogan === '' ? hero.subtitle : null}
              </Typography>
            )}


            {isButton && (
              <Button
                as={Link}
                className={s.button}
                href={'#'}
                offset={-80}
                smooth
                to={'consultation'}
              >
                {hero.button}
              </Button>
            )}
          </div>
          <picture>
            <source
              srcSet={`${apiUrl}${hero.images.main_image.url.replace(/\.[^.]+$/, '.avif')}`}
              type="image/avif"
            />
            <source
              srcSet={`${apiUrl}${hero.images.main_image.url.replace(/\.[^.]+$/, '.webp')}`}
              type="image/webp"
            />
            <span
              aria-hidden
              className={s.img}
              style={{
                backgroundImage: `url(${apiUrl}${hero.images.main_image.url})`,
              }}
            />
          </picture>

          {/* Mobile version with the same pattern */}
          <picture>
            <source
              srcSet={`${apiUrl}${hero.images.mobile_image.url.replace(/\.[^.]+$/, '.avif')}`}
              type="image/avif"
            />
            <source
              srcSet={`${apiUrl}${hero.images.mobile_image.url.replace(/\.[^.]+$/, '.webp')}`}
              type="image/webp"
            />
            <span
              aria-hidden
              className={`${s.img} ${s.imgMobile}`}
              style={{
                backgroundImage: `url(${apiUrl}${hero.images.mobile_image.url})`,
              }}
            />
          </picture>
        </div>
      </div>
    </section>
  )
}
