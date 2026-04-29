"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ExternalLink, Quote, Star, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { siteConfig } from "@/data/site"
import type { GoogleReview } from "@/data/google-reviews"

type GoogleReviewsShowcaseProps = {
  reviews: GoogleReview[]
  compact?: boolean
}

const categoryLabels: Record<NonNullable<GoogleReview["category"]>, string> = {
  "study-visa": "Study Visa",
  "work-permit": "Work Permit",
  immigration: "Immigration",
  admission: "Admission",
  scholarship: "Scholarship",
}

function renderStars(rating: number) {
  return [...Array(5)].map((_, index) => (
    <Star
      key={index}
      className={`h-4 w-4 ${index < rating ? "fill-amber-400 text-amber-400" : "fill-transparent text-slate-300"}`}
    />
  ))
}

function ReviewModal({
  review,
  onClose,
}: {
  review: GoogleReview | null
  onClose: () => void
}) {
  useEffect(() => {
    if (!review) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    document.body.style.overflow = "hidden"
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = ""
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [review, onClose])

  if (!review) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-[#07122a]/70 p-4 backdrop-blur-sm">
      <div className="relative max-h-[88vh] w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-[0_36px_80px_rgba(7,18,42,0.32)]">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-colors hover:text-brand-red"
          aria-label="Close review"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="overflow-y-auto px-6 py-7 md:px-10 md:py-9">
          <div className="flex flex-wrap items-start justify-between gap-4 pr-12">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.24em] text-brand-blue/45">
                Verified Google Review
              </div>
              <h3 className="mt-3 text-3xl font-display font-bold text-brand-blue">
                {review.shortTitle || review.reviewerName}
              </h3>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <span className="font-semibold text-slate-900">{review.reviewerName}</span>
                {review.reviewerMeta ? <span>{review.reviewerMeta}</span> : null}
                {review.relativeDate ? <span>{review.relativeDate}</span> : null}
              </div>
              <div className="mt-4 flex items-center gap-1">
                {renderStars(review.rating)}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {review.service ? (
                <span className="rounded-full border border-brand-blue/15 bg-brand-blue/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
                  {review.service}
                </span>
              ) : null}
              {review.destination ? (
                <span className="rounded-full border border-brand-red/15 bg-brand-red/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
                  {review.destination}
                </span>
              ) : null}
              {review.category ? (
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {categoryLabels[review.category]}
                </span>
              ) : null}
            </div>
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-6">
            <Quote className="h-6 w-6 text-brand-red/75" />
            <p className="mt-4 whitespace-pre-line text-base leading-8 text-slate-700">
              {review.reviewText}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function GoogleReviewsShowcase({
  reviews,
  compact = false,
}: GoogleReviewsShowcaseProps) {
  const [activeReview, setActiveReview] = useState<GoogleReview | null>(null)
  const reviewsUrl = siteConfig.googleReviewsUrl
  const reviewCount = siteConfig.googleReviewCount
  const reviewRating = siteConfig.googleReviewRating

  return (
    <>
      <section className={`relative overflow-hidden ${compact ? "bg-white py-20" : "bg-brand-ice/40 py-24"}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(11,27,58,0.05),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(225,29,46,0.06),transparent_30%)]" />

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className={`mb-10 grid gap-6 ${compact ? "lg:grid-cols-[1.25fr_0.75fr]" : "lg:grid-cols-[1.15fr_0.85fr]"}`}>
            <div className="rounded-[2rem] border border-border-subtle bg-white p-7 shadow-sm md:p-9">
              <div className="text-sm font-bold uppercase tracking-[0.24em] text-brand-blue/45">
                Verified Google Reviews
              </div>
              <h2 className="mt-4 text-3xl font-display font-bold text-brand-blue md:text-4xl">
                Real public feedback from clients who reviewed EverNest Consultants on Google.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-foreground/70 md:text-lg">
                {compact
                  ? "A compact selection of verified reviews, chosen to add trust without overwhelming the homepage."
                  : "A selected review layer that complements real client outcomes, while keeping Google feedback clearly separate from photo and video success stories."}
              </p>
            </div>

            <div className="rounded-[2rem] border border-brand-blue/10 bg-[linear-gradient(160deg,#07122a_0%,#0c1d3d_62%,#112a57_100%)] p-7 text-white shadow-[0_24px_60px_rgba(7,18,42,0.24)] md:p-9">
              <div className="text-sm font-bold uppercase tracking-[0.24em] text-white/55">
                Verified public feedback
              </div>
              <div className="mt-5 flex items-end gap-3">
                <div className="text-5xl font-display font-bold">{reviewRating.toFixed(1)}</div>
                <div className="pb-1 text-lg text-white/75">/ 5</div>
              </div>
              <div className="mt-4 flex items-center gap-1">
                {renderStars(Math.round(reviewRating))}
              </div>
              <div className="mt-5 text-xl font-semibold">{reviewCount} Google Reviews</div>
              <p className="mt-3 text-sm leading-6 text-white/70">
                A compact verified review layer for trust, while keeping success stories and client outcomes as a separate proof system.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {reviewsUrl ? (
                  <a
                    href={reviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-brand-red px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#d51628]"
                  >
                    View All {reviewCount} Google Reviews
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                ) : (
                  <span className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white/75">
                    Google reviews link will be added soon.
                  </span>
                )}

                <Button asChild variant="outline" className="rounded-full border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white hover:text-brand-blue">
                  <Link href="/contact">Book Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className={`grid gap-6 ${compact ? "md:grid-cols-2 xl:grid-cols-3" : "md:grid-cols-2 xl:grid-cols-3"}`}>
            {reviews.map((review) => (
              <article
                key={review.id}
                className="group flex h-full flex-col rounded-[2rem] border border-border-subtle bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-22px_rgba(7,18,42,0.22)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-semibold text-brand-blue">{review.reviewerName}</div>
                    <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-sm text-foreground/45">
                      {review.reviewerMeta ? <span>{review.reviewerMeta}</span> : null}
                      {review.relativeDate ? <span>{review.relativeDate}</span> : null}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {renderStars(review.rating)}
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {review.service ? (
                    <span className="rounded-full border border-brand-blue/12 bg-brand-blue/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-blue">
                      {review.service}
                    </span>
                  ) : null}
                  {review.destination ? (
                    <span className="rounded-full border border-brand-red/12 bg-brand-red/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-red">
                      {review.destination}
                    </span>
                  ) : null}
                </div>

                {review.shortTitle ? (
                  <h3 className="mt-5 text-xl font-display font-bold leading-tight text-slate-900">
                    {review.shortTitle}
                  </h3>
                ) : null}

                <p className="mt-4 line-clamp-4 flex-grow text-sm leading-7 text-foreground/70">
                  {review.displayExcerpt || review.reviewText}
                </p>

                <div className="mt-6 flex items-center justify-between gap-4 border-t border-border-subtle pt-5">
                  {review.category ? (
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/45">
                      {categoryLabels[review.category]}
                    </span>
                  ) : <span />}
                  <button
                    type="button"
                    onClick={() => setActiveReview(review)}
                    className="text-sm font-semibold text-brand-red transition-colors hover:text-brand-blue"
                  >
                    Read full review
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ReviewModal review={activeReview} onClose={() => setActiveReview(null)} />
    </>
  )
}
