"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/data/site"
import { motion } from "framer-motion"

export function FinalCTA() {
  return (
    <section
      className="relative py-24 overflow-hidden bg-noise"
      style={{ background: "radial-gradient(120% 120% at 100% 100%, #1a3a6e 0%, #0b1b3a 45%, #07122a 100%)" }}
    >
      <div className="absolute inset-0 bg-[url('/globe.svg')] bg-center opacity-10 mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-red/12 blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-white/40 mb-6 flex items-center justify-center gap-3">
            <span className="inline-block w-8 h-px bg-brand-red" />
            Get Started
            <span className="inline-block w-8 h-px bg-brand-red" />
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-[-0.02em] text-white mb-6">
            Ready to shape your <span className="text-brand-red">future?</span>
          </h2>
          <p className="text-xl text-brand-ice/80 mb-12 leading-relaxed">
            Connect with our experts today for a free evaluation of your study or immigration profile. Let&rsquo;s make your global aspirations a reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="default"
              className="rounded-full text-base h-14 px-8 shadow-glow hover:-translate-y-1 transition-transform"
            >
              <Link href="/contact">Book Free Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full text-base h-14 px-8 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-brand-blue transition-all hover:-translate-y-1"
            >
              <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
