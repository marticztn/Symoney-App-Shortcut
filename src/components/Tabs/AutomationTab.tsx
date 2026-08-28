import type { Language, Translations } from '../../types'
import { IconBell, IconDownload, IconPhone } from '../Icons'

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

      <div className="automation-sections">
        <section className="automation-section">
          <div className="automation-section-header">
            <div className="automation-section-icon">
              <IconPhone w={20} h={20} sw={1.6} />
            </div>
            <div>
              <span className="automation-section-index">01</span>
              <h2>{t.smsTriggerTitle}</h2>
              <p>{t.smsTriggerDesc}</p>
            </div>
          </div>

          <div className="sms-section">
            <div className="sms-title">
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
              <h3>{t.setupVideoTitle}</h3>
              <p>{t.setupVideoDesc}</p>
              <video key={setupVideo} controls preload="metadata" playsInline>
                <source src={setupVideo} type="video/mp4" />
              </video>
            </div>
            <div className="video-card">
              <h3>{t.automationVideoTitle}</h3>
              <p>{t.automationVideoDesc}</p>
              <video key={automationVideo} controls preload="metadata" playsInline>
                <source src={automationVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        <section className="automation-section notification-section">
          <div className="automation-section-header">
            <div className="automation-section-icon notification">
              <IconBell w={20} h={20} sw={1.6} />
            </div>
            <div>
              <span className="automation-section-index">02</span>
              <h2>{t.notificationTriggerTitle}</h2>
              <p>{t.notificationTriggerDesc}</p>
            </div>
          </div>

          <div className="notification-shortcut-card">
            <div className="notification-shortcut-copy">
              <div className="notification-shortcut-mark">
                <IconBell w={22} h={22} sw={1.6} />
              </div>
              <div>
                <div className="notification-shortcut-heading">
                  <h3>{t.notificationTriggerTitle}</h3>
                  <span className="notification-requirement">{t.notificationRequirement}</span>
                </div>
                <p>{t.notificationShortcutHint}</p>
              </div>
            </div>
            <a
              className="shortcut-btn notification-shortcut-btn"
              href="https://www.icloud.com/shortcuts/8c9ea3a1c9ea4b0e9b23e1c971ec19cf"
              target="_blank"
              rel="noreferrer"
            >
              <IconDownload w={14} h={14} sw={1.8} />
              <span>{t.notificationShortcutLabel}</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
