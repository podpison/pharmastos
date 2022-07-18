import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import translationRu from "./locales/ru.json";
import translationUa from "./locales/ua.json";

const resources = {
  ru: {
    translation: translationRu
  },
  ua: {
    translation: translationUa
  }
}

let currnetLng = localStorage.getItem('lng') || 'ru';

i18n
  .use(initReactI18next)
  .init({
    lng: currnetLng,
    fallbackLng: 'ru',
    resources
  });

export default i18n;