// src/components/StructuredData.jsx
// JSON-LD structured data — helps Google understand your business and show
// rich results (star ratings, address, phone, etc.) in search results.

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Jameela Hussain Transport",
    alternateName: "جميلة حسين للنقل",
    url: "https://www.jamelahussin.com",
    logo: "https://www.jamelahussin.com/logo4.png",
    description:
      "Saudi-owned heavy transport company operating Aramco-certified Mercedes-Benz Actros tankers across the Kingdom of Saudi Arabia.",
    foundingDate: "2010",
    areaServed: {
      "@type": "Country",
      name: "Saudi Arabia",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Riyadh",
      addressCountry: "SA",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+966559437759",
        contactType: "customer service",
        availableLanguage: ["English", "Arabic"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
          ],
          opens: "07:00",
          closes: "19:00",
        },
      },
      {
        "@type": "ContactPoint",
        telephone: "+966559437759",
        contactType: "emergency",
        availableLanguage: ["English", "Arabic"],
      },
    ],
    sameAs: [
      // Add your social media URLs here when you have them:
      // "https://www.linkedin.com/company/jameela-hussain",
      // "https://twitter.com/jameelaHussainKSA",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.jamelahussin.com/#business",
    name: "Jameela Hussain Transport",
    image: "https://www.jamelahussin.com/hero-truck.jpg",
    url: "https://www.jamelahussin.com",
    telephone: "+966559437759",
    email: "info@jamelahussin.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Riyadh",
      addressRegion: "Riyadh Province",
      addressCountry: "SA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.7136,
      longitude: 46.6753,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "07:00",
        closes: "19:00",
      },
    ],
    priceRange: "$$",
    currenciesAccepted: "SAR",
    paymentAccepted: "Cash, Bank Transfer",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Transport Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fuel Transport",
            description:
              "Petrol 91, 95, Diesel and Kerosene transport from Aramco terminals across KSA",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Water Tanker Delivery",
            description:
              "Potable and industrial water delivery via certified tanker fleet",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tanker Rental",
            description:
              "Diesel, benzine, and water tankers for short and long-term rental",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Construction Materials Transport",
            description: "Sand, aggregate, cement and bulk material delivery",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "24/7 Emergency Supply",
            description: "Round-the-clock dispatch for urgent fuel and water",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://www.jamelahussin.com",
    name: "Jameela Hussain Transport",
    description: "Heavy transport, fuel & water delivery across Saudi Arabia",
    inLanguage: ["en", "ar"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.jamelahussin.com/en/services",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
