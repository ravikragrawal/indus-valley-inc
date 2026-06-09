"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/Container";
import { nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-1" aria-label={site.name}>
          {/* PRIMARY — diamond IVi mark, fixed width */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-icon.gif"
            alt="Indus Valley Inc."
            className="h-10 w-10 object-contain"
          />
          {/* SECONDARY — wordmark, same CSS width as icon */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-full.gif"
            alt=""
            aria-hidden="true"
            className="hidden h-10 w-32 object-contain object-left sm:block"
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink/80 transition-colors hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/quote"
            className="rounded-md bg-signal px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-signal-deep"
          >
            Get a quote
          </Link>
        </nav>

        <button
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-navy" />
          <span className="mt-1.5 block h-0.5 w-6 bg-navy" />
          <span className="mt-1.5 block h-0.5 w-6 bg-navy" />
        </button>
      </Container>

      {open && (
        <Container className="flex flex-col gap-1 border-t border-line py-4 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-2 text-ink/80"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/quote"
            className="mt-2 rounded-md bg-signal px-4 py-2 text-center text-sm font-semibold text-ink"
            onClick={() => setOpen(false)}
          >
            Get a quote
          </Link>
        </Container>
      )}
    </header>
  );
}
