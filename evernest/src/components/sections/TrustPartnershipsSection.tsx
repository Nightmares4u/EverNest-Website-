import Image from "next/image"
import Link from "next/link"
import {
  Award,
  Building2,
  Globe2,
  GraduationCap,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

import { InstitutionLogoGrid } from "@/components/shared/InstitutionLogoGrid"
import {
  aboutInstitutionPreview,
  institutionalNetworkSection,
} from "@/data/institutional-network"
import {
  certificationRecognitionItems,
  featuredCredibilityGallery,
  trustPartnershipSection,
  trustSignalCards,
  type CredibilityMediaItem,
  type TrustSignalIcon,
} from "@/data/trust-partnerships"

export function TrustPartnershipsSection() {
  return (
    <section className="relative overflow-hidden border-t border-slate-100 bg-[linear-gradient(180deg,#ffffff_0%,#f7faff_42%,#ffffff_100%)] py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(225,29,46,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(11,27,58,0.08),transparent_28%)]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full border border-brand-red/12 bg-brand-blush px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-brand-red">
            Trust & Partnerships
          </span>
          <h2 className="mt-5 text-3xl font-display font-bold tracking-tight text-brand-blue md:text-5xl">
            {trustPartnershipSection.heading}
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600 md:text-xl">
            {trustPartnershipSection.subtitle}
          </p>
          <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
            {trustPartnershipSection.paragraph}
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-12">
          {trustSignalCards.map((card) => (
            <article
              key={card.title}
              className={[
                "group relative overflow-hidden rounded-[28px] border p-6 shadow-[0_18px_50px_rgba(15,23,42,0.07)] transition-transform duration-300 hover:-translate-y-1",
                card.featured
                  ? "border-brand-blue/10 bg-[linear-gradient(135deg,#07122a_0%,#102447_60%,#e11d2e_160%)] text-white md:col-span-2 xl:col-span-4"
                  : "border-brand-blue/10 bg-white/92 backdrop-blur-sm xl:col-span-2",
              ].join(" ")}
            >
              <div
                className={[
                  "absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                  card.featured
                    ? "bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_30%)]"
                    : "bg-[radial-gradient(circle_at_top_left,rgba(225,29,46,0.08),transparent_30%)]",
                ].join(" ")}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={[
                      "inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em]",
                      card.featured
                        ? "border border-white/15 bg-white/10 text-red-100"
                        : "border border-brand-red/10 bg-brand-blush text-brand-red",
                    ].join(" ")}
                  >
                    {card.category}
                  </span>
                  <div
                    className={[
                      "flex h-12 w-12 items-center justify-center rounded-2xl",
                      card.featured ? "bg-white/10 text-white" : "bg-brand-ice text-brand-blue",
                    ].join(" ")}
                  >
                    {renderTrustIcon(card.icon)}
                  </div>
                </div>

                <h3
                  className={[
                    "mt-8 font-display font-bold tracking-tight",
                    card.featured ? "text-2xl md:text-[1.9rem]" : "text-xl text-brand-blue",
                  ].join(" ")}
                >
                  {card.title}
                </h3>
                <p
                  className={[
                    "mt-4 text-sm leading-7",
                    card.featured ? "text-slate-100/90" : "text-slate-600",
                  ].join(" ")}
                >
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 md:mt-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand-blue/45">
                Featured Credibility Gallery
              </p>
              <h3 className="mt-3 text-3xl font-display font-bold tracking-tight text-brand-blue">
                Institutional proof points presented with editorial polish.
              </h3>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-500">
              Recognition, in-office milestones, and team development are shown here as structured authority signals rather than a casual photo roll.
            </p>
          </div>

          <div className="mt-10 grid gap-7 lg:grid-cols-3">
            {featuredCredibilityGallery.map((item, index) => (
              <CredibilityVisualCard
                key={item.title}
                item={item}
                variant="gallery"
                priority={index === 0}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-[32px] border border-brand-blue/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(241,245,255,0.92)_100%)] p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:mt-20 md:p-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand-blue/45">
                Certifications & Institutional Recognition
              </p>
              <h3 className="mt-3 text-3xl font-display font-bold tracking-tight text-brand-blue">
                Formal signals that support the EN Consultants (Pvt) Ltd. credibility story.
              </h3>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-500">
              Use certificate visuals here where available. Each card already supports direct media replacement without changing the section structure.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {certificationRecognitionItems.map((item, index) => (
              <CredibilityVisualCard
                key={item.title}
                item={item}
                variant="certificate"
                priority={index === 0}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand-blue/45">
                Institutional Network
              </p>
              <h3 className="mt-3 text-3xl font-display font-bold tracking-tight text-brand-blue">
                {institutionalNetworkSection.heading}
              </h3>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-500">
              {institutionalNetworkSection.subtitle}
            </p>
          </div>

          <div className="mt-10 rounded-[32px] border border-brand-blue/10 bg-[linear-gradient(135deg,#07122a_0%,#102447_62%,#152a55_100%)] p-6 shadow-[0_24px_60px_rgba(11,27,58,0.18)] md:p-8">
            <InstitutionLogoGrid
              institutions={aboutInstitutionPreview}
              gridClassName="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5"
              cardClassName="border-white/10 bg-white/96 shadow-none"
              showRegion={false}
              compact
            />

            <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-[24px] border border-white/10 bg-white/8 px-5 py-5 text-white/88 md:flex-row md:items-center">
              <p className="max-w-3xl text-sm leading-7 text-slate-200">
                Showing a selected set of 20 institutions on the About page for clarity. The full 29-institution network is available on the credentials view.
              </p>
              <Link
                href="/about/credentials"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-blue transition-colors hover:bg-brand-ice"
              >
                View Full Credentials
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CredibilityVisualCard({
  item,
  priority = false,
  variant,
}: {
  item: CredibilityMediaItem
  priority?: boolean
  variant: "gallery" | "certificate"
}) {
  const frame = (
    <article className="group overflow-hidden rounded-[28px] border border-brand-blue/10 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden border-b border-brand-blue/8 bg-[linear-gradient(135deg,#09162f_0%,#102447_58%,#e11d2e_180%)]">
        {item.imagePath ? (
          <Image
            src={item.imagePath}
            alt={item.title}
            fill
            priority={priority}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        ) : (
          <MediaPlaceholder title={item.title} category={item.category} variant={variant} />
        )}
      </div>

      <div className="p-6 md:p-7">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex rounded-full border border-brand-red/10 bg-brand-blush px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-red">
            {item.category}
          </span>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            <Sparkles className="h-3.5 w-3.5 text-brand-blue/55" />
            Authority Layer
          </span>
        </div>

        <h4 className="mt-5 text-2xl font-display font-bold tracking-tight text-brand-blue">
          {item.title}
        </h4>
        <p className="mt-4 text-sm leading-7 text-slate-600">
          {item.caption}
        </p>
      </div>
    </article>
  )

  if (item.link) {
    return (
      <Link href={item.link} className="block" target="_blank" rel="noopener noreferrer">
        {frame}
      </Link>
    )
  }

  return frame
}

function MediaPlaceholder({
  title,
  category,
  variant,
}: {
  title: string
  category: string
  variant: "gallery" | "certificate"
}) {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_28%),linear-gradient(145deg,rgba(7,18,42,0.96),rgba(16,36,71,0.94)_58%,rgba(225,29,46,0.78)_150%)]" />
      <div className="absolute inset-6 rounded-[24px] border border-white/12 bg-white/6 p-5 backdrop-blur-[2px]">
        <div className="flex items-start justify-between gap-4">
          <span className="inline-flex rounded-full border border-white/12 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-red-100">
            {category}
          </span>
          <div className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-100/75">
            Placeholder
          </div>
        </div>

        {variant === "certificate" ? (
          <div className="mt-8 flex h-[calc(100%-4rem)] items-center justify-center">
            <div className="w-full max-w-[19rem] rounded-[26px] border border-white/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(241,245,255,0.9))] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-blue text-white">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="rounded-full bg-brand-blush px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-red">
                  Certificate
                </div>
              </div>
              <div className="mt-5 h-2 w-20 rounded-full bg-brand-blue/12" />
              <div className="mt-3 h-2 w-full rounded-full bg-brand-blue/10" />
              <div className="mt-2 h-2 w-5/6 rounded-full bg-brand-blue/10" />
              <div className="mt-2 h-2 w-4/6 rounded-full bg-brand-blue/10" />
              <div className="mt-8 flex items-end justify-between">
                <div className="space-y-2">
                  <div className="h-2 w-24 rounded-full bg-brand-red/18" />
                  <div className="h-2 w-16 rounded-full bg-brand-blue/10" />
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-brand-red/14 bg-brand-blush text-brand-red">
                  <Award className="h-7 w-7" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-10 flex h-[calc(100%-4.25rem)] flex-col justify-between">
            <div>
              <p className="text-3xl font-display font-bold tracking-tight text-white md:text-[2rem]">
                {title}
              </p>
              <p className="mt-4 max-w-sm text-sm leading-7 text-slate-100/78">
                Replace this premium placeholder with the approved photo or recognition media when the final asset is ready.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-white/12 bg-white/8 p-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
                EN
              </div>
              <div className="rounded-2xl border border-white/12 bg-white/8 p-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
                Trust
              </div>
              <div className="rounded-2xl border border-white/12 bg-white/8 p-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
                Media
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function renderTrustIcon(icon: TrustSignalIcon) {
  if (icon === "shield") {
    return <ShieldCheck className="h-6 w-6" />
  }

  if (icon === "award") {
    return <Award className="h-6 w-6" />
  }

  if (icon === "globe") {
    return <Globe2 className="h-6 w-6" />
  }

  if (icon === "building") {
    return <Building2 className="h-6 w-6" />
  }

  return <GraduationCap className="h-6 w-6" />
}
