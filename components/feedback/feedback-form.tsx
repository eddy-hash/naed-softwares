"use client";

import { useState, useRef } from "react";
import { CheckCircle2, AlertCircle, Loader2, Star } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

const projectOptions = [
  "General Portfolio",
  "POS Management System",
  "Inventory Management System",
  "Expense Tracker",
  "School Management System",
  "E-commerce Platform",
];

type Status = "idle" | "submitting" | "success" | "error";

export function FeedbackForm({ defaultProject }: { defaultProject?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [rating, setRating] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      setStatus("error");
      setErrorMessage("Please fill in your name, email and message.");
      return;
    }
    if (!emailPattern.test(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    formData.set("rating", String(rating || "Not rated"));

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(siteConfig.formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setRating(0);
      } else {
        setStatus("error");
        setErrorMessage("Something went wrong sending your feedback. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[var(--radius-lg)] border border-success/25 bg-success/5 p-8 text-center">
        <CheckCircle2 className="h-8 w-8 text-success mx-auto mb-3" />
        <h3 className="font-display text-lg font-semibold text-foreground mb-1">
          Feedback sent
        </h3>
        <p className="text-sm text-muted mb-5">
          Thank you — NAED SOFTWARES appreciates you taking the time.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm text-accent hover:text-accent-strong transition-colors"
        >
          Send another response
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={inputClass}
            placeholder="Your name"
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={inputClass}
            placeholder="you@example.com"
          />
        </Field>
      </div>

      <Field label="Project" htmlFor="project">
        <select
          id="project"
          name="project"
          defaultValue={defaultProject ?? "General Portfolio"}
          className={inputClass}
        >
          {projectOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Rating" htmlFor="rating-group">
        <div id="rating-group" role="radiogroup" aria-label="Rating" className="flex items-center gap-1.5">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              role="radio"
              aria-checked={rating === value}
              aria-label={`${value} star${value > 1 ? "s" : ""}`}
              onClick={() => setRating(value)}
              className="p-1"
            >
              <Star
                className={cn(
                  "h-5 w-5 transition-colors",
                  value <= rating ? "fill-accent text-accent" : "text-border-strong"
                )}
              />
            </button>
          ))}
        </div>
      </Field>

      <Field label="Message" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={cn(inputClass, "h-auto min-h-32 py-3 resize-none")}
          placeholder="Share your thoughts on this project or the portfolio..."
        />
      </Field>

      {status === "error" && (
        <div className="flex items-start gap-2 text-sm text-destructive">
          <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-[var(--radius-sm)] bg-accent text-[#14181d] text-sm font-medium hover:bg-accent-strong transition-colors disabled:opacity-60 disabled:pointer-events-none"
      >
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === "submitting" ? "Sending..." : "Send Feedback"}
      </button>
    </form>
  );
}

const inputClass =
  "w-full h-11 rounded-[var(--radius-sm)] border border-border bg-surface-2 px-3.5 text-sm text-foreground placeholder:text-muted-2 outline-none transition-colors focus:border-accent/60";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-xs text-muted mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}
