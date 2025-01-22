import { CustomHead, Footer, Header, Hero } from '@/components'
import {
  Advantages,
  Cases,
  Consultation,
  Contacts,
  Directions,
  Questions,
  StateSupports,
  WaysHelp,
} from '@/pages'

import { Props } from '@/common/interface'

export const HomePage = ({ data }: Props) => {
  return (
    <div className={'wrapper'}>
      <CustomHead
        description={
          data[0].advantages.descriptions[0].text
        }
        title={`Home page | ${data[0].name}`}
      />
      <Header data={data} />
      <main className={'main'}>
        <Hero
          data={data}
          isButton
          slogan={''}
        />
        <Advantages data={data} />
        <Directions data={data} />
        <WaysHelp data={data} />
        <Cases data={data} />
        <StateSupports data={data} />
        <Questions data={data} />
        <Consultation data={data} />
        <Contacts data={data} />
      </main>
      <Footer data={data} />
    </div>
  )
}
