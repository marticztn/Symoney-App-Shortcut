import { useState } from 'react'
import { SiteLink } from '../UI/SiteLink'
import type { ApiTab, Translations } from '../../types'

interface ApiKeyTabProps {
  isActive: boolean
  translations: Translations
}

export function ApiKeyTab({ isActive, translations }: ApiKeyTabProps) {
  const [apiTab, setApiTab] = useState<ApiTab>('siluFlow')
  const isSiluFlow = apiTab === 'siluFlow'
  const isVolcanicEngine = apiTab === 'volcanicEngine'
  const isCustom = apiTab === 'custom'

  return (
    <div className={`card tab-content ${isActive ? 'active' : ''}`}>
      <h1>{translations.apiKeyTitle}</h1>

      <div className="api-sub-tabs" role="tablist" aria-label={translations.apiKeyTitle}>
        <button
          type="button"
          role="tab"
          aria-selected={isSiluFlow}
          className={`api-sub-tab ${isSiluFlow ? 'active' : ''}`}
          onClick={() => setApiTab('siluFlow')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="m2 17 10 5 10-5"/>
            <path d="m2 12 10 5 10-5"/>
          </svg>
          <span className="api-sub-tab-text">{translations.siluFlow}</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={isVolcanicEngine}
          className={`api-sub-tab ${isVolcanicEngine ? 'active' : ''}`}
          onClick={() => setApiTab('volcanicEngine')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m8 2 1.88 1.88"/>
            <path d="M14.12 3.88 16 2"/>
            <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/>
            <path d="M12 20c-3 0-6-1-6-1l-.835-7.467a2 2 0 0 1 .465-1.533H18.37a2 2 0 0 1 .465 1.533L18 19s-3 1-6 1Z"/>
          </svg>
          <span className="api-sub-tab-text">{translations.volcanicEngine}</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={isCustom}
          className={`api-sub-tab ${isCustom ? 'active' : ''}`}
          onClick={() => setApiTab('custom')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
          <span className="api-sub-tab-text">{translations.custom}</span>
        </button>
      </div>

      <div className="api-sub-panels">
        {/* Silicon Flow Tab */}
        <div className={`api-sub-content ${isSiluFlow ? 'active' : ''}`} role="tabpanel">
          <h2>{translations.siluFlowTitle}</h2>
          <ol>
            <li>
              <span>{translations.siluStep1}</span>
              <SiteLink
                href="https://cloud.siliconflow.cn/account/ak"
                text={translations.officialSite}
              />
            </li>
            <li>{translations.siluStep2}</li>
            <li>{translations.siluStep3New}</li>
            <li>{translations.siluStep5}</li>
            <li>{translations.siluStep6}</li>
            <li>{translations.siluStep7}</li>
            <li>{translations.copyToSymoney}</li>
          </ol>
        </div>

        {/* Volcanic Engine Tab */}
        <div className={`api-sub-content ${isVolcanicEngine ? 'active' : ''}`} role="tabpanel">
          <h2>{translations.volcanicEngineTitle}</h2>
          <ol>
            <li>
              <span>{translations.volcanicStep1}</span>
              <SiteLink
                href="https://console.volcengine.com/ark"
                text={translations.officialSite}
              />
            </li>
            <li>{translations.volcanicStep2}</li>
            <li>{translations.volcanicStep3New}</li>
            <li>{translations.volcanicStep4New}</li>
            <li>{translations.volcanicStep5New}</li>
            <li>{translations.copyToSymoney}</li>
          </ol>
        </div>

        {/* Custom Tab */}
        <div className={`api-sub-content ${isCustom ? 'active' : ''}`} role="tabpanel">
          <h2>{translations.customTitle}</h2>
          <p className="custom-intro">{translations.customIntro}</p>
          <div className="provider-list" dangerouslySetInnerHTML={{ __html: translations.customProviderList || '' }} />
          <div className="url-notice" dangerouslySetInnerHTML={{ __html: translations.customUrlNotice || '' }} />
          <ol>
            <li>{translations.customStep1}</li>
            <li>{translations.customStep2}</li>
            <li>{translations.customStep3}</li>
            <li>{translations.copyToSymoneyCustom || translations.copyToSymoney}</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
