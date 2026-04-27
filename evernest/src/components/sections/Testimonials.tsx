"use client"

import Link from "next/link"
import { ArrowRight, Quote } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Ahmed Raza",
    destination: "Masters in Italy",
    quote: "EverNest made my study visa process incredibly smooth. Their team guided me through every documentation step, ensuring my admission to a top Italian university.",
    type: "study"
  },
  {
    name: "Fatima & Family",
    destination: "Canada PR (Express Entry)",
    quote: "After months of confusion, the experts at EverNest provided a clear strategy for our Canada PR. We just received our ITA and couldn't be happier.",
    type: "immigration"
  },
  {
    name: "Usman Ali",
    destination: "USA EB-2 NIW",
    quote: "The level of professionalism here is unmatched. They handled my complex EB-2 NIW case with complete transparency and diligence.",
    type: "immigration"
  }
]

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="text-sm font-bold uppercase tracking-[0.22em] text-brand-blue/45">
              Selected Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-blue mb-6">
              Selected <span className="text-brand-red">Success Stories</span>
            </h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              A more grounded look at the kinds of student and immigration outcomes clients come to us for.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/success-stories" 
              className="inline-flex items-center justify-center px-6 py-3 bg-brand-red/10 text-brand-red font-bold rounded-full hover:bg-brand-red hover:text-white transition-colors whitespace-nowrap duration-300"
            >
              View All Success Stories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={i} 
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-border-subtle bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_50px_-18px_rgba(11,27,58,0.16)]"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full bg-brand-blue/8 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-brand-blue/70">
                  {testimonial.type === "study" ? "Study Visa" : "Immigration"}
                </span>
                <Quote className="h-8 w-8 text-brand-red/30 transition-transform group-hover:scale-110" />
              </div>

              <p className="mt-6 flex-grow text-foreground/80 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              
              <div className="mt-8 border-t border-border-subtle pt-5">
                <div className="font-bold text-brand-blue">{testimonial.name}</div>
                <div className="text-sm text-foreground/60">{testimonial.destination}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
