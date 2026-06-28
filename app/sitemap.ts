import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-06-28"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
