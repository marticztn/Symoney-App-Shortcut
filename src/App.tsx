import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import './index.css'
import './symoney-css.css'
import type { Language, MainTab } from './types'
import { getTranslations } from './i18n'
import {
  Header,
  TabNavigation,
  QuickRecordTab,
  ApiKeyTab,
  AutomationTab,
  NoticeTab,
  ContactTab,
} from './components'

function App() {
  const [lang, setLang] = useState<Language>('zh-cn')
  const [tab, setTab] = useState<MainTab>('quickRecord')
  const panelsRef = useRef<HTMLDivElement>(null)
  const [panelHeight, setPanelHeight] = useState<number | undefined>()

  const t = useMemo(() => getTranslations(lang), [lang])

  useEffect(() => {
    document.title = t.headerTitle || 'Symoney Guide'
  }, [t])

  useLayoutEffect(() => {
    const container = panelsRef.current
    const activePanel = container?.querySelector<HTMLElement>('.tab-content.active')
    if (!activePanel) return

    let frame = 0
    const updateHeight = () => {
      if (frame) window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(() => {
        setPanelHeight(activePanel.scrollHeight)
      })
    }

    updateHeight()
    const resizeObserver = new ResizeObserver(updateHeight)
    resizeObserver.observe(activePanel)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      resizeObserver.disconnect()
    }
  }, [tab, lang])

  return (
    <div className="app-container">
      <Header
        currentLang={lang}
        onLanguageChange={setLang}
        translations={t}
      />

      <div className="main-content">
        <TabNavigation
          activeTab={tab}
          onTabChange={setTab}
          currentLang={lang}
          translations={t}
        />

        <div
          className="tab-panels"
          ref={panelsRef}
          style={panelHeight === undefined ? undefined : { height: panelHeight }}
        >
          <QuickRecordTab
            isActive={tab === 'quickRecord'}
            translations={t}
          />

          <ApiKeyTab
            isActive={tab === 'apiKey'}
            translations={t}
          />

          <AutomationTab
            isActive={tab === 'automation'}
            currentLang={lang}
            translations={t}
          />

          <NoticeTab
            isActive={tab === 'notice'}
            currentLang={lang}
            translations={t}
            onTabChange={setTab}
          />

          <ContactTab
            isActive={tab === 'contact'}
            translations={t}
          />
        </div>
      </div>
    </div>
  )
}

export default App
