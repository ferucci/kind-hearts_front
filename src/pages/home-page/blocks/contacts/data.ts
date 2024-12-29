import { AddressCardProps } from '@/components'
import { CONTACTS } from '@/utils'

type ContactsCardType = {
  href: string
  link: string
  title: string
}

export const dataContacts: ContactsCardType[] = [
  {
    href: CONTACTS.phone.href,
    link: CONTACTS.phone.label,
    title: 'Call us',
  },
  {
    href: CONTACTS.email.href,
    link: CONTACTS.email.label,
    title: 'E-mail us',
  },
  {
    href: CONTACTS.instagram.href,
    link: CONTACTS.instagram.label,
    title: 'Follow us\u00A0on\u00A0social media',
  },
]

export const dataAddress: AddressCardProps[] = [
  {
    backgroundColor: '#FFFAE9',
    borderColor: '#DFD1A2',
    text: '63-36 110th St, Forest Hills, NY 11375',
    title: 'Office address',
  },
  // {
  //   backgroundColor: '#FBF8FF',
  //   borderColor: '#D7CCE5',
  //   text: '63-36 110th St, Forest Hills, NY 11375',
  //   title: 'Warehouse address',
  // },
  {
    backgroundColor: '#F2FFEF',
    borderColor: '#CCDBC9',
    text: 'Monday-Thursday: 10\u00A0a.m.\u00A0to\u00A05 p.m.',
    title: 'Opening hours',
  },
]
