import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json";
import pl from "./locales/pl/translation.json";
import ru from "./locales/ru/translation.json";
import de from "./locales/de/translation.json";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            pl: { translation: pl },
            ru: { translation: ru },
            de: { translation: de }
        },
        lng: localStorage.getItem("lang") || "en",
        fallbackLng: "en",
        interpolation: { escapeValue: false }
    });

export default i18n;