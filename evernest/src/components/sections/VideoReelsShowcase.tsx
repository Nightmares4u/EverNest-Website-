import Link from "next/link"
import { ArrowUpRight, Sparkles } from "lucide-react"

import { activeVideoReels } from "@/data/video-reels"

export function VideoReelsShowcase() {
  if (!activeVideoReels.length) {
    return null
  }

  const [featuredReel, ...supportingReels] = activeVideoReels
  const hasMultipleReels = activeVideoReels.length > 1

  return (
    <section className="relative overflow-hidden bg-white py-10 text-white lg:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(225,29,46,0.09),transparent_28%),radial-gradient(circle_at_88%_72%,rgba(26,58,110,0.08),transparent_30%)]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,#07122a_0%,#0b1b3a_58%,#102b5a_100%)] px-5 py-6 shadow-[0_28px_80px_-42px_rgba(7,18,42,0.7)] sm:px-7 lg:px-10 lg:py-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_16%,rgba(225,29,46,0.24),transparent_34%),radial-gradient(circle_at_84%_16%,rgba(26,58,110,0.34),transparent_34%)]" />
          <div className="absolute inset-0 bg-grid-soft opacity-[0.045]" />

          <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(220px,280px)] lg:items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-brand-ice shadow-sm backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-brand-red" />
              Video Reels
            </div>
            <h2 className="mt-4 text-3xl font-display font-bold tracking-[-0.02em] text-white md:text-4xl lg:text-[2.75rem]">
              From ambition to Sapienza University.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-brand-ice/76 md:text-lg">
              Hanzala&apos;s success reel captures a real student outcome: admission to Sapienza University of Rome, Italy&apos;s #1 university and one of the oldest universities in the world.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={featuredReel.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white shadow-glow transition-colors hover:bg-brand-red-2"
              >
                Watch on YouTube
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/study-visas/italy"
                className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/8 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/14"
              >
                Explore Italy Study Visas
              </Link>
            </div>

            {hasMultipleReels ? (
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {supportingReels.map((reel) => (
                  <article
                    key={reel.id}
                    className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur"
                  >
                    <div className="text-xs font-bold uppercase tracking-[0.22em] text-brand-red">
                      {reel.label}
                    </div>
                    <h3 className="mt-2 text-lg font-bold text-white">{reel.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-brand-ice/68">
                      {reel.description}
                    </p>
                  </article>
                ))}
              </div>
            ) : null}
          </div>

          <article className="mx-auto w-full max-w-[245px] sm:max-w-[260px] lg:max-w-[280px]">
            <div className="rounded-[1.45rem] border border-white/14 bg-white/[0.08] p-2.5 shadow-[0_22px_58px_-34px_rgba(0,0,0,0.84)] backdrop-blur">
              <div className="overflow-hidden rounded-[1.05rem] border border-white/10 bg-slate-950">
                <div className="aspect-[9/16]">
                  <iframe
                    src={`${featuredReel.embedUrl}?rel=0&modestbranding=1&playsinline=1`}
                    title={featuredReel.title}
                    className="h-full w-full"
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </article>
          </div>
        </div>
      </div>
    </section>
  )
}
