import type { Metadata } from "next"
import { ShieldCheck, Globe2, Banknote, Clock } from "lucide-react"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { CinematicPageHero } from "@/components/shared/CinematicPageHero"
import { PartnershipInquiryForm } from "@/components/shared/PartnershipInquiryForm"
import { siteConfig } from "@/data/site"
import { buildMetadata } from "@/lib/metadata"

export const metadata: Metadata = buildMetadata({
  title: "B2B Partnerships",
  description:
    "Partner with EverNest Consultants, the trading name of EN Consultants (Pvt) Ltd., to expand student recruitment, study visa, and immigration services through a structured B2B collaboration network.",
  path: "/b2b-partnerships",
  keywords: ["B2B partnerships", siteConfig.legalName, "student recruitment partnerships", "education consultancy partnerships"],
})

export default function B2BPartnershipsPage() {
  return (
    <>
      {/* Hero */}
      <CinematicPageHero
        variant="partnership"
        eyebrow="Strategic Partner Network"
        icon={<ShieldCheck className="h-7 w-7" />}
        title={<>Grow your education consultancy <span className="text-brand-red">with EverNest.</span></>}
        subtitle="Access 500+ global institutions, structured case coordination, and partner-focused support for student recruitment and visa referrals."
        chips={["500+ institutions", "Priority processing", "Partner support", "Since 2013"]}
        ctas={[{ href: "#apply", label: "Become a Partner" }]}
        galleryImages={[
          { src: "/images/offices/karachi/karachi-pic-1.png", alt: "EverNest Karachi office" },
          { src: "/images/trust/training/team-training-session.jpg", alt: "EverNest team training session" },
          { src: "/images/partners/logos/university-of-glasgow.jpeg", alt: "University partner network" },
        ]}
        visualLabel="Institutional network"
      />

      {/* Partner Benefits */}
      <section className="py-20 bg-brand-neutral">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-blue mb-4">
              Why Partner With EverNest?
            </h2>
            <p className="text-lg text-foreground/70">
              We help education consultants, visa agents, and sub-agents offer stronger international study and immigration pathways without building every institutional relationship directly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-border-subtle shadow-sm">
              <div className="h-12 w-12 rounded-xl bg-brand-ice text-brand-blue flex items-center justify-center mb-6">
                <Banknote className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">High Commissions</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Enjoy transparent and competitive revenue sharing with fast payouts upon successful enrollments.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-border-subtle shadow-sm">
              <div className="h-12 w-12 rounded-xl bg-brand-ice text-brand-blue flex items-center justify-center mb-6">
                <Globe2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">Global Access</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Instantly offer your clients access to top universities in the US, UK, Canada, Europe, and Australia.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-border-subtle shadow-sm">
              <div className="h-12 w-12 rounded-xl bg-brand-ice text-brand-blue flex items-center justify-center mb-6">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">Priority Processing</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Skip the queue. Our dedicated B2B team ensures your applications are processed and reviewed on priority.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-border-subtle shadow-sm">
              <div className="h-12 w-12 rounded-xl bg-brand-ice text-brand-blue flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">Brand Credibility</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Leverage our established market presence since 2013 and a professional process built around clear communication and responsible partner support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Application */}
      <section className="py-20 scroll-mt-28" id="apply">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            <div>
              <h2 className="text-3xl font-display font-bold text-brand-blue mb-6">
                Partnership process
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-10 w-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold">1</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-blue mb-2">Submit Application</h3>
                    <p className="text-foreground/70">Complete the inquiry form with your business details. A WhatsApp draft will open for your review before you send it to our team.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-10 w-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold">2</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-blue mb-2">Due Diligence</h3>
                    <p className="text-foreground/70">Our team will review your profile to ensure alignment with our ethical standards and quality requirements.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-10 w-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold">3</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-blue mb-2">Sign Agreement</h3>
                    <p className="text-foreground/70">Sign the B2B partnership MoU detailing commission structures and operational guidelines.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-10 w-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold">4</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-blue mb-2">Start Processing</h3>
                    <p className="text-foreground/70">Once aligned, our team will map out the documentation, coordination process, and next operational step with you.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <PartnershipInquiryForm />

          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
