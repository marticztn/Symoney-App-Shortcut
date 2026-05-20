import { LanguageDropdown } from './LanguageDropdown'
import { IconApple } from '../Icons'
import type { Language, Translations } from '../../types'

interface HeaderProps {
  currentLang: Language
  onLanguageChange: (lang: Language) => void
  translations: Translations
}

export function Header({ currentLang, onLanguageChange, translations }: HeaderProps) {
  return (
    <header className="topbar">
      <div className="brand">
        <div className="brand-logo">
          <img src="/asset/logo.png" alt="Symoney" />
        </div>
        <div className="brand-text">
          <span className="brand-title-full">{translations.headerTitle}</span>
          <span className="brand-title-short">{translations.headerTitleShort}</span>
        </div>
      </div>
      <div className="topbar-actions">
        <a
          className="app-cta"
          href={translations.ctaHref}
          target="_blank"
          rel="noreferrer"
        >
          <IconApple w={14} h={14} />
          <span>{translations.ctaLabel}</span>
        </a>
        <LanguageDropdown
          currentLang={currentLang}
          onLanguageChange={onLanguageChange}
          translations={translations}
        />
      </div>
    </header>
  )
}
