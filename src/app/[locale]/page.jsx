import HomeSection from "@/components/home/HomeSection";
import { getDict } from "@/lib/i18n";

// ─── SEO Metadata for Home Page ──────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isAr = locale === "ar";

  return {
    title: isAr
      ? "جميلة حسين | نقل الوقود والمياه والمواد الثقيلة — المملكة العربية السعودية"
      : "Jameela Hussain | Fuel, Water & Heavy Transport — Saudi Arabia",
    description: isAr
      ? "شركة جميلة حسين للنقل الثقيل — ناقلات أرامكو للوقود، توصيل المياه، مواد البناء. خدمة 24/7 في جميع أنحاء المملكة."
      : "Saudi Arabia's trusted heavy transport partner. Aramco-certified fuel tankers, water delivery & construction materials across the Kingdom. 15+ years, 500M+ liters delivered.",
    alternates: {
      canonical: `https://www.jameela.com/${locale}`,
      languages: {
        en: "https://www.jameela.com/en",
        ar: "https://www.jameela.com/ar",
        "x-default": "https://www.jameela.com/en",
      },
    },
  };
}

export default async function HomePage({ params }) {
  const { locale } = await params;
  const dict = await getDict(locale);

  return <HomeSection locale={locale} dict={dict} />;
}
