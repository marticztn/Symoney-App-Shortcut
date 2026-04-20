import type { Language, Translations } from '../../types'

interface AutomationTabProps {
  isActive: boolean
  currentLang: Language
  translations: Translations
}

export function AutomationTab({ isActive, currentLang, translations }: AutomationTabProps) {
  if (!isActive) return null

  const setupVideo = currentLang === 'en' ? '/asset/videos/en_setup.MP4' : '/asset/videos/cn_setup.MP4'
  const automationVideo = currentLang === 'en' ? '/asset/videos/en_automation.mov' : '/asset/videos/cn_automation.MOV'

  return (
    <div className={`card tab-content ${isActive ? 'active' : ''}`}>
      <h1>{translations.automationTitle}</h1>
      <p className="automation-intro">{translations.automationIntro}</p>

      <div className="sms-example-section">
        <h3 className="sms-example-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
            <line x1="12" y1="18" x2="12.01" y2="18"/>
          </svg>
          <span>{translations.smsExampleTitle}</span>
        </h3>
        <p className="sms-example-desc">{translations.smsExampleDesc}</p>
        <div className="sms-example-card">{translations.smsExample}</div>
        <p className="sms-example-tip">{translations.automationTip}</p>
      </div>

      <div className="video-grid">
        <div className="video-card">
          <h2>{translations.setupVideoTitle}</h2>
          <p>{translations.setupVideoDesc}</p>
          <video key={setupVideo} controls preload="metadata">
            <source src={setupVideo} type="video/mp4" />
            {translations.videoNotSupported}
          </video>
        </div>

        <div className="video-card">
          <h2>{translations.automationVideoTitle}</h2>
          <p>{translations.automationVideoDesc}</p>
          <video key={automationVideo} controls preload="metadata">
            <source src={automationVideo} type="video/mp4" />
            {translations.videoNotSupported}
          </video>
        </div>
      </div>
    </div>
  )
}
