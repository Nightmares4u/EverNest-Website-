import Image from "next/image"
import { partnerGallery } from "@/data/partner-gallery"

export function PartnerGallery() {
  if (partnerGallery.length === 0) {
    return null; // Hide if no data
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Partner & Representative Gallery</h2>
          <p className="text-slate-600">
            A glimpse into our institutional engagements and global education network.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {partnerGallery.map((item) => (
            <div key={item.id} className="group flex flex-col bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
              <div className="relative aspect-[4/3] bg-slate-200 overflow-hidden">
                <Image
                  src={item.imagePath}
                  alt={item.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  {item.category.replace("-", " ")}
                </div>
                <p className="font-medium text-slate-900">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
