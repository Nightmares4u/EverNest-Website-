"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ClipboardCheck, FileText, PhoneCall, Send, Shield } from "lucide-react"

const steps = [
  {
    title: "Consultation",
    desc: "A focused call to understand your goals, constraints, and the right service route.",
    icon: PhoneCall,
  },
  {
    title: "Profile Assessment",
    desc: "We review eligibility, timelines, and risks to shape a realistic, country-specific plan.",
    icon: ClipboardCheck,
  },
  {
    title: "Document Preparation",
    desc: "A structured checklist and guidance so your file is complete, consistent, and compliant.",
    icon: FileText,
  },
  {
    title: "Application Submission",
    desc: "Submission support and quality checks for your selected pathway or destination.",
    icon: Send,
  },
  {
    title: "Follow‑up & Decision",
    desc: "We keep you informed, support next steps, and guide you through outcomes responsibly.",
    icon: Shield,
  },
] as const

export function ProcessSteps() {
  return (
    <section className="py-24 bg-brand-neutral/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-soft opacity-30" aria-hidden="true" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="text-sm font-bold tracking-[0.22em] uppercase text-brand-blue/50"
            >
              Process
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.05 }}
              className="mt-4 text-4xl md:text-5xl font-display font-bold text-brand-blue"
            >
              A transparent, structured path from{" "}
              <span className="text-brand-red">consultation</span> to decision
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.12 }}
              className="mt-6 text-lg text-foreground/70 leading-relaxed"
            >
              Every case is different—but the process should always be clear.
              Our team keeps your file organized and your next steps predictable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.18 }}
              className="mt-10"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-brand-red text-white px-7 py-4 font-bold shadow-glow hover:-translate-y-1 transition-all"
              >
                Book Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-6">
              {steps.map((step, i) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.45, delay: i * 0.05 }}
                    className="group rounded-3xl bg-white border border-border-subtle p-8 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="h-12 w-12 rounded-2xl bg-brand-blush text-brand-red flex items-center justify-center border border-brand-red/10">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="h-10 w-10 rounded-full bg-brand-ice text-brand-blue flex items-center justify-center font-bold text-sm border border-brand-blue/10">
                        {i + 1}
                      </div>
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-brand-blue">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

