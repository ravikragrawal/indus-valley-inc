import Link from "next/link";
import {
  Mic2, ClipboardList, DatabaseZap, BarChart3,
  ArrowLeftRight, Building2, PhoneCall, Globe,
  Stethoscope, Scale, ShieldCheck, ShoppingCart,
  Truck, Home, Cpu, HeartHandshake,
  ArrowRight, ChevronRight,
} from "lucide-react";
import { Container } from "@/components/Container";
import { ThroughputLane } from "@/components/ThroughputLane";
import {
  SectionHeading,
  ServiceCard,
  ProcessSteps,
  TrustStrip,
  CTA,
  WhyItWorksSection,
  StatsBar,
  TestimonialStrip,
} from "@/components/Sections";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqLd, howToLd } from "@/components/seo/structuredData";
import { services } from "@/lib/services";
import { homeFaqs } from "@/lib/faqs";
import { site } from "@/lib/site";

/* ── Industries we serve ── */
const industries = [
  { icon: Stethoscope,  label: "Healthcare & Medical",         href: "/industries#healthcare" },
  { icon: Scale,        label: "Legal & Professional",         href: "/industries#legal" },
  { icon: ShieldCheck,  label: "Insurance & Finance",          href: "/industries#insurance" },
  { icon: ShoppingCart, label: "E-commerce & Retail",          href: "/industries#ecommerce" },
  { icon: Truck,        label: "Logistics & Supply Chain",     href: "/industries#logistics" },
  { icon: Home,         label: "Real Estate",                  href: "/industries#realestate" },
  { icon: Cpu,          label: "Technology & IT",              href: "/industries#technology" },
  { icon: HeartHandshake, label: "Non-profit & NGO",           href: "/industries#nonprofit" },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[faqLd(homeFaqs), howToLd()]} />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] overflow-hidden flex items-center">
        <div className="absolute inset-0 -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-team.jpg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
            fetchPriority="high"
          />
          {/* Stronger overlay — left copy stays crisp even where photo is bright */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/97 via-navy/88 to-navy/60" />
        </div>

        <Container className="w-full py-24 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-12">
            {/* Left — copy */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-signal/60 bg-signal/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-signal backdrop-blur-sm">
                ✦ IT-enabled services &amp; BPO · Bangalore · Since 2003
              </span>

              <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] text-paper sm:text-5xl lg:text-6xl">
                Your operations partner<br className="hidden sm:block" /> for the work<br className="hidden sm:block" />
                <span className="text-signal"> that never stops</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white text-shadow">
                Indus Valley Inc. absorbs your transcription, data and back-office volume — accurately, securely, on schedule — so your core team focuses entirely on growing the business.
              </p>

              {/* Mini proof points */}
              <ul className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 text-sm text-white/95 text-shadow-sm">
                {["20+ years experience","99%+ accuracy SLA","Healthcare-grade security","8 service lines","Global client base","Pilot before you commit"].map(p => (
                  <li key={p} className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/quote" className="inline-flex items-center gap-2 rounded-md bg-signal px-7 py-3.5 font-semibold text-ink transition-all hover:bg-signal-deep hover:gap-3">
                  Get a free quote <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/services" className="inline-flex items-center gap-2 rounded-md border border-paper/40 bg-paper/10 px-7 py-3.5 font-semibold text-paper backdrop-blur-sm transition-all hover:border-paper hover:bg-paper/20">
                  Explore services <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right — flow widget */}
            <div className="flex flex-col justify-center gap-5 lg:col-span-5">
              <div className="rounded-2xl border border-paper/20 bg-paper/10 p-5 backdrop-blur-sm">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/80">How work flows through us</p>
                <ThroughputLane intake="Raw audio, files, records" output="Clean, usable data" />
                <p className="mt-3 font-mono text-xs text-white/75">
                  Messy and high-volume in. Accurate, structured and on schedule out.
                </p>
              </div>

              {/* Quick service links */}
              <div className="rounded-2xl border border-paper/20 bg-paper/10 p-5 backdrop-blur-sm">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/80">Most requested services</p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { icon: Mic2,         label: "Transcription",     href: "/services/transcription" },
                    { icon: ClipboardList,label: "Data Entry",         href: "/services/data-entry" },
                    { icon: PhoneCall,    label: "Call Centre",        href: "/services/call-centre" },
                    { icon: Globe,        label: "Web & IT",           href: "/services/web-it" },
                  ].map(({ icon: Icon, label, href }) => (
                    <Link key={href} href={href} className="flex items-center gap-2 rounded-lg bg-paper/10 px-3 py-2 text-xs font-medium text-paper/80 transition-colors hover:bg-paper/20 hover:text-paper">
                      <Icon className="h-3.5 w-3.5 text-signal" />
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Trust strip ── */}
      <TrustStrip />

      {/* ══════════════════════════════════════════
          PROBLEM STATEMENT
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="The operational burden"
                title="Every growing business hits the same wall"
              />
              <div className="mt-6 space-y-4 text-ink/75">
                <p className="text-lg">Your best people are spending hours on transcription, data entry and back-office work that adds no strategic value — but cannot be ignored.</p>
                <p>The result: backlogs pile up, errors multiply, and your core team loses the focus it needs to grow your business. Hiring more staff just shifts the problem.</p>
                <p className="font-medium text-navy">Outsourcing to the right partner eliminates the wall entirely.</p>
              </div>
              <Link href="/vision" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-channel hover:text-navy">
                Our vision for operational excellence <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "3 hrs/day", label: "Average time clinicians spend on transcription instead of patients" },
                { stat: "8% errors", label: "Typical error rate in manual data entry before QA processes" },
                { stat: "60%", label: "Of staff time consumed by repetitive tasks in unoptimised back offices" },
                { stat: "4× cost", label: "More expensive to fix downstream data errors than prevent them at source" },
              ].map(({ stat, label }) => (
                <div key={stat} className="rounded-xl border border-line bg-mist/40 p-5">
                  <p className="font-display text-3xl font-bold text-navy">{stat}</p>
                  <p className="mt-1.5 text-xs leading-snug text-ink/65">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════ */}
      <section className="bg-mist/30 py-20">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="What we do"
              title="Eight service lines. One accountable partner."
              intro="Every service is scoped, piloted and scaled — not staffed and forgotten."
            />
            <Link href="/services" className="shrink-0 inline-flex items-center gap-1.5 rounded-md border border-navy/20 px-4 py-2 text-sm font-semibold text-navy hover:border-navy">
              All services <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <ServiceCard key={s.slug} slug={s.slug} />
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════
          INDUSTRIES
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Industries we serve"
              title="Deep experience across the sectors that rely on accuracy"
            />
            <Link href="/industries" className="shrink-0 inline-flex items-center gap-1.5 rounded-md border border-navy/20 px-4 py-2 text-sm font-semibold text-navy hover:border-navy">
              Full industry guide <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {industries.map(({ icon: Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                className="group flex flex-col items-center gap-3 rounded-xl border border-line bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-channel hover:shadow-md"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-channel/10 transition-colors group-hover:bg-channel/20">
                  <Icon className="h-6 w-6 text-channel" />
                </span>
                <span className="text-xs font-medium leading-tight text-ink/75 group-hover:text-navy">{label}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════
          CLIENT RESULTS / TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section className="bg-mist/40 py-20">
        <Container>
          <SectionHeading
            eyebrow="Client results"
            title="What happens when the backlog disappears"
            intro="Real, named outcomes from businesses that outsourced their operational load to us."
            center
          />
          <div className="mt-10">
            <TestimonialStrip />
          </div>
          <div className="mt-8 text-center">
            <Link href="/services" className="inline-flex items-center gap-2 rounded-md border border-channel/40 px-5 py-2.5 text-sm font-semibold text-channel hover:border-channel hover:bg-channel/5">
              Read all 8 client stories <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════
          STATS
      ══════════════════════════════════════════ */}
      <section className="py-16">
        <Container>
          <StatsBar />
        </Container>
      </section>

      {/* ══════════════════════════════════════════
          WHY IT WORKS
      ══════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            eyebrow="Why outsource to us"
            title="Capacity and accountability — not a staffing headache"
            intro="Three things that make the difference between a vendor and a partner."
          />
          <WhyItWorksSection />
        </Container>
      </section>

      {/* ══════════════════════════════════════════
          AI ARM PROMO
      ══════════════════════════════════════════ */}
      <section className="py-20">
        <Container>
          <div className="relative overflow-hidden rounded-2xl bg-navy px-8 py-12 sm:px-12">
            {/* decorative circles */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-paper/10" />
            <div className="pointer-events-none absolute -right-8 -top-8  h-40 w-40 rounded-full border border-paper/10" />
            <div className="pointer-events-none absolute bottom-0 left-1/2 h-48 w-48 -translate-x-1/2 translate-y-1/2 rounded-full border border-signal/10" />
            <p className="eyebrow text-channel-light">Our AI practice</p>
            <div className="relative mt-4 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <p className="font-display text-2xl font-bold text-paper sm:text-3xl">
                  Need automation, not just hands?
                </p>
                <p className="mt-3 text-paper/70">
                  {site.aiArm.name} — our AI consulting arm — designs intelligent workflows that eliminate repetitive work at the source, so you need less of it outsourced over time.
                </p>
              </div>
              <Link
                href="/ai"
                className="shrink-0 inline-flex items-center gap-2 rounded-md border border-paper/40 px-6 py-3 font-semibold text-paper transition-colors hover:border-signal hover:text-signal"
              >
                Explore Indus AIVantage <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════
          HOW WE WORK
      ══════════════════════════════════════════ */}
      <section className="bg-mist/30 py-20">
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="A pilot first, then scale — never a leap of faith"
            intro="You see quality before you commit. Every engagement starts with a small batch that proves the process."
          />
          <div className="mt-10">
            <ProcessSteps />
          </div>
          <div className="mt-8 text-center">
            <Link href="/how-we-work" className="inline-flex items-center gap-2 text-sm font-semibold text-channel hover:text-navy">
              Full process walkthrough <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════
          VISION TEASER
      ══════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Vision & Mission"
                title="Built for a world where businesses outsource smarter"
              />
              <p className="mt-5 text-ink/75 leading-relaxed">
                The global BPO market will reach <strong>$586 billion by 2032</strong>. The businesses that grow fastest will be those that identify their operational burden earliest and delegate it to specialists — not those who try to hire their way through it.
              </p>
              <p className="mt-3 text-ink/75 leading-relaxed">
                Indus Valley Inc. was founded in 2003 on one conviction: that accurate, secure, scalable operations should be accessible to any business, not just enterprises with large internal teams.
              </p>
              <Link href="/vision" className="mt-6 inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-navy/90">
                Read our vision &amp; mission <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "$586B", label: "Global BPO market by 2032", color: "bg-blue-50 text-blue-700" },
                { value: "8.5%", label: "Annual market growth rate (CAGR)", color: "bg-emerald-50 text-emerald-700" },
                { value: "55%+", label: "India's share of global BPO delivery", color: "bg-violet-50 text-violet-700" },
                { value: "2003", label: "Year Indus Valley Inc. was founded", color: "bg-amber-50 text-amber-700" },
              ].map(({ value, label, color }) => (
                <div key={value} className={`rounded-xl p-5 ${color.split(" ")[0]}`}>
                  <p className={`font-display text-3xl font-bold ${color.split(" ")[1]}`}>{value}</p>
                  <p className="mt-1.5 text-xs leading-snug text-ink/65">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section className="bg-mist/30 py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Common questions"
            title="What clients ask before they start"
            intro="Straight answers — the kind a search engine or voice assistant can read and quote."
          />
          <div className="mt-8">
            <FAQ faqs={homeFaqs} />
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
