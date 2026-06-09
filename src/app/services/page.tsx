import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading, ServiceCard, CTA } from "@/components/Sections";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbLd } from "@/components/seo/structuredData";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "ITeS & BPO Outsourcing Services",
  description:
    "Medical transcription, data entry, cleanup, visualisation, back-office, call centre and web development. Managed, scalable, SLA-backed — Bangalore, India.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "ITeS & BPO Services | Indus Valley Inc.",
    description: "8 managed service lines. SLA-backed accuracy. 20+ years in Bangalore, India.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <section className="py-20">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Services"
            title="Services that absorb your operational load"
            intro="Each one is a managed operation — scoped, piloted, then scaled to your volume. Pick where it hurts most."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} slug={s.slug} />
            ))}
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
