export default function Definition({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
      <div className="font-bold text-blue-900 dark:text-blue-100">
        {term}
      </div>
      <div className="mt-2 text-slate-700 dark:text-slate-300">
        {children}
      </div>
    </div>
  );
}