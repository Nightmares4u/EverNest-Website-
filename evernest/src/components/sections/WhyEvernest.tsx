"use client"

import { CheckCircle2, Landmark, ShieldCheck, Waypoints } from "lucide-react"
import { motion } from "framer-motion"
import { siteConfig } from "@/data/site"
import { Counter } from "@/components/ui/Counter"

const reasons = [
  {
    icon: ShieldCheck,
    title: "Profile-based planning",
    desc: "Guidance starts with your academic, financial, and long-term objectives rather than a one-size-fits-all country pitch.",
  },
  {
    icon: CheckCircle2,
    title: "Structured documentation",
    desc: "Each case is organized around document readiness, consistency, and clear next steps to reduce avoidable confusion.",
  },
  {
    icon: Landmark,
    title: "Pakistan-rooted support",
    desc: "Karachi and Lahore serve as the core public offices for counseling, follow-up, and client-facing coordination.",
  },
  {
    icon: Waypoints,
    title: "Regional desk access",
    desc: `North America support through ${siteConfig.satelliteContacts[0].manager} and Europe support through ${siteConfig.satelliteContacts[1].manager}.`,
  },
] as const

const stats = [
  { label: "Registered", value: 2013, suffix: "", prefix: "" },
  { label: "Pakistan Offices", value: 2, suffix: "", prefix: "" },
  { label: "Regional Desks", value: 2, suffix: "", prefix: "" },
  { label: "Countries Served", value: 18, suffix: "+", prefix: "" },
]

export function WhyEvernest() {
  return (
    <section className="relative overflow-hidden bg-noise py-24 text-white" style={{ background: "radial-gradient(120% 120% at 0% 0%, #1a3a6e 0%, #0b1b3a 45%, #07122a 100%)" }}>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_1.2fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.32em] text-brand-ice backdrop-blur-sm flex items-center gap-3">
              <span className="inline-block w-6 h-px bg-brand-red" />
              Why EverNest
            </div>
            <h2 className="mt-6 text-4xl font-display font-bold tracking-[-0.02em] md:text-5xl">
              A premium advisory experience built on{" "}
              <span className="text-brand-red">clarity, process, and reach</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-ice/76">
              The strongest consultancy brands do not just promise outcomes. They
              make the process easier to understand, the documentation easier to
              manage, and the decision-making easier to trust.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5 backdrop-blur-sm"
                >
                  <div className="text-[10px] font-bold uppercase tracking-[0.32em] text-white/45">
                    {item.label}
                  </div>
                  <div className="mt-2 text-4xl font-display font-bold text-white leading-none tabular-nums">
                    <Counter to={item.value} suffix={item.suffix} prefix={item.prefix} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <motion.article
                  key={reason.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  onMouseMove={(e) => {
                    const r = e.currentTarget.getBoundingClientRect()
                    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`)
                    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`)
                  }}
                  className="group spotlight-card rounded-[1.9rem] border border-white/10 bg-white/8 p-6 backdrop-blur-sm shadow-[0_24px_60px_-30px_rgba(0,0,0,0.45)]"
                  style={{ "--mx": "50%", "--my": "50%" } as React.CSSProperties}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-red/15 text-brand-red transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-2xl font-display font-bold tracking-[-0.01em] text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-ice/76">
                    {reason.desc}
                  </p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
