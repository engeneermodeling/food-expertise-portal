'use client';

import React from 'react';

// Компонент для визначень термінів
export function Definition({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-xl border-l-4 border-blue-500 bg-blue-50 p-6 dark:border-blue-400 dark:bg-blue-950/30">
      <h4 className="mb-2 font-bold text-blue-900 dark:text-blue-100">{term}</h4>
      <div className="text-slate-700 dark:text-slate-300">{children}</div>
    </div>
  );
}

// Компонент для ключових моментів
export function KeyPoint({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 p-6 dark:from-green-950/30 dark:to-emerald-950/30">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
          💡
        </div>
        <div className="text-slate-700 dark:text-slate-300">{children}</div>
      </div>
    </div>
  );
}

// Компонент для попереджень
export function Warning({ type = 'warning', children }: { type?: 'warning' | 'danger' | 'info'; children: React.ReactNode }) {
  const styles = {
    warning: 'border-yellow-500 bg-yellow-50 dark:border-yellow-400 dark:bg-yellow-950/30',
    danger: 'border-red-500 bg-red-50 dark:border-red-400 dark:bg-red-950/30',
    info: 'border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-950/30',
  };

  const icons = {
    warning: '⚠️',
    danger: '🚨',
    info: 'ℹ️',
  };

  return (
    <div className={`my-6 rounded-xl border-l-4 p-6 ${styles[type]}`}>
      <div className="flex items-start gap-3">
        <div className="text-2xl">{icons[type]}</div>
        <div className="text-slate-700 dark:text-slate-300">{children}</div>
      </div>
    </div>
  );
}

// Компонент для прикладів
export function Example({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/50">
      {title && (
        <h4 className="mb-3 font-semibold text-slate-900 dark:text-white">📝 {title}</h4>
      )}
      <div className="text-slate-700 dark:text-slate-300">{children}</div>
    </div>
  );
}

// Компонент для запитань самоперевірки
export function SelfCheck({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 rounded-xl border-2 border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-950/30">
      <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-purple-900 dark:text-purple-100">
        <span className="text-2xl">❓</span>
        Запитання для самоперевірки
      </h3>
      <div className="space-y-3 text-slate-700 dark:text-slate-300">
        {children}
      </div>
    </div>
  );
}

// Компонент для таблиць
export function CourseTable({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
      <table className="w-full text-sm">
        {children}
      </table>
    </div>
  );
}

// Компонент для зображень з підписом
export function Figure({ src, caption, children }: { src?: string; caption?: string; children?: React.ReactNode }) {
  return (
    <figure className="my-8">
      <div className="overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
        {src ? (
          <img src={src} alt={caption || ''} className="w-full" />
        ) : (
          children
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-slate-600 dark:text-slate-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}