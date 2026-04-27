"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const defaultImages = [
  "/images/gallery/gallery-1.svg",
  "/images/gallery/gallery-2.svg",
  "/images/gallery/gallery-3.svg",
  "/images/gallery/gallery-4.svg",
  "/images/gallery/gallery-5.svg",
  "/images/gallery/gallery-6.svg",
]

export function GalleryStrip({ images = defaultImages }: { images?: string[] }) {
  // We duplicate the array to create a seamless loop
  const duplicatedImages = [...images, ...images]

  return (
    <section className="py-12 bg-brand-ice/20 overflow-hidden relative">
      {/* Soft gradient masks for the edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-ice/50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-ice/50 to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex">
        <motion.div 
          className="flex space-x-6 min-w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, // Adjust speed
          }}
        >
          {duplicatedImages.map((src, idx) => (
            <div 
              key={idx} 
              className="relative w-64 md:w-80 h-48 md:h-60 rounded-3xl overflow-hidden shadow-lg border border-white/50 group"
            >
              <Image 
                src={src} 
                alt="Evernest Global Campus" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 256px, 320px"
              />
              <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
