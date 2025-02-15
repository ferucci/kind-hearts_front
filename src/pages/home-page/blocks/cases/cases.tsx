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
import { apiUrl } from '@/utils'

type DataCasesType = {
  alt: string
  basePath: string
  dateTime?: string
  title: string
}

const getCasesData = (data: D[]): DataCasesType[] => {
  const cards = data[0].our_cases_cards;

  const dataCases: DataCasesType[] = cards.map((card) => ({
    alt: card.alt_field,

    basePath: `${apiUrl}${card.image[0].url.split('.').slice(0, -1).join('.')}`,

    dateTime: card.period?.datetime || '',

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
            {data[0].our_cases_title}
          </Typography>
          <Swiper
            breakpoints={swiperBreakpoints}
            modules={[Navigation, Pagination, A11y]}
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            spaceBetween={20}
          >
            {getCasesData(data) ? getCasesData(data).map((item, index) => {
              // Extract the filename from the basePath
              const match = item.basePath.match(/_[^_.]+$/);
              let newUrl = '';
              if (match) {
                const lastSuffix = match[0];

                // Удаляем последний суффикс из URL
                newUrl = item.basePath.replace(lastSuffix, '');
                newUrl = newUrl.replace(/_/g, '-');
              }
              return <SwiperSlide key={index}>
                <CaseCard
                  alt={item.alt}
                  avif={''}
                  dateTime={item.dateTime}
                  height={500}
                  loading={'lazy'}
                  src={`${item.basePath}.jpg`}
                  title={item.title}
                  webp={''}
                  width={610}
                />
              </SwiperSlide>
            }) : null}          </Swiper>
        </div>
      </div>
    </section>
  )
}
