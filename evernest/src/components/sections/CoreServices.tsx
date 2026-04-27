"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Briefcase,
  Building2,
  GraduationCap,
  Handshake,
  Plane,
  Users,
} from "lucide-react"

const services = [
  {
    title: "Study Visas",
    desc: "Profile-based counseling, university selection, applications, and visa documentation support—built around your goals and timelines.",
    icon: GraduationCap,
    href: "/study-visas",
    cta: "Explore destinations",
  },
  {
    title: "Immigration & Work Permits",
    desc: "Country-specific pathway guidance for skilled, business, and family routes—structured for clarity and compliance.",
    icon: Plane,
    href: "/immigration",
    cta: "Explore pathways",
  },
  {
    title: "B2B Partnerships",
    desc: "Institutional and consultant partnerships with a professional process, clear coordination, and partner-focused support.",
    icon: Handshake,
    href: "/b2b-partnerships",
    cta: "Partner with EN Consultants",
  },
  {
    title: "University Recruitment",
    desc: "Support for institutions seeking qualified international applicants through a structured, outcomes-focused funnel.",
    icon: Building2,
    href: "/b2b-partnerships",
    cta: "Discuss recruitment",
  },
  {
    title: "Student Counseling",
    desc: "Guidance on course, country, and intake strategy—aligned with financial planning and long-term pathways.",
    icon: Users,
    href: "/contact",
    cta: "Book a consultation",
  },
  {
    title: "Global Mobility Consulting",
    desc: "Practical advisory for professionals and families planning relocation, documentation readiness, and next steps.",
    icon: Briefcase,
    href: "/contact",
    cta: "Talk to an expert",
  },
] as const

export function CoreServices() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-14">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="text-sm font-bold tracking-[0.22em] uppercase text-brand-blue/50"
            >
              Services
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.05 }}
              className="mt-4 text-4xl md:text-5xl font-display font-bold text-brand-blue"
            >
              Consultancy built for clarity, trust, and{" "}
              <span className="text-brand-red">outcomes</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.12 }}
              className="mt-6 text-lg text-foreground/70 leading-relaxed"
            >
              Choose a service area to see destinations, pathways, and how our team
              supports your case—from first call to decision and next steps.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-blue text-white px-7 py-4 font-bold shadow-card hover:-translate-y-1 transition-all"
            >
              Book Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="group rounded-3xl border border-border-subtle bg-white p-8 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all relative overflow-hidden"
              >
                <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-brand-blue/5 blur-2xl group-hover:bg-brand-red/5 transition-colors" />

                <div className="relative">
                  <div className="h-12 w-12 rounded-2xl bg-brand-blue text-white flex items-center justify-center shadow-sm shadow-brand-blue/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-2xl font-display font-bold text-brand-blue">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                    {service.desc}
                  </p>

                  <Link
                    href={service.href}
                    className="inline-flex items-center mt-6 text-sm font-bold text-brand-red hover:text-brand-blue transition-colors"
                  >
                    {service.cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

