import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "src/locales/en.json";
import it from "src/locales/it.json";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: en,
  it: it,
};

export const getLanguage = () => {
  if (typeof window !== "undefined") {
    const currentLang = localStorage.getItem("i18nextLng");
    return !currentLang ? "en" : currentLang;
  } else {
    return "en";
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: getLanguage(),
    fallbackLng: "it",
    debug: true,

    load: "languageOnly",

    ns: "translation",
    defaultNS: "translation",

    supportedLngs: ["en", "it"],

    react: {
      useSuspense: false,
    },

    interpolation: {
      escapeValue: true, // react already safes from xss
    },
  });

export default i18n;
