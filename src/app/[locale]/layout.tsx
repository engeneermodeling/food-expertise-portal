// \src\app\[locale]

import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { locales } from "@/config/i18n";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import ThemeProvider from "@/components/theme/ThemeProvider";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (
    !locale ||
    typeof locale !== "string" ||
    !locales.includes(locale as any)
  ) {
    notFound();
  }

  let messages;

  try {
    messages = {
      common: (await import(`../../messages/${locale}/common.json`)).default,
      navigation: (await import(`../../messages/${locale}/navigation.json`))
        .default,
      footer: (await import(`../../messages/${locale}/footer.json`)).default,
      home: (await import(`../../messages/${locale}/home.json`)).default,
      education: (await import(`../../messages/${locale}/education.json`))
        .default,

      courses: {
        foodSafetyManagement: (
          await import(
            `../../messages/${locale}/courses/food-safety-management.json`
          )
        ).default,

        riskManagement: (
          await import(`../../messages/${locale}/courses/risk-management.json`)
        ).default,
      },
    };
  } catch (error) {
    console.error(error);
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
        </div>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
