"use client";

import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/Container";
import { leaderQuotes } from "@/lib/quotes";

/**
 * Rotating business-leader quote carousel.
 * Auto-advances every 6 s; user can also step left/right.
 * Shows 3 quotes side-by-side on lg screens, 1 at a time on mobile.
 */
export function LeaderQuotes() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  const total = leaderQuotes.length;

  function go(dir: 1 | -1) {
    setFading(true);
    setTimeout(() => {
      setActive((prev) => (prev + dir + total) % total);
      setFading(false);
    }, 280);
  }

  useEffect(() => {
    const id = setInterval(() => go(1), 6000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Three consecutive quotes for the desktop grid */
  const trio = [0, 1, 2].map((offset) => leaderQuotes[(active + offset) % total]);

  return (
    <section className="bg-gradient-to-b from-mist to-white py-20">
      <Container>
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-channel/40 bg-channel/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-channel">
            <Quote className="h-3 w-3" /> Words that endure
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-4xl">
            Timeless wisdom on focus, delegation &amp; growth
          </h2>
          <p className="mt-3 text-base text-ink/65 max-w-xl mx-auto">
            The world's most accomplished leaders all discovered the same truth:
            do what only <em>you</em> can do — and trust the rest to the right partners.
          </p>
        </div>

        {/* ── Desktop: 3-up grid ── */}
        <div
          className={`hidden gap-6 lg:grid lg:grid-cols-3 transition-opacity duration-300 ${
            fading ? "opacity-0" : "opacity-100"
          }`}
        >
          {trio.map((q, i) => (
            <QuoteCard key={q.name + i} q={q} highlight={i === 0} />
          ))}
        </div>

        {/* ── Mobile: single card ── */}
        <div
          className={`lg:hidden transition-opacity duration-300 ${
            fading ? "opacity-0" : "opacity-100"
          }`}
        >
          <QuoteCard q={leaderQuotes[active]} highlight />
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => go(-1)}
            aria-label="Previous quote"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-ink/60 shadow-sm transition hover:border-channel hover:text-channel"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Dots */}
          <div className="flex gap-1.5">
            {leaderQuotes.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setFading(true);
                  setTimeout(() => { setActive(i); setFading(false); }, 280);
                }}
                aria-label={`Quote ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === active
                    ? "w-5 bg-channel"
                    : "w-1.5 bg-line"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            aria-label="Next quote"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-ink/60 shadow-sm transition hover:border-channel hover:text-channel"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </Container>
    </section>
  );
}

/* ── Individual card ── */
function QuoteCard({
  q,
  highlight = false,
}: {
  q: typeof leaderQuotes[0];
  highlight?: boolean;
}) {
  return (
    <figure
      className={`flex flex-col rounded-2xl p-7 shadow-sm transition-all ${
        highlight
          ? "border-2 border-channel bg-white shadow-channel/10"
          : "border border-line bg-white"
      }`}
    >
      {/* Theme badge */}
      <span className="mb-4 inline-flex w-fit items-center rounded-full bg-channel/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-channel">
        {q.theme}
      </span>

      {/* Open-quote mark */}
      <Quote className="mb-3 h-7 w-7 text-channel/40" />

      {/* Quote text */}
      <blockquote className="flex-1 font-display text-base font-medium leading-relaxed text-ink italic">
        &ldquo;{q.quote}&rdquo;
      </blockquote>

      {/* Attribution */}
      <figcaption className="mt-5 flex items-center gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${q.avatarColor}`}
        >
          {q.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-navy">{q.name}</p>
          <p className="text-xs text-ink/55">{q.title}</p>
        </div>
      </figcaption>
    </figure>
  );
}
