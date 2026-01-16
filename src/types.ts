export type Language = 'en' | 'zh-cn' | 'zh-tw' | 'ja';

export type MainTab = 'quickRecord' | 'apiKey' | 'automation' | 'notice' | 'contact';

export type ApiTab = 'siluFlow' | 'volcanicEngine' | 'custom';

export interface Translations {
  [key: string]: string;
}

export type NoticesByLang = Record<Language, Notice[]>;

export interface Notice {
  id: string;
  date: string;
  heading: string;
  content: string;
  buttonText?: string;
  buttonAction?: MainTab;
  urgent?: boolean;
  warning?: boolean;
  isNew?: boolean;
}
