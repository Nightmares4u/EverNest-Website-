import { Metadata } from "next"
import { LeadershipProfile } from "@/components/sections/LeadershipProfile"
import { PartnerGallery } from "@/components/sections/PartnerGallery"
import { buildMetadata } from "@/lib/metadata"

export const metadata: Metadata = buildMetadata({
  title: "Sir Raza - CEO & Senior Consultant | EverNest Consultants",
  description: "Learn about Sir Raza's decade of experience in global education consulting, immigration advisory, and institutional partnerships.",
  path: "/about/sir-raza",
})

export default function SirRazaPage() {
  return (
    <>
      <LeadershipProfile />
      <PartnerGallery />
    </>
  )
}
