import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/profile";

const workingStyle = [
  "I focus on making infrastructure easier to operate, not just easier to provision.",
  "I care about delivery systems that reduce operational risk while still moving teams faster.",
  "I prefer practical platform engineering: self-service where it helps, guardrails where it matters, and clear operational visibility throughout."
];

const highlights = [
  "8+ years across cloud infrastructure, DevOps, and site reliability engineering",
  "Hands-on work across AWS, Azure, Kubernetes, OpenShift, Terraform, GitOps, and observability stacks",
  "Experience spanning gaming, compliance, payments, analytics, enterprise support, and regulated environments",
  "Based in Spain and open to senior roles, consulting, and freelance work across Spain and the EU"
];

export const metadata = {
  title: "About",
  description: "Background, experience, and working style for Afolabi Omotoso."
};

export default function AboutPage() {
  return (
    <section className="section-shell pb-24 pt-12">
      <SectionHeading
        eyebrow="About"
        title="A platform engineer focused on reliable systems, strong delivery foundations, and operational clarity."
        description={profile.summary}
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <div className="grid gap-6">
          <article className="glass-panel rounded-[1.75rem] px-6 py-8 md:px-8">
            <h2 className="font-[family-name:var(--font-serif)] text-3xl leading-tight">
              Background
            </h2>
            <div className="mt-5 grid gap-5 text-base leading-8 text-slate-600 dark:text-slate-300">
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <article className="glass-panel rounded-[1.75rem] px-6 py-8 md:px-8">
            <h2 className="font-[family-name:var(--font-serif)] text-3xl leading-tight">
              How I work
            </h2>
            <div className="mt-5 grid gap-4">
              {workingStyle.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 dark:border-slate-800 dark:bg-slate-900"
                >
                  <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="glass-panel rounded-[1.75rem] px-6 py-8 md:px-8">
            <h2 className="font-[family-name:var(--font-serif)] text-3xl leading-tight">
              Recent experience
            </h2>
            <div className="mt-6 grid gap-5">
              {profile.experienceHighlights.map((item) => (
                <div
                  key={`${item.company}-${item.period}`}
                  className="border-b border-slate-200 pb-5 last:border-b-0 last:pb-0 dark:border-slate-800"
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
                    {item.period}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">
                    {item.role} · {item.company}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {item.summary}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>

        <aside className="grid gap-6 self-start lg:sticky lg:top-28">
          <div className="glass-panel rounded-[1.75rem] px-6 py-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
              Snapshot
            </p>
            <div className="mt-4 grid gap-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 dark:border-slate-800 dark:bg-slate-900"
                >
                  <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-[1.75rem] px-6 py-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
              Core areas
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.focusAreas.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-[1.75rem] px-6 py-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
              Next steps
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/services"
                className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-slate-950"
              >
                View services
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:text-slate-200"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
