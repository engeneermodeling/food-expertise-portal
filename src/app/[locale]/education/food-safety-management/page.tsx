import { getCourseData } from '@/lib/mdx/mdx';
import Link from 'next/link';
import { notFound } from 'next/navigation';

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

  if (!courseData || !courseData.lessonsList) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-900 dark:to-slate-900 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            href={`/${locale}/education`}
            className="inline-flex items-center gap-2 text-blue-100 hover:text-white"
          >
            ← Назад до курсів
          </Link>
          <h1 className="mt-6 text-4xl font-bold text-white">
            {courseData.title}
          </h1>
          <p className="mt-4 text-xl text-blue-100">
            {courseData.description}
          </p>
        </div>
      </div>

      {/* Lessons */}
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="space-y-6">
          {courseData.lessonsList.length > 0 ? (
            courseData.lessonsList.map((lesson: Lesson) => (
              <Link
                key={lesson.number}
                href={`/${locale}/education/food-safety-management/topic-${lesson.number}`}
                className="block rounded-2xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-slate-900"
              >
                <div className="flex items-start gap-6">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100 text-2xl font-bold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    {lesson.number}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                      {lesson.title}
                    </h2>
                    <div className="mt-4 flex flex-wrap items-center gap-4">
                      {lesson.pages && (
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          📄 Сторінки: {lesson.pages}
                        </span>
                      )}
                      {lesson.duration && (
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          ⏱️ {lesson.duration}
                        </span>
                      )}
                    </div>
                  </div>
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