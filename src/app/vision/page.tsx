import type { Metadata } from "next";
import Link from "next/link";
import {
  Eye, Target, Heart, TrendingUp, Globe2, ShieldCheck,
  Users, Zap, BarChart3, Stethoscope, Scale, ShoppingCart,
  Truck, Home, Cpu, HeartHandshake, BookOpen, ArrowRight,
  CheckCircle2, Lightbulb, Building2, Mic2,
} from "lucide-react";
import { Container } from "@/components/Container";
import { CTA } from "@/components/Sections";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbLd } from "@/components/seo/structuredData";

export const metadata: Metadata = {
  title: "Vision & Mission | Indus Valley Inc.",
  description:
    "Indus Valley Inc.'s vision: to be the world's most trusted operational partner for growing businesses. Our mission, values, business outlook, future demand drivers, and the industries we serve.",
  alternates: { canonical: "/vision" },
  openGraph: {
    title: "Vision & Mission | Indus Valley Inc.",
    description: "Founded 2003 in Bangalore. Our vision for the $586B global BPO market and the industries we serve.",
    images: [{ url: "/images/hero-team.jpg", alt: "Indus Valley Inc. team" }],
  },
};

/* ── Core values ── */
const values = [
  {
    icon: CheckCircle2,
    title: "Accuracy First",
    body: "Every output is verified before it reaches the client. Quality is not a step at the end — it is built into every stage of the workflow.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    body: "Metrics, error rates and SLA performance are shared openly in monthly reports. We do not hide the numbers — good or bad.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: ShieldCheck,
    title: "Security by Default",
    body: "Data protection is designed into every engagement before work begins — not added as an afterthought. NDAs, access controls and retention policies are agreed in writing.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: TrendingUp,
    title: "Scalable Partnership",
    body: "We grow as our clients grow. Capacity scales up within days, not hiring cycles, and our pricing model rewards long-term relationships.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Users,
    title: "People-First Operations",
    body: "Behind every workflow is a skilled, trained, managed team — not a commodity pool. We invest in our people because quality is a human outcome.",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: Lightbulb,
    title: "Human + Technology",
    body: "We combine skilled operators with the right tools — AI-assisted workflows, quality dashboards and automation — to deliver accuracy at speed.",
    color: "bg-cyan-50 text-cyan-600",
  },
];

/* ── Future demand drivers ── */
const demandDrivers = [
  {
    icon: Stethoscope,
    title: "Healthcare Digitisation",
    body: "EHR mandates, telemedicine expansion and clinical documentation requirements are driving record demand for medical transcription and data services globally.",
    stat: "45% of clinics outsource transcription",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Explosion",
    body: "Global e-commerce surpassed $5.8 trillion in 2023. Managing product catalogues, order data and customer records at that scale demands specialised data operations.",
    stat: "$5.8T global e-commerce market",
  },
  {
    icon: Cpu,
    title: "AI Training Data Demand",
    body: "Every AI model requires clean, structured, labelled training data. As AI adoption accelerates, demand for high-quality human-verified datasets is growing faster than AI itself.",
    stat: "AI data services: 28% CAGR",
  },
  {
    icon: Globe2,
    title: "Remote-First Operations",
    body: "Distributed teams and remote-first companies are restructuring their back offices. Outsourcing provides the managed operational backbone that a distributed internal team cannot.",
    stat: "60% of SMEs now operate hybrid/remote",
  },
  {
    icon: Scale,
    title: "Regulatory Complexity",
    body: "HIPAA, GDPR, SOX and sectoral regulations are increasing compliance documentation requirements. Accurate record-keeping and audit trails are no longer optional.",
    stat: "Compliance costs up 30% since 2020",
  },
  {
    icon: Building2,
    title: "SME Access to Enterprise-Grade Ops",
    body: "Services once available only to large enterprises — dedicated BPO teams, SLA-backed operations — are now accessible to growing mid-market businesses. The gap is closing.",
    stat: "SME BPO adoption up 3× since 2018",
  },
];

/* ── Industries ── */
const industries = [
  {
    icon: Stethoscope,
    name: "Healthcare & Medical",
    description: "Clinical transcription, EMR data entry, medical records management and healthcare documentation.",
    services: ["Medical transcription", "EMR/EHR data entry", "Clinical records management"],
  },
  {
    icon: Scale,
    name: "Legal & Professional Services",
    description: "Court transcription, legal document processing, contract data entry and case file management.",
    services: ["Legal transcription", "Document processing", "Case file management"],
  },
  {
    icon: ShieldCheck,
    name: "Insurance & Financial Services",
    description: "Claims processing, policy data entry, EOB management and financial records administration.",
    services: ["Claims processing", "Policy data entry", "EOB management"],
  },
  {
    icon: ShoppingCart,
    name: "E-commerce & Retail",
    description: "Product catalogue management, order processing, customer data and inventory record keeping.",
    services: ["Catalogue management", "Order processing", "Data cleanup"],
  },
  {
    icon: Truck,
    name: "Logistics & Supply Chain",
    description: "Shipment data entry, vendor coordination, freight documentation and supply chain reporting.",
    services: ["Shipment data entry", "Vendor admin", "Reporting dashboards"],
  },
  {
    icon: Home,
    name: "Real Estate",
    description: "Property listing management, lead follow-up, document administration and client data management.",
    services: ["Listing management", "Call centre", "Document admin"],
  },
  {
    icon: Cpu,
    name: "Technology & IT",
    description: "Technical support documentation, product data management, QA data processing and web development.",
    services: ["Support documentation", "Data processing", "Web & IT dev"],
  },
  {
    icon: HeartHandshake,
    name: "Non-profit & NGO",
    description: "Donor records management, grant documentation, beneficiary data and programme reporting.",
    services: ["Donor data management", "Programme reporting", "Records admin"],
  },
];

/* ── Market outlook data ── */
const marketStats = [
  { value: "$586B",  label: "Global BPO market value by 2032",         source: "Grand View Research, 2023" },
  { value: "8.5%",  label: "Compound annual growth rate (CAGR)",        source: "Grand View Research, 2023" },
  { value: "55%+",  label: "India's share of global BPO delivery",      source: "NASSCOM, 2023" },
  { value: "$38B",  label: "India's BPO export revenue in 2023",        source: "NASSCOM, 2023" },
  { value: "5.4M",  label: "People employed in India's BPO sector",     source: "NASSCOM, 2023" },
  { value: "2003",  label: "Indus Valley Inc. founded — 20+ years in service", source: "Company record" },
];

export default function VisionPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Vision & Mission", path: "/vision" },
        ])}
      />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-navy py-24 lg:py-32">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-paper/5" />
          <div className="absolute -right-20 -top-20 h-[320px] w-[320px] rounded-full border border-paper/8" />
          <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-channel/10 blur-3xl" />
        </div>
        <Container className="relative">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-xs text-paper/50">
              <li><Link href="/" className="hover:text-paper/80">Home</Link></li>
              <li aria-hidden>/</li>
              <li className="text-paper/80">Vision &amp; Mission</li>
            </ol>
          </nav>
          <span className="inline-flex items-center gap-2 rounded-full border border-signal/50 bg-signal/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-signal">
            ✦ Indus Valley Inc. · Bangalore · Since 2003
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-tight text-paper sm:text-5xl lg:text-6xl">
            Built to make operational excellence accessible to every business
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/75">
            Our vision, mission and values — and the business landscape that makes what we do more important every year.
          </p>
        </Container>
      </section>

      {/* ══════════════════════════════════════════
          VISION & MISSION
      ══════════════════════════════════════════ */}
      <section className="py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Vision */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-navy bg-navy/5 p-8 lg:p-10">
              <div className="absolute right-6 top-6 opacity-10">
                <Eye className="h-24 w-24 text-navy" />
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-navy px-3 py-1 text-xs font-bold uppercase tracking-widest text-paper">
                <Eye className="h-3 w-3" /> Our Vision
              </span>
              <h2 className="mt-5 font-display text-2xl font-bold text-navy lg:text-3xl">
                To be the world&apos;s most trusted partner for operational excellence
              </h2>
              <p className="mt-4 leading-relaxed text-ink/80">
                We envision a world where every growing business — regardless of size — can access accurate, secure and scalable operational support. Where founders and executives are free to focus entirely on strategy and growth, knowing the operational work is handled by people who are as invested in quality as they are.
              </p>
              <p className="mt-3 leading-relaxed text-ink/80">
                Indus Valley Inc. exists to be the partner that makes that possible — not just for enterprise clients, but for every ambitious business that has hit the operational wall.
              </p>
            </div>

            {/* Mission */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-channel bg-channel/5 p-8 lg:p-10">
              <div className="absolute right-6 top-6 opacity-10">
                <Target className="h-24 w-24 text-channel" />
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-channel px-3 py-1 text-xs font-bold uppercase tracking-widest text-paper">
                <Target className="h-3 w-3" /> Our Mission
              </span>
              <h2 className="mt-5 font-display text-2xl font-bold text-navy lg:text-3xl">
                Deliver the operations work. Return the time. Expand what&apos;s possible.
              </h2>
              <p className="mt-4 leading-relaxed text-ink/80">
                Indus Valley Inc. delivers accurate, secure and scalable IT-enabled services that take the operational burden off our clients — permanently. We do this through trained, managed teams, robust QA processes and technology-augmented workflows.
              </p>
              <p className="mt-3 leading-relaxed text-ink/80">
                Our mission is measured in our clients&apos; outcomes: the physician who sees more patients, the sales team that stops processing orders, the founder who stops working weekends to clear the backlog.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════
          CORE VALUES
      ══════════════════════════════════════════ */}
      <section className="bg-mist/40 py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-channel/40 bg-channel/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-channel">
              <Heart className="h-3 w-3" /> Core Values
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-navy sm:text-4xl">
              The principles that guide every engagement
            </h2>
            <p className="mt-3 text-ink/70">
              These are not aspirations — they are the operating standards our team is held to on every project, every day.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ icon: Icon, title, body, color }) => (
              <div key={title} className="rounded-xl border border-line bg-white p-6 shadow-sm">
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${color}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════
          BUSINESS OUTLOOK / MARKET DATA
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-channel/40 bg-channel/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-channel">
                <BarChart3 className="h-3 w-3" /> Business Outlook
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-navy sm:text-4xl">
                The global BPO market is entering its fastest growth decade
              </h2>
              <div className="mt-5 space-y-4 text-ink/75 leading-relaxed">
                <p>
                  The global business process outsourcing market was valued at <strong>$280.64 billion in 2023</strong> and is projected to reach <strong>$586 billion by 2032</strong> — a compound annual growth rate of 8.5%. This is not a cyclical trend; it is a structural shift in how businesses operate.
                </p>
                <p>
                  Three forces are accelerating this shift simultaneously: <strong>AI adoption</strong> (which requires clean data and human-in-the-loop quality control), <strong>remote-first operations</strong> (which need managed operational backbones), and <strong>talent cost inflation</strong> (which makes in-house repetitive-task teams increasingly uneconomic).
                </p>
                <p>
                  India remains the world&apos;s premier BPO destination — delivering over 55% of global BPO output — combining English proficiency, time-zone coverage for US, UK and AU clients, deep talent pools and competitive cost structures. Bangalore, where Indus Valley Inc. is headquartered, is India&apos;s leading technology and services city.
                </p>
                <p>
                  Indus Valley Inc. has operated continuously since 2003 — through the dot-com recovery, the 2008 financial crisis, COVID-19 and the AI transition. We have seen every market cycle. Our clients trust us precisely because we are still here.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {marketStats.map(({ value, label, source }) => (
                <div key={value} className="rounded-xl border border-line bg-mist/40 p-5">
                  <p className="font-display text-3xl font-bold text-navy">{value}</p>
                  <p className="mt-1.5 text-sm font-medium text-ink/80">{label}</p>
                  <p className="mt-1 text-xs text-ink/45">{source}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════
          FUTURE DEMAND DRIVERS
      ══════════════════════════════════════════ */}
      <section className="bg-navy py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-paper/30 bg-paper/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-paper/80">
              <Zap className="h-3 w-3" /> Future Demand Drivers
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-paper sm:text-4xl">
              Six forces shaping the next decade of outsourced operations
            </h2>
            <p className="mt-3 text-paper/65">
              Understanding where demand is heading helps our clients plan ahead — and helps us build the right capabilities before they need them.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {demandDrivers.map(({ icon: Icon, title, body, stat }) => (
              <div key={title} className="rounded-xl border border-paper/15 bg-paper/8 p-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-channel/30 text-channel-light">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-signal/20 px-2.5 py-0.5 text-xs font-bold text-signal">{stat}</span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-paper">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/65">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════
          INDUSTRIES SERVED
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-channel/40 bg-channel/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-channel">
                <BookOpen className="h-3 w-3" /> Industries We Serve
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-navy sm:text-4xl">
                Sector-specific expertise across eight industries
              </h2>
              <p className="mt-3 max-w-2xl text-ink/70">
                Each industry has its own terminology, compliance requirements and workflow standards. We assign specialists — not generalists — to accounts in regulated and specialised sectors.
              </p>
            </div>
            <Link href="/industries" className="shrink-0 inline-flex items-center gap-2 rounded-md border border-navy/20 px-5 py-2.5 text-sm font-semibold text-navy hover:border-navy">
              Industry guide <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map(({ icon: Icon, name, description, services: svcs }) => (
              <div
                key={name}
                className="rounded-xl border border-line bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-channel/10">
                  <Icon className="h-5 w-5 text-channel" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-navy">{name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/65">{description}</p>
                <ul className="mt-3 space-y-1">
                  {svcs.map((s) => (
                    <li key={s} className="flex items-center gap-1.5 text-xs text-ink/55">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-channel" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════
          CLOSING — WHAT THIS MEANS FOR CLIENTS
      ══════════════════════════════════════════ */}
      <section className="bg-mist/40 py-20">
        <Container className="max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-channel/40 bg-channel/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-channel">
            <Mic2 className="h-3 w-3" /> In plain language
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-navy sm:text-4xl">
            What our vision means for you, as a client
          </h2>
          <div className="mt-6 space-y-4 text-left text-ink/75 leading-relaxed">
            <p>
              Our vision is not a corporate statement — it is a commitment that shapes how we design every engagement. It means we will not take on a project we cannot deliver accurately. It means we will tell you when something is not working, rather than hiding it in a report. It means we grow the relationship based on your outcomes, not our revenue.
            </p>
            <p>
              The businesses we work with longest are not those with the largest contracts — they are those who found that we actually delivered what we said we would, told them what the numbers looked like, and made it easy to scale when they were ready.
            </p>
            <p>
              If that is the kind of partner you are looking for, the next step is a conversation about your specific situation.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/quote" className="inline-flex items-center gap-2 rounded-md bg-navy px-7 py-3.5 font-semibold text-paper transition-colors hover:bg-navy/90">
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 rounded-md border border-navy/30 px-7 py-3.5 font-semibold text-navy transition-colors hover:border-navy">
              See our services
            </Link>
          </div>
        </Container>
      </section>

      <CTA title="Ready to remove the operational wall?" />
    </>
  );
}
