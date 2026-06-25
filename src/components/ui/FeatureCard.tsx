import Link from "next/link";

type Props = {
  title: string;
  description: string;
  icon: string;
  href: string;
};

export default function FeatureCard({
  title,
  description,
  icon,
  href,
}: Props) {
  return (
    <Link
      href={href}
      className="
        group
        rounded-3xl
        border
        border-slate-200
        dark:border-slate-800
        bg-white
        dark:bg-slate-900
        p-6
        transition-all
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <div className="text-4xl">{icon}</div>

      <h3 className="mt-5 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-slate-500">
        {description}
      </p>

      <div
        className="
          mt-6
          text-blue-600
          opacity-0
          transition
          group-hover:opacity-100
        "
      >
        Відкрити →
      </div>
    </Link>
  );
}