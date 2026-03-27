import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="section-shell pb-10 pt-16">
      <div className="glass-panel rounded-[1.75rem] px-6 py-6 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
              {profile.name}
            </p>
            <p className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-300">
              DevOps, SRE, and platform engineering across cloud infrastructure,
              automation, observability, and reliable delivery.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link
              href="/portfolio"
              className="rounded-full border border-slate-200 px-4 py-2 text-slate-600 hover:border-ember hover:text-ember dark:border-slate-700 dark:text-slate-300 dark:hover:border-amber-300 dark:hover:text-amber-300"
            >
              Portfolio
            </Link>
            <Link
              href="/resume"
              className="rounded-full border border-slate-200 px-4 py-2 text-slate-600 hover:border-ember hover:text-ember dark:border-slate-700 dark:text-slate-300 dark:hover:border-amber-300 dark:hover:text-amber-300"
            >
              Resume
            </Link>
            <Link
              href="/blog"
              className="rounded-full border border-slate-200 px-4 py-2 text-slate-600 hover:border-ember hover:text-ember dark:border-slate-700 dark:text-slate-300 dark:hover:border-amber-300 dark:hover:text-amber-300"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-slate-200 px-4 py-2 text-slate-600 hover:border-ember hover:text-ember dark:border-slate-700 dark:text-slate-300 dark:hover:border-amber-300 dark:hover:text-amber-300"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-5 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date("2026-01-01").getFullYear()} {profile.name}</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-ember dark:hover:text-amber-300"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/gitafolabi/afolabi.omotoso.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-ember dark:hover:text-amber-300"
            >
              Source code
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
