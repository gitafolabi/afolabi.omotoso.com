import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/profile";
import { projectCategories, projects } from "@/data/projects";

export const metadata = {
  title: "Portfolio",
  description: "Selected projects by Afolabi Omotoso."
};

export default function PortfolioPage() {
  return (
    <section className="section-shell pb-24 pt-12">
      <SectionHeading
        eyebrow="Portfolio"
        title="Case studies in platform engineering, reliability, and cloud automation."
        description="A closer look at selected work across platform engineering, observability, GitOps, and cloud compliance automation."
      />
      <div className="mb-8 grid gap-4 rounded-[1.75rem] border border-slate-200/70 bg-slate-950 px-6 py-6 text-slate-100 shadow-card md:grid-cols-3 dark:border-slate-800">
        {profile.impactMetrics.slice(0, 3).map((metric) => (
          <div key={metric.label}>
            <p className="text-3xl font-bold text-cyan-300">{metric.value}</p>
            <p className="mt-2 text-sm leading-7 text-slate-300">{metric.label}</p>
          </div>
        ))}
      </div>
      <div className="mb-12">
        <SectionHeading
          eyebrow="Project categories"
          title="The kinds of problems I have worked on across my career."
          description="These categories capture the areas where I have delivered infrastructure, reliability, automation, and cloud platform work."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {projectCategories.map((category) => (
            <div
              key={category.title}
              className="glass-panel rounded-[1.5rem] border border-slate-200/70 px-6 py-6 dark:border-slate-800"
            >
              <p className="text-2xl">{category.icon}</p>
              <h3 className="mt-4 text-xl font-semibold">{category.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <SectionHeading
        eyebrow="Featured projects"
        title="Detailed case studies with technical context and measurable outcomes."
        description="Browse the projects below for examples of platform engineering, CI/CD automation, observability, Kubernetes, cloud architecture, and modernization work."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
