import { getDict } from "@/lib/i18n";
import QuoteForm from "@/components/quote/QuoteForm";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isAr = locale === "ar";

  return {
    title: isAr
      ? "طلب عرض سعر | نقل الوقود والمياه في السعودية"
      : "Request a Quote | Fuel & Water Transport Services — Saudi Arabia",
    description: isAr
      ? "احصل على عرض سعر لخدمات النقل — وقود، مياه، مواد بناء. نرد خلال 24 ساعة."
      : "Request a quote for fuel transport, water tanker delivery, tanker rental or construction materials. We respond within 24 hours.",
    robots: { index: false }, // Quote form pages are typically noindexed
    alternates: {
      canonical: `https://www.jameela.com/${locale}/quote`,
    },
  };
}

export default async function QuotePage({ params }) {
  const { locale } = await params;
  const dict = await getDict(locale);

  return <QuoteForm locale={locale} dict={dict} />;
}
