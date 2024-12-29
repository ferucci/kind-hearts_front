import { TypographyVariant } from '@/common'
import { CaseCard, Typography } from '@/components'
import { A11y, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import './cases-swiper.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import s from './cases.module.scss'
import { D, Props } from '@/common/interface'
import { VARS } from '@/utils'

type DataCasesType = {
  alt: string
  basePath: string
  date: string
  dateTime: string
  title: string
}

const getCasesData = (data: D[]): DataCasesType[] => {
  const cards = data[0].our_cases_cards;

  const dataCases: DataCasesType[] = cards.map((card) => ({
    alt: card.title.replace(/\s/g, '_').toLowerCase(),

    basePath: `${VARS.url}${card.image[0].url.split('.').slice(0, -1).join('.')}`,

    date: card.period.date,
    dateTime: card.period.date || '',

    title: card.title,
  }));

  return dataCases
}


export const Cases = ({ data }: Props) => {

  const swiperBreakpoints = {
    0: { slidesPerGroup: 1, slidesPerView: 1 },
    560: { slidesPerGroup: 1, slidesPerView: 1.5 },
    768: { slidesPerGroup: 2, slidesPerView: 1.9 },
  }

  return (
    <section className={'section cases'} id={'cases'}>
      <div className={s.container}>
        <div className={s.box}>
          <Typography as={'h2'} variant={TypographyVariant.title}>
            Our cases
          </Typography>
          <Swiper
            breakpoints={swiperBreakpoints}
            modules={[Navigation, Pagination, A11y]}
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            spaceBetween={20}
          >
            {getCasesData(data).map((item, index) => (
              <SwiperSlide key={index}>
                <CaseCard
                  alt={item.alt}
                  avif={''}
                  date={item.date}
                  dateTime={item.dateTime}
                  height={500}
                  loading={'lazy'}
                  src={`${item.basePath}.jpg`}
                  title={item.title}
                  webp={''}
                  width={610}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
