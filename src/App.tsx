import { useEffect, useMemo, useState } from 'react'
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

  const t = useMemo(() => getTranslations(lang), [lang])

  useEffect(() => {
    document.title = t.headerTitle
  }, [t])

  const renderTab = () => {
    switch (tab) {
      case 'quickRecord':
        return <QuickRecordTab translations={t} />
      case 'apiKey':
        return <ApiKeyTab translations={t} />
      case 'automation':
        return <AutomationTab currentLang={lang} translations={t} />
      case 'notice':
        return <NoticeTab translations={t} onTabChange={setTab} />
      case 'contact':
        return <ContactTab translations={t} />
    }
  }

  return (
    <div className="app">
      <div className="aurora" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-4" />
      </div>

      <Header currentLang={lang} onLanguageChange={setLang} translations={t} />

      <main className="shell">
        <div className="hero">
          <h1>
            {t.heroTitle} <span className="italic">{t.heroTitleItalic}</span>
          </h1>
          <p>{t.heroIntro}</p>
        </div>

        <TabNavigation
          activeTab={tab}
          onTabChange={setTab}
          currentLang={lang}
          translations={t}
        />

        <div className="panel">
          <div key={tab + lang}>{renderTab()}</div>
        </div>

        <div className="footer">
          <span>© {new Date().getFullYear()} Symoney · </span>
          <a href="mailto:fuzzyerazhu@gmail.com">fuzzyerazhu@gmail.com</a>
        </div>
      </main>
    </div>
  )
}

export default App
