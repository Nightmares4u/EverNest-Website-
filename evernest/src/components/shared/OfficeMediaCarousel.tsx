"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight, MapPin, Play } from "lucide-react"
import { useEffect, useMemo, useState } from "react"

import {
  officeBranches,
  officeMedia,
  type OfficeBranch,
  type OfficeBranchMeta,
  type OfficeMediaItem,
} from "@/data/office-media"

const AUTOPLAY_MS = 4200

export function OfficeMediaCarousel() {
  const branchOptions = useMemo(() => {
    const fromMedia = new Set(officeMedia.map((item) => item.branch))
    const merged = [...officeBranches]

    for (const branch of fromMedia) {
      if (!merged.some((entry) => entry.branch === branch)) {
        merged.push({
          branch,
          label: `${branch} Office`,
          address: "Office address will be added here.",
        })
      }
    }

    return merged
  }, [])

  const defaultBranch =
    branchOptions.find((entry) =>
      officeMedia.some((item) => item.branch === entry.branch && item.featured),
    )?.branch ??
    branchOptions.find((entry) =>
      officeMedia.some((item) => item.branch === entry.branch),
    )?.branch ??
    branchOptions[0]?.branch

  const [{ branch, index }, setCarouselState] = useState(() => ({
    branch: defaultBranch,
    index: 0,
  }))
  const [isPaused, setIsPaused] = useState(false)

  const activeBranch = branch ?? branchOptions[0]?.branch ?? "Karachi"
  const activeBranchMeta =
    branchOptions.find((entry) => entry.branch === activeBranch) ??
    ({
      branch: activeBranch,
      label: `${activeBranch} Office`,
      address: "Office address will be added here.",
    } satisfies OfficeBranchMeta)

  const branchMedia = officeMedia.filter((item) => item.branch === activeBranch)
  const safeIndex = Math.min(index, Math.max(branchMedia.length - 1, 0))
  const activeMedia = branchMedia[safeIndex]

  useEffect(() => {
    if (isPaused || branchMedia.length <= 1) {
      return
    }

    const intervalId = window.setInterval(() => {
      setCarouselState((current) => ({
        branch: current.branch,
        index: (current.index + 1) % branchMedia.length,
      }))
    }, AUTOPLAY_MS)

    return () => window.clearInterval(intervalId)
  }, [branchMedia.length, isPaused])

  const setBranch = (nextBranch: OfficeBranch) => {
    setCarouselState({
      branch: nextBranch,
      index: 0,
    })
  }

  const goToPrevious = () => {
    if (branchMedia.length <= 1) {
      return
    }

    setCarouselState((current) => ({
      branch: current.branch,
      index: (current.index - 1 + branchMedia.length) % branchMedia.length,
    }))
  }

  const goToNext = () => {
    if (branchMedia.length <= 1) {
      return
    }

    setCarouselState((current) => ({
      branch: current.branch,
      index: (current.index + 1) % branchMedia.length,
    }))
  }

  return (
    <div
      className="relative overflow-hidden rounded-[32px] border border-brand-blue/10 bg-[linear-gradient(180deg,#07122a_0%,#102447_45%,#09162f_100%)] shadow-[0_26px_70px_rgba(15,23,42,0.24)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(225,29,46,0.2),transparent_28%)]" />

      <div className="absolute left-5 right-5 top-5 z-20 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {branchOptions.map((entry) => {
            const isActive = entry.branch === activeBranch

            return (
              <button
                key={entry.branch}
                type="button"
                onClick={() => setBranch(entry.branch)}
                className={[
                  "rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur-md transition-colors",
                  isActive
                    ? "border-white/18 bg-white/18 text-white"
                    : "border-white/12 bg-white/8 text-white/75 hover:bg-white/12",
                ].join(" ")}
              >
                {entry.branch}
              </button>
            )
          })}
        </div>

        <div className="rounded-full border border-white/12 bg-black/22 px-3 py-1.5 text-xs font-semibold tracking-[0.16em] text-white/82 backdrop-blur-md">
          {branchMedia.length > 0 ? `${safeIndex + 1} / ${branchMedia.length}` : "Coming Soon"}
        </div>
      </div>

      <div className="relative aspect-[4/3] min-h-[340px] w-full sm:min-h-[400px]">
        {activeMedia ? (
          <OfficeMediaFrame item={activeMedia} isActive />
        ) : (
          <OfficeFallback branchMeta={activeBranchMeta} />
        )}

        {branchMedia.length > 1 ? (
          <>
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous office media"
              className="absolute left-4 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/14 bg-black/18 text-white backdrop-blur-md transition-colors hover:bg-black/28"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              aria-label="Next office media"
              className="absolute right-4 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/14 bg-black/18 text-white backdrop-blur-md transition-colors hover:bg-black/28"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        ) : null}

        <div className="absolute inset-x-0 bottom-0 z-10 bg-[linear-gradient(180deg,transparent_0%,rgba(7,18,42,0.28)_26%,rgba(7,18,42,0.92)_100%)] px-5 pb-5 pt-16 sm:px-6 sm:pb-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-200">
                {activeBranchMeta.label}
              </p>
              <div className="mt-3 flex items-start gap-2 text-sm leading-6 text-slate-200/88">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red-200" />
                <span>{activeBranchMeta.address}</span>
              </div>
              {activeMedia?.caption ? (
                <p className="mt-3 text-sm leading-7 text-slate-100/88">
                  {activeMedia.caption}
                </p>
              ) : branchMedia.length === 0 ? (
                <p className="mt-3 text-sm leading-7 text-slate-100/88">
                  Office media coming soon.
                </p>
              ) : null}
            </div>

            {branchMedia.length > 1 ? (
              <div className="flex items-center gap-2 self-start sm:self-auto">
                {branchMedia.map((item, mediaIndex) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      setCarouselState({
                        branch: activeBranch,
                        index: mediaIndex,
                      })
                    }
                    aria-label={`Go to media item ${mediaIndex + 1}`}
                    className={[
                      "h-2 rounded-full transition-all duration-300",
                      mediaIndex === safeIndex
                        ? "w-8 bg-white"
                        : "w-2 bg-white/35 hover:bg-white/55",
                    ].join(" ")}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

function OfficeMediaFrame({
  item,
  isActive,
}: {
  item: OfficeMediaItem
  isActive: boolean
}) {
  if (item.type === "video") {
    return (
      <div className="absolute inset-0">
        <video
          key={item.id}
          className="h-full w-full object-cover"
          autoPlay={isActive}
          muted
          loop
          playsInline
          preload="metadata"
          poster={item.poster}
        >
          <source src={item.src} />
        </video>
        <div className="pointer-events-none absolute right-5 top-20 z-10 inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/22 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/82 backdrop-blur-md">
          <Play className="h-3.5 w-3.5" />
          Video
        </div>
      </div>
    )
  }

  return (
    <div className="absolute inset-0">
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
        priority={Boolean(item.featured)}
      />
    </div>
  )
}

function OfficeFallback({ branchMeta }: { branchMeta: OfficeBranchMeta }) {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(225,29,46,0.26),transparent_28%),linear-gradient(145deg,#07122a_0%,#102447_58%,#0b1b3a_100%)]" />
      <div className="absolute inset-6 rounded-[26px] border border-white/10 bg-white/6 backdrop-blur-[2px]" />
      <div className="absolute inset-0 flex items-center justify-center px-8">
        <div className="max-w-md text-center text-white">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-red-200">
            {branchMeta.label}
          </p>
          <h3 className="mt-4 text-3xl font-display font-bold tracking-tight">
            Office media coming soon
          </h3>
          <p className="mt-4 text-sm leading-7 text-slate-200/86">
            We&apos;ll add curated branch photos and walkthrough media here as soon as the latest office assets are ready.
          </p>
        </div>
      </div>
    </div>
  )
}
