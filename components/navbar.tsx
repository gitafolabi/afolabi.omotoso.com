"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="section-shell sticky top-0 z-50 pt-6">
      <div className="glass-panel flex items-center justify-between rounded-full px-4 py-3 md:px-6">
        <Link href="/" className="text-sm font-extrabold uppercase tracking-[0.24em]">
          Afolabi Omotoso
        </Link>
        <div className="flex items-center gap-2 md:gap-3">
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium ${
                    isActive
                      ? "bg-ink text-white dark:bg-white dark:text-slate-950"
                      : "text-slate-600 hover:text-ember dark:text-slate-300 dark:hover:text-amber-300"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <ThemeToggle />
        </div>
      </div>
      <nav className="mt-3 flex justify-center gap-2 md:hidden">
        {links.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href !== "/" && pathname.startsWith(link.href));

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-xs font-semibold ${
                isActive
                  ? "bg-ink text-white dark:bg-white dark:text-slate-950"
                  : "glass-panel text-slate-700 dark:text-slate-200"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
