import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass-panel rounded-[1.75rem] border border-slate-200/70 px-6 py-7 dark:border-slate-800">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
            {project.category}
          </p>
          <h3 className="mt-3 text-2xl font-semibold">{project.title}</h3>
        </div>
        <Link
          href={project.href}
          className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold hover:border-ember hover:text-ember dark:border-slate-700 dark:hover:border-amber-300 dark:hover:text-amber-300"
        >
          View details
        </Link>
      </div>
      <div className="mt-5 grid gap-3 text-sm text-slate-600 dark:text-slate-300 md:grid-cols-2">
        <div className="rounded-2xl bg-slate-100 px-4 py-3 dark:bg-slate-900">
          <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
            Client
          </p>
          <p className="mt-2 font-medium text-slate-800 dark:text-slate-100">
            {project.client}
          </p>
        </div>
        <div className="rounded-2xl bg-slate-100 px-4 py-3 dark:bg-slate-900">
          <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
            Role
          </p>
          <p className="mt-2 font-medium text-slate-800 dark:text-slate-100">
            {project.role}
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
        {project.description}
      </p>
      <div className="mt-5 grid gap-4 rounded-[1.25rem] border border-slate-200 bg-slate-50 px-5 py-5 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
        <div className="rounded-2xl bg-white px-4 py-4 shadow-sm dark:bg-slate-950/70">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-800 dark:text-cyan-300">
            Challenge
          </p>
          <p className="mt-2 leading-7 text-slate-700 dark:text-slate-300">
            {project.challenge}
          </p>
        </div>
        <div className="rounded-2xl bg-white px-4 py-4 shadow-sm dark:bg-slate-950/70">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800 dark:text-emerald-300">
            Impact
          </p>
          <p className="mt-2 leading-7 text-slate-700 dark:text-slate-300">
            {project.impact}
          </p>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
