"use client"

import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

const reasons = [
  {
    title: "Personalized Advisory",
    desc: "EverNest Consultants, being study abroad consultants in Karachi and study visa consultants in Karachi, provide systematized, profile-based guidance to students and professionals for overseas education and visa options."
  },
  {
    title: "End-to-End Immigration Support",
    desc: "We offer immigration services from Karachi, handling everything from documentation to process management and compliance concerning study immigration, work permits, and permanent settlement visas. As trusted immigration consultants, we manage each case with due diligence and compliance to the prevailing laws and regulations."
  }
]

export function WhyEvernest() {
  return (
    <section className="py-24 bg-brand-blue text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold text-white mb-6 backdrop-blur-sm border border-white/20 tracking-wide uppercase">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-bold mb-12">
              EverNest Consultants - Trusted Support to <span className="text-brand-red">Move Abroad</span>
            </h2>
            
            <div className="grid sm:grid-cols-1 gap-x-8 gap-y-10">
              {reasons.map((reason, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  key={reason.title} 
                  className="group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-8 w-8 rounded-full bg-brand-red/10 flex items-center justify-center group-hover:bg-brand-red transition-colors">
                      <CheckCircle2 className="h-5 w-5 text-brand-red group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-bold text-lg">{reason.title}</h3>
                  </div>
                  <p className="text-sm text-brand-ice/70 leading-relaxed pl-11">
                    {reason.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Abstract decorative element representing growth/global reach */}
            <div className="aspect-square rounded-full border border-white/10 p-8 relative">
              <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="w-full h-full rounded-full border border-white/20 p-8 relative">
                <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-brand-red to-brand-red/20 opacity-90 blur-3xl animate-pulse"></div>
              </div>
            </div>
            
            {/* Overlay stats box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-10 left-0 bg-white text-brand-blue p-8 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] max-w-xs border border-white/10 backdrop-blur-md"
            >
              <div className="text-5xl font-display font-bold text-brand-red mb-2">13+</div>
              <div className="font-bold text-lg mb-2">Years of Experience</div>
              <div className="text-sm text-foreground/70 leading-relaxed">Registered in 2013, supporting study, immigration, and partner cases with a structured process.</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
