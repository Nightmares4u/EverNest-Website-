import Image from "next/image"
import Link from "next/link"
import { sirRazaProfile } from "@/data/leadership"
import { mediaFeatures } from "@/data/media"

export function LeadershipProfile() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-sm font-medium mb-6">
                Leadership
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                {sirRazaProfile.name}
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0">
                {sirRazaProfile.title}
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors"
                >
                  Book Free Consultation
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                  Partner With EN Consultants
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full max-w-md lg:max-w-lg relative">
              <div className="aspect-[4/5] relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl">
                {/* Fallback structure if image is missing */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                  <span className="text-sm font-medium">Portrait coming soon</span>
                </div>
                {/* 
                  When image is available:
                  <Image src="/images/leadership/sir-raza/portrait.jpg" alt="Sir Raza" fill className="object-cover" />
                */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio & Credentials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Leadership in Global Education Consulting
              </h2>
              <div className="space-y-4 text-lg text-slate-600 mb-10">
                {sirRazaProfile.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4">Areas of Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {sirRazaProfile.areasOfExpertise.map((area, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-sm font-medium text-slate-700">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 space-y-8">
                {sirRazaProfile.credentials.map((cred, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-slate-900 mb-2">{cred.label}</h4>
                    <p className="text-slate-600 text-sm">{cred.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media & Moments Gallery */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Media & Institutional Moments</h2>
            <p className="text-slate-600">
              Insights, speaking sessions, and representative meetings globally.
            </p>
          </div>

          {sirRazaProfile.galleryImages.length > 0 || mediaFeatures.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Render Media Features first */}
              {mediaFeatures.map((media) => (
                <div key={media.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100">
                   <div className="aspect-video bg-slate-100 relative">
                     {media.platform === 'youtube' && media.youtubeId ? (
                        <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                           {/* Replace with actual iframe on interaction or thumbnail */}
                           <span className="text-sm">YouTube Video: {media.title}</span>
                        </div>
                     ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                           <span className="text-sm">Media Placeholder</span>
                        </div>
                     )}
                   </div>
                   <div className="p-5">
                      <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-2">{media.platform}</div>
                      <h4 className="font-bold text-slate-900 mb-2">{media.title}</h4>
                      {media.description && <p className="text-sm text-slate-600">{media.description}</p>}
                   </div>
                </div>
              ))}
              
              {/* Render Gallery Images */}
              {sirRazaProfile.galleryImages.map((img, idx) => (
                <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100">
                   <div className="aspect-video bg-slate-100 relative">
                     <Image src={img.src} alt={img.alt} fill className="object-cover" />
                   </div>
                   {img.caption && (
                     <div className="p-4">
                       <p className="text-sm font-medium text-slate-700">{img.caption}</p>
                     </div>
                   )}
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white p-12 rounded-2xl border border-slate-100 text-center shadow-sm max-w-2xl mx-auto">
              <p className="text-slate-500 font-medium">Media gallery coming soon.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
