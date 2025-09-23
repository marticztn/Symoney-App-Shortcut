import { ShortcutButton } from '../UI/ShortcutButton'
import type { Translations } from '../../types'

interface QuickRecordTabProps {
  isActive: boolean
  translations: Translations
}

export function QuickRecordTab({ isActive, translations }: QuickRecordTabProps) {
  if (!isActive) return null

  return (
    <div className={`card tab-content ${isActive ? 'active' : ''}`}>
      <h1>{translations.quickRecordTitle}</h1>
      <ol>
        <li>
          <span>{translations.step1}</span>
          <div className="shortcut-container">
            <ShortcutButton
              href="https://www.icloud.com/shortcuts/f154d368bd4d4c27a22ea352d4e1b366"
              text={translations.shortcut1Text || 'Download Shortcut'}
            />

            <div className="premium-shortcut">
              <ShortcutButton
                href="https://www.icloud.com/shortcuts/26b2c3440d1c4df2b123700c1e9a9582"
                text={translations.shortcut2Text || 'Download Premium Shortcut'}
                isPremium={true}
              />
              <div className="premium-note">{translations.noteSmart}</div>
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
