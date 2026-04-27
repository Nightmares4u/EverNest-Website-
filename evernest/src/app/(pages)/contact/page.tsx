import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import { siteConfig } from "@/data/site"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <>
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-brand-ice overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-brand-blue mb-6">
              Let&apos;s map out your <span className="text-brand-red">future.</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 mb-10 leading-relaxed max-w-2xl">
              Whether you&apos;re looking to study abroad, immigrate, or partner with us, our experts are ready to assist you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Details & Offices */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-display font-bold text-brand-blue mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-brand-neutral flex items-center justify-center text-brand-red mr-4 flex-shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-brand-blue">Phone</div>
                      <a href={`tel:${siteConfig.contact.phone.replace(/ /g, '')}`} className="text-foreground/70 hover:text-brand-red transition-colors">
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-brand-neutral flex items-center justify-center text-brand-red mr-4 flex-shrink-0">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-brand-blue">WhatsApp</div>
                      <a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\+/g, "")}`} className="text-foreground/70 hover:text-brand-red transition-colors">
                        {siteConfig.contact.whatsappDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-brand-neutral flex items-center justify-center text-brand-red mr-4 flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-brand-blue">Email</div>
                      <a href={`mailto:${siteConfig.contact.email}`} className="text-foreground/70 hover:text-brand-red transition-colors">
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border-subtle">
                <h2 className="text-2xl font-display font-bold text-brand-blue mb-6">Our Offices</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-brand-neutral p-6 rounded-2xl border border-border-subtle">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="h-5 w-5 text-brand-red" />
                      <h3 className="font-bold text-brand-blue">{siteConfig.pakistanOffice.label}</h3>
                    </div>
                    <div className="text-sm font-semibold text-foreground/80 mb-1">{siteConfig.pakistanOffice.city}, {siteConfig.pakistanOffice.country}</div>
                    <p className="text-sm text-foreground/60">{siteConfig.pakistanOffice.address}</p>
                  </div>

                  {siteConfig.offices.map((office, i) => (
                    <div key={i} className="bg-brand-neutral p-6 rounded-2xl border border-border-subtle">
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="h-5 w-5 text-brand-blue" />
                        <h3 className="font-bold text-brand-blue">{office.label}</h3>
                      </div>
                      <div className="text-sm font-semibold text-foreground/80 mb-1">{office.city}, {office.country}</div>
                      <p className="text-sm text-foreground/60">{office.address}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-border-subtle shadow-card h-fit">
              <h3 className="text-2xl font-display font-bold text-brand-blue mb-2">Send us a message</h3>
              <p className="text-foreground/60 mb-8">Fill out the form below and we&apos;ll get back to you shortly.</p>
              
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">First Name *</label>
                    <input required type="text" className="w-full h-12 px-4 rounded-xl border border-border-subtle bg-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Last Name *</label>
                    <input required type="text" className="w-full h-12 px-4 rounded-xl border border-border-subtle bg-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Email *</label>
                    <input required type="email" className="w-full h-12 px-4 rounded-xl border border-border-subtle bg-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Phone *</label>
                    <input required type="tel" className="w-full h-12 px-4 rounded-xl border border-border-subtle bg-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Service Interested In *</label>
                  <select required className="w-full h-12 px-4 rounded-xl border border-border-subtle bg-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all appearance-none">
                    <option value="">Select a service</option>
                    <option value="study-visa">Study Visa</option>
                    <option value="immigration">Immigration</option>
                    <option value="b2b">B2B Partnership</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Message</label>
                  <textarea rows={4} className="w-full p-4 rounded-xl border border-border-subtle bg-brand-neutral focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all resize-none"></textarea>
                </div>

                <div className="pt-4">
                  <Button type="button" className="w-full h-12 text-base">Send Message</Button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
