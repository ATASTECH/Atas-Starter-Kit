'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../atasui/navbar-menu";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "../LanguageSwitcher";
import Logo from "./logo";
import ThemeSwitcher from "../ThemeSwitcher";
import { useTranslations } from 'next-intl';

export function NavbarMenu() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const t = useTranslations('Navbar'); // Dil desteği ekleme

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-5xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <div className="flex items-center justify-between text-white py-2 px-4 rounded-full w-full">
          <div className="flex items-center space-x-4">
            <HoveredLink href="/">
              <Logo />
            </HoveredLink>
            <HoveredLink href="/">
              <span className="relative text-xl text-center">{t('title')}</span>
            </HoveredLink>
          </div>
          <div className="flex space-x-8">
            <MenuItem setActive={setActive} active={active} item={t('products')}>
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title={t('product1.title')}
                  href="https://github.com/ATASTECH"
                  src="/images/atastch.png"
                  description={t('product1.description')}
                />
                <ProductItem
                  title={t('product2.title')}
                  href="https://github.com/ATASTECH"
                  src="/images/atastch.png"
                  description={t('product2.description')}
                />
                <ProductItem
                  title={t('product3.title')}
                  href="https://github.com/ATASTECH"
                  src="/images/atastechg.png"
                  description={t('product3.description')}
                />
                <ProductItem
                  title={t('product4.title')}
                  href="https://github.com/ATASTECH"
                  src="/images/atastechg.png"
                  description={t('product4.description')}
                />
              </div>
            </MenuItem>
            <HoveredLink href="/">{t('pricing')}</HoveredLink>
            <HoveredLink href="/">{t('blog')}</HoveredLink>
            <HoveredLink href="/">{t('contact')}</HoveredLink>
          </div>
          <div className="flex space-x-4">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </div>
      </Menu>
    </div>
  );
}

export default NavbarMenu;
