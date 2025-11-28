import type { NoticesByLang } from './types';

export const notices: NoticesByLang = {
  "en": [
    {
      id: "notice6",
      date: "November 27, 2025",
      heading: "Solutions for 'Symoney+' Subscription Loss After Switching Apple ID",
      content: "If your Symoney+ subscription has disappeared, it's likely because you've switched to a different Apple ID. Your subscription is tied to the specific Apple ID used for purchase—this is Apple's standard subscription behavior. Please note that subscriptions are tied to your Apple ID by App Store design. As a developer, I cannot modify this behavior, so I appreciate your understanding.<br><br><strong>How to Restore Your Subscription:</strong><br><br><strong>Method 1: Switch Back to Original Account</strong><br>• Log back into the Apple ID you used to purchase Symoney+<br>• If the subscription still doesn't appear, go to Settings → tap 'Symoney+' (black button in top-right corner) → tap 'Restore Purchase'<br><br><strong>Method 2: Restore While Logged Into Different Account</strong><br>• Go to Settings → tap 'Symoney+' (black button in top-right corner) → tap 'Restore Purchase'<br>• If you see 'No Subscription Found', tap it again<br>• An Apple ID login prompt will appear—sign in with the Apple ID you used to purchase Symoney+<br><br><strong>Method 3: Apply for Redemption Code (Contact Required)</strong><br>• Send me proof of purchase from your original Apple ID (Account A)<br>• I'll provide you with a redemption code<br>• Redeem the code in the App Store on your new Apple ID (Account B) for a permanent subscription<br><br>If you need assistance, feel free to reach out via the Contact tab.",
      urgent: false,
      warning: true,
      isNew: true
    },
    {
      id: "notice5",
      date: "June 3, 2025",
      heading: "Misconceptions about Third-Party Bill Import",
      content: "Recently, users have reported issues with third-party bill imports, mostly due to attempts to import bills from accounting software that Symoney does not currently support (such as: XiaoQingZhang, etc.). Although most accounting software exports in .csv format, the different columns in the CSV exported by each accounting software may contain different content, and Symoney may fail to import due to inability to recognize the corresponding columns. Therefore, I need to adapt the bills from each accounting software individually. Please understand any inconvenience this may cause. Additionally, since bills exported from iCost are in .xlsx format, users need to convert this format to UTF-8 encoded .csv format before importing into Symoney, otherwise it may also cause garbled text or abnormal display of imported bills.",
      urgent: false,
      warning: false,
      isNew: false
    },
    {
      id: "notice4",
      date: "May 12, 2025",
      heading: "v1.1.84+ users need to download the new shortcuts",
      content: "For 'Symoney+' users who have upgraded to v1.1.84+, please go to the 'Quick Record' tab on this page to get the latest shortcuts, and delete the previously downloaded shortcuts. Otherwise, Natural Language Recording/Smart Quick Record will not work. Thank you!",
      buttonText: "Go to Quick Record",
      buttonAction: "quickRecord",
      urgent: false,
      isNew: false
    },
    {
      id: "notice3",
      date: "May 11, 2025",
      heading: "Smart Quick Record (Shortcut) / Natural Language Recording Unavailable",
      content: "Due to a sudden surge of users on May 9th and 10th, the servers for Smart Quick Record and Natural Language Recording could not handle the unexpected high traffic, resulting in service outages. I have temporarily taken down the servers and redesigned the logic for these two recording methods (users now need to provide their own API Key, see API Key tutorial for details). The new version has been submitted to Apple for review (v1.1.84+). Please be patient while we await approval. Thank you for your support of Symoney!",
      buttonText: "View API Key Guide",
      buttonAction: "apiKey",
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
      id: "notice6",
      date: "2025年11月27日",
      heading: "切换 Apple ID 后「简钱+」订阅消失的解决办法",
      content: "如果您的简钱+订阅突然消失，很可能是因为切换到了其他 Apple ID。订阅是与您购买时使用的特定 Apple ID 绑定的——这是苹果订阅机制的标准行为。需要特别说明的是，订阅与 Apple ID 绑定是 App Store 的基础机制。作为开发者，我确实无法修改这一规则，因此无法直接为您迁移订阅，给您带来的不便还请多多包涵。<br><br><strong>如何恢复订阅：</strong><br><br><strong>方法一：切换回原购买账号</strong><br>• 重新登录您当时购买「简钱+」的那个 Apple ID<br>• 如果切换后订阅仍未显示，请进入 App 设置 → 点击右上角「简钱+」黑色按钮 → 点击最下方「恢复购买」<br><br><strong>方法二：在当前账号恢复购买</strong><br>• 进入 App 设置 → 点击右上角「简钱+」黑色按钮 → 点击最下方「恢复购买」<br>• 如果显示「未找到订阅」，请再次点击该提示<br>• 此时会弹出 Apple ID 登录窗口，使用您当时购买「简钱+」的 Apple ID 登录即可恢复<br><br><strong>方法三：申请兑换码（需联系开发者）</strong><br>• 向我发送您在原 Apple ID（账号A）上的购买凭证<br>• 我会为您提供一个兑换码<br>• 在新 Apple ID（账号B）的 App Store 中兑换该码，即可获得永久订阅<br><br>如需帮助，请通过「与我联系」选项卡联系我。",
      urgent: false,
      warning: true,
      isNew: true
    },
    {
      id: "notice5",
      date: "2025年6月3日",
      heading: "关于第三方账单导入的误区",
      content: "有用户近期反馈第三方账单无法导入，大多都是因为用户在尝试导入简钱目前尚未支持的第三方记账软件所导出的账单（例如：小青账等）。虽然大多数记账软件导出的格式都是 .csv，但是每个记账软件导出的 CSV 中的不同数列可能是不同内容，简钱可能会因为无法识别对应数列导致导入失败。因此，每一个记账软件的账单我都需要去单独适配，如有不便，还请谅解。另外，由于 iCost 导出后的账单格式为 .xlsx，用户需要将该格式转换为 UTF-8 编码的 .csv 格式，再导入简钱，否则也有可能会导致乱码、导入的账单显示不正常的情况。",
      urgent: false,
      warning: false,
      isNew: false
    },
    {
      id: "notice4",
      date: "2025年5月12日",
      heading: "v1.1.84+版本需要重新下载新的快捷指令",
      content: "已经升级到v1.1.84+版本的「简钱+」用户，请前往本网页的「快速记账」选项卡，获取最新的快捷指令，并删除之前下载的快捷指令，否则自然语言记账/智能快速记账将无法使用，谢谢！",
      buttonText: "前往快速记账",
      buttonAction: "quickRecord",
      urgent: false,
      isNew: false
    },
    {
      id: "notice3",
      date: "2025年5月11日",
      heading: "智能快速记账（快捷指令）/ 自然语言记账 不可用的问题",
      content: "9号至10号，由于大量用户呈爆发式的涌入app，智能快速记账和自然语言记账的服务器无法承受突如其来的大流量，最终导致宕机。我已暂时撤下服务器，并且重新设计了这两种记账方式的使用逻辑（需要用户自行提供API Key来使用，详见API密钥教程），新版本已经提交苹果审核（v1.1.84+），还请大家耐心等待。感谢大家对简钱的支持！",
      buttonText: "查看API密钥教程",
      buttonAction: "apiKey",
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
      id: "notice6",
      date: "2025年11月27日",
      heading: "切換 Apple ID 後「簡錢+」訂閱消失的解決辦法",
      content: "如果您的簡錢+訂閱突然消失，很可能是因為切換到了其他 Apple ID。訂閱是與您購買時使用的特定 Apple ID 綁定的——這是蘋果訂閱機制的標準行為。需要特別說明的是，訂閱與 Apple ID 綁定是 App Store 的基礎機制。身為開發者，我確實無法更動此項規則，因此無法直接為您轉移訂閱，造成您的不便，敬請見諒。<br><br><strong>如何恢復訂閱：</strong><br><br><strong>方法一：切換回原購買帳號</strong><br>• 重新登入您當時購買「簡錢+」的那個 Apple ID<br>• 如果切換後訂閱仍未顯示，請進入 App 設定 → 點選右上角「簡錢+」黑色按鈕 → 點選最下方「恢復購買」<br><br><strong>方法二：在目前帳號恢復購買</strong><br>• 進入 App 設定 → 點選右上角「簡錢+」黑色按鈕 → 點選最下方「恢復購買」<br>• 若顯示「找不到訂閱」，請再次點選該提示<br>• 此時會跳出 Apple ID 登入視窗，使用您當時購買「簡錢+」的 Apple ID 登入即可恢復<br><br><strong>方法三：申請兌換代碼（需聯絡開發者）</strong><br>• 請傳送您原 Apple ID（帳號 A）的購買證明給我<br>• 我會提供您一組兌換代碼<br>• 在新 Apple ID（帳號 B）的 App Store 中兌換該代碼，即可獲得永久訂閱<br><br>如需協助，請透過「聯絡我」頁籤聯絡我。",
      urgent: false,
      warning: true,
      isNew: true
    },
    {
      id: "notice5",
      date: "2025年6月3日",
      heading: "關於第三方帳單匯入的誤區",
      content: "有用戶近期反饋第三方帳單無法匯入，大多都是因為用戶在嘗試匯入簡錢目前尚未支援的第三方記帳軟體所匯出的帳單（例如：小青帳等）。雖然大多數記帳軟體匯出的格式都是 .csv，但是每個記帳軟體匯出的 CSV 中的不同數列可能是不同內容，簡錢可能會因為無法識別對應數列導致匯入失敗。因此，每一個記帳軟體的帳單我都需要去單獨適配，如有不便，還請諒解。另外，由於 iCost 匯出後的帳單格式為 .xlsx，用戶需要將該格式轉換為 UTF-8 編碼的 .csv 格式，再匯入簡錢，否則也有可能會導致亂碼、匯入的帳單顯示不正常的情況。",
      urgent: false,
      warning: false,
      isNew: false
    },
    {
      id: "notice4",
      date: "2025年5月12日",
      heading: "v1.1.84+版本需要重新下載新的捷徑",
      content: "已經升級到v1.1.84+版本的「簡錢+」用戶，請前往本網頁的「快速記帳」選項卡，獲取最新的捷徑，並刪除之前下載的捷徑，否則自然語言記帳/智能快速記帳將無法使用，謝謝！",
      buttonText: "前往快速記帳",
      buttonAction: "quickRecord",
      urgent: false,
      isNew: false
    },
    {
      id: "notice3",
      date: "2025年5月11日",
      heading: "智能快速記帳（捷徑）/ 自然語言記帳 不可用的問題",
      content: "9號至10號，由於大量用戶呈爆發式的湧入app，智能快速記帳和自然語言記帳的服務器無法承受突如其來的大流量，最終導致宕機。我已暫時撤下服務器，並且重新設計了這兩種記帳方式的使用邏輯（需要用戶自行提供API Key來使用，詳見API金鑰教程），新版本已經提交蘋果審核（v1.1.84+），還請大家耐心等待。感謝大家對簡錢的支持！",
      buttonText: "查看API金鑰教程",
      buttonAction: "apiKey",
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
