import { PrivacyPolicyContent, TableContents } from '@/pages'

import s from './privacy-policy.module.scss'
export const PrivacyPolicyBlock = () => {
  return (
    <section className={s.wrapper}>
      <div className={`container`}>
        <div className={s.container}>
          <PrivacyPolicyContent />
          <TableContents className={s.nav} />
        </div>
      </div>
    </section>
  )
}
