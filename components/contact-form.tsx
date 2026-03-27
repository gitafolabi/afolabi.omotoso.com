"use client";

import { FormEvent, useState } from "react";

type SubmissionState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<SubmissionState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setState("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          company: formData.get("company")
        })
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message.");
      }

      form.reset();
      setState("success");
    } catch (error) {
      setState("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your message."
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-panel rounded-[1.75rem] px-6 py-8"
    >
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm font-medium">
          Name
          <input
            type="text"
            name="name"
            required
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-ember dark:border-slate-700 dark:bg-slate-950"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Email
          <input
            type="email"
            name="email"
            required
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-ember dark:border-slate-700 dark:bg-slate-950"
            placeholder="you@example.com"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Message
          <textarea
            name="message"
            rows={6}
            required
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-ember dark:border-slate-700 dark:bg-slate-950"
            placeholder="Tell me a little about the project or conversation you want to have."
          />
        </label>
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
        />
        <button
          type="submit"
          disabled={state === "submitting"}
          className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
        >
          {state === "submitting" ? "Sending..." : "Send message"}
        </button>
        {state === "success" ? (
          <p className="text-sm leading-7 text-emerald-700 dark:text-emerald-300">
            Thanks. Your message has been sent successfully.
          </p>
        ) : null}
        {state === "error" ? (
          <p className="text-sm leading-7 text-rose-700 dark:text-rose-300">
            {errorMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}
