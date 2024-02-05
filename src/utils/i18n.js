import i18next from 'i18next';
import Backend from "i18next-http-backend";
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(LanguageDetector)
  .use(Backend)
  .init({
    returnNull: false,
    fallbackLng: 'ua',
    backend: {
      loadPath: "./assets/locales/{{lng}}.json"
    },
    supportedLngs: ["ua", "en"],
    detection: {
      order: ["localStorage", "cookie"],
      caches: ["localStorage", "cookie"]
    },
  }).then(t => {
    document.querySelector('[data-i18n="hello"]').textContent = t('hello')
});