import Link from "next/link";
import { ContactLinks } from "@/components/contact-links";
import { ProjectCard } from "@/components/project-card";
import { profile } from "@/data/profile";
import { getLatestPosts } from "@/lib/posts";
import { projects } from "@/data/projects";

export default function HomePage() {
  const latestPosts = getLatestPosts(3);

  return (
    <div className="pb-24">
      <section className="section-shell pt-8 md:pt-12">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200/70 bg-[linear-gradient(145deg,rgba(7,14,28,0.98),rgba(10,32,50,0.94))] px-6 py-12 text-slate-100 shadow-card md:px-10 md:py-16 dark:border-slate-800">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                DevOps, SRE, and platform engineering
              </p>
              <h1 className="max-w-4xl font-[family-name:var(--font-serif)] text-5xl leading-tight text-white md:text-7xl">
                Building reliable cloud infrastructure, automation, and platform systems that help teams ship with confidence.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                I am {profile.name}, a {profile.role} with 8+
                years of experience across AWS and Azure. I work across DevOps,
                site reliability, cloud infrastructure, automation, and platform
                engineering to help teams improve delivery speed, reduce risk,
                and run systems more confidently at scale.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/portfolio"
                  className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
                >
                  Explore case studies
                </Link>
                <Link
                  href="/blog"
                  className="rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-200 hover:border-cyan-300 hover:text-cyan-300"
                >
                  Read engineering notes
                </Link>
              </div>
            </div>
            <div className="grid gap-4 rounded-[1.75rem] border border-slate-700 bg-slate-950/70 p-6 shadow-card">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">
                  Operator snapshot
                </p>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-emerald-300">
                  Available for platform work
                </span>
              </div>
              <div className="grid gap-3 text-sm text-slate-300">
                <p>{profile.location}</p>
                <p>{profile.shortRole}</p>
                <p>Focus: cloud infrastructure, automation, reliability, security</p>
              </div>
              <div className="mt-2 grid gap-3">
                {profile.focusAreas.slice(0, 4).map((area) => (
                  <div
                    key={area}
                    className="rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm text-slate-200"
                  >
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {profile.impactMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[1.5rem] border border-slate-800 bg-slate-950/60 px-5 py-5"
              >
                <p className="text-3xl font-bold text-white">{metric.value}</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-shell pt-16">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700 dark:text-cyan-300">
              Selected work
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-serif)] text-4xl leading-tight md:text-5xl">
              A few projects that show how I work.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
              Selected highlights from recent work.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="text-sm font-semibold text-ember hover:text-moss dark:text-amber-300 dark:hover:text-emerald-300"
          >
            Open full portfolio
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="section-shell pt-16">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700 dark:text-cyan-300">
            Experience
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-serif)] text-4xl leading-tight md:text-5xl">
            A quick view of the environments and roles I have worked in.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
            Experience across gaming, compliance, payments, cloud support, and modern infrastructure delivery.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-panel rounded-[1.75rem] px-6 py-8 md:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700 dark:text-cyan-300">
              Snapshot
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-serif)] text-4xl leading-tight">
              Experience across DevOps, SRE, cloud, and modernization work.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
              I have worked across gaming, compliance, payments, enterprise support,
              and cloud-native delivery, helping teams improve reliability,
              automation, and operational visibility.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {profile.certifications.slice(0, 3).map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-100 px-4 py-2 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/portfolio"
                className="text-sm font-semibold text-ember hover:text-moss dark:text-amber-300 dark:hover:text-emerald-300"
              >
                See experience and project details
              </Link>
            </div>
          </div>
          <div className="glass-panel rounded-[1.75rem] px-6 py-8 md:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700 dark:text-cyan-300">
              Recent roles
            </p>
            <div className="mt-5 grid gap-5">
              {profile.experienceHighlights.map((item) => (
                <div
                  key={`${item.company}-${item.period}`}
                  className="border-b border-slate-200 pb-5 last:border-b-0 last:pb-0 dark:border-slate-800"
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
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
          </div>
        </div>
      </section>

      <section className="section-shell pt-16">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700 dark:text-cyan-300">
              Engineering notes
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-serif)] text-4xl leading-tight md:text-5xl">
              Writing on reliability, delivery, and cloud systems.
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold text-ember hover:text-moss dark:text-amber-300 dark:hover:text-emerald-300"
          >
            Visit the blog
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="glass-panel rounded-[1.5rem] border border-slate-200/70 px-6 py-6 hover:-translate-y-1 dark:border-slate-800"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
                {post.author ? `${post.author} · ` : ""}
                {post.readTime ? `${post.readTime} · ` : ""}
                {post.date}
              </p>
              <h3 className="mt-4 text-2xl font-semibold">{post.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {post.excerpt}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell pt-16">
        <div className="glass-panel rounded-[1.75rem] px-6 py-8 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700 dark:text-cyan-300">
                Contact
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-serif)] text-4xl leading-tight md:text-5xl">
                Ready to discuss your next infrastructure or reliability challenge?
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                If you need help with automation, cloud migration, CI/CD,
                observability, or system reliability, let&apos;s talk.
              </p>
            </div>
            <Link
              href="/contact"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
            >
              Contact me
            </Link>
          </div>
          <ContactLinks className="mt-6 flex-wrap" />
        </div>
      </section>
    </div>
  );
}
