import Link from "next/link";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="section-shell pb-10 pt-12">
      <div className="glass-panel rounded-[1.75rem] px-5 py-4 md:px-6">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 text-sm">
          <p className="font-medium text-slate-700 dark:text-slate-300">
            &copy; {new Date("2026-01-01").getFullYear()} {profile.name}
          </p>
          <div className="flex flex-wrap items-center gap-3 text-slate-600 dark:text-slate-300">
            <Link href="/about" className="hover:text-ember dark:hover:text-amber-300">About</Link>
            <Link href="/services" className="hover:text-ember dark:hover:text-amber-300">Services</Link>
            <Link href="/portfolio" className="hover:text-ember dark:hover:text-amber-300">Portfolio</Link>
            <Link href="/blog" className="hover:text-ember dark:hover:text-amber-300">Blog</Link>
            <Link href="/contact" className="hover:text-ember dark:hover:text-amber-300">Contact</Link>
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
