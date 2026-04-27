"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

import Image from "next/image"

const pathways = [
  {
    country: "United States",
    slug: "united-states",
    image: "/images/destinations/usa.svg",
    programs: ["H-1B Work Visa", "EB-3 Green Card", "B1/B2 Visitor Visa"],
    desc: "Investment and employment-based green card opportunities for professionals and investors."
  },
  {
    country: "United Kingdom",
    slug: "united-kingdom",
    image: "/images/destinations/united-kingdom.svg",
    programs: ["Skilled Worker", "Global Talent", "Graduate Route"],
    desc: "Points-based immigration and talent programs for skilled workers."
  },
  {
    country: "Australia",
    slug: "australia",
    image: "/images/destinations/australia.svg",
    programs: ["Subclass 189", "Subclass 190", "Subclass 491"],
    desc: "Pathways for highly skilled professionals and business investors seeking permanent residency."
  }
]

export function FeaturedImmigration() {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-neutral/30">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-blue/5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-brand-red/5 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-blue mb-6">
            Featured Immigration <span className="text-brand-red">Pathways</span>
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Navigate complex immigration laws with confidence. We specialize in skilled, business, and investment immigration to top-tier countries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pathways.map((pathway, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              key={pathway.country} 
              className="flex flex-col bg-white rounded-3xl border border-border-subtle shadow-sm hover:shadow-card hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src={pathway.image} 
                  alt={pathway.country} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 text-3xl font-display font-bold text-white mb-0">{pathway.country}</h3>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-foreground/70 mb-8 flex-grow text-base leading-relaxed">{pathway.desc}</p>
                
                <ul className="space-y-3 mb-8">
                  {pathway.programs.map((program) => (
                    <li key={program} className="flex items-center text-sm font-medium text-foreground/80">
                      <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0" />
                      {program}
                    </li>
                  ))}
                </ul>
                
                <Button asChild variant="outline" className="w-full group/btn hover:bg-brand-red hover:text-white hover:border-transparent transition-all">
                  <Link href={`/immigration/${pathway.slug}`}>
                    Explore {pathway.country}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
