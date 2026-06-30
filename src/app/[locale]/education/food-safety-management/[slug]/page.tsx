// src\app\[locale]\education\food-safety-management\[slug]\page.tsx

import { getLessonData } from "@/lib/mdx/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Example, SelfCheck, Figure } from "@/components/mdx";
import Link from "next/link";
import { useLocale } from "next-intl";

import { getLocale } from "next-intl/server";
import Table from "@/lib/mdx/Table";
import Definition from "@/lib/mdx/Definition";
import KeyPoint from "@/lib/mdx/KeyPoint";
import Warning from "@/lib/mdx/Warning";
import { notFound } from "next/navigation";

const components = {
  Definition,
  KeyPoint,
  Warning,
  Example,
  SelfCheck,
  Figure,
  Table,
};

export default async function LessonPage({
  params,
}: {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}) {
  const { locale, slug } = await params;

  const number = slug.replace("topic-", "");

  const lessonData = await getLessonData(locale, number);

  if (!lessonData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90">
        <div className="mx-auto max-w-5xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href={`/${locale}/education/food-safety-management`}
              className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
            >
              ← До курсу
            </Link>
            <div className="flex items-center gap-4">
              {lessonData.prevLesson && (
                <Link
                  href={`/${locale}/education/food-safety-management/topic-${lessonData.prevLesson}`}
                  className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                >
                  ← Попередній
                </Link>
              )}
              {lessonData.nextLesson && (
                <Link
                  href={`/${locale}/education/food-safety-management/topic-${lessonData.nextLesson}`}
                  className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                >
                  Наступний →
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-5xl px-6 py-12">
        <article className="prose prose-lg max-w-none dark:prose-invert">
          <MDXRemote source={lessonData.content} components={components} />
        </article>
      </main>
      <div className="mx-auto max-w-5xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href={`/${locale}/education/food-safety-management`}
              className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
            >
              ← До курсу
            </Link>
            <div className="flex items-center gap-4">
              {lessonData.prevLesson && (
                <Link
                  href={`/${locale}/education/food-safety-management/topic-${lessonData.prevLesson}`}
                  className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                >
                  ← Попередній
                </Link>
              )}
              {lessonData.nextLesson && (
                <Link
                  href={`/${locale}/education/food-safety-management/topic-${lessonData.nextLesson}`}
                  className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                >
                  Наступний →
                </Link>
              )}
            </div>
          </div>
        </div>
    </div>
  );
}
