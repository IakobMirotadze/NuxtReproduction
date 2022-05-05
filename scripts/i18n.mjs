import en from "~/locales/en.json";
import ka from "~/locales/ka.json";

export default async () => ({
    strategy: "no_prefix",
    locale: "en",
    fallbackLocale: "en",
    messages: {
        en: en,
        ka: ka,
    },
    detectBrowserLanguage: {
        useCookie: true,
        cookieKey: "i18n_redirected",
        redirectOn: 'root',
    },
})
