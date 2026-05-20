import { useState } from 'react'
import type { MainTab, Notice, Translations } from '../../types'
import { IconChev, IconArrow } from '../Icons'

interface NoticeTabProps {
  translations: Translations
  onTabChange: (tab: MainTab) => void
}

function renderContent(content: string) {
  return content.split('\n\n').map((para, i) => (
    <p
      key={i}
      style={{ margin: i === 0 ? '0 0 10px' : '10px 0' }}
      dangerouslySetInnerHTML={{
        __html: para
          .replace(/\n/g, '<br/>')
          .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>'),
      }}
    />
  ))
}

export function NoticeTab({ translations: t, onTabChange }: NoticeTabProps) {
  const [openId, setOpenId] = useState<string | null>(t.notices[0]?.id ?? null)

  return (
    <div className="tab-content">
      <div className="panel-header">
        <h1>{t.noticeTitle}</h1>
      </div>
      <div className="notice-intro">{t.noticeIntro}</div>
      <div className="notice-list">
        {t.notices.map((n: Notice) => {
          const open = openId === n.id
          return (
            <div key={n.id} className={`notice ${n.warning ? 'warning' : ''} ${open ? 'open' : ''}`}>
              <div
                className="notice-head"
                onClick={() => setOpenId(open ? null : n.id)}
              >
                <div className="notice-main">
                  <span className="notice-heading">{n.heading}</span>
                  <span className="notice-date">{n.date}</span>
                </div>
                <div className="notice-head-meta">
                  {n.isNew && <span className="notice-badge new">NEW</span>}
                  <IconChev w={16} h={16} sw={1.8} className="notice-chev" />
                </div>
              </div>
              <div className="notice-body">
                <div className="notice-body-wrap">
                  <div className="notice-content">
                    {renderContent(n.content)}
                    {n.actionLabel && n.actionTab && (
                      <button
                        type="button"
                        className="notice-action"
                        onClick={() => onTabChange(n.actionTab!)}
                      >
                        <span>{n.actionLabel}</span>
                        <IconArrow w={14} h={14} sw={2} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
