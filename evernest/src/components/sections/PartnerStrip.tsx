"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { partnersData } from "@/data/partners"

export function PartnerStrip() {
  // Triple the array to ensure smooth seamless loop
  const scrollingPartners = [...partnersData, ...partnersData, ...partnersData]

  return (
    <section className="py-20 border-y border-border-subtle bg-brand-ice/20 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-bold text-brand-blue/50 uppercase tracking-[0.2em] mb-12"
        >
          Official Affiliations & Global Partners
        </motion.p>
        
        <div className="flex">
          <motion.div 
            className="flex items-center space-x-12 md:space-x-20 min-w-max"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25, // Adjust speed
            }}
          >
            {scrollingPartners.map((partner, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center justify-center gap-4 flex-none group cursor-pointer"
              >
                <div className="relative w-40 md:w-48 h-20 md:h-24 bg-white rounded-xl shadow-sm border border-border-subtle overflow-hidden opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1">
                  <Image 
                    src={partner.logo} 
                    alt={partner.name}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 160px, 192px"
                  />
                </div>
                <span className="text-sm font-bold text-brand-blue/70 group-hover:text-brand-red transition-colors text-center w-full truncate">
                  {partner.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
