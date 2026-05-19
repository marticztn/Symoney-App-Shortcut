import { useState, type ReactNode } from 'react'
import type { ApiTab, Translations } from '../../types'
import { IconLayers, IconFlame, IconSettings, IconExternal } from '../Icons'

interface ApiKeyTabProps {
  translations: Translations
}

function SiteLink({ href, text }: { href: string; text: string }) {
  return (
    <a className="site-link" href={href} target="_blank" rel="noreferrer">
      <IconExternal w={11} h={11} sw={2} />
      {text}
    </a>
  )
}

export function ApiKeyTab({ translations: t }: ApiKeyTabProps) {
  const [sub, setSub] = useState<ApiTab>('siluFlow')

  const subTabs: { id: ApiTab; label: string; icon: ReactNode }[] = [
    { id: 'siluFlow', label: t.siluFlow, icon: <IconLayers w={14} h={14} sw={1.6} /> },
    { id: 'volcanicEngine', label: t.volcanicEngine, icon: <IconFlame w={14} h={14} sw={1.6} /> },
    { id: 'custom', label: t.custom, icon: <IconSettings w={14} h={14} sw={1.4} /> },
  ]

  const renderSilu = () => (
    <>
      <h2>{t.siluFlow}</h2>
      <ol className="steps">
        <li>
          <span>{t.siluStep1}</span>
          <SiteLink href="https://cloud.siliconflow.cn/account/ak" text={t.officialSite} />
        </li>
        <li>{t.siluStep2}</li>
        <li>{t.siluStep3New}</li>
        <li>{t.siluStep5}</li>
        <li>{t.siluStep6}</li>
        <li>{t.siluStep7}</li>
        <li>{t.copyToSymoney}</li>
      </ol>
    </>
  )

  const renderVolcanic = () => (
    <>
      <h2>{t.volcanicEngine}</h2>
      <ol className="steps">
        <li>
          <span>{t.volcanicStep1}</span>
          <SiteLink href="https://console.volcengine.com/ark" text={t.officialSite} />
        </li>
        <li>{t.volcanicStep2}</li>
        <li>{t.volcanicStep3New}</li>
        <li>{t.volcanicStep4New}</li>
        <li>{t.volcanicStep5New}</li>
        <li>{t.copyToSymoney}</li>
      </ol>
    </>
  )

  const renderCustom = () => (
    <>
      <h2>{t.custom}</h2>
      <p className="panel-intro">{t.customIntro}</p>
      <div className="provider-list">
        {t.customProviderList.map((p) => (
          <div key={p.name} className="provider-row">
            <div className="provider-row-top">
              <span className="provider-name">{p.name}</span>
              <span className="provider-models">{p.models}</span>
            </div>
            <div className="provider-url">{p.url}</div>
          </div>
        ))}
      </div>
      <div className="url-notice">{t.customUrlNotice}</div>
      <ol className="steps">
        <li>{t.customStep1}</li>
        <li>{t.customStep2}</li>
        <li>{t.customStep3}</li>
        <li>{t.copyToSymoneyCustom}</li>
      </ol>
    </>
  )

  return (
    <div className="tab-content">
      <div className="panel-header">
        <h1>{t.apiKeyTitle}</h1>
        <p className="panel-intro">{t.apiKeyIntro}</p>
      </div>
      <div className="subtabs" role="tablist">
        {subTabs.map((s) => (
          <button
            key={s.id}
            role="tab"
            type="button"
            aria-selected={sub === s.id}
            className={`subtab ${sub === s.id ? 'active' : ''}`}
            onClick={() => setSub(s.id)}
          >
            {s.icon}
            <span>{s.label}</span>
          </button>
        ))}
      </div>
      <div key={sub} className="sub-panel">
        {sub === 'siluFlow' && renderSilu()}
        {sub === 'volcanicEngine' && renderVolcanic()}
        {sub === 'custom' && renderCustom()}
      </div>
    </div>
  )
}
