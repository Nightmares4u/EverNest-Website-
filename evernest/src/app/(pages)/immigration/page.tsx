import Link from "next/link"
import { ArrowRight, Plane, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FinalCTA } from "@/components/sections/FinalCTA"

import Image from "next/image"
import { immigrationData } from "@/data/immigration-countries"

const countryImages: Record<string, string> = {
  australia: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=600&auto=format&fit=crop",
  "european-union": "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=600&auto=format&fit=crop",
  "new-zealand": "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=600&auto=format&fit=crop",
  "united-kingdom": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=600&auto=format&fit=crop",
  "united-states": "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=600&auto=format&fit=crop"
}

// Convert object to array for mapping
const pathways = Object.entries(immigrationData).map(([slug, data]) => ({
  slug,
  country: data.name,
  image: countryImages[slug] || "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop",
  code: data.name.substring(0, 2).toUpperCase(),
  desc: data.heroDesc.split(".")[0] + ".", // Short description
  programs: data.programs ? data.programs.slice(0, 4) : [] // Limit to 4 programs
}))

export default function ImmigrationIndexPage() {
  return (
    <>
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-brand-blue text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/globe.svg')] bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-brand-red mb-6 backdrop-blur-sm border border-white/20">
              <Plane className="h-8 w-8" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6">
              Global Immigration <span className="text-brand-red">Pathways</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-ice/80 mb-10 leading-relaxed">
              Navigate complex immigration laws with confidence. We specialize in skilled, business, and investment immigration to top-tier countries.
            </p>
          </div>
        </div>
      </section>

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
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h2 className="absolute bottom-4 left-6 text-3xl font-display font-bold text-white mb-0">{pathway.country}</h2>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-foreground/70 mb-8 flex-grow">{pathway.desc}</p>
                  
                  <div className="space-y-3 mb-8">
                    {pathway.programs.map((program: any, i: number) => (
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