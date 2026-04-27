"use client"

import Link from "next/link"
import { PlayCircle, Star } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Ahmed Raza",
    destination: "Masters in Italy",
    quote: "Evernest made my study visa process incredibly smooth. Their team guided me through every documentation step, ensuring my admission to a top Italian university.",
    type: "video" // Placeholder for future video implementation
  },
  {
    name: "Fatima & Family",
    destination: "Canada PR (Express Entry)",
    quote: "After months of confusion, the experts at Evernest provided a clear strategy for our Canada PR. We just received our ITA and couldn't be happier.",
    type: "text"
  },
  {
    name: "Usman Ali",
    destination: "USA EB-2 NIW",
    quote: "The level of professionalism here is unmatched. They handled my complex EB-2 NIW case with complete transparency and diligence.",
    type: "text"
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
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-blue mb-6">
              Hundreds of <span className="text-brand-red">Success Stories</span>
            </h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Don&rsquo;t just take our word for it. Hear from the individuals and families whose lives have been transformed through our pathways.
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
              View All Success Stories &rarr;
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
              className="flex flex-col bg-white shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(11,27,58,0.1)] rounded-3xl p-8 border border-border-subtle relative overflow-hidden group transition-all duration-300 hover:-translate-y-2"
            >
              {testimonial.type === 'video' && (
                <div className="absolute inset-0 bg-brand-blue/10 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer z-10">
                  <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(225,29,46,0.3)] text-brand-red transform scale-75 group-hover:scale-100 transition-transform duration-500">
                    <PlayCircle className="h-8 w-8" />
                  </div>
                </div>
              )}
              
              <div className="flex text-brand-red mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              
              <p className="text-foreground/80 italic mb-8 flex-grow">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              
              <div className="mt-auto">
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
