import { useEffect, useState } from 'react'
import { LanguageDropdown } from './LanguageDropdown'
import type { Language, Translations } from '../../types'

interface HeaderProps {
  currentLang: Language
  onLanguageChange: (lang: Language) => void
  translations: Translations
}

export function Header({ currentLang, onLanguageChange, translations }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
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
