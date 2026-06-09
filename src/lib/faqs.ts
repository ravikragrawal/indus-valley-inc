// FAQs feed both the on-page accordion and FAQPage structured data (AEO).
// Keep answers self-contained — they should make sense lifted out of context.

export type Faq = { q: string; a: string };

export const homeFaqs: Faq[] = [
  {
    q: "What does Indus Valley Inc. do?",
    a: "Indus Valley Inc. is an IT-enabled services (ITeS) company founded in 2003 in Bangalore, India, providing transcription, data entry, data cleanup, data mapping and visualisation, call-centre and back-office services to clients worldwide.",
  },
  {
    q: "Where is Indus Valley Inc. located?",
    a: "Indus Valley Inc. is headquartered in Bangalore, India, with delivery serving clients in India and internationally.",
  },
  {
    q: "What is the difference between Indus Valley Inc. and Indus AIVantage?",
    a: "Indus Valley Inc. delivers managed IT-enabled and back-office operations. Indus AIVantage, its sister company, provides AI consulting and automation. Together they cover both running the work and automating it.",
  },
  {
    q: "How do you handle data security?",
    a: "Work runs under NDAs with role-based access, defined data-retention rules and healthcare-grade handling for sensitive records. Security controls are agreed in writing before a project starts.",
  },
  {
    q: "How do engagements start?",
    a: "Most engagements begin with a scoped pilot: we agree the work, deliverables and turnaround on a small batch, then scale once quality is proven.",
  },
];
