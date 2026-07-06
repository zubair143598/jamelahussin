# Jameela Hussain — Complete SEO Guide
## Everything you need to rank on Google

---

## WHAT WAS ADDED TO YOUR CODE

### 1. `src/app/layout.jsx` — Root Metadata (affects ALL pages)
- Full title, description, keywords
- Open Graph tags (for WhatsApp/LinkedIn previews)
- Twitter Card tags
- Canonical URL pointing to your domain
- Robots: index + follow instructions for Google

### 2. `src/app/[locale]/layout.js` — Hreflang Tags
- Tells Google "this page has an Arabic version" and vice versa
- Prevents duplicate content penalties for EN/AR versions

### 3. Each Page (`about`, `services`, `fleet`, `industries`, `contact`, `careers`) 
- Unique `title` tag per page (critical — Google shows this in search results)
- Unique `description` tag per page (shown as the grey text under the title)
- Arabic versions of both for the `/ar` locale
- `canonical` URL to prevent duplicate indexing

### 4. `src/app/sitemap.js` — Auto-generates `/sitemap.xml`
- Lists all your pages for Google to crawl
- Includes EN + AR versions with hreflang
- Deployed at: `https://www.jamelahussin.com/sitemap.xml`

### 5. `src/app/robots.js` — Auto-generates `/robots.txt`
- Tells Google which pages to crawl
- Points to your sitemap

### 6. `src/components/StructuredData.jsx` — JSON-LD Schema
- Organization schema (your company info)
- LocalBusiness schema (address, phone, hours, services)
- Enables Google Knowledge Panel and rich snippets

### 7. `next.config.mjs` — Performance & Security
- Image optimization (WebP/AVIF = faster load = better rank)
- Security headers (Google trusts secure sites more)
- 301 redirect from `/` to `/en`
- Static asset caching

---

## STEP-BY-STEP: WHAT TO DO AFTER DEPLOYING

### STEP 1 — Update your real domain
Search for `jamelahussin.com` in all files and replace with your actual domain.
Files to update:
- `src/app/layout.jsx`
- `src/app/sitemap.js`
- `src/app/robots.js`
- `src/components/StructuredData.jsx`
- Every `page.jsx` file

### STEP 2 — Update your real phone & email
In `src/components/StructuredData.jsx`, replace:
- `+966-50-000-0000` with your real phone number
- `info@jameela.com` with your real email

### STEP 3 — Google Search Console (FREE — MOST IMPORTANT)
1. Go to: https://search.google.com/search-console
2. Click "Add Property" → enter your domain (e.g. jameela.com)
3. Verify ownership (they give you a meta tag — add it to layout.jsx in the `verification` field)
4. Submit your sitemap: `https://www.jameela.com/sitemap.xml`
5. Google will start indexing your pages within 1-4 weeks

### STEP 4 — Google Business Profile (FREE)
1. Go to: https://business.google.com
2. Create a profile for "Jameela Hussain Transport"
3. Add: address, phone, website, hours, photos of your fleet
4. This makes you appear in Google Maps and the local box
5. This is the FASTEST way to get found by local Saudi customers

### STEP 5 — Add Real Photos with Good Alt Text
Currently your images are: hero-truck.jpg, fleet-aramco.jpg, water-tanker.jpg, construction.jpg
These are good! Make sure every `<Image>` tag has a descriptive `alt` attribute like:
- ✅ `alt="Jameela Hussain Mercedes Actros fuel tanker on Riyadh highway"`
- ❌ `alt="truck"` or `alt=""`

### STEP 6 — Page Speed
Google ranks fast sites higher. Check your score at:
- https://pagespeed.web.dev
Enter your URL and aim for 90+ on both Mobile and Desktop.
The image optimization in next.config.mjs already helps a lot.

---

## KEYWORDS YOUR SITE SHOULD TARGET

These are search terms Saudis use when looking for your services:

**English keywords:**
- fuel transport Saudi Arabia
- water tanker delivery Riyadh
- Aramco fuel transport company
- tanker truck rental KSA
- heavy transport company Saudi Arabia
- diesel delivery Saudi Arabia
- construction materials transport KSA
- 24/7 fuel delivery Saudi Arabia

**Arabic keywords:**
- نقل الوقود السعودية
- توصيل مياه الرياض
- شركة نقل ثقيل
- تأجير ناقلة
- نقل مواد بناء

These keywords are already woven into your page titles and descriptions.

---

## ONGOING SEO — WHAT TO DO EVERY MONTH

1. **Check Google Search Console** — see which searches bring people to your site
2. **Get reviews** — ask happy clients to Google your company and leave a 5-star review
3. **Add content** — even one new page per quarter helps (e.g., "Fuel Delivery to Dammam", "Water Tanker for Construction Sites")
4. **Check for broken links** — use https://www.deadlinkchecker.com

---

## COMMON MISTAKES TO AVOID

| ❌ Wrong | ✅ Right |
|---------|---------|
| Same title on every page | Unique title per page (already fixed!) |
| Images with no alt text | Descriptive alt text on every image |
| No sitemap | Sitemap auto-generated (already fixed!) |
| HTTP (not HTTPS) | Always use HTTPS |
| Slow mobile speed | Check PageSpeed Insights monthly |
| No Google Business Profile | Create one — it's free and very powerful |

---

## FILES CHANGED SUMMARY

```
src/
  app/
    layout.jsx              ← UPDATED: full metadata, StructuredData
    sitemap.js              ← NEW: auto-generates sitemap.xml
    robots.js               ← NEW: auto-generates robots.txt
    [locale]/
      layout.js             ← UPDATED: hreflang alternate links
      page.jsx              ← UPDATED: home page SEO metadata
      about/page.jsx        ← UPDATED: SEO metadata
      services/page.jsx     ← UPDATED: SEO metadata
      fleet/page.jsx        ← UPDATED: SEO metadata
      industries/page.jsx   ← UPDATED: SEO metadata
      contact/page.jsx      ← UPDATED: SEO metadata
      careers/page.jsx      ← UPDATED: SEO metadata
      quote/page.jsx        ← UPDATED: SEO metadata (noindex)
  components/
    StructuredData.jsx      ← NEW: JSON-LD schema for Google rich results
next.config.mjs             ← UPDATED: image optimization, headers, redirect
SEO-GUIDE.md                ← NEW: this file
```

