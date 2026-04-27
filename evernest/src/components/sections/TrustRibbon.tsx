"use client"

import { siteConfig } from "@/data/site"
import { ShieldCheck, Users, Globe2, Briefcase, Building2, Waypoints } from "lucide-react"
import { motion } from "framer-motion"

const icons = {
  "Experience": Briefcase,
  "Countries Served": Globe2,
  "Offices": Building2,
  "Regional Desks": Waypoints,
  "Cases Processed": Users,
  "Registered Since": ShieldCheck,
}

const statDisplay: Record<string, { value: string; title: string; detail: string }> = {
  Experience: {
    value: "13+",
    title: "Years",
    detail: "of guidance",
  },
  "Countries Served": {
    value: "18+",
    title: "Countries",
    detail: "study pathways",
  },
  Offices: {
    value: "2",
    title: "Offices",
    detail: "Pakistan",
  },
  "Regional Desks": {
    value: "2",
    title: "Regional Desks",
    detail: "North America & Europe",
  },
  "Cases Processed": {
    value: "Thousands",
    title: "Cases Processed",
    detail: "student and mobility profiles",
  },
  "Registered Since": {
    value: "2013",
    title: "Registered",
    detail: "EN Consultants (Pvt) Ltd.",
  },
}

export function TrustRibbon() {
  return (
    <section className="relative z-20 -mt-12 mx-4 md:mx-auto container max-w-6xl">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden rounded-[2rem] border border-brand-blue/10 bg-white shadow-[0_20px_70px_-24px_rgba(11,27,58,0.22)] relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(11,27,58,0.05),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(225,29,46,0.08),transparent_35%)]" />
        <div className="absolute top-0 left-1/2 h-1 w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-60"></div>
        
        <div className="relative z-10 px-5 py-6 md:px-8 md:py-8">
          <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-brand-blue/45">
                Trust Signals
              </div>
              <div className="mt-2 text-2xl font-display font-bold text-brand-blue">
                A clearer view of scale, continuity, and reach
              </div>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-foreground/60">
              Built to reassure first-time visitors with the numbers that matter
              most across study visas, immigration guidance, and B2B support.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.stats.map((stat, i) => {
              const Icon = icons[stat.label as keyof typeof icons] || ShieldCheck
              const display = statDisplay[stat.label] ?? {
                value: stat.value,
                title: stat.label,
                detail: "EverNest Consultants",
              }

              return (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  key={stat.label} 
                  className="group flex h-full min-h-[196px] flex-col rounded-[1.5rem] border border-brand-blue/8 bg-white/80 p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-brand-blue/8 bg-brand-ice group-hover:border-brand-red/20 group-hover:bg-brand-red/10 transition-colors">
                    <Icon className="h-6 w-6 text-brand-red group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-[clamp(1.9rem,4vw,2.75rem)] font-display font-bold leading-none text-brand-blue">
                    {display.value}
                  </span>
                  <span className="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-brand-blue">
                    {display.title}
                  </span>
                  <span className="mt-2 text-sm leading-relaxed text-foreground/60">
                    {display.detail}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
