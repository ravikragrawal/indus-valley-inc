import Link from "next/link";
import { Container } from "@/components/Container";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-navy text-paper">
      <Container className="grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          {/* Logo on white pill — GIFs have opaque backgrounds so we display them naturally */}
          <Link href="/" aria-label={site.name}>
            <div className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-icon.gif" alt="Indus Valley Inc." className="h-9 w-9 object-contain" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-full.gif" alt="" aria-hidden="true" className="h-6 w-32 object-contain object-left" />
            </div>
          </Link>
          <p className="mt-3 max-w-xs text-sm text-paper/70">
            IT-enabled services and BPO partner since 2003. Bangalore, India.
          </p>
        </div>

        <div>
          <p className="eyebrow text-channel-light">Services</p>
          <ul className="mt-3 space-y-2 text-sm text-paper/80">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-signal">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-channel-light">Company</p>
          <ul className="mt-3 space-y-2 text-sm text-paper/80">
            <li><Link href="/about" className="hover:text-signal">About</Link></li>
            <li><Link href="/vision" className="hover:text-signal">Vision &amp; Mission</Link></li>
            <li><Link href="/how-we-work" className="hover:text-signal">How we work</Link></li>
            <li><Link href="/industries" className="hover:text-signal">Industries</Link></li>
            <li><Link href="/ai" className="hover:text-signal">Indus AIVantage</Link></li>
            <li><Link href="/contact" className="hover:text-signal">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-channel-light">Contact</p>
          <address className="mt-3 space-y-2 text-sm not-italic text-paper/80">
            <p>{site.contact.addressLocality}, {site.contact.addressRegion}, India</p>
            <p>
              <a href={`tel:${site.contact.phoneINraw}`} className="hover:text-signal">
                {site.contact.phoneIN}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.contact.email}`} className="hover:text-signal">
                {site.contact.email}
              </a>
            </p>
          </address>
        </div>
      </Container>

      <div className="border-t border-paper/15">
        <Container className="flex flex-col items-center justify-between gap-2 py-5 text-xs text-paper/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Indus Valley Inc. All rights reserved.</p>
          <p>
            AI consulting:{" "}
            <a href={site.aiArm.url} className="hover:text-signal">
              indusaivantage.com
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}
