import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react"

type HeroVariant = "study" | "immigration" | "partnership" | "resources" | "article"

type HeroImage = {
  src: string
  alt: string
}

type HeroCta = {
  href: string
  label: string
  variant?: "primary" | "secondary"
  external?: boolean
}

type HeroStat = {
  value: string
  label: string
}

type CinematicPageHeroProps = {
  eyebrow?: string
  icon?: ReactNode
  title: ReactNode
  subtitle: string
  backLink?: {
    href: string
    label: string
  }
  chips?: string[]
  ctas?: HeroCta[]
  stats?: HeroStat[]
  image?: HeroImage
  galleryImages?: HeroImage[]
  visualLabel?: string
  variant?: HeroVariant
  center?: boolean
}

const variantClasses: Record<HeroVariant, { glow: string; wash: string; label: string }> = {
  study: {
    glow: "from-brand-red/30 via-white/10 to-brand-blue-light/24",
    wash: "bg-[radial-gradient(circle_at_78%_18%,rgba(225,29,46,0.22),transparent_28%),radial-gradient(circle_at_8%_88%,rgba(255,255,255,0.1),transparent_30%)]",
    label: "Study route",
  },
  immigration: {
    glow: "from-brand-blue-light/34 via-white/8 to-brand-red/24",
    wash: "bg-[radial-gradient(circle_at_72%_18%,rgba(26,58,110,0.34),transparent_28%),radial-gradient(circle_at_12%_84%,rgba(225,29,46,0.16),transparent_30%)]",
    label: "Global route",
  },
  partnership: {
    glow: "from-brand-red/30 via-white/10 to-brand-blue-light/28",
    wash: "bg-[radial-gradient(circle_at_76%_16%,rgba(225,29,46,0.24),transparent_28%),radial-gradient(circle_at_10%_82%,rgba(255,255,255,0.1),transparent_30%)]",
    label: "Partner network",
  },
  resources: {
    glow: "from-white/14 via-brand-red/22 to-brand-blue-light/30",
    wash: "bg-[radial-gradient(circle_at_76%_16%,rgba(255,255,255,0.12),transparent_26%),radial-gradient(circle_at_12%_84%,rgba(225,29,46,0.16),transparent_30%)]",
    label: "Guide map",
  },
  article: {
    glow: "from-brand-red/24 via-white/12 to-brand-blue-light/28",
    wash: "bg-[radial-gradient(circle_at_80%_18%,rgba(255,255,255,0.14),transparent_27%),radial-gradient(circle_at_8%_82%,rgba(225,29,46,0.16),transparent_30%)]",
    label: "Reading route",
  },
}

export function CinematicPageHero({
  eyebrow,
  icon,
  title,
  subtitle,
  backLink,
  chips = [],
  ctas = [],
  stats = [],
  image,
  galleryImages = [],
  visualLabel,
  variant = "study",
  center = false,
}: CinematicPageHeroProps) {
  const visualImages = [image, ...galleryImages].filter(Boolean).slice(0, 3) as HeroImage[]
  const theme = variantClasses[variant]

  return (
    <section className="relative overflow-hidden bg-brand-blue pt-24 pb-16 text-white md:pt-32 md:pb-24">
      {image ? (
        <div className="absolute inset-0">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="cinematic-hero-drift object-cover opacity-[0.54]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,18,42,0.88)_0%,rgba(7,18,42,0.72)_42%,rgba(7,18,42,0.48)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,42,0.58)_0%,rgba(7,18,42,0.2)_44%,rgba(7,18,42,0.76)_100%)]" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#07122a_0%,#0b1b3a_48%,#102b5a_100%)]" />
      )}

      <div className={`absolute inset-0 ${theme.wash}`} />
      <div aria-hidden="true" className="absolute inset-0 bg-grid-soft opacity-[0.055]" />
      <RouteOverlay />
      <div className={`absolute -right-24 top-8 h-[34rem] w-[34rem] rounded-full bg-gradient-to-br ${theme.glow} blur-3xl`} />
      <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-brand-red/12 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div
          className={`grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.72fr)] lg:items-center ${
            center ? "text-center lg:text-left" : ""
          }`}
        >
          <div className={center ? "mx-auto max-w-4xl lg:mx-0" : "max-w-4xl"}>
            {backLink ? (
              <Link
                href={backLink.href}
                className={`mb-6 inline-flex items-center text-sm font-medium text-brand-ice/68 transition-colors hover:text-white ${
                  center ? "justify-center lg:justify-start" : ""
                }`}
              >
                &larr; {backLink.label}
              </Link>
            ) : null}

            <div
              className={`flex flex-wrap items-center gap-3 ${
                center ? "justify-center lg:justify-start" : ""
              }`}
            >
              {icon ? (
                <div className="cinematic-hero-reveal grid h-14 w-14 place-items-center rounded-2xl border border-white/18 bg-white/10 text-brand-red shadow-[0_18px_50px_-26px_rgba(225,29,46,0.7)] backdrop-blur-sm">
                  {icon}
                </div>
              ) : null}
              {eyebrow ? (
                <div className="cinematic-hero-reveal inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-brand-ice shadow-sm backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-red shadow-[0_0_18px_rgba(225,29,46,0.8)]" />
                  {eyebrow}
                </div>
              ) : null}
            </div>

            <h1 className="cinematic-hero-reveal mt-6 text-4xl font-display font-bold leading-[1.04] tracking-[-0.025em] text-white md:text-5xl lg:text-6xl xl:text-7xl">
              {title}
            </h1>
            <p className="cinematic-hero-reveal mt-6 max-w-3xl text-lg font-medium leading-relaxed text-brand-ice/86 md:text-xl">
              {subtitle}
            </p>

            {chips.length ? (
              <div
                className={`cinematic-hero-reveal mt-8 flex flex-wrap gap-3 ${
                  center ? "justify-center lg:justify-start" : ""
                }`}
              >
                {chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm font-semibold text-brand-ice/90 shadow-sm backdrop-blur-sm transition-colors hover:border-brand-red/60 hover:bg-brand-red/24"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            ) : null}

            {stats.length ? (
              <div className="cinematic-hero-reveal mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={`${stat.value}-${stat.label}`} className="rounded-2xl border border-white/12 bg-white/[0.08] p-4 backdrop-blur-sm">
                    <div className="text-2xl font-display font-bold text-white">{stat.value}</div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-ice/62">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}

            {ctas.length ? (
              <div className={`cinematic-hero-reveal mt-8 flex flex-wrap gap-4 ${center ? "justify-center lg:justify-start" : ""}`}>
                {ctas.map((cta) => (
                  <Link
                    key={`${cta.href}-${cta.label}`}
                    href={cta.href}
                    target={cta.external ? "_blank" : undefined}
                    rel={cta.external ? "noopener noreferrer" : undefined}
                    className={
                      cta.variant === "secondary"
                        ? "inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/16"
                        : "inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-bold text-white shadow-glow transition-colors hover:bg-brand-red-2"
                    }
                  >
                    {cta.label}
                    {cta.external ? <ArrowUpRight className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <HeroVisual
            images={visualImages}
            variant={variant}
            visualLabel={visualLabel || theme.label}
            chips={chips}
          />
        </div>
      </div>
    </section>
  )
}

function HeroVisual({
  images,
  variant,
  visualLabel,
  chips,
}: {
  images: HeroImage[]
  variant: HeroVariant
  visualLabel: string
  chips: string[]
}) {
  const fallbackLabel = chips[0] || "Global advisory"

  return (
    <div className="cinematic-hero-visual relative mx-auto w-full max-w-[32rem] lg:mx-0">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-brand-red/14 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/14 bg-white/[0.08] p-4 shadow-[0_30px_90px_-38px_rgba(0,0,0,0.78)] backdrop-blur-md">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.12),transparent_32%),radial-gradient(circle_at_95%_90%,rgba(225,29,46,0.2),transparent_34%)]" />
        <div className="relative grid gap-3">
          <div className="relative overflow-hidden rounded-[1.45rem] border border-white/12 bg-slate-950/55">
            <div className="aspect-[16/10]">
              {images[0] ? (
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 36vw"
                  className="cinematic-hero-drift object-cover"
                />
              ) : (
                <div className="h-full w-full bg-[linear-gradient(135deg,#102b5a_0%,#07122a_58%,#2a1020_100%)]" />
              )}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,42,0.08)_0%,rgba(7,18,42,0.76)_100%)]" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.26em] text-brand-ice/62">
                    {visualLabel}
                  </div>
                  <div className="mt-1 text-xl font-display font-bold text-white">
                    {fallbackLabel}
                  </div>
                </div>
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20 bg-white/12 text-brand-red backdrop-blur-sm">
                  <MapPin className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-[0.9fr_1.1fr] gap-3">
            <MiniVisual image={images[1]} label={variant === "resources" || variant === "article" ? "Guides" : "Destinations"} />
            <MiniVisual image={images[2]} label={variant === "partnership" ? "Partners" : "Pathways"} />
          </div>
        </div>

        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 520 430" fill="none">
          <path
            className="cinematic-route-line"
            d="M60 326C126 238 188 282 246 204C318 108 400 146 466 66"
            stroke="#e11d2e"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="9 11"
          />
          <path
            className="cinematic-route-line cinematic-route-line-alt"
            d="M74 86C164 126 174 218 256 238C350 260 382 340 466 366"
            stroke="#f1f5ff"
            strokeOpacity="0.55"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="6 10"
          />
        </svg>
      </div>
    </div>
  )
}

function MiniVisual({ image, label }: { image?: HeroImage; label: string }) {
  return (
    <div className="relative overflow-hidden rounded-[1.15rem] border border-white/12 bg-white/[0.07]">
      <div className="aspect-[4/3]">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1024px) 45vw, 16vw"
            className="object-cover"
          />
        ) : (
          <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_28%),linear-gradient(135deg,#122f62,#07122a)]" />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(7,18,42,0.68)_100%)]" />
        <div className="absolute bottom-3 left-3 rounded-full border border-white/16 bg-white/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
          {label}
        </div>
      </div>
    </div>
  )
}

function RouteOverlay() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]"
      viewBox="0 0 1440 680"
      preserveAspectRatio="none"
      fill="none"
    >
      <path d="M0 340H1440" stroke="white" strokeOpacity="0.32" />
      <path d="M720 0V680" stroke="white" strokeOpacity="0.24" />
      <path d="M130 470C284 324 420 410 560 286C724 142 900 214 1080 116C1208 46 1320 64 1440 32" stroke="white" strokeOpacity="0.28" strokeDasharray="8 12" />
      <path className="cinematic-route-line" d="M120 528C316 360 434 458 610 292C772 138 944 226 1124 118C1248 44 1340 70 1410 42" stroke="#e11d2e" strokeWidth="2" strokeDasharray="10 14" />
    </svg>
  )
}
