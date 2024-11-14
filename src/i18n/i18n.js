// which is used to initialize i18next library for localization.

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import frTranslation from './locales/fr.json';

// 初始化 i18next
i18n
    .use(initReactI18next) // 将 i18n 传递给 react-i18next
    .init({
        resources: {
            en: { translation: enTranslation },
            fr: { translation: frTranslation }
        },
        lng: 'en',           // 默认语言
        fallbackLng: 'en',    // 语言不可用时使用的后备语言
        interpolation: {
            escapeValue: false, // React 已经为我们安全处理 XSS
        },
    });

export default i18n;
