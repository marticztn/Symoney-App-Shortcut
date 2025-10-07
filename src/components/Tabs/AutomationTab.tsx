import type { Language, Translations } from '../../types'

interface AutomationTabProps {
  isActive: boolean
  currentLang: Language
  translations: Translations
}

export function AutomationTab({ isActive, currentLang, translations }: AutomationTabProps) {
  if (!isActive) return null

  const setupVideo = currentLang === 'en' ? '/asset/videos/en_setup.MP4' : '/asset/videos/cn_setup.MP4'
  const automationVideo = currentLang === 'en' ? '/asset/videos/en_automation.mov' : '/asset/videos/cn_automation.MOV'

  return (
    <div className={`card tab-content ${isActive ? 'active' : ''}`}>
      <h1>{translations.automationTitle}</h1>
      <p style={{ textAlign: 'center', marginBottom: '20px' }}>{translations.automationIntro}</p>
      
      {/* SMS Example Section */}
      <div style={{ margin: '30px 0' }}>
        <h3 style={{ 
          fontSize: '1.1rem', 
          fontWeight: '600', 
          marginBottom: '12px',
          color: 'var(--text)'
        }}>
          📱 {translations.smsExampleTitle}
        </h3>
        <p style={{ 
          marginBottom: '15px', 
          color: 'var(--text-secondary)',
          fontSize: '0.95rem'
        }}>
          {translations.smsExampleDesc}
        </p>
        <div style={{
          background: '#f5f5f7',
          borderRadius: '12px',
          padding: '18px 22px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
          border: '1px solid #e5e5e7',
          marginBottom: '12px'
        }}>
          <div style={{
            color: '#1d1d1f',
            fontSize: '0.95rem',
            lineHeight: '1.6',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif'
          }}>
            {translations.smsExample}
          </div>
        </div>
        <p style={{
          fontSize: '0.875rem',
          color: 'var(--text-muted)',
          fontStyle: 'italic',
          textAlign: 'center',
          padding: '8px 0'
        }}>
          💡 {translations.automationTip}
        </p>
      </div>
      
      {/* Video Section with Card Layout */}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px',
        marginTop: '40px'
      }}>
        {/* Setup Video Card */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.5)',
          borderRadius: '16px',
          padding: '24px',
          border: '1px solid rgba(226, 232, 240, 0.6)',
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '8px',
            fontSize: '1.15rem'
          }}>
            {translations.setupVideoTitle}
          </h2>
          <p style={{ 
            textAlign: 'center',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            marginBottom: '20px',
            lineHeight: '1.5'
          }}>
            {translations.setupVideoDesc}
          </p>
          <video 
            key={setupVideo}
            controls 
            style={{ 
              width: '100%',
              maxWidth: '320px',
              borderRadius: '12px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
              display: 'block'
            }}
          >
            <source src={setupVideo} type="video/mp4" />
            {translations.videoNotSupported}
          </video>
        </div>

        {/* Automation Video Card */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.5)',
          borderRadius: '16px',
          padding: '24px',
          border: '1px solid rgba(226, 232, 240, 0.6)',
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '8px',
            fontSize: '1.15rem'
          }}>
            {translations.automationVideoTitle}
          </h2>
          <p style={{ 
            textAlign: 'center',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            marginBottom: '20px',
            lineHeight: '1.5'
          }}>
            {translations.automationVideoDesc}
          </p>
          <video 
            key={automationVideo}
            controls 
            style={{ 
              width: '100%',
              maxWidth: '320px',
              borderRadius: '12px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
              display: 'block'
            }}
          >
            <source src={automationVideo} type="video/mp4" />
            {translations.videoNotSupported}
          </video>
        </div>
      </div>
    </div>
  )
}

