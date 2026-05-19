import { useEffect, useLayoutEffect, useRef, useState, useCallback, type ReactElement } from 'react'
import type { Language, MainTab, Translations } from '../../types'
import { IconZap, IconSettings, IconLayers, IconBell, IconUser } from '../Icons'

interface TabNavigationProps {
  activeTab: MainTab
  onTabChange: (tab: MainTab) => void
  currentLang: Language
  translations: Translations
}

type TabDef = {
  id: MainTab
  labelKey: keyof Translations
  Icon: (p: { w?: number; h?: number; sw?: number }) => ReactElement
  hasNew?: boolean
}

const TABS: TabDef[] = [
  { id: 'quickRecord', labelKey: 'quickRecordTab', Icon: IconZap },
  { id: 'apiKey', labelKey: 'apiKeyTab', Icon: IconSettings },
  { id: 'automation', labelKey: 'automationTab', Icon: IconLayers },
  { id: 'notice', labelKey: 'noticeTab', Icon: IconBell, hasNew: true },
  { id: 'contact', labelKey: 'contactTab', Icon: IconUser },
]

export function TabNavigation({
  activeTab,
  onTabChange,
  currentLang,
  translations,
}: TabNavigationProps) {
  const tabbarRef = useRef<HTMLDivElement>(null)
  const refs = useRef<Record<string, HTMLButtonElement | null>>({})
  const [pill, setPill] = useState({ x: 0, w: 0, ready: false })

  const refSettersRef = useRef<Record<string, (el: HTMLButtonElement | null) => void>>({})
  const setTabRef = (id: MainTab) => {
    if (!refSettersRef.current[id]) {
      refSettersRef.current[id] = (el) => {
        refs.current[id] = el
      }
    }
    return refSettersRef.current[id]
  }

  const activeTabRef = useRef(activeTab)
  activeTabRef.current = activeTab

  const measure = useCallback(() => {
    const el = refs.current[activeTabRef.current]
    if (!el || el.offsetWidth === 0) return
    setPill((prev) => {
      const next = { x: el.offsetLeft, w: el.offsetWidth, ready: true }
      if (prev.x === next.x && prev.w === next.w && prev.ready) return prev
      return next
    })
  }, [])

  useLayoutEffect(() => {
    measure()
  }, [activeTab, currentLang, translations, measure])

  useEffect(() => {
    let raf = 0
    const recompute = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(measure)
    }

    window.addEventListener('resize', recompute)
    window.addEventListener('orientationchange', recompute)

    let ro: ResizeObserver | undefined
    if (typeof ResizeObserver !== 'undefined' && tabbarRef.current) {
      ro = new ResizeObserver(recompute)
      ro.observe(tabbarRef.current)
      Object.values(refs.current).forEach((b) => b && ro!.observe(b))
    }

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(recompute)
    }

    const t1 = setTimeout(recompute, 60)
    const t2 = setTimeout(recompute, 300)

    return () => {
      window.removeEventListener('resize', recompute)
      window.removeEventListener('orientationchange', recompute)
      cancelAnimationFrame(raf)
      clearTimeout(t1)
      clearTimeout(t2)
      ro?.disconnect()
    }
  }, [measure])

  return (
    <div className="tabbar-wrap">
      <div className="tabbar" role="tablist" ref={tabbarRef}>
        <div
          className={`tab-pill ${pill.ready ? 'ready' : ''}`}
          style={{ transform: `translateX(${pill.x}px)`, width: pill.w }}
          aria-hidden="true"
        />
        {TABS.map((tab) => {
          const { Icon } = tab
          return (
            <button
              key={tab.id}
              ref={setTabRef(tab.id)}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => onTabChange(tab.id)}
            >
              <Icon w={15} h={15} sw={1.6} />
              <span>{translations[tab.labelKey] as string}</span>
              {tab.hasNew && <span className="dot-new" />}
            </button>
          )
        })}
      </div>
    </div>
  )
}
