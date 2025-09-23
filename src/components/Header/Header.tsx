import { LanguageDropdown } from './LanguageDropdown'
import type { Language, Translations } from '../../types'

interface HeaderProps {
  currentLang: Language
  onLanguageChange: (lang: Language) => void
  translations: Translations
}

export function Header({ currentLang, onLanguageChange, translations }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-left">
        <div className="header-logo">
          <img src="/asset/symoney_logo_rounded.svg" alt="Symoney Logo" />
        </div>
        <div className="header-title">{translations.headerTitle}</div>
      </div>

      <LanguageDropdown 
        currentLang={currentLang}
        onLanguageChange={onLanguageChange}
      />
    </header>
  )
}
