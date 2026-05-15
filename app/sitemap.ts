import type { MetadataRoute } from "next";
import { getAllWork } from "@/lib/work";
import { site } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const work = await getAllWork();
  const staticRoutes = ["", "/work", "/playbook", "/about", "/stack", "/contact", "/built-with-claude"];
  return [
    ...staticRoutes.map((r) => ({
      url: `${site.url}${r}`,
      changeFrequency: "monthly" as const,
      priority: r === "" ? 1.0 : 0.7,
      lastModified: new Date(),
    })),
    ...work.map((w) => ({
      url: `${site.url}/work/${w.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      lastModified: new Date(),
    })),
  ];
}
