"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { LocationVisual } from "@/components/shared/LocationVisual"
import { studyVisasData } from "@/data/study-visas"

const destinations = [
  { name: "Italy", code: "IT", slug: "italy", desc: "Top-tier education with rich cultural heritage." },
  { name: "France", code: "FR", slug: "france", desc: "World-class universities and vibrant student life." },
  { name: "Germany", code: "DE", slug: "germany", desc: "Research-led universities with strong career pathways in Europe." },
  { name: "USA", code: "US", slug: "usa", desc: "Leading global universities and diverse opportunities." },
  { name: "Canada", code: "CA", slug: "canada", desc: "High quality of life and post-study work options." },
  { name: "UK", code: "GB", slug: "united-kingdom", desc: "Prestigious institutions with a global reputation." },
]

export function FeaturedDestinations() {
  return (
    <section className="relative overflow-hidden bg-brand-ice/50 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(11,27,58,0.05),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(225,29,46,0.07),transparent_32%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold uppercase tracking-[0.22em] text-brand-blue/45"
            >
              Study Destinations
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4 text-4xl md:text-5xl font-display font-bold text-brand-blue mb-6"
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
              className="inline-flex items-center justify-center rounded-full border-2 border-brand-blue px-8 py-4 font-bold text-brand-blue transition-colors whitespace-nowrap shadow-[0_0_0_0_rgba(11,27,58,0)] duration-300 hover:-translate-y-1 hover:bg-brand-blue hover:text-white hover:shadow-[0_10px_20px_-10px_rgba(11,27,58,0.5)]"
            >
              Explore Study Destinations
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, i) => {
            const pageData = studyVisasData[dest.slug]

            if (!pageData) {
              return null
            }

            return (
              <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              key={dest.slug}
            >
              <Link 
                href={`/study-visas/${dest.slug}`}
                className="group flex h-full flex-col rounded-[2rem] border border-border-subtle bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand-blue/20 hover:shadow-[0_24px_50px_-18px_rgba(11,27,58,0.18)]"
              >
                <LocationVisual
                  title={dest.name}
                  code={dest.code}
                  image={pageData.homepageImage}
                  imageAlt={pageData.imageAlt}
                  badge="Study Visa"
                  showCodeTag={false}
                  showIconBadge={false}
                  showFooterCode={false}
                />
                <div className="flex flex-grow flex-col px-2 pb-3 pt-6">
                  <h3 className="text-2xl font-bold text-brand-blue mb-3">{dest.name}</h3>
                  <p className="flex-grow text-base leading-relaxed text-foreground/70 transition-colors group-hover:text-foreground/90">
                    {dest.desc}
                  </p>
                  <div className="mt-6 inline-flex items-center text-sm font-bold text-brand-red transition-colors group-hover:text-brand-blue">
                    Explore Study Destinations
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
