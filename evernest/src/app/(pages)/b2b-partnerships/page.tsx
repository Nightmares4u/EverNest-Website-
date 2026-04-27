import Link from "next/link"
import { ArrowRight, CheckCircle2, ShieldCheck, Globe2, Banknote, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { siteConfig } from "@/data/site"

export default function B2BPartnershipsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-brand-blue text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/globe.svg')] bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand-red mr-2"></span>
              Corporate Affiliation Program
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6">
              Grow your consultancy <span className="text-brand-red">with us.</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-ice/80 mb-10 leading-relaxed max-w-2xl">
              Access 500+ global institutions, priority processing, and industry-leading commission splits by joining the {siteConfig.name} partner network.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="#apply">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 bg-brand-neutral">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-blue mb-4">
              Why Partner With Evernest?
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
                Leverage our established market presence since 2013 and our satellite offices in Italy and Canada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Application */}
      <section className="py-20" id="apply">
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
                    <p className="text-foreground/70">Fill out the partnership inquiry form with your business details and current volume.</p>
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
                    <p className="text-foreground/70">Get access to our portal and dedicated manager to start routing applications immediately.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-border-subtle shadow-card">
              <h3 className="text-2xl font-display font-bold text-brand-blue mb-6">Apply for Partnership</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">First Name</label>
                    <input type="text" className="w-full h-12 px-4 rounded-xl border border-border-subtle bg-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Last Name</label>
                    <input type="text" className="w-full h-12 px-4 rounded-xl border border-border-subtle bg-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Company Name</label>
                  <input type="text" className="w-full h-12 px-4 rounded-xl border border-border-subtle bg-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" placeholder="Your Consultancy Ltd." />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Email Address</label>
                  <input type="email" className="w-full h-12 px-4 rounded-xl border border-border-subtle bg-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" placeholder="john@company.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Phone / WhatsApp</label>
                  <input type="tel" className="w-full h-12 px-4 rounded-xl border border-border-subtle bg-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" placeholder="+92 300 0000000" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">City / Country</label>
                  <input type="text" className="w-full h-12 px-4 rounded-xl border border-border-subtle bg-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" placeholder="Karachi, Pakistan" />
                </div>

                <div className="space-y-2 pt-2">
                  <Button type="button" className="w-full h-12 text-base">Submit Application</Button>
                  <p className="text-xs text-center text-foreground/50 mt-4">
                    Our B2B manager will contact you within 24-48 business hours.
                  </p>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}