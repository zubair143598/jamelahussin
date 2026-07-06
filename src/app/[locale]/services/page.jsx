import React from "react";
import { getDict } from "@/lib/i18n";
import Services from "@/components/Services";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isAr = locale === "ar";

  return {
    title: isAr
      ? "خدماتنا | نقل الوقود والمياه والمواد الثقيلة"
      : "Our Services | Fuel Transport, Water Delivery & Bulk Logistics KSA",
    description: isAr
      ? "نقل الوقود من أرامكو، توصيل المياه، تأجير الناقلات، نقل مواد البناء، الخدمات اللوجستية الثقيلة، والطوارئ على مدار الساعة."
      : "Petrol 91/95, diesel & kerosene transport, water tanker delivery, tanker rental, construction materials, bulk logistics, and 24/7 emergency supply across Saudi Arabia.",
    alternates: {
      canonical: `https://www.jamelahussin.com/${locale}/services`,
      languages: {
        en: "https://www.jamelahussin.com/en/services",
        ar: "https://www.jamelahussin.com/ar/services",
        "x-default": "https://www.jamelahussin.com/en/services",
      },
    },
    openGraph: {
      title: "Services | Jameela Hussain Transport KSA",
      description:
        "Fuel transport, water delivery, tanker rental, construction materials & 24/7 emergency logistics across the Kingdom.",
      url: `https://www.jamelahussin.com/${locale}/services`,
    },
  };
}

export default async function ServicesPage({ params }) {
  const { locale } = await params;
  const dict = await getDict(locale);

  return (
    <div>
      <Services locale={locale} dict={dict} />
    </div>
  );
}
