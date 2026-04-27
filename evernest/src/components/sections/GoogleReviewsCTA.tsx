import { siteConfig } from "@/data/site"
import { Star } from "lucide-react"

export function GoogleReviewsCTA() {
  const reviewsUrl = siteConfig.googleReviewsUrl;

  return (
    <section className="py-12 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex-1">
            <div className="flex items-center gap-1 text-amber-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Trusted by Hundreds of Students
            </h3>
            <p className="text-slate-600 max-w-xl">
              We pride ourselves on transparency and genuine success. Read verified client feedback on our official Google Business Profile.
            </p>
          </div>
          <div className="flex-shrink-0">
            {reviewsUrl ? (
              <a
                href={reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
              >
                View Google Reviews
              </a>
            ) : (
              <span className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full bg-slate-100 text-slate-500">
                Google reviews link will be added soon.
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
