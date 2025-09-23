interface ContactSectionProps {
  icon: React.ReactNode
  label: string
  value: React.ReactNode
}

export function ContactSection({ icon, label, value }: ContactSectionProps) {
  return (
    <div className="contact-section">
      <div className="contact-icon">
        {icon}
      </div>
      <div className="contact-content">
        <div className="contact-label">{label}</div>
        <div className="contact-value">
          {value}
        </div>
      </div>
    </div>
  )
}
