import { getDict } from "@/lib/i18n";
import ContactForm from "@/components/contact/ContactForm";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isAr = locale === "ar";

  return {
    title: isAr
      ? "تواصل معنا | جميلة حسين للنقل الثقيل"
      : "Contact Us | Jameela Hussain — 24/7 Transport & Logistics KSA",
    description: isAr
      ? "تواصل مع شركة جميلة حسين للنقل — متاحون 24/7 للطلبات العاجلة. الرياض، المملكة العربية السعودية."
      : "Contact Jameela Hussain for fuel transport, water delivery, and logistics services. Available 24/7 for urgent requests. Based in Riyadh, Saudi Arabia.",
    alternates: {
      canonical: `https://www.jamelahussin.com/${locale}/contact`,
      languages: {
        en: "https://www.jamelahussin.com/en/contact",
        ar: "https://www.jamelahussin.com/ar/contact",
        "x-default": "https://www.jamelahussin.com/en/contact",
      },
    },
  };
}

export default async function ContactPage({ params }) {
  const { locale } = await params;
  const dict = await getDict(locale);

  return <ContactForm locale={locale} dict={dict} />;
}
