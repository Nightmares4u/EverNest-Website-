"use client"

import Link from "next/link"
import { ArrowRight, GraduationCap, Plane } from "lucide-react"
import { motion } from "framer-motion"

export function SplitSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Study Visa Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-3xl bg-brand-neutral p-8 lg:p-12 transition-all hover:shadow-[0_20px_40px_-15px_rgba(11,27,58,0.1)] hover:-translate-y-2 border border-border-subtle"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl -mr-20 -mt-20 transition-transform duration-700 group-hover:scale-150"></div>
            
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-blue text-white shadow-lg shadow-brand-blue/20 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
              <GraduationCap className="h-8 w-8" />
            </div>
            <h2 className="mb-6 font-display text-4xl font-bold text-brand-blue relative z-10">Study Visa Services</h2>
            
            <div className="space-y-6 mb-10 relative z-10">
              <div>
                <h3 className="text-xl font-bold text-brand-blue mb-2">University Admissions</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">We help students secure admission to universities that are a good fit for their academic profile, budget, and future aspirations. As study abroad consultants in Karachi, we assist students in university shortlisting, application submission, and offer management.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-blue mb-2">Visa Filing Support</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">Our study visa consultants in Karachi offer end-to-end visa filing assistance, including document preparation, financial file construction, and submission. You concentrate on the admission process, and we manage the visa process with care and adherence to regulations.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-blue mb-2">Course & Country Selection</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">As overseas education consultants, we help students find the most suitable courses and destinations based on career goals, alongside immigration options, to facilitate the students’ career aspirations.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-blue mb-2">Post-Study Options</h3>
                <p className="text-foreground/70 leading-relaxed text-sm">We educate students on the options to work and to stay legally in the study destination after completing their studies. We provide advisory services on work permits and other legal stay options for long-term plans towards study destinations.</p>
              </div>
            </div>

            <Link 
              href="/study-visas" 
              className="inline-flex items-center text-lg font-bold text-brand-red group-hover:text-brand-blue transition-colors relative z-10"
            >
              Explore Study Pathways
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </motion.div>

          {/* Immigration Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative overflow-hidden rounded-3xl bg-brand-blue p-8 lg:p-12 transition-all hover:shadow-[0_20px_40px_-15px_rgba(225,29,46,0.3)] hover:-translate-y-2"
          >
            <div className="absolute right-0 top-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-brand-red/20 blur-3xl transition-transform duration-700 group-hover:scale-150"></div>
            
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-brand-red backdrop-blur-md border border-white/20 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-brand-red group-hover:text-white group-hover:border-transparent">
              <Plane className="h-8 w-8" />
            </div>
            <h2 className="mb-6 font-display text-4xl font-bold text-white relative z-10">Immigration Services</h2>
            
            <div className="space-y-6 mb-10 relative z-10">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Skilled Worker Visas</h3>
                <p className="text-brand-ice/80 leading-relaxed text-sm">Our immigration consultants in Karachi support professionals in finding options for skilled worker visas based on in-demand jobs, as well as the Australia and Canada immigration pathways, and more.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Employer Sponsorships</h3>
                <p className="text-brand-ice/80 leading-relaxed text-sm">Structured job search support based on your skills, qualifications, and where you want to go. We assist you in targeting job opportunities balanced with visa sponsorship and employer expectations.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Assistance with Job Search</h3>
                <p className="text-brand-ice/80 leading-relaxed text-sm">Assistance with the Job Search provides you with specialized support based on your potential, background, and geographic preferences. We help you focus on positions that meet your visa requirements and the needs of the employers.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Short-term Work Permit</h3>
                <p className="text-brand-ice/80 leading-relaxed text-sm">Do you need assistance with securing overseas employment that will be of a short-term duration? We help with work permits of a temporary nature, taking care of the documentation and the time frames so that you can enter and remain legally.</p>
              </div>
            </div>

            <Link 
              href="/immigration" 
              className="inline-flex items-center text-lg font-bold text-white group-hover:text-brand-ice transition-colors relative z-10"
            >
              Explore Immigration Programs
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
