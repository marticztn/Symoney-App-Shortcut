import { useState } from 'react'
import type { Translations } from '../../types'

interface ContactTabProps {
  isActive: boolean
  translations: Translations
}

export function ContactTab({ isActive, translations }: ContactTabProps) {
  const [visibleQR, setVisibleQR] = useState<'redbook' | 'wechat' | null>(null)
  
  if (!isActive) return null

  const toggleQR = (qrType: 'redbook' | 'wechat') => {
    setVisibleQR(visibleQR === qrType ? null : qrType)
  }

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
          <div className="social-simple">
            <div className="qr-card" onClick={() => toggleQR('redbook')}>
              <h3>{translations.redbookGroup ?? '小红书交流群'}</h3>
              <div className="qr-display-container">
                {visibleQR !== 'redbook' ? (
                  <div className="qr-preview">
                    <div className="qr-preview-placeholder">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="5" height="5"/>
                        <rect x="16" y="3" width="5" height="5"/>
                        <rect x="3" y="16" width="5" height="5"/>
                        <path d="M21 16h-3a2 2 0 0 0-2 2v3"/>
                        <path d="M21 21v.01"/>
                        <path d="M12 7v3a2 2 0 0 1-2 2H7"/>
                        <path d="M3 12h.01"/>
                        <path d="M12 3h.01"/>
                        <path d="M12 16v.01"/>
                        <path d="M16 12h1"/>
                        <path d="M21 12v.01"/>
                        <path d="M12 21v-1"/>
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div className="qr-container qr-container--active">
                    <img src="/asset/red_group.JPG" alt="小红书群" className="qr-image qr-image--redbook" />
                  </div>
                )}
              </div>
              <p>{visibleQR === 'redbook' ? translations.scanToJoin ?? '扫码加入群聊' : translations.clickToView ?? '点击查看群二维码'}</p>
            </div>

            <div className="qr-card" onClick={() => toggleQR('wechat')}>
              <h3>{translations.wechatGroup ?? '微信群'}</h3>
              <div className="qr-display-container">
                {visibleQR !== 'wechat' ? (
                  <div className="qr-preview">
                    <div className="qr-preview-placeholder">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="5" height="5"/>
                        <rect x="16" y="3" width="5" height="5"/>
                        <rect x="3" y="16" width="5" height="5"/>
                        <path d="M21 16h-3a2 2 0 0 0-2 2v3"/>
                        <path d="M21 21v.01"/>
                        <path d="M12 7v3a2 2 0 0 1-2 2H7"/>
                        <path d="M3 12h.01"/>
                        <path d="M12 3h.01"/>
                        <path d="M12 16v.01"/>
                        <path d="M16 12h1"/>
                        <path d="M21 12v.01"/>
                        <path d="M12 21v-1"/>
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div className="qr-container qr-container--active">
                    <img src="/asset/wechat_group.JPG" alt="微信群" className="qr-image qr-image--wechat" />
                  </div>
                )}
              </div>
              <p>{visibleQR === 'wechat' ? translations.scanToJoin ?? '扫码加入群聊' : translations.clickToView ?? '点击查看群二维码'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}