"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Briefcase, Globe2, GraduationCap, Handshake, ShieldCheck } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-brand-ice pt-24 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Premium ambient background */}
      <div className="absolute inset-0 bg-grid-soft opacity-40" aria-hidden="true"></div>
      <div className="absolute -top-24 right-[-10%] h-[520px] w-[520px] rounded-full bg-brand-blue/10 blur-3xl" aria-hidden="true"></div>
      <div className="absolute -bottom-28 left-[-15%] h-[520px] w-[520px] rounded-full bg-brand-red/10 blur-3xl" aria-hidden="true"></div>

      {/* Abstract Shape Background */}
      <motion.div 
        initial={{ opacity: 0, x: "50%", y: "-50%" }}
        animate={{ opacity: 0.4, x: "33%", y: "-10%" }}
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
              className="inline-flex items-center rounded-full border border-brand-blue/15 bg-white/70 px-4 py-1.5 text-sm font-bold text-brand-blue mb-8 backdrop-blur-md shadow-sm"
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-brand-red mr-2.5 animate-pulse"></span>
              EN Consultants (Pvt) Ltd. • Trading as EverNest Consultants
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-brand-blue mb-8 leading-[1.05]"
            >
              Premium guidance for{" "}
              <span className="text-brand-red relative inline-block">
                global study & mobility
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
              className="text-lg md:text-xl text-brand-blue/80 mb-10 max-w-3xl leading-relaxed font-medium"
            >
              EverNest Consultants supports students, professionals, and partners with profile-based counseling, country-specific application support, and a transparent process across study visas, immigration pathways, work permits, and B2B partnerships.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {[
                { icon: ShieldCheck, label: "Registered since 2013" },
                { icon: Briefcase, label: "13+ years experience" },
                { icon: Globe2, label: "18+ countries served" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-brand-blue border border-brand-blue/10 backdrop-blur"
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
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="lg:col-span-5"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: GraduationCap,
                  title: "Study Visas",
                  desc: "Admissions, scholarships, and compliant visa filing support.",
                  href: "/study-visas",
                },
                {
                  icon: Globe2,
                  title: "Immigration & Work Permits",
                  desc: "Clear pathways for skilled, business, and family routes.",
                  href: "/immigration",
                },
                {
                  icon: Handshake,
                  title: "B2B Partnerships",
                  desc: "Institutional and sub-agent collaboration with structure.",
                  href: "/b2b-partnerships",
                },
                {
                  icon: Briefcase,
                  title: "Success Stories",
                  desc: "See outcomes across destinations and profiles.",
                  href: "/success-stories",
                },
              ].map(({ icon: Icon, title, desc, href }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.45 + i * 0.06 }}
                  className="group rounded-3xl bg-white/80 backdrop-blur border border-brand-blue/10 p-6 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-brand-blue text-white flex items-center justify-center shadow-sm shadow-brand-blue/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-lg font-bold text-brand-blue">{title}</div>
                      <p className="text-sm text-foreground/70 leading-relaxed mt-1">{desc}</p>
                      <Link
                        href={href}
                        className="inline-flex items-center mt-4 text-sm font-bold text-brand-red hover:text-brand-blue transition-colors"
                      >
                        Explore <span className="ml-1">→</span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
