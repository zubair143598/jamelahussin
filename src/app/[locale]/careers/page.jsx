import { getDict } from "@/lib/i18n";
import CareersForm from "@/components/careers/CareersForm";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isAr = locale === "ar";

  return {
    title: isAr
      ? "الوظائف | انضم إلى فريق جميلة حسين"
      : "Careers | Join Jameela Hussain Transport — Drivers & Logistics Jobs KSA",
    description: isAr
      ? "انضم إلى فريق جميلة حسين — نبحث عن سائقين ومرسلين وميكانيكيين وموظفي عمليات في المملكة العربية السعودية."
      : "Join Jameela Hussain's growing team. We're hiring experienced drivers, dispatchers, mechanics, and operations staff across Saudi Arabia.",
    alternates: {
      canonical: `https://www.jamelahussin.com/${locale}/careers`,
      languages: {
        en: "https://www.jamelahussin.com/en/careers",
        ar: "https://www.jamelahussin.com/ar/careers",
        "x-default": "https://www.jamelahussin.com/en/careers",
      },
    },
  };
}

export default async function CareersPage({ params }) {
  const { locale } = await params;
  const dict = await getDict(locale);

  return <CareersForm locale={locale} dict={dict} />;
}
