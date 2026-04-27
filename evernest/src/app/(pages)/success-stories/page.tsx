import type { Metadata } from "next"
import { SuccessStoriesGrid } from "@/components/sections/SuccessStoriesGrid"
import { GoogleReviewsCTA } from "@/components/sections/GoogleReviewsCTA"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { buildMetadata } from "@/lib/metadata"

export const metadata: Metadata = buildMetadata({
  title: "Success Stories",
  description:
    "Read success stories and client outcomes across study visa and immigration pathways supported by EverNest Consultants.",
  path: "/success-stories",
  keywords: ["Success stories", "study visa outcomes", "immigration outcomes", "EverNest Consultants"],
})

export default function SuccessStoriesPage() {
  return (
    <div className="pt-20">
      <SuccessStoriesGrid />
      <GoogleReviewsCTA />
      <FinalCTA />
    </div>
  )
}

