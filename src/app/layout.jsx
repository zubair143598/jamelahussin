// src/app/layout.jsx
import "./globals.css";
import Providers from "@/lib/providers";
import StructuredData from "@/components/StructuredData";

export const metadata = {
  metadataBase: new URL("https://www.jamelahussin.com"),
  title: {
    default: "Jameela Hussain | Fuel, Water & Heavy Transport — Saudi Arabia",
    template: "%s | Jameela Hussain Transport KSA",
  },
  description:
    "Jameela Hussain is Saudi Arabia's trusted heavy transport company — Aramco-certified fuel tankers, water delivery, construction materials & 24/7 emergency dispatch across the Kingdom.",
  keywords: [
    "fuel transport Saudi Arabia",
    "water tanker delivery KSA",
    "heavy transport company Riyadh",
    "Aramco fuel transport",
    "tanker rental Saudi Arabia",
    "construction materials transport",
    "شركة نقل الوقود السعودية",
    "ناقلة مياه",
    "نقل ثقيل السعودية",
  ],
  authors: [{ name: "Jameela Hussain Transport" }],
  creator: "Jameela Hussain",
  publisher: "Jameela Hussain",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_SA",
    url: "https://www.jamelahussin.com",
    siteName: "Jameela Hussain Transport",
    title: "Jameela Hussain | Fuel, Water & Heavy Transport — Saudi Arabia",
    description:
      "Aramco-certified fuel tankers, water delivery & construction materials transport across the Kingdom of Saudi Arabia. 15+ years of trust, 500M+ liters delivered.",
    images: [
      {
        url: "/hero-truck.jpg",
        width: 1200,
        height: 630,
        alt: "Jameela Hussain Mercedes Actros tanker fleet — Saudi Arabia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jameela Hussain | Fuel & Water Transport KSA",
    description:
      "Trusted Saudi transport company — Aramco fuels, water tankers, construction materials. 24/7 dispatch.",
    images: ["/hero-truck.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  verification: {
    // Add your Google Search Console verification code here after registering
    // google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StructuredData />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
