/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  // ─── Image Optimization ────────────────────────────────────────────────────
  // Next.js automatically optimizes images (WebP/AVIF conversion, lazy loading)
  // which is a Google ranking factor (Core Web Vitals / LCP).
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // ─── HTTP Headers ──────────────────────────────────────────────────────────
  // Security headers improve Google's trust in your site.
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      // ── Long-cache for static assets (images, fonts, JS, CSS) ──────────────
      {
        source: "/(.*)\\.(jpg|jpeg|png|gif|webp|avif|svg|ico|woff2|woff)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // ─── Redirects ─────────────────────────────────────────────────────────────
  // Redirect bare domain root to /en so Google has one canonical home URL.
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: true, // 301 redirect — passes full SEO value
      },
    ];
  },
};

export default nextConfig;
