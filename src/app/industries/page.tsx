import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading, CTA } from "@/components/Sections";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbLd } from "@/components/seo/structuredData";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Indus Valley Inc. serves healthcare, legal, finance and e-commerce clients with transcription, data and back-office services tailored to each sector.",
  alternates: { canonical: "/industries" },
};

const industries = [
  {
    name: "Healthcare",
    d: "Medical transcription, EMR/EHR data entry, claims processing and patient-record handling — with healthcare-grade security.",
  },
  {
    name: "Legal",
    d: "Legal transcription, document review support, data entry and case-file digitisation.",
  },
  {
    name: "Finance",
    d: "Data cleanup, reconciliation support, reporting and high-volume back-office processing.",
  },
  {
    name: "E-commerce",
    d: "Product catalogue management, listing data entry, data cleanup and customer support.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
        ])}
      />
      <section className="py-20">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Industries"
            title="Sector experience that shows in the output"
            intro="The work is similar across industries; the details aren't. Here's where we most often help."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {industries.map((i) => (
              <div
                key={i.name}
                className="rounded-lg border border-line bg-white p-6"
              >
                <h3 className="font-display text-xl font-bold text-navy">
                  {i.name}
                </h3>
                <p className="mt-2 text-ink/75">{i.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
