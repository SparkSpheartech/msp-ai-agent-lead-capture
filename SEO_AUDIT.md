# SparkSphear Tech Solutions — SEO Audit
Site: https://sparkspheartechsolutions.com  (Next.js 14 App Router, static export on Netlify)
Audited: codebase-level audit using seo-audit skill (coreyhaines31/marketingskills, 163K installs)
Scope: Technical + on-page. NOTE: this is a static/source audit. Live Core Web Vitals,
Search Console coverage, and rendered-schema checks still need the running site + GSC access.

================================================================================
EXECUTIVE SUMMARY
================================================================================
Overall health: MODERATE. Foundations are unusually good (rich root metadata,
sitemap, robots, canonical, OG/Twitter cards, GA + HubSpot installed). But two
issues are actively capping organic performance:

TOP PRIORITY ISSUES
1. [HIGH] 19 of 22 pages are client components ("use client") with NO page-level
   metadata. They all inherit the homepage title/description. Google sees near-
   duplicate titles sitewide -> weak per-page ranking, poor SERP click-through.
2. [HIGH] Zero structured data (JSON-LD schema) anywhere. No LocalBusiness,
   Organization, Service, FAQ, or Breadcrumb schema. Big miss for a Fort Wayne
   local business — this is what powers rich results and local pack signals.
3. [MEDIUM] Only 1 file uses next/image; 8 raw <img> tags (2 missing alt text).
   Hurts image SEO and Core Web Vitals (LCP/CLS).

QUICK WINS (high impact, low effort)
- Add per-page metadata (title + description) to the top ~8 money pages.
- Add LocalBusiness + Organization JSON-LD to the root layout.
- Add alt text to the 2 images missing it.

================================================================================
TECHNICAL SEO FINDINGS
================================================================================

[PASS] Robots.txt — present, well-structured, references sitemap, blocks /api/
       and _next internals. Good.
[PASS] XML Sitemap — app/sitemap.js generates it dynamically with priorities and
       changeFrequency. Good. (Verify all NEW pages get added — e.g. individual
       service pages and pricing appear covered; confirm /pricing is listed.)
[PASS] Canonical — self-referencing canonical set in root layout metadata.
[PASS] HTTPS — enforced via Netlify + CNAME.
[PASS] metadataBase set (absolute OG/canonical URLs resolve correctly).
[PASS] Mobile — Tailwind responsive; viewport handled by Next defaults.

[HIGH] Client-component metadata gap
  Issue:   19/22 page.js files start with "use client", so they cannot export
           `metadata`. Only 3 pages (privacy, and 2 others) have real metadata.
  Impact:  HIGH. Duplicate/generic titles + descriptions across the site.
  Evidence: grep for "export const metadata|generateMetadata" vs "use client".
  Fix:     For each important page, split metadata out. Pattern in Next 14:
           keep the interactive UI in a child client component, and make page.js
           itself a SERVER component that exports metadata and renders the child.
           Example:
             // app/pricing/page.js  (server)
             import PricingClient from './PricingClient';
             export const metadata = {
               title: 'Pricing — AI Automation Plans',
               description: 'Sovern AI, Essentials, Growth & Enterprise plans...',
               alternates: { canonical: 'https://sparkspheartechsolutions.com/pricing' },
             };
             export default function Page(){ return <PricingClient/>; }
           Priority pages: /, /services + each /services/*, /pricing, /about,
           /use-cases, /contact.
  Priority: 1

[HIGH] No structured data (schema markup)
  Issue:   No JSON-LD anywhere (application/ld+json not found in app/ or components/).
  Impact:  HIGH for a local business. No LocalBusiness, Organization, Service,
           FAQ, or Breadcrumb markup = no rich results, weaker local signals.
  Fix:     Add to root layout <head> (or a Schema component):
           - Organization + LocalBusiness (NAP: SPARKSPHEAR TECH, 1427 Park Ave,
             Fort Wayne, IN 46807, (260)267-0641, hours Mon-Fri 8-5).
           - Service schema on each /services/* page.
           - FAQPage schema on pages with Q&A (support/kb).
           - BreadcrumbList sitewide.
           Validate with Google Rich Results Test (renders JS).
  Priority: 1

[MEDIUM] Image optimization
  Issue:   Only 1 file imports next/image; 8 raw <img>; 2 <img> lack alt text.
  Impact:  MEDIUM. Missed lazy-loading/responsive sizing (LCP/CLS), weaker image
           search, minor accessibility hit.
  Note:    Site uses images.unoptimized:true (static export) — next/image won't
           auto-optimize, BUT you still get lazy-load + explicit width/height
           (prevents CLS). At minimum add alt text to the 2 missing images now.
  Fix:     Add descriptive alt to all <img>; add width/height to prevent layout
           shift; compress + serve WebP where possible.
  Priority: 3

================================================================================
ON-PAGE SEO FINDINGS
================================================================================
[PASS] Root title/description — strong, keyword-rich, localized (Fort Wayne +
       Northeast Indiana), includes brand-misspelling keywords. Good.
[PASS] Keywords array — comprehensive local + AI intent coverage.
[PASS] OpenGraph + Twitter cards — present with 1200x630 image dimensions.
[WATCH] OG image is /logo.png. A purpose-built 1200x630 OG banner (not just the
        logo) will lift social CTR. Priority 3.
[HIGH] Per-page titles/H1 — because of the client-component issue, most pages
       lack unique <title>. Each page needs a unique title + single keyword-rich H1.
[INFO] H1: no page has multiple H1s (good). 6 pages have H1 inside a component
       rather than page.js — fine as long as exactly one renders per page.

================================================================================
CONTENT / E-E-A-T
================================================================================
[PASS] Contact info, privacy policy present -> trust signals OK.
[WATCH] Blog exists (changeFrequency daily in sitemap) — ensure posts are real,
        original, and internally linked to service pages. Thin/AI-filler blog
        posts can drag sitewide quality (Helpful Content system).
[WATCH] Add author/credential info to blog posts for Expertise signals.

================================================================================
PRIORITIZED ACTION PLAN
================================================================================
1. CRITICAL (do first)
   - Convert priority pages to server components + add unique metadata (Issue #1).
   - Add Organization + LocalBusiness JSON-LD to root layout (Issue #2).
2. HIGH IMPACT
   - Add Service schema per /services/* page; unique titles + H1s.
   - Confirm /pricing (now with Sovern AI) is in sitemap.js.
3. QUICK WINS
   - Alt text on the 2 images; width/height on all <img>.
   - Purpose-built OG banner image.
4. LONG TERM
   - Real, original blog content clustered around AI-automation keywords, linked
     to service + pricing pages.
   - Set up Google Search Console + submit sitemap; monitor coverage + CWV.
   - Get NAP consistent across Google Business Profile + directories (local SEO).

================================================================================
NEEDS LIVE ACCESS TO COMPLETE
================================================================================
- Core Web Vitals (run PageSpeed Insights on the live URL).
- Search Console coverage / indexation (site:sparkspheartechsolutions.com).
- Rendered schema validation (Rich Results Test) — once schema is added.
- Backlink profile / authority (Ahrefs or Semrush).
