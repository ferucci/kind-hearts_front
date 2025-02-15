import { TypographyVariant } from '@/common'
import { DirectionCard, DirectionPropsType, Typography } from '@/components'

import s from './directions.module.scss'
import { D, Props } from '@/common/interface'
import { apiUrl } from '@/utils'

const getDirectionsData = (data: D[]): DirectionPropsType[] => {
  const cards = data[0].what_we_do.cards;

  const directionsData: DirectionPropsType[] = cards.map((item) => ({
    img: {
      alt: item.alt_field,
      basePath: `${apiUrl}${item.image.url.split('.').slice(0, -1).join('.')}`,
    },
    linkTo: item.linkTo ?? item.linkTo,
    text: (
      <>
        {item.card_paragraph.map((para) => (
          <p key={para.id}>{para.text}</p>
        ))}
      </>
    ),
    title: item.title,
    buttonText: item.button
  }));

  return directionsData;
};

let noList: string[] = []

export const Directions = ({ data }: Props) => {

  const { what_we_do } = data[0]

  if (!what_we_do) return;

  noList = what_we_do.tags.map(item => item.tag)

  return (
    <section className={s.section} id={'directions'}>
      <div className={'container'}>
        <div className={s.header}>
          <div className={s.box}>
            <Typography as={'h2'} variant={TypographyVariant.title}>
              {what_we_do.title ?? what_we_do.title}
            </Typography>
            <div className={s.text}>
              {what_we_do.title ? what_we_do.paragraphs.map(item =>
                <Typography key={item.id}>
                  {item.text}
                </Typography>
              ) : null}
            </div>
          </div>
          <NoList />
        </div>
        <DirectionsItems data={data} />
      </div>
    </section>
  )
}

const DirectionsItems = ({ data }: Props) => (
  <ul className={s.items}>
    {getDirectionsData(data).map((direction, index) => (
      <li className={s.item} key={index}>
        <DirectionCard
          img={direction.img}
          linkTo={direction.linkTo}
          text={direction.text}
          title={direction.title}
          buttonText={direction.buttonText}
        />
      </li>
    ))}
  </ul>
)

const NoList = () => (
  noList.length > 0 && (
    <ul className={s.no}>
      {noList.map((item, index) => (
        <Typography as={'li'} key={index} variant={TypographyVariant.slogan}>
          {item}
        </Typography>
      ))}
    </ul>
  )
)
