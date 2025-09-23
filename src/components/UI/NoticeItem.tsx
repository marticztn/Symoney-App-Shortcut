import type { Notice, MainTab, Translations } from '../../types'

interface NoticeItemProps {
  notice: Notice
  translations: Translations
  onTabChange: (tab: MainTab) => void
}

export function NoticeItem({ notice, translations, onTabChange }: NoticeItemProps) {
  const handleClick = () => {
    if (notice.isNew) {
      const viewed = JSON.parse(localStorage.getItem('symoneyViewedNotices') || '{}') as Record<string, number>
      if (!viewed[notice.id]) {
        viewed[notice.id] = Date.now()
        localStorage.setItem('symoneyViewedNotices', JSON.stringify(viewed))
      }
    }
  }

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (notice.buttonAction) {
      onTabChange(notice.buttonAction)
    }
  }

  return (
    <div 
      className={`notice-item${notice.urgent ? ' urgent' : ''}${notice.warning ? ' warning' : ''}`} 
      onClick={handleClick}
    >
      <div className="notice-date">{notice.date}</div>
      <h3 className="notice-heading">
        <span>{notice.heading}</span>
        {notice.isNew && <span className="notice-new">{translations.newBadge}</span>}
      </h3>
      <div className="notice-content">
        {notice.content}
        {notice.buttonText && notice.buttonAction && (
          <div className="read-more-link">
            <a href="#" onClick={handleButtonClick}>
              {notice.buttonText}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
