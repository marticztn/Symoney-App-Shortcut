// Translations object with all supported languages
const translations = {
  "en": {
    "headerTitle": "Symoney Guide",
    "title": "Symoney Quick Guide",
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
    "volcanicEngine": "Volcanic Engine",
    "openai": "OpenAI",
    "siluFlowTitle": "Silicone Flow API Key Guide",
    "volcanicEngineTitle": "Volcanic Engine API Key Guide",
    "openaiTitle": "OpenAI API Key Guide",
    "siluStep1": "Visit the Silicone Flow official website.",
    "siluStep2": "Register or log in to your account.",
    "siluStep3": "Navigate to the dashboard and select 'API Management'.",
    "siluStep4": "Click 'Create New API Key'.",
    "siluStep5": "Set up usage limits and permissions.",
    "siluStep6": "Confirm and generate your API key.",
    "siluStep7": "Copy and securely store your API key.",
    "volcanicStep1": "Go to the Volcanic Engine developer portal.",
    "volcanicStep2": "Sign up or sign in to your developer account.",
    "volcanicStep3": "Select 'API Keys' from the developer dashboard.",
    "volcanicStep4": "Click 'Create Key' button.",
    "volcanicStep5": "Choose the services you need access to.",
    "volcanicStep6": "Set any usage limits or restrictions.",
    "volcanicStep7": "Generate and save your API key securely.",
    "openaiStep1": "Go to OpenAI's website at openai.com.",
    "openaiStep2": "Sign up or log in to your OpenAI account.",
    "openaiStep3": "Navigate to the API section.",
    "openaiStep4": "Go to 'API Keys' in your account settings.",
    "openaiStep5": "Click 'Create New Secret Key'.",
    "openaiStep6": "Give your key a name (optional).",
    "openaiStep7": "Create and safely store your new API key.",
    "officialSite": "Visit Official Website",
    "languageText": "Language"
  },
  "zh-cn": {
    "headerTitle": "简钱 Symoney™ 指南",
    "title": "简钱 Symoney™ 指南",
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
    "openai": "OpenAI",
    "siluFlowTitle": "硅基流动 API 密钥申请教程",
    "volcanicEngineTitle": "火山引擎 API 密钥申请教程",
    "openaiTitle": "OpenAI API 密钥申请教程",
    "siluStep1": "访问硅基流动官方网站。",
    "siluStep2": "注册或登录您的账户。",
    "siluStep3": "进入控制台，选择「API 管理」。",
    "siluStep4": "点击「创建新的 API 密钥」。",
    "siluStep5": "设置使用限制和权限。",
    "siluStep6": "确认并生成您的 API 密钥。",
    "siluStep7": "复制并安全保存您的 API 密钥。",
    "volcanicStep1": "前往火山引擎开发者平台。",
    "volcanicStep2": "注册或登录您的开发者账户。",
    "volcanicStep3": "在开发者控制台中选择「API 密钥」。",
    "volcanicStep4": "点击「创建密钥」按钮。",
    "volcanicStep5": "选择您需要访问的服务。",
    "volcanicStep6": "设置任何使用限制或约束。",
    "volcanicStep7": "生成并安全保存您的 API 密钥。",
    "openaiStep1": "访问 OpenAI 官网 openai.com。",
    "openaiStep2": "注册或登录您的 OpenAI 账户。",
    "openaiStep3": "导航至 API 部分。",
    "openaiStep4": "在账户设置中找到「API 密钥」。",
    "openaiStep5": "点击「创建新密钥」。",
    "openaiStep6": "为您的密钥命名（可选）。",
    "openaiStep7": "创建并安全保存您的新 API 密钥。",
    "officialSite": "访问官方网站",
    "languageText": "语言"
  },
  "zh-tw": {
    "headerTitle": "簡錢 Symoney™ 指南",
    "title": "簡錢 Symoney™ 指南",
    "quickRecordTab": "快速記帳",
    "apiKeyTab": "API金鑰",
    "quickRecordTitle": "快速記帳指南",
    "apiKeyTitle": "API金鑰申請教學",
    "step1": "獲取捷徑：",
    "shortcut1Text": "「快速記帳 (OCR 辨識)」",
    "shortcut2Text": "「智能快速記帳 (智慧辨識)」",
    "noteSmart": "（僅「簡錢+」訂閱用戶可用）",
    "step2": "打開 iOS「設置」。",
    "step3": "進入「輔助功能」。",
    "step4": "點擊「觸控」。",
    "step5": "滑到最下面，點擊「輕點背面」。",
    "step6": "點擊「輕點兩下」。",
    "step7": "滑動到最下面找到剛才下載的捷徑。",
    "step8": "配置完成，現在您可以通過敲擊手機背部兩下來進行快速記帳了。",
    "actionNote": "具有 Action Button（iPhone 15 Pro 及以上機型）的使用者，也可以將此捷徑設定到 Action Button。",
    "siluFlow": "矽基流動",
    "volcanicEngine": "火山引擎",
    "openai": "OpenAI",
    "siluFlowTitle": "矽基流動 API 金鑰申請教學",
    "volcanicEngineTitle": "火山引擎 API 金鑰申請教學",
    "openaiTitle": "OpenAI API 金鑰申請教學",
    "siluStep1": "訪問矽基流動官方網站。",
    "siluStep2": "註冊或登入您的帳戶。",
    "siluStep3": "進入控制台，選擇「API 管理」。",
    "siluStep4": "點擊「創建新的 API 金鑰」。",
    "siluStep5": "設置使用限制和權限。",
    "siluStep6": "確認並產生您的 API 金鑰。",
    "siluStep7": "複製並安全保存您的 API 金鑰。",
    "volcanicStep1": "前往火山引擎開發者平台。",
    "volcanicStep2": "註冊或登入您的開發者帳戶。",
    "volcanicStep3": "在開發者控制台中選擇「API 金鑰」。",
    "volcanicStep4": "點擊「創建金鑰」按鈕。",
    "volcanicStep5": "選擇您需要訪問的服務。",
    "volcanicStep6": "設置任何使用限制或約束。",
    "volcanicStep7": "產生並安全保存您的 API 金鑰。",
    "openaiStep1": "訪問 OpenAI 官網 openai.com。",
    "openaiStep2": "註冊或登入您的 OpenAI 帳戶。",
    "openaiStep3": "導航至 API 部分。",
    "openaiStep4": "在帳戶設置中找到「API 金鑰」。",
    "openaiStep5": "點擊「創建新金鑰」。",
    "openaiStep6": "為您的金鑰命名（可選）。",
    "openaiStep7": "創建並安全保存您的新 API 金鑰。",
    "officialSite": "訪問官方網站",
    "languageText": "語言"
  }
};

// Function to change the language
function changeLanguage(lang) {
  const dict = translations[lang];
  
  // Update text translations
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
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

// Function for copying example (removed in this version)
function copyExample(type) {
    // Removed functionality
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
        const dropdownButton = document.querySelector('.dropdown-button');
        
        if (!dropdown.contains(e.target) && dropdown.classList.contains('open')) {
            dropdown.classList.remove('open');
        }
    });
});