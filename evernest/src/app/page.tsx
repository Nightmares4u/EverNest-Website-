import { Hero } from "@/components/sections/Hero"
import { TrustRibbon } from "@/components/sections/TrustRibbon"
import { CoreServices } from "@/components/sections/CoreServices"
import { SplitSection } from "@/components/sections/SplitSection"
import { FeaturedDestinations } from "@/components/sections/FeaturedDestinations"
import { FeaturedImmigration } from "@/components/sections/FeaturedImmigration"
import { ProcessSteps } from "@/components/sections/ProcessSteps"
import { WhyEvernest } from "@/components/sections/WhyEvernest"
import { B2BHighlight } from "@/components/sections/B2BHighlight"
import { Testimonials } from "@/components/sections/Testimonials"
import { PartnerStrip } from "@/components/sections/PartnerStrip"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { GalleryStrip } from "@/components/sections/GalleryStrip"

export default function Home() {
  return (
    <>
      <Hero />
      <TrustRibbon />
      <GalleryStrip />
      <CoreServices />
      <SplitSection />
      <FeaturedDestinations />
      <FeaturedImmigration />
      <ProcessSteps />
      <WhyEvernest />
      <B2BHighlight />
      <Testimonials />
      <PartnerStrip />
      <FinalCTA />
    </>
  );
}