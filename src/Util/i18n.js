import i18next from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
i18next.use(initReactI18next).init({
  interpolation: {
    escapedValue: false
  },
  lng: "en",
  resources: {
    en: {
      translation: {
        chat: "Chat",
        settings: "Settings",
        send: "Send",
        change_username: "Change Username",
        change: "Change",
        change_lang: "Change Language",
        theme: "Theme",
        light: "Light",
        dark: "Dark",
        clock_display: "Clock Display",
        "12Hours": "12 Hours",
        "24Hours": "24 Hours",
        send_shortcut: "Send By Ctrl+Enter",
        on: "On",
        off: "Off"
      }
    },
    fa: {
      translation: {
        chat: "چت",
        settings: "تنظیمات",
        send: "ارسال",
        change_username: "تغییر نام کاربری",
        change: "تغییر",
        change_lang: "تغییر زبان",
        theme: "قالب",
        light: "روشن",
        dark: "تیره",
        clock_display: "ساعت",
        "12Hours": "12 ساعت",
        "24Hours": "24 ساعت",
        send_shortcut: "ارسال با Ctrl+Enter",
        on: "فعال",
        off: "غیر فعال"
      }
    }
  }
});
export default i18next;
