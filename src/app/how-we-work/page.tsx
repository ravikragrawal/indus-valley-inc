import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading, ProcessSteps, CTA } from "@/components/Sections";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbLd } from "@/components/seo/structuredData";

export const metadata: Metadata = {
  title: "How We Work — Process, Quality & Security",
  description:
    "How Indus Valley Inc. runs engagements: scope, pilot, scale, review — with data security and quality controls agreed before work begins.",
  alternates: { canonical: "/how-we-work" },
};

export default function HowWeWorkPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "How we work", path: "/how-we-work" },
        ])}
      />
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="A pilot first, then scale — never a leap of faith"
            intro="Every engagement starts small and proves itself before it grows. You see quality on a real batch before you commit to volume."
          />
          <div className="mt-10">
            <ProcessSteps />
          </div>
        </Container>
      </section>

      <section className="bg-mist/50 py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Security"
            title="Security & data handling"
            intro="Sensitive work needs more than a promise. We agree the controls in writing before anything starts."
          />
          <ul className="mt-8 space-y-4 text-ink/80">
            {[
              "NDAs signed before any data changes hands.",
              "Role-based access — people see only the data their task requires.",
              "Defined data-retention and deletion rules per engagement.",
              "Healthcare-grade handling for clinical and other sensitive records.",
            ].map((i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-channel" />
                {i}
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CTA />
    </>
  );
}
