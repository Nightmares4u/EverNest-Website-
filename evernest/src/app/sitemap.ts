import type { MetadataRoute } from "next"

import { immigrationData } from "@/data/immigration-countries"
import { studyVisasData } from "@/data/study-visas"

const baseUrl = "https://evernestconsultants.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes = [
    "/",
    "/about",
    "/contact",
    "/study-visas",
    "/immigration",
    "/b2b-partnerships",
    "/success-stories",
    "/resources",
    "/resources/study-abroad-guide",
    "/resources/visa-interview-guide",
    "/resources/country-comparison",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.7,
  }))

  const studyRoutes = Object.keys(studyVisasData).map((slug) => ({
    url: `${baseUrl}/study-visas/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  const immigrationRoutes = Object.keys(immigrationData).map((slug) => ({
    url: `${baseUrl}/immigration/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...studyRoutes, ...immigrationRoutes]
}

