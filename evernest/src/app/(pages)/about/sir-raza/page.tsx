import { Metadata } from "next"
import { LeadershipProfile } from "@/components/sections/LeadershipProfile"
import { PartnerGallery } from "@/components/sections/PartnerGallery"
import { buildMetadata } from "@/lib/metadata"

export const metadata: Metadata = buildMetadata({
  title: "Sir Raza - CEO & Senior Consultant | EverNest Consultants",
  description: "Learn about Sir Raza's 25+ years of experience in immigration consulting, international education guidance, and global mobility strategy.",
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
