import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://afolabiomotoso.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/services", "/portfolio", "/blog", "/contact", "/resume"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date()
  }));

  const blogRoutes = getAllPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.date
  }));

  return [...staticRoutes, ...blogRoutes];
}
