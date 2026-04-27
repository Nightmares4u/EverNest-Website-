import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    host: "https://evernestconsultants.com",
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://evernestconsultants.com/sitemap.xml",
  }
}
