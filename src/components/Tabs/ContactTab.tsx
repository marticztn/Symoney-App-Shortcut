import type { Translations } from '../../types'
import { IconMail } from '../Icons'

interface ContactTabProps {
  translations: Translations
}

export function ContactTab({ translations: t }: ContactTabProps) {
  return (
    <div className="tab-content">
      <div className="panel-header">
        <h1>{t.contactTitle}</h1>
        <p className="panel-intro">{t.contactIntro}</p>
      </div>

      <div className="contact-links">
        <a href="mailto:fuzzyerazhu@gmail.com" className="contact-link">
          <IconMail w={22} h={22} sw={1.4} />
          <div className="info">
            <span className="label">{t.authorEmail}</span>
            <span className="value">fuzzyerazhu@gmail.com</span>
          </div>
        </a>
        <a
          href="https://discord.gg/mDxtajfCrY"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          <img className="discord-icon" src="/asset/discord.png" alt="Discord" />
          <div className="info">
            <span className="label">Discord</span>
            <span className="value">{t.discordServer}</span>
          </div>
        </a>
      </div>

      <h2 style={{ marginTop: 8 }}>{t.communityHeading}</h2>
      <div className="qr-grid">
        <div className="qr-card">
          <h3>{t.redbookGroup}</h3>
          <div className="qr-frame">
            <img src="/asset/red_group.jpg" alt={t.redbookGroup} />
          </div>
          <p>{t.scanToJoin}</p>
        </div>
        <div className="qr-card">
          <h3>{t.wechatGroup}</h3>
          <div className="qr-frame">
            <img src="/asset/wechat_group.jpg" alt={t.wechatGroup} />
          </div>
          <p>{t.scanToJoin}</p>
        </div>
      </div>
    </div>
  )
}
