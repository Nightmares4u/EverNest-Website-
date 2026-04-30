"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Landmark, ShieldCheck, Waypoints } from "lucide-react"
import { motion } from "framer-motion"
import { siteConfig } from "@/data/site"

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
    desc: "Karachi, Islamabad, and Lahore serve as our core public offices for counseling, follow-up, and client-facing coordination.",
  },
  {
    icon: Waypoints,
    title: "Global desk access",
    desc: `North America support through ${siteConfig.satelliteContacts[0].manager} and Europe support through ${siteConfig.satelliteContacts[1].manager}.`,
  },
] as const

const recognitions = [
  {
    label: "British Council UK",
    sub: "Certified Agent",
    src: "/images/trust/british-council/british-council-certified-agent.png",
  },
  {
    label: "AEO / IELTS",
    sub: "Certified Partner",
    src: "/images/trust/certificates/aeo-ielts-certificate.png",
  },
  {
    label: "IELTS Network",
    sub: "Recognized Partner",
    src: "/images/trust/certificates/ielts-recognition-certificate.png",
  },
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

            <div className="mt-10 rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm">
              <div className="flex items-center justify-between gap-3">
                <div className="text-[10px] font-bold uppercase tracking-[0.32em] text-white/55">
                  Recognitions & Standards
                </div>
                <Link
                  href="/about/credentials"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-ice hover:text-white transition-colors"
                >
                  View all
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {recognitions.map((r) => (
                  <Link
                    key={r.label}
                    href="/about/credentials"
                    className="group flex items-center gap-3 rounded-xl border border-white/8 bg-white/5 p-3 transition-all hover:border-white/20 hover:bg-white/10"
                  >
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-md border border-white/10 bg-white/10">
                      <Image
                        src={r.src}
                        alt={r.label}
                        fill
                        sizes="40px"
                        className="object-cover opacity-90 transition-opacity group-hover:opacity-100"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-bold text-white truncate">{r.label}</div>
                      <div className="text-[11px] text-brand-ice/70 truncate">{r.sub}</div>
                    </div>
                  </Link>
                ))}
              </div>
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
