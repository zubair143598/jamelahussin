import { getDict } from "@/lib/i18n";
import Industries from "@/components/industries/Industries";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isAr = locale === "ar";

  return {
    title: isAr
      ? "القطاعات التي نخدمها | أرامكو، البناء، البلديات"
      : "Industries We Serve | Aramco, Petrol Stations, Construction & More",
    description: isAr
      ? "نخدم سلسلة توريد أرامكو، محطات الوقود، قطاع البناء، الصناعة، إمدادات المياه البلدية والمواقع النائية في المملكة."
      : "Trusted by Saudi Aramco supply chain, petrol stations, construction contractors, industrial facilities, municipal water suppliers, and remote event sites across KSA.",
    alternates: {
      canonical: `https://www.jamelahussin.com/${locale}/industries`,
      languages: {
        en: "https://www.jamelahussin.com/en/industries",
        ar: "https://www.jamelahussin.com/ar/industries",
        "x-default": "https://www.jamelahussin.com/en/industries",
      },
    },
    openGraph: {
      title: "Industries | Jameela Hussain Transport KSA",
      description:
        "Serving Aramco, petrol stations, construction, industrial, municipal water, and remote sites across Saudi Arabia.",
      url: `https://www.jamelahussin.com/${locale}/industries`,
    },
  };
}

export default async function IndustriesPage({ params }) {
  const { locale } = await params;
  const dict = await getDict(locale);

  return (
    <div>
      <Industries locale={locale} dict={dict} />
    </div>
  );
}
