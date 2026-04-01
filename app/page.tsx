import Link from "next/link";

export default function HomePage() {
  return (
    <section className="section-shell flex min-h-[calc(100vh-8rem)] items-center py-16">
      <div className="max-w-3xl">
        <h1 className="font-[family-name:var(--font-serif)] text-5xl leading-tight md:text-7xl">
          Hi, I&apos;m Afolabi Omotoso
        </h1>
        <p className="mt-6 text-lg text-slate-700 dark:text-slate-300 md:text-xl">
          DevOps Engineer • SRE Specialist • Platform Engineering
        </p>
        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
          Building reliable cloud infrastructure, improving delivery systems,
          and helping teams operate platforms with more confidence.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Link
            href="/about"
            className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
          >
            About me
          </Link>
        </div>
      </div>
    </section>
  );
}
