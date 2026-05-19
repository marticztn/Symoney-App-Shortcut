import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import type { Language, Translations } from '../../types'
import { LANGUAGES } from '../../types'
import { IconGlobe, IconChev } from '../Icons'

interface LanguageDropdownProps {
  currentLang: Language
  onLanguageChange: (lang: Language) => void
  translations: Translations
}

export function LanguageDropdown({
  currentLang,
  onLanguageChange,
  translations,
}: LanguageDropdownProps) {
  const [open, setOpen] = useState(false)
  const [pos, setPos] = useState({ top: 0, right: 0 })
  const wrapRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!open || !btnRef.current) return
    const r = btnRef.current.getBoundingClientRect()
    setPos({ top: r.bottom + 8, right: window.innerWidth - r.right })
  }, [open])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node
      if (
        wrapRef.current &&
        !wrapRef.current.contains(target) &&
        menuRef.current &&
        !menuRef.current.contains(target)
      ) {
        setOpen(false)
      }
    }
    const scroll = () => setOpen(false)
    document.addEventListener('mousedown', handler)
    window.addEventListener('scroll', scroll, true)
    return () => {
      document.removeEventListener('mousedown', handler)
      window.removeEventListener('scroll', scroll, true)
    }
  }, [])

  const currentLabel = translations.name

  const menu = createPortal(
    <div
      ref={menuRef}
      className={`lang-menu-portal ${open ? 'open' : ''}`}
      style={{ top: pos.top, right: pos.right }}
      role="listbox"
    >
      {LANGUAGES.map(([k, label]) => (
        <button
          key={k}
          type="button"
          className={`lang-item ${k === currentLang ? 'active' : ''}`}
          onClick={() => {
            onLanguageChange(k)
            setOpen(false)
          }}
        >
          <span>{label}</span>
        </button>
      ))}
    </div>,
    document.body
  )

  return (
    <div className={`lang ${open ? 'open' : ''}`} ref={wrapRef}>
      <button
        ref={btnRef}
        type="button"
        className="lang-btn"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <IconGlobe w={14} h={14} sw={1.6} />
        <span>{currentLabel}</span>
        <IconChev w={12} h={12} sw={2} className="chev-icon" />
      </button>
      {menu}
    </div>
  )
}
