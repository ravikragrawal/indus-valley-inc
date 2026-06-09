import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading, CTA } from "@/components/Sections";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbLd } from "@/components/seo/structuredData";

export const metadata: Metadata = {
  title: "About Us — ITeS & BPO Company Since 2003",
  description:
    "Founded 2003 in Bangalore, India. Indus Valley Inc. is an ITeS partner for transcription, data and back-office operations for clients worldwide.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <section className="py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            as="h1"
            eyebrow="About"
            title="Two decades of getting the work done"
            intro="Founded in November 2003 in Bangalore, India, Indus Valley Inc. began in healthcare transcription and grew into a broad IT-enabled services partner."
          />

          <div className="mt-10 space-y-6 text-lg text-ink/80">
            <p>
              Today we run transcription, data and back-office operations for
              clients across healthcare, legal, finance and e-commerce. The
              model is simple: you hand us the high-volume, repeatable work, and
              we return accurate output on a schedule you can plan around.
            </p>
            <p>
              We hold three things constant — quality over volume, security as a
              default rather than an afterthought, and a single point of
              accountability so you always know who owns the result.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div className="rounded-lg border border-line bg-white p-6">
              <h3 className="font-display text-lg font-bold text-navy">
                How we're structured
              </h3>
              <p className="mt-2 text-ink/75">
                Indus Valley Inc. delivers IT-enabled and back-office
                operations. Our sister company, Indus AIVantage, provides AI
                consulting and automation — so we can both run the work and
                automate it.
              </p>
            </div>
            <div className="rounded-lg border border-line bg-white p-6">
              <h3 className="font-display text-lg font-bold text-navy">
                Where we operate
              </h3>
              <p className="mt-2 text-ink/75">
                Delivery is based in Bangalore, India, serving clients in India
                and internationally.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <CTA />
    </>
  );
}
