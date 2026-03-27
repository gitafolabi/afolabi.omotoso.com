import { describe, expect, it } from "vitest";
import { profile } from "../data/profile";

describe("profile data", () => {
  it("contains the core public links", () => {
    expect(profile.email).toMatch(/@/);
    expect(profile.linkedin).toMatch(/^https:\/\/www\.linkedin\.com\//);
    expect(profile.gitlab).toMatch(/^https:\/\/gitlab\.com\//);
    expect(profile.githubProfiles).toHaveLength(1);
    expect(profile.githubProfiles[0]).toMatch(/^https:\/\/github\.com\//);
  });

  it("has certifications and impact metrics", () => {
    expect(profile.certifications.length).toBeGreaterThanOrEqual(3);
    expect(profile.impactMetrics.length).toBe(4);
  });
});
