import { Typography } from '@/components'
import { TableContents } from '@/pages'
import { CONTACTS } from '@/utils'

import s from './content.module.scss'

export const PrivacyPolicyContent = () => {
  return (
    <div className={s.container}>
      <div className={s.block}>
        <Typography as={'h1'} variant={'title'}>
          Privacy Policy
        </Typography>
        <div className={s.text}>
          <Typography>
            Last updated: <time dateTime={'2024-06-26'}>June 26, 2024</time>
          </Typography>
          <Typography>
            This Privacy Policy describes Our policies and procedures on&nbsp;the collection, use
            and disclosure of&nbsp;Your information when You use the Service and tells You about
            Your privacy rights and how the law protects You.
          </Typography>
          <Typography>
            We&nbsp;use Your Personal data to&nbsp;provide and improve the Service. By&nbsp;using
            the Service, You agree to&nbsp;the collection and use of&nbsp;information
            in&nbsp;accordance with this Privacy Policy. This Privacy Policy has been created with
            the help of&nbsp;the&nbsp;Free Privacy Policy Generator.
          </Typography>
        </div>
      </div>
      <TableContents className={s.nav} />
      <div className={s.block} id={'interpretation'}>
        <Typography as={'h3'} variant={'title'}>
          1. Interpretation and&nbsp;Definitions
        </Typography>
        <div>
          <div className={s.text}>
            <Typography as={'h4'} variant={'subtitle1'}>
              Interpretation
            </Typography>
            <Typography>
              The words of&nbsp;which the initial letter is&nbsp;capitalized have meanings defined
              under the following conditions. The following definitions shall have the same meaning
              regardless of&nbsp;whether they appear in&nbsp;singular or&nbsp;in&nbsp;plural.
            </Typography>
          </div>
        </div>
        <div>
          <div className={s.text}>
            <Typography as={'h4'} variant={'subtitle1'}>
              Definitions
            </Typography>
            <Typography>For the purposes of&nbsp;this Privacy Policy:</Typography>
            <ul className={s.list}>
              <Typography as={'li'}>
                <b>Account</b>&nbsp;means a&nbsp;unique account created for You to&nbsp;access our
                Service or&nbsp;parts of&nbsp;our Service.
              </Typography>
              <Typography as={'li'}>
                <b>Affiliate</b>&nbsp;means an&nbsp;entity that controls, is&nbsp;controlled
                by&nbsp;or&nbsp;is&nbsp;under common control with a&nbsp;party, where «control»
                means ownership of&nbsp;50% or&nbsp;more of&nbsp;the shares, equity interest
                or&nbsp;other securities entitled to&nbsp;vote for election of&nbsp;directors
                or&nbsp;other managing authority.
              </Typography>
              <Typography as={'li'}>
                <b>Company</b>&nbsp;(referred to&nbsp;as&nbsp;either «the Company», «We», «Us»
                or&nbsp;«Our» in&nbsp;this Agreement) refers to&nbsp;Charitable Foundation «Kind
                Hearts» Non-profit, 77 Bowery, New York, NY&nbsp;10002, 8th&nbsp;floor.
              </Typography>
              <Typography as={'li'}>
                <b>Cookies</b>&nbsp;are small files that are placed on&nbsp;Your computer, mobile
                device or&nbsp;any other device by&nbsp;a&nbsp;website, containing the details
                of&nbsp;Your browsing history on&nbsp;that website among its many uses.
              </Typography>
              <Typography as={'li'}>
                <b>Country</b>&nbsp;refers to: New York, United States
              </Typography>
              <Typography as={'li'}>
                <b>Device</b>&nbsp;means any device that can access the Service such
                as&nbsp;a&nbsp;computer, a&nbsp;cellphone or&nbsp;a&nbsp;digital tablet.
              </Typography>
              <Typography as={'li'}>
                <b>Personal Data</b>&nbsp;is&nbsp;any information that relates
                to&nbsp;an&nbsp;identified or&nbsp;identifiable individual.
              </Typography>
              <Typography as={'li'}>
                <b>Service</b>&nbsp;refers to&nbsp;the Website.
              </Typography>
              <Typography as={'li'}>
                <b>Service Provider</b>&nbsp;means any natural or&nbsp;legal person who processes
                the data on&nbsp;behalf of&nbsp;the Company. It&nbsp;refers to&nbsp;third-party
                companies or&nbsp;individuals employed by&nbsp;the Company to&nbsp;facilitate the
                Service, to&nbsp;provide the Service on&nbsp;behalf of&nbsp;the Company,
                to&nbsp;perform services related to&nbsp;the Service or&nbsp;to&nbsp;assist the
                Company in&nbsp;analyzing how the Service is&nbsp;used.
              </Typography>
              <Typography as={'li'}>
                <b>Usage Data</b>&nbsp;refers to&nbsp;data collected automatically, either generated
                by&nbsp;the use of&nbsp;the Service or&nbsp;from the Service infrastructure itself
                (for example, the duration of&nbsp;a&nbsp;page visit).
              </Typography>
              <Typography as={'li'}>
                <b>Website</b>&nbsp;refers to&nbsp;Charitable Foundation «Kind Hearts», accessible
                from&nbsp;
                <Typography
                  as={'a'}
                  className={s.link}
                  href={CONTACTS.webSite.href}
                  target={'_blank'}
                >
                  {CONTACTS.webSite.label}
                </Typography>
              </Typography>
              <Typography as={'li'}>
                <b>You</b>&nbsp;means the individual accessing or&nbsp;using the Service,
                or&nbsp;the company, or&nbsp;other legal entity on&nbsp;behalf of&nbsp;which such
                individual is&nbsp;accessing or&nbsp;using the Service, as&nbsp;applicable.
              </Typography>
            </ul>
          </div>
        </div>
      </div>
      <div className={s.block} id={'collecting'}>
        <Typography as={'h3'} variant={'title'}>
          2. Collecting and&nbsp;Using Your Personal Data
        </Typography>
        <div>
          <div className={s.text}>
            <Typography as={'h4'} variant={'subtitle1'}>
              Types of&nbsp;Data Collected
            </Typography>
            <Typography as={'h5'} variant={'overline'}>
              Personal Data
            </Typography>
            <Typography>
              While using Our Service, We&nbsp;may ask You to&nbsp;provide Us&nbsp;with certain
              personally identifiable information that can be&nbsp;used to&nbsp;contact
              or&nbsp;identify&nbsp;You. Personally identifiable information may include, but
              is&nbsp;not limited to:
            </Typography>
            <ul className={`${s.text} ${s.list}`}>
              <Typography as={'li'}>Email address</Typography>
              <Typography as={'li'}>First name and last name</Typography>
              <Typography as={'li'}>Usage Data</Typography>
            </ul>
          </div>
        </div>
        <div>
          <div className={s.text}>
            <Typography as={'h5'} variant={'overline'}>
              Usage Data
            </Typography>
            <Typography>
              Usage Data is&nbsp;collected automatically when using the Service.
            </Typography>
            <Typography>
              Usage Data may include information such as&nbsp;Your Device’s&nbsp;Internet Protocol
              address (e.g. IP&nbsp;address), browser type, browser version, the pages of&nbsp;our
              Service that You visit, the time and date of&nbsp;Your visit, the time spent
              on&nbsp;those pages, unique device identifiers and other diagnostic data.
            </Typography>
            <Typography>
              When You access the Service by&nbsp;or&nbsp;through a&nbsp;mobile device, We&nbsp;may
              collect certain information automatically, including, but not limited to, the type
              of&nbsp;mobile device You use, Your mobile device unique ID, the IP&nbsp;address
              of&nbsp;Your mobile device, Your mobile operating system, the type of&nbsp;mobile
              Internet browser You use, unique device identifiers and other diagnostic data.
            </Typography>
            <Typography>
              We&nbsp;may also collect information that Your browser sends whenever You visit our
              Service or&nbsp;when You access the Service by&nbsp;or&nbsp;through a&nbsp;mobile
              device.
            </Typography>
          </div>
        </div>
        <div>
          <div className={s.text}>
            <Typography as={'h5'} variant={'overline'}>
              Tracking Technologies and Cookies
            </Typography>
            <Typography>
              We&nbsp;use Cookies and similar tracking technologies to&nbsp;track the activity
              on&nbsp;Our Service and store certain information. Tracking technologies used are
              beacons, tags, and scripts to&nbsp;collect and track information and to&nbsp;improve
              and analyze Our Service. The technologies We&nbsp;use may include:
            </Typography>
            <ul className={s.list}>
              <Typography as={'li'}>
                <b>Cookies or&nbsp;Browser Cookies.</b>&nbsp;A&nbsp;cookie is&nbsp;a&nbsp;small file
                placed on&nbsp;Your Device. You can instruct Your browser to&nbsp;refuse all Cookies
                or&nbsp;to&nbsp;indicate when a&nbsp;Cookie is&nbsp;being sent. However, if&nbsp;You
                do&nbsp;not accept Cookies, You may not be&nbsp;able to&nbsp;use some parts
                of&nbsp;our Service. Unless you have adjusted Your browser setting so&nbsp;that
                it&nbsp;will refuse Cookies, our Service may use Cookies.
              </Typography>
              <Typography as={'li'}>
                <b>Web Beacons.</b>&nbsp;Certain sections of&nbsp;our Service and our emails may
                contain small electronic files known as&nbsp;web beacons (also referred
                to&nbsp;as&nbsp;clear gifs, pixel tags, and single-pixel gifs) that permit the
                Company, for example, to&nbsp;count users who have visited those pages
                or&nbsp;opened an&nbsp;email and for other related website statistics (for example,
                recording the popularity of&nbsp;a&nbsp;certain section and verifying system and
                server integrity).
              </Typography>
            </ul>
            <Typography>
              Cookies can be&nbsp;«Persistent» or&nbsp;«Session» Cookies. Persistent Cookies remain
              on&nbsp;Your personal computer or&nbsp;mobile device when You go&nbsp;offline, while
              Session Cookies are deleted as&nbsp;soon as&nbsp;You close Your web browser. Learn
              more about cookies on&nbsp;the Free Privacy Policy website article.
            </Typography>
            <Typography>
              We&nbsp;use both Session and Persistent Cookies for the purposes set out below:
            </Typography>
            <ul className={s.list}>
              {/* todo: попробовать через dl */}
              <Typography as={'li'} className={s.text}>
                <b>Necessary / Essential Cookies</b>
                <Typography>Type: Session Cookies</Typography>
                <Typography>Administered by: Us</Typography>
                <Typography>
                  Purpose: These Cookies are essential to&nbsp;provide You with services available
                  through the Website and to&nbsp;enable You to&nbsp;use some of&nbsp;its features.
                  They help to&nbsp;authenticate users and prevent fraudulent use of&nbsp;user
                  accounts. Without these Cookies, the services that You have asked for cannot
                  be&nbsp;provided, and We&nbsp;only use these Cookies to&nbsp;provide You with
                  those services.
                </Typography>
              </Typography>
              <Typography as={'li'} className={s.text}>
                <b>Cookies Policy / Notice Acceptance Cookies</b>
                <Typography>Type: Persistent Cookies</Typography>
                <Typography>Administered by: Us</Typography>
                <Typography>
                  Purpose: These Cookies identify if&nbsp;users have accepted the use
                  of&nbsp;cookies on&nbsp;the Website.
                </Typography>
              </Typography>
              <Typography as={'li'} className={s.text}>
                <b>Functionality Cookies</b>
                <Typography>Type: Persistent Cookies</Typography>
                <Typography>
                  Administered by: Us&nbsp;Purpose: These Cookies allow us&nbsp;to&nbsp;remember
                  choices You make when You use the Website, such as&nbsp;remembering your login
                  details or&nbsp;language preference. The purpose of&nbsp;these Cookies
                  is&nbsp;to&nbsp;provide You with a&nbsp;more personal experience and to&nbsp;avoid
                  You having to&nbsp;re-enter your preferences every time You use the Website.
                </Typography>
                <Typography>
                  For more information about the cookies we&nbsp;use and your choices regarding
                  cookies, please visit our Cookies Policy or&nbsp;the Cookies section of&nbsp;our
                  Privacy Policy.
                </Typography>
              </Typography>
            </ul>
          </div>
        </div>
        <div>
          <div className={s.text}>
            <Typography as={'h4'} variant={'subtitle1'}>
              Use of&nbsp;Your Personal Data
            </Typography>
            <Typography>The Company may use Personal Data for the following purposes:</Typography>
            <ul className={`${s.text} ${s.list}`}>
              <Typography as={'li'}>
                <b>To&nbsp;provide and maintain our Service,</b> including to&nbsp;monitor the usage
                of&nbsp;our Service.
              </Typography>
              <Typography as={'li'}>
                <b>To&nbsp;manage Your Account:</b> the development, compliance and undertaking
                of&nbsp;the purchase contract for the products, items or&nbsp;services You have
                purchased or&nbsp;of&nbsp;any other contract with Us&nbsp;through the Service.
              </Typography>
              <Typography as={'li'}>
                <b>For the performance of&nbsp;a&nbsp;contract:</b> to&nbsp;manage Your registration
                as&nbsp;a&nbsp;user of&nbsp;the Service. The Personal Data You provide can give You
                access to&nbsp;different functionalities of&nbsp;the Service that are available
                to&nbsp;You as&nbsp;a&nbsp;registered user.
              </Typography>
              <Typography as={'li'}>
                <b>To&nbsp;contact You:</b> To&nbsp;contact You by&nbsp;email, telephone calls, SMS,
                or&nbsp;other equivalent forms of&nbsp;electronic communication, such
                as&nbsp;a&nbsp;mobile application’s&nbsp;push notifications regarding updates
                or&nbsp;informative communications related to&nbsp;the functionalities, products
                or&nbsp;contracted services, including the security updates, when necessary
                or&nbsp;reasonable for their implementation.
              </Typography>
              <Typography as={'li'}>
                <b>To&nbsp;provide You</b>&nbsp;with news, special offers and general information
                about other goods, services and events which we&nbsp;offer that are similar
                to&nbsp;those that you have already purchased or&nbsp;enquired about unless You have
                opted not to&nbsp;receive such information.
              </Typography>
              <Typography as={'li'}>
                <b>To&nbsp;manage Your requests:</b> To&nbsp;attend and manage Your requests
                to&nbsp;Us.
              </Typography>
              <Typography as={'li'}>
                <b>For business transfers:</b> We&nbsp;may use Your information to&nbsp;evaluate
                or&nbsp;conduct a&nbsp;merger, divestiture, restructuring, reorganization,
                dissolution, or&nbsp;other sale or&nbsp;transfer of&nbsp;some or&nbsp;all
                of&nbsp;Our assets, whether as&nbsp;a&nbsp;going concern or&nbsp;as&nbsp;part
                of&nbsp;bankruptcy, liquidation, or&nbsp;similar proceeding, in&nbsp;which Personal
                Data held by&nbsp;Us&nbsp;about our Service users is&nbsp;among the assets
                transferred.
              </Typography>
              <Typography as={'li'}>
                <b>For other purposes:</b> We&nbsp;may use Your information for other purposes, such
                as&nbsp;data analysis, identifying usage trends, determining the effectiveness
                of&nbsp;our promotional campaigns and to&nbsp;evaluate and improve our Service,
                products, services, marketing and your experience.
              </Typography>
            </ul>
            <Typography>
              We&nbsp;may share Your personal information in&nbsp;the following situations:
            </Typography>
            <ul className={`${s.text} ${s.list}`}>
              <Typography as={'li'}>
                <b>With Service Providers:</b> We&nbsp;may share Your personal information with
                Service Providers to&nbsp;monitor and analyze the use of&nbsp;our Service,
                to&nbsp;contact&nbsp;You.
              </Typography>
              <Typography as={'li'}>
                <b>For business transfers:</b> We&nbsp;may share or&nbsp;transfer Your personal
                information in&nbsp;connection with, or&nbsp;during negotiations of, any merger,
                sale of&nbsp;Company assets, financing, or&nbsp;acquisition of&nbsp;all
                or&nbsp;a&nbsp;portion of&nbsp;Our business to&nbsp;another company.
              </Typography>
              <Typography as={'li'}>
                <b>With Affiliates:</b> We&nbsp;may share Your information with Our affiliates,
                in&nbsp;which case we&nbsp;will require those affiliates to&nbsp;honor this Privacy
                Policy. Affiliates include Our parent company and any other subsidiaries, joint
                venture partners or&nbsp;other companies that We&nbsp;control or&nbsp;that are under
                common control with&nbsp;Us.
              </Typography>
              <Typography as={'li'}>
                <b>With business partners:</b> We&nbsp;may share Your information with Our business
                partners to&nbsp;offer You certain products, services or&nbsp;promotions.
              </Typography>
              <Typography as={'li'}>
                <b>With other users:</b>&nbsp;when You share personal information or&nbsp;otherwise
                interact in&nbsp;the public areas with other users, such information may
                be&nbsp;viewed by&nbsp;all users and may be&nbsp;publicly distributed outside.
              </Typography>
              <Typography as={'li'}>
                <b>With Your consent:</b> We&nbsp;may disclose Your personal information for any
                other purpose with Your consent.
              </Typography>
            </ul>
          </div>
        </div>
        <div>
          <div className={s.text}>
            <Typography as={'h4'} variant={'subtitle1'}>
              Retention of Your Personal Data
            </Typography>
            <Typography>
              The Company will retain Your Personal Data only for as&nbsp;long
              as&nbsp;is&nbsp;necessary for the purposes set out in&nbsp;this Privacy Policy.
              We&nbsp;will retain and use Your Personal Data to&nbsp;the extent necessary
              to&nbsp;comply with our legal obligations (for example, if&nbsp;we&nbsp;are required
              to&nbsp;retain your data to&nbsp;comply with applicable laws), resolve disputes, and
              enforce our legal agreements and policies.
            </Typography>
            <Typography>
              The Company will also retain Usage Data for internal analysis purposes. Usage Data
              is&nbsp;generally retained for a&nbsp;shorter period of&nbsp;time, except when this
              data is&nbsp;used to&nbsp;strengthen the security or&nbsp;to&nbsp;improve the
              functionality of&nbsp;Our Service, or&nbsp;We&nbsp;are legally obligated
              to&nbsp;retain this data for longer time periods.
            </Typography>
          </div>
        </div>
        <div>
          <div className={s.text}>
            <Typography as={'h4'} variant={'subtitle1'}>
              Transfer of&nbsp;Your Personal Data
            </Typography>
            <Typography>
              Your information, including Personal Data, is&nbsp;processed at&nbsp;the
              Company’s&nbsp;operating offices and in&nbsp;any other places where the parties
              involved in&nbsp;the processing are located. It&nbsp;means that this information may
              be&nbsp;transferred to&nbsp;— and maintained on&nbsp;— computers located outside
              of&nbsp;Your state, province, country or&nbsp;other governmental jurisdiction where
              the data protection laws may differ than those from Your jurisdiction.
            </Typography>
            <Typography>
              Your consent to&nbsp;this Privacy Policy followed by&nbsp;Your submission of&nbsp;such
              information represents Your agreement to&nbsp;that transfer.
            </Typography>
            <Typography>
              The Company will take all steps reasonably necessary to&nbsp;ensure that Your data
              is&nbsp;treated securely and in&nbsp;accordance with this Privacy Policy and
              no&nbsp;transfer of&nbsp;Your Personal Data will take place
              to&nbsp;an&nbsp;organization or&nbsp;a&nbsp;country unless there are adequate controls
              in&nbsp;place including the security of&nbsp;Your data and other personal information.
            </Typography>
          </div>
        </div>
        <div>
          <div className={s.text}>
            <Typography as={'h4'} variant={'subtitle1'}>
              Delete Your Personal Data
            </Typography>
            <Typography>
              You have the right to&nbsp;delete or&nbsp;request that We&nbsp;assist in&nbsp;deleting
              the Personal Data that We&nbsp;have collected about You.
            </Typography>
            <Typography>
              Our Service may give You the ability to&nbsp;delete certain information about You from
              within the Service.
            </Typography>
            <Typography>
              You may update, amend, or&nbsp;delete Your information at&nbsp;any time
              by&nbsp;signing in&nbsp;to&nbsp;Your Account, if&nbsp;you have one, and visiting the
              account settings section that allows you to&nbsp;manage Your personal information. You
              may also contact Us&nbsp;to&nbsp;request access to, correct, or&nbsp;delete any
              personal information that You have provided to&nbsp;Us.
            </Typography>
            <Typography>
              Please note, however, that We&nbsp;may need to&nbsp;retain certain information when
              we&nbsp;have a&nbsp;legal obligation or&nbsp;lawful basis to&nbsp;do&nbsp;so.
            </Typography>
          </div>
        </div>
        <div>
          <div className={s.text}>
            <Typography as={'h4'} variant={'subtitle1'}>
              Disclosure of Your Personal Data
            </Typography>
            <Typography as={'h5'} variant={'overline'}>
              Business Transactions
            </Typography>
            <Typography>
              If&nbsp;the Company is&nbsp;involved in&nbsp;a&nbsp;merger, acquisition or&nbsp;asset
              sale, Your Personal Data may be&nbsp;transferred. We&nbsp;will provide notice before
              Your Personal Data is&nbsp;transferred and becomes subject to&nbsp;a&nbsp;different
              Privacy Policy.
            </Typography>
            <Typography as={'h5'} variant={'overline'}>
              Law enforcement
            </Typography>
            <Typography>
              Under certain circumstances, the Company may be&nbsp;required to&nbsp;disclose Your
              Personal Data if&nbsp;required to&nbsp;do&nbsp;so&nbsp;by&nbsp;law
              or&nbsp;in&nbsp;response to&nbsp;valid requests by&nbsp;public authorities (e.g.
              a&nbsp;court or&nbsp;a&nbsp;government agency).
            </Typography>

            <Typography as={'h5'} variant={'overline'}>
              Other legal requirements
            </Typography>
            <Typography>
              The Company may disclose Your Personal Data in&nbsp;the good faith belief that such
              action is&nbsp;necessary to:
            </Typography>
            <ul className={`${s.list} ${s.noMargin}`}>
              <Typography as={'li'}>Comply with a&nbsp;legal obligation</Typography>
              <Typography as={'li'}>
                Protect and defend the rights or&nbsp;property of&nbsp;the Company
              </Typography>
              <Typography as={'li'}>
                Prevent or&nbsp;investigate possible wrongdoing in&nbsp;connection with the Service
              </Typography>
              <Typography as={'li'}>
                Protect the personal safety of&nbsp;Users of&nbsp;the Service or&nbsp;the public
              </Typography>
              <Typography as={'li'}>Protect against legal liability</Typography>
            </ul>

            <Typography as={'h5'} variant={'overline'}>
              Security of&nbsp;Your Personal Data
            </Typography>
            <Typography>
              The security of&nbsp;Your Personal Data is&nbsp;important to&nbsp;Us, but remember
              that no&nbsp;method of&nbsp;transmission over the Internet, or&nbsp;method
              of&nbsp;electronic storage is&nbsp;100% secure. While We&nbsp;strive to&nbsp;use
              commercially acceptable means to&nbsp;protect Your Personal Data, We&nbsp;cannot
              guarantee its absolute security.
            </Typography>
          </div>
        </div>
      </div>
      <div className={s.block} id={'childrens'}>
        <Typography as={'h3'} variant={'title'}>
          3. Children’s Privacy
        </Typography>
        <div className={s.text}>
          <Typography>
            Our Service does not address anyone under the age of&nbsp;13. We&nbsp;do&nbsp;not
            knowingly collect personally identifiable information from anyone under the age
            of&nbsp;13. If&nbsp;You are a&nbsp;parent or&nbsp;guardian and You are aware that Your
            child has provided Us&nbsp;with Personal Data, please contact&nbsp;Us.
            If&nbsp;We&nbsp;become aware that We&nbsp;have collected Personal Data from anyone under
            the age of&nbsp;13 without verification of&nbsp;parental consent, We&nbsp;take steps
            to&nbsp;remove that information from Our servers.
          </Typography>
          <Typography>
            If&nbsp;We&nbsp;need to&nbsp;rely on&nbsp;consent as&nbsp;a&nbsp;legal basis for
            processing Your information and Your country requires consent from a&nbsp;parent,
            We&nbsp;may require Your parent’s&nbsp;consent before We&nbsp;collect and use that
            information.
          </Typography>
        </div>
      </div>
      <div className={s.block} id={'links'}>
        <Typography as={'h3'} variant={'title'}>
          4. Links to&nbsp;Other Websites
        </Typography>
        <div className={s.text}>
          <Typography>
            Our Service may contain links to&nbsp;other websites that are not operated by&nbsp;Us.
            If&nbsp;You click on&nbsp;a&nbsp;third party link, You will be&nbsp;directed
            to&nbsp;that third party’s&nbsp;site. We&nbsp;strongly advise You to&nbsp;review the
            Privacy Policy of&nbsp;every site You visit.
          </Typography>
          <Typography>
            We&nbsp;have no&nbsp;control over and assume no&nbsp;responsibility for the content,
            privacy policies or&nbsp;practices of&nbsp;any third party sites or&nbsp;services.
          </Typography>
        </div>
      </div>
      <div className={s.block} id={'changes'}>
        <Typography as={'h3'} variant={'title'}>
          5. Changes to&nbsp;this Privacy Policy
        </Typography>
        <div className={s.text}>
          <Typography>
            We&nbsp;may update Our Privacy Policy from time to&nbsp;time. We&nbsp;will notify You
            of&nbsp;any changes by&nbsp;posting the new Privacy Policy on&nbsp;this page.
          </Typography>
          <Typography>
            We&nbsp;will let You know via email and/or&nbsp;a&nbsp;prominent notice on&nbsp;Our
            Service, prior to&nbsp;the change becoming effective and update the «Last updated» date
            at&nbsp;the top of&nbsp;this Privacy Policy.
          </Typography>
          <Typography>
            You are advised to&nbsp;review this Privacy Policy periodically for any changes. Changes
            to&nbsp;this Privacy Policy are effective when they are posted on&nbsp;this page.
          </Typography>
        </div>
      </div>
      <div className={s.block} id={'contacts'}>
        <Typography as={'h3'} variant={'title'}>
          6. Contact Us
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
                href={CONTACTS.email.href}
                rel={'noreferrer'}
                target={'_blank'}
              >
                {CONTACTS.email.label}
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
              <Typography as={'a'} className={s.link} href={CONTACTS.phone.href}>
                {CONTACTS.phone.label}
              </Typography>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
