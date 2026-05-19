import { Collapsible } from '../UI/Collapsible'
import { IconDownload, IconSparkle } from '../Icons'
import type { Translations } from '../../types'

interface QuickRecordTabProps {
  translations: Translations
}

export function QuickRecordTab({ translations: t }: QuickRecordTabProps) {
  return (
    <div className="tab-content">
      <div className="panel-header">
        <h1>{t.quickRecordTitle}</h1>
        <p className="panel-intro">{t.quickRecordIntro}</p>
      </div>

      <h2 style={{ marginTop: 12 }}>{t.step1}</h2>
      <div className="shortcut-grid">
        <div className="shortcut-card">
          <div className="shortcut-label-row">
            <div className="shortcut-label">{t.shortcut1Label}</div>
          </div>
          <a
            className="shortcut-btn"
            href="https://www.icloud.com/shortcuts/dc2530bb708b466787cbcaad3146c1cb"
            target="_blank"
            rel="noreferrer"
          >
            <IconDownload w={14} h={14} sw={1.8} />
            <span>{t.shortcut1Label}</span>
          </a>
          <div className="shortcut-meta">
            <span className="version-chip">v1.2.0</span>
            <span className="shortcut-req">{t.latestRequirement}</span>
          </div>
          <Collapsible summary={`${t.shortcutHistoryLabel} · ${t.shortcut1Label}`}>
            <div className="history-item">
              <a
                className="shortcut-btn"
                href="https://www.icloud.com/shortcuts/2c75417075354224b8ef7b7e40577b6b"
                target="_blank"
                rel="noreferrer"
              >
                <IconDownload w={14} h={14} sw={1.8} />
                <span>{t.shortcut1Label}</span>
              </a>
              <div className="shortcut-meta">
                <span className="version-chip">v1.1.0</span>
                <span className="shortcut-req">{t.legacyOcrRequirement}</span>
              </div>
            </div>
            <div className="history-item">
              <a
                className="shortcut-btn"
                href="https://www.icloud.com/shortcuts/407f5298ea4242b3a246ba45e4c90db8"
                target="_blank"
                rel="noreferrer"
              >
                <IconDownload w={14} h={14} sw={1.8} />
                <span>{t.shortcut1Label}</span>
              </a>
              <div className="shortcut-meta">
                <span className="version-chip">v1.0.1</span>
                <span className="shortcut-req">{t.legacyRequirement}</span>
              </div>
            </div>
          </Collapsible>
        </div>

        <div className="shortcut-card premium">
          <div className="shortcut-label-row">
            <div className="shortcut-label">{t.shortcut2Label}</div>
            <span className="shortcut-tag">{t.shortcut2Tag}</span>
          </div>
          <a
            className="shortcut-btn premium"
            href="https://www.icloud.com/shortcuts/60059be1484e43d196b11d3d2ee30095"
            target="_blank"
            rel="noreferrer"
          >
            <IconSparkle w={14} h={14} sw={1.8} />
            <span>{t.shortcut2Label}</span>
          </a>
          <div className="shortcut-meta">
            <span className="version-chip">v1.1.0</span>
            <span className="shortcut-req">{t.smartRequirement}</span>
          </div>
          <Collapsible summary={`${t.shortcutHistoryLabel} · ${t.shortcut2Label}`}>
            <div className="history-item">
              <a
                className="shortcut-btn premium"
                href="https://www.icloud.com/shortcuts/18f8c4c31ced4eb88c0380e37fbbfeb6"
                target="_blank"
                rel="noreferrer"
              >
                <IconSparkle w={14} h={14} sw={1.8} />
                <span>{t.shortcut2Label}</span>
              </a>
              <div className="shortcut-meta">
                <span className="version-chip">v1.0.0</span>
                <span className="shortcut-req">{t.legacyRequirement}</span>
              </div>
            </div>
          </Collapsible>
        </div>
      </div>

      <ol className="steps">
        <li>{t.step2}</li>
        <li>{t.step3}</li>
        <li>{t.step4}</li>
        <li>{t.step5}</li>
        <li>{t.step6}</li>
        <li>{t.step7}</li>
        <li>{t.step8}</li>
      </ol>

      <p
        style={{
          marginTop: 18,
          fontSize: 13,
          color: 'var(--ink-3)',
          textAlign: 'center',
          fontStyle: 'italic',
        }}
      >
        {t.actionNote}
      </p>
    </div>
  )
}
