import Link from "next/link";
import {
  Mic2, ClipboardList, DatabaseZap, BarChart3,
  ArrowLeftRight, Building2, PhoneCall, Globe,
  ShieldCheck, Clock, Users, TrendingUp,
  CheckCircle2, ArrowRight, Star, Zap, Lock,
  CalendarCheck, MessageSquare,
} from "lucide-react";
import { Container } from "@/components/Container";
import { services } from "@/lib/services";

/* ─── Icon map: one icon per service slug ─── */
const SERVICE_ICONS: Record<string, React.ElementType> = {
  transcription:      Mic2,
  "data-entry":       ClipboardList,
  "data-cleanup":     DatabaseZap,
  "data-visualization": BarChart3,
  "data-mapping":     ArrowLeftRight,
  "back-office":      Building2,
  "call-centre":      PhoneCall,
  "web-it":           Globe,
};

/* photos are now on service.photo from services.ts */

/* ════════════════════════════════════════════════════ */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  className = "",
  center = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  className?: string;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-2xl ${className}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-channel/40 bg-channel/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-channel">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-lg text-ink/70">{intro}</p>}
    </div>
  );
}

/* ════════════════════════════════════════════════════
   PRIMARY CTA — full-width "Schedule a call" panel
════════════════════════════════════════════════════ */
export function CTA({
  title = "Ready to hand off the work that's draining your team?",
  buttonLabel = "Schedule a call with our experts",
  href = "/contact",
}: {
  title?: string;
  buttonLabel?: string;
  href?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy py-20">
      {/* decorative rings */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border border-paper/10" />
      <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full border border-paper/10" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-channel/10 blur-3xl" />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          {/* eyebrow */}
          <span className="inline-flex items-center gap-2 rounded-full border border-signal/50 bg-signal/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-signal">
            <CalendarCheck className="h-3.5 w-3.5" /> Let's talk
          </span>

          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>

          <p className="mt-4 text-lg text-white/75">
            Book a free 30-minute call with our expert team. Tell us your specific requirements — we'll propose a tailored pilot within 24 hours. No obligation, no jargon.
          </p>

          {/* Social proof micro-copy */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-white/55">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-signal" /> Response within 4 business hours</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-signal" /> Free pilot available</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-signal" /> No long-term commitment</span>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={href}
              className="group inline-flex items-center gap-2 rounded-md bg-signal px-8 py-4 text-base font-bold text-ink shadow-lg shadow-signal/25 transition-all hover:bg-signal-deep hover:shadow-signal/40 hover:gap-3"
            >
              <CalendarCheck className="h-5 w-5" />
              {buttonLabel}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="https://wa.me/919886024388"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-paper/30 bg-paper/10 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:border-paper/60 hover:bg-paper/20"
            >
              <MessageSquare className="h-5 w-5 text-emerald-400" />
              WhatsApp us instead
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   INLINE SCHEDULE-CALL STRIP — lighter, for mid-page use
════════════════════════════════════════════════════ */
export function ScheduleCallStrip() {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-channel/15 via-channel/5 to-transparent border border-channel/25 p-6 sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold text-navy sm:text-xl">
            Speak directly with a service specialist
          </p>
          <p className="mt-1 text-sm text-ink/65">
            Describe your workflow — we'll tell you exactly how we'd handle it and what it would cost.
          </p>
        </div>
        <Link
          href="/contact"
          className="group inline-flex shrink-0 items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-navy/80 hover:gap-3"
        >
          <CalendarCheck className="h-4 w-4 text-signal" />
          Schedule a call
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════ */
export function TrustStrip() {
  const items = [
    { icon: Star,        text: "Serving clients since 2003" },
    { icon: ShieldCheck, text: "Healthcare-grade data security" },
    { icon: Clock,       text: "SLA-backed turnaround" },
    { icon: Users,       text: "Dedicated managed teams" },
    { icon: TrendingUp,  text: "99%+ accuracy target" },
  ];
  return (
    <div className="border-y border-line bg-gradient-to-r from-mist/80 via-white to-mist/80">
      <Container className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5">
        {items.map(({ icon: Icon, text }) => (
          <span key={text} className="flex items-center gap-2 text-sm font-medium text-ink/70">
            <Icon className="h-4 w-4 text-channel" />
            {text}
          </span>
        ))}
      </Container>
    </div>
  );
}

/* ════════════════════════════════════════════════════ */
export function ServiceCard({ slug }: { slug: string }) {
  const s = services.find((x) => x.slug === slug)!;
  const Icon = SERVICE_ICONS[slug] ?? Globe;

  return (
    <Link
      href={`/services/${s.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-channel hover:shadow-lg"
    >
      {/* HD thumbnail */}
      <div className="relative h-44 overflow-hidden bg-mist">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={s.photo}
          alt={`${s.name} services — Indus Valley Inc.`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
        {/* icon badge */}
        <span className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/20 text-white backdrop-blur-sm">
          <Icon className="h-4 w-4" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base font-bold text-navy">{s.name}</h3>
        {/* first pain point as hook */}
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70 line-clamp-3">
          {s.painPoints[0].title}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
          <span className="text-xs text-ink/45">{s.turnaround ?? "Scoped per project"}</span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-channel group-hover:text-signal-deep">
            How we fix it <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ════════════════════════════════════════════════════ */
export function TestimonialStrip() {
  const picks = services.slice(0, 3);
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {picks.map((s) => (
        <blockquote
          key={s.slug}
          className="flex flex-col rounded-xl border border-line bg-white p-6 shadow-sm"
        >
          <div className="flex gap-0.5 text-signal-deep" aria-label="5 stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/75 italic">
            &ldquo;{s.testimonial.quote.slice(0, 160)}…&rdquo;
          </p>
          <footer className="mt-4 border-t border-line pt-4">
            <p className="text-sm font-semibold text-navy">{s.testimonial.name}</p>
            <p className="text-xs text-ink/55">{s.testimonial.role}, {s.testimonial.company}</p>
            <span className="mt-2 inline-block rounded-full bg-channel/10 px-2.5 py-0.5 text-xs font-semibold text-channel">
              {s.testimonial.result}
            </span>
          </footer>
        </blockquote>
      ))}
    </div>
  );
}

/* ════════════════════════════════════════════════════ */
const steps = [
  {
    n: "01",
    icon: ClipboardList,
    t: "Scope",
    d: "We agree the work, deliverables and turnaround — in writing, before we start.",
  },
  {
    n: "02",
    icon: CheckCircle2,
    t: "Pilot",
    d: "A small batch proves quality before you commit to scale.",
  },
  {
    n: "03",
    icon: Zap,
    t: "Scale",
    d: "Capacity ramps to your volume on an agreed daily cadence.",
  },
  {
    n: "04",
    icon: BarChart3,
    t: "Review",
    d: "Accuracy metrics and SLAs reviewed with you openly — no surprises.",
  },
];

export function ProcessSteps() {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => {
        const Icon = s.icon;
        return (
          <li
            key={s.n}
            className="relative flex flex-col rounded-xl border border-line bg-white p-6 shadow-sm"
          >
            {/* connector line (desktop) */}
            {i < steps.length - 1 && (
              <span className="absolute -right-3 top-10 hidden h-px w-6 bg-channel/40 lg:block" />
            )}
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-channel/15">
              <Icon className="h-5 w-5 text-channel" />
            </span>
            <span className="mt-4 font-mono text-xs font-semibold text-channel/80">{s.n}</span>
            <h3 className="mt-1 font-display text-lg font-bold text-navy">{s.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.d}</p>
          </li>
        );
      })}
    </ol>
  );
}

/* ════════════════════════════════════════════════════ */
export function WhyItWorksSection() {
  const cards = [
    {
      icon: TrendingUp,
      title: "Scale on demand",
      body: "Add capacity in days, not hiring cycles. Ramp up for a backlog, ramp down when it clears.",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: Users,
      title: "Trained, managed teams",
      body: "You get output and a single point of accountability — not a team you have to recruit and supervise.",
      color: "bg-emerald-50 text-emerald-600",
    },
    {
      icon: Lock,
      title: "Secure by default",
      body: "Access controls, NDAs and healthcare-grade handling of sensitive data, agreed before we start.",
      color: "bg-violet-50 text-violet-600",
    },
  ];
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {cards.map((c) => {
        const Icon = c.icon;
        return (
          <div
            key={c.title}
            className="flex flex-col rounded-xl border border-line bg-white p-6 shadow-sm"
          >
            <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${c.color}`}>
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-display text-lg font-bold text-navy">{c.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{c.body}</p>
          </div>
        );
      })}
    </div>
  );
}

/* ════════════════════════════════════════════════════ */
export function StatsBar() {
  const stats = [
    { value: "20+", label: "Years in business" },
    { value: "99%+", label: "Accuracy target" },
    { value: "8", label: "Service verticals" },
    { value: "24h", label: "Standard turnaround" },
  ];
  return (
    <div className="rounded-2xl bg-navy px-8 py-10">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-4xl font-bold text-signal">{s.value}</p>
            <p className="mt-1 text-sm text-paper/65">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
