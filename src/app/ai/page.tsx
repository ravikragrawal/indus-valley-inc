import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/Sections";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbLd } from "@/components/seo/structuredData";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Indus AIVantage — AI Consulting & Automation",
  description:
    "Indus AIVantage is the AI consulting and automation arm of Indus Valley Inc., designing AI workflows that reduce repeat work at the source.",
  alternates: { canonical: "/ai" },
};

export default function AiPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "AI", path: "/ai" },
        ])}
      />
      <section className="py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Our AI practice"
            title="Indus AIVantage"
            intro="The AI consulting and automation arm of Indus Valley Inc. Where our operations teams run the work, AIVantage automates it."
          />
          <div className="mt-10 space-y-6 text-lg text-ink/80">
            <p>
              Some work is best handled by trained people. Some is better handed
              to a well-designed automation. Indus AIVantage helps you tell the
              difference — and builds the AI workflows that take repeat work off
              the table for good.
            </p>
            <p>
              Because it sits alongside Indus Valley Inc., you can start with
              managed operations today and move to automation as the volume and
              patterns justify it — without changing partners.
            </p>
          </div>

          <a
            href={site.aiArm.url}
            className="mt-10 inline-block rounded-md bg-signal px-6 py-3 font-semibold text-ink transition-colors hover:bg-signal-deep"
          >
            Visit indusaivantage.com →
          </a>
        </Container>
      </section>
    </>
  );
}
