import { Link } from 'react-router-dom'

import { LogoVariant } from '@/common'
import { APP_ROUTES, VARS } from '@/utils'

import s from './logo.module.scss'
import { Props } from '@/common/interface'

type PropsLogo = {
  to?: string
  variant?: keyof typeof LogoVariant
}
export const Logo = ({ data }: Props, { to = APP_ROUTES.home, variant }: PropsLogo) => {
  const { logo_images } = data[0];
  const linkClassName = `${s.logo} ${variant ? s[String(variant)] : s.standard}`

  const logoVertical = `${VARS.url}${logo_images.main_image.url}`
  const logoHorizontal = `${VARS.url}${logo_images.mobile_image.url}`


  return (
    <Link className={linkClassName} to={to}>
      {variant ? (
        <img
          alt={'logo'}
          className={s.img}
          src={`${variant === 'vertical' ? logoVertical : logoHorizontal}`}
        />
      ) : (
        <picture>
          <source media={'(max-width: 560px)'} srcSet={logoHorizontal} />
          <img alt={'logo'} className={s.img} src={logoVertical} />
        </picture>
      )}
    </Link>
  )
}
