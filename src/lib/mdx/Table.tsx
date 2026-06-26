interface TableProps {
  children: React.ReactNode;
}

export default function Table({ children }: TableProps) {
  return (
    <div className="my-8 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
      <table className="min-w-full border-collapse text-sm">
        {children}
      </table>
    </div>
  );
}