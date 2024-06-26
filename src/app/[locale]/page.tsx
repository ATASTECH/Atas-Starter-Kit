import Hero from '@/components/atasui/hero';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white dark:bg-black">
      <span className="text-6xl text-center bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent mt-2 px-4 py-2">
        {t('hello')} 👋
      </span>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Hero />
      </div>
    </main>
  );
}
