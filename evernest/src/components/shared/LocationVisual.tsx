import Image from "next/image"
import type { LucideIcon } from "lucide-react"
import { ArrowUpRight } from "lucide-react"

const knownLocalImages = new Set([
  "/images/destinations/australia.svg",
  "/images/destinations/azerbaijan.svg",
  "/images/destinations/canada.svg",
  "/images/destinations/cyprus.svg",
  "/images/destinations/european-union.svg",
  "/images/destinations/finland.svg",
  "/images/destinations/france.svg",
  "/images/destinations/georgia.svg",
  "/images/destinations/ireland.svg",
  "/images/destinations/italy.svg",
  "/images/destinations/malaysia.svg",
  "/images/destinations/malta.svg",
  "/images/destinations/new-zealand.svg",
  "/images/destinations/spain.svg",
  "/images/destinations/turkey.svg",
  "/images/destinations/uae.svg",
  "/images/destinations/united-kingdom.svg",
  "/images/destinations/usa.svg",
  "/images/destinations/uzbekistan.svg",
])

type LocationVisualProps = {
  title: string
  code: string
  image?: string
  badge?: string
  icon: LucideIcon
}

export function LocationVisual({
  title,
  code,
  image,
  badge,
  icon: Icon,
}: LocationVisualProps) {
  const hasLocalImage = Boolean(image && knownLocalImages.has(image))

  return (
    <div className="relative h-56 overflow-hidden rounded-[2rem] border border-white/50 bg-[linear-gradient(140deg,#0b1b3a_0%,#17316b_55%,#1e3f8d_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.24),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(225,29,46,0.28),transparent_30%)]" />
      <div className="absolute -right-10 -top-12 h-40 w-40 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm" />
      <div className="absolute bottom-0 left-0 h-28 w-28 rounded-full bg-brand-red/20 blur-2xl" />

      <div className="absolute left-5 top-5 right-5 flex items-start justify-between gap-4">
        <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-white/90 backdrop-blur-sm">
          {badge ?? "Featured"}
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </div>

      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-6">
        <div className="max-w-[52%]">
          <div className="text-[11px] font-bold uppercase tracking-[0.26em] text-white/60">
            {code}
          </div>
          <div className="mt-2 text-3xl font-display font-bold text-white">
            {title}
          </div>
        </div>

        <div className="relative flex h-32 w-32 items-center justify-center">
          {hasLocalImage ? (
            <Image
              src={image!}
              alt={title}
              fill
              className="object-contain p-2 drop-shadow-[0_20px_40px_rgba(0,0,0,0.28)]"
              sizes="128px"
            />
          ) : (
            <div className="flex h-28 w-28 items-center justify-center rounded-[1.75rem] border border-white/15 bg-white/10 text-white shadow-[0_20px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm">
              <Icon className="h-11 w-11 text-white/95" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
