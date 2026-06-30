// src\app\[locale]\education\food-safety-management\page.tsx

import { getCourseData } from '@/lib/mdx/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Definition, KeyPoint, Warning, Example } from '@/components/mdx';

const mdxComponents = {
  Definition,
  KeyPoint,
  Warning,
  Example,
};

interface Lesson {
  number: number;
  title: string;
  pages?: string;
  duration?: string;
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  let courseData;
  try {
    courseData = await getCourseData(locale);
  } catch (error) {
    console.error('Failed to load course data:', error);
    notFound();
  }

  if (!courseData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Header з метаданими */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-900 dark:to-slate-900 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            href={`/${locale}/education`}
            className="inline-flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
          >
            ← Назад до курсів
          </Link>
          <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            {courseData.title}
          </h1>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl">
            {courseData.description}
          </p>

          {/* Метадані курсу */}
          <div className="mt-8 flex flex-wrap gap-4">
            {courseData.author && (
              <div className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm text-white">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{courseData.author}</span>
              </div>
            )}
            {courseData.level && (
              <div className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm text-white">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                </svg>
                <span>{courseData.level}</span>
              </div>
            )}
            {courseData.year && (
              <div className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm text-white">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{courseData.year}</span>
              </div>
            )}
            {courseData.duration && (
              <div className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm text-white">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{courseData.duration}</span>
              </div>
            )}
            {courseData.institution && (
              <div className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm text-white">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>{courseData.institution}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Вступний контент з index.mdx */}
      {courseData.introContent && (
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-slate-900">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <MDXRemote
                source={courseData.introContent}
                components={mdxComponents}
              />
            </div>
          </div>
        </div>
      )}

      {/* Список уроків */}
      <div className="mx-auto max-w-5xl px-6 pb-12">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          📚 Теми курсу ({courseData.lessonsList.length})
        </h2>
        <div className="space-y-4">
          {courseData.lessonsList.length > 0 ? (
            courseData.lessonsList.map((lesson: Lesson) => (
              <Link
                key={lesson.number}
                href={`/${locale}/education/food-safety-management/topic-${lesson.number}`}
                className="block rounded-2xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl dark:bg-slate-900 dark:hover:border-blue-700"
              >
                <div className="flex items-start gap-6">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-2xl font-bold text-white shadow-md">
                    {lesson.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {lesson.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap items-center gap-4">
                      {lesson.pages && (
                        <span className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Сторінки: {lesson.pages}
                        </span>
                      )}
                      {lesson.duration && (
                        <span className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {lesson.duration}
                        </span>
                      )}
                    </div>
                  </div>
                  <svg className="h-6 w-6 flex-shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center text-slate-600 dark:text-slate-400">
              Уроків ще немає
            </p>
          )}
        </div>
      </div>
    </div>
  );
}