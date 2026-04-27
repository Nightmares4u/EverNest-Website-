import Link from "next/link"
import { CheckCircle2, Globe, BookOpen, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FinalCTA } from "@/components/sections/FinalCTA"

const pageData = {
  heroTitle: "J-1 Visa",
  heroDesc: "The J-1 Visa is a non-immigrant visa designed for individuals approved to participate in work and study-based exchange visitor programs.",
  
  benefits: {
    title: "Here’s Why People Go for the J-1 Visa",
    points: [
      "Allows you to gain international experience while participating in cultural exchange programs.",
      "Ideal for students or young professionals seeking short-term practical experience.",
      "Programs are available across hospitality, business, healthcare, education, and more.",
      "Dependents (J-2 visa holders) can accompany you and may be eligible to work in the U.S."
    ]
  },

  process: {
    title: "Here’s How You Apply:",
    steps: [
      "Find a Sponsor to receive a DS-2019 form.",
      "Pay the SEVIS fee.",
      "Complete the DS-160 visa application.",
      "Attend the visa interview after scheduling it."
    ]
  },

  comparison: {
    title: "Which One is Better? (J-1 vs H-1B)",
    points: [
      "Purpose: J-1 is for Cultural exchange and training. H-1B is for Employment in specialty occupations.",
      "Eligibility: J-1 for Students, trainees, and scholars. H-1B for Professionals with a bachelor's degree or higher.",
      "Sponsorship: J-1 by a U.S. government-approved program sponsor. H-1B by a U.S. employer.",
      "Duration: J-1 is 6 months to 5 years (varies by program). H-1B is up to 6 years (initial 3 years + extension).",
      "Work Authorization: J-1 is Limited, depending on the program. H-1B is Full-time work with a sponsoring employer.",
      "Dependents: J-2 dependents may apply for work. H-4 dependents may apply (with restrictions).",
      "Green Card Path: J-1 is Limited, generally not a direct pathway. H-1B Yes, can transition to permanent residency."
    ]
  },

  whyEvernest: {
    title: "Having trouble choosing?",
    desc: "Get in touch with EverNest. You start packing your bags, and we’ll initiate your visa process."
  }
}

export default function J1VisaPage() {
  return (
    <>
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-brand-blue text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/globe.svg')] bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <Link href="/immigration" className="text-brand-ice/60 hover:text-white text-sm font-medium flex items-center mb-6 transition-colors">
              &larr; Back to all immigration pathways
            </Link>
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white mb-6 backdrop-blur-sm">
              U.S. Immigration
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              {pageData.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-brand-ice/80 mb-10 leading-relaxed max-w-3xl">
              {pageData.heroDesc}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-neutral">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 space-y-16">
              
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                    <Globe className="h-5 w-5" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-brand-blue">{pageData.benefits.title}</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {pageData.benefits.points.map((point, i) => (
                    <div key={i} className="flex items-start bg-white p-4 rounded-xl border border-border-subtle shadow-sm">
                      <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80 font-medium">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-brand-blue">{pageData.process.title}</h2>
                </div>
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border-subtle before:to-transparent">
                  {pageData.process.steps.map((step, i) => (
                    <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand-blue text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                        {i + 1}
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-border-subtle shadow-sm">
                        <p className="text-foreground/80 text-sm font-medium">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                    <Layers className="h-5 w-5" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-brand-blue">{pageData.comparison.title}</h2>
                </div>
                <div className="bg-brand-ice/50 rounded-2xl p-6 border border-border-subtle">
                  <ul className="space-y-4">
                    {pageData.comparison.points.map((point, i) => {
                      const [label, desc] = point.split(": ")
                      return (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80 leading-relaxed text-sm">
                            <strong className="text-brand-blue">{label}:</strong> {desc}
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-display font-bold text-brand-blue mb-6">{pageData.whyEvernest.title}</h2>
                <div className="bg-brand-blue text-white rounded-2xl p-8 shadow-sm">
                  <p className="text-brand-ice/90 leading-relaxed text-lg">{pageData.whyEvernest.desc}</p>
                </div>
              </div>

            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-white rounded-2xl p-8 border border-border-subtle shadow-card">
                <h3 className="text-2xl font-display font-bold text-brand-blue mb-4">Start Your Journey</h3>
                <p className="text-foreground/70 mb-8">
                  Get in touch with EverNest. You start packing your bags, and we’ll initiate your visa process.
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
