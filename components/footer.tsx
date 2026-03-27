import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="section-shell pb-10 pt-16">
      <div className="glass-panel flex flex-col gap-4 rounded-[1.75rem] px-6 py-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            {profile.shortRole} focused on cloud platforms, automation, and reliability.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">
          <Link href="/portfolio" className="hover:text-ember dark:hover:text-amber-300">
            Portfolio
          </Link>
          <Link href="/blog" className="hover:text-ember dark:hover:text-amber-300">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-ember dark:hover:text-amber-300">
            Contact
          </Link>
          <Link
            href={profile.linkedin}
            className="hover:text-ember dark:hover:text-amber-300"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
