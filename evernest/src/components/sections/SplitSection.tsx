"use client"

import Link from "next/link"
import { ArrowRight, GraduationCap, Plane } from "lucide-react"
import { motion } from "framer-motion"

const studyVisaItems = [
  {
    title: "University admissions",
    desc: "Shortlisting, applications, offer management, and destination planning aligned with your profile and budget.",
  },
  {
    title: "Visa file preparation",
    desc: "Structured support for statements, financial documents, checklists, and compliant submission planning.",
  },
  {
    title: "Course and country fit",
    desc: "Practical advisory on which destination, intake, and degree route make the most sense for your goals.",
  },
  {
    title: "Post-study direction",
    desc: "Clear guidance on work rights, legal stay options, and responsible next-step planning after graduation.",
  },
] as const

const immigrationItems = [
  {
    title: "Skilled and work routes",
    desc: "Country-specific guidance for professionals considering skilled visas, employer-sponsored routes, or permit-based pathways.",
  },
  {
    title: "Document readiness",
    desc: "A cleaner process for credentials, background documents, forms, and application consistency.",
  },
  {
    title: "Employer-linked pathways",
    desc: "Support around understanding job-offer-linked immigration routes and what documents those routes actually require.",
  },
  {
    title: "Decision-stage support",
    desc: "Transparent guidance on next steps, timelines, and follow-up responsibilities once your file is in process.",
  },
] as const

export function SplitSection() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-14 max-w-3xl">
          <div className="text-sm font-bold uppercase tracking-[0.22em] text-brand-blue/45">
            Service Depth
          </div>
          <h2 className="mt-4 text-4xl font-display font-bold text-brand-blue md:text-5xl">
            Two advisory tracks built around
            {" "}
            <span className="text-brand-red">clarity and readiness</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/70">
            The homepage should make it easy to see how the work actually gets
            done. These two panels summarize where EverNest Consultants adds the
            most value for students, professionals, and families.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <motion.article
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="group relative overflow-hidden rounded-[2.25rem] border border-border-subtle bg-[linear-gradient(180deg,#ffffff_0%,#f7faff_100%)] p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-card md:p-10"
          >
            <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-brand-blue/6 blur-3xl" />
            <div className="relative z-10">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue text-white shadow-lg shadow-brand-blue/20">
                <GraduationCap className="h-7 w-7" />
              </div>
              <div className="mt-6 flex items-center gap-3">
                <span className="rounded-full bg-brand-blue/8 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-brand-blue/70">
                  Study
                </span>
                <span className="text-sm font-medium text-foreground/50">
                  Admissions, destination planning, and visa readiness
                </span>
              </div>
              <h3 className="mt-5 text-3xl font-display font-bold text-brand-blue">
                Study Visa Services
              </h3>

              <div className="mt-8 space-y-5">
                {studyVisaItems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.4rem] border border-brand-blue/8 bg-white px-5 py-4"
                  >
                    <div className="text-lg font-bold text-brand-blue">{item.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/study-visas"
                className="inline-flex items-center mt-8 text-base font-bold text-brand-red transition-colors group-hover:text-brand-blue"
              >
                Explore Study Destinations
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="group relative overflow-hidden rounded-[2.25rem] border border-brand-blue/12 bg-brand-blue p-8 text-white shadow-[0_20px_40px_-20px_rgba(11,27,58,0.55)] transition-all hover:-translate-y-1 hover:shadow-[0_32px_60px_-24px_rgba(11,27,58,0.55)] md:p-10"
          >
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-brand-red/18 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-36 w-36 rounded-full bg-white/8 blur-3xl" />
            <div className="relative z-10">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-brand-red backdrop-blur">
                <Plane className="h-7 w-7" />
              </div>
              <div className="mt-6 flex items-center gap-3">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-brand-ice">
                  Immigration
                </span>
                <span className="text-sm font-medium text-brand-ice/60">
                  Skilled routes, permits, and next-step planning
                </span>
              </div>
              <h3 className="mt-5 text-3xl font-display font-bold text-white">
                Immigration Services
              </h3>

              <div className="mt-8 space-y-5">
                {immigrationItems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.4rem] border border-white/10 bg-white/6 px-5 py-4 backdrop-blur-sm"
                  >
                    <div className="text-lg font-bold text-white">{item.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-brand-ice/75">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/immigration"
                className="inline-flex items-center mt-8 text-base font-bold text-white transition-colors group-hover:text-brand-ice"
              >
                Explore Immigration Pathways
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
