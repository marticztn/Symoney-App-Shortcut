export type Language = 'en' | 'zh-cn' | 'zh-tw' | 'ja'

export type MainTab = 'quickRecord' | 'apiKey' | 'automation' | 'notice' | 'contact'

export type ApiTab = 'siluFlow' | 'volcanicEngine' | 'custom'

export interface Notice {
  id: string
  date: string
  heading: string
  content: string
  warning?: boolean
  isNew?: boolean
  actionLabel?: string
  actionTab?: MainTab
}

export interface ProviderEntry {
  name: string
  url: string
  models: string
}

export interface Translations {
  name: string
  nameShort: string
  headerTitle: string
  headerTitleShort: string
  ctaLabel: string
  ctaHref: string
  heroTitle: string
  heroTitleItalic: string
  heroIntro: string

  quickRecordTab: string
  apiKeyTab: string
  automationTab: string
  noticeTab: string
  contactTab: string

  quickRecordTitle: string
  quickRecordIntro: string
  step1: string
  shortcut1Label: string
  shortcut2Label: string
  shortcut2Tag: string
  shortcutHistoryLabel: string
  legacyRequirement: string
  latestRequirement: string
  legacyOcrRequirement: string
  smartRequirement: string
  step2: string
  step3: string
  step4: string
  step5: string
  step6: string
  step7: string
  step8: string
  actionNote: string

  apiKeyTitle: string
  apiKeyIntro: string
  siluFlow: string
  volcanicEngine: string
  custom: string
  officialSite: string
  siluStep1: string
  siluStep2: string
  siluStep3New: string
  siluStep5: string
  siluStep6: string
  siluStep7: string
  copyToSymoney: string
  copyToSymoneyCustom: string
  volcanicStep1: string
  volcanicStep2: string
  volcanicStep3New: string
  volcanicStep4New: string
  volcanicStep5New: string
  customIntro: string
  customProviderList: ProviderEntry[]
  customUrlNotice: string
  customStep1: string
  customStep2: string
  customStep3: string

  automationTitle: string
  automationIntro: string
  smsExampleTitle: string
  smsExampleDesc: string
  smsExample: string
  automationTip: string
  setupVideoTitle: string
  setupVideoDesc: string
  automationVideoTitle: string
  automationVideoDesc: string

  noticeTitle: string
  noticeIntro: string
  notices: Notice[]

  contactTitle: string
  contactIntro: string
  authorEmail: string
  discordServer: string
  redbookGroup: string
  wechatGroup: string
  scanToJoin: string
  communityHeading: string
}

export const LANGUAGES: [Language, string][] = [
  ['zh-cn', '简体中文'],
  ['zh-tw', '繁體中文'],
  ['en', 'English'],
  ['ja', '日本語'],
]
