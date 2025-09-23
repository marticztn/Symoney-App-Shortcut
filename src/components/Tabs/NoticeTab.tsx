import { NoticeItem } from '../UI/NoticeItem'
import { notices } from '../../notices'
import type { Language, MainTab, Translations } from '../../types'

interface NoticeTabProps {
  isActive: boolean
  currentLang: Language
  translations: Translations
  onTabChange: (tab: MainTab) => void
}

export function NoticeTab({ isActive, currentLang, translations, onTabChange }: NoticeTabProps) {
  if (!isActive) return null

  return (
    <div className={`card tab-content ${isActive ? 'active' : ''}`}>
      <h1>{translations.noticeTitle}</h1>
      <div className="notice-intro">{translations.noticeIntro}</div>
      <div className="notice-container" id="noticeContainer">
        {notices[currentLang]?.map((notice) => (
          <NoticeItem
            key={notice.id}
            notice={notice}
            translations={translations}
            onTabChange={onTabChange}
          />
        ))}
      </div>
    </div>
  )
}
