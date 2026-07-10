const BASE_URL = "https://www.jamelahussin.com";

const pages = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/fleet", priority: 0.8, changeFrequency: "monthly" },
  { path: "/industries", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  { path: "/careers", priority: 0.6, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
];

const locales = ["en", "ar"];

export default function sitemap() {
  const entries = [];

  // ── Root domain entry ──────────────────────
  entries.push({
    url: BASE_URL,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0,
    alternates: {
      languages: {
        "en": `${BASE_URL}/en`,
        "ar": `${BASE_URL}/ar`,
        "x-default": `${BASE_URL}/en`,   
      },
    },
  });

  // ── Locale pages ──────────────────────────────────────────────────────────
  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${BASE_URL}/${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: {
            "en": `${BASE_URL}/en${page.path}`,
            "ar": `${BASE_URL}/ar${page.path}`,
            "x-default": `${BASE_URL}/en${page.path}`, 
          },
        },
      });
    }
  }

  return entries;
}