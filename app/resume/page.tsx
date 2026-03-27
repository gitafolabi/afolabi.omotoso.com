import { profile } from "@/data/profile";

const resumeExperience = [
  {
    period: "August 2024 - Present",
    role: "DevOps Platform Engineer",
    company: "Gaming Innovation Group",
    highlights: [
      "Designed and operated scalable Kubernetes and OpenShift platforms on AWS for high-availability production services.",
      "Built infrastructure automation with Terraform and Ansible for secure multi-environment delivery.",
      "Implemented GitOps workflows with ArgoCD and Helm, standardizing 20+ repositories and reducing environment drift.",
      "Architected centralized observability across 15+ client environments using Fluent Bit, Elasticsearch, Prometheus, and Grafana.",
      "Led reliability improvements that reduced production incidents by approximately 30%."
    ]
  },
  {
    period: "August 2023 - July 2024",
    role: "Senior DevSecOps Engineer",
    company: "Andela / Wolters Kluwer",
    highlights: [
      "Developed compliance and security tooling across AWS and Azure in regulated environments.",
      "Automated deployment of compliance infrastructure across 1,000+ cloud accounts.",
      "Built CI/CD pipelines and infrastructure-as-code workflows with Terraform and Azure DevOps.",
      "Partnered with data teams on telemetry and compliance reporting dashboards."
    ]
  },
  {
    period: "July 2022 - August 2023",
    role: "Senior DevOps Engineer",
    company: "EPAM / Epic Games",
    highlights: [
      "Supported cloud infrastructure, ETL platforms, and analytics workloads across the stack.",
      "Designed secure AWS PrivateLink-based networking for external data exchange.",
      "Improved AWS MSK security using SASL/SCRAM and Secrets Manager.",
      "Modularized Terraform templates for reuse across product teams."
    ]
  },
  {
    period: "January 2021 - June 2022",
    role: "DevOps Engineer",
    company: "ARCA Payments",
    highlights: [
      "Built and operated highly available payment infrastructure for ACH and gateway platforms.",
      "Designed secure CI/CD pipelines with Jenkins, Groovy, and Git.",
      "Improved monitoring, alerting, and logging for performance, cost, and security visibility.",
      "Supported PCI DSS and ISO 27001-aligned environments."
    ]
  },
  {
    period: "November 2019 - December 2020",
    role: "Software Engineer",
    company: "Tavia Technologies",
    highlights: [
      "Improved system performance, scalability, and maintainability across existing technology stacks.",
      "Contributed to software security strategy and secure coding practices.",
      "Supported delivery of a loan management solution for a major bank."
    ]
  },
  {
    period: "April 2018 - October 2019",
    role: "Cloud Engineer",
    company: "Tek Experts",
    highlights: [
      "Delivered enterprise Azure Identity and PaaS support for EMEA customers.",
      "Supported AKS, Active Directory, authentication, DNS, and networking troubleshooting."
    ]
  },
  {
    period: "September 2014 - March 2018",
    role: "System Engineer",
    company: "Vixa Pharmaceutical",
    highlights: [
      "Designed and supported on-prem and cloud infrastructure, including servers, networking, firewalls, and virtualization.",
      "Administered Microsoft, Cisco, VMware, and Citrix platforms."
    ]
  },
  {
    period: "June 2013 - August 2014",
    role: "IT Support Engineer",
    company: "Wema Bank Plc",
    highlights: [
      "Provided second-level support for enterprise banking systems across branches and head office.",
      "Supported Windows environments, user administration, networking, and desktop services."
    ]
  }
];

const education = [
  "Master of Business Administration (MBA), Nexford University",
  "HND, Computer Engineering, Osun State Polytechnic, Nigeria"
];

export const metadata = {
  title: "Resume",
  description: "Resume and professional experience for Afolabi Omotoso."
};

export default function ResumePage() {
  return (
    <section className="section-shell pb-24 pt-12">
      <div className="mb-10 max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700 dark:text-cyan-300">
          Resume
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-serif)] text-5xl leading-tight md:text-6xl">
          Full experience across DevOps, SRE, cloud infrastructure, and platform engineering.
        </h1>
        <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
          {profile.summary}
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <aside className="grid gap-6 self-start lg:sticky lg:top-28">
          <div className="glass-panel rounded-[1.75rem] px-6 py-6">
            <h2 className="text-lg font-semibold">Core Skills</h2>
            <div className="mt-4 grid gap-4">
              {profile.skills.map((skill) => (
                <div key={skill.title}>
                  <p className="text-sm font-semibold">{skill.title}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {skill.items}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-[1.75rem] px-6 py-6">
            <h2 className="text-lg font-semibold">Certifications</h2>
            <div className="mt-4 grid gap-3">
              {profile.certifications.map((item) => (
                <p key={item} className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-[1.75rem] px-6 py-6">
            <h2 className="text-lg font-semibold">Education</h2>
            <div className="mt-4 grid gap-3">
              {education.map((item) => (
                <p key={item} className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </aside>

        <div className="glass-panel rounded-[1.75rem] px-6 py-8 md:px-8">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <div className="mt-6 grid gap-8">
            {resumeExperience.map((item) => (
              <div
                key={`${item.company}-${item.period}`}
                className="border-b border-slate-200 pb-8 last:border-b-0 last:pb-0 dark:border-slate-800"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
                  {item.period}
                </p>
                <h3 className="mt-2 text-xl font-semibold">
                  {item.role} · {item.company}
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
