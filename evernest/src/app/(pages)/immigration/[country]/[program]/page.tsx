import Link from "next/link"
import { ArrowRight, CheckCircle2, GraduationCap, MapPin, Calendar, BookOpen, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FinalCTA } from "@/components/sections/FinalCTA"

const programsData: Record<string, Record<string, any>> = {
  us: {
    "eb-2": {
      name: "EB-2 NIW",
      country: "United States",
      heroDesc: "A direct pathway to a U.S. Green Card for professionals with advanced degrees or exceptional abilities.",
      stats: [
        { label: "Processing Time", value: "Varies" },
        { label: "Sponsor Needed", value: "No" },
        { label: "Path to PR", value: "Direct" },
      ],
      benefits: [
        "No employer sponsorship or labor certification (PERM) required",
        "Self-petition allowed",
        "Includes spouse and unmarried children under 21",
        "Faster processing compared to regular EB-2",
        "Direct pathway to Permanent Residency (Green Card)"
      ],
      requirements: [
        "Advanced Degree (Master's or higher) OR Exceptional Ability in sciences, arts, or business",
        "Proposed endeavor has substantial merit and national importance",
        "Applicant is well-positioned to advance the endeavor",
        "Beneficial to waive the job offer and labor certification requirements"
      ],
      process: [
        "Initial Profile Assessment",
        "Document Gathering & Case Strategy",
        "Drafting of Support Letters & Business Plan (if applicable)",
        "I-140 Petition Filing with USCIS",
        "Adjustment of Status or Consular Processing",
        "Green Card Approval"
      ]
    }
  },
  canada: {
    "express-entry": {
      name: "Express Entry",
      country: "Canada",
      heroDesc: "The fastest and most popular pathway to Canadian Permanent Residency for skilled workers globally.",
      stats: [
        { label: "Processing Time", value: "6 Months" },
        { label: "System", value: "Points-based" },
        { label: "Path to PR", value: "Direct" },
      ],
      benefits: [
        "Fast processing time (typically 6 months from ITA)",
        "Freedom to live and work anywhere in Canada (outside Quebec)",
        "Includes spouse and dependent children",
        "Access to universal healthcare and free public education",
        "Pathway to Canadian Citizenship"
      ],
      requirements: [
        "Minimum 1 year of continuous skilled work experience",
        "Language proficiency in English and/or French (IELTS/CELPIP/TEF)",
        "Educational Credential Assessment (ECA)",
        "Proof of funds to support yourself and family",
        "Meet the minimum CRS score cutoff in a draw"
      ],
      process: [
        "ECA and Language Testing",
        "Profile Creation & Pool Entry",
        "Receive Invitation to Apply (ITA)",
        "Submit Complete PR Application (eAPR)",
        "Medical Exam & Biometrics",
        "Passport Request (PPR) & PR Confirmation"
      ]
    },
    "pnp": {
      name: "Provincial Nominee Program",
      country: "Canada",
      heroDesc: "A pathway for workers who have the skills, education and work experience to contribute to the economy of a specific Canadian province.",
      stats: [
        { label: "Processing Time", value: "11-18 Months" },
        { label: "Sponsor Needed", value: "Sometimes" },
        { label: "Path to PR", value: "Yes" },
      ],
      benefits: [
        "Direct pathway to Permanent Residency",
        "Option to apply even with lower CRS scores via Express Entry streams",
        "Targeted towards specific in-demand occupations",
        "Provincial support and community integration",
        "Includes family members"
      ],
      requirements: [
        "Meet the specific requirements of the chosen province/territory",
        "Intention to live in that specific province",
        "Relevant work experience and language proficiency",
        "May require a job offer from an employer in the province"
      ],
      process: [
        "Assess Eligibility for Provincial Streams",
        "Submit Expression of Interest (EOI) to Province",
        "Receive Provincial Nomination",
        "Submit PR Application to IRCC (Express Entry or Non-Express Entry)",
        "Medical & Background Checks",
        "PR Confirmation"
      ]
    }
  },
  australia: {
    "skilled-visas": {
      name: "Skilled Migration",
      country: "Australia",
      heroDesc: "The General Skilled Migration program is for skilled workers who want to live and work in Australia.",
      stats: [
        { label: "Visas", value: "189, 190, 491" },
        { label: "System", value: "Points-based" },
        { label: "Path to PR", value: "Yes" },
      ],
      benefits: [
        "Permanent residency pathways available (Subclass 189 & 190)",
        "Access to Medicare (Australia's public healthcare system)",
        "Sponsor eligible relatives for permanent residence",
        "Travel to and from Australia for 5 years",
        "Pathway to Australian Citizenship"
      ],
      requirements: [
        "Occupation must be on the relevant skilled occupation list",
        "Positive skills assessment for the nominated occupation",
        "Competent English (IELTS/PTE)",
        "Must score at least 65 points on the points test",
        "Under 45 years of age at the time of invitation"
      ],
      process: [
        "Skills Assessment & English Testing",
        "Submit Expression of Interest (SkillSelect)",
        "Receive Invitation to Apply (ITA)",
        "Gather Documents & Submit Visa Application",
        "Health & Character Checks",
        "Visa Grant"
      ]
    }
  }
}

import { use } from "react"

export default function ImmigrationProgramPage({ params }: { params: Promise<{ country: string, program: string }> }) {
  const resolvedParams = use(params)
  
  // Try to find the specific program data, fallback to generic
  const countryData = programsData[resolvedParams.country] || {}
  const programData = countryData[resolvedParams.program] || {
    name: resolvedParams.program.toUpperCase().replace("-", " "),
    country: resolvedParams.country.charAt(0).toUpperCase() + resolvedParams.country.slice(1).replace("-", " "),
    heroDesc: "Expert guidance for securing your residency and global mobility.",
    stats: [
      { label: "Consultation", value: "Free" },
      { label: "Support", value: "End-to-end" },
      { label: "Success", value: "High" },
    ],
    benefits: [
      "Permanent residency opportunities",
      "Family inclusion options",
      "High quality of life and healthcare",
      "Excellent education systems",
      "Pathways to citizenship"
    ],
    requirements: [
      "Valid passport and travel documents",
      "Relevant work experience or investment funds",
      "Language proficiency (if applicable)",
      "Clear criminal record and medical history"
    ],
    process: [
      "Initial Consultation & Profile Assessment",
      "Document Preparation",
      "Application Submission",
      "Interview Preparation (if required)",
      "Visa Approval"
    ]
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
              {programData.stats.map((stat: any, i: number) => (
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