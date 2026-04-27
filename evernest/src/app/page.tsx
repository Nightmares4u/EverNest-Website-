import { Hero } from "@/components/sections/Hero"
import { TrustRibbon } from "@/components/sections/TrustRibbon"
import { SplitSection } from "@/components/sections/SplitSection"
import { FeaturedDestinations } from "@/components/sections/FeaturedDestinations"
import { FeaturedImmigration } from "@/components/sections/FeaturedImmigration"
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
      <SplitSection />
      <FeaturedDestinations />
      <FeaturedImmigration />
      <WhyEvernest />
      <B2BHighlight />
      <Testimonials />
      <PartnerStrip />
      <FinalCTA />
    </>
  );
}