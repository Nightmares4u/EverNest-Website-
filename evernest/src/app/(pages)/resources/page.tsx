import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FinalCTA } from "@/components/sections/FinalCTA"

const resources = [
  {
    title: "Study Abroad Guide",
    slug: "study-abroad-guide",
    desc: "A comprehensive step-by-step guide for students in Karachi planning their international education journey in 2025."
  },
  {
    title: "Visa Interview Guide",
    slug: "visa-interview-guide",
    desc: "Learn how to avoid common rejections, handle financial questions, and communicate effectively during your student visa interview."
  },
  {
    title: "Country Comparison",
    slug: "country-comparison",
    desc: "Compare costs, tuition, and post-study work opportunities across top destinations like UK, Canada, Australia, and Europe."
  }
]

export default function ResourcesIndexPage() {
  return (
    <>
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-brand-blue text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/globe.svg')] bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-brand-red mb-6 backdrop-blur-sm border border-white/20">
              <BookOpen className="h-8 w-8" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6">
              Expert <span className="text-brand-red">Resources</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-ice/80 mb-10 leading-relaxed">
              Explore our comprehensive guides, step-by-step instructions, and expert advice to simplify your immigration and study abroad journey.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-ice/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <div key={resource.slug} className="flex flex-col bg-white rounded-3xl p-8 border border-border-subtle shadow-sm hover:shadow-card transition-shadow group">
                <h2 className="text-2xl font-display font-bold text-brand-blue mb-4 group-hover:text-brand-red transition-colors">{resource.title}</h2>
                <p className="text-foreground/70 mb-8 flex-grow leading-relaxed">{resource.desc}</p>
                <Button asChild variant="outline" className="w-full mt-auto group/btn">
                  <Link href={`/resources/${resource.slug}`}>
                    Read Guide
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}