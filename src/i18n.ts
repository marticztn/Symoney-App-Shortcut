import type { Language, Translations } from './types'

const translations: Record<Language, Translations> = {
  'zh-cn': {
    name: '简体中文',
    nameShort: '简中',
    headerTitle: '简钱 Symoney® 指南',
    headerTitleShort: '简钱 Symoney® 指南',
    ctaLabel: '下载 App',
    ctaHref:
      'https://apps.apple.com/cn/app/%E7%AE%80%E9%92%B1-symoney-%E8%BD%BB%E7%9B%88%E4%BC%98%E9%9B%85%E7%9A%84%E4%B8%AA%E4%BA%BA%E8%AE%B0%E8%B4%A6%E6%9C%AC/id6502937308',
    heroTitle: '让记账变得',
    heroTitleItalic: '更轻盈',
    heroIntro: '通过快捷指令与自动化，让简钱在你需要的时候，一触即记。',
    quickRecordTab: '快速记账',
    apiKeyTab: 'API 密钥',
    automationTab: '自动化',
    noticeTab: '公告',
    contactTab: '联系',
    quickRecordTitle: '快速记账指南',
    quickRecordIntro:
      '使用 iOS 快捷指令，无需打开 App 即可完成一笔记账。轻点手机背面两下，或按下 Action Button，一切交给捷径。',
    step1: '获取快捷指令',
    shortcut1Label: '辅助快速记账 (OCR)',
    shortcut2Label: '智能快速记账',
    shortcut3Label: '语音记账',
    shortcut2Tag: '简钱+',
    shortcutHistoryLabel: '历史版本',
    legacyRequirement: '适用于旧版本简钱',
    latestRequirement: '需要将简钱更新至 v1.7.4 及以上版本',
    legacyOcrRequirement: '适用于简钱 v1.6.0 - v1.7.3',
    smartRequirement: '需要将简钱更新至 v1.7.0 及以上版本',
    step2: '打开 iOS 「设置」',
    step3: '进入 「辅助功能」',
    step4: '点击 「触控」',
    step5: '滑到最下面，点击 「轻点背面」',
    step6: '点击 「轻点两下」',
    step7: '滑动到最下面找到刚才下载的快捷指令',
    step8: '配置完成。轻点两下手机背部即可快速记账',
    actionNote: 'iPhone 15 Pro 及以上的用户，也可将快捷指令绑定到 Action Button。',
    apiKeyTitle: 'API 密钥申请',
    apiKeyIntro: '智能快速记账由大语言模型驱动，需要你自行准备 API 密钥。选择下方任一服务商完成接入。',
    siluFlow: '硅基流动',
    volcanicEngine: '火山引擎',
    custom: '自定义',
    officialSite: '官方网站',
    siluStep1: '访问硅基流动官方网站',
    siluStep2: '注册或登录您的账户',
    siluStep3New: '进入控制台，左侧面板中选择「API 密钥」，然后点击「新建 API 密钥」',
    siluStep5: '设置使用限制和权限',
    siluStep6: '确认并生成您的 API 密钥',
    siluStep7: '复制并安全保存您的 API 密钥',
    copyToSymoney: '打开简钱 App，进入 设置 › 快速记账 › 智能，将 API 密钥粘贴到相应字段',
    copyToSymoneyCustom:
      '打开简钱 App，进入 设置 › 快速记账 › 智能 › 自定义服务商，将上述三个字段的信息填入',
    volcanicStep1: '前往火山引擎开发者平台',
    volcanicStep2: '注册或登录您的开发者账户',
    volcanicStep3New: '控制台左侧面板向下滑动，选择「API Key 管理」，点击「创建 API Key」并填写名称',
    volcanicStep4New: '在控制台左侧面板中，选择「开通管理」',
    volcanicStep5New: '点击右上角「一键开通所有模型」，再点击「确定开通与授权」',
    customIntro:
      '本功能支持兼容 OpenAI Chat Completions 格式的服务。填入兼容的基础地址即可，/chat/completions 简钱会自动补全。',
    customProviderList: [
      { name: 'OpenAI', url: 'https://api.openai.com/v1', models: 'gpt-4o, gpt-4o-mini' },
      { name: 'DeepSeek', url: 'https://api.deepseek.com/v1', models: 'deepseek-chat' },
      {
        name: 'Gemini',
        url: 'https://generativelanguage.googleapis.com/v1beta/openai',
        models: 'gemini-2.0-flash',
      },
      { name: 'Groq', url: 'https://api.groq.com/openai/v1', models: 'llama-3.3-70b-versatile' },
      { name: 'Moonshot (Kimi)', url: 'https://api.moonshot.cn/v1', models: 'moonshot-v1-8k' },
      { name: 'OpenRouter', url: 'https://openrouter.ai/api/v1', models: '支持多种模型' },
    ],
    customUrlNotice:
      'URL 必须以 http:// 或 https:// 开头，并包含路径或版本前缀。例如 https://api.openai.com/v1，而非 https://api.openai.com。请不要填写 /messages、/responses 等原生接口。',
    customStep1: '输入 OpenAI 兼容的基础地址',
    customStep2: '输入模型名称',
    customStep3: '输入 API Key',
    automationTitle: '自动化记账',
    automationIntro: '选择适合你的触发方式，把简钱接入 iOS 自动化，在交易发生后自动完成记账。',
    smsTriggerTitle: '短信触发',
    smsTriggerDesc: '收到包含交易信息的银行短信时，通过 iOS 自动化调用简钱完成记账。',
    smsExampleTitle: '短信示例',
    smsExampleDesc: '当您收到类似这样的交易短信时，简钱可以自动识别并记账：',
    smsExample: '您尾号 0841 的信用卡于 25 年 10 月 07 日 10:30 消费人民币 288.89 元【中国银行】',
    automationTip: 'Email 同理。欢迎探索更多自动化场景，发现简钱的更多玩法。',
    setupVideoTitle: '快捷指令设置',
    setupVideoDesc: '在 iOS「设置」中完成快捷指令的全部配置流程',
    automationVideoTitle: '自动化演示',
    automationVideoDesc: '查看自动化记账在实际场景中的运行效果',
    notificationTriggerTitle: '通知触发',
    notificationTriggerDesc: '下载专用快捷指令，按照指引完成配置，即可使用通知触发自动记账。',
    notificationShortcutLabel: '下载「通知触发」快捷指令',
    notificationShortcutHint: '添加到「快捷指令」后，按照其中的提示完成自动化配置。',
    notificationRequirement: '仅支持 iOS 27 及以上版本',
    noticeTitle: '公告',
    noticeIntro:
      '这里是简钱的官方公告板。重要更新、功能发布与关键说明都会发布于此，欢迎定期关注。',
    contactTitle: '与我联系',
    contactIntro: '有任何关于简钱的问题或反馈，欢迎通过以下任一渠道联系我。',
    authorEmail: '电子邮件',
    discordServer: 'Discord 官方服务器',
    redbookGroup: '小红书用户群',
    wechatGroup: '微信用户群',
    scanToJoin: '扫码加入群聊',
    communityHeading: '用户社群',
    notices: [
      {
        "id": "n7",
        "date": "2026.09.26",
        "heading": "关于账单消失与数据恢复的说明",
        "warning": true,
        "isNew": true,
        "content": "如果账单突然不见了，并不一定代表数据已被永久删除。可能的原因包括 iCloud 账户变化、数据重置、备份恢复，以及筛选或同步状态。请根据以下情况核对。",
        "sections": [
          {
            "heading": "可能导致数据丢失的情况",
            "items": [
              {
                "title": "退出 iCloud，或在系统设置关闭简钱的 iCloud 权限",
                "content": "简钱的账单、账户、分类和图片由 iCloud 同步框架管理。退出 iCloud 或关闭系统中的 App iCloud 权限时，本机数据可能被清除，尚未上传的数据也可能受影响。已上传的数据在重新连接原账户后可能同步回来；没有上传且没有备份的数据可能无法恢复。这里指 iPhone 系统设置中的操作；简钱 App 内的同步开关没有直接清空数据的逻辑。"
              },
              {
                "title": "执行「重置 App」，包括在其他设备上操作",
                "content": "「重置 App」会删除云端数据，并在下次启动时清除本地数据库。相同 iCloud 账户下开启同步的其他设备也可能受到影响，因此即使当前手机没有操作，也需要确认其他设备是否执行过重置或删除。重置会保留已有备份文件。"
              },
              {
                "title": "恢复旧备份、空备份或内容异常的备份",
                "content": "恢复备份会替换当前数据，不会与现有账单合并。恢复旧备份会失去备份之后新增的数据，恢复空备份会清空现有数据。当前恢复流程对部分异常备份的校验仍不充分，也可能在未提示错误的情况下清空数据。恢复前请先另存当前数据，并确认所选备份的日期、来源和完整性。"
              },
              {
                "title": "删除 App 后重新安装，或换机时没有可恢复的数据",
                "content": "如果此前未成功同步，也没有独立备份，删除 App 后本机数据可能无法找回。iCloud 不可用时，自动备份会保存在 App 本地；这类备份也会随删除 App 一起移除。换机前，请确认云端同步情况，或将备份另存到 App 以外的位置。"
              }
            ]
          },
          {
            "heading": "也可能只是账单暂未显示",
            "items": [
              {
                "title": "日期或筛选条件发生变化",
                "content": "首页显示当前选定日期的账单。请先检查日期，以及是否开启了仅支出或仅收入筛选；当前页面为空，不代表其他日期的账单也被删除。"
              },
              {
                "title": "iCloud 数据尚未下载完成",
                "content": "重新安装或换机后，云端数据需要时间下载到本机。请确认使用原来的 iCloud 账户、简钱的 iCloud 权限已开启且网络正常，再等待同步。尚未显示的账单不一定已经丢失。"
              },
              {
                "title": "数据读取失败",
                "content": "部分读取失败的情况目前也可能显示为空列表，界面尚不能完全区分「读取失败」和「没有账单」。目前未发现正常版本更新会主动清空全部账单的逻辑，因此不能仅凭空白页面判断 App 已被初始化。"
              }
            ]
          }
        ],
        "source": {
          "label": "参考：Apple 工程师对 iCloud 账户变化与本机数据清理的说明",
          "href": "https://developer.apple.com/forums/thread/811294"
        },
        "actionLabel": "联系开发者",
        "actionTab": "contact"
      },
      {
        id: 'n6',
        date: '2025.11.27',
        heading: '切换 Apple ID 后「简钱+」订阅消失的解决办法',
        warning: true,
        isNew: true,
        content:
          '如果您的简钱+订阅突然消失，很可能是因为切换到了其他 Apple ID 或地区。订阅是与购买时使用的 Apple ID 绑定的，这是 App Store 的标准机制。\n\n**方法一：切换回原购买账号**\n重新登录购买「简钱+」时使用的 Apple ID。如果切换后仍未显示，请进入 App 设置 → 点击右上角「简钱+」黑色按钮 → 点击「恢复购买」。\n\n**方法二：在当前账号恢复购买**\n进入 App 设置 → 点击「简钱+」 → 「恢复购买」。出现「未找到订阅」时再次点击，会弹出 Apple ID 登录窗口，使用原购买账号登录即可。\n\n**方法三：申请兑换码（需联系开发者）**\n向我发送原 Apple ID 的购买凭证，我会提供兑换码，在新账号的 App Store 兑换可获得永久订阅。受苹果限制，单期最多 300 个，无法保证所有请求都能满足。',
      },
      {
        id: 'n5',
        date: '2025.06.03',
        heading: '关于第三方账单导入的误区',
        content:
          '近期反馈第三方账单无法导入，大多是尝试导入简钱尚未支持的记账软件所导出的账单（例如：小青账）。虽然格式多为 .csv，但不同软件的列定义不同，简钱可能无法识别。每个软件都需单独适配，敬请谅解。另外，iCost 导出的 .xlsx 需要先转为 UTF-8 编码的 .csv 才能正常导入。',
      },
      {
        id: 'n4',
        date: '2025.05.12',
        heading: 'v1.1.84+ 用户需要重新下载新的快捷指令',
        actionLabel: '前往快速记账',
        actionTab: 'quickRecord',
        content:
          '已升级到 v1.1.84+ 的「简钱+」用户，请前往本网页的「快速记账」选项卡获取最新快捷指令，并删除之前下载的，否则自然语言记账 / 智能快速记账将无法使用，谢谢！',
      },
      {
        id: 'n3',
        date: '2025.05.11',
        heading: '智能快速记账 / 自然语言记账 不可用的问题',
        actionLabel: '查看 API 密钥教程',
        actionTab: 'apiKey',
        content:
          '9 号至 10 号，由于大量用户呈爆发式涌入，智能快速记账和自然语言记账的服务器无法承受突如其来的大流量导致宕机。我已重新设计了这两种记账方式，用户需自行提供 API Key（详见 API 密钥教程）。新版本已提交苹果审核（v1.1.84+），感谢大家的支持！',
      },
      {
        id: 'n1',
        date: '2025.05.10',
        heading: '欢迎使用简钱指南',
        content:
          '感谢您使用简钱！本指南提供了 iOS 快捷指令快速记账与 API 密钥设置的说明。我将持续更新，添加新功能与改进。',
      },
    ],
  },
  en: {
    name: 'English',
    nameShort: 'EN',
    headerTitle: 'Symoney® Guide',
    headerTitleShort: 'Symoney Guide',
    ctaLabel: 'Get the App',
    ctaHref:
      'https://apps.apple.com/us/app/%E7%B0%A1%E9%8C%A2-symoney-personal-finance/id6502937308',
    heroTitle: 'Bookkeeping made',
    heroTitleItalic: 'effortless',
    heroIntro: 'Record an expense with one tap. Powered by iOS Shortcuts and on-device automation.',
    quickRecordTab: 'Quick Record',
    apiKeyTab: 'API Key',
    automationTab: 'Automation',
    noticeTab: 'Notices',
    contactTab: 'Contact',
    quickRecordTitle: 'Quick Record Guide',
    quickRecordIntro:
      'Use an iOS Shortcut to log expenses without opening the app. Double-tap the back of your phone, or press your Action Button, and the rest is automatic.',
    step1: 'Get the shortcut',
    shortcut1Label: 'Quick Record (OCR)',
    shortcut2Label: 'Smart Quick Record',
    shortcut3Label: 'Voice Record',
    shortcut2Tag: 'Symoney+',
    shortcutHistoryLabel: 'Version history',
    legacyRequirement: 'For legacy Symoney versions',
    latestRequirement: 'Requires Symoney v1.7.4 or above',
    legacyOcrRequirement: 'Requires Symoney v1.6.0 to v1.7.3',
    smartRequirement: 'Requires Symoney v1.7.0 or above',
    step2: 'Open iOS Settings',
    step3: 'Go to Accessibility',
    step4: 'Tap Touch',
    step5: 'Scroll to the bottom and tap Back Tap',
    step6: 'Tap Double Tap',
    step7: 'Scroll down and find the shortcut you just downloaded',
    step8: 'Done. Double-tap the back of your phone to record.',
    actionNote: 'iPhone 15 Pro and later: you can also bind the shortcut to the Action Button.',
    apiKeyTitle: 'API Key Setup',
    apiKeyIntro:
      'Smart Quick Record is powered by an LLM and requires your own API key. Choose a provider below to get started.',
    siluFlow: 'Silicon Flow',
    volcanicEngine: 'Volcano Engine',
    custom: 'Custom',
    officialSite: 'Official site',
    siluStep1: 'Visit the Silicon Flow website',
    siluStep2: 'Sign up or log in',
    siluStep3New: 'In the console, choose "API Keys" in the left panel, then "Create new API Key"',
    siluStep5: 'Set usage limits and permissions',
    siluStep6: 'Confirm and generate your key',
    siluStep7: 'Copy and securely store the key',
    copyToSymoney: 'Open Symoney → Settings → Quick Record → Smart, paste your API key in the field',
    copyToSymoneyCustom:
      'Open Symoney → Settings → Quick Record → Smart → Custom provider, fill in all three fields',
    volcanicStep1: 'Go to the Volcano Engine developer portal',
    volcanicStep2: 'Sign up or sign in',
    volcanicStep3New:
      'Scroll down in the left panel, choose "API Key Management", click "Create API Key"',
    volcanicStep4New: 'In the left panel, choose "Activation Management"',
    volcanicStep5New: 'Click "Activate All Models" at the top right, then "Confirm Activation"',
    customIntro:
      "This feature supports any service compatible with OpenAI's Chat Completions format. Symoney will auto-append /chat/completions when needed.",
    customProviderList: [
      { name: 'OpenAI', url: 'https://api.openai.com/v1', models: 'gpt-4o, gpt-4o-mini' },
      { name: 'DeepSeek', url: 'https://api.deepseek.com/v1', models: 'deepseek-chat' },
      {
        name: 'Gemini',
        url: 'https://generativelanguage.googleapis.com/v1beta/openai',
        models: 'gemini-2.0-flash',
      },
      { name: 'Groq', url: 'https://api.groq.com/openai/v1', models: 'llama-3.3-70b-versatile' },
      { name: 'Moonshot', url: 'https://api.moonshot.cn/v1', models: 'moonshot-v1-8k' },
      { name: 'OpenRouter', url: 'https://openrouter.ai/api/v1', models: 'many models' },
    ],
    customUrlNotice:
      'URL must start with http:// or https:// and include the path/version prefix. For example, https://api.openai.com/v1, not https://api.openai.com. Avoid native endpoints like /messages or /responses.',
    customStep1: 'Enter the OpenAI-compatible base URL',
    customStep2: 'Enter the model name',
    customStep3: 'Enter your API Key',
    automationTitle: 'Automation',
    automationIntro:
      'Choose a trigger and connect Symoney to iOS Automations to record transactions automatically.',
    smsTriggerTitle: 'Message Trigger',
    smsTriggerDesc: 'When a bank transaction message arrives, an iOS Automation can send it to Symoney for recording.',
    smsExampleTitle: 'Message Example',
    smsExampleDesc: 'When a transaction SMS like this arrives, Symoney parses and records it on its own:',
    smsExample: 'VISA: Purchase of $315.00 at APPLE STORE on Oct 7, 2025 10:30 AM. Card ending 0841.',
    automationTip: 'Email works the same way. Get creative with your automations.',
    setupVideoTitle: 'Shortcut Setup',
    setupVideoDesc: 'The full configuration flow inside iOS Settings',
    automationVideoTitle: 'Automation Demo',
    automationVideoDesc: 'See the automation in action',
    notificationTriggerTitle: 'Notification Trigger',
    notificationTriggerDesc:
      'Download the dedicated shortcut and follow its guide to record transactions from notifications.',
    notificationShortcutLabel: 'Download Notification Trigger Shortcut',
    notificationShortcutHint: 'Add it to Shortcuts, then follow the prompts to finish the automation setup.',
    notificationRequirement: 'Requires iOS 27 or later',
    noticeTitle: 'Notices',
    noticeIntro:
      'The official board for Symoney. Releases, important fixes, and key information, all in one place.',
    contactTitle: 'Get in touch',
    contactIntro: 'Questions or feedback about Symoney? Reach out through any of the channels below.',
    authorEmail: 'Email',
    discordServer: 'Discord Server',
    redbookGroup: 'Xiaohongshu Group',
    wechatGroup: 'WeChat Group',
    scanToJoin: 'Scan to join',
    communityHeading: 'Community',
    notices: [
      {
        "id": "n7",
        "date": "2026.09.26",
        "heading": "Missing records: data loss and recovery",
        "warning": true,
        "isNew": true,
        "content": "If your records suddenly disappear, they may not be permanently deleted. Possible causes include iCloud account changes, an app reset, restoring a backup, or the current filters and sync state. Check the situations below.",
        "sections": [
          {
            "heading": "Situations that may cause data loss",
            "items": [
              {
                "title": "Signing out of iCloud or disabling Symoney’s iCloud access in system Settings",
                "content": "Symoney’s records, accounts, categories, and photos are managed by the iCloud sync framework. Signing out or disabling the app’s iCloud access in system Settings may remove local data, including changes that have not yet uploaded. Uploaded data may return after reconnecting the original account; data without a cloud copy or backup may be unrecoverable. This refers to iPhone system Settings. The sync switch inside Symoney has no direct data-clearing logic."
              },
              {
                "title": "Using Reset App, including on another device",
                "content": "Reset App deletes cloud data and clears the local database on the next launch. Other devices syncing with the same iCloud account may also be affected. Even if nothing was changed on this phone, check whether data was reset or deleted on another device. Existing backup files are kept during an app reset."
              },
              {
                "title": "Restoring an old, empty, or malformed backup",
                "content": "Restoring a backup replaces current data; it does not merge with existing records. An old backup removes changes made since that backup, and an empty backup clears current data. The current restore process does not fully validate some malformed backups, which may also clear data without reporting an error. Before restoring, save a separate copy of your current data and check the backup’s date, source, and integrity."
              },
              {
                "title": "Deleting and reinstalling the app, or moving to a new device without recoverable data",
                "content": "If your data never synced successfully and you have no separate backup, deleting the app may make local data unrecoverable. When iCloud is unavailable, automatic backups are stored inside the app and are also removed when the app is deleted. Before changing devices, check cloud sync or save a backup outside the app."
              }
            ]
          },
          {
            "heading": "Your records may simply not be showing yet",
            "items": [
              {
                "title": "A different date or filter is selected",
                "content": "The home page shows records for the selected date. Check the date and whether the expense-only or income-only filter is active. An empty page does not mean records on other dates have been deleted."
              },
              {
                "title": "iCloud data is still downloading",
                "content": "After reinstalling or changing devices, cloud data needs time to download. Confirm that you are using the original iCloud account, that Symoney’s iCloud access is enabled, and that the network is available, then allow time for sync. Records that have not appeared yet are not necessarily lost."
              },
              {
                "title": "The app could not read the data",
                "content": "Some data-reading failures currently appear as an empty list, so the interface does not always distinguish a read error from having no records. Our review has not found logic that deliberately clears all records during a normal app update. An empty page alone does not establish that the app has been reset."
              }
            ]
          }
        ],
        "source": {
          "label": "Reference: Apple engineer’s explanation of iCloud account changes and local data removal",
          "href": "https://developer.apple.com/forums/thread/811294"
        },
        "actionLabel": "Contact the developer",
        "actionTab": "contact"
      },
      {
        id: 'n6',
        date: '2025.11.27',
        heading: 'Restoring Symoney+ after switching Apple ID',
        warning: true,
        isNew: true,
        content:
          "If your Symoney+ subscription has disappeared, it's likely you switched Apple ID or changed regions. Subscriptions are tied to the Apple ID used at purchase, that's the App Store's standard behavior.\n\n**Method 1, Switch back**\nSign back into the Apple ID that purchased Symoney+. If the subscription still doesn't appear, open Settings → tap \"Symoney+\" (top right) → \"Restore Purchase\".\n\n**Method 2, Restore on current account**\nSettings → \"Symoney+\" → \"Restore Purchase\". When \"No subscription found\" appears, tap it again. An Apple ID prompt will appear; sign in with the original account.\n\n**Method 3, Redemption code (contact required)**\nSend me proof of purchase from your original Apple ID. I'll issue a redemption code, redeemable in your new Apple ID's App Store for a permanent subscription. Apple caps codes at 300 per period, so I may not be able to help everyone, thank you for understanding.",
      },
      {
        id: 'n5',
        date: '2025.06.03',
        heading: 'Misconceptions about Third-Party Bill Import',
        content:
          'Recently, users have reported issues with third-party bill imports, mostly due to attempts to import bills from accounting software that Symoney does not currently support. Each app exports a slightly different CSV layout, so Symoney needs to be adapted per source. iCost exports .xlsx, which must be converted to UTF-8 .csv before importing.',
      },
      {
        id: 'n4',
        date: '2025.05.12',
        heading: 'v1.1.84+ users need to download the new shortcuts',
        actionLabel: 'Go to Quick Record',
        actionTab: 'quickRecord',
        content:
          'For Symoney+ users on v1.1.84+, please open the "Quick Record" tab and download the latest shortcuts, then delete the previously installed ones. Otherwise Natural Language Recording / Smart Quick Record will not function.',
      },
      {
        id: 'n3',
        date: '2025.05.11',
        heading: 'Smart Quick Record / Natural Language Recording outage',
        actionLabel: 'View API Key Guide',
        actionTab: 'apiKey',
        content:
          "Due to a surge of users on May 9 to 10, the servers for Smart Quick Record and Natural Language Recording could not handle the load and went down. I've taken them down and redesigned both flows. Users now bring their own API Key. The new version (v1.1.84+) is in Apple review.",
      },
      {
        id: 'n1',
        date: '2025.05.10',
        heading: 'Welcome to Symoney Guide',
        content:
          'Thank you for using Symoney. This guide covers quick recording via iOS Shortcuts and API Key setup for advanced features. New chapters will be added as features ship.',
      },
    ],
  },
  'zh-tw': {
    name: '繁體中文',
    nameShort: '繁中',
    headerTitle: '簡錢 Symoney® 指南',
    headerTitleShort: '簡錢 Symoney® 指南',
    ctaLabel: '下載 App',
    ctaHref:
      'https://apps.apple.com/tw/app/%E7%B0%A1%E9%8C%A2-symoney-%E8%BC%95%E7%9B%88%E5%84%AA%E9%9B%85%E7%9A%84%E5%80%8B%E4%BA%BA%E8%A8%98%E5%B8%B3%E6%9C%AC/id6502937308',
    heroTitle: '讓記帳變得',
    heroTitleItalic: '更輕盈',
    heroIntro: '透過捷徑與自動化，讓簡錢在你需要的時候，一觸即記。',
    quickRecordTab: '快速記帳',
    apiKeyTab: 'API 金鑰',
    automationTab: '自動化',
    noticeTab: '公告',
    contactTab: '聯絡',
    quickRecordTitle: '快速記帳指南',
    quickRecordIntro:
      '使用 iOS 捷徑，無需開啟 App 即可完成一筆記帳。輕點手機背面兩下，或按下 Action Button，一切交給捷徑。',
    step1: '取得捷徑',
    shortcut1Label: '輔助快速記帳 (OCR)',
    shortcut2Label: '智能快速記帳',
    shortcut3Label: '語音記帳',
    shortcut2Tag: '簡錢+',
    shortcutHistoryLabel: '歷史版本',
    legacyRequirement: '適用於舊版本簡錢',
    latestRequirement: '需將簡錢更新至 v1.7.4 及以上版本',
    legacyOcrRequirement: '適用於簡錢 v1.6.0 至 v1.7.3',
    smartRequirement: '需將簡錢更新至 v1.7.0 及以上版本',
    step2: '開啟 iOS「設定」',
    step3: '進入「輔助使用」',
    step4: '點選「觸控」',
    step5: '滑到最下面，點選「輕點背面」',
    step6: '點選「輕點兩下」',
    step7: '滑動到最下面找到剛才下載的捷徑',
    step8: '設定完成。輕點兩下手機背部即可快速記帳',
    actionNote: 'iPhone 15 Pro 及以上的使用者，也可將捷徑綁定到 Action Button。',
    apiKeyTitle: 'API 金鑰申請',
    apiKeyIntro: '智能快速記帳由大語言模型驅動，需要您自行準備 API 金鑰。選擇下方任一服務商完成接入。',
    siluFlow: '矽基流動',
    volcanicEngine: '火山引擎',
    custom: '自訂',
    officialSite: '官方網站',
    siluStep1: '訪問矽基流動官方網站',
    siluStep2: '註冊或登入您的帳戶',
    siluStep3New: '進入控制台，左側面板中選擇「API 金鑰」，然後點選「新建 API 金鑰」',
    siluStep5: '設定使用限制和權限',
    siluStep6: '確認並產生您的 API 金鑰',
    siluStep7: '複製並安全保存您的 API 金鑰',
    copyToSymoney: '開啟簡錢 App，進入 設定 › 快速記帳 › 智慧，將 API 金鑰貼至相應欄位',
    copyToSymoneyCustom:
      '開啟簡錢 App，進入 設定 › 快速記帳 › 智慧 › 自訂服務商，將上述三個欄位的資訊填入',
    volcanicStep1: '前往火山引擎開發者平台',
    volcanicStep2: '註冊或登入您的開發者帳戶',
    volcanicStep3New: '控制台左側面板向下滑動，選擇「API Key 管理」，點選「建立 API Key」並填寫名稱',
    volcanicStep4New: '在控制台左側面板中，選擇「開通管理」',
    volcanicStep5New: '點選右上角「一鍵開通所有模型」，再點選「確定開通與授權」',
    customIntro:
      '本功能支援相容 OpenAI Chat Completions 格式的服務。填入相容的基礎位址即可，/chat/completions 簡錢會自動補全。',
    customProviderList: [
      { name: 'OpenAI', url: 'https://api.openai.com/v1', models: 'gpt-4o, gpt-4o-mini' },
      { name: 'DeepSeek', url: 'https://api.deepseek.com/v1', models: 'deepseek-chat' },
      {
        name: 'Gemini',
        url: 'https://generativelanguage.googleapis.com/v1beta/openai',
        models: 'gemini-2.0-flash',
      },
      { name: 'Groq', url: 'https://api.groq.com/openai/v1', models: 'llama-3.3-70b-versatile' },
      { name: 'Moonshot (Kimi)', url: 'https://api.moonshot.cn/v1', models: 'moonshot-v1-8k' },
      { name: 'OpenRouter', url: 'https://openrouter.ai/api/v1', models: '支援多種模型' },
    ],
    customUrlNotice:
      'URL 必須以 http:// 或 https:// 開頭，並包含路徑或版本前綴。例如 https://api.openai.com/v1，而非 https://api.openai.com。請不要填寫 /messages、/responses 等原生介面。',
    customStep1: '輸入 OpenAI 相容的基礎位址',
    customStep2: '輸入模型名稱',
    customStep3: '輸入 API Key',
    automationTitle: '自動化記帳',
    automationIntro: '選擇適合你的觸發方式，把簡錢接入 iOS 自動化，在交易發生後自動完成記帳。',
    smsTriggerTitle: '簡訊觸發',
    smsTriggerDesc: '收到包含交易資訊的銀行簡訊時，透過 iOS 自動化呼叫簡錢完成記帳。',
    smsExampleTitle: '簡訊範例',
    smsExampleDesc: '當您收到類似這樣的交易簡訊時，簡錢可以自動辨識並記帳：',
    smsExample: '您尾號 0841 的信用卡於 25 年 10 月 07 日 10:30 消費人民幣 288.89 元【中國銀行】',
    automationTip: 'Email 同理。歡迎探索更多自動化場景，發掘簡錢的更多玩法。',
    setupVideoTitle: '捷徑設定',
    setupVideoDesc: '在 iOS「設定」中完成捷徑的全部設定流程',
    automationVideoTitle: '自動化示範',
    automationVideoDesc: '查看自動化記帳在實際場景中的執行效果',
    notificationTriggerTitle: '通知觸發',
    notificationTriggerDesc: '下載專用捷徑，按照指引完成設定，即可使用通知觸發自動記帳。',
    notificationShortcutLabel: '下載「通知觸發」捷徑',
    notificationShortcutHint: '加入「捷徑」後，按照其中的提示完成自動化設定。',
    notificationRequirement: '僅支援 iOS 27 及以上版本',
    noticeTitle: '公告',
    noticeIntro: '這裡是簡錢的官方公告板。重要更新、功能發布與關鍵說明都會發布於此，歡迎定期關注。',
    contactTitle: '與我聯繫',
    contactIntro: '對簡錢有任何問題或回饋，歡迎透過以下任一管道聯絡我。',
    authorEmail: '電子郵件',
    discordServer: 'Discord 官方伺服器',
    redbookGroup: '小紅書使用者群',
    wechatGroup: '微信使用者群',
    scanToJoin: '掃碼加入群聊',
    communityHeading: '使用者社群',
    notices: [
      {
        "id": "n7",
        "date": "2026.09.26",
        "heading": "關於帳單消失與資料復原的說明",
        "warning": true,
        "isNew": true,
        "content": "如果帳單突然不見了，並不一定代表資料已被永久刪除。可能的原因包括 iCloud 帳號變更、資料重置、備份還原，以及篩選或同步狀態。請依照以下情況確認。",
        "sections": [
          {
            "heading": "可能導致資料遺失的情況",
            "items": [
              {
                "title": "登出 iCloud，或在系統設定關閉簡錢的 iCloud 權限",
                "content": "簡錢的帳單、帳戶、分類和圖片由 iCloud 同步框架管理。登出 iCloud 或關閉系統中的 App iCloud 權限時，本機資料可能被清除，尚未上傳的資料也可能受到影響。已上傳的資料在重新連接原帳號後可能同步回來；未上傳且沒有備份的資料可能無法復原。這裡指 iPhone 系統設定中的操作；簡錢 App 內的同步開關沒有直接清空資料的邏輯。"
              },
              {
                "title": "執行「重置 App」，包括在其他裝置上操作",
                "content": "「重置 App」會刪除雲端資料，並在下次啟動時清除本機資料庫。相同 iCloud 帳號下開啟同步的其他裝置也可能受到影響，因此即使目前手機沒有操作，也需要確認其他裝置是否執行過重置或刪除。重置會保留既有備份檔案。"
              },
              {
                "title": "還原舊備份、空備份或內容異常的備份",
                "content": "還原備份會取代目前資料，不會與既有帳單合併。還原舊備份會失去備份之後新增的資料，還原空備份會清空目前資料。目前還原流程對部分異常備份的檢查仍不充分，也可能在未提示錯誤的情況下清空資料。還原前請先另存目前資料，並確認所選備份的日期、來源和完整性。"
              },
              {
                "title": "刪除 App 後重新安裝，或換機時沒有可復原的資料",
                "content": "如果先前未成功同步，也沒有獨立備份，刪除 App 後本機資料可能無法找回。iCloud 無法使用時，自動備份會儲存在 App 本機；這類備份也會隨刪除 App 一起移除。換機前，請確認雲端同步情況，或將備份另存到 App 以外的位置。"
              }
            ]
          },
          {
            "heading": "也可能只是帳單暫未顯示",
            "items": [
              {
                "title": "日期或篩選條件發生變化",
                "content": "首頁顯示目前選定日期的帳單。請先檢查日期，以及是否開啟了僅支出或僅收入篩選；目前頁面為空，不代表其他日期的帳單也被刪除。"
              },
              {
                "title": "iCloud 資料尚未下載完成",
                "content": "重新安裝或換機後，雲端資料需要時間下載到本機。請確認使用原來的 iCloud 帳號、簡錢的 iCloud 權限已開啟且網路正常，再等待同步。尚未顯示的帳單不一定已經遺失。"
              },
              {
                "title": "資料讀取失敗",
                "content": "部分讀取失敗的情況目前也可能顯示為空列表，介面尚不能完全區分「讀取失敗」和「沒有帳單」。目前未發現正常版本更新會主動清空全部帳單的邏輯，因此不能僅憑空白頁面判斷 App 已被初始化。"
              }
            ]
          }
        ],
        "source": {
          "label": "參考：Apple 工程師對 iCloud 帳號變更與本機資料清理的說明",
          "href": "https://developer.apple.com/forums/thread/811294"
        },
        "actionLabel": "聯絡開發者",
        "actionTab": "contact"
      },
      {
        id: 'n6',
        date: '2025.11.27',
        heading: '切換 Apple ID 後「簡錢+」訂閱消失的解決辦法',
        warning: true,
        isNew: true,
        content:
          '若您的簡錢+訂閱突然消失，很可能是切換到了其他 Apple ID 或地區。訂閱是與購買時使用的 Apple ID 綁定的，這是 App Store 的標準機制。\n\n**方法一：切換回原購買帳號**\n重新登入購買「簡錢+」時使用的 Apple ID。如切換後仍未顯示，請進入 App 設定 → 點選右上角「簡錢+」黑色按鈕 → 點選「恢復購買」。\n\n**方法二：在目前帳號恢復購買**\n進入 App 設定 → 點選「簡錢+」 → 「恢復購買」。出現「找不到訂閱」時再次點選，會彈出 Apple ID 登入視窗，使用原購買帳號登入即可。\n\n**方法三：申請兌換碼（需聯絡開發者）**\n向我傳送原 Apple ID 的購買證明，我會提供兌換碼，於新帳號的 App Store 中兌換可獲得永久訂閱。受蘋果限制，單期最多 300 組，無法保證所有請求都能滿足。',
      },
      {
        id: 'n5',
        date: '2025.06.03',
        heading: '關於第三方帳單匯入的迷思',
        content:
          '近期回饋第三方帳單無法匯入，大多是嘗試匯入簡錢尚未支援的記帳軟體所匯出的帳單（例如：小青帳）。雖然格式多為 .csv，但不同軟體的欄位定義不同，簡錢可能無法辨識。每個軟體都需單獨適配，敬請見諒。另外，iCost 匯出的 .xlsx 需先轉為 UTF-8 編碼的 .csv 才能正常匯入。',
      },
      {
        id: 'n4',
        date: '2025.05.12',
        heading: 'v1.1.84+ 使用者需要重新下載新的捷徑',
        actionLabel: '前往快速記帳',
        actionTab: 'quickRecord',
        content:
          '已升級到 v1.1.84+ 的「簡錢+」使用者，請前往本網頁的「快速記帳」頁籤取得最新捷徑，並刪除之前下載的，否則自然語言記帳 / 智能快速記帳將無法使用，謝謝！',
      },
      {
        id: 'n3',
        date: '2025.05.11',
        heading: '智能快速記帳 / 自然語言記帳 不可用的問題',
        actionLabel: '查看 API 金鑰教學',
        actionTab: 'apiKey',
        content:
          '9 號至 10 號，由於大量使用者湧入，智能快速記帳和自然語言記帳的伺服器無法承受突如其來的高流量導致當機。我已重新設計了這兩種記帳方式，使用者需自行提供 API Key（詳見 API 金鑰教學）。新版本已提交蘋果審核（v1.1.84+），感謝大家的支持！',
      },
      {
        id: 'n1',
        date: '2025.05.10',
        heading: '歡迎使用簡錢指南',
        content:
          '感謝您使用簡錢！本指南提供了 iOS 捷徑快速記帳與 API 金鑰設定的說明。我將持續更新，新增新功能與改進。',
      },
    ],
  },
  ja: {
    name: '日本語',
    nameShort: '日本語',
    headerTitle: 'Symoney® ガイド',
    headerTitleShort: 'Symoney ガイド',
    ctaLabel: 'App を入手',
    ctaHref:
      'https://apps.apple.com/jp/app/%E7%B0%A1%E9%8C%A2-symoney-%E8%BB%BD%E3%82%84%E3%81%8B%E3%81%A7%E4%B8%8A%E5%93%81%E3%81%AA%E5%AE%B6%E8%A8%88%E7%B0%BF/id6502937308',
    heroTitle: '記帳をもっと',
    heroTitleItalic: '軽やかに',
    heroIntro: 'ショートカットと自動化で、必要な瞬間にワンタップで記録。',
    quickRecordTab: 'クイック記録',
    apiKeyTab: 'API キー',
    automationTab: '自動化',
    noticeTab: 'お知らせ',
    contactTab: 'お問合せ',
    quickRecordTitle: 'クイック記録ガイド',
    quickRecordIntro:
      'iOS ショートカットを使えば、App を開かずに記録が完了します。背面をダブルタップ、または Action Button を押せば、あとはショートカットにおまかせ。',
    step1: 'ショートカットを取得',
    shortcut1Label: 'クイック記録 (OCR)',
    shortcut2Label: 'スマートクイック記録',
    shortcut3Label: '音声記録',
    shortcut2Tag: 'Symoney+',
    shortcutHistoryLabel: 'バージョン履歴',
    legacyRequirement: '旧バージョンの Symoney 用',
    latestRequirement: 'Symoney v1.7.4 以上が必要',
    legacyOcrRequirement: 'Symoney v1.6.0 から v1.7.3 が必要',
    smartRequirement: 'Symoney v1.7.0 以上が必要',
    step2: 'iOS の「設定」を開く',
    step3: '「アクセシビリティ」へ進む',
    step4: '「タッチ」をタップ',
    step5: '一番下までスクロールし、「背面タップ」をタップ',
    step6: '「ダブルタップ」をタップ',
    step7: '一番下までスクロールし、ダウンロードしたショートカットを選択',
    step8: '設定完了。背面をダブルタップして記録できます',
    actionNote:
      'iPhone 15 Pro 以降では、ショートカットを Action Button に割り当てることもできます。',
    apiKeyTitle: 'API キーの取得',
    apiKeyIntro:
      'スマートクイック記録は大規模言語モデルによって動作し、ご自身の API キーが必要です。以下のいずれかのプロバイダーを選択してください。',
    siluFlow: 'シリコンフロー',
    volcanicEngine: 'ボルケーノエンジン',
    custom: 'カスタム',
    officialSite: '公式サイト',
    siluStep1: 'シリコンフローの公式サイトへアクセス',
    siluStep2: 'アカウントを登録またはログイン',
    siluStep3New:
      'コンソールで左パネルの「API キー」を選び、「新しい API キーを作成」をクリック',
    siluStep5: '使用制限と権限を設定',
    siluStep6: '確認して API キーを生成',
    siluStep7: 'API キーをコピーし安全に保管',
    copyToSymoney: 'Symoney を開き、設定 › クイック記録 › スマート で API キーを貼り付け',
    copyToSymoneyCustom:
      'Symoney を開き、設定 › クイック記録 › スマート › カスタムプロバイダーで、上記 3 つのフィールドを入力',
    volcanicStep1: 'ボルケーノエンジン開発者ポータルへアクセス',
    volcanicStep2: '開発者アカウントを登録またはログイン',
    volcanicStep3New:
      '左パネルを下にスクロールし、「API Key 管理」→「API Key を作成」、名前を入力して作成',
    volcanicStep4New: '左パネルで「アクティベーション管理」を選択',
    volcanicStep5New:
      '右上の「すべてのモデルをアクティベート」→「アクティベーションと承認を確認」',
    customIntro:
      'OpenAI Chat Completions 形式に準拠した任意のサービスをサポート。互換のベース URL を入力すれば、Symoney が必要に応じて /chat/completions を自動で追加します。',
    customProviderList: [
      { name: 'OpenAI', url: 'https://api.openai.com/v1', models: 'gpt-4o, gpt-4o-mini' },
      { name: 'DeepSeek', url: 'https://api.deepseek.com/v1', models: 'deepseek-chat' },
      {
        name: 'Gemini',
        url: 'https://generativelanguage.googleapis.com/v1beta/openai',
        models: 'gemini-2.0-flash',
      },
      { name: 'Groq', url: 'https://api.groq.com/openai/v1', models: 'llama-3.3-70b-versatile' },
      { name: 'Moonshot', url: 'https://api.moonshot.cn/v1', models: 'moonshot-v1-8k' },
      { name: 'OpenRouter', url: 'https://openrouter.ai/api/v1', models: '多くのモデルが利用可' },
    ],
    customUrlNotice:
      'URL は http:// または https:// で始まり、パス/バージョン接頭辞を含む必要があります。例：https://api.openai.com/v1（https://api.openai.com 単独は不可）。/messages、/responses などのネイティブエンドポイントは使用しないでください。',
    customStep1: 'OpenAI 互換のベース URL を入力',
    customStep2: 'モデル名を入力',
    customStep3: 'API Key を入力',
    automationTitle: '自動化記録',
    automationIntro:
      'トリガーを選び、Symoney を iOS オートメーションに接続して取引を自動で記録します。',
    smsTriggerTitle: 'メッセージトリガー',
    smsTriggerDesc:
      '銀行から取引メッセージを受信すると、iOS オートメーションから Symoney を呼び出して記録します。',
    smsExampleTitle: 'メッセージの例',
    smsExampleDesc: 'このような取引 SMS を受信すると、Symoney が自動で解析し記録します：',
    smsExample: 'VISA：2025 年 10 月 7 日 10:30 に APPLE STORE で ¥31,500 をご利用。カード末尾 0841。',
    automationTip: 'メールも同様です。さまざまな自動化シナリオで、Symoney をもっと活用してください。',
    setupVideoTitle: 'ショートカット設定',
    setupVideoDesc: 'iOS「設定」内の全設定フロー',
    automationVideoTitle: '自動化デモ',
    automationVideoDesc: '実際の動作をご確認ください',
    notificationTriggerTitle: '通知トリガー',
    notificationTriggerDesc:
      '専用ショートカットをダウンロードし、ガイドに沿って通知からの自動記録を設定できます。',
    notificationShortcutLabel: '「通知トリガー」ショートカットを取得',
    notificationShortcutHint:
      '「ショートカット」に追加した後、表示される案内に沿ってオートメーションを設定してください。',
    notificationRequirement: 'iOS 27 以降のみ対応',
    noticeTitle: 'お知らせ',
    noticeIntro:
      'Symoney 公式のお知らせ掲示板です。リリース、重要な修正、主要な情報をここでお届けします。',
    contactTitle: 'お問い合わせ',
    contactIntro:
      'Symoney に関するご質問やご感想は、以下のいずれかのチャネルからお気軽にどうぞ。',
    authorEmail: 'メール',
    discordServer: 'Discord 公式サーバー',
    redbookGroup: '小紅書 ユーザーグループ',
    wechatGroup: 'WeChat ユーザーグループ',
    scanToJoin: 'スキャンして参加',
    communityHeading: 'コミュニティ',
    notices: [
      {
        "id": "n7",
        "date": "2026.09.26",
        "heading": "記録が表示されない場合とデータ復元について",
        "warning": true,
        "isNew": true,
        "content": "記録が突然見えなくなっても、必ずしも完全に削除されたとは限りません。iCloud アカウントの変更、アプリのリセット、バックアップの復元、表示フィルターや同期の状態などが関係する場合があります。以下の内容をご確認ください。",
        "sections": [
          {
            "heading": "データが失われる可能性がある操作",
            "items": [
              {
                "title": "iCloud からのサインアウト、またはシステム設定での iCloud アクセスの無効化",
                "content": "Symoney の記録、口座、カテゴリ、写真は iCloud の同期フレームワークで管理されています。iCloud からサインアウトしたり、システム設定でアプリの iCloud アクセスを無効にしたりすると、未アップロードの変更を含め、端末内のデータが削除される場合があります。アップロード済みのデータは元のアカウントに接続し直すと戻る可能性がありますが、クラウドにもバックアップにもないデータは復元できない場合があります。ここでいう操作は iPhone のシステム設定での操作です。Symoney 内の同期スイッチには、データを直接消去する処理はありません。"
              },
              {
                "title": "別の端末を含め、「アプリをリセット」を実行する",
                "content": "アプリをリセットするとクラウドのデータが削除され、次回起動時に端末内のデータベースも消去されます。同じ iCloud アカウントで同期している別の端末にも影響する場合があります。この端末で操作していなくても、他の端末でリセットや削除を行っていないかご確認ください。リセット時に既存のバックアップファイルは保持されます。"
              },
              {
                "title": "古い、空の、または内容に問題があるバックアップを復元する",
                "content": "バックアップの復元は現在のデータを置き換える操作で、既存の記録との結合ではありません。古いバックアップを復元すると、その後に追加したデータが失われ、空のバックアップでは現在のデータが消去されます。現在の復元処理では、一部の不正な形式のバックアップを十分に検証できず、エラーを表示せずにデータを消去する可能性もあります。復元前に現在のデータを別途保存し、バックアップの日時、入手元、完全性をご確認ください。"
              },
              {
                "title": "アプリを削除して再インストールする、または復元可能なデータがないまま機種変更する",
                "content": "同期が成功しておらず、別途保存したバックアップもない場合、アプリを削除すると端末内のデータを復元できなくなる可能性があります。iCloud が使えないときの自動バックアップはアプリ内に保存されるため、アプリの削除とともに失われます。機種変更の前にクラウドへの同期を確認するか、アプリの外にバックアップを保存してください。"
              }
            ]
          },
          {
            "heading": "データが一時的に表示されていない場合",
            "items": [
              {
                "title": "選択した日付やフィルターが変わっている",
                "content": "ホーム画面には選択した日付の記録が表示されます。日付と、支出のみ・収入のみのフィルターをご確認ください。現在の画面が空でも、他の日付の記録が削除されたとは限りません。"
              },
              {
                "title": "iCloud データのダウンロードが終わっていない",
                "content": "再インストールや機種変更の後は、クラウドのデータが端末にダウンロードされるまで時間がかかります。元の iCloud アカウントを使用していること、Symoney の iCloud アクセスが有効なこと、ネットワークに接続されていることを確認し、同期をお待ちください。まだ表示されない記録も、失われたとは限りません。"
              },
              {
                "title": "データの読み込みに失敗している",
                "content": "現在、一部の読み込みエラーでも空の一覧が表示される場合があり、画面上で「読み込み失敗」と「記録なし」を完全には区別できません。通常のアプリ更新で全記録を意図的に消去する処理は、現時点の調査では見つかっていません。空の画面だけで、アプリが初期化されたと判断することはできません。"
              }
            ]
          }
        ],
        "source": {
          "label": "参考：iCloud アカウントの変更と端末内データの削除についての Apple エンジニアの説明",
          "href": "https://developer.apple.com/forums/thread/811294"
        },
        "actionLabel": "開発者に連絡",
        "actionTab": "contact"
      },
      {
        id: 'n6',
        date: '2025.11.27',
        heading: 'Apple ID 切替後の「Symoney+」サブスクリプション復元',
        warning: true,
        isNew: true,
        content:
          'Symoney+ サブスクリプションが消えた場合、別の Apple ID に切り替えたか、地域を変更した可能性があります。サブスクリプションは購入時に使用した Apple ID に紐付くため、これは App Store の標準動作です。\n\n**方法 1：元のアカウントに戻す**\nSymoney+ を購入した Apple ID に再ログイン。表示されない場合は、設定 → 右上の「Symoney+」黒ボタン → 「購入を復元」。\n\n**方法 2：現在のアカウントで復元**\n設定 → 「Symoney+」 → 「購入を復元」。「サブスクリプションが見つかりません」と出たらもう一度タップ、Apple ID プロンプトで元の購入アカウントにサインイン。\n\n**方法 3：引き換えコード（開発者へ要連絡）**\n元の Apple ID の購入証明をお送りいただければ、引き換えコードを発行します。新しい Apple ID の App Store で引き換えると永久サブスクリプションになります。Apple の制限により期間あたり最大 300 件のため、すべてのご要望にお応えできない場合があります。',
      },
      {
        id: 'n5',
        date: '2025.06.03',
        heading: 'サードパーティ請求データのインポートについて',
        content:
          '最近、サードパーティ請求データのインポートに関する問題が報告されています。多くは Symoney がまだ対応していない家計簿アプリのエクスポートを試みたケースです。.csv 形式でも列定義はアプリごとに異なるため、Symoney 側で個別に対応する必要があります。また、iCost のエクスポートは .xlsx 形式のため、UTF-8 .csv に変換してからインポートしてください。',
      },
      {
        id: 'n4',
        date: '2025.05.12',
        heading: 'v1.1.84+ ユーザーは新しいショートカットの再ダウンロードが必要',
        actionLabel: 'クイック記録へ',
        actionTab: 'quickRecord',
        content:
          'v1.1.84+ にアップグレードした「Symoney+」ユーザーは、本ページの「クイック記録」タブから最新のショートカットを取得し、以前のものは削除してください。さもないと自然言語記録 / スマートクイック記録が動作しません。',
      },
      {
        id: 'n3',
        date: '2025.05.11',
        heading: 'スマートクイック記録 / 自然言語記録の停止について',
        actionLabel: 'API キーガイドへ',
        actionTab: 'apiKey',
        content:
          '5 月 9 〜 10 日にユーザー数が急増し、スマートクイック記録と自然言語記録のサーバーが負荷に耐えきれず停止しました。両機能を再設計し、ユーザーがご自身の API Key を利用する形式（API キーガイド参照）に変更。新バージョン（v1.1.84+）は Apple 審査中です。応援ありがとうございます！',
      },
      {
        id: 'n1',
        date: '2025.05.10',
        heading: 'Symoney ガイドへようこそ',
        content:
          'Symoney をご利用いただきありがとうございます。本ガイドでは、iOS ショートカットによるクイック記録と高度な機能のための API キー設定をご案内します。新機能と改善を継続的に追加していきます。',
      },
    ],
  },
}

export function getTranslations(lang: Language): Translations {
  return translations[lang] || translations['zh-cn']
}
