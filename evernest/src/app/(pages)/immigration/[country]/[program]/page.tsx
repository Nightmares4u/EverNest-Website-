import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { CheckCircle2, BookOpen, Briefcase } from "lucide-react"
import { use } from "react"

import { Button } from "@/components/ui/button"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { immigrationProgramsData } from "@/data/immigration-programs"
import { buildMetadata, getFirstSentence } from "@/lib/metadata"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string; program: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const programData =
    immigrationProgramsData[resolvedParams.country]?.[resolvedParams.program]

  if (!programData) {
    return buildMetadata({
      title: "Immigration Program",
      description: "Explore structured immigration program guidance from EverNest Consultants.",
      path: `/immigration/${resolvedParams.country}/${resolvedParams.program}`,
      keywords: ["Immigration program", "EverNest Consultants"],
    })
  }

  return buildMetadata({
    title: `${programData.name} Program`,
    description: getFirstSentence(programData.heroDesc),
    path: `/immigration/${resolvedParams.country}/${resolvedParams.program}`,
    keywords: [programData.name, `${programData.country} immigration`, "EverNest Consultants"],
  })
}

export default function ImmigrationProgramPage({ params }: { params: Promise<{ country: string, program: string }> }) {
  const resolvedParams = use(params)
  const programData =
    immigrationProgramsData[resolvedParams.country]?.[resolvedParams.program]

  if (!programData) {
    notFound()
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-brand-blue text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/globe.svg')] bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <Link href="/immigration" className="text-brand-ice/60 hover:text-white text-sm font-medium flex items-center mb-6 transition-colors">
              &larr; Back to all immigration pathways
            </Link>
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white mb-6 backdrop-blur-sm">
              {programData.country} Immigration
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              {programData.name} <span className="text-brand-red">Program</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-ice/80 mb-10 leading-relaxed max-w-2xl">
              {programData.heroDesc}
            </p>
            <div className="flex flex-wrap gap-6">
              {programData.stats.map((stat, i: number) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 min-w-[120px]">
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-brand-ice/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-brand-neutral">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Benefits */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-brand-blue">Key Benefits</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {programData.benefits.map((benefit: string, i: number) => (
                    <div key={i} className="flex items-start bg-white p-4 rounded-xl border border-border-subtle shadow-sm">
                      <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-brand-blue">Eligibility Requirements</h2>
                </div>
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-border-subtle shadow-sm">
                  <ul className="space-y-4">
                    {programData.requirements.map((req: string, i: number) => (
                      <li key={i} className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-brand-ice text-brand-blue flex items-center justify-center font-bold text-xs mr-4 flex-shrink-0 mt-0.5">
                          {i + 1}
                        </div>
                        <span className="text-foreground/80 leading-relaxed">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* The Process */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-brand-blue">Application Process</h2>
                </div>
                <div className="space-y-6">
                  {programData.process.map((step: string, i: number) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="h-8 w-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-sm z-10">
                          {i + 1}
                        </div>
                        {i !== programData.process.length - 1 && (
                          <div className="w-px h-full bg-border-subtle my-2"></div>
                        )}
                      </div>
                      <div className="pb-6 pt-1">
                        <h3 className="text-lg font-bold text-foreground mb-1">{step}</h3>
                        <p className="text-foreground/60 text-sm">We provide complete legal and documentation support.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-white rounded-2xl p-8 border border-border-subtle shadow-card">
                <h3 className="text-2xl font-display font-bold text-brand-blue mb-4">Check Your Eligibility</h3>
                <p className="text-foreground/70 mb-8">
                  Speak with our immigration specialists to find out if you qualify for the {programData.name} program.
                </p>
                <div className="space-y-4">
                  <Button asChild className="w-full" size="lg">
                    <Link href="/contact">Book Free Consultation</Link>
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
