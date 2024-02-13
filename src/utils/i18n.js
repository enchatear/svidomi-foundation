import i18next from 'i18next';
import Backend from "i18next-http-backend";
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(LanguageDetector)
  .use(Backend)
  .init({
    returnNull: false,
    fallbackLng: 'en',
    backend: {
      loadPath: "./assets/locales/{{lng}}.json"
    },
    supportedLngs: ["en", "ua"],
    detection: {
      order: ["localStorage", "cookie"],
      caches: ["localStorage", "cookie"]
    },
  })
  .then(t => {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.dataset.i18n;
      const translation = t(key);
      if (translation) {
        element.textContent = translation;
      }
    });
  });

document.getElementById('uaLang').addEventListener('click', () => {
  console.log('changingLanguage...');
  i18next.changeLanguage('ua').then(t => {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.dataset.i18n;
      console.log('key', key);
      const translation = t(key);
      console.log('translation', translation);
      if (translation) {
        element.textContent = translation;
      }
    });
  });
})

document.getElementById('enLang').addEventListener('click', () => {
  console.log('changingLanguage...');
  i18next.changeLanguage('en', (err, t) => {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.dataset.i18n;
      console.log('key', key);
      const translation = t(key);
      console.log('translation', translation);
      if (translation) {
        element.textContent = translation;
      }
    })
  });
})