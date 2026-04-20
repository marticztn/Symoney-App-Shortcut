import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import type { Language, MainTab, Translations } from '../../types'
import { notices } from '../../notices'

interface TabNavigationProps {
  activeTab: MainTab
  onTabChange: (tab: MainTab) => void
  currentLang: Language
  translations: Translations
}

export function TabNavigation({ activeTab, onTabChange, currentLang, translations }: TabNavigationProps) {
  const hasNewNotices = (notices[currentLang] || []).some(n =>
    n.isNew && !(JSON.parse(localStorage.getItem('symoneyViewedNotices') || '{}') as Record<string, number>)[n.id]
  )

  const tabsRef = useRef<HTMLDivElement>(null)
  const [indicator, setIndicator] = useState<{ left: number; width: number; ready: boolean }>(
    { left: 0, width: 0, ready: false }
  )

  const measure = () => {
    const container = tabsRef.current
    if (!container) return
    const active = container.querySelector<HTMLElement>('.tab[aria-selected="true"]')
    if (!active) return
    setIndicator({ left: active.offsetLeft, width: active.offsetWidth, ready: true })
  }

  useLayoutEffect(measure, [activeTab, currentLang])

  useEffect(() => {
    const onResize = () => measure()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const tabBtn = (tab: MainTab, label: string | undefined, icon: React.ReactNode, extra?: React.ReactNode) => (
    <button
      type="button"
      role="tab"
      aria-selected={activeTab === tab}
      className={`tab ${activeTab === tab ? 'active' : ''}`}
      onClick={() => onTabChange(tab)}
    >
      {extra ? (
        <span className="tab-icon-container">
          {icon}
          {extra}
        </span>
      ) : (
        icon
      )}
      <span className="tab-text">{label}</span>
    </button>
  )

  return (
    <div className="tab-container">
      <div className="tabs" ref={tabsRef} role="tablist">
        {tabBtn(
          'quickRecord',
          translations.quickRecordTab,
          <svg className="tab-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        )}
        {tabBtn(
          'apiKey',
          translations.apiKeyTab,
          <svg className="tab-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" />
            <path d="m21 2-9.6 9.6" />
            <circle cx="7.5" cy="15.5" r="5.5" />
          </svg>
        )}
        {tabBtn(
          'automation',
          translations.automationTab,
          <svg className="tab-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="m9 8 6 4-6 4Z" />
          </svg>
        )}
        {tabBtn(
          'notice',
          translations.noticeTab,
          <svg className="tab-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>,
          hasNewNotices ? <span className="new-badge" /> : null
        )}
        {tabBtn(
          'contact',
          translations.contactTab,
          <svg className="tab-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        )}
        <span
          className={`tab-indicator ${indicator.ready ? 'tab-indicator--ready' : ''}`}
          style={{
            transform: `translateX(${indicator.left}px)`,
            width: `${indicator.width}px`,
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
