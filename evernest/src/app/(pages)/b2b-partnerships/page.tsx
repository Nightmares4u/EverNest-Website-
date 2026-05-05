import type { Metadata } from "next"
import { ArrowUpRight, Clock, Globe2, Banknote, PlayCircle, ShieldCheck } from "lucide-react"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { CinematicPageHero } from "@/components/shared/CinematicPageHero"
import { PartnershipInquiryForm } from "@/components/shared/PartnershipInquiryForm"
import { siteConfig } from "@/data/site"
import { buildMetadata } from "@/lib/metadata"

export const metadata: Metadata = buildMetadata({
  title: "B2B Partnerships",
  description:
    "Explore B2B partnerships with EverNest Consultants, the trading name of EN Consultants (Pvt) Ltd., for institutional collaboration and recruitment support.",
  path: "/b2b-partnerships",
  keywords: ["B2B partnerships", siteConfig.legalName, "student recruitment partnerships", "education consultancy partnerships"],
})

const b2bReel = {
  title: "Inside EverNest's Partner Network",
  label: "B2B Partnership Reel",
  description:
    "A short look at how EverNest supports partner consultants through structured coordination, institutional access, and priority case handling.",
  sourceUrl: "https://youtube.com/shorts/iRrajUzR4B0",
  embedUrl: "https://www.youtube.com/embed/iRrajUzR4B0",
}

function B2BHeroReel() {
  return (
    <div className="relative mx-auto w-full max-w-[25rem]">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-brand-red/16 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/14 bg-white/[0.08] p-3 shadow-[0_30px_90px_-38px_rgba(0,0,0,0.78)] backdrop-blur-md">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.12),transparent_32%),radial-gradient(circle_at_95%_90%,rgba(225,29,46,0.2),transparent_34%)]" />

        <div className="relative mx-auto max-w-[18rem] overflow-hidden rounded-[1.35rem] border border-white/12 bg-slate-950">
          <div className="aspect-[9/16]">
            <iframe
              src={`${b2bReel.embedUrl}?rel=0&modestbranding=1&playsinline=1`}
              title={b2bReel.title}
              className="h-full w-full"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        <div className="relative mt-4 rounded-[1.25rem] border border-white/10 bg-white/[0.07] p-4">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-brand-red">
            <PlayCircle className="h-3.5 w-3.5" />
            {b2bReel.label}
          </div>
          <h2 className="mt-2 text-2xl font-display font-bold leading-tight text-white">
            {b2bReel.title}
          </h2>
          <p className="mt-2 text-sm leading-6 text-brand-ice/72">
            {b2bReel.description}
          </p>
          <a
            href={b2bReel.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-red px-4 py-2.5 text-sm font-bold text-white shadow-glow transition-colors hover:bg-brand-red-2"
          >
            Watch on YouTube
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function B2BPartnershipsPage() {
  return (
    <>
      {/* Hero */}
      <CinematicPageHero
        variant="partnership"
        eyebrow="Corporate Affiliation Program"
        icon={<ShieldCheck className="h-7 w-7" />}
        title={<>Grow your consultancy <span className="text-brand-red">with us.</span></>}
        subtitle={`Access 500+ global institutions, priority processing, and industry-leading commission splits by joining the ${siteConfig.name} partner network.`}
        chips={["500+ institutions", "Priority processing", "Partner support", "Since 2013"]}
        ctas={[{ href: "#apply", label: "Partner With EN Consultants" }]}
        visual={<B2BHeroReel />}
      />

      {/* Partner Benefits */}
      <section className="py-20 bg-brand-neutral">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-blue mb-4">
              Why Partner With EverNest?
            </h2>
            <p className="text-lg text-foreground/70">
              We empower local agents and consultants to offer premium international services without the overhead of direct affiliations.
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
                How it works
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-10 w-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold">1</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-blue mb-2">Submit Application</h3>
                    <p className="text-foreground/70">Share your business details through the partnership inquiry form and open a draft message in WhatsApp for review before you send it.</p>
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
