// Central site configuration. Replace VERIFY/placeholder values before launch.

export const site = {
  name: "Indus Valley Inc.",
  legalName: "Indus Valley Inc.",
  shortName: "Indus Valley",
  // Canonical production URL — update if you choose the www variant.
  url: "https://indusvalleyinc.com",
  founded: "2003-11", // VERIFY exact month/year
  tagline: "Your operations partner for the work that never stops",
  description:
    "Indus Valley Inc. is an IT-enabled services (ITeS) and BPO company that takes on high-volume transcription, data and back-office work — accurate, secure and on schedule.",
  // Sister brand (AI consulting arm)
  aiArm: {
    name: "Indus AIVantage",
    url: "https://indusaivantage.com",
    blurb: "AI consulting & automation",
  },
  contact: {
    phoneIN: "+91 98860 24388",
    phoneINraw: "+919886024388",
    whatsappUrl: "https://wa.me/919886024388",
    email: "hello@indusvalleyinc.com", // VERIFY / set a real inbox
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    addressCountry: "IN",
    streetAddress: "{{STREET_ADDRESS}}",
    postalCode: "{{POSTAL_CODE}}",
  },
  social: {
    twitter: "https://twitter.com/indus_inc",
    facebook: "https://www.facebook.com/indusvalleybiz",
    linkedin: "https://www.linkedin.com/company/your-linkedin", // claim your own page
  },
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "How we work", href: "/how-we-work" },
  { label: "Vision", href: "/vision" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
