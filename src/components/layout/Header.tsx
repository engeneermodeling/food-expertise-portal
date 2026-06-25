'use client';

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Logo } from "@/components/ui/Logo";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { ThemeToggle } from "../ui/ThemeToggle";

export default function Header() {
  const locale = useLocale();
  const t = useTranslations('navigation'); // 👈 Додай це
  
  const navItems = [
    { href: `/${locale}`, label: t('home') }, // 👈 Використовуй переклади
    { href: `/${locale}/education`, label: t('education') },
    { href: `/${locale}/systems`, label: t('systems') },
    { href: `/${locale}/standards`, label: t('standards') },
    { href: `/${locale}/glossary`, label: t('glossary') },
    { href: `/${locale}/laboratory`, label: t('laboratory') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  return (
    <header
      className="
        sticky top-0 z-50
        border-b
        border-slate-200
        dark:border-slate-800
        bg-white/90
        dark:bg-slate-950/90
        backdrop-blur-md
      "
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Логотип */}
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <Logo variant="compact" />
          </Link>

          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-1 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-md transition-colors dark:text-slate-300 dark:hover:text-blue-400 dark:hover:bg-slate-800"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}