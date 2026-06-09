"use client";

import { useState } from "react";
import type { Faq } from "@/lib/faqs";

export function FAQ({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-line rounded-lg border border-line bg-white">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-display font-semibold text-navy">{f.q}</span>
              <span
                className={`font-mono text-channel transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {isOpen && (
              <p className="px-6 pb-5 text-sm text-ink/75">{f.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
