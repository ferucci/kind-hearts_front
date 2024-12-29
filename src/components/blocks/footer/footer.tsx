import { APP_ROUTES } from '@/utils'

import s from './footer.module.scss'
import { Props } from '@/common/interface'

export const Footer = ({ data }: Props) => {
  const { instagram } = data[0].contacts;
  const year = new Date().getFullYear();
  return (
    <footer className={`${s.section} section`}>
      <div className={'container'}>
        <div className={s.wrapper}>
          <span>© {data[0].name + ' ' + year}</span>
          <a className={'link'} href={instagram.href} rel={'noreferrer'} target={'_blank'}>
            {instagram.label}
          </a>
          <a className={'link'} href={APP_ROUTES.privacyPolicy}>
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
