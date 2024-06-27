"use client";
import { useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";

const locales = [
  { code: 'en', label: 'English' },
  { code: 'tr', label: 'Türkçe' },
  { code: 'de', label: 'Deutsch' },
  { code: 'es', label: 'Español' },
  { code: 'zh', label: '中文' },
  { code: 'ar', label: 'العربية' },
  { code: 'hi', label: 'हिंदी' },
  { code: 'fr', label: 'Français' },
  { code: 'ru', label: 'Русский' },
  { code: 'pt', label: 'Português' },
  { code: 'ja', label: '日本語' }
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const t = useTranslations('LanguageSwitcher');
  const currentLocale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const handleLocaleChange = (locale: string) => {
    const pathname = window.location.pathname;
    const searchParams = window.location.search;
    const hash = window.location.hash;

    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.push(`${newPath}${searchParams}${hash}`);
    setIsOpen(false);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button type="button" variant="ghost" size="icon">
          <Languages className="size-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {locales.map((locale) => (
          <DropdownMenuCheckboxItem
            key={locale.code}
            checked={currentLocale === locale.code}
            onClick={() => handleLocaleChange(locale.code)}
          >
            {t(locale.code)}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
