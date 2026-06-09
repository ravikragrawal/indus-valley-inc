import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 font-display text-4xl font-bold text-navy">
        That page isn't here
      </h1>
      <p className="mt-4 text-ink/70">
        The page may have moved. Try our services or get in touch.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/services" className="rounded-md border border-navy/30 px-5 py-2.5 font-semibold text-navy hover:border-navy">
          Services
        </Link>
        <Link href="/contact" className="rounded-md bg-signal px-5 py-2.5 font-semibold text-ink hover:bg-signal-deep">
          Contact
        </Link>
      </div>
    </Container>
  );
}
