import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Desteklenen tüm dillerin listesi
  locales: ['en', 'tr', 'es', 'zh', 'ar', 'hi', 'fr', 'ru', 'pt', 'ja', 'de'],

  // Eşleşen dil bulunamadığında kullanılacak varsayılan dil
  defaultLocale: 'en'
});

export const config = {
  // Sadece uluslararasılaştırılmış yolları eşleştir
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
