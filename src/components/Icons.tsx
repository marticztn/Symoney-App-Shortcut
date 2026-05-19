import type { SVGProps, ReactNode } from 'react'

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> {
  w?: number
  h?: number
  sw?: number
  d?: string
  fill?: string
  children?: ReactNode
}

function Icon({ d, w = 16, h = 16, sw = 1.6, fill = 'none', children, ...rest }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      {d ? <path d={d} /> : children}
    </svg>
  )
}

export const IconGlobe = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18" />
  </Icon>
)

export const IconChev = (p: IconProps) => (
  <Icon {...p}>
    <path d="m6 9 6 6 6-6" />
  </Icon>
)

export const IconDownload = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3v12" />
    <path d="m7 10 5 5 5-5" />
    <path d="M5 21h14" />
  </Icon>
)

export const IconExternal = (p: IconProps) => (
  <Icon {...p}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </Icon>
)

export const IconSparkle = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3 13.5 9.5 20 11 13.5 12.5 12 19 10.5 12.5 4 11 10.5 9.5 12 3Z" />
  </Icon>
)

export const IconHistory = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="13" r="7" />
    <path d="M12 10v3l2 2" />
    <path d="M5 3 2 6" />
    <path d="m22 6-3-3" />
  </Icon>
)

export const IconLayers = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 2 2 7l10 5 10-5-10-5z" />
    <path d="m2 17 10 5 10-5" />
    <path d="m2 12 10 5 10-5" />
  </Icon>
)

export const IconFlame = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 22c4-1 6-4 6-8 0-3-2-5-3-7-1 2-3 3-4 4-1-1-2-2-2-4-2 2-3 4-3 7 0 4 2 7 6 8Z" />
  </Icon>
)

export const IconSettings = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
  </Icon>
)

export const IconZap = (p: IconProps) => (
  <Icon {...p}>
    <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
  </Icon>
)

export const IconBell = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a2 2 0 0 0 3.4 0" />
  </Icon>
)

export const IconMail = (p: IconProps) => (
  <Icon {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 7L2 7" />
  </Icon>
)

export const IconUser = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </Icon>
)

export const IconPlay = (p: IconProps) => (
  <Icon {...p} fill="currentColor">
    <path d="M7 5v14l12-7z" />
  </Icon>
)

export const IconPhone = (p: IconProps) => (
  <Icon {...p}>
    <rect x="5" y="2" width="14" height="20" rx="3" />
    <path d="M11 18h2" />
  </Icon>
)

export const IconArrow = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </Icon>
)

export const IconApple = (p: Omit<IconProps, 'fill'>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={p.w ?? 14}
    height={p.h ?? 14}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...p}
  >
    <path d="M16.4 12.8c0-2.7 2.2-4 2.3-4-1.2-1.8-3.2-2-3.9-2.1-1.7-.2-3.2 1-4.1 1-.9 0-2.1-1-3.5-.9-1.8 0-3.5 1-4.4 2.7-1.9 3.2-.5 8 1.3 10.6.9 1.3 2 2.7 3.4 2.7 1.4-.1 1.9-.9 3.5-.9s2.1.9 3.5.9c1.5 0 2.4-1.3 3.3-2.6 1.1-1.5 1.5-3 1.5-3-.1 0-2.9-1.1-2.9-4.4zM13.8 5c.8-1 1.3-2.3 1.1-3.6-1.1.1-2.4.8-3.2 1.7-.7.8-1.4 2.1-1.2 3.4 1.2.1 2.5-.6 3.3-1.5z" />
  </svg>
)
