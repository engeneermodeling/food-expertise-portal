'use client';

import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      
      setScrollPercent(percent);
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Параметри для SVG кола
  const size = 56;
  const strokeWidth = 6; // Збільшено з 4 до 6 для більшого контрасту
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollPercent / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Повернутися вгору"
      title={`${Math.round(scrollPercent)}% прокручено`}
      className={`fixed bottom-20 right-4 z-50 transition-all duration-500 sm:bottom-6 sm:right-6 ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <div className="relative flex items-center justify-center">
        {/* SVG кругова полоса прогресу */}
        <svg
          className="absolute -rotate-90"
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
        >
          {/* Фонове коло (трек) — більш прозоре для контрасту */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-slate-300/20 dark:text-slate-600/20"
          />
          
          {/* Прогрес-полоса — яскравіша з сильним світінням */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-150 ease-out"
            style={{
              filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.8)) drop-shadow(0 0 12px rgba(139, 92, 246, 0.6))',
            }}
          />
          
          {/* Яскравий градієнт для полоси */}
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1D4ED8" /> {/* Яскравий синій */}
              <stop offset="50%" stopColor="#7C3AED" /> {/* Яскравий фіолетовий */}
              <stop offset="100%" stopColor="#059669" /> {/* Яскравий зелений */}
            </linearGradient>
          </defs>
        </svg>

        {/* Центральна кнопка — прозора */}
        <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/30 shadow-lg transition-all duration-300 hover:bg-white/20 hover:shadow-xl hover:scale-110 active:scale-95 dark:bg-slate-900/30 dark:border-slate-600/30 dark:hover:bg-slate-800/40">
          {/* Стрілка вгору — більша і яскравіша */}
          <svg
            className="h-6 w-6 text-blue-500 dark:text-blue-400 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </div>
      </div>
    </button>
  );
}