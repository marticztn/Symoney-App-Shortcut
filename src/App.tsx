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
  BubbleBackground
} from './components'

function App() {
  const [lang, setLang] = useState<Language>('zh-cn')
  const [tab, setTab] = useState<MainTab>('quickRecord')

  const t = useMemo(() => getTranslations(lang), [lang])

  useEffect(() => {
    document.title = t.headerTitle || 'Symoney Guide'
  }, [t])

  return (
    <div className="app-container">
      <BubbleBackground />
      
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
  )
}

export default App
