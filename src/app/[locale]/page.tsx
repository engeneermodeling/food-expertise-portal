'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();

  const modules = [
    {
      id: 'systems',
      href: `/${locale}/systems`,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      ),
    },
    {
      id: 'standards',
      href: `/${locale}/standards`,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      ),
    },
    {
      id: 'laboratory',
      href: `/${locale}/laboratory`,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      ),
    },
    {
      id: 'education',
      href: `/${locale}/education`,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      ),
    },
    {
      id: 'glossary',
      href: `/${locale}/glossary`,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      ),
    },
    {
      id: 'search',
      href: `/${locale}/search`,
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      ),
    },
  ];

  return (
    <div className="relative">
      {/* ================= HERO SECTION ================= */}
      <div className="relative min-h-screen">
        {/* Декоративний фон */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-green-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/30" />
        
        {/* Сітка на фоні */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#80808023_1px,transparent_1px),linear-gradient(to_bottom,#80808023_1px,transparent_1px)]" />
        
        {/* Градієнтні кола */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-400/20 dark:bg-green-600/10 rounded-full blur-3xl" />

        {/* Контент Hero */}
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-32">
          <div className="max-w-4xl">
            {/* Бейдж */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-2 text-sm font-medium text-blue-700 backdrop-blur-sm dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              {t('hero.badge')}
            </div>

            {/* Заголовок */}
            <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-slate-900 dark:text-white">
                {t('hero.title1')}
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-green-400">
                {t('hero.title2')}
              </span>
            </h1>

            {/* Опис */}
            <p className="mt-8 text-xl leading-relaxed text-slate-600 dark:text-slate-300">
              {t('hero.description')}
            </p>

            {/* CTA кнопки */}
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href={`/${locale}/education`}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 dark:bg-blue-600 dark:shadow-blue-600/20 dark:hover:bg-blue-700"
              >
                {t('hero.ctaPrimary')}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link
                href={`/${locale}/standards`}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-300 px-8 py-4 text-base font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-blue-600 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
              >
                {t('hero.ctaSecondary')}
              </Link>
            </div>

            {/* Статистика */}
            <div className="mt-20 grid grid-cols-3 gap-8 border-t border-slate-200 pt-12 dark:border-slate-800">
              <div>
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">150+</div>
                <div className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">
                  {t('hero.stats.standards')}
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 dark:text-green-400">12</div>
                <div className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">
                  {t('hero.stats.systems')}
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 dark:text-white">500+</div>
                <div className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">
                  {t('hero.stats.materials')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= DASHBOARD CARDS SECTION ================= */}
      <section className="relative border-t border-slate-200 bg-white py-24 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6">
          {/* Заголовок секції */}
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              {t('modules.title')}
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              {t('modules.subtitle')}
            </p>
          </div>

          {/* Сітка карток */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((module) => (
              <Link
                key={module.id}
                href={module.href}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-700 dark:hover:shadow-blue-500/5"
              >
                {/* Іконка */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-950 dark:text-blue-400 dark:group-hover:bg-blue-600 dark:group-hover:text-white">
                  <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {module.icon}
                  </svg>
                </div>

                {/* Текст */}
                <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">
                  {t(`modules.items.${module.id}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {t(`modules.items.${module.id}.description`)}
                </p>

                {/* Стрілка при наведенні */}
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-blue-400">
                  {t('modules.open')}
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}