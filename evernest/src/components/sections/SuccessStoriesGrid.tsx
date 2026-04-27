import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

import { successStories } from "@/data/success-stories"

export function SuccessStoriesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="success-stories">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Real Clients, <span className="text-red-600">Real Success</span>
          </h2>
          <p className="text-lg text-slate-600">
            Don&apos;t just take our word for it. Here are stories from students and professionals we have successfully guided toward their global goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <div
              key={story.id}
              className="group relative bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100">
                {story.imagePath ? (
                  <Image
                    src={story.imagePath}
                    alt={story.imageAlt}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-slate-400">
                    <span className="text-sm font-medium">Image coming soon</span>
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-900 shadow-sm">
                  {story.destinationCountry || story.serviceType}
                </div>
                {story.outcomeLabel && (
                  <div className="absolute top-4 right-4 bg-green-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white shadow-sm">
                    {story.outcomeLabel}
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-slate-900">
                    {story.privacyMode === "initials"
                      ? story.clientName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                      : story.privacyMode === "firstName"
                      ? story.clientName.split(" ")[0]
                      : story.clientName}
                  </h3>
                  {story.rating && (
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  )}
                </div>

                <div className="mb-4 text-sm font-medium text-red-600">
                  {story.serviceType}
                </div>

                <blockquote className="text-slate-600 italic text-sm mb-6 flex-grow">
                  &quot;{story.displayQuote || story.testimonialQuote}&quot;
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors"
          >
            Start Your Application
          </Link>
        </div>
      </div>
    </section>
  )
}
