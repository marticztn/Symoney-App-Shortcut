import type { Language, Translations } from '../../types'
import { IconPhone } from '../Icons'

interface AutomationTabProps {
  currentLang: Language
  translations: Translations
}

export function AutomationTab({ currentLang, translations: t }: AutomationTabProps) {
  const isCn = currentLang === 'zh-cn' || currentLang === 'zh-tw'
  const setupVideo = currentLang === 'en' ? '/asset/videos/en_setup.MP4' : '/asset/videos/cn_setup.MP4'
  const automationVideo =
    currentLang === 'en' ? '/asset/videos/en_automation.mov' : '/asset/videos/cn_automation.MOV'

  const bankName =
    currentLang === 'zh-cn' ? '中国银行'
      : currentLang === 'zh-tw' ? '中國銀行'
      : currentLang === 'ja' ? 'VISA'
      : 'Bank of America'
  const avatarLetter =
    currentLang === 'zh-cn' ? '银'
      : currentLang === 'zh-tw' ? '銀'
      : currentLang === 'ja' ? 'V'
      : 'B'

  return (
    <div className="tab-content">
      <div className="panel-header">
        <h1>{t.automationTitle}</h1>
        <p className="panel-intro">{t.automationIntro}</p>
      </div>

      <div className="sms-section">
        <div className="sms-title">
          <IconPhone w={18} h={18} sw={1.6} />
          <span>{t.smsExampleTitle}</span>
        </div>
        <p className="sms-desc">{t.smsExampleDesc}</p>

        <div className="sms-card">
          <div className="sms-card-header">
            <div className="sms-card-avatar">{avatarLetter}</div>
            <div className="sms-card-meta">
              <span className="name">{bankName}</span>
              <span className="time">10:30 {isCn ? '' : 'AM'}</span>
            </div>
          </div>
          <div className="sms-card-body">{t.smsExample}</div>
        </div>

        <div className="sms-tip">{t.automationTip}</div>
      </div>

      <div className="video-grid">
        <div className="video-card">
          <h2>{t.setupVideoTitle}</h2>
          <p>{t.setupVideoDesc}</p>
          <video key={setupVideo} controls preload="metadata" playsInline>
            <source src={setupVideo} type="video/mp4" />
          </video>
        </div>
        <div className="video-card">
          <h2>{t.automationVideoTitle}</h2>
          <p>{t.automationVideoDesc}</p>
          <video key={automationVideo} controls preload="metadata" playsInline>
            <source src={automationVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}
