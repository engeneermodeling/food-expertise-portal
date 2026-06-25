import { getRequestConfig } from 'next-intl/server';
import { locales } from './config/i18n';

export default getRequestConfig(async ({ locale }) => {
  // Перевірка на валідність locale
  if (!locale || !locales.includes(locale as any)) {
    return {
      locale: 'uk',
      messages: {}
    };
  }

  try {
    return {
      locale, // ← Це обов'язково!
      messages: (await import(`./messages/${locale}.json`)).default
    };
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    return {
      locale: 'uk',
      messages: {}
    };
  }
});