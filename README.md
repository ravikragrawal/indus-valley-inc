# Indus Valley Inc. — Website

A modern, responsive **Next.js (App Router) + TypeScript + Tailwind** site for Indus Valley Inc., an IT-enabled services (ITeS) / BPO company. Built for SEO, local/GEO visibility, and AEO (answer-engine) citability.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

Requires Node 18.18+ (Node 20 LTS recommended).

## What's built in

- **SEO:** per-page `metadata` (titles, descriptions, canonicals), Open Graph + Twitter tags, auto `sitemap.xml` (`src/app/sitemap.ts`) and `robots.txt` (`src/app/robots.ts`).
- **GEO / local:** `Organization` + `PostalAddress` + `ContactPoint` JSON-LD with NAP pulled from one source of truth.
- **AEO:** self-contained FAQ content + `FAQPage` JSON-LD, strong entity signals (full legal name, founding year, location) to separate the brand from the many other "Indus Valley" entities.
- **Structured data:** Organization, WebSite, Service, FAQPage, BreadcrumbList (`src/components/seo/structuredData.ts`).
- **Design:** "throughput" identity — intake → process → output. Space Grotesk (display) / Inter (body) / JetBrains Mono (data). Tokens in `tailwind.config.ts`.
- **Accessibility:** skip link, keyboard focus rings, `prefers-reduced-motion` respected, responsive to mobile.

## Editing content

Almost everything is data-driven — no need to touch page code for routine edits:

| What | Where |
|---|---|
| NAP, phones, email, social, brand | `src/lib/site.ts` |
| Services (cards + auto-generated `/services/[slug]` pages) | `src/lib/services.ts` |
| FAQs (on-page + schema) | `src/lib/faqs.ts` |
| Colours, fonts, spacing | `tailwind.config.ts` |

Add a service by appending to the `services` array — its detail page, card, sitemap entry and schema are generated automatically.

## Before launch (checklist)

- [ ] Replace all `{{PLACEHOLDER}}` and **VERIFY** values in `src/lib/site.ts` (street address, postal code, phones, email).
- [ ] Add real proof: client logos, case studies, testimonials.
- [ ] Add `public/logo.png` and `public/og/*.jpg` (Open Graph images, 1200×630).
- [ ] Wire `src/app/api/quote/route.ts` to a real email/CRM destination and add spam protection.
- [ ] Confirm the canonical domain (`indusvalleyinc.com` vs `www`) in `site.ts` and at the host.
- [ ] Set 301 redirects from the old `.html`/`.aspx` URLs (see the Build Kit for the full map).
- [ ] Only claim HIPAA compliance once the controls and BAAs are genuinely in place.
- [ ] Submit `sitemap.xml` to Google Search Console and Bing Webmaster Tools.
- [ ] Claim/optimise Google Business Profile and your own LinkedIn company page.

## Deploy

Works on any Node host. Easiest is Vercel: push to a Git repo, import, and HTTPS + the canonical domain are handled for you. Set the production domain to `indusvalleyinc.com` and add the 301 redirects from the old URLs in the host/redirect config.

## Project structure

```
src/
  app/
    layout.tsx            root layout, fonts, site-wide schema
    page.tsx              home
    about/ services/ industries/ how-we-work/ ai/ contact/ quote/
    services/[slug]/      dynamic service detail pages
    api/quote/route.ts    form endpoint (stub)
    sitemap.ts robots.ts not-found.tsx
  components/
    Header Footer Sections ThroughputLane FAQ QuoteForm Container
    seo/JsonLd.tsx  seo/structuredData.ts
  lib/
    site.ts services.ts faqs.ts
```
