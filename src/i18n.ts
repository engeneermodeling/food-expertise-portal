import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "./i18n/routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  try {
    const messages = {
      common: (await import(`./messages/${locale}/common.json`)).default,
      navigation: (await import(`./messages/${locale}/navigation.json`))
        .default,
      footer: (await import(`./messages/${locale}/footer.json`)).default,
      home: (await import(`./messages/${locale}/home.json`)).default,
      education: (await import(`./messages/${locale}/education.json`)).default,

      courses: {
        foodSafetyManagement: (
          await import(
            `./messages/${locale}/courses/food-safety-management.json`
          )
        ).default,

        riskManagement: (
          await import(`./messages/${locale}/courses/risk-management.json`)
        ).default,
      },
    };

    return {
      locale,
      messages,
    };
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    notFound();
  }
});
