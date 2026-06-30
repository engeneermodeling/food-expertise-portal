'use client';

import { useTranslations } from 'next-intl';

export default function CourseIntroSection() {
  const t = useTranslations('course.intro');

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-slate-900 md:p-10">
        {/* Заголовок */}
        <div className="mb-8 border-b border-slate-200 pb-6 dark:border-slate-800">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">
            {t('title')}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed">
            {t('description')}
          </p>
        </div>

        {/* Мета курсу */}
        <div className="mb-8">
          <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">🎯</span>
            {t('goal.title')}
          </h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            {t('goal.description')}
          </p>
        </div>

        {/* Компетентності */}
        <div className="mb-8">
          <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">🎓</span>
            {t('competencies.title')}
          </h3>

          <p className="mb-4 text-sm italic text-slate-600 dark:text-slate-400">
            {t('competencies.subtitle')}
          </p>

          {/* Інтегральна */}
          <div className="mb-4 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
            <div className="font-semibold text-blue-900 dark:text-blue-100">
              {t('competencies.integral')}:
            </div>
            <p className="mt-1 text-slate-700 dark:text-slate-300">
              {t('competencies.integralDescription')}
            </p>
          </div>

          {/* Загальні */}
          <div className="mb-4">
            <div className="mb-2 font-semibold text-slate-900 dark:text-white">
              {t('competencies.general')}:
            </div>
            <ul className="space-y-2">
              {(t.raw('competencies.generalItems') as string[]).map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                  <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Фахові */}
          <div>
            <div className="mb-2 font-semibold text-slate-900 dark:text-white">
              {t('competencies.professional')}:
            </div>
            <ul className="space-y-2">
              {(t.raw('competencies.professionalItems') as string[]).map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                  <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 text-xs font-bold text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Результати навчання */}
        <div className="mb-8">
          <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">✨</span>
            {t('results.title')}
          </h3>
          <p className="mb-4 text-slate-700 dark:text-slate-300">
            {t('results.description')}
          </p>

          <div className="space-y-3">
            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-900/20">
              <div className="mb-1 font-semibold text-green-900 dark:text-green-100">
                Результат 5
              </div>
              <p className="text-slate-700 dark:text-slate-300">
                {t('results.result5')}
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-900/20">
              <div className="mb-1 font-semibold text-green-900 dark:text-green-100">
                Результат 6
              </div>
              <p className="text-slate-700 dark:text-slate-300">
                {t('results.result6')}
              </p>
            </div>
          </div>
        </div>

        {/* Ключовий висновок */}
        <div className="mb-8 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 p-6 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800">
          <div className="flex items-start gap-3">
            <div className="text-2xl">💡</div>
            <div>
              <div className="mb-2 font-semibold text-slate-900 dark:text-white">
                {t('keyPoint.title')}
              </div>
              <p
                className="text-slate-700 dark:text-slate-300"
                dangerouslySetInnerHTML={{ __html: t('keyPoint.description') }}
              />
            </div>
          </div>
        </div>

        {/* Про авторів */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/50">
          <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
            <span>👥</span>
            {t('authors.title')}
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <div className="font-semibold text-slate-900 dark:text-white">
                {t('authors.popova')}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {t('authors.popovaTitle')}
              </p>
            </div>
            <div>
              <div className="font-semibold text-slate-900 dark:text-white">
                {t('authors.mysyura')}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {t('authors.mysyuraTitle')}
              </p>
            </div>
          </div>
          <div className="mt-4 border-t border-slate-200 pt-4 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-400">
            <strong>{t('authors.reviewer').split(':')[0]}:</strong>{' '}
            {t('authors.reviewer').split(':').slice(1).join(':').trim()}
          </div>
          <div
            className="mt-3 text-xs text-slate-500 dark:text-slate-500"
            dangerouslySetInnerHTML={{ __html: t('authors.copyright') }}
          />
        </div>
      </div>
    </div>
  );
} 