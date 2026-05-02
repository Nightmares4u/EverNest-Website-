"use client"

import Link from "next/link"
import { ArrowRight, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function B2BHighlight() {
  return (
    <section className="py-24 bg-brand-ice">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(11,27,58,0.1)] border border-border-subtle"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blush text-brand-red mb-6">
                <Briefcase className="h-6 w-6" />
              </div>
              <div className="text-sm font-bold uppercase tracking-[0.22em] text-brand-blue/45 mb-4">
                Partner Network
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-blue mb-4">
                Education Recruitment Partnerships
              </h2>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Partner with EverNest to expand your student recruitment, study visa, and immigration offering through a structured process built for consultants, sub-agents, and institutional teams.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-foreground/80">
                  <div className="h-2 w-2 rounded-full bg-brand-red mr-3"></div>
                  Clear coordination and documentation flow
                </li>
                <li className="flex items-center text-foreground/80">
                  <div className="h-2 w-2 rounded-full bg-brand-red mr-3"></div>
                  Case updates built for partner follow-up
                </li>
                <li className="flex items-center text-foreground/80">
                  <div className="h-2 w-2 rounded-full bg-brand-red mr-3"></div>
                  Access to global institutional pathways
                </li>
              </ul>

              <div>
                <Button asChild size="lg" className="rounded-full group">
                  <Link href="/b2b-partnerships">
                    Partner With EN Consultants
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-brand-blue p-8 md:p-12 lg:p-16 flex flex-col justify-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
              
              <h3 className="text-3xl font-display font-bold mb-10 relative z-10">Why partners work with EverNest</h3>
              
              <div className="grid grid-cols-2 gap-x-8 gap-y-10 relative z-10">
                <div className="group">
                  <div className="text-4xl font-display font-bold text-brand-red mb-2 group-hover:scale-105 origin-left transition-transform">Transparent</div>
                  <div className="text-sm text-brand-ice/80 font-medium">Structured, client-safe process</div>
                </div>
                <div className="group">
                  <div className="text-4xl font-display font-bold text-brand-red mb-2 group-hover:scale-105 origin-left transition-transform">Responsive</div>
                  <div className="text-sm text-brand-ice/80 font-medium">Partner communication and case updates</div>
                </div>
                <div className="group">
                  <div className="text-4xl font-display font-bold text-brand-red mb-2 group-hover:scale-105 origin-left transition-transform">500+</div>
                  <div className="text-sm text-brand-ice/80 font-medium">Global institutional access</div>
                </div>
                <div className="group">
                  <div className="text-4xl font-display font-bold text-brand-red mb-2 group-hover:scale-105 origin-left transition-transform">Professional</div>
                  <div className="text-sm text-brand-ice/80 font-medium">Partner-ready operations</div>
                </div>
              </div>

              <div className="relative z-10 mt-10 rounded-[1.5rem] border border-white/10 bg-white/8 p-5 backdrop-blur-sm">
                <div className="text-xs font-bold uppercase tracking-[0.22em] text-white/45">
                  Global contact desks
                </div>
                <div className="mt-3 grid gap-4 text-sm text-brand-ice/80 sm:grid-cols-2">
                  <div>
                    <div className="font-semibold text-white">North America</div>
                    <div>Syed Yashal</div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Europe</div>
                    <div>Mehdi Jiwani</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
