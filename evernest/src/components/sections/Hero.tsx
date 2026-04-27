"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Briefcase, Globe2, GraduationCap, Handshake, ShieldCheck, Waypoints } from "lucide-react"
import { siteConfig } from "@/data/site"

export function Hero() {
  const trustBadges = [
    { icon: ShieldCheck, label: "Registered since 2013" },
    { icon: Briefcase, label: "13+ years" },
    { icon: Globe2, label: "18+ countries" },
    { icon: Waypoints, label: "2 offices + global desks" },
  ]

  const heroPanels = [
    {
      icon: GraduationCap,
      title: "Study Visas",
      desc: "Admissions, scholarship planning, and compliant filing support.",
      href: "/study-visas",
      cta: "Explore Study Destinations",
    },
    {
      icon: Globe2,
      title: "Immigration Pathways",
      desc: "Clear routes for skilled, work permit, and long-term mobility cases.",
      href: "/immigration",
      cta: "Explore Immigration",
    },
    {
      icon: Handshake,
      title: "B2B Partnerships",
      desc: "A professional operating model for institutional and consultant partners.",
      href: "/b2b-partnerships",
      cta: "Partner With EN Consultants",
    },
    {
      icon: Waypoints,
      title: "Regional Desks",
      desc: "Pakistan headquarters with active North America and Europe contact desks.",
      href: "/contact",
      cta: "View Contact Options",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f5f9ff_0%,#eff5ff_52%,#ffffff_100%)] pt-24 pb-20 md:pt-36 md:pb-28">
      <div className="absolute inset-0 bg-grid-soft opacity-35" aria-hidden="true"></div>
      <div className="absolute inset-x-0 top-0 h-[68%] bg-[radial-gradient(circle_at_top_right,rgba(11,27,58,0.10),transparent_32%),radial-gradient(circle_at_top_left,rgba(225,29,46,0.10),transparent_25%)]" aria-hidden="true" />
      <div className="absolute -top-20 right-[-8%] h-[540px] w-[540px] rounded-full bg-brand-blue/8 blur-3xl" aria-hidden="true"></div>
      <div className="absolute -bottom-24 left-[-14%] h-[440px] w-[440px] rounded-full bg-brand-red/8 blur-3xl" aria-hidden="true"></div>

      <motion.div 
        initial={{ opacity: 0, x: "50%", y: "-50%" }}
        animate={{ opacity: 0.26, x: "33%", y: "-10%" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 pointer-events-none hidden lg:block"
      >
        <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="400" cy="400" r="400" fill="url(#paint0_radial)" />
          <defs>
            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(400 400) rotate(90) scale(400)">
              <stop stopColor="#0B1B3A" />
              <stop offset="1" stopColor="#0B1B3A" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: "-50%", y: "50%" }}
        animate={{ opacity: 0.1, x: "-30%", y: "20%" }}
        transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
        className="absolute bottom-0 left-0 pointer-events-none hidden lg:block mix-blend-multiply"
      >
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="300" cy="300" r="300" fill="url(#paint1_radial)" />
          <defs>
            <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(300 300) rotate(90) scale(300)">
              <stop stopColor="#e11d2e" />
              <stop offset="1" stopColor="#e11d2e" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-brand-blue/10 bg-white/85 px-4 py-1.5 text-sm font-bold text-brand-blue mb-8 backdrop-blur-md shadow-sm"
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-brand-red mr-2.5 animate-pulse"></span>
              EN Consultants (Pvt) Ltd. • Trading as EverNest Consultants
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-[5.25rem] font-display font-bold tracking-tight text-brand-blue mb-8 leading-[1.01]"
            >
              Study visas, immigration, and{" "}
              <span className="text-brand-red relative inline-block">
                global mobility
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.85, duration: 0.6 }}
                  className="absolute -bottom-2 left-0 w-full h-1 bg-brand-red origin-left"
                />
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-[1.3rem] text-brand-blue/78 mb-10 max-w-3xl leading-relaxed font-medium"
            >
              EverNest Consultants supports students, professionals, and institutional partners with profile-based counseling, destination selection, document readiness, and transparent next-step guidance across study visas, immigration pathways, work permits, and B2B partnerships.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {trustBadges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full bg-white/78 px-4 py-2 text-sm font-semibold text-brand-blue border border-brand-blue/10 backdrop-blur shadow-sm"
                >
                  <Icon className="h-4 w-4 text-brand-red" />
                  {label}
                </div>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="rounded-full text-base h-14 px-8 shadow-glow transition-transform hover:scale-[1.03]">
                <Link href="/contact">Book Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full text-base h-14 px-8 bg-white/70 backdrop-blur-sm border-brand-blue/20 text-brand-blue hover:bg-brand-blue hover:text-white transition-all hover:scale-[1.03]">
                <Link href="/study-visas">Explore Study Destinations</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.38 }}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-brand-blue/65"
            >
              <span>Pakistan main line: {siteConfig.contact.phone}</span>
              <span>North America: {siteConfig.contact.northAmericaPhone}</span>
              <span>Europe: {siteConfig.contact.europePhone}</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="lg:col-span-5"
          >
            <div className="rounded-[2rem] border border-brand-blue/12 bg-white/82 p-5 shadow-[0_25px_70px_-25px_rgba(11,27,58,0.32)] backdrop-blur-md md:p-6">
              <div className="flex items-start justify-between gap-4 border-b border-brand-blue/10 pb-5">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.24em] text-brand-blue/45">
                    Advisory Overview
                  </div>
                  <div className="mt-2 text-2xl font-display font-bold text-brand-blue">
                    Clear routes. Responsible guidance.
                  </div>
                </div>
                <div className="rounded-2xl bg-brand-red/10 px-3 py-2 text-right text-xs font-semibold text-brand-red">
                  2 offices
                  <br />
                  2 regional desks
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {heroPanels.map(({ icon: Icon, title, desc, href, cta }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.45 + i * 0.06 }}
                    className="group rounded-[1.6rem] border border-brand-blue/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-card"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue text-white shadow-sm shadow-brand-blue/20">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-lg font-bold text-brand-blue">{title}</div>
                        <p className="mt-1 text-sm leading-relaxed text-foreground/70">{desc}</p>
                        <Link
                          href={href}
                          className="inline-flex items-center mt-4 text-sm font-bold text-brand-red transition-colors hover:text-brand-blue"
                        >
                          {cta}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 grid gap-4 rounded-[1.7rem] bg-brand-blue px-5 py-5 text-white md:grid-cols-2">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.22em] text-white/45">
                    North America Desk
                  </div>
                  <div className="mt-2 text-lg font-bold">{siteConfig.satelliteContacts[0].manager}</div>
                  <div className="text-sm text-brand-ice/75">
                    {siteConfig.satelliteContacts[0].managerTitle}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.22em] text-white/45">
                    Europe Desk
                  </div>
                  <div className="mt-2 text-lg font-bold">{siteConfig.satelliteContacts[1].manager}</div>
                  <div className="text-sm text-brand-ice/75">
                    {siteConfig.satelliteContacts[1].managerTitle}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
