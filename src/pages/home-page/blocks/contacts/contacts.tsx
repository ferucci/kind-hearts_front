import { TypographyVariant } from '@/common'
import { AddressCard, Typography } from '@/components'

import s from './contacts.module.scss'
import { Props } from '@/common/interface'

export const Contacts = ({ data }: Props) => {
  return (
    <section className={'section'} id={'contacts'}>
      <div className={'container'}>
        <Typography as={'h2'} className={s.title} variant={TypographyVariant.title}>
          {data[0].contacts.title}
        </Typography>
        <address>
          <div className={s.wrapper}>
            <AddressesItems data={data} />
            <Map data={data} />
          </div>
          <ContactsItems data={data} />
        </address>
      </div>
    </section>
  )
}

const AddressesItems = ({ data }: Props) => (
  <ul className={s.items}>
    {data[0].contacts.address.map((item, index) => {
      const { text, title, ...rest } = item
      return (
        <li className={s.item} key={index}>
          <AddressCard text={text} title={title} {...rest} />
        </li>
      )
    })}
  </ul>
)

const Map = ({ data }: Props) => (
  <div className={s.map}>
    <iframe
      allowFullScreen
      height={'450'}
      loading={'lazy'}
      referrerPolicy={'no-referrer-when-downgrade'}
      src={
        `${data[0].contacts.map_link}`
      }
    />
  </div>
)

const ContactsItems = ({ data }: Props) => {
  const contactsData = data[0].contacts;

  return (
    <ul className={s.contacts}>
      {['phone', 'email', 'instagram'].map(type => {
        // @ts-ignore
        const contact = contactsData[type];

        if (!contact) return null;

        return (
          <li className={s.contact} key={type}>
            <Typography as={'span'} className={s.subtitle}>
              {contact.title}
            </Typography>
            <Typography
              as={'a'}
              className="link"
              href={contact.href || contact.phone}
              target="_blank"
              variant="subtitle1"
            >
              {contact.label || contact.visual}
            </Typography>
          </li>
        );
      })}
    </ul>
  );
};
