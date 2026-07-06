import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { dir, getDict, locales } from "@/lib/i18n";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// ─── Per-locale alternate links (hreflang) ───────────────────────────────────
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isAr = locale === "ar";

  return {
    alternates: {
      canonical: `https://www.jamelahussin.com/${locale}`,
      languages: {
        "en": "https://www.jamelahussin.com/en",
        "ar": "https://www.jamelahussin.com/ar",
        "x-default": "https://www.jamelahussin.com/en",
      },
    },
    openGraph: {
      locale: isAr ? "ar_SA" : "en_US",
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const t = getDict(locale);

  return (
    <>
      <Navbar locale={locale} t={t} />

      <main
        lang={locale}
        dir={dir(locale)}
        className={locale === "ar" ? "font-arabic" : "font-sans"}
      >
        {children}
      </main>

      <Footer locale={locale} t={t} />
    </>
  );
}
