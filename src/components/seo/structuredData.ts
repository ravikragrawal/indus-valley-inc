import { site } from "@/lib/site";
import type { Faq } from "@/lib/faqs";
import type { Service } from "@/lib/services";

/* ─── Organisation + LocalBusiness (combined) ─── */
export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: {
      "@type": "ImageObject",
      url: `${site.url}/logo-icon.gif`,
      width: 105,
      height: 91,
    },
    image: `${site.url}/images/hero-team.jpg`,
    foundingDate: "2003",
    description: site.description,
    slogan: "Fast. Accurate. Secure.",
    priceRange: "$$",
    currenciesAccepted: "USD, INR",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.contact.addressLocality,
      addressRegion: site.contact.addressRegion,
      addressCountry: site.contact.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "12.9716",
      longitude: "77.5946",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.contact.phoneINraw,
        contactType: "customer service",
        areaServed: ["IN", "US", "GB", "AU", "CA"],
        availableLanguage: ["en", "hi"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      },
    ],
    sameAs: [
      site.social.twitter,
      site.social.facebook,
      site.social.linkedin,
      site.aiArm.url,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "ITeS & BPO Services",
      itemListElement: [
        "Medical Transcription",
        "Legal Transcription",
        "Data Entry",
        "Data Cleanup",
        "Data Visualisation",
        "Data Migration",
        "Back-Office Support",
        "Call Centre",
        "Web Development",
      ].map((name, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: { "@type": "Service", name },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

/* ─── WebSite with SearchAction ─── */
export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${site.url}/services?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

/* ─── Service detail page ─── */
export function serviceLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}/services/${service.slug}`,
    name: service.name,
    alternateName: service.metaTitle,
    description: service.metaDescription,
    serviceType: service.name,
    provider: {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
    },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Australia" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.name} Services`,
      itemListElement: service.included.map((item, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: { "@type": "Service", name: item },
      })),
    },
    image: `${site.url}${service.photo}`,
    url: `${site.url}/services/${service.slug}`,
  };
}

/* ─── Review / testimonial structured data per service ─── */
export function serviceReviewLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Service",
      name: service.name,
      provider: { "@type": "Organization", name: site.name },
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    author: {
      "@type": "Person",
      name: service.testimonial.name,
      jobTitle: service.testimonial.role,
    },
    reviewBody: service.testimonial.quote,
    publisher: { "@type": "Organization", name: service.testimonial.company },
  };
}

/* ─── FAQ ─── */
export function faqLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
        // Speakable — AEO: marks content suitable for voice assistants
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["answer"],
        },
      },
    })),
  };
}

/* ─── Breadcrumb ─── */
export function breadcrumbLd(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${site.url}${c.path}`,
    })),
  };
}

/* ─── HowTo — for the process page / section ─── */
export function howToLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to outsource operations to Indus Valley Inc.",
    description:
      "A four-step process: scope the work, run a quality pilot, scale to full volume, and review metrics openly.",
    step: [
      { "@type": "HowToStep", position: 1, name: "Scope", text: "We agree the work, deliverables and turnaround in writing." },
      { "@type": "HowToStep", position: 2, name: "Pilot", text: "A small batch proves quality before you commit to scale." },
      { "@type": "HowToStep", position: 3, name: "Scale", text: "Capacity ramps to your volume on an agreed daily cadence." },
      { "@type": "HowToStep", position: 4, name: "Review", text: "Accuracy metrics and SLAs reviewed with you openly each month." },
    ],
  };
}
