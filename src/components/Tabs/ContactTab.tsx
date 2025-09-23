import { ContactSection } from '../UI/ContactSection'
import { SocialCard } from '../UI/SocialCard'
import type { Translations } from '../../types'

interface ContactTabProps {
  isActive: boolean
  translations: Translations
}

export function ContactTab({ isActive, translations }: ContactTabProps) {
  if (!isActive) return null

  const userGroupIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )

  return (
    <div className={`card tab-content ${isActive ? 'active' : ''}`}>
      <h1>{translations.contactTitle}</h1>
      <div className="contact-intro">{translations.contactIntro}</div>

      <div className="contact-grid">
        <section className="contact-card contact-card--primary">
          <header className="contact-card__header">
            <div className="contact-card__icon contact-card__icon--primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div>
              <h2>{translations.primaryContactHeading ?? '直接联系'}</h2>
              <p>{translations.primaryContactNote ?? '使用以下方式直接联系开发者'}</p>
            </div>
          </header>

          <div className="contact-card__body">
            <ContactSection
              icon={<span className="contact-item__symbol">@</span>}
              label={translations.authorEmail ?? '邮箱'}
              value={<a href="mailto:fuzzyerazhu@gmail.com">fuzzyerazhu@gmail.com</a>}
            />

            <ContactSection
              icon={<img src="/asset/ic_discord.png" alt="Discord" width="24" height="24" className="discord-icon" />}
              label={translations.discordServer ?? 'Discord'}
              value={<a href="https://discord.gg/mDxtajfCrY" target="_blank" rel="noreferrer">Discord Official Server</a>}
            />
          </div>
        </section>

        <section className="contact-card contact-card--community">
          <header className="contact-card__header">
            <div className="contact-card__icon contact-card__icon--community">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <h2>{translations.socialHeading ?? '社区与群组'}</h2>
              <p>{translations.communityNote ?? '加入我们的社群，与其他用户交流经验'}</p>
            </div>
          </header>

          <div className="social-grid">
            <SocialCard
              icon={userGroupIcon}
              title={translations.redbookGroup ?? '小红书交流群'}
              qrImageSrc="/asset/red_group.JPG"
              qrImageAlt="Xiaohongshu Group"
              note={translations.scanToJoin ?? '扫码加入群聊'}
            />

            <SocialCard
              icon={userGroupIcon}
              title={translations.wechatGroup ?? '微信群'}
              qrImageSrc="/asset/wechat_group.JPG"
              qrImageAlt="WeChat Group"
              note={translations.scanToJoin ?? '扫码加入群聊'}
            />
          </div>
        </section>
      </div>
    </div>
  )
}
