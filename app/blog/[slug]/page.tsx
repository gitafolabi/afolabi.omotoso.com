import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({
  params
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article"
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="section-shell pb-24 pt-12">
      <div className="glass-panel mx-auto max-w-4xl rounded-[2rem] px-6 py-10 md:px-10">
        <p className="text-xs uppercase tracking-[0.25em] text-moss dark:text-emerald-300">
          {post.author ? `${post.author} · ` : ""}
          {post.readTime ? `${post.readTime} · ` : ""}
          {post.date}
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-serif)] text-4xl leading-tight md:text-6xl">
          {post.title}
        </h1>
        <div className="mt-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
        {post.originalUrl ? (
          <a
            href={post.originalUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-ember hover:text-ember dark:border-slate-700 dark:text-slate-200 dark:hover:border-amber-300 dark:hover:text-amber-300"
          >
            Read the original Medium article
          </a>
        ) : null}
        <div
          className="prose-custom mt-10"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
        <div className="mt-10">
          <Link
            href="/blog"
            className="inline-flex text-sm font-semibold text-ember hover:text-moss dark:text-amber-300 dark:hover:text-emerald-300"
          >
            Back to blog
          </Link>
        </div>
      </div>
    </article>
  );
}
