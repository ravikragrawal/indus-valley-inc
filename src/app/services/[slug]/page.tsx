import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle2, AlertTriangle, Lightbulb, Quote, ChevronDown,
} from "lucide-react";
import { Container } from "@/components/Container";
import { CTA, ScheduleCallStrip } from "@/components/Sections";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceLd, breadcrumbLd, serviceReviewLd } from "@/components/seo/structuredData";
import { services, getService } from "@/lib/services";
import type { Faq } from "@/lib/faqs";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getService(params.slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: {
      title: s.metaTitle,
      description: s.metaDescription,
      images: [{ url: s.photo, alt: s.name }],
    },
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const s = getService(params.slug);
  if (!s) notFound();

  const faqItems: Faq[] = s.faq.map((f) => ({ q: f.q, a: f.a }));

  return (
    <>
      <JsonLd
        data={[
          serviceLd(s),
          serviceReviewLd(s),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: s.name, path: `/services/${s.slug}` },
          ]),
        ]}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="relative h-64 w-full sm:h-80 lg:h-96">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={s.photo}
            alt={`${s.name} — Indus Valley Inc.`}
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
          {/* Stronger overlay for legibility on all photos */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/78 to-navy/40" />
          <div className="absolute inset-0 flex items-center">
            <Container>
              <nav aria-label="Breadcrumb" className="mb-4">
                <ol className="flex items-center gap-1.5 text-xs text-white/80 text-shadow-sm">
                  <li><Link href="/" className="hover:text-white">Home</Link></li>
                  <li aria-hidden>/</li>
                  <li><Link href="/services" className="hover:text-white">Services</Link></li>
                  <li aria-hidden>/</li>
                  <li className="text-white">{s.name}</li>
                </ol>
              </nav>
              <h1 className="max-w-2xl font-display text-3xl font-bold leading-tight text-white text-shadow sm:text-4xl lg:text-5xl">
                {s.headline}
              </h1>
              {s.turnaround && (
                <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-signal/90 px-4 py-1.5 text-sm font-semibold text-ink">
                  ⏱ {s.turnaround}
                </p>
              )}
            </Container>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="py-12 lg:py-16">
        <Container className="max-w-3xl">
          <p className="text-lg leading-relaxed text-ink/80">{s.intro}</p>
        </Container>
      </section>

      {/* ── Pain Points ── */}
      <section className="bg-red-50/60 py-14">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-2 text-red-700">
              <AlertTriangle className="h-5 w-5 shrink-0" />
              <h2 className="font-display text-2xl font-bold">The problem most businesses are living with</h2>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {s.painPoints.map((p) => (
                <div
                  key={p.title}
                  className="rounded-xl border border-red-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="font-semibold text-red-800">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{p.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Our Solution ── */}
      <section className="bg-emerald-50/60 py-14">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-2 text-emerald-700">
              <Lightbulb className="h-5 w-5 shrink-0" />
              <h2 className="font-display text-2xl font-bold">How Indus Valley solves it</h2>
            </div>
            <p className="mt-4 text-lg leading-relaxed text-ink/80">{s.solution}</p>

            {/* Outcomes / metrics */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {s.outcomes.map((o) => (
                <div key={o.metric} className="rounded-xl border border-emerald-200 bg-white p-5 shadow-sm">
                  <p className="font-display text-xl font-bold text-emerald-700">{o.metric}</p>
                  <p className="mt-1.5 text-sm text-ink/70">{o.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── What's Included + Quality ── */}
      <section className="py-14">
        <Container>
          <div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold text-navy">What's included</h2>
              <ul className="mt-5 space-y-3">
                {s.included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-channel" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl border border-line bg-mist/40 p-6">
                <h2 className="font-display text-lg font-bold text-navy">Quality assurance</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{s.quality}</p>
              </div>
              {s.security && (
                <div className="rounded-xl border border-line bg-mist/40 p-6">
                  <h2 className="font-display text-lg font-bold text-navy">Security &amp; compliance</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">{s.security}</p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Schedule a call strip ── */}
      <section className="py-10">
        <Container className="max-w-4xl">
          <ScheduleCallStrip />
        </Container>
      </section>

      {/* ── Client Testimonial ── */}
      <section className="bg-navy py-16">
        <Container className="max-w-3xl">
          <h2 className="text-center font-display text-2xl font-bold text-paper">
            Real results from a real client
          </h2>
          <blockquote className="mt-8 rounded-2xl bg-white/10 p-8 ring-1 ring-paper/20">
            <Quote className="h-8 w-8 text-signal opacity-80" />
            <p className="mt-4 text-lg leading-relaxed text-paper/90 italic">
              {s.testimonial.quote}
            </p>
            <footer className="mt-6 flex flex-col gap-1 border-t border-paper/20 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold text-paper">{s.testimonial.name}</p>
                <p className="text-sm text-paper/65">{s.testimonial.role}, {s.testimonial.company}</p>
                <p className="text-xs text-paper/50">{s.testimonial.industry}</p>
              </div>
              <span className="inline-block rounded-full bg-signal px-4 py-1.5 text-sm font-bold text-ink">
                {s.testimonial.result}
              </span>
            </footer>
          </blockquote>
        </Container>
      </section>

      {/* ── FAQ ── */}
      <section className="py-14">
        <Container className="max-w-2xl">
          <div className="flex items-center gap-2">
            <ChevronDown className="h-5 w-5 text-channel" />
            <h2 className="font-display text-2xl font-bold text-navy">
              Questions about {s.name.toLowerCase()}
            </h2>
          </div>
          <div className="mt-6">
            <FAQ faqs={faqItems} />
          </div>
        </Container>
      </section>

      <CTA title={`Ready to fix the ${s.name.toLowerCase()} problem?`} />
    </>
  );
}
