import { TypographyVariant } from '@/common'
import { Form, Typography } from '@/components'

import s from './consultation.module.scss'
import { Props } from '@/common/interface'

export const Consultation = ({ data }: Props) => {
  const { form, contacts } = data[0];
  return (
    <section className={'section'} id={'consultation'}>
      <div className={'container'}>
        <div className={s.wrapper}>
          <div className={s.descr}>
            <Typography as={'h2'} variant={TypographyVariant.title}>
              {form.title}
            </Typography>
            <div className={s.text}>
              <Typography variant={TypographyVariant.subtitle2}>
                {form.subtitle}
              </Typography>
              <Typography variant={TypographyVariant.subtitle2}>
                Or write to us on{' '}
                <a
                  className={s.link}
                  href={`https://wa.me/${contacts.phone.phone}`}
                  rel={'noreferrer'}
                  target={'_blank'}
                >
                  WhatsApp
                </a>
              </Typography>
            </div>
          </div>
          <Form data={data} />
        </div>
      </div>
    </section>
  )
}
