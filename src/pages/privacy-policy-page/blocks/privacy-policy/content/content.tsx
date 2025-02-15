import { Typography } from '@/components'
import { TableContents } from '@/pages'
import { CONTACTS } from '@/utils'

import s from './content.module.scss'
import { useEffect, useState } from 'react'

import { DPolice } from '@/common/interface'

import { policyURL } from '@/utils/api/constants'
import { getResponse, GetResponseResult } from '@/utils/api'


export const PrivacyPolicyContent = () => {
  const [data, setData] = useState<DPolice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result: GetResponseResult<DPolice[]> = await getResponse<DPolice[]>(policyURL);

        setData(result?.data ?? []);
        setLoading(false)
      } catch (error) {
        console.error('Failed to fetch police', error);
      }
    }
    fetchData()
  }, []);

  if (loading) return <div className="loader"></div>

  const { header, updatedAt } = data[0];
  const date = new Date(updatedAt)

  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  const isoDate = date.toISOString().slice(0, 10);

  const { section: sections, contacts } = data[0];

  return (
    <div className={s.container}>

      <div className={s.block}>
        <Typography as={'h1'} variant={'title'}>
          Privacy Policy
        </Typography>
        <div className={s.text}>
          <Typography>
            Last updated: <time dateTime={isoDate}>{formattedDate}</time>
          </Typography>
          {header.content.map((item, idx) => (
            <Typography key={idx}>{item.text}</Typography>
          ))}
        </div>
      </div>
      <TableContents className={s.nav} />
      {sections ? sections.map((item, idx) => (
        <div className={s.block} id={`${item.link_connection}`} key={`${item.link_connection}`}>

          <Typography key={idx} as={'h3'} variant={'title'}>
            {`${idx + 1}. ` + item.title}
          </Typography>
          {item.inner_blocks ? item.inner_blocks.map((_item, _idx) => (
            <div key={_idx}>

              <div className={s.text}>
                <Typography as={'h4'} variant={'subtitle1'}>
                  {_item.title}
                </Typography>

                {_item.subtitle ?

                  <Typography as={'h5'} variant={'overline'}>
                    {_item.subtitle}
                  </Typography> : null}

                {_item.description ? _item.description.map((desc, id) => (
                  <Typography key={id}>{desc.text}</Typography>
                )) : null}

                {_item.list && _item.list.length > 0 ?
                  <ul className={s.list}>
                    {_item.list.map((listItem, _index) => (

                      <Typography key={_index} as={'li'}>
                        {listItem.item}
                      </Typography>

                    ))}
                  </ul> : null
                }

                {_item.paragraphs && _item.paragraphs.length > 0 ?
                  _item.paragraphs.map((parItem, parIndex) => (

                    <Typography key={parIndex}>
                      {parItem.text}
                    </Typography>

                  )) : null
                }
              </div>

              <div className={s.text}>
                {_item.add_list && _item.add_list.length > 0 ?
                  <ul className={s.list}>

                    {_item.add_list.map((innerItem, innerIndex) => (

                      <Typography as={'li'} className={s.text} key={innerIndex}>
                        {innerItem.title && <b>{innerItem.title}</b>}
                        {innerItem.list.map(listItem => (

                          < Typography key={listItem.id}>
                            {listItem.text}
                          </Typography>
                        ))}
                      </Typography>

                    ))}

                  </ul> : null}
              </div>

            </div>
          )) : null}

        </div>
      )) : null
      }

      <div className={s.block} id={'contacts'}>
        <Typography as={'h3'} variant={'title'}>
          {`${sections.length + 1}. Contact Us`}
        </Typography>
        <div className={s.text}>
          <Typography>
            If&nbsp;you have any questions about this Privacy Policy, You can contact us:
          </Typography>
          <ul className={s.text}>
            <li>
              By&nbsp;email:&nbsp;
              <Typography
                as={'a'}
                className={s.link}
                href={contacts.email.href}
                rel={'noreferrer'}
                target={'_blank'}
              >
                {contacts.email.label}
              </Typography>
            </li>
            <li>
              By&nbsp;visiting this page on&nbsp;our website:&nbsp;
              <Typography
                as={'a'}
                className={s.link}
                href={CONTACTS.webSite.href}
                target={'_blank'}
              >
                {CONTACTS.webSite.label}
              </Typography>
            </li>
            <li>
              By&nbsp;phone number:&nbsp;
              <Typography as={'a'} className={s.link} href={`tel:+${contacts.phone.href}`}>
                {contacts.phone.label}
              </Typography>
            </li>
          </ul>
        </div>
      </div>

    </div >
  )
}