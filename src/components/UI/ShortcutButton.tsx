interface ShortcutButtonProps {
  href: string
  text: string
  isPremium?: boolean
  icon?: React.ReactNode
}

export function ShortcutButton({ href, text, isPremium = false, icon }: ShortcutButtonProps) {
  const defaultIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7,10 12,15 17,10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  )

  const premiumIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 12 2 2 4-4"/>
      <path d="M21 12c.552 0 1-.448 1-1V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6c0 .552.448 1 1 1"/>
      <path d="M3 10v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6"/>
    </svg>
  )

  return (
    <a 
      href={href} 
      target="_blank" 
      className={`shortcut-button ${isPremium ? 'premium' : ''}`}
    >
      {icon || (isPremium ? premiumIcon : defaultIcon)}
      <span>{text}</span>
    </a>
  )
}
