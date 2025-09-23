import type { Translations } from '../../types'

interface ContactTabProps {
  isActive: boolean
  translations: Translations
}

export function ContactTab({ isActive, translations }: ContactTabProps) {
  if (!isActive) return null

  return (
    <div className={`card tab-content ${isActive ? 'active' : ''}`}>
      <h1>{translations.contactTitle}</h1>
      <div className="contact-intro">{translations.contactIntro}</div>

      <div className="contact-simple">
        {/* 直接联系方式 */}
        <div className="contact-links">
          <a href="mailto:fuzzyerazhu@gmail.com" className="contact-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            <span>fuzzyerazhu@gmail.com</span>
          </a>

          <a href="https://discord.gg/mDxtajfCrY" target="_blank" rel="noreferrer" className="contact-link">
            <img src="/asset/ic_discord.png" alt="Discord" width="20" height="20" />
            <span>Discord Official Server</span>
          </a>
        </div>

        {/* 社区群组 */}
        <div className="contact-divider"></div>
        
        <div className="social-section">
          <h2>{translations.socialHeading ?? '社区群组'}</h2>
          <div className="social-simple">
            <div className="qr-card">
              <h3>{translations.redbookGroup ?? '小红书交流群'}</h3>
              <div className="qr-container">
                <img src="/asset/red_group.JPG" alt="小红书群" className="qr-image qr-image--redbook" />
              </div>
              <p>{translations.scanToJoin ?? '扫码加入群聊'}</p>
            </div>

            <div className="qr-card">
              <h3>{translations.wechatGroup ?? '微信群'}</h3>
              <div className="qr-container">
                <img src="/asset/wechat_group.JPG" alt="微信群" className="qr-image qr-image--wechat" />
              </div>
              <p>{translations.scanToJoin ?? '扫码加入群聊'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}