"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

const destinations = [
  { name: "Italy", code: "IT", slug: "italy", desc: "Top-tier education with rich cultural heritage.", image: "/images/destinations/italy.svg" },
  { name: "France", code: "FR", slug: "france", desc: "World-class universities and vibrant student life.", image: "/images/destinations/france.svg" },
  { name: "UAE", code: "AE", slug: "uae", desc: "Modern campuses with strong regional opportunity.", image: "/images/destinations/uae.svg" },
  { name: "USA", code: "US", slug: "usa", desc: "Leading global universities and diverse opportunities.", image: "/images/destinations/usa.svg" },
  { name: "Canada", code: "CA", slug: "canada", desc: "High quality of life and post-study work options.", image: "/images/destinations/canada.svg" },
  { name: "UK", code: "GB", slug: "united-kingdom", desc: "Prestigious institutions with a global reputation.", image: "/images/destinations/united-kingdom.svg" },
]

export function FeaturedDestinations() {
  return (
    <section className="py-24 bg-brand-ice/50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[80%] bg-gradient-to-b from-transparent via-white to-transparent opacity-60"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-brand-blue mb-6"
            >
              Featured Study <span className="text-brand-red">Destinations</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-foreground/70 leading-relaxed"
            >
              We provide end-to-end admission and visa support for the world&rsquo;s most sought-after educational hubs.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              href="/study-visas" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-blue text-brand-blue font-bold rounded-full hover:bg-brand-blue hover:text-white transition-colors whitespace-nowrap shadow-[0_0_0_0_rgba(11,27,58,0)] hover:shadow-[0_10px_20px_-10px_rgba(11,27,58,0.5)] hover:-translate-y-1 duration-300"
            >
              View All Destinations
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              key={dest.name}
            >
              <Link 
                href={`/study-visas/${dest.slug}`}
                className="group flex flex-col bg-white rounded-3xl border border-border-subtle shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(11,27,58,0.1)] hover:border-brand-blue/20 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src={dest.image} 
                    alt={dest.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white text-xl font-bold font-display">
                    {dest.code}
                  </div>
                  <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white group-hover:bg-brand-red group-hover:border-transparent transition-all duration-300 group-hover:scale-110">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-brand-blue mb-3">{dest.name}</h3>
                  <p className="text-foreground/70 text-base leading-relaxed group-hover:text-foreground/90 transition-colors flex-grow">
                    {dest.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
