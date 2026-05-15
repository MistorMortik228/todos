import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import eng from "./translations/eng.json"
import rus from "./translations/rus.json"

const savedLang = localStorage.getItem('lang') || 'ru'

i18n.use(initReactI18next)
  .init({
    resources: {
      en: { translation: eng },
      ru: { translation: rus }
    },
    lng: savedLang
  })

export default i18n