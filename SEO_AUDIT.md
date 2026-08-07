# SparkSphear Tech Solutions — SEO Audit
Site: https://sparkspheartechsolutions.com (Next.js 14 App Router, static export on Netlify)
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
 Organization, Service, FAQ, or Breadcrumb schema. Big miss for a 
 local business — this is what powers rich results and local pack signals.
3. [MEDIUM] Only 1 file uses next/image; 8 raw <img> tags (2 missing alt text).
 Hurts image SEO and Core Web Vitals (LCP/CLS).
4. [MEDIUM] Content strategy lacks user-intent classification. Pages serve
 "AI automation" broadly without distinguishing navigational, informational,
 transactional, or local intent — making it harder for Google to surface the
 right page for each query type (see Art of SEO, Ch1: User Intent).

QUICK WINS (high impact, low effort)
- Add per-page metadata (title + description) to the top ~8 money pages.
- Add LocalBusiness + Organization JSON-LD to the root layout.
- Add alt text to the 2 images missing it.
- Add rel="sponsored" or rel="nofollow" to any affiliate/partner links.
- Run the Google Litmus Test on every page: "Would I explain this to a Google employee?"

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
 Issue: 19/22 page.js files start with "use client", so they cannot export
 `metadata`. Only 3 pages (privacy, and 2 others) have real metadata.
 Impact: HIGH. Duplicate/generic titles + descriptions across the site.
 Evidence: grep for "export const metadata|generateMetadata" vs "use client".
 Fix: For each important page, split metadata out. Pattern in Next 14:
 keep the interactive UI in a child client component, and make page.js
 itself a SERVER component that exports metadata and renders the child.
 Example:
 // app/pricing/page.js (server)
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
Issue: No JSON-LD anywhere (application/ld+json not found in app/ or components/).
Impact: HIGH for a local business. No LocalBusiness, Organization, Service,
FAQ, or Breadcrumb markup = no rich results, weaker local signals.
Fix (Art of SEO, Ch2 — Page Experience signal feeds into structured data):
Add to root layout layout.js <head> (or a SchemaOrg component):

### Organization + LocalBusiness (root layout)
```jsx
// app/components/SchemaOrg.jsx
export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "name": "SparkSphear Tech Solutions",
    "url": "https://sparkspheartechsolutions.com",
    "logo": "https://sparkspheartechsolutions.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1427 Park Ave",
      "addressLocality": "Fort Wayne",
      "addressRegion": "IN",
      "postalCode": "46807"
    },
    "telephone": "(260) 267-0641",
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "08:00", "closes": "17:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Tuesday", "opens": "08:00", "closes": "17:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "08:00", "closes": "17:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Thursday", "opens": "08:00", "closes": "17:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "08:00", "closes": "17:00" }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/sparkspheartech"
    ]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
```

### Service schema (per /services/* page)
```jsx
// app/services/[slug]/ServiceSchema.jsx
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Process Automation",
  "provider": { "@type": "Organization", "name": "SparkSphear Tech Solutions" },
  "areaServed": { "@type": "City", "name": "Fort Wayne" },
  "description": "Custom AI workflow automation for Fort Wayne businesses"
};
```

### BreadcrumbList (root layout)
```jsx
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sparkspheartechsolutions.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://sparkspheartechsolutions.com/services" }
  ]
};
```

### FAQPage (on pages with Q&A content)
```jsx
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What does SparkSphear do?",
      "acceptedAnswer": { "@type": "Answer", "text": "We build custom AI automation..." } }
  ]
};
```

Validate with [Google Rich Results Test](https://search.google.com/test/rich-results) (needs rendered JS).
Priority: 1

[MEDIUM] Image optimization
 Issue: Only 1 file imports next/image; 8 raw <img>; 2 <img> lack alt text.
 Impact: MEDIUM. Missed lazy-loading/responsive sizing (LCP/CLS), weaker image
 search, minor accessibility hit.
 Note: Site uses images.unoptimized:true (static export) — next/image won't
 auto-optimize, BUT you still get lazy-load + explicit width/height
 (prevents CLS). At minimum add alt text to the 2 missing images now.
 Fix: Add descriptive alt to all <img>; add width/height to prevent layout
 shift; compress + serve WebP where possible.
 Priority: 3

================================================================================
ON-PAGE SEO FINDINGS
================================================================================
[PASS] Root title/description — strong, keyword-rich, localized ( +
 nationwide), includes brand-misspelling keywords. Good.
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
USER INTENT ANALYSIS (Art of SEO, Ch1 — User Intent Framework)
================================================================================
The Art of SEO classifies every search query into intent types. SparkSphear's
current keyword strategy is broad ("AI automation") without per-page intent
mapping. Here's how each page type maps:

| Intent | Page(s) | Searcher Goal | Current Content Fit |
|--------|---------|---------------|-------------------|
| **Navigational** | Homepage, /about | Find SparkSphear specifically | ✓ Strong — brand name in title |
| **Informational** | /use-cases, /blog, /services | "How does AI automation work?", "What is workflow automation?" | ⚠️ Needs dedicated guides |
| **Transactional** | /pricing, /contact, /services/* | "Hire AI automation", "Get a quote", "AI automation pricing Fort Wayne" | ⚠️ /pricing exists but needs richer content |
| **Local** | /contact, /services | "AI automation Fort Wayne", "business automation Indiana" | ✗ Missing — no local keyword targeting |

Fixes needed:
- [HIGH] Add informational content (blog posts, guides) targeting "what is AI automation",
  "how to automate business workflows" — these capture the Messy Middle exploration phase
  where 45% of purchases have latency (users research before buying).
- [MEDIUM] Add local keyword variants to service pages: "Fort Wayne", "Indiana",
  "Northeast Indiana" — 76% of local searchers visit within 24 hours.
- [MEDIUM] Create a dedicated landing page per service type so each targets a specific
  transactional intent query rather than a single broad "services" page.
- [MEDIUM] Use the Pyramid of User Needs: a single "AI Automation" query hides
  many layers of intent (industry, process type, budget, scale). Surface those
  layers in navigation and content.

================================================================================
ALGORITHM PREPAREDNESS (Art of SEO, Ch2 — Google Algorithm Typology)
================================================================================
Every site is exposed to Google's 3,200+ annual algorithm changes. Here's how
SparkSphear fares against major update types:

| Algorithm Risk | Vulnerability | Mitigation | Status |
|---------------|--------------|------------|--------|
| **BCAU (Broad Core)** | Content quality/sitewide E-E-A-T | Unique per-page content, author bios on blog, real-world case studies | ⚠️ Need blog content and author credentials |
| **Page Experience** | Core Web Vitals (LCP/FID/CLS) | next/image for lazy-load + sizing, WebP images | ⚠️ Raw <img> tags cause CLS risk |
| **Passages/Subtopics** | Specific page passages not indexable | Unique metadata per page, self-contained answer sections | ✗ Client-component gap blocks this |
| **Link Spam** | External affiliate/partner links not tagged | Audit all outgoing links, add rel="sponsored" or rel="nofollow" | ⚠️ Unknown — check outgoing links |
| **Mobile-First Index** | Mobile usability | Tailwind responsive — ✓ already good | ✓ Pass |

Google Litmus Test (apply to every page before publishing):
> "Would I feel comfortable explaining this content to a Google employee?
> Would I do this if search engines didn't exist?"

If the answer is no for any page, the content is likely violating Webmaster
Guidelines — even if there's no immediate penalty.

================================================================================
CONTENT STRATEGY — THE MESSY MIDDLE (Art of SEO, Ch1)
================================================================================
Google's "Messy Middle" framework describes the gap between trigger and purchase.
For SparkSphear's customers, the journey likely looks like:

Trigger → Explore → Evaluate → Purchase
"Business is slow" → "Can AI help?" → "Compare providers" → "Hire SparkSphear"

Content needed at each stage:
1. **Trigger/Discovery**: Blog posts ("Signs your business needs automation"),
   social proof, educational content — targeting informational queries
2. **Exploration (compare)**: Case studies, use cases, comparison pages,
   "AI automation vs traditional" — capture the Messy Middle
3. **Evaluation**: Detailed service breakdowns, pricing page, testimonials,
   process documentation — transactional intent
4. **Purchase**: Contact page, clear CTA, easy booking — local + transactional

Current gap: Almost no content at stages 1-2 (informational). The site jumps
straight to services and pricing. This misses the 45% of customers who take
multiple days to purchase (per Marin Software data in Art of SEO, Ch1).

================================================================================
PRIORITIZED ACTION PLAN
================================================================================
1. CRITICAL (do first)
 - Convert priority pages to server components + add unique metadata (Issue #1).
 - Add Organization + LocalBusiness JSON-LD to root layout (Issue #2).
2. HIGH IMPACT
 - Add Service schema per /services/* page; unique titles + H1s.
 - Confirm /pricing (now with Sovern AI) is in sitemap.js.
 - Add informational content (blog posts, guides) for the Messy Middle exploration phase.
 - Add local keyword variants (Fort Wayne, Indiana) to service pages for local intent.
3. QUICK WINS
 - Alt text on the 2 images; width/height on all <img>.
 - Purpose-built OG banner image.
 - Add rel="sponsored" or rel="nofollow" to any affiliate/partner links.
 - Run the Google Litmus Test on every page before publishing.
4. LONG TERM
 - Real, original blog content clustered around AI-automation keywords, linked
   to service + pricing pages (targets informational intent + BCAU resilience).
 - Set up Google Search Console + submit sitemap; monitor coverage + CWV.
 - Get NAP consistent across Google Business Profile + directories (local SEO).
 - Create dedicated landing pages per service type for specific transactional intent.
 - Add author bios and credentials to blog posts for E-E-A-T signals.

================================================================================
NEEDS LIVE ACCESS TO COMPLETE
================================================================================
- Core Web Vitals (run PageSpeed Insights on the live URL).
- Search Console coverage / indexation (site:sparkspheartechsolutions.com).
- Rendered schema validation (Rich Results Test) — once schema is added.
- Backlink profile / authority (Ahrefs or Semrush).
