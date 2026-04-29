"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import {
  ArrowRight,
  Briefcase,
  Building2,
  GraduationCap,
  Handshake,
  Plane,
  Users,
  type LucideIcon,
} from "lucide-react"

type IconAnim = "lift" | "fly" | "pulse" | "scale"

type Service = {
  readonly title: string
  readonly badge: string
  readonly desc: string
  readonly icon: LucideIcon
  readonly href: string
  readonly cta: string
  readonly iconAnim: IconAnim
  readonly bgType: "academic" | "flight" | "network" | "institutional" | "advisory" | "mobility"
}

const services: Service[] = [
  {
    title: "Study Visas",
    badge: "Student Pathways",
    desc: "Profile-based counseling, university selection, applications, and visa documentation support—built around your goals and timelines.",
    icon: GraduationCap,
    href: "/study-visas",
    cta: "Explore Study Destinations",
    iconAnim: "lift",
    bgType: "academic",
  },
  {
    title: "Immigration & Work Permits",
    badge: "Global Mobility",
    desc: "Country-specific pathway guidance for skilled, business, and family routes—structured for clarity and compliance.",
    icon: Plane,
    href: "/immigration",
    cta: "Explore pathways",
    iconAnim: "fly",
    bgType: "flight",
  },
  {
    title: "B2B Partnerships",
    badge: "Partner Network",
    desc: "Institutional and consultant partnerships with a professional process, clear coordination, and partner-focused support.",
    icon: Handshake,
    href: "/b2b-partnerships",
    cta: "Partner With EN Consultants",
    iconAnim: "pulse",
    bgType: "network",
  },
  {
    title: "University Recruitment",
    badge: "Institutional",
    desc: "Support for institutions seeking qualified international applicants through a structured, outcomes-focused funnel.",
    icon: Building2,
    href: "/b2b-partnerships",
    cta: "Discuss recruitment",
    iconAnim: "scale",
    bgType: "institutional",
  },
  {
    title: "Student Counseling",
    badge: "Advisory",
    desc: "Guidance on course, country, and intake strategy—aligned with financial planning and long-term pathways.",
    icon: Users,
    href: "/contact",
    cta: "Book Free Consultation",
    iconAnim: "scale",
    bgType: "advisory",
  },
  {
    title: "Global Mobility Consulting",
    badge: "Relocation",
    desc: "Practical advisory for professionals and families planning relocation, documentation readiness, and next steps.",
    icon: Briefcase,
    href: "/contact",
    cta: "Talk to an expert",
    iconAnim: "scale",
    bgType: "mobility",
  },
]

const iconReset = { y: 0, x: 0, rotate: 0, scale: 1 }

function getIconTarget(anim: IconAnim) {
  switch (anim) {
    case "lift":
      return { y: -8, x: 0, rotate: 0, scale: 1 }
    case "fly":
      return { y: -5, x: 6, rotate: -12, scale: 1 }
    case "pulse":
      return { y: 0, x: 0, rotate: 6, scale: 1.14 }
    case "scale":
    default:
      return { y: 0, x: 0, rotate: 0, scale: 1.1 }
  }
}

function CardBg({ type }: { type: Service["bgType"] }) {
  switch (type) {
    case "academic":
      return (
        <svg className="absolute bottom-3 right-3 h-28 w-28 opacity-[0.045] pointer-events-none" viewBox="0 0 100 100" fill="none" aria-hidden="true">
          <path d="M50 18L88 35L50 52L12 35Z" stroke="#0b1b3a" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M26 45V67C26 78 37 87 50 87C63 87 74 78 74 67V45" stroke="#0b1b3a" strokeWidth="2"/>
          <path d="M88 35V54" stroke="#0b1b3a" strokeWidth="2" strokeLinecap="round"/>
          <path d="M83 54L88 62L93 54" stroke="#0b1b3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case "flight":
      return (
        <svg className="absolute bottom-3 right-3 h-32 w-32 opacity-[0.045] pointer-events-none" viewBox="0 0 120 100" fill="none" aria-hidden="true">
          <path d="M10 85 C 35 70, 70 30, 110 10" stroke="#0b1b3a" strokeWidth="2" strokeDasharray="5 4" strokeLinecap="round"/>
          <circle cx="10"  cy="85" r="4"   fill="#0b1b3a"/>
          <circle cx="110" cy="10" r="4"   fill="#0b1b3a"/>
          <circle cx="56"  cy="46" r="2.5" fill="#0b1b3a" opacity="0.55"/>
        </svg>
      )
    case "network":
      return (
        <svg className="absolute bottom-3 right-3 h-28 w-28 opacity-[0.045] pointer-events-none" viewBox="0 0 100 100" fill="none" aria-hidden="true">
          <circle cx="50" cy="50" r="6"   fill="#0b1b3a"/>
          <circle cx="18" cy="22" r="4.5" fill="#0b1b3a"/>
          <circle cx="82" cy="22" r="4.5" fill="#0b1b3a"/>
          <circle cx="18" cy="78" r="4.5" fill="#0b1b3a"/>
          <circle cx="82" cy="78" r="4.5" fill="#0b1b3a"/>
          <line x1="50" y1="50" x2="18" y2="22" stroke="#0b1b3a" strokeWidth="1.5"/>
          <line x1="50" y1="50" x2="82" y2="22" stroke="#0b1b3a" strokeWidth="1.5"/>
          <line x1="50" y1="50" x2="18" y2="78" stroke="#0b1b3a" strokeWidth="1.5"/>
          <line x1="50" y1="50" x2="82" y2="78" stroke="#0b1b3a" strokeWidth="1.5"/>
          <line x1="18" y1="22" x2="82" y2="22" stroke="#0b1b3a" strokeWidth="1" strokeDasharray="3 3"/>
          <line x1="18" y1="78" x2="82" y2="78" stroke="#0b1b3a" strokeWidth="1" strokeDasharray="3 3"/>
        </svg>
      )
    case "institutional":
      return (
        <svg className="absolute bottom-3 right-3 h-28 w-28 opacity-[0.045] pointer-events-none" viewBox="0 0 100 100" fill="none" aria-hidden="true">
          <rect x="10" y="45" width="80" height="48" stroke="#0b1b3a" strokeWidth="2"/>
          <path d="M50 12L10 45H90Z" stroke="#0b1b3a" strokeWidth="2" strokeLinejoin="round"/>
          <rect x="20" y="58" width="14" height="14" stroke="#0b1b3a" strokeWidth="1.5"/>
          <rect x="43" y="58" width="14" height="14" stroke="#0b1b3a" strokeWidth="1.5"/>
          <rect x="66" y="58" width="14" height="14" stroke="#0b1b3a" strokeWidth="1.5"/>
          <rect x="37" y="76" width="26" height="17" stroke="#0b1b3a" strokeWidth="1.5"/>
        </svg>
      )
    case "advisory":
      return (
        <svg className="absolute bottom-3 right-3 h-28 w-28 opacity-[0.045] pointer-events-none" viewBox="0 0 100 100" fill="none" aria-hidden="true">
          <path d="M15 20 Q15 8 27 8 H73 Q85 8 85 20 V52 Q85 64 73 64 H40 L22 82 V64 H27 Q15 64 15 52 Z" stroke="#0b1b3a" strokeWidth="2" strokeLinejoin="round"/>
          <line x1="30" y1="28" x2="70" y2="28" stroke="#0b1b3a" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="30" y1="40" x2="70" y2="40" stroke="#0b1b3a" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="30" y1="52" x2="54" y2="52" stroke="#0b1b3a" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    case "mobility":
    default:
      return (
        <svg className="absolute bottom-3 right-3 h-28 w-28 opacity-[0.045] pointer-events-none" viewBox="0 0 100 100" fill="none" aria-hidden="true">
          <circle cx="50" cy="50" r="38" stroke="#0b1b3a" strokeWidth="2"/>
          <ellipse cx="50" cy="50" rx="20" ry="38" stroke="#0b1b3a" strokeWidth="1.5"/>
          <line x1="12" y1="50" x2="88" y2="50" stroke="#0b1b3a" strokeWidth="1.5"/>
          <path d="M18 32 Q50 24 82 32" stroke="#0b1b3a" strokeWidth="1" strokeLinecap="round"/>
          <path d="M18 68 Q50 76 82 68" stroke="#0b1b3a" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      )
  }
}

function ServiceCard({ service, delay }: { service: Service; delay: number }) {
  const reducedMotion = useReducedMotion()
  const [hovered, setHovered] = useState(false)
  const Icon = service.icon

  const iconTarget = hovered && !reducedMotion ? getIconTarget(service.iconAnim) : iconReset
  const cardLift = reducedMotion ? {} : { y: hovered ? -7 : 0 }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay }}
      animate={cardLift}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`)
        e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`)
      }}
      className="group spotlight-card service-card relative overflow-hidden rounded-3xl border border-border-subtle bg-white p-8 shadow-sm"
    >
      {/* Subtle background SVG pattern */}
      <CardBg type={service.bgType} />

      {/* Ambient colour blob */}
      <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-brand-blue/5 blur-2xl transition-colors duration-500 group-hover:bg-brand-red/5" />

      <div className="relative">
        {/* Badge */}
        <span className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-brand-blue/12 bg-brand-ice/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.26em] text-brand-blue/55">
          <span className="h-1 w-1 rounded-full bg-brand-red/60" />
          {service.badge}
        </span>

        {/* Animated icon container */}
        <motion.div
          animate={iconTarget}
          transition={{ type: "spring", stiffness: 440, damping: 14 }}
          className="service-icon h-12 w-12 rounded-2xl bg-brand-blue text-white flex items-center justify-center shadow-sm shadow-brand-blue/20 transition-shadow duration-300"
        >
          <Icon className="h-6 w-6" />
        </motion.div>

        <h3 className="mt-6 text-2xl font-display font-bold tracking-[-0.01em] text-brand-blue">
          {service.title}
        </h3>
        <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
          {service.desc}
        </p>

        <Link
          href={service.href}
          className="link-underline inline-flex items-center mt-6 text-sm font-bold text-brand-red hover:text-brand-blue transition-colors"
        >
          {service.cta}
          <motion.span
            animate={{ x: hovered && !reducedMotion ? 5 : 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            className="ml-2 inline-flex"
          >
            <ArrowRight className="h-4 w-4" />
          </motion.span>
        </Link>
      </div>
    </motion.div>
  )
}

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
              className="text-[10px] font-bold tracking-[0.32em] uppercase text-brand-blue/45 flex items-center gap-3"
            >
              <span className="inline-block w-8 h-px bg-brand-red" />
              Services
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.05 }}
              className="mt-4 text-4xl md:text-5xl font-display font-bold tracking-[-0.02em] text-brand-blue"
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
              className="group inline-flex items-center justify-center rounded-full bg-brand-blue text-white px-7 py-4 font-bold shadow-card hover:-translate-y-1 transition-all"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1.5" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  )
}
