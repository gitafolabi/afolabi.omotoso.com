const formEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

export function ContactForm() {
  return (
    <form
      action={formEndpoint || undefined}
      method="POST"
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
        <input type="hidden" name="_subject" value="Portfolio website inquiry" />
        <button
          type="submit"
          disabled={!formEndpoint}
          className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
        >
          Send message
        </button>
      </div>
    </form>
  );
}
