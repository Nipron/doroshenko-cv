import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import en from "./en.json";
import de from "./de.json";

const resources = {
    en: {
        translation: en,
    },
    de: {
        translation: de,
    },

};

i18n.use(initReactI18next).init({
    resources,
    compatibilityJSON: 'v3',
    lng: "en",
    fallbackLng: "en",
    react: {
        useSuspense: false,
    },
});

export default i18n;