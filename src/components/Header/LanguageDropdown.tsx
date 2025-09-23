import { useState, useEffect } from 'react'
import type { Language } from '../../types'

interface LanguageDropdownProps {
  currentLang: Language
  onLanguageChange: (lang: Language) => void
}

export function LanguageDropdown({ currentLang, onLanguageChange }: LanguageDropdownProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('.language-dropdown')) setDropdownOpen(false)
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])

  const handleLanguageSelect = (lang: Language) => {
    onLanguageChange(lang)
    setDropdownOpen(false)
  }

  const getLanguageLabel = (lang: Language) => {
    switch (lang) {
      case 'en': return 'English'
      case 'zh-cn': return '简体中文'
      case 'zh-tw': return '繁體中文'
      default: return 'English'
    }
  }

  return (
    <div className={`language-dropdown ${dropdownOpen ? 'open' : ''}`}>
      <button className="dropdown-button" onClick={() => setDropdownOpen(v => !v)}>
        <span className="dropdown-button-text">
          {getLanguageLabel(currentLang)}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div className="dropdown-content">
        <div 
          className={`dropdown-item ${currentLang === 'en' ? 'active' : ''}`} 
          onClick={() => handleLanguageSelect('en')}
        >
          English
        </div>
        <div 
          className={`dropdown-item ${currentLang === 'zh-cn' ? 'active' : ''}`} 
          onClick={() => handleLanguageSelect('zh-cn')}
        >
          简体中文
        </div>
        <div 
          className={`dropdown-item ${currentLang === 'zh-tw' ? 'active' : ''}`} 
          onClick={() => handleLanguageSelect('zh-tw')}
        >
          繁體中文
        </div>
      </div>
    </div>
  )
}
