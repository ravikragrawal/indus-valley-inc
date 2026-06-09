"use client";

import { useState } from "react";
import { services } from "@/lib/services";

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-lg border border-channel bg-white p-8">
        <h3 className="font-display text-xl font-bold text-navy">
          Thanks — we've got your request.
        </h3>
        <p className="mt-2 text-ink/75">
          We'll review what you sent and reply within one business day with how
          we'd approach it.
        </p>
      </div>
    );
  }

  const field =
    "mt-1 w-full rounded-md border border-line bg-white px-3 py-2 text-sm focus:border-channel";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          Your name <span className="text-signal-deep">*</span>
          <input name="name" required placeholder="Full name" className={field} />
        </label>
        <label className="block text-sm font-medium text-ink">
          Organization
          <input name="organization" placeholder="Company / firm name" className={field} />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          Work email <span className="text-signal-deep">*</span>
          <input name="email" type="email" required placeholder="you@company.com" className={field} />
        </label>
        <label className="block text-sm font-medium text-ink">
          Callback number
          <input name="phone" type="tel" placeholder="+91 or international" className={field} />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          Service needed
          <select name="service" className={field} defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Multiple / not sure">Multiple / not sure</option>
          </select>
        </label>
        <label className="block text-sm font-medium text-ink">
          Approx. volume
          <input
            name="volume"
            placeholder="e.g. 500 records/day"
            className={field}
          />
        </label>
      </div>

      <label className="block text-sm font-medium text-ink">
        Tell us what's piling up <span className="text-signal-deep">*</span>
        <textarea name="message" rows={4} required placeholder="Describe the work, format, turnaround time, or any specific requirements…" className={field} />
      </label>

      {status === "error" && (
        <p className="text-sm text-signal-deep">
          Something went wrong sending that. Email{" "}
          <a href="mailto:hello@indusvalleyinc.com" className="underline">
            hello@indusvalleyinc.com
          </a>{" "}
          and we'll pick it up.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-md bg-signal px-6 py-3 font-semibold text-ink transition-colors hover:bg-signal-deep disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send request"}
      </button>
    </form>
  );
}
