import { useState } from 'react'
import { SiteLink } from '../UI/SiteLink'
import type { ApiTab, Translations } from '../../types'

interface ApiKeyTabProps {
  isActive: boolean
  translations: Translations
}

export function ApiKeyTab({ isActive, translations }: ApiKeyTabProps) {
  const [apiTab, setApiTab] = useState<ApiTab>('siluFlow')

  if (!isActive) return null

  return (
    <div className={`card tab-content ${isActive ? 'active' : ''}`}>
      <h1>{translations.apiKeyTitle}</h1>

      <div className="api-sub-tabs">
        <div 
          className={`api-sub-tab ${apiTab === 'siluFlow' ? 'active' : ''}`} 
          onClick={() => setApiTab('siluFlow')}
        >
          <span>{translations.siluFlow}</span>
        </div>
        <div 
          className={`api-sub-tab ${apiTab === 'volcanicEngine' ? 'active' : ''}`} 
          onClick={() => setApiTab('volcanicEngine')}
        >
          <span>{translations.volcanicEngine}</span>
        </div>
        <div 
          className={`api-sub-tab ${apiTab === 'custom' ? 'active' : ''}`} 
          onClick={() => setApiTab('custom')}
        >
          <span>{translations.custom}</span>
        </div>
      </div>

      {/* Silicon Flow Tab */}
      <div className={`api-sub-content ${apiTab === 'siluFlow' ? 'active' : ''}`}>
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
      <div className={`api-sub-content ${apiTab === 'volcanicEngine' ? 'active' : ''}`}>
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
          <li>{translations.volcanicStep6New}</li>
          <li>{translations.copyToSymoney}</li>
        </ol>
      </div>

      {/* Custom Tab */}
      <div className={`api-sub-content ${apiTab === 'custom' ? 'active' : ''}`}>
        <div className="url-notice" dangerouslySetInnerHTML={{ __html: translations.customUrlNotice || '' }} />
        <h2>{translations.customTitle}</h2>
        <ol>
          <li>{translations.customStep1}</li>
          <li>{translations.customStep2}</li>
          <li>{translations.customStep3}</li>
          <li>{translations.copyToSymoneyCustom || translations.copyToSymoney}</li>
        </ol>
      </div>
    </div>
  )
}
