import { useState, type ReactNode } from 'react'
import { IconHistory, IconChev } from '../Icons'

interface CollapsibleProps {
  summary: ReactNode
  children: ReactNode
  defaultOpen?: boolean
}

export function Collapsible({ summary, children, defaultOpen = false }: CollapsibleProps) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className={`collapsible ${open ? 'open' : ''}`}>
      <button
        type="button"
        className="collapsible-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <IconHistory w={14} h={14} sw={1.4} />
        <span>{summary}</span>
        <IconChev w={14} h={14} sw={1.6} className="chev" />
      </button>
      <div className="collapsible-body">
        <div className="collapsible-inner-wrap">
          <div className="collapsible-inner">{children}</div>
        </div>
      </div>
    </div>
  )
}
