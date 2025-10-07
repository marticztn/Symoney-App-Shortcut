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

  return (
    <div className="tab-container">
      <div className="tabs">
        <div 
          className={`tab ${activeTab === 'quickRecord' ? 'active' : ''}`} 
          onClick={() => onTabChange('quickRecord')}
        >
          <svg className="tab-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
          <span className="tab-text">{translations.quickRecordTab}</span>
        </div>
        <div 
          className={`tab ${activeTab === 'apiKey' ? 'active' : ''}`} 
          onClick={() => onTabChange('apiKey')}
        >
          <svg className="tab-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"/>
            <path d="m21 2-9.6 9.6"/>
            <circle cx="7.5" cy="15.5" r="5.5"/>
          </svg>
          <span className="tab-text">{translations.apiKeyTab}</span>
        </div>
        <div 
          className={`tab ${activeTab === 'automation' ? 'active' : ''}`} 
          onClick={() => onTabChange('automation')}
        >
          <svg className="tab-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="3" rx="2"/>
            <path d="m9 8 6 4-6 4Z"/>
          </svg>
          <span className="tab-text">{translations.automationTab}</span>
        </div>
        <div 
          className={`tab notice-tab-indicator ${activeTab === 'notice' ? 'active' : ''}`} 
          onClick={() => onTabChange('notice')}
        >
          <div className="tab-icon-container">
            <svg className="tab-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
            </svg>
            {hasNewNotices && (
              <span className="new-badge" id="noticeTabBadge"></span>
            )}
          </div>
          <span className="tab-text">{translations.noticeTab}</span>
        </div>
        <div 
          className={`tab ${activeTab === 'contact' ? 'active' : ''}`} 
          onClick={() => onTabChange('contact')}
        >
          <svg className="tab-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          <span className="tab-text">{translations.contactTab}</span>
        </div>
      </div>
    </div>
  )
}
