import { Props } from '@/common/interface'
import { CustomHead, Footer, Header, Hero } from '@/components'
import { PrivacyPolicyBlock } from '@/pages'

export const PrivacyPolicyPage = ({ data }: Props) => {
  return (
    <>
      <CustomHead
        description={
          "This page contains information about the privacy policy of the Kind Hearts charitable foundation, including its principles for processing and protecting users' personal data."
        }
        title={'Privacy policy page | Kind Hearts'}
      />
      <Header data={data} />
      <main className={'main'}>
        <Hero data={data} />
        <PrivacyPolicyBlock />
      </main>
      <Footer data={data} />
    </>
  )
}
