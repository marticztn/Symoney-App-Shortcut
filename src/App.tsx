import { useEffect, useMemo, useState } from 'react'
import './index.css'
import './symoney-css.css'
import type { ApiTab, Language, MainTab } from './types'
import { getTranslations } from './i18n'
import { notices } from './notices'

function App() {
  const [lang, setLang] = useState<Language>('zh-cn')
  const [tab, setTab] = useState<MainTab>('quickRecord')
  const [apiTab, setApiTab] = useState<ApiTab>('siluFlow')
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const t = useMemo(() => getTranslations(lang), [lang])

  useEffect(() => {
    document.title = t.headerTitle || 'Symoney Guide'
  }, [t])

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('.language-dropdown')) setDropdownOpen(false)
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-left">
          <div className="header-logo">
            <img src="/asset/symoney_logo.png" alt="Symoney Logo" />
          </div>
          <div className="header-title">{t.headerTitle}</div>
        </div>

        <div className={`language-dropdown ${dropdownOpen ? 'open' : ''}`}>
          <button className="dropdown-button" onClick={() => setDropdownOpen(v => !v)}>
            <span className="dropdown-button-text">
              {lang === 'en' ? 'English' : lang === 'zh-cn' ? '简体中文' : '繁體中文'}
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div className="dropdown-content">
            <div className={`dropdown-item ${lang==='en'?'active':''}`} onClick={() => { setLang('en'); setDropdownOpen(false) }}>English</div>
            <div className={`dropdown-item ${lang==='zh-cn'?'active':''}`} onClick={() => { setLang('zh-cn'); setDropdownOpen(false) }}>简体中文</div>
            <div className={`dropdown-item ${lang==='zh-tw'?'active':''}`} onClick={() => { setLang('zh-tw'); setDropdownOpen(false) }}>繁體中文</div>
          </div>
        </div>
      </header>

      <div className="main-content">
        <div className="tab-container">
          <div className="tabs">
            <div className={`tab ${tab==='quickRecord'?'active':''}`} onClick={() => setTab('quickRecord')}>
              <span>{t.quickRecordTab}</span>
            </div>
            <div className={`tab ${tab==='apiKey'?'active':''}`} onClick={() => setTab('apiKey')}>
              <span>{t.apiKeyTab}</span>
            </div>
            <div className={`tab notice-tab-indicator ${tab==='notice'?'active':''}`} onClick={() => setTab('notice')}>
              <span>{t.noticeTab}</span>
              {(notices[lang] || []).some(n => n.isNew && !(JSON.parse(localStorage.getItem('symoneyViewedNotices') || '{}') as Record<string, number>)[n.id]) && (
                <span className="new-badge" id="noticeTabBadge">{t.newBadge}</span>
              )}
            </div>
            <div className={`tab ${tab==='contact'?'active':''}`} onClick={() => setTab('contact')}>
              <span>{t.contactTab}</span>
            </div>
          </div>
        </div>

        <div className={`card tab-content ${tab==='quickRecord'?'active':''}`}>
          <h1>{t.quickRecordTitle}</h1>
          <ol>
            <li>
              <span>{t.step1}</span>
              <div className="shortcut-container">
                <a href="https://www.icloud.com/shortcuts/f154d368bd4d4c27a22ea352d4e1b366" target="_blank" className="shortcut-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  <span>{t.shortcut1Text}</span>
                </a>

                <div className="premium-shortcut">
                  <a href="https://www.icloud.com/shortcuts/26b2c3440d1c4df2b123700c1e9a9582" target="_blank" className="shortcut-button premium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4"/><path d="M21 12c.552 0 1-.448 1-1V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6c0 .552.448 1 1 1"/><path d="M3 10v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6"/></svg>
                    <span>{t.shortcut2Text}</span>
                  </a>
                  <div className="premium-note">{t.noteSmart}</div>
                </div>
              </div>
            </li>
            <li>{t.step2}</li>
            <li>{t.step3}</li>
            <li>{t.step4}</li>
            <li>{t.step5}</li>
            <li>{t.step6}</li>
            <li>{t.step7}</li>
            <li>{t.step8}</li>
          </ol>
          <hr />
          <p className="note">{t.actionNote}</p>
        </div>

        <div className={`card tab-content ${tab==='apiKey'?'active':''}`}>
          <h1>{t.apiKeyTitle}</h1>

          <div className="api-sub-tabs">
            <div className={`api-sub-tab ${apiTab==='siluFlow'?'active':''}`} onClick={() => setApiTab('siluFlow')}>
              <span>{t.siluFlow}</span>
            </div>
            <div className={`api-sub-tab ${apiTab==='volcanicEngine'?'active':''}`} onClick={() => setApiTab('volcanicEngine')}>
              <span>{t.volcanicEngine}</span>
            </div>
            <div className={`api-sub-tab ${apiTab==='custom'?'active':''}`} onClick={() => setApiTab('custom')}>
              <span>{t.custom}</span>
            </div>
          </div>

          <div className={`api-sub-content ${apiTab==='siluFlow'?'active':''}`}>
            <h2>{t.siluFlowTitle}</h2>
            <ol>
              <li>
                <span>{t.siluStep1}</span>
                <a href="https://cloud.siliconflow.cn/account/ak" target="_blank" className="site-link">
                  <span>{t.officialSite}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '3px' }}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              </li>
              <li>{t.siluStep2}</li>
              <li>{t.siluStep3New}</li>
              <li>{t.siluStep5}</li>
              <li>{t.siluStep6}</li>
              <li>{t.siluStep7}</li>
              <li>{t.copyToSymoney}</li>
            </ol>
          </div>

          <div className={`api-sub-content ${apiTab==='volcanicEngine'?'active':''}`}>
            <h2>{t.volcanicEngineTitle}</h2>
            <ol>
              <li>
                <span>{t.volcanicStep1}</span>
                <a href="https://console.volcengine.com/ark" target="_blank" className="site-link">
                  <span>{t.officialSite}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '3px' }}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              </li>
              <li>{t.volcanicStep2}</li>
              <li>{t.volcanicStep3New}</li>
              <li>{t.volcanicStep4New}</li>
              <li>{t.volcanicStep5New}</li>
              <li>{t.volcanicStep6New}</li>
              <li>{t.copyToSymoney}</li>
            </ol>
          </div>

          <div className={`api-sub-content ${apiTab==='custom'?'active':''}`}>
            <div className="url-notice" dangerouslySetInnerHTML={{ __html: t.customUrlNotice || '' }} />
            <h2>{t.customTitle}</h2>
            <ol>
              <li>{t.customStep1}</li>
              <li>{t.customStep2}</li>
              <li>{t.customStep3}</li>
              <li>{t.copyToSymoneyCustom || t.copyToSymoney}</li>
            </ol>
          </div>
        </div>

        <div className={`card tab-content ${tab==='notice'?'active':''}`}>
          <h1>{t.noticeTitle}</h1>
          <div className="notice-intro">{t.noticeIntro}</div>
          <div className="notice-container" id="noticeContainer">
            {notices[lang]?.map((n) => (
              <div key={n.id} className={`notice-item${n.urgent?' urgent':''}${n.warning?' warning':''}`} onClick={() => {
                if (n.isNew) {
                  const viewed = JSON.parse(localStorage.getItem('symoneyViewedNotices') || '{}') as Record<string, number>
                  if (!viewed[n.id]) {
                    viewed[n.id] = Date.now()
                    localStorage.setItem('symoneyViewedNotices', JSON.stringify(viewed))
                  }
                }
              }}>
                <div className="notice-date">{n.date}</div>
                <h3 className="notice-heading">
                  <span>{n.heading}</span>
                  {n.isNew && <span className="notice-new">{t.newBadge}</span>}
                </h3>
                <div className="notice-content">
                  {n.content}
                  {n.buttonText && n.buttonAction && (
                    <div className="read-more-link">
                      <a href="#" onClick={(e) => { e.preventDefault(); setTab(n.buttonAction!); }}>{n.buttonText}</a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`card tab-content ${tab==='contact'?'active':''}`}>
          <h1>{t.contactTitle}</h1>
          <div className="contact-intro">{t.contactIntro}</div>
          <div className="contact-container">
            <div className="contact-section">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div className="contact-content">
                <div className="contact-label">{t.authorEmail}</div>
                <div className="contact-value">
                  <a href="mailto:fuzzyerazhu@gmail.com">fuzzyerazhu@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="contact-section">
              <div className="contact-icon">
                <img src="/asset/ic_discord.png" alt="Discord" width="24" height="24" className="discord-icon" />
              </div>
              <div className="contact-content">
                <div className="contact-label">{t.discordServer}</div>
                <div className="contact-value">
                  <a href="https://discord.gg/mDxtajfCrY" target="_blank">Discord Official Server</a>
                </div>
              </div>
            </div>

            <div className="contact-divider"></div>

            <div className="social-heading">{t.socialHeading}</div>

            <div className="social-grid">
              <div className="social-card">
                <div className="social-card-header">
                  <div className="social-icon xiaohongshu-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <div className="social-title">{t.redbookGroup}</div>
                </div>
                <div className="social-card-body">
                  <div className="qr-container">
                    <img src="/asset/red_group.JPG" alt="Xiaohongshu Group" className="qr-code" />
                  </div>
                  <div className="social-note">{t.scanToJoin}</div>
                </div>
              </div>

              <div className="social-card">
                <div className="social-card-header">
                  <div className="social-icon wechat-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <div className="social-title">{t.wechatGroup}</div>
                </div>
                <div className="social-card-body">
                  <div className="qr-container">
                    <img src="/asset/wechat_group.JPG" alt="WeChat Group" className="qr-code" />
                  </div>
                  <div className="social-note">{t.scanToJoin}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
