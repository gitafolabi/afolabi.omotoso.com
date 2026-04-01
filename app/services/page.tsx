import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";

const serviceAreas = [
  {
    title: "Platform Engineering",
    description:
      "Design and improvement of internal platforms, delivery workflows, and Kubernetes-based foundations that help teams ship with more consistency and less friction.",
    outcomes: [
      "Better developer self-service with sensible guardrails",
      "Cleaner deployment standards across teams and environments",
      "More reliable platform operations and ownership boundaries"
    ]
  },
  {
    title: "DevOps and CI/CD Automation",
    description:
      "Pipeline design, infrastructure automation, GitOps adoption, and deployment improvements that reduce manual work and release risk.",
    outcomes: [
      "Faster and safer releases",
      "Less environment drift and manual deployment effort",
      "Stronger repeatability across repositories and services"
    ]
  },
  {
    title: "SRE and Observability",
    description:
      "Monitoring, alerting, operational visibility, and reliability improvements for systems that need clearer telemetry and more dependable incident response.",
    outcomes: [
      "Better operational visibility across services and environments",
      "Improved alert quality and troubleshooting flow",
      "Stronger reliability habits and incident readiness"
    ]
  },
  {
    title: "Cloud Infrastructure and Modernization",
    description:
      "AWS and Azure infrastructure work covering architecture, IaC, modernization, migration support, and environment standardization.",
    outcomes: [
      "More maintainable cloud foundations",
      "Reduced operational complexity in growing environments",
      "Infrastructure patterns that scale more cleanly over time"
    ]
  }
];

const engagementOptions = [
  "Freelance implementation for a specific platform, cloud, or delivery problem",
  "Short consulting engagements to assess infrastructure, CI/CD, or reliability gaps",
  "Hands-on support for internal platform, Kubernetes, GitOps, or observability initiatives",
  "Advisory help for teams that need a senior engineering partner while hiring or restructuring"
];

export const metadata = {
  title: "Services",
  description: "Consulting and freelance platform engineering, DevOps, SRE, and cloud infrastructure services."
};

export default function ServicesPage() {
  return (
    <section className="section-shell pb-24 pt-12">
      <SectionHeading
        eyebrow="Services"
        title="Consulting and freelance support for platform engineering, DevOps, SRE, and cloud infrastructure."
        description="I work with teams that need hands-on help improving delivery systems, infrastructure reliability, cloud operations, and platform foundations."
      />

      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="grid gap-6 self-start lg:sticky lg:top-28">
          <div className="glass-panel rounded-[1.75rem] px-6 py-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
              Engagements
            </p>
            <div className="mt-4 grid gap-3">
              {engagementOptions.map((item) => (
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
              Best fit
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Teams building or improving internal platforms, cloud environments,
              CI/CD systems, Kubernetes operations, or observability foundations.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-slate-950"
              >
                Discuss a project
              </Link>
            </div>
          </div>
        </aside>

        <div className="grid gap-6">
          {serviceAreas.map((service) => (
            <article
              key={service.title}
              className="glass-panel rounded-[1.75rem] px-6 py-8 md:px-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
                Service area
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-serif)] text-3xl leading-tight">
                {service.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                {service.description}
              </p>
              <div className="mt-6 grid gap-3">
                {service.outcomes.map((item) => (
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
