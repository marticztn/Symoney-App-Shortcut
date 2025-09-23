interface SocialCardProps {
  icon: React.ReactNode
  title: string
  qrImageSrc: string
  qrImageAlt: string
  note: string
}

export function SocialCard({ icon, title, qrImageSrc, qrImageAlt, note }: SocialCardProps) {
  return (
    <div className="social-card">
      <div className="social-card-header">
        <div className="social-icon">
          {icon}
        </div>
        <div className="social-title">{title}</div>
      </div>
      <div className="social-card-body">
        <div className="qr-container">
          <img src={qrImageSrc} alt={qrImageAlt} className="qr-code" />
        </div>
        <div className="social-note">{note}</div>
      </div>
    </div>
  )
}
