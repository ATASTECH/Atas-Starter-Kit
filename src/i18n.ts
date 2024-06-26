import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Desteklenen tüm dillerin listesi
const locales = ['en', 'tr', 'es', 'zh', 'ar', 'hi', 'fr', 'ru', 'pt', 'ja', 'de'];

export default getRequestConfig(async ({ locale }) => {
  // Gelen `locale` parametresinin geçerli olduğunu doğrulayın
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
