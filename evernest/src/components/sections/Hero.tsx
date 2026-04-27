"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative bg-brand-ice pt-24 pb-32 md:pt-40 md:pb-48 overflow-hidden">
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
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-brand-blue/20 bg-white/60 px-4 py-1.5 text-sm font-bold text-brand-blue mb-8 backdrop-blur-md shadow-sm"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-brand-red mr-2.5 animate-pulse"></span>
            Registered Since 2013
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-brand-blue mb-8 leading-[1.1]"
          >
            Your Trusted Immigration Consultants to <span className="text-brand-red relative inline-block">Move Abroad<motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8, duration: 0.6 }} className="absolute -bottom-2 left-0 w-full h-1 bg-brand-red origin-left"></motion.span></span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-brand-blue/80 mb-12 max-w-3xl leading-relaxed font-medium"
          >
            Evernest Consultants offers professional immigration services in Karachi, assisting students and professionals with overseas admissions, study visa applications, work permit acquisition, and long-term immigration options. As seasoned study abroad consultants in Karachi and study visa consultants in Karachi, we provide precise and compliant regulatory advisory services to our clients for prospective opportunities in Canada, the UK, Australia, Europe, and the United States.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg" className="rounded-full text-base h-14 px-8 shadow-lg shadow-brand-red/20 transition-transform hover:scale-105">
              <Link href="/contact">Book Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full text-base h-14 px-8 bg-white/60 backdrop-blur-sm border-brand-blue/30 text-brand-blue hover:bg-brand-blue hover:text-white transition-all hover:scale-105">
              <Link href="/study-visas">Explore Destinations</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
