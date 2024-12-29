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
          'The Charitable Foundation «Kind Hearts» was created to provide assistance to people in need and homeless animals.'
        }
        title={'Home page | Kind Hearts'}
      />
      <Header data={data} />
      <main className={'main'}>
        <Hero
          data={data}
          isButton
          slogan={'Kindness is proof of\u00A0God'}
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
