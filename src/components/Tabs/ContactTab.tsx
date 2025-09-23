import { ContactSection } from '../UI/ContactSection'
import { SocialCard } from '../UI/SocialCard'
import type { Translations } from '../../types'

interface ContactTabProps {
  isActive: boolean
  translations: Translations
}

export function ContactTab({ isActive, translations }: ContactTabProps) {
  if (!isActive) return null

  const emailIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  )

  const discordIcon = (
    <img src="/asset/ic_discord.png" alt="Discord" width="24" height="24" className="discord-icon" />
  )

  const userGroupIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  )

  return (
    <div className={`card tab-content ${isActive ? 'active' : ''}`}>
      <h1>{translations.contactTitle}</h1>
      <div className="contact-intro">{translations.contactIntro}</div>
      <div className="contact-container">
        <ContactSection
          icon={emailIcon}
          label={translations.authorEmail ?? 'Email'}
          value={<a href="mailto:fuzzyerazhu@gmail.com">fuzzyerazhu@gmail.com</a>}
        />

        <ContactSection
          icon={discordIcon}
          label={translations.discordServer ?? 'Discord'}
          value={<a href="https://discord.gg/mDxtajfCrY" target="_blank">Discord Official Server</a>}
        />

        <div className="contact-divider"></div>

        <div className="social-heading">{translations.socialHeading ?? 'Join the community'}</div>

        <div className="social-grid">
          <SocialCard
            icon={userGroupIcon}
            title={translations.redbookGroup ?? 'Xiaohongshu Group'}
            qrImageSrc="/asset/red_group.JPG"
            qrImageAlt="Xiaohongshu Group"
            note={translations.scanToJoin ?? 'Scan to join'}
          />

          <SocialCard
            icon={userGroupIcon}
            title={translations.wechatGroup ?? 'WeChat Group'}
            qrImageSrc="/asset/wechat_group.JPG"
            qrImageAlt="WeChat Group"
            note={translations.scanToJoin ?? 'Scan to join'}
          />
        </div>
      </div>
    </div>
  )
}
