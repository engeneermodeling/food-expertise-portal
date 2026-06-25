'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function EducationPage() {
  const t = useTranslations('education');
  const locale = useLocale();

  const courses = [
    {
      id: 'food-safety-management',
      title: t('courses.foodSafety.title'),
      description: t('courses.foodSafety.description'),
      duration: '132 сторінки',
      lessons: 8,
      level: t('levels.masters'),
      icon: '🎓',
      color: 'blue',
      modules: [
        t('modules.theoreticalFoundations'),
        t('modules.efficiencyAssessment'),
        t('modules.iso22000'),
        t('modules.diagnostics'),
        t('modules.brc'),
        t('modules.ifs'),
        t('modules.fssc22000'),
        t('modules.certification'),
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-900 dark:to-slate-900 py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              {t('title')}
            </h1>
            <p className="mt-6 text-xl text-blue-100">
              {t('description')}
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-1">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/${locale}/education/${course.id}`}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-900"
            >
              <div className="flex items-start gap-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-100 text-4xl dark:bg-blue-900/30">
                  {course.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {course.title}
                  </h2>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    {course.description}
                  </p>
                  
                  <div className="mt-4 flex flex-wrap gap-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                     {course.lessons} {t('lessonCount')}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {course.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      {course.level}
                    </span>
                  </div>

                  <div className="mt-6">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      {t('modules.title')}:
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {course.modules.map((module, index) => (
                        <span
                          key={index}
                          className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                        >
                          {module}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-blue-600 group-hover:translate-x-1 dark:text-blue-400">
                    <span className="font-semibold">{t('startCourse')}</span>
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}