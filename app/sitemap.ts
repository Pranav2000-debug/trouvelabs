import type { MetadataRoute } from "next";
import { PROJECTS } from "@/lib/constants/projects";
import { SANDBOXES } from "@/lib/constants/sandboxes";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://trouvelabs.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/projects`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
  ];

  const sdkRoutes: MetadataRoute.Sitemap = PROJECTS.flatMap((project) => {
    const base = `${SITE_URL}/projects/${project.slug}`;
    const overview = {
      url: base,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: project.comingSoon ? 0.4 : 0.8,
    };
    if (project.comingSoon) return [overview];
    return [
      overview,
      { url: `${base}/quickstart`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
      { url: `${base}/api-reference`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    ];
  });

  const sandboxRoutes: MetadataRoute.Sitemap = SANDBOXES.map((s) => ({
    url: `${SITE_URL}/sandboxes/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...sdkRoutes, ...sandboxRoutes];
}
