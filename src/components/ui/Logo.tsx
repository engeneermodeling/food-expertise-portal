'use client';
import { LogoIcon } from "./LogoIcon";

interface LogoProps {
  variant?: 'full' | 'compact';
  className?: string;
}

export function Logo({ variant = 'compact', className = '' }: LogoProps) {
  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center gap-2 ${className}`}>
        <LogoIcon size={80} />
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold tracking-wide text-brand-food dark:text-brand-food-dark">
            FOOD
          </span>
          <span className="text-2xl font-bold tracking-wide text-brand-expertise dark:text-brand-expertise-dark">
            EXPERTISE
          </span>
          <div className="mt-1 h-px w-32 bg-slate-300 dark:bg-slate-700" />
          <span className="mt-1 text-xs font-medium tracking-[0.3em] text-slate-500 dark:text-slate-400">
            PORTAL
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoIcon size={52} />
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-tight tracking-tight text-brand-food dark:text-brand-food-dark">
          FOOD EXPERTISE
        </span>
        <span className="text-[10px] font-medium tracking-[0.2em] text-brand-expertise dark:text-brand-expertise-dark">
          PORTAL
        </span>
      </div>
    </div>
  );
}