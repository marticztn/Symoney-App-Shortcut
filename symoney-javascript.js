// Translations object with all supported languages
const translations = {
  "en": {
    "headerTitle": "Symoney® Guide",
    "quickRecordTab": "Quick Record",
    "apiKeyTab": "API Key",
    "quickRecordTitle": "Quick Record Guide",
    "apiKeyTitle": "API Key Application Guide",
    "step1": "Get shortcuts:",
    "shortcut1Text": "Quick Record (OCR Assistive)",
    "shortcut2Text": "Smart Quick Record (Smart Recognition)",
    "noteSmart": "(available for Symoney+ subscribers only)",
    "step2": "Open iOS Settings.",
    "step3": "Go to Accessibility.",
    "step4": "Tap Touch.",
    "step5": "Scroll to the bottom and tap Back Tap.",
    "step6": "Tap Double Tap.",
    "step7": "Scroll to the bottom to find the shortcut you just downloaded.",
    "step8": "Configuration complete. Now you can quickly record by double-tapping the back of your phone.",
    "actionNote": "Users with an Action Button (iPhone 15 Pro and above) can also set the shortcut to the Action Button.",

    "siluFlow": "Silicone Flow",
    "volcanicEngine": "Volcano Engine",
    "siluFlowTitle": "Silicone Flow API Key Guide",
    "volcanicEngineTitle": "Volcano Engine API Key Guide",
    "siluStep1": "Visit the Silicone Flow official website.",
    "siluStep2": "Register or log in to your account.",
    "siluStep3New": "Go to the console, select 'API Keys' in the left panel, then click 'Create New API Key'.",
    "siluStep5": "Set up usage limits and permissions.",
    "siluStep6": "Confirm and generate your API key.",
    "siluStep7": "Copy and securely store your API key.",
    "volcanicStep1": "Go to the Volcano Engine developer portal.",
    "volcanicStep2": "Sign up or sign in to your developer account.",
    "volcanicStep3New": "In the console, scroll down the left panel, select 'API Key Management', then click 'Create API Key'. Enter any name and click 'Create'.",
    "volcanicStep4New": "Then in the console's left panel, scroll up and select 'Online Inference', click 'Create Inference Endpoint'.",
    "volcanicStep5New": "Enter any name for the endpoint, select 'Doubao-1.5-pro-32k' as the model, and choose version 250115.",
    "volcanicStep6New": "Click OK, then click 'Confirm Access'.",
    "officialSite": "Official Website",

    "noticeTab": "Notices",
    "noticeTitle": "Notices",
    "noticeIntro": "This is the official announcement board for Symoney. Here you'll find important updates, feature releases, and other critical information about the app. Please check this page regularly for the latest news.",
    "noticeDate1": "May 10, 2025",
    "noticeHeading1": "Welcome to Symoney Guide",
    "noticeContent1": "Thank you for using Symoney! This guide provides instructions for quick expense recording using iOS shortcuts and API key setup for advanced features. I will be continuously updating this guide with new features and improvements. If you have any questions, please contact me.",
    
    "noticeDate2": "May 10, 2025",
    "noticeHeading2": "GitHub Website Access Issues",
    "noticeContent2": "Some users have reported that GitHub websites are inaccessible in mainland China. This may be due to DNS issues. You can try changing your device's DNS settings or using a VPN to access the site. We apologize for any inconvenience this may cause!",
    
    "noticeDate3": "May 11, 2025",
    "noticeHeading3": "Smart Quick Record (Shortcut) / Natural Language Recording Unavailable",
    "noticeContent3": "Due to a sudden surge of users on May 9th and 10th, the servers for Smart Quick Record and Natural Language Recording could not handle the unexpected high traffic, resulting in service outages. I have temporarily taken down the servers and redesigned the logic for these two recording methods (users now need to provide their own API Key, see API Key tutorial for details). The new version has been submitted to Apple for review (v1.1.84+). Please be patient while we await approval. Thank you for your support of Symoney!",
    "newBadge": "NEW",

    "noticeDate4": "May 12, 2025",
    "noticeHeading4": "v1.1.84+ users need to download the new shortcuts",
    "noticeContent4": "For 'Symoney+' users who have upgraded to v1.1.84+, please go to the 'Quick Record' tab on this page to get the latest shortcuts, and delete the previously downloaded shortcuts. Otherwise, Natural Language Recording/Smart Quick Record will not work. Thank you!",
    
    "billingPage": "Billing Page",

    // Update translations for copying API key to Symoney with correct paths
    "copyToSymoney": "Open Symoney app, go to Settings > Quick Record > Smart, and paste your API key into the appropriate field.",
    "copyToSymoneyCustom": "Open Symoney app, go to Settings > Quick Record > Smart > Select Custom Provider, fill in all three fields with the information above.",

    // Add the URL notice for the custom section
    "customUrlNotice": "Note: You need to enter the complete URL<br>Example 1 - https://api.openai.com/v1/chat/completions (not just https://api.openai.com)<br>Example 2 - https://api.deepseek.com/v1/chat/completions (not just https://api.deepseek.com)",

    // Add contact section translations
    "contactTab": "Contact Me",
    "contactTitle": "Contact Me",
    "contactIntro": "Have questions about Symoney? Need help with the app? Feel free to reach out through any of the channels below. I'm always happy to assist users and hear your feedback.",
    "authorEmail": "Email",
    "discordServer": "Discord Official Server",
    "socialHeading": "Social Media & User Groups",
    "authorRedbook": "Author's Xiaohongshu",
    "redbookGroup": "RED（小紅書） User Group",
    "wechatGroup": "WeChat User Group",
    "scanToFollow": "Scan to follow",
    "scanToJoin": "Scan to join"

  },
  "zh-cn": {
    "headerTitle": "简钱 Symoney® 指南",
    "quickRecordTab": "快速记账",
    "apiKeyTab": "API密钥",
    "quickRecordTitle": "快速记账指南",
    "apiKeyTitle": "API密钥申请教程",
    "step1": "获取快捷指令：",
    "shortcut1Text": "「快速记账 (OCR 识别)」",
    "shortcut2Text": "「智能快速记账 (智能识别)」",
    "noteSmart": "（仅「简钱+」订阅用户可用）",
    "step2": "打开iOS「设置」。",
    "step3": "进入「辅助功能」。",
    "step4": "点击「触控」。",
    "step5": "滑到最下面，点击「轻点背面」。",
    "step6": "点击「轻点两下」。",
    "step7": "滑动到最下面找到刚才下载的快捷指令。",
    "step8": "配置完成，现在您可以通过敲击手机背部两下来进行快速记账了。",
    "actionNote": "有 Action Button 的用户也可以将快捷指令设置到 Action Button 上去（iPhone 15 Pro 及以上）。",

    "siluFlow": "硅基流动",
    "volcanicEngine": "火山引擎",
    "siluFlowTitle": "硅基流动 API 密钥申请教程",
    "volcanicEngineTitle": "火山引擎 API 密钥申请教程",
    "siluStep1": "访问硅基流动官方网站。",
    "siluStep2": "注册或登录您的账户。",
    "siluStep3New": "进入控制台，左侧面板中选择「API密钥」，然后点击「新建API密钥」。",
    "siluStep5": "设置使用限制和权限。",
    "siluStep6": "确认并生成您的 API 密钥。",
    "siluStep7": "复制并安全保存您的 API 密钥。",
    "volcanicStep1": "前往火山引擎开发者平台。",
    "volcanicStep2": "注册或登录您的开发者账户。",
    "volcanicStep3New": "控制台左侧面板往下滑动，选择「API Key 管理」，然后选择「创建API Key」，然后名称随意，然后点击「创建」即可。",
    "volcanicStep4New": "然后在控制台左侧面板中，向上滑动，选中「在线推理」，点击「创建推理接入点」。",
    "volcanicStep5New": "接入点名称随意，模型必须选择「Doubao-1.5-pro-32k」，然后选择250115版本。",
    "volcanicStep6New": "点击确定，最后点击「确认接入」即可。",
    "officialSite": "官方网站",

    "noticeTab": "公告",
    "noticeTitle": "公告",
    "noticeIntro": "这是简钱 Symoney 的官方公告板。在这里，您可以找到重要更新、功能发布和其他关于应用的关键信息。请定期查看此页面以获取最新消息。",
    "noticeDate1": "2025年5月10日",
    "noticeHeading1": "欢迎使用简钱指南",
    "noticeContent1": "感谢您使用简钱！本指南提供了使用 iOS 快捷指令进行快速记账和设置 API 密钥以使用高级功能的说明。我将不断更新本指南，添加新功能和改进。如果您有任何疑问，请联系我。",
    
    "noticeDate2": "2025年5月10日",
    "noticeHeading2": "GitHub网页无法打开的问题",
    "noticeContent2": "有用户反馈GitHub网页在中国大陆地区无法访问的情况，有可能是DNS导致的，可以尝试修改设备的DNS，或者使用梯子进行访问。抱歉给大家带来的不便！",
    
    "noticeDate3": "2025年5月11日",
    "noticeHeading3": "智能快速记账（快捷指令）/ 自然语言记账 不可用的问题",
    "noticeContent3": "由于9号至10号，大量用户呈爆发式的涌入app，智能快速记账和自然语言记账的服务器无法承受突如其来的大流量，最终导致宕机。我已暂时撤下服务器，并且重新设计了这两种记账方式的使用逻辑（需要用户自行提供API Key来使用，详见API密钥教程），新版本已经提交苹果审核（v1.1.84+），还请大家耐心等待。感谢大家对简钱的支持！",
    "newBadge": "新",

    "noticeDate4": "2025年5月12日",
    "noticeHeading4": "v1.1.84+版本需要重新下载新的快捷指令",
    "noticeContent4": "已经升级到v1.1.84+版本的「简钱+」用户，请前往本网页的「快速记账」选项卡，获取最新的快捷指令，并删除之前下载的快捷指令，否则自然语言记账/智能快速记账将无法使用，谢谢！",
    
    "billingPage": "账单页面",

    // Update translations for copying API key to Symoney with correct paths
    "copyToSymoney": "打开简钱app，进入设置 > 快速记账 > 智能，将API密钥粘贴到相应字段中。",
    "copyToSymoneyCustom": "打开简钱app，进入设置 > 快速记账 > 智能 > 选择自定义服务商，将上述三个字段的信息填入对应位置。",

    // Add the URL notice for the custom section
    "customUrlNotice": "注意：URL需要填入完整的URL<br>举例1 - https://api.openai.com/v1/chat/completions 而非 https://api.openai.com<br>举例2 - https://api.deepseek.com/v1/chat/completions 而非 https://api.deepseek.com",

    // Add contact section translations
    "contactTab": "与我联系",
    "contactTitle": "与我联系",
    "contactIntro": "关于简钱有任何疑问？需要帮助解决问题？欢迎通过以下任何渠道与我联系。我很乐意为用户提供帮助并听取您的反馈。",
    "authorEmail": "电子邮件",
    "discordServer": "Discord 官方服务器",
    "socialHeading": "社交媒体 & 用户群",
    "authorRedbook": "作者小红书",
    "redbookGroup": "小红书用户群",
    "wechatGroup": "微信用户群",
    "scanToFollow": "扫码关注",
    "scanToJoin": "扫码加入"

  },
  "zh-tw": {
    "headerTitle": "簡錢 Symoney® 指南",
    "quickRecordTab": "快速記帳",
    "apiKeyTab": "API金鑰",
    "quickRecordTitle": "快速記帳指南",
    "apiKeyTitle": "API金鑰申請教學",
    "step1": "獲取捷徑：",
    "shortcut1Text": "「快速記帳 (OCR 辨識)」",
    "shortcut2Text": "「智能快速記帳 (智慧辨識)」",
    "noteSmart": "（僅「簡錢+」訂閱使用者可用）",
    "step2": "開啟 iOS「設定」。",
    "step3": "進入「輔助使用」。",
    "step4": "點選「觸控」。",
    "step5": "滑到最下面，點選「輕點背面」。",
    "step6": "點選「輕點兩下」。",
    "step7": "滑動到最下面找到剛才下載的捷徑。",
    "step8": "設定完成，現在您可以透過敲擊手機背部兩下來進行快速記帳了。",
    "actionNote": "具有 Action Button（iPhone 15 Pro 及以上機型）的使用者，也可以將此捷徑設定到 Action Button。",
    
    "siluFlow": "矽基流動",
    "volcanicEngine": "火山引擎",
    "siluFlowTitle": "矽基流動 API 金鑰申請教學",
    "volcanicEngineTitle": "火山引擎 API 金鑰申請教學",
    "siluStep1": "訪問矽基流動官方網站。",
    "siluStep2": "註冊或登入您的帳戶。",
    "siluStep3New": "進入控制台，左側面板中選擇「API金鑰」，然後點選「新建API金鑰」。",
    "siluStep5": "設定使用限制和權限。",
    "siluStep6": "確認並產生您的 API 金鑰。",
    "siluStep7": "複製並安全保存您的 API 金鑰。",
    "volcanicStep1": "前往火山引擎開發者平台。",
    "volcanicStep2": "註冊或登入您的開發者帳戶。",
    "volcanicStep3New": "控制台左側面板往下滑動，選擇「API Key 管理」，然後選擇「創建API Key」，然後名稱隨意，然後點選「創建」即可。",
    "volcanicStep4New": "然後在控制台左側面板中，向上滑動，選中「在線推理」，點選「創建推理接入點」。",
    "volcanicStep5New": "接入點名稱隨意，模型必須選擇「Doubao-1.5-pro-32k」，然後選擇250115版本。",
    "volcanicStep6New": "點選確定，最後點選「確認接入」即可。",
    "officialSite": "官方網站",

    "noticeTab": "公告",
    "noticeTitle": "公告",
    "noticeIntro": "這是簡錢 Symoney 的官方公告板。在這裡，您可以找到重要更新、功能發布和其他關於應用程式的關鍵資訊。請定期查看此頁面以獲取最新消息。",
    "noticeDate1": "2025年5月10日",
    "noticeHeading1": "歡迎使用簡錢指南",
    "noticeContent1": "感謝您使用簡錢！本指南提供了使用 iOS 捷徑進行快速記帳和設定 API 金鑰以使用進階功能的說明。我將不斷更新本指南，新增新功能和改進。如果您有任何疑問，請聯繫我。",
    
    "noticeDate2": "2025年5月10日",
    "noticeHeading2": "GitHub網頁無法打開的問題",
    "noticeContent2": "有使用者反映GitHub網頁在中國大陸地區無法訪問的情況，有可能是DNS導致的，可以嘗試修改設備的DNS，或者使用梯子進行訪問。抱歉給大家帶來的不便！",
    
    "noticeDate3": "2025年5月11日",
    "noticeHeading3": "智能快速記帳（捷徑）/ 自然語言記帳 不可用的問題",
    "noticeContent3": "由於9號至10號，大量使用者呈爆發式的湧入app，智能快速記帳和自然語言記帳的伺服器無法承受突如其來的大流量，最終導致當機。我已暫時撤下伺服器，並且重新設計了這兩種記帳方式的使用邏輯（需要使用者自行提供API Key來使用，詳見API金鑰教學），新版本已經提交蘋果審核（v1.1.84+），還請大家耐心等待。感謝大家對簡錢的支持！",
    "newBadge": "新",

    "noticeDate4": "2025年5月12日",
    "noticeHeading4": "v1.1.84+版本需要重新下載新的捷徑",
    "noticeContent4": "已經升級到v1.1.84+版本的「簡錢+」使用者，請前往本網頁的「快速記帳」分頁，獲取最新的捷徑，並刪除之前下載的捷徑，否則自然語言記帳/智能快速記帳將無法使用，謝謝！",
    
    "billingPage": "賬單頁面",

    // Update translations for copying API key to Symoney with correct paths
    "copyToSymoney": "開啟簡錢app，進入設定 > 快速記帳 > 智能，將API金鑰貼上到相應欄位中。",
    "copyToSymoneyCustom": "開啟簡錢app，進入設定 > 快速記帳 > 智能 > 選擇自訂服務商，將上述三個欄位的資訊填入對應位置。",

    // Add the URL notice for the custom section
    "customUrlNotice": "注意：URL需要填入完整的URL<br>舉例1 - https://api.openai.com/v1/chat/completions 而非 https://api.openai.com<br>舉例2 - https://api.deepseek.com/v1/chat/completions 而非 https://api.deepseek.com",

    // Add contact section translations
    "contactTab": "與我聯繫",
    "contactTitle": "與我聯繫",
    "contactIntro": "對於簡錢有任何疑問？需要協助解決問題？歡迎透過以下任何管道與我聯繫。我很樂意為使用者提供協助並聽取您的意見回饋。",
    "authorEmail": "電子郵件",
    "discordServer": "Discord 官方伺服器",
    "socialHeading": "社群媒體 & 使用者群組",
    "authorRedbook": "作者小紅書",
    "redbookGroup": "小紅書使用者群組",
    "wechatGroup": "微信使用者群組",
    "scanToFollow": "掃碼關注",
    "scanToJoin": "掃碼加入"

  }
};

// Add notice translations to main translations object
for (const lang in noticeTranslations) {
  Object.assign(translations[lang], noticeTranslations[lang]);
}

// Update Custom API tab translations to clarify it's using OpenAI as an example
translations["en"]["custom"] = "Custom";
translations["en"]["customTitle"] = "Custom API Key Guide (OpenAI Example)";
translations["en"]["customStep1"] = "Enter the request URL (e.g., https://api.openai.com/v1/chat/completions)";
translations["en"]["customStep2"] = "Enter the model name (e.g., gpt-4o)";
translations["en"]["customStep3"] = "Enter the API Key generated from OpenAI or your chosen provider";

translations["zh-cn"]["custom"] = "自定义";
translations["zh-cn"]["customTitle"] = "自定义 API 密钥教程（以 OpenAI 为例）";
translations["zh-cn"]["customStep1"] = "输入请求URL（例如：https://api.openai.com/v1/chat/completions）";
translations["zh-cn"]["customStep2"] = "输入模型名称（例如：gpt-4o）";
translations["zh-cn"]["customStep3"] = "输入从 OpenAI 或您选择的服务提供商获取的 API Key";

translations["zh-tw"]["custom"] = "自訂";
translations["zh-tw"]["customTitle"] = "自訂 API 金鑰教學（以 OpenAI 為例）";
translations["zh-tw"]["customStep1"] = "輸入請求URL（例如：https://api.openai.com/v1/chat/completions）";
translations["zh-tw"]["customStep2"] = "輸入模型名稱（例如：gpt-4o）";
translations["zh-tw"]["customStep3"] = "輸入從 OpenAI 或您選擇的服務提供商獲取的 API Key";

// Current language
let currentLanguage = 'zh-cn';

// Function to change the language
function changeLanguage(lang) {
  currentLanguage = lang;
  const dict = translations[lang];
  
  // Update text translations
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      // Check if the content contains HTML tags
      if (dict[key].includes('<br>')) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });
  
  // Update active language in dropdown
  document.querySelectorAll('.dropdown-item').forEach(item => {
    item.classList.remove('active');
  });
  document.querySelector(`.dropdown-item[data-lang="${lang}"]`).classList.add('active');
  
  // Update dropdown button text
  const langName = lang === 'en' ? 'English' : (lang === 'zh-cn' ? '简体中文' : '繁體中文');
  document.querySelector('.dropdown-button-text').textContent = langName;
  
  // Close dropdown
  document.querySelector('.language-dropdown').classList.remove('open');
  
  // Refresh notices for the new language
  renderNotices(lang);
  checkNewNotices();
}

// Function to render notices based on current language
function renderNotices(lang) {
  const noticeContainer = document.getElementById('noticeContainer');
  if (!noticeContainer) return;
  
  // Clear existing notices
  noticeContainer.innerHTML = '';
  
  // Get notices for current language
  const currentNotices = notices[lang];
  if (!currentNotices || !currentNotices.length) return;
  
  // Add each notice to the container
  currentNotices.forEach(notice => {
    const noticeElement = document.createElement('div');
    let className = 'notice-item';
    if (notice.urgent) {
      className += ' urgent';
    } else if (notice.warning) {
      className += ' warning';
    }
    noticeElement.className = className;
    noticeElement.setAttribute('data-notice-id', notice.id);
    noticeElement.onclick = () => markNoticeAsRead(notice.id);
    
    const dateElement = document.createElement('div');
    dateElement.className = 'notice-date';
    dateElement.textContent = notice.date;
    
    const headingElement = document.createElement('h3');
    headingElement.className = 'notice-heading';
    
    const headingText = document.createElement('span');
    headingText.textContent = notice.heading;
    headingElement.appendChild(headingText);
    
    // Only add NEW badge if the notice is new
    if (notice.isNew) {
      const newBadge = document.createElement('span');
      newBadge.className = 'notice-new';
      newBadge.textContent = translations[lang].newBadge;
      headingElement.appendChild(newBadge);
    }
    
    const contentElement = document.createElement('div');
    contentElement.className = 'notice-content';
    contentElement.textContent = notice.content;
    
    // Add button directly if the notice has buttonText and buttonAction properties
    if (notice.buttonText && notice.buttonAction) {
      const readMoreLink = document.createElement('div');
      readMoreLink.className = 'read-more-link';
      readMoreLink.innerHTML = `<a href="#" onclick="event.stopPropagation(); switchTab('${notice.buttonAction}'); return false;">${notice.buttonText}</a>`;
      
      // Add spacing between content and button
      contentElement.appendChild(document.createElement('br'));
      contentElement.appendChild(readMoreLink);
    }
    
    noticeElement.appendChild(dateElement);
    noticeElement.appendChild(headingElement);
    noticeElement.appendChild(contentElement);
    
    noticeContainer.appendChild(noticeElement);
  });
  
  // Check for new notices after rendering
  setTimeout(checkNewNotices, 100);
}

// Function to toggle the language dropdown
function toggleDropdown() {
    const dropdown = document.querySelector('.language-dropdown');
    dropdown.classList.toggle('open');
}

// Function to switch between main tabs
function switchTab(tabName) {
    // Update active tab
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`.tab[data-tab="${tabName}"]`).classList.add('active');
    
    // Update active content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.querySelector(`.tab-content[data-tab="${tabName}"]`).classList.add('active');
    
    // Remove this line since we don't want notices to be auto-marked as read
    // if (tabName === 'notice') {
    //     markNoticesAsViewed();
    // }
    
    // Animate new content
    const activeContent = document.querySelector(`.tab-content[data-tab="${tabName}"]`);
    activeContent.style.animation = 'none';
    activeContent.offsetHeight; // Trigger reflow
    activeContent.style.animation = 'fadeIn 0.5s ease forwards';
    
    // Animate list items
    const listItems = activeContent.querySelectorAll('ol > li');
    listItems.forEach((item, index) => {
        item.style.animation = 'none';
        item.offsetHeight; // Trigger reflow
        item.style.animation = `slideIn 0.5s ease both ${0.1 * (index + 1)}s`;
    });
    
    // If API tab is selected, activate first sub-tab by default
    if (tabName === 'apiKey') {
        switchApiTab('siluFlow');
    }
}

// Function to switch between API sub-tabs
function switchApiTab(apiTabName) {
    // If trying to switch to the removed openai tab, default to siluFlow
    if (apiTabName === 'openai') {
        apiTabName = 'siluFlow';
    }
    
    // Update active sub-tab
    document.querySelectorAll('.api-sub-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`.api-sub-tab[data-api-tab="${apiTabName}"]`).classList.add('active');
    
    // Update active content
    document.querySelectorAll('.api-sub-content').forEach(content => {
        content.classList.remove('active');
    });
    document.querySelector(`.api-sub-content[data-api-tab="${apiTabName}"]`).classList.add('active');
    
    // Animate list items
    const activeContent = document.querySelector(`.api-sub-content[data-api-tab="${apiTabName}"]`);
    activeContent.style.animation = 'none';
    activeContent.offsetHeight; // Trigger reflow
    activeContent.style.animation = 'fadeIn 0.5s ease forwards';
    
    const listItems = activeContent.querySelectorAll('ol > li');
    listItems.forEach((item, index) => {
        item.style.animation = 'none';
        item.offsetHeight; // Trigger reflow
        item.style.animation = `slideIn 0.5s ease both ${0.1 * (index + 1)}s`;
    });
}

// Function to mark a specific notice as read
function markNoticeAsRead(noticeId) {
    // Get viewed notices from localStorage
    const viewedNotices = JSON.parse(localStorage.getItem('symoneyViewedNotices') || '{}');
    
    // Get the notice element
    const noticeItem = document.querySelector(`.notice-item[data-notice-id="${noticeId}"]`);
    if (!noticeItem) return;
    
    // Get the new badge element
    const newBadge = noticeItem.querySelector('.notice-new');
    
    // We no longer need this part since buttons are rendered directly
    // if (noticeId === 'notice3' || noticeId === 'notice4') {
    //   // Special handling for specific notices is no longer needed
    //   // since buttons are already rendered
    // }
    
    // If this notice hasn't been viewed yet and has a new badge
    if (!viewedNotices[noticeId] && newBadge) {
        // Mark as viewed
        viewedNotices[noticeId] = Date.now();
        newBadge.style.display = 'none';
        
        // Save updated viewed notices to localStorage
        localStorage.setItem('symoneyViewedNotices', JSON.stringify(viewedNotices));
        
        // Check if all notices have been read
        checkAllNoticesRead();
    }
}

// Function to check if all notices have been read
function checkAllNoticesRead() {
    const viewedNotices = JSON.parse(localStorage.getItem('symoneyViewedNotices') || '{}');
    const noticeItems = document.querySelectorAll('.notice-item[data-notice-id]');
    let allRead = true;
    
    noticeItems.forEach(item => {
        const noticeId = item.getAttribute('data-notice-id');
        if (!viewedNotices[noticeId]) {
            allRead = false;
        }
    });
    
    // Update tab badge visibility
    const noticeTabBadge = document.getElementById('noticeTabBadge');
    if (noticeTabBadge) {
        noticeTabBadge.style.display = allRead ? 'none' : 'inline-block';
    }
}

// Function to check for new notices - modified to work with dynamic notices
function checkNewNotices() {
    const viewedNotices = JSON.parse(localStorage.getItem('symoneyViewedNotices') || '{}');
    const noticeItems = document.querySelectorAll('.notice-item');
    let hasNewNotices = false;
    
    noticeItems.forEach(item => {
        const noticeId = item.getAttribute('data-notice-id');
        const newBadge = item.querySelector('.notice-new');
        
        if (!newBadge) return;
        
        if (!viewedNotices[noticeId]) {
            hasNewNotices = true;
            newBadge.style.display = 'inline-block';
        } else {
            newBadge.style.display = 'none';
        }
    });
    
    // Update tab badge
    const noticeTabBadge = document.getElementById('noticeTabBadge');
    if (noticeTabBadge) {
        noticeTabBadge.style.display = hasNewNotices ? 'inline-block' : 'none';
    }
}

// Initialize the page when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set default language
    changeLanguage('zh-cn');
    
    // Set default tab
    switchTab('quickRecord');
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        const dropdown = document.querySelector('.language-dropdown');
        if (!dropdown.contains(e.target) && dropdown.classList.contains('open')) {
            dropdown.classList.remove('open');
        }
    });
    
    // Make sure the badges are visible
    setTimeout(checkNewNotices, 500);
});

// Add this to ensure styles are applied properly
document.head.insertAdjacentHTML('beforeend', `
<style>
.notice-new {
    display: inline-block !important;
    margin-left: 8px;
    background-color: #ef4444;
    color: white;
    font-size: 0.65rem;
    font-weight: 600;
    padding: 2px 6px;
    border-radius: 8px;
    vertical-align: middle;
    animation: pulse 1.5s infinite;
}

.new-badge {
    display: inline-block !important;
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: #ef4444;
    color: white;
    font-size: 0.65rem;
    font-weight: 600;
    padding: 2px 5px;
    border-radius: 8px;
    animation: pulse 1.5s infinite;
}

.read-more-link {
    margin-top: 10px;
    text-align: right;
}

.read-more-link a {
    display: inline-block;
    background-color: #3b82f6;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    text-decoration: none;
    font-size: 0.85rem;
    transition: background-color 0.2s;
}

.read-more-link a:hover {
    background-color: #2563eb;
    text-decoration: none;
}
</style>
`);