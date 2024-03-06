import i18next from 'i18next';
import Backend from "i18next-http-backend";
import LanguageDetector from 'i18next-browser-languagedetector';
// import logoEn from '../assets/icons/logo-en.svg';
// import logoUa from '../assets/icons/logo-ua.svg';
// import logoEnW from '../assets/icons/logo-en-w.svg';
// import logoUaW from '../assets/icons/logo-ua-w.svg';

const logosMap = {
  header_ua: '/assets/icons/logo-ua.svg',
  header_en: '/assets/icons/logo-en.svg',
  footer_ua: '/assets/icons/logo-ua-w.svg',
  footer_en: '/assets/icons/logo-en-w.svg',
}

const getInactiveLang = (currentLang) => currentLang === 'ua' ? 'en' : 'ua';

const changeLogo = async (lang) => {
    const headerSvgContainer = document.getElementById('headerLogoSvg');
    const footerSvgContainer = document.getElementById('footerLogoSvg');

    const headerSvgUrl = logosMap[`header_${lang}`];
    const footerSvgUrl = logosMap[`footer_${lang}`];

    const headerSvgResponse = await fetch(headerSvgUrl);
    const headerSvg = await headerSvgResponse.text();

    const footerSvgResponse = await fetch(footerSvgUrl);
    const footerSvg = await footerSvgResponse.text();

    const svgTagRegex = /<svg.*?>/i;

    if (svgTagRegex.test(headerSvg) && window.innerWidth > 624) {
      headerSvgContainer.innerHTML = headerSvg;
    }
    if (svgTagRegex.test(footerSvg)) {
      footerSvgContainer.innerHTML = footerSvg;
    }
}

const changeLanguageOnPage = (t) => {
  const {language} = i18next;
  changeLogo(language)
    .then(() => {
      document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        const translation = t(key);
        if (translation) {
          element.textContent = translation;
        }
      });

      document.querySelectorAll('[data-i18n_placeholder]').forEach(element => {
        const key = element.dataset.i18n_placeholder;
        const translation = t(key);
        if (translation) {
          element.placeholder = translation;
        }
      });

      document.getElementById(`${getInactiveLang(language)}Lang`).classList.remove('active-lang');
      document.getElementById(`${language}Lang`).classList.add('active-lang');
    });
}

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
  .then(changeLanguageOnPage);

document.getElementById('uaLang')?.addEventListener('click', () => {
  i18next.changeLanguage('ua').then(changeLanguageOnPage);
})

document.getElementById('enLang')?.addEventListener('click', () => {
  i18next.changeLanguage('en').then(changeLanguageOnPage);
})