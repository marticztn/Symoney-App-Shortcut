import type { ReactNode, SVGProps } from 'react'

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> {
  w?: number
  h?: number
  sw?: number
  d?: string
  fill?: string
  children?: ReactNode
}

function SolidIcon({
  d,
  fill: _fill,
  sw: _sw,
  w = 16,
  h = 16,
  children,
  ...rest
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...rest}
    >
      {d ? <path d={d} /> : children}
    </svg>
  )
}

function LineIcon({
  d,
  fill = 'none',
  sw = 1.6,
  w = 16,
  h = 16,
  children,
  ...rest
}: IconProps) {
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
      aria-hidden="true"
      {...rest}
    >
      {d ? <path d={d} /> : children}
    </svg>
  )
}

export const IconGlobe = (p: IconProps) => (
  <SolidIcon {...p}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-8 9h3.1c.12-2.1.6-4 1.4-5.55A8.05 8.05 0 0 0 4 11Zm0 2a8.05 8.05 0 0 0 4.5 5.55C7.7 17 7.22 15.1 7.1 13H4Zm5.1-2h5.8C14.65 6.95 13.42 4 12 4s-2.65 2.95-2.9 7Zm0 2c.25 4.05 1.48 7 2.9 7s2.65-2.95 2.9-7H9.1Zm7.8-2H20a8.05 8.05 0 0 0-4.5-5.55c.8 1.55 1.28 3.45 1.4 5.55Zm0 2c-.12 2.1-.6 4-1.4 5.55A8.05 8.05 0 0 0 20 13h-3.1Z"
    />
  </SolidIcon>
)

export const IconChev = (p: IconProps) => (
  <SolidIcon
    {...p}
    d="M12 15.6a1.2 1.2 0 0 1-.85-.35L5.7 9.8a1.1 1.1 0 0 1 1.55-1.55L12 13l4.75-4.75A1.1 1.1 0 1 1 18.3 9.8l-5.45 5.45c-.23.23-.53.35-.85.35Z"
  />
)

export const IconDownload = (p: IconProps) => (
  <SolidIcon {...p}>
    <path d="M11 3.5a1 1 0 0 1 2 0v8.1l2.25-2.25a1.06 1.06 0 0 1 1.5 1.5l-4 4a1.06 1.06 0 0 1-1.5 0l-4-4a1.06 1.06 0 0 1 1.5-1.5L11 11.6V3.5Z" />
    <path d="M5 18a1.5 1.5 0 0 1 1.5-1.5h11A1.5 1.5 0 0 1 19 18v.5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V18Z" />
  </SolidIcon>
)

export const IconExternal = (p: IconProps) => (
  <SolidIcon {...p}>
    <path d="M13 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.4l-8.3 8.3a1 1 0 0 1-1.4-1.4L17.6 5H14a1 1 0 0 1-1-1Z" />
    <path d="M5.5 6A2.5 2.5 0 0 0 3 8.5v10A2.5 2.5 0 0 0 5.5 21h10a2.5 2.5 0 0 0 2.5-2.5V14a1 1 0 1 0-2 0v4.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5H10a1 1 0 1 0 0-2H5.5Z" />
  </SolidIcon>
)

export const IconSparkle = (p: IconProps) => (
  <SolidIcon
    {...p}
    d="M12 2.6a1 1 0 0 1 1 .78l1.36 5.76 5.76 1.36a1 1 0 0 1 0 1.95l-5.76 1.36L13 19.57a1 1 0 0 1-1.95 0l-1.36-5.76-5.76-1.36a1 1 0 0 1 0-1.95l5.76-1.36 1.36-5.76A1 1 0 0 1 12 2.6Z"
  />
)

export const IconHistory = (p: IconProps) => (
  <LineIcon {...p}>
    <circle cx="12" cy="13" r="7" />
    <path d="M12 10v3l2 2" />
    <path d="M5 3 2 6" />
    <path d="m22 6-3-3" />
  </LineIcon>
)

export const IconLayers = (p: IconProps) => (
  <SolidIcon {...p}>
    <path d="M11.6 2.3a1 1 0 0 1 .8 0l9.1 4.5a.9.9 0 0 1 0 1.6l-9.1 4.5a1 1 0 0 1-.8 0L2.5 8.4a.9.9 0 0 1 0-1.6l9.1-4.5Z" />
    <path d="m3.5 11.5 8.1 4a1 1 0 0 0 .8 0l8.1-4 1 .5a.9.9 0 0 1 0 1.6l-9.1 4.5a1 1 0 0 1-.8 0l-9.1-4.5a.9.9 0 0 1 0-1.6l1-.5Z" />
    <path d="m3.5 16.4 8.1 4a1 1 0 0 0 .8 0l8.1-4 1 .5a.9.9 0 0 1 0 1.6L12.4 23a1 1 0 0 1-.8 0l-9.1-4.5a.9.9 0 0 1 0-1.6l1-.5Z" />
  </SolidIcon>
)

export const IconFlame = (p: IconProps) => (
  <SolidIcon
    {...p}
    d="M12.2 22c4.2-.9 6.9-4.1 6.9-8.4 0-3-1.6-5.2-3.2-7.3-.5-.7-1.6-.5-1.8.4-.4 1.6-1.5 2.7-2.8 3.6-.8-.9-1.2-2.1-1.2-3.7 0-1-1.2-1.5-1.9-.8-2 2-3.4 4.8-3.4 8 0 4.2 2.8 7.2 7.4 8.2Z"
  />
)

export const IconSettings = (p: IconProps) => (
  <SolidIcon {...p}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.7 2.5a1.3 1.3 0 0 1 2.6 0l.25 1.45c.45.14.88.32 1.29.54l1.2-.85a1.3 1.3 0 0 1 1.84.24l1.24 1.24a1.3 1.3 0 0 1 .24 1.84l-.85 1.2c.22.41.4.84.54 1.29l1.45.25a1.3 1.3 0 0 1 0 2.6l-1.45.25c-.14.45-.32.88-.54 1.29l.85 1.2a1.3 1.3 0 0 1-.24 1.84l-1.24 1.24a1.3 1.3 0 0 1-1.84.24l-1.2-.85c-.41.22-.84.4-1.29.54l-.25 1.45a1.3 1.3 0 0 1-2.6 0l-.25-1.45a7.1 7.1 0 0 1-1.29-.54l-1.2.85a1.3 1.3 0 0 1-1.84-.24l-1.24-1.24a1.3 1.3 0 0 1-.24-1.84l.85-1.2a7.1 7.1 0 0 1-.54-1.29l-1.45-.25a1.3 1.3 0 0 1 0-2.6l1.45-.25c.14-.45.32-.88.54-1.29l-.85-1.2a1.3 1.3 0 0 1 .24-1.84l1.24-1.24a1.3 1.3 0 0 1 1.84-.24l1.2.85c.41-.22.84-.4 1.29-.54l.25-1.45ZM12 15.4a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8Z"
    />
  </SolidIcon>
)

export const IconKey = (p: IconProps) => (
  <SolidIcon {...p}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.3 21.2a6 6 0 1 1 4.4-10.1l7-7a1.3 1.3 0 0 1 1.8 0l2.1 2.1a1 1 0 0 1 0 1.4l-1.8 1.8-2-2-1.3 1.3 2 2-1.8 1.8-2-2-2.4 2.4A6 6 0 0 1 7.3 21.2Zm0-3.9a2.1 2.1 0 1 0 0-4.2 2.1 2.1 0 0 0 0 4.2Z"
    />
  </SolidIcon>
)

export const IconZap = (p: IconProps) => (
  <SolidIcon
    {...p}
    d="M13.5 2.1 4.2 13.8a1 1 0 0 0 .8 1.6h5.2l-.8 6a.9.9 0 0 0 1.6.7l8.9-11.8a1 1 0 0 0-.8-1.6h-5l1-5.9a.9.9 0 0 0-1.6-.7Z"
  />
)

export const IconBell = (p: IconProps) => (
  <SolidIcon {...p}>
    <path d="M12 2.2a6.2 6.2 0 0 0-6.2 6.2v3.2c0 1.8-.8 3.4-2.1 4.7a1.1 1.1 0 0 0 .8 1.9h15a1.1 1.1 0 0 0 .8-1.9 6.5 6.5 0 0 1-2.1-4.7V8.4A6.2 6.2 0 0 0 12 2.2Z" />
    <path d="M9.6 20a2.6 2.6 0 0 0 4.8 0H9.6Z" />
  </SolidIcon>
)

export const IconMail = (p: IconProps) => (
  <LineIcon {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 7L2 7" />
  </LineIcon>
)

export const IconUser = (p: IconProps) => (
  <SolidIcon {...p}>
    <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
    <path d="M3.6 21.3c.8-4.2 4.1-7.1 8.4-7.1s7.6 2.9 8.4 7.1a1 1 0 0 1-1 1.2H4.6a1 1 0 0 1-1-1.2Z" />
  </SolidIcon>
)

export const IconPlay = (p: IconProps) => <SolidIcon {...p} d="M7 5v14l12-7z" />

export const IconPhone = (p: IconProps) => (
  <SolidIcon {...p}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 2h8a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3Zm2.8 17.2a.8.8 0 0 0 0 1.6h2.4a.8.8 0 0 0 0-1.6h-2.4Z"
    />
  </SolidIcon>
)

export const IconArrow = (p: IconProps) => (
  <SolidIcon
    {...p}
    d="M13.2 5.3a1 1 0 0 1 1.4 0l5.8 5.8a1.3 1.3 0 0 1 0 1.8l-5.8 5.8a1 1 0 0 1-1.4-1.4l3.8-3.8H4.6a1.5 1.5 0 0 1 0-3H17l-3.8-3.8a1 1 0 0 1 0-1.4Z"
  />
)

export const IconZapSolid = IconZap
export const IconKeySolid = IconKey
export const IconLayersSolid = IconLayers
export const IconBellSolid = IconBell
export const IconUserSolid = IconUser

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
