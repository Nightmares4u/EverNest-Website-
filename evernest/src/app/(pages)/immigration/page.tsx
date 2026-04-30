import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { CinematicPageHero } from "@/components/shared/CinematicPageHero"

import Image from "next/image"
import { immigrationData } from "@/data/immigration-countries"
import { studyVisasData } from "@/data/study-visas"
import type { ImmigrationProgramData } from "@/data/types"
import { buildMetadata, getFirstSentence } from "@/lib/metadata"

export const metadata: Metadata = buildMetadata({
  title: "Immigration Pathways",
  description:
    "Explore immigration pathways, country-specific guidance, and work permit options with EverNest Consultants.",
  path: "/immigration",
  keywords: ["Immigration pathways", "work permits", "immigration consultants in Pakistan", "EverNest Consultants"],
})

const studyImageMap: Record<string, keyof typeof studyVisasData> = {
  australia: "australia",
  "united-kingdom": "united-kingdom",
  "united-states": "usa",
}

const fallbackCountryImages: Record<string, string> = {
  "european-union": "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=600&auto=format&fit=crop",
  "new-zealand": "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=600&auto=format&fit=crop",
}

// Convert object to array for mapping
const pathways = Object.entries(immigrationData).map(([slug, data]) => ({
  slug,
  country: data.name,
  image:
    studyVisasData[studyImageMap[slug]]?.homepageImage ||
    fallbackCountryImages[slug] ||
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop",
  code: data.name.substring(0, 2).toUpperCase(),
  desc: getFirstSentence(data.heroDesc),
  programs: data.programs ? data.programs.slice(0, 4) : [] // Limit to 4 programs
}))

const immigrationHeroImages = [
  studyVisasData.canada?.homepageImage,
  studyVisasData.australia?.homepageImage,
  fallbackCountryImages["european-union"],
].filter(Boolean).map((src, index) => ({
  src: src as string,
  alt: ["Canada immigration pathway", "Australia immigration pathway", "European immigration pathway"][index],
}))

export default function ImmigrationIndexPage() {
  return (
    <>
      <CinematicPageHero
        variant="immigration"
        eyebrow="Global mobility strategy"
        icon={<Plane className="h-7 w-7" />}
        title={<>Global Immigration <span className="text-brand-red">Pathways</span></>}
        subtitle="Navigate complex immigration laws with confidence. We specialize in skilled, business, and investment immigration to top-tier countries."
        chips={["Skilled migration", "Business visas", "Investment routes", "PR planning"]}
        galleryImages={immigrationHeroImages}
        visualLabel="Immigration pathways"
        center
      />

      <section className="py-20 bg-brand-ice/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pathways.map((pathway) => (
              <div key={pathway.country} className="flex flex-col bg-white rounded-3xl border border-border-subtle shadow-sm hover:shadow-card transition-all hover:-translate-y-2 group overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={pathway.image}
                    alt={pathway.country}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h2 className="absolute bottom-4 left-6 text-3xl font-display font-bold text-white mb-0">{pathway.country}</h2>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-foreground/70 mb-8 flex-grow">{pathway.desc}</p>
                  
                  <div className="space-y-3 mb-8">
                    {pathway.programs.map((program: ImmigrationProgramData, i: number) => (
                      <div 
                        key={i}
                        className="flex items-center justify-between p-3 rounded-xl bg-brand-neutral border border-transparent"
                      >
                        <span className="font-medium text-foreground/80 text-sm line-clamp-1">{program.title}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild variant="outline" className="w-full mt-auto group/btn hover:bg-brand-red hover:text-white hover:border-transparent transition-all">
                    <Link href={`/immigration/${pathway.slug}`}>
                      Explore {pathway.country} Pathways
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
