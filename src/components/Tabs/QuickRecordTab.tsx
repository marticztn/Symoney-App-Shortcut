import { ShortcutButton } from '../UI/ShortcutButton'
import type { Translations } from '../../types'

interface QuickRecordTabProps {
  isActive: boolean
  translations: Translations
}

export function QuickRecordTab({ isActive, translations }: QuickRecordTabProps) {
  if (!isActive) return null

  const latestVersion = translations.shortcutVersionLatest || 'v1.1.0'
  const legacyVersion = translations.shortcutVersionLegacy || 'v1.0.1'
  const premiumVersion = translations.shortcutVersionPremium || 'v1.0.0'
  const latestRequirement = translations.shortcutLatestRequirement || 'Requires Symoney v1.6.0 or newer'
  const shortcut1Label =
    translations.shortcut1ShortText || translations.shortcut1Text || 'Assist Quick Record (OCR)'
  const shortcut2Label =
    translations.shortcut2ShortText || translations.shortcut2Text || 'Smart Quick Record'
  const historyLabelDetailed = `${translations.shortcutHistoryLabel || 'Shortcut version history'} · ${shortcut1Label}`
  const historyIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="13" r="7" />
      <polyline points="12 10 12 13 14 13" />
      <path d="M5 3 2 6" />
      <path d="m22 6-3-3" />
    </svg>
  )

  return (
    <div className={`card tab-content ${isActive ? 'active' : ''}`}>
      <h1>{translations.quickRecordTitle}</h1>
      <ol>
        <li>
          <span>{translations.step1}</span>
          <div className="shortcut-container">
            <div className="shortcut-grid">
              <div className="shortcut-column">
                <div className="shortcut-card">
                  <div className="shortcut-item">
                    <ShortcutButton
                      href="https://www.icloud.com/shortcuts/fdd4e3825c4d4e98a458f4e90332bc95"
                      text={shortcut1Label}
                    />
                    <div className="shortcut-meta">
                      <span className="shortcut-version">{latestVersion}</span>
                      <span className="shortcut-requirement">{latestRequirement}</span>
                    </div>
                  </div>
                </div>
                <details className="shortcut-history">
                  <summary>
                    <span className="shortcut-history-icon" aria-hidden="true">
                      {historyIcon}
                    </span>
                    <span className="shortcut-history-text">{historyLabelDetailed}</span>
                  </summary>
                  <div className="shortcut-history-list">
                    <div className="shortcut-item">
                        <ShortcutButton
                          href="https://www.icloud.com/shortcuts/f154d368bd4d4c27a22ea352d4e1b366"
                          text={translations.legacyShortcut1Text || 'Quick Record (OCR Assistive) – Legacy'}
                        />
                      <div className="shortcut-meta">
                        <span className="shortcut-version">{legacyVersion}</span>
                      </div>
                    </div>
                  </div>
                </details>
              </div>
              <div className="shortcut-column">
                <div className="shortcut-card premium-card">
                  <div className="shortcut-item">
                    <ShortcutButton
                      href="https://www.icloud.com/shortcuts/26b2c3440d1c4df2b123700c1e9a9582"
                      text={shortcut2Label}
                      isPremium={true}
                    />
                    <div className="shortcut-meta">
                      <span className="shortcut-version">{premiumVersion}</span>
                      <span className="shortcut-requirement">{translations.noteSmart}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>{translations.step2}</li>
        <li>{translations.step3}</li>
        <li>{translations.step4}</li>
        <li>{translations.step5}</li>
        <li>{translations.step6}</li>
        <li>{translations.step7}</li>
        <li>{translations.step8}</li>
      </ol>
      <hr />
      <p className="note">{translations.actionNote}</p>
    </div>
  )
}
