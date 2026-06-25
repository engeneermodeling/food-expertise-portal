import Link from "next/link";
import { navigation } from "@/config/navigation";

interface Props {
  locale: string;
}

export default function MainNavigation({
  locale,
}: Props) {
  return (
    <nav className="flex gap-6">
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={`/${locale}${item.href}`}
          className="text-sm hover:underline"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}