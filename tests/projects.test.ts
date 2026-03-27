import { describe, expect, it } from "vitest";
import { projectCategories, projects } from "../data/projects";

describe("portfolio data", () => {
  it("keeps an even number of project categories and projects", () => {
    expect(projectCategories.length % 2).toBe(0);
    expect(projects.length % 2).toBe(0);
  });

  it("ensures every project has the required portfolio fields", () => {
    for (const project of projects) {
      expect(project.title.length).toBeGreaterThan(0);
      expect(project.category.length).toBeGreaterThan(0);
      expect(project.client.length).toBeGreaterThan(0);
      expect(project.role.length).toBeGreaterThan(0);
      expect(project.challenge.length).toBeGreaterThan(0);
      expect(project.impact.length).toBeGreaterThan(0);
      expect(project.stack.length).toBeGreaterThan(0);
      expect(project.href).toMatch(/^https:\/\//);
    }
  });
});
