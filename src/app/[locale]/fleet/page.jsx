import { getDict } from "@/lib/i18n";
import Fleet from "@/components/fleet/Fleet";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isAr = locale === "ar";

  return {
    title: isAr
      ? "أسطولنا | ناقلات مرسيدس أكتروس MP4 وMP5"
      : "Our Fleet | Mercedes-Benz Actros MP4 & MP5 Tankers — Saudi Arabia",
    description: isAr
      ? "أسطول من ناقلات مرسيدس بنز أكتروس MP4 وMP5 معتمدة من أرامكو لنقل الوقود والمياه وعمليات النقل الثقيل في المملكة."
      : "Premium Mercedes-Benz Actros MP4 & MP5 tankers certified to Aramco standards. Multi-compartment fuel tankers and stainless-steel water tankers operating across Saudi Arabia.",
    alternates: {
      canonical: `https://www.jameela.com/${locale}/fleet`,
      languages: {
        en: "https://www.jameela.com/en/fleet",
        ar: "https://www.jameela.com/ar/fleet",
        "x-default": "https://www.jameela.com/en/fleet",
      },
    },
    openGraph: {
      title: "Fleet | Jameela Hussain Transport KSA",
      description:
        "Mercedes-Benz Actros MP4 & MP5 tankers — Aramco-certified, modern fleet for fuel & water transport.",
      url: `https://www.jameela.com/${locale}/fleet`,
      images: [{ url: "/hero-truck.jpg", width: 1920, height: 1080, alt: "Jameela Hussain Mercedes Actros fleet" }],
    },
  };
}

const FleetPage = async ({ params }) => {
  const { locale } = await params;
  const dict = await getDict(locale);

  return <Fleet locale={locale} dict={dict} />;
};

export default FleetPage;
