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
          <span>{translations.quickRecordTab}</span>
        </div>
        <div 
          className={`tab ${activeTab === 'apiKey' ? 'active' : ''}`} 
          onClick={() => onTabChange('apiKey')}
        >
          <span>{translations.apiKeyTab}</span>
        </div>
        <div 
          className={`tab notice-tab-indicator ${activeTab === 'notice' ? 'active' : ''}`} 
          onClick={() => onTabChange('notice')}
        >
          <span>{translations.noticeTab}</span>
          {hasNewNotices && (
            <span className="new-badge" id="noticeTabBadge">{translations.newBadge}</span>
          )}
        </div>
        <div 
          className={`tab ${activeTab === 'contact' ? 'active' : ''}`} 
          onClick={() => onTabChange('contact')}
        >
          <span>{translations.contactTab}</span>
        </div>
      </div>
    </div>
  )
}
