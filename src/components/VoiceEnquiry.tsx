"use client";

import { useState, useRef, useCallback, useEffect } from "react";

type Step = {
  field: "name" | "organization" | "phone" | "message";
  label: string;
  prompt: string;
  placeholder: string;
  inputType?: string;
};

const STEPS: Step[] = [
  {
    field: "name",
    label: "Your name",
    prompt: "Please say your full name.",
    placeholder: "e.g. Ravi Kumar",
  },
  {
    field: "organization",
    label: "Organization",
    prompt: "Say your company or organization name.",
    placeholder: "e.g. Acme Corp",
  },
  {
    field: "phone",
    label: "Callback number",
    prompt: "Say your phone number including country code.",
    placeholder: "e.g. +91 98860 24388",
    inputType: "tel",
  },
  {
    field: "message",
    label: "Brief enquiry",
    prompt: "In a few words, describe what you need help with.",
    placeholder: "e.g. Medical transcription, around 200 files a week",
  },
];

type FieldValues = Record<Step["field"], string>;

// Thin wrapper so TypeScript knows about the Web Speech API
interface ISpeechRecognition extends EventTarget {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: ((e: SpeechRecognitionEvent) => void) | null;
  onerror: ((e: Event) => void) | null;
  onend: (() => void) | null;
}

interface SpeechRecognitionEvent extends Event {
  resultIndex: number;
  results: SpeechRecognitionResultList;
}

declare global {
  interface Window {
    SpeechRecognition: new () => ISpeechRecognition;
    webkitSpeechRecognition: new () => ISpeechRecognition;
  }
}

function getSR(): (new () => ISpeechRecognition) | null {
  if (typeof window === "undefined") return null;
  return (window.SpeechRecognition ?? window.webkitSpeechRecognition) ?? null;
}

type SubmitStatus = "idle" | "sending" | "done" | "error";

export function VoiceEnquiry() {
  const [open, setOpen] = useState(false);
  const [stepIdx, setStepIdx] = useState(0);
  const [values, setValues] = useState<FieldValues>({ name: "", organization: "", phone: "", message: "" });
  const [listening, setListening] = useState(false);
  const [interim, setInterim] = useState("");
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [speechSupported, setSpeechSupported] = useState(true);
  const srRef = useRef<ISpeechRecognition | null>(null);

  useEffect(() => {
    if (!getSR()) setSpeechSupported(false);
  }, []);

  const step = STEPS[stepIdx];
  const isLastStep = stepIdx === STEPS.length - 1;

  const stopListening = useCallback(() => {
    srRef.current?.stop();
    srRef.current = null;
    setListening(false);
    setInterim("");
  }, []);

  const startListening = useCallback(() => {
    const SR = getSR();
    if (!SR) return;
    const sr = new SR();
    sr.continuous = false;
    sr.interimResults = true;
    sr.lang = "en-IN";

    sr.onresult = (e) => {
      let final = "";
      let inter = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        if (e.results[i].isFinal) final += e.results[i][0].transcript;
        else inter += e.results[i][0].transcript;
      }
      if (final) {
        setValues((v) => ({ ...v, [step.field]: (v[step.field] + " " + final).trim() }));
        setInterim("");
      } else {
        setInterim(inter);
      }
    };

    sr.onend = () => {
      setListening(false);
      setInterim("");
    };

    sr.onerror = () => {
      setListening(false);
      setInterim("");
    };

    srRef.current = sr;
    sr.start();
    setListening(true);
  }, [step]);

  function toggleListen() {
    if (listening) stopListening();
    else startListening();
  }

  function handleChange(val: string) {
    setValues((v) => ({ ...v, [step.field]: val }));
  }

  function goNext() {
    stopListening();
    if (isLastStep) submitEnquiry();
    else setStepIdx((i) => i + 1);
  }

  function goPrev() {
    stopListening();
    setStepIdx((i) => i - 1);
  }

  async function submitEnquiry() {
    setSubmitStatus("sending");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          _source: "voice-enquiry",
        }),
      });
      if (!res.ok) throw new Error();
      setSubmitStatus("done");
    } catch {
      setSubmitStatus("error");
    }
  }

  function reset() {
    stopListening();
    setStepIdx(0);
    setValues({ name: "", organization: "", phone: "", message: "" });
    setSubmitStatus("idle");
    setOpen(false);
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="group inline-flex items-center gap-3 rounded-xl border-2 border-dashed border-channel bg-channel/5 px-5 py-4 text-left transition-colors hover:border-navy hover:bg-navy/5"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-channel/20 text-xl transition-colors group-hover:bg-navy/20">
          🎙️
        </span>
        <span>
          <span className="block text-sm font-semibold text-navy">Leave a voice enquiry</span>
          <span className="block text-xs text-ink/60">
            {speechSupported
              ? "Speak your details — we guide you step by step"
              : "Answer 4 quick questions, we'll call you back"}
          </span>
        </span>
      </button>
    );
  }

  if (submitStatus === "done") {
    return (
      <div className="rounded-xl border border-channel bg-channel/5 p-6">
        <div className="text-2xl">✅</div>
        <h3 className="mt-2 font-display text-lg font-bold text-navy">Got it, {values.name.split(" ")[0]}!</h3>
        <p className="mt-1 text-sm text-ink/75">
          We&apos;ll call you back on <strong>{values.phone || "the number you provided"}</strong> within one business day.
        </p>
        <button onClick={reset} className="mt-4 text-sm text-channel underline">
          Start over
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-channel bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <span className="text-sm font-semibold text-navy">🎙️ Voice enquiry</span>
        <button onClick={reset} className="text-xs text-ink/50 hover:text-ink" aria-label="Close">✕</button>
      </div>

      {/* Step progress */}
      <div className="flex gap-1 px-5 pt-4">
        {STEPS.map((s, i) => (
          <div
            key={s.field}
            className={`h-1 flex-1 rounded-full transition-colors ${
              i < stepIdx ? "bg-channel" : i === stepIdx ? "bg-navy" : "bg-line"
            }`}
          />
        ))}
      </div>

      <div className="px-5 pb-5 pt-4 space-y-4">
        {/* Prompt */}
        <div>
          <p className="eyebrow">Step {stepIdx + 1} of {STEPS.length}</p>
          <p className="mt-1 text-base font-medium text-navy">{step.prompt}</p>
        </div>

        {/* Mic button */}
        {speechSupported && (
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleListen}
              className={`flex h-12 w-12 items-center justify-center rounded-full text-xl shadow transition-transform active:scale-95 ${
                listening
                  ? "animate-pulse bg-red-500 text-white"
                  : "bg-navy text-white hover:bg-navy/90"
              }`}
              aria-label={listening ? "Stop recording" : "Start recording"}
            >
              {listening ? "⏹" : "🎤"}
            </button>
            <span className="text-xs text-ink/60">
              {listening ? (
                <span className="text-red-500 font-medium">Listening… speak now</span>
              ) : (
                "Tap mic to speak, or type below"
              )}
            </span>
          </div>
        )}

        {/* Interim transcript */}
        {interim && (
          <p className="rounded bg-channel/10 px-3 py-1 text-xs italic text-ink/60">{interim}</p>
        )}

        {/* Editable field */}
        <div>
          <label className="block text-sm font-medium text-ink">
            {step.label}
            {step.field === "message" ? (
              <textarea
                rows={3}
                value={values[step.field]}
                onChange={(e) => handleChange(e.target.value)}
                placeholder={step.placeholder}
                className="mt-1 w-full rounded-md border border-line bg-white px-3 py-2 text-sm focus:border-channel"
              />
            ) : (
              <input
                type={step.inputType ?? "text"}
                value={values[step.field]}
                onChange={(e) => handleChange(e.target.value)}
                placeholder={step.placeholder}
                className="mt-1 w-full rounded-md border border-line bg-white px-3 py-2 text-sm focus:border-channel"
              />
            )}
          </label>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-1">
          <button
            type="button"
            onClick={goPrev}
            disabled={stepIdx === 0}
            className="text-sm text-ink/50 hover:text-ink disabled:opacity-30"
          >
            ← Back
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={submitStatus === "sending"}
            className="rounded-md bg-navy px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-navy/90 disabled:opacity-60"
          >
            {submitStatus === "sending"
              ? "Sending…"
              : isLastStep
              ? "Submit"
              : "Next →"}
          </button>
        </div>

        {submitStatus === "error" && (
          <p className="text-xs text-red-500">
            Something went wrong. Please use the form above or WhatsApp us.
          </p>
        )}
      </div>
    </div>
  );
}
