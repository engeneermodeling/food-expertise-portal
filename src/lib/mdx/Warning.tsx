interface WarningProps {
  type?: 'warning' | 'info' | 'danger';
  children: React.ReactNode;
}

export default function Warning({ type = 'warning', children }: WarningProps) {
  const styles = {
    warning: 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20',
    info: 'border-blue-500 bg-blue-50 dark:bg-blue-900/20',
    danger: 'border-red-500 bg-red-50 dark:bg-red-900/20',
  };

  const icons = {
    warning: '⚠️',
    info: '️',
    danger: '🚨',
  };

  return (
    <div className={`my-6 rounded-lg border-l-4 p-4 ${styles[type]}`}>
      <div className="flex items-start gap-3">
        <div className="text-2xl">{icons[type]}</div>
        <div className="text-slate-700 dark:text-slate-300">
          {children}
        </div>
      </div>
    </div>
  );
}