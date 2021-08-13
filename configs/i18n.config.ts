import { Options } from "@nuxtjs/i18n";

export const i18n: Options = {
  locales: [{ code: "en", iso: "en-US", file: "en.js" }],
  defaultLocale: "en",
  vueI18n: {
    fallbackLocale: "en"
  },
  lazy: true,
  langDir: "locales/"
};
