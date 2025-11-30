import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from './locales/en/translation.json';
import msTranslations from './locales/ms/translation.json';
import idTranslations from './locales/id/translation.json';

const initI18n = () => {
  i18next
    .use(LanguageDetector)
    .init({
      fallbackLng: 'en',
      debug: false,
      detection: {
        order: ['localStorage', 'navigator', 'htmlTag'],
        caches: ['localStorage'],
        lookupLocalStorage: 'language'
      },
      resources: {
        en: {
          translation: enTranslations
        },
        ms: {
          translation: msTranslations
        },
        id: {
          translation: idTranslations
        }
      },
      interpolation: {
        escapeValue: false
      }
    });

  return i18next;
};

export default initI18n;