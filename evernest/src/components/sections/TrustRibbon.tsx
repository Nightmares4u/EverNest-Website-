"use client"

import { siteConfig } from "@/data/site"
import { ShieldCheck, Users, Globe2, Briefcase, Building2 } from "lucide-react"
import { motion } from "framer-motion"

const icons = {
  "Experience": Briefcase,
  "Countries Served": Globe2,
  "Branches": Building2,
  "Cases Processed": Users,
  "Registered Since": ShieldCheck,
}

export function TrustRibbon() {
  return (
    <section className="relative z-20 -mt-12 mx-4 md:mx-auto container max-w-6xl">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-brand-blue py-10 rounded-3xl shadow-[0_20px_60px_-15px_rgba(11,27,58,0.4)] border border-brand-blue/20 overflow-hidden relative"
      >
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-50"></div>
        
        <div className="px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 divide-x divide-white/10">
            {siteConfig.stats.map((stat, i) => {
              const Icon = icons[stat.label as keyof typeof icons] || ShieldCheck;
              return (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  key={stat.label} 
                  className={`group flex flex-col items-center text-center ${i % 2 !== 0 ? 'pl-4 md:pl-8' : i !== 0 ? 'pl-4 md:pl-8 lg:pl-8' : ''}`}
                >
                  <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-brand-red/20 transition-colors border border-white/5 group-hover:border-brand-red/30">
                    <Icon className="h-6 w-6 text-brand-red group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-3xl font-display font-bold text-white mb-2">
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold text-brand-ice/60 uppercase tracking-widest">
                    {stat.label}
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
