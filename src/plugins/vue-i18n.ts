import { createI18n } from "vue-i18n";
import messages, { defaultLocale } from "@/i18n";

const i18n = createI18n({
  // Set locale
  locale: defaultLocale,

  // Set fallback locale
  fallbackLocale: defaultLocale,

  // Must be set to 'false', to use Composition API
  legacy: false,

  // Refer a global scope Composer instance of i18n
  globalInjection: true,

  // Set locale messages
  messages,
});

export default i18n;
