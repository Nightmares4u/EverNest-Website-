"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"

import { siteConfig } from "@/data/site"
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
      { name: "H-1B Visa", href: "/immigration/h1b" },
      { name: "J-1 Visa", href: "/immigration/j1" }
    ] 
  },
  { 
    name: "Canada Immigration", 
    href: "/immigration/canada",
    programs: [
      { name: "Express Entry", href: "/immigration/express-entry" },
      { name: "Provincial Nominee Program", href: "/immigration/canada/pnp" }
    ] 
  },
  { 
    name: "Australia Immigration", 
    href: "/immigration/australia",
    programs: [
      { name: "Skilled Migration", href: "/immigration/australia/skilled-visas" }
    ] 
  },
]

const resourcesLinks = [
  { name: "Study Abroad Guide", slug: "study-abroad-guide" },
  { name: "Visa Interview Guide", slug: "visa-interview-guide" },
  { name: "Country Comparison", slug: "country-comparison" },
]

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = React.useState<string | null>(null)
  const pathname = usePathname()
  const desktopNavRef = React.useRef<HTMLDivElement | null>(null)

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsOpen(false)
    setActiveMegaMenu(null)
  }, [pathname])

  React.useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (
        desktopNavRef.current &&
        !desktopNavRef.current.contains(event.target as Node)
      ) {
        setActiveMegaMenu(null)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMegaMenu(null)
      }
    }

    document.addEventListener("mousedown", handlePointerDown)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("mousedown", handlePointerDown)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  const toggleMegaMenu = (menu: string) => {
    setActiveMegaMenu((currentMenu) => (currentMenu === menu ? null : menu))
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border-subtle bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/brand/evernest-logo.jpeg" 
              alt={siteConfig.name} 
              width={140} 
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div ref={desktopNavRef} className="hidden md:flex items-center gap-8">
          <nav className="flex items-center space-x-8">
            <Link 
              href="/" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-red",
                pathname === "/" ? "text-brand-red" : "text-foreground/80"
              )}
            >
              Home
            </Link>

            {/* Study Visas Mega Menu Trigger */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveMegaMenu("study")}
              onMouseLeave={() => setActiveMegaMenu(null)}
              onFocusCapture={() => setActiveMegaMenu("study")}
              onBlurCapture={(event) => {
                const nextFocused = event.relatedTarget as Node | null
                if (!event.currentTarget.contains(nextFocused)) {
                  setActiveMegaMenu(null)
                }
              }}
            >
              <button
                type="button"
                aria-expanded={activeMegaMenu === "study"}
                aria-controls="desktop-study-menu"
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand-red py-2",
                  pathname.startsWith("/study-visas") ? "text-brand-red" : "text-foreground/80"
                )}
                onClick={() => toggleMegaMenu("study")}
              >
                Study Visas <ChevronDown className="h-4 w-4" />
              </button>
              
              {/* Study Mega Menu Dropdown */}
              <div
                id="desktop-study-menu"
                className={cn(
                "absolute left-1/2 -translate-x-1/2 top-full w-[600px] bg-white shadow-card rounded-xl border border-border-subtle p-6 transition-all duration-200",
                activeMegaMenu === "study" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
              )}>
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
              </div>
            </div>

            {/* Immigration Mega Menu Trigger */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveMegaMenu("immigration")}
              onMouseLeave={() => setActiveMegaMenu(null)}
              onFocusCapture={() => setActiveMegaMenu("immigration")}
              onBlurCapture={(event) => {
                const nextFocused = event.relatedTarget as Node | null
                if (!event.currentTarget.contains(nextFocused)) {
                  setActiveMegaMenu(null)
                }
              }}
            >
              <button
                type="button"
                aria-expanded={activeMegaMenu === "immigration"}
                aria-controls="desktop-immigration-menu"
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand-red py-2",
                  pathname.startsWith("/immigration") ? "text-brand-red" : "text-foreground/80"
                )}
                onClick={() => toggleMegaMenu("immigration")}
              >
                Immigration <ChevronDown className="h-4 w-4" />
              </button>
              
              {/* Immigration Mega Menu Dropdown */}
              <div
                id="desktop-immigration-menu"
                className={cn(
                "absolute left-1/2 -translate-x-1/2 top-full w-[600px] bg-white shadow-card rounded-xl border border-border-subtle p-6 transition-all duration-200",
                activeMegaMenu === "immigration" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
              )}>
                <div className="grid grid-cols-3 gap-8">
                  {immigrationPathways.map((pathway) => (
                    <div key={pathway.name}>
                      <Link href={pathway.href} onClick={() => setActiveMegaMenu(null)} className="font-semibold text-brand-blue mb-3 block hover:text-brand-red transition-colors">
                        {pathway.name}
                      </Link>
                      <ul className="space-y-2">
                        {pathway.programs.map(program => (
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
              </div>
            </div>

            <Link 
              href="/b2b-partnerships" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-red",
                pathname === "/b2b-partnerships" ? "text-brand-red" : "text-foreground/80"
              )}
            >
              B2B Partnerships
            </Link>
            
            <Link 
              href="/success-stories" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-red",
                pathname === "/success-stories" ? "text-brand-red" : "text-foreground/80"
              )}
            >
              Success Stories
            </Link>

            {/* Resources Mega Menu Trigger */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveMegaMenu("resources")}
              onMouseLeave={() => setActiveMegaMenu(null)}
              onFocusCapture={() => setActiveMegaMenu("resources")}
              onBlurCapture={(event) => {
                const nextFocused = event.relatedTarget as Node | null
                if (!event.currentTarget.contains(nextFocused)) {
                  setActiveMegaMenu(null)
                }
              }}
            >
              <button
                type="button"
                aria-expanded={activeMegaMenu === "resources"}
                aria-controls="desktop-resources-menu"
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand-red py-2",
                  pathname.startsWith("/resources") ? "text-brand-red" : "text-foreground/80"
                )}
                onClick={() => toggleMegaMenu("resources")}
              >
                Resources <ChevronDown className="h-4 w-4" />
              </button>
              
              {/* Resources Dropdown */}
              <div
                id="desktop-resources-menu"
                className={cn(
                "absolute left-1/2 -translate-x-1/2 top-full w-[250px] bg-white shadow-card rounded-xl border border-border-subtle p-4 transition-all duration-200",
                activeMegaMenu === "resources" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
              )}>
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
              </div>
            </div>

            <Link 
              href="/about" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-red",
                pathname === "/about" ? "text-brand-red" : "text-foreground/80"
              )}
            >
              About
            </Link>

            <Link 
              href="/contact" 
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-red",
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
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-20 z-40 bg-white overflow-y-auto pb-20">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-6">
            <Link href="/" className="text-lg font-medium">Home</Link>
            
            <div className="space-y-3">
              <div className="text-lg font-medium text-brand-blue">Study Visas</div>
              <div className="grid grid-cols-2 gap-2 pl-4">
                {studyDestinations.slice(0, 6).map((country) => (
                  <Link 
                    key={country} 
                    href={`/study-visas/${country.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-foreground/70"
                  >
                    {country}
                  </Link>
                ))}
                <Link href="/study-visas" className="text-sm text-brand-red font-medium">Explore Study Destinations</Link>
              </div>
            </div>

            <div className="space-y-3">
              <Link href="/immigration" className="text-lg font-medium text-brand-blue block">Immigration</Link>
              <div className="grid gap-4 pl-4">
                {immigrationPathways.map((pathway) => (
                  <div key={pathway.name}>
                    <Link href={pathway.href} className="text-sm font-medium mb-2 block hover:text-brand-red">{pathway.name}</Link>
                    <div className="flex flex-wrap gap-2">
                      {pathway.programs.map(program => (
                        <Link key={program.name} href={program.href} className="text-xs bg-brand-ice px-2 py-1 rounded hover:bg-brand-red hover:text-white transition-colors">
                          {program.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/b2b-partnerships" className="text-lg font-medium">B2B Partnerships</Link>
            <Link href="/success-stories" className="text-lg font-medium">Success Stories</Link>
            
            <div className="space-y-3">
              <Link href="/resources" className="text-lg font-medium text-brand-blue block">Resources</Link>
              <div className="grid gap-2 pl-4">
                {resourcesLinks.map((link) => (
                  <Link 
                    key={link.slug} 
                    href={`/resources/${link.slug}`}
                    className="text-sm text-foreground/70"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/about" className="text-lg font-medium">About</Link>
            <Link href="/contact" className="text-lg font-medium">Contact</Link>
            
            <div className="pt-6 mt-6 border-t border-border-subtle">
              <Button asChild variant="default" className="w-full rounded-full h-12 text-base">
                <Link href="/contact">Book Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
