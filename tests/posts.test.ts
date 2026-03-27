import { describe, expect, it } from "vitest";
import { getAllPosts, getPostBySlug } from "../lib/posts";

describe("blog content", () => {
  it("loads published posts with required metadata", () => {
    const posts = getAllPosts();

    expect(posts.length).toBeGreaterThanOrEqual(4);

    for (const post of posts) {
      expect(post.slug.length).toBeGreaterThan(0);
      expect(post.title.length).toBeGreaterThan(0);
      expect(post.excerpt.length).toBeGreaterThan(0);
      expect(post.tags.length).toBeGreaterThan(0);
      expect(new Date(post.date).toString()).not.toBe("Invalid Date");
    }
  });

  it("renders full post content for each slug", () => {
    const posts = getAllPosts();

    for (const summary of posts) {
      const post = getPostBySlug(summary.slug);
      expect(post).not.toBeNull();
      expect(post?.contentHtml.length).toBeGreaterThan(0);
    }
  });
});
