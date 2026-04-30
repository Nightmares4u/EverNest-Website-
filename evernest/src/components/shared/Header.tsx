"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const studyDestinations = [
  "Italy", "Finland", "Turkey", "UAE", "Canada",
  "Georgia", "United Kingdom", "Azerbaijan", "France", "Ireland", "Malta", "Uzbekistan",
  "Australia", "Malaysia", "Spain", "Cyprus", "USA"
]

const immigrationPathways = [
  {
    name: "U.S. Immigration",
    href: "/immigration/united-states",
    programs: [
      { name: "USA Work Permit", href: "/immigration/usa-work-permit" },
      { name: "EB-2 NIW", href: "/immigration/us/eb-2" },
      { name: "H-1B Visa", href: "/immigration/h1b" },
      { name: "J-1 Visa", href: "/immigration/j1" }
    ]
  },
  {
    name: "Canada Immigration",
    href: "/immigration/express-entry",
    programs: [
      { name: "Express Entry", href: "/immigration/express-entry" },
      { name: "PNP", href: "/immigration/express-entry#canada-pnp" },
      { name: "Family Sponsorship", href: "/immigration/express-entry#canada-family-sponsorship" },
      { name: "Caregiver Program", href: "/immigration/express-entry#canada-caregiver" },
      { name: "RNIP", href: "/immigration/express-entry#canada-rnip" },
    ]
  },
  {
    name: "Australia Immigration",
    href: "/immigration/australia",
    programs: [
      { name: "Skilled Migration", href: "/immigration/australia" }
    ]
  },
]

const resourcesLinks = [
  { name: "Study Abroad Guide", slug: "study-abroad-guide" },
  { name: "Visa Interview Guide", slug: "visa-interview-guide" },
  { name: "Country Comparison", slug: "country-comparison" },
]

const headerEase: [number, number, number, number] = [0.22, 1, 0.36, 1]
const headerEaseIn: [number, number, number, number] = [0.42, 0, 1, 1]

const megaMenuVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.22, ease: headerEase } },
  exit: { opacity: 0, y: 4, scale: 0.99, transition: { duration: 0.16, ease: headerEaseIn } },
}

const backdropVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
}

const drawerVariants = {
  hidden: { x: "100%" },
  show: { x: 0, transition: { type: "spring" as const, damping: 28, stiffness: 240 } },
  exit: { x: "100%", transition: { type: "spring" as const, damping: 32, stiffness: 280 } },
}

const itemVariants = {
  hidden: { opacity: 0, x: 12 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.04, duration: 0.28, ease: headerEase },
  }),
}

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = React.useState<string | null>(null)
  const pathname = usePathname()
  const desktopNavRef = React.useRef<HTMLDivElement | null>(null)

  const { scrollY } = useScroll()
  const headerHeight = useTransform(scrollY, [0, 80], ["5.5rem", "4rem"])
  const headerBlur = useTransform(scrollY, [0, 80], ["blur(8px)", "blur(16px)"])
  const headerBg = useTransform(scrollY, [0, 80], ["rgba(255,255,255,0.85)", "rgba(255,255,255,0.96)"])
  const headerShadow = useTransform(scrollY, [0, 80], ["0 0 0 transparent", "0 1px 0 rgba(11,27,58,0.07)"])

  React.useEffect(() => {
    setIsOpen(false)
    setActiveMegaMenu(null)
  }, [pathname])

  React.useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (desktopNavRef.current && !desktopNavRef.current.contains(event.target as Node)) {
        setActiveMegaMenu(null)
      }
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveMegaMenu(null)
    }
    document.addEventListener("mousedown", handlePointerDown)
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("mousedown", handlePointerDown)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  const toggleMegaMenu = (menu: string) => {
    setActiveMegaMenu((cur) => (cur === menu ? null : menu))
  }

  return (
    <motion.header
      style={{ backdropFilter: headerBlur, background: headerBg, boxShadow: headerShadow }}
      className="sticky top-0 z-40 w-full border-b border-border-subtle/60"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div style={{ height: headerHeight }} className="flex items-center justify-between">
          <Link href="/" className="flex shrink-0 items-center py-2">
            <div className="relative h-[3.75rem] w-[4.35rem] md:h-[4.25rem] md:w-[4.9rem]">
              <Image
                src="/brand/evernest-logo.png"
                alt="EverNest Consultants"
                fill
                className="object-contain object-left"
                sizes="(max-width: 768px) 70px, 80px"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div ref={desktopNavRef} className="hidden md:flex items-center gap-8">
            <nav className="flex items-center space-x-8">
              <Link
                href="/"
                className={cn(
                  "link-underline text-sm font-medium transition-colors hover:text-brand-red",
                  pathname === "/" ? "text-brand-red" : "text-foreground/80"
                )}
              >
                Home
              </Link>

              {/* Study Visas */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveMegaMenu("study")}
                onMouseLeave={() => setActiveMegaMenu(null)}
                onFocusCapture={() => setActiveMegaMenu("study")}
                onBlurCapture={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) setActiveMegaMenu(null)
                }}
              >
                <button
                  type="button"
                  aria-expanded={activeMegaMenu === "study"}
                  aria-controls="desktop-study-menu"
                  onClick={() => toggleMegaMenu("study")}
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand-red py-2",
                    pathname.startsWith("/study-visas") ? "text-brand-red" : "text-foreground/80"
                  )}
                >
                  Study Visas
                  <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", activeMegaMenu === "study" && "rotate-180")} />
                </button>

                <AnimatePresence>
                  {activeMegaMenu === "study" && (
                    <motion.div
                      id="desktop-study-menu"
                      key="study-menu"
                      variants={megaMenuVariants}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      className="absolute left-1/2 -translate-x-1/2 top-full w-[600px] bg-white shadow-[0_24px_60px_rgba(11,27,58,0.12)] rounded-2xl border border-border-subtle p-6"
                    >
                      <div className="grid grid-cols-3 gap-x-6 gap-y-4">
                        {studyDestinations.map((country) => (
                          <Link
                            key={country}
                            href={`/study-visas/${country.toLowerCase().replace(" ", "-")}`}
                            onClick={() => setActiveMegaMenu(null)}
                            className="text-sm text-foreground/70 hover:text-brand-red hover:bg-brand-blush px-3 py-2 rounded-md transition-colors"
                          >
                            {country}
                          </Link>
                        ))}
                      </div>
                      <div className="mt-6 pt-4 border-t border-border-subtle">
                        <Link href="/study-visas" onClick={() => setActiveMegaMenu(null)} className="text-sm font-semibold text-brand-blue hover:text-brand-red transition-colors flex items-center gap-1">
                          Explore Study Destinations &rarr;
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Immigration */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveMegaMenu("immigration")}
                onMouseLeave={() => setActiveMegaMenu(null)}
                onFocusCapture={() => setActiveMegaMenu("immigration")}
                onBlurCapture={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) setActiveMegaMenu(null)
                }}
              >
                <button
                  type="button"
                  aria-expanded={activeMegaMenu === "immigration"}
                  aria-controls="desktop-immigration-menu"
                  onClick={() => toggleMegaMenu("immigration")}
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand-red py-2",
                    pathname.startsWith("/immigration") ? "text-brand-red" : "text-foreground/80"
                  )}
                >
                  Immigration
                  <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", activeMegaMenu === "immigration" && "rotate-180")} />
                </button>

                <AnimatePresence>
                  {activeMegaMenu === "immigration" && (
                    <motion.div
                      id="desktop-immigration-menu"
                      key="immigration-menu"
                      variants={megaMenuVariants}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      className="absolute left-1/2 -translate-x-1/2 top-full w-[560px] bg-white shadow-[0_24px_60px_rgba(11,27,58,0.12)] rounded-2xl border border-border-subtle p-6"
                    >
                      <div className="grid grid-cols-3 gap-8">
                        {immigrationPathways.map((pathway) => (
                          <div key={pathway.name}>
                            <Link href={pathway.href} onClick={() => setActiveMegaMenu(null)} className="font-semibold text-brand-blue mb-3 block hover:text-brand-red transition-colors">
                              {pathway.name}
                            </Link>
                            <ul className="space-y-2">
                              {pathway.programs.map((program) => (
                                <li key={program.name}>
                                  <Link
                                    href={program.href}
                                    onClick={() => setActiveMegaMenu(null)}
                                    className="text-sm text-foreground/70 hover:text-brand-red transition-colors"
                                  >
                                    {program.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 pt-4 border-t border-border-subtle">
                        <Link href="/immigration" onClick={() => setActiveMegaMenu(null)} className="text-sm font-semibold text-brand-blue hover:text-brand-red transition-colors flex items-center gap-1">
                          Explore Immigration Pathways &rarr;
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/b2b-partnerships"
                className={cn(
                  "link-underline text-sm font-medium transition-colors hover:text-brand-red",
                  pathname === "/b2b-partnerships" ? "text-brand-red" : "text-foreground/80"
                )}
              >
                B2B Partnerships
              </Link>

              <Link
                href="/success-stories"
                className={cn(
                  "link-underline text-sm font-medium transition-colors hover:text-brand-red",
                  pathname === "/success-stories" ? "text-brand-red" : "text-foreground/80"
                )}
              >
                Success Stories
              </Link>

              {/* Resources */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveMegaMenu("resources")}
                onMouseLeave={() => setActiveMegaMenu(null)}
                onFocusCapture={() => setActiveMegaMenu("resources")}
                onBlurCapture={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) setActiveMegaMenu(null)
                }}
              >
                <button
                  type="button"
                  aria-expanded={activeMegaMenu === "resources"}
                  aria-controls="desktop-resources-menu"
                  onClick={() => toggleMegaMenu("resources")}
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand-red py-2",
                    pathname.startsWith("/resources") ? "text-brand-red" : "text-foreground/80"
                  )}
                >
                  Resources
                  <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", activeMegaMenu === "resources" && "rotate-180")} />
                </button>

                <AnimatePresence>
                  {activeMegaMenu === "resources" && (
                    <motion.div
                      id="desktop-resources-menu"
                      key="resources-menu"
                      variants={megaMenuVariants}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      className="absolute left-1/2 -translate-x-1/2 top-full w-[250px] bg-white shadow-[0_24px_60px_rgba(11,27,58,0.12)] rounded-2xl border border-border-subtle p-4"
                    >
                      <div className="flex flex-col space-y-2">
                        {resourcesLinks.map((link) => (
                          <Link
                            key={link.slug}
                            href={`/resources/${link.slug}`}
                            onClick={() => setActiveMegaMenu(null)}
                            className="text-sm text-foreground/70 hover:text-brand-red hover:bg-brand-blush px-3 py-2 rounded-md transition-colors"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-3 border-t border-border-subtle">
                        <Link href="/resources" onClick={() => setActiveMegaMenu(null)} className="text-sm font-semibold text-brand-blue hover:text-brand-red transition-colors flex items-center gap-1 px-2">
                          View all resources &rarr;
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/about"
                className={cn(
                  "link-underline text-sm font-medium transition-colors hover:text-brand-red",
                  pathname === "/about" ? "text-brand-red" : "text-foreground/80"
                )}
              >
                About
              </Link>

              <Link
                href="/contact"
                className={cn(
                  "link-underline text-sm font-medium transition-colors hover:text-brand-red",
                  pathname === "/contact" ? "text-brand-red" : "text-foreground/80"
                )}
              >
                Contact
              </Link>
            </nav>

            <div className="flex">
              <Button asChild variant="default" className="rounded-full px-6">
                <Link href="/contact">Book Free Consultation</Link>
              </Button>
            </div>
          </div>

          <button
            className="flex items-center justify-center p-2 md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </motion.div>
      </div>

      {/* Mega menu page backdrop */}
      <AnimatePresence>
        {activeMegaMenu && (
          <motion.div
            key="mega-backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed inset-0 top-16 bg-brand-blue/6 backdrop-blur-[2px] -z-10 pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-drawer"
            variants={drawerVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="absolute left-0 right-0 top-full z-50 h-[calc(100dvh-100%)] overflow-y-auto border-t border-border-subtle bg-white shadow-[0_28px_80px_rgba(11,27,58,0.16)] md:hidden"
          >
            <div className="container mx-auto flex flex-col gap-4 px-4 py-5 pb-28">
              {[
                { href: "/", label: "Home", i: 0 },
                { href: "/b2b-partnerships", label: "B2B Partnerships", i: 3 },
                { href: "/success-stories", label: "Success Stories", i: 4 },
                { href: "/about", label: "About", i: 7 },
                { href: "/contact", label: "Contact", i: 8 },
              ].map(({ href, label, i }) => (
                <motion.div key={href} custom={i} variants={itemVariants} initial="hidden" animate="show">
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block rounded-2xl border px-4 py-3 text-lg font-semibold transition-colors",
                      pathname === href
                        ? "border-brand-red/20 bg-brand-blush text-brand-red"
                        : "border-border-subtle bg-brand-neutral/70 text-brand-blue hover:border-brand-red/20 hover:bg-brand-blush hover:text-brand-red"
                    )}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}

              <motion.div custom={1} variants={itemVariants} initial="hidden" animate="show" className="rounded-2xl border border-border-subtle bg-white p-4 shadow-sm">
                <div className="text-lg font-semibold text-brand-blue">Study Visas</div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {studyDestinations.slice(0, 6).map((country) => (
                    <Link
                      key={country}
                      href={`/study-visas/${country.toLowerCase().replace(" ", "-")}`}
                      onClick={() => setIsOpen(false)}
                      className="rounded-xl bg-brand-neutral px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-brand-blush hover:text-brand-red"
                    >
                      {country}
                    </Link>
                  ))}
                  <Link
                    href="/study-visas"
                    onClick={() => setIsOpen(false)}
                    className="rounded-xl bg-brand-blush px-3 py-2 text-sm font-bold text-brand-red"
                  >
                    Explore all →
                  </Link>
                </div>
              </motion.div>

              <motion.div custom={2} variants={itemVariants} initial="hidden" animate="show" className="rounded-2xl border border-border-subtle bg-white p-4 shadow-sm">
                <Link href="/immigration" onClick={() => setIsOpen(false)} className="block text-lg font-semibold text-brand-blue hover:text-brand-red">Immigration</Link>
                <div className="mt-3 grid gap-4">
                  {immigrationPathways.map((pathway) => (
                    <div key={pathway.name}>
                      <Link href={pathway.href} onClick={() => setIsOpen(false)} className="mb-2 block text-sm font-semibold text-foreground/80 hover:text-brand-red">{pathway.name}</Link>
                      <div className="flex flex-wrap gap-2">
                        {pathway.programs.map((program) => (
                          <Link key={program.name} href={program.href} onClick={() => setIsOpen(false)} className="rounded-full bg-brand-ice px-3 py-1.5 text-xs font-medium text-brand-blue hover:bg-brand-red hover:text-white transition-colors">
                            {program.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div custom={5} variants={itemVariants} initial="hidden" animate="show" className="rounded-2xl border border-border-subtle bg-white p-4 shadow-sm">
                <Link href="/resources" onClick={() => setIsOpen(false)} className="block text-lg font-semibold text-brand-blue hover:text-brand-red">Resources</Link>
                <div className="mt-3 grid gap-2">
                  {resourcesLinks.map((link) => (
                    <Link key={link.slug} href={`/resources/${link.slug}`} onClick={() => setIsOpen(false)} className="rounded-xl bg-brand-neutral px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-brand-blush hover:text-brand-red">
                      {link.name}
                    </Link>
                  ))}
                </div>
              </motion.div>

              <motion.div custom={9} variants={itemVariants} initial="hidden" animate="show" className="pt-2">
                <Button asChild variant="default" className="w-full rounded-full h-12 text-base">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>Book Free Consultation</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
