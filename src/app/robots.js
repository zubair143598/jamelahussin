// src/app/robots.js
// Next.js auto-generates /robots.txt from this file

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://www.jamelahussin.com/sitemap.xml",
    host: "https://www.jamelahussin.com",
  };
}
