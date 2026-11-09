
import type { MetadataRoute } from "next";
import { projectCategories } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://your-domain.vercel.app";

  const staticPages = [
    "",
    "/about",
    "/projects",
    "/achievements",
    "/beyond-code",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map(
    (page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: page === "" ? 1 : 0.8,
    })
  );

  const allProjects = projectCategories.flatMap(
    (category) => category.projects
  );

  const projectEntries: MetadataRoute.Sitemap = allProjects
    .filter((project) => project.slug)
    .map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return [...staticEntries, ...projectEntries];
}
