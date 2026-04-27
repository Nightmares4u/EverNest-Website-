"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/data/site"
import { motion } from "framer-motion"

export function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with slight brand tint */}
      <div className="absolute inset-0 bg-brand-blue">
        <div className="absolute inset-0 bg-[url('/globe.svg')] bg-center opacity-10 mix-blend-overlay"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Ready to shape your <span className="text-brand-red">future?</span>
          </h2>
            <p className="text-xl text-brand-ice/80 mb-12 leading-relaxed">
              Connect with our experts today for a free evaluation of your study or immigration profile. Let&rsquo;s make your global aspirations a reality.
            </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="default" className="rounded-full text-base h-14 px-8 shadow-lg shadow-brand-red/20 transition-transform hover:scale-105">
              <Link href="/contact">Book Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full text-base h-14 px-8 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-brand-blue transition-all hover:scale-105">
              <a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\+/g, "")}`} target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
