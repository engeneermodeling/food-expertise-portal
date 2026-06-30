import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function HomePage() {
  const t = useTranslations('home');

  const moduleCards = [
    { key: 'education', href: '/education', icon: '📚' },
    { key: 'standards', href: '/standards', icon: '📋' },
    { key: 'systems', href: '/systems', icon: '🏗️' },
    { key: 'laboratory', href: '/laboratory', icon: '🔬' },
    { key: 'glossary', href: '/glossary', icon: '📖' },
  ] as const;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-900 dark:to-slate-900 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              <span>🎓</span>
              <span className="ml-2">{t('hero.badge')}</span>
            </div>
            <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {t('hero.title1')}
              <br />
              <span className="text-blue-200">{t('hero.title2')}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
              {t('hero.description')}
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                href="/education"
                className="rounded-lg bg-white px-8 py-3 text-base font-semibold text-blue-600 shadow-lg transition-all hover:bg-blue-50 hover:shadow-xl"
              >
                {t('hero.ctaPrimary')}
              </Link>
              <Link
                href="/standards"
                className="rounded-lg border-2 border-white/30 bg-white/10 px-8 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                {t('hero.ctaSecondary')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-8 text-center shadow-md dark:bg-slate-900">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">8</div>
            <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              {t('hero.stats.standards')}
            </div>
          </div>
          <div className="rounded-2xl bg-white p-8 text-center shadow-md dark:bg-slate-900">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400">6</div>
            <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              {t('hero.stats.systems')}
            </div>
          </div>
          <div className="rounded-2xl bg-white p-8 text-center shadow-md dark:bg-slate-900">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">132</div>
            <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              {t('hero.stats.materials')}
            </div>
          </div>
        </div>
      </div>

      {/* Modules Section */}
      <div className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="mb-2 text-3xl font-bold text-slate-900 dark:text-white">
          {t('modules.title')}
        </h2>
        <p className="mb-8 text-slate-600 dark:text-slate-400">
          {t('modules.subtitle')}
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {moduleCards.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="group rounded-2xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-slate-900"
            >
              <div className="mb-4 text-4xl">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {t(`modules.items.${item.key}.title`)}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {t(`modules.items.${item.key}.description`)}
              </p>
              <div className="mt-4 text-sm font-semibold text-blue-600 group-hover:translate-x-1 dark:text-blue-400">
                {t('modules.open')} →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}