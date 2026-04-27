import type { Metadata } from "next"

import { Hero } from "@/components/sections/Hero"
import { TrustRibbon } from "@/components/sections/TrustRibbon"
import { CoreServices } from "@/components/sections/CoreServices"
import { SplitSection } from "@/components/sections/SplitSection"
import { FeaturedDestinations } from "@/components/sections/FeaturedDestinations"
import { FeaturedImmigration } from "@/components/sections/FeaturedImmigration"
import { ProcessSteps } from "@/components/sections/ProcessSteps"
import { WhyEvernest } from "@/components/sections/WhyEvernest"
import { B2BHighlight } from "@/components/sections/B2BHighlight"
import { SuccessStoriesGrid } from "@/components/sections/SuccessStoriesGrid"
import { GoogleReviewsCTA } from "@/components/sections/GoogleReviewsCTA"
import { PartnerStrip } from "@/components/sections/PartnerStrip"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { buildMetadata } from "@/lib/metadata"

export const metadata: Metadata = buildMetadata({
  title: "Study Visas, Immigration & Partnerships",
  description:
    "Explore study visa, immigration, work permit, and B2B partnership guidance from EverNest Consultants, the trading name of EN Consultants (Pvt) Ltd.",
  path: "/",
  keywords: [
    "EverNest Consultants",
    "study visas",
    "immigration consultants in Pakistan",
    "B2B partnerships",
  ],
})

export default function Home() {
  return (
    <>
      <Hero />
      <TrustRibbon />
      <CoreServices />
      <FeaturedDestinations />
      <SplitSection />
      <FeaturedImmigration />
      <WhyEvernest />
      <ProcessSteps />
      <B2BHighlight />
      <SuccessStoriesGrid />
      <GoogleReviewsCTA />
      <PartnerStrip />
      <FinalCTA />
    </>
  );
}
