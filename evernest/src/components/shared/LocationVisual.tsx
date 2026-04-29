import Image from "next/image"
import type { LucideIcon } from "lucide-react"
import { ArrowUpRight } from "lucide-react"

type LocationVisualProps = {
  title: string
  code: string
  image?: string
  imageAlt?: string
  badge?: string
  icon?: LucideIcon
  showCodeTag?: boolean
  showIconBadge?: boolean
  footerPill?: string
  showFooterCode?: boolean
}

export function LocationVisual({
  title,
  code,
  image,
  imageAlt,
  badge,
  icon: Icon,
  showCodeTag = true,
  showIconBadge = true,
  footerPill,
  showFooterCode = true,
}: LocationVisualProps) {
  return (
    <div className="relative h-56 overflow-hidden rounded-[2rem] border border-white/50 bg-[linear-gradient(145deg,#08162f_0%,#102750_54%,#183978_100%)]">
      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,42,0.08)_0%,rgba(7,18,42,0.14)_30%,rgba(7,18,42,0.48)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(7,18,42,0.32)_0%,rgba(7,18,42,0.12)_42%,rgba(7,18,42,0.16)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(225,29,46,0.18),transparent_28%)]" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(225,29,46,0.24),transparent_28%)]" />
          <div className="absolute -right-12 top-8 h-44 w-44 rounded-full border border-white/10 bg-white/5" />
          <div className="absolute -left-10 bottom-0 h-36 w-36 rounded-full bg-brand-red/18 blur-2xl" />
          <div className="absolute right-8 top-16 h-28 w-28 rounded-full border border-white/12 bg-white/6" />
        </>
      )}
      <div className="absolute inset-x-5 bottom-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="absolute left-5 top-5 right-5 flex items-start justify-between gap-4">
        <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-white/90 backdrop-blur-sm">
          {badge ?? "Featured"}
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/18 bg-white/10 text-white backdrop-blur-sm">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </div>

      <div className="relative flex h-full flex-col justify-between px-5 pb-5 pt-20">
        <div className="flex items-start justify-between gap-6">
          <div className="max-w-[62%]">
            {showCodeTag ? (
              <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/60">
                {code}
              </div>
            ) : null}
            <div className="mt-3 text-[2rem] font-display font-bold leading-tight text-white">
              {title}
            </div>
          </div>

          {showIconBadge && Icon ? (
            <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.4rem] border border-white/16 bg-white/10 text-white shadow-[0_20px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm">
              <Icon className="h-8 w-8 text-white/95" />
              <div className="absolute inset-2 rounded-[1rem] border border-white/10" />
            </div>
          ) : null}
        </div>

        <div className="flex items-end justify-between gap-4">
          {footerPill ? (
            <div className="inline-flex items-center rounded-full border border-white/18 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur-sm">
              {footerPill}
            </div>
          ) : <div />}
          {showFooterCode ? (
            <div className="text-right">
              <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/45">
                Destination Code
              </div>
              <div className="mt-2 text-lg font-semibold text-white">{code}</div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
