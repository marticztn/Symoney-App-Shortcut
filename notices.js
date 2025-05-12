/**
 * Symoney Notices
 * This file contains all notices to be displayed in the app
 * Notices are stored in reverse chronological order (newest first)
 */

const notices = {
  "en": [
    {
      id: "notice4",
      date: "May 12, 2025",
      heading: "v1.1.84 users need to download the new shortcuts",
      content: "For 'Symoney+' users who have upgraded to v1.1.84, please go to the 'Quick Record' tab on this page to get the latest shortcuts, and delete the previously downloaded shortcuts. Otherwise, Natural Language Recording/Smart Quick Record will not work. Thank you!",
      buttonText: "Go to Quick Record",
      buttonAction: "quickRecord",
      urgent: true,
      isNew: true
    },
    {
      id: "notice3",
      date: "May 11, 2025",
      heading: "Smart Quick Record (Shortcut) / Natural Language Recording Unavailable",
      content: "Due to a sudden surge of users on May 9th and 10th, the servers for Smart Quick Record and Natural Language Recording could not handle the unexpected high traffic, resulting in service outages. I have temporarily taken down the servers and redesigned the logic for these two recording methods (users now need to provide their own API Key, see API Key tutorial for details). The new version has been submitted to Apple for review (v1.1.84). Please be patient while we await approval. Thank you for your support of Symoney!",
      buttonText: "View API Key Guide",
      buttonAction: "apiKey",
      urgent: true,
      isNew: true
    },
    {
      id: "notice2",
      date: "May 10, 2025",
      heading: "GitHub Website Access Issues",
      content: "Some users have reported that GitHub websites are inaccessible in mainland China. This may be due to DNS issues. You can try changing your device's DNS settings or using a VPN to access the site. We apologize for any inconvenience this may cause!",
      urgent: false,
      isNew: false
    },
    {
      id: "notice1",
      date: "May 10, 2025",
      heading: "Welcome to Symoney Guide",
      content: "Thank you for using Symoney! This guide provides instructions for quick expense recording using iOS shortcuts and API key setup for advanced features. I will be continuously updating this guide with new features and improvements. If you have any questions, please contact me.",
      urgent: false,
      isNew: false
    }
  ],
  "zh-cn": [
    {
      id: "notice4",
      date: "2025年5月12日",
      heading: "v1.1.84版本需要重新下载新的快捷指令",
      content: "已经升级到v1.1.84版本的「简钱+」用户，请前往本网页的「快速记账」选项卡，获取最新的快捷指令，并删除之前下载的快捷指令，否则自然语言记账/智能快速记账将无法使用，谢谢！",
      buttonText: "前往快速记账",
      buttonAction: "quickRecord",
      urgent: true,
      isNew: true
    },
    {
      id: "notice3",
      date: "2025年5月11日",
      heading: "智能快速记账（快捷指令）/ 自然语言记账 不可用的问题",
      content: "9号至10号，由于大量用户呈爆发式的涌入app，智能快速记账和自然语言记账的服务器无法承受突如其来的大流量，最终导致宕机。我已暂时撤下服务器，并且重新设计了这两种记账方式的使用逻辑（需要用户自行提供API Key来使用，详见API密钥教程），新版本已经提交苹果审核（v1.1.84），还请大家耐心等待。感谢大家对简钱的支持！",
      buttonText: "查看API密钥教程",
      buttonAction: "apiKey",
      urgent: true,
      isNew: true
    },
    {
      id: "notice2",
      date: "2025年5月10日",
      heading: "GitHub网页无法打开的问题",
      content: "有用户反馈GitHub网页在中国大陆地区无法访问的情况，有可能是DNS导致的，可以尝试修改设备的DNS，或者使用梯子进行访问。抱歉给大家带来的不便！",
      urgent: false,
      isNew: false
    },
    {
      id: "notice1",
      date: "2025年5月10日",
      heading: "欢迎使用简钱指南",
      content: "感谢您使用简钱！本指南提供了使用 iOS 快捷指令进行快速记账和设置 API 密钥以使用高级功能的说明。我将不断更新本指南，添加新功能和改进。如果您有任何疑问，请联系我。",
      urgent: false,
      isNew: false
    }
  ],
  "zh-tw": [
    {
      id: "notice4",
      date: "2025年5月12日",
      heading: "v1.1.84版本需要重新下載新的捷徑",
      content: "已經升級到v1.1.84版本的「簡錢+」用戶，請前往本網頁的「快速記帳」選項卡，獲取最新的捷徑，並刪除之前下載的捷徑，否則自然語言記帳/智能快速記帳將無法使用，謝謝！",
      buttonText: "前往快速記帳",
      buttonAction: "quickRecord",
      urgent: true,
      isNew: true
    },
    {
      id: "notice3",
      date: "2025年5月11日",
      heading: "智能快速記帳（捷徑）/ 自然語言記帳 不可用的問題",
      content: "9號至10號，由於大量用戶呈爆發式的湧入app，智能快速記帳和自然語言記帳的服務器無法承受突如其來的大流量，最終導致宕機。我已暫時撤下服務器，並且重新設計了這兩種記帳方式的使用邏輯（需要用戶自行提供API Key來使用，詳見API金鑰教程），新版本已經提交蘋果審核（v1.1.84），還請大家耐心等待。感謝大家對簡錢的支持！",
      buttonText: "查看API金鑰教程",
      buttonAction: "apiKey",
      urgent: true,
      isNew: true
    },
    {
      id: "notice2",
      date: "2025年5月10日",
      heading: "GitHub網頁無法打開的問題",
      content: "有用戶反饋GitHub網頁在中國大陸地區無法訪問的情況，有可能是DNS導致的，可以嘗試修改設備的DNS，或者使用梯子進行訪問。抱歉給大家帶來的不便！",
      urgent: false,
      isNew: false
    },
    {
      id: "notice1",
      date: "2025年5月10日",
      heading: "歡迎使用簡錢指南",
      content: "感謝您使用簡錢！本指南提供了使用 iOS 捷徑進行快速記帳和設置 API 金鑰以使用高級功能的說明。我將不斷更新本指南，添加新功能和改進。如果您有任何疑問，請聯繫我。",
      urgent: false,
      isNew: false
    }
  ]
};

// Common translations for notice-related text
const noticeTranslations = {
  "en": {
    "noticeTab": "Notices",
    "noticeTitle": "Notices",
    "noticeIntro": "This is the official announcement board for Symoney. Here you'll find important updates, feature releases, and other critical information about the app. Please check this page regularly for the latest news.",
    "newBadge": "NEW"
  },
  "zh-cn": {
    "noticeTab": "公告",
    "noticeTitle": "公告",
    "noticeIntro": "这是简钱 Symoney 的官方公告板。在这里，您可以找到重要更新、功能发布和其他关于应用的关键信息。请定期查看此页面以获取最新消息。",
    "newBadge": "新"
  },
  "zh-tw": {
    "noticeTab": "公告",
    "noticeTitle": "公告",
    "noticeIntro": "這是簡錢 Symoney 的官方公告板。在這裡，您可以找到重要更新、功能發布和其他關於應用的關鍵信息。請定期查看此頁面以獲取最新消息。",
    "newBadge": "新"
  }
};
