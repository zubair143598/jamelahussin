import { getDict } from "@/lib/i18n";
import About from "@/components/about/About";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isAr = locale === "ar";

  return {
    title: isAr
      ? "من نحن | شركة جميلة حسين للنقل الثقيل"
      : "About Us | Jameela Hussain — Saudi Arabia's Trusted Transport Company",
    description: isAr
      ? "تعرف على شركة جميلة حسين، شركة نقل سعودية متخصصة في نقل المنتجات البترولية والمياه ومواد البناء باستخدام أحدث أسطول مرسيدس بنز."
      : "Jameela Hussain is a Saudi-owned transport company with 15+ years of experience operating Aramco-certified Mercedes-Benz Actros MP4/MP5 tankers across the Kingdom.",
    alternates: {
      canonical: `https://www.jameela.com/${locale}/about`,
      languages: {
        en: "https://www.jameela.com/en/about",
        ar: "https://www.jameela.com/ar/about",
        "x-default": "https://www.jameela.com/en/about",
      },
    },
    openGraph: {
      title: "About | Jameela Hussain Transport KSA",
      description:
        "Saudi-owned transport company with 15+ years of experience. Aramco-certified fleet of Mercedes-Benz tankers.",
      url: `https://www.jameela.com/${locale}/about`,
      images: [{ url: "/fleet-aramco.jpg", width: 1600, height: 900, alt: "Jameela Hussain fleet at Aramco terminal" }],
    },
  };
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const dict = await getDict(locale);

  return <About locale={locale} dict={dict} />;
}
