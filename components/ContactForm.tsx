"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError("Something went wrong. Please email hello@signalforge.co.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-forge bg-paper p-8">
        <p className="eyebrow">Message received</p>
        <h3 className="mt-3 text-2xl font-medium tracking-tightish">
          Thanks — I'll be in touch within one business day.
        </h3>
        <p className="mt-3 text-iron">
          If your timeline is tighter, email{" "}
          <a className="underline" href="mailto:hello@signalforge.co">
            hello@signalforge.co
          </a>{" "}
          directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="field-label">
            Name
          </label>
          <input id="name" name="name" required className="field" autoComplete="name" />
        </div>
        <div>
          <label htmlFor="company" className="field-label">
            Company
          </label>
          <input id="company" name="company" required className="field" autoComplete="organization" />
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="field-label">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="field"
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="role" className="field-label">
            Role
          </label>
          <input id="role" name="role" className="field" placeholder="e.g. Head of Sales" />
        </div>
      </div>
      <div>
        <label htmlFor="topic" className="field-label">
          What you're looking for
        </label>
        <select id="topic" name="topic" className="field" defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          <option>Market mapping sprint</option>
          <option>Lead qualification retainer</option>
          <option>Market entry / commercial intelligence</option>
          <option>Not sure yet — exploring</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="field-label">
          Context
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="field"
          placeholder="What are you trying to figure out, build, or unblock?"
        />
      </div>

      {error && (
        <p className="border border-ember bg-paper px-4 py-3 text-sm text-ember">
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          className="btn-primary"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending…" : "Send inquiry"}
        </button>
        <p className="text-xs text-iron">
          One reply within one business day. No drip sequences.
        </p>
      </div>
    </form>
  );
}
