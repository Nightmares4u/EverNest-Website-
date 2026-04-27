import type { LucideIcon } from "lucide-react"
import { ArrowUpRight } from "lucide-react"

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
  badge,
  icon: Icon,
}: LocationVisualProps) {
  return (
    <div className="relative h-56 overflow-hidden rounded-[2rem] border border-white/50 bg-[linear-gradient(145deg,#08162f_0%,#102750_54%,#183978_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(225,29,46,0.24),transparent_28%)]" />
      <div className="absolute -right-12 top-8 h-44 w-44 rounded-full border border-white/10 bg-white/5" />
      <div className="absolute -left-10 bottom-0 h-36 w-36 rounded-full bg-brand-red/18 blur-2xl" />
      <div className="absolute right-8 top-16 h-28 w-28 rounded-full border border-white/12 bg-white/6" />
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
            <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/60">
              {code}
            </div>
            <div className="mt-3 text-[2rem] font-display font-bold leading-tight text-white">
              {title}
            </div>
          </div>

          <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.4rem] border border-white/16 bg-white/10 text-white shadow-[0_20px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm">
            <Icon className="h-8 w-8 text-white/95" />
            <div className="absolute inset-2 rounded-[1rem] border border-white/10" />
          </div>
        </div>

        <div className="flex items-end justify-between gap-4">
          <div className="inline-flex items-center rounded-full border border-white/18 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur-sm">
            Global student route
          </div>
          <div className="text-right">
            <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/45">
              Destination Code
            </div>
            <div className="mt-2 text-lg font-semibold text-white">{code}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
