import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/Sections";
import { QuoteForm } from "@/components/QuoteForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbLd } from "@/components/seo/structuredData";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Get a quote from Indus Valley Inc. Tell us the service, volume and turnaround you need and we'll reply within one business day.",
  alternates: { canonical: "/quote" },
};

export default function QuotePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Get a quote", path: "/quote" },
        ])}
      />
      <section className="py-20">
        <Container className="max-w-2xl">
          <SectionHeading
            eyebrow="Get a quote"
            title="Let's scope it together"
            intro="A few details is all we need to come back with a clear approach and a pilot you can judge us on."
          />
          <div className="mt-10 rounded-lg border border-line bg-white p-6 sm:p-8">
            <QuoteForm />
          </div>
        </Container>
      </section>
    </>
  );
}
