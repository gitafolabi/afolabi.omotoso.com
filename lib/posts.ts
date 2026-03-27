import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/posts");

export type PostFrontmatter = {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  originalUrl?: string;
  author?: string;
  readTime?: string;
};

export type PostSummary = PostFrontmatter & {
  slug: string;
};

export type Post = PostSummary & {
  contentHtml: string;
  originalUrl?: string;
  author?: string;
  readTime?: string;
};

function sortPosts(posts: PostSummary[]) {
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getAllPosts(): PostSummary[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      tags: data.tags || [],
      originalUrl: data.originalUrl,
      author: data.author,
      readTime: data.readTime
    } as PostSummary;
  });

  return sortPosts(posts);
}

export function getLatestPosts(limit: number) {
  return getAllPosts().slice(0, limit);
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processedContent = remark().use(html).processSync(content);

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    tags: data.tags || [],
    contentHtml: processedContent.toString(),
    originalUrl: data.originalUrl,
    author: data.author,
    readTime: data.readTime
  };
}
