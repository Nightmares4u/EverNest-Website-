import Link from "next/link"
import { CheckCircle2, Briefcase, FileText, Globe, ArrowRight, ChevronDown, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FinalCTA } from "@/components/sections/FinalCTA"

const pageData = {
  heroTitle: "Express Entry Program for Canada",
  heroDesc: "Express Entry in Canada, being one of the fastest ways to immigrate in the country, is an application system that allows skilled workers to apply for permanent residency (PR). Based on factors like age, education, professional experience, and language, candidates can apply for PR based on regular draws.",
  
  overview: {
    title: "Express Entry Programs",
    desc: "You may qualify under one of these programs:",
    points: [
      "Federal Skilled Worker Program (FSWP): Ideal for overseas professionals from Pakistan",
      "Federal Skilled Trades Program (FSTP): For skilled tradespersons",
      "Canadian Experience Class (CEC): For people already in Canada",
      "Provincial Nominee Program (PNP): Boosts Comprehensive Ranking System (CRS) score with 600 additional points"
    ]
  },

  eligibility: {
    title: "Eligibility Criteria for Express Entry",
    desc: "To qualify for Express Entry, you must:",
    points: [
      "Be under 45 years of age",
      "Have at least 1 year of skilled work experience",
      "Score Canadian Language Benchmarks (CLB 7) or higher in IELTS General Training",
      "Hold a post-secondary degree or diploma",
      "Have sufficient funds to support yourself and your family (unless you have a job offer)"
    ]
  },

  benefits: {
    title: "Benefits of Express Entry",
    points: [
      "Fast Processing Time",
      "No Job Offer Required",
      "Path to Canadian Citizenship",
      "Live and Work Anywhere in Canada",
      "Sponsor Family Members",
      "Access to Healthcare & Education"
    ]
  },

  whyEvernest: {
    title: "What EverNest Brings to The Table",
    desc: "We equip Pakistanis with the tools to live their dream life in Canada. When you join us, here’s what you’ll get.",
    points: [
      "Licensed consultants",
      "Step-by-step profile building & document assistance",
      "High success rate with Express Entry & PNPs",
      "Transparent pricing, no hidden costs"
    ]
  },

  faq: [
    {
      q: "Can I include my spouse and children?",
      a: "Yes. You can include your spouse and dependent children in your PR application."
    },
    {
      q: "Can I apply without a job offer?",
      a: "Yes, a job offer is not required, but it can increase your Comprehensive Ranking System (CRS) score."
    },
    {
      q: "How long does Express Entry take?",
      a: "Most applications are processed within 6–8 months. This can significantly vary based on various processes."
    }
  ],

  ctaTitle: "Start Your Express Entry Journey",
  ctaDesc: "We equip Pakistanis with the tools to live their dream life in Canada. Get your profile assessed today."
}

export default function ExpressEntryPage() {
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
              Canada Immigration
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
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-brand-blue">{pageData.eligibility.title}</h2>
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed">{pageData.eligibility.desc}</p>
                <div className="bg-white rounded-2xl p-6 border border-border-subtle shadow-sm">
                  <ul className="space-y-4">
                    {pageData.eligibility.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-brand-blush flex items-center justify-center text-brand-red">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-brand-blue">{pageData.overview.title}</h2>
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed">{pageData.overview.desc}</p>
                <div className="bg-brand-ice/50 rounded-2xl p-6 border border-border-subtle">
                  <ul className="space-y-4">
                    {pageData.overview.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-xs mr-4 flex-shrink-0 mt-0.5">
                          {i + 1}
                        </div>
                        <span className="text-foreground/80 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

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
                <h2 className="text-3xl font-display font-bold text-brand-blue mb-6">{pageData.whyEvernest.title}</h2>
                <div className="bg-brand-blue text-white rounded-2xl p-8 shadow-sm">
                  <p className="text-brand-ice/90 mb-6 leading-relaxed text-lg">{pageData.whyEvernest.desc}</p>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {pageData.whyEvernest.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-brand-ice/90 text-sm font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-display font-bold text-brand-blue mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {pageData.faq.map((faq, i) => (
                    <details key={i} className="group bg-white rounded-xl border border-border-subtle overflow-hidden">
                      <summary className="flex items-center justify-between p-5 cursor-pointer bg-white hover:bg-brand-ice/30 transition-colors list-none font-bold text-brand-blue">
                        {faq.q}
                        <ChevronDown className="h-5 w-5 text-brand-blue/50 group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="p-5 pt-0 text-foreground/70 text-sm leading-relaxed border-t border-border-subtle/50 mt-2">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>

            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-white rounded-2xl p-8 border border-border-subtle shadow-card">
                <h3 className="text-2xl font-display font-bold text-brand-blue mb-4">{pageData.ctaTitle}</h3>
                <p className="text-foreground/70 mb-8">
                  {pageData.ctaDesc}
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