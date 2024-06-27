import DockMenu from '@/components/atasui/dock-menu';
import Hero from '@/components/atasui/hero';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-white dark:bg-black">
      <div className="z-10 w-full max-w-5xl items-center justify-between lg:flex">
        <Hero />
      </div>
      <DockMenu />
    </main>
  );
}
