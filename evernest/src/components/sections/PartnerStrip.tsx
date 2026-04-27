"use client"

import { motion } from "framer-motion"
import { partnersData } from "@/data/partners"

export function PartnerStrip() {
  const getCategory = (partnerName: string) => {
    if (partnerName === "British Council" || partnerName === "Cambridge") {
      return "Academic & Assessment"
    }

    if (partnerName === "IELTS" || partnerName === "PTE Academic" || partnerName === "TOEFL") {
      return "Testing Support"
    }

    return "Institutional Network"
  }

  const getMonogram = (partnerName: string) =>
    partnerName
      .split(" ")
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase()

  return (
    <section className="relative overflow-hidden border-y border-border-subtle bg-brand-ice/20 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(11,27,58,0.05),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(225,29,46,0.06),transparent_30%)]" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-blue/50">
            Recognized Testing & Education Support
          </p>
          <h2 className="mt-4 text-3xl font-display font-bold text-brand-blue md:text-4xl">
            A network built around credible testing, admissions, and institutional support.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/70 md:text-lg">
            We present these organizations as part of the testing and education ecosystem we work with, not as uploaded logo placements or unsupported affiliation claims.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
        >
          {partnersData.map((partner, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              key={partner.name}
              className="group rounded-[1.75rem] border border-brand-blue/10 bg-white/90 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-brand-blue/10 bg-brand-blue text-lg font-bold tracking-[0.18em] text-white">
                  {getMonogram(partner.name)}
                </div>
                <div className="min-w-0">
                  <div className="inline-flex rounded-full border border-brand-red/15 bg-brand-red/8 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-red">
                    {getCategory(partner.name)}
                  </div>
                  <h3 className="mt-3 text-xl font-display font-bold text-brand-blue">
                    {partner.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                    Referenced as part of the broader testing, admissions, and education support ecosystem connected to student mobility planning.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
