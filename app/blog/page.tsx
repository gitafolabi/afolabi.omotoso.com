import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog",
  description: "Markdown-powered writing by Afolabi Omotoso."
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <section className="section-shell pb-24 pt-12">
      <SectionHeading
        eyebrow="Blog"
        title="Writing on DevOps, cloud infrastructure, and reliability."
        description="Notes, articles, and external writing from my engineering work."
      />
      <div className="grid gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="glass-panel rounded-[1.75rem] px-6 py-8 hover:-translate-y-1"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.2em] text-moss dark:text-emerald-300">
                  {post.author ? `${post.author} · ` : ""}
                  {post.readTime ? `${post.readTime} · ` : ""}
                  {post.date}
                </p>
                <h2 className="mt-3 text-3xl font-semibold">{post.title}</h2>
                <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                  {post.excerpt}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 md:max-w-xs md:justify-end">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
