import Image from "next/image"
import type { Institution } from "@/data/institutional-network"
import { getInstitutionMonogram } from "@/lib/institutions"

type InstitutionLogoGridProps = {
  institutions: Institution[]
  gridClassName?: string
  cardClassName?: string
  showRegion?: boolean
  compact?: boolean
}

export function InstitutionLogoGrid({
  institutions,
  gridClassName = "grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6",
  cardClassName = "",
  showRegion = true,
  compact = false,
}: InstitutionLogoGridProps) {
  return (
    <div className={gridClassName}>
      {institutions.map((institution) => (
        <InstitutionLogoCard
          key={institution.name}
          institution={institution}
          className={cardClassName}
          showRegion={showRegion}
          compact={compact}
        />
      ))}
    </div>
  )
}

function InstitutionLogoCard({
  institution,
  className,
  showRegion,
  compact,
}: {
  institution: Institution
  className: string
  showRegion: boolean
  compact: boolean
}) {
  return (
    <article
      className={[
        "rounded-[24px] border border-brand-blue/10 bg-white/92 p-4 shadow-[0_14px_34px_rgba(15,23,42,0.05)] transition-transform duration-300 hover:-translate-y-1",
        className,
      ].join(" ")}
    >
      <div className="flex min-h-[96px] items-center justify-center rounded-[18px] border border-brand-blue/8 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-4 py-3">
        {institution.logoPath ? (
          <Image
            src={institution.logoPath}
            alt={institution.name}
            width={240}
            height={96}
            unoptimized={institution.logoPath.endsWith(".svg")}
            className="max-h-14 w-auto max-w-full object-contain"
          />
        ) : (
          <div className="flex h-14 w-full max-w-[11rem] items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0b1b3a_0%,#102447_75%,#e11d2e_180%)] px-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-white">
            {getInstitutionMonogram(institution.name)}
          </div>
        )}
      </div>

      <div className={compact ? "mt-3" : "mt-4"}>
        {showRegion ? (
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-red">
            {institution.region}
          </p>
        ) : null}
        <h3
          className={[
            "font-semibold text-brand-blue",
            compact ? "mt-1 text-sm leading-6" : "mt-2 text-base leading-7",
          ].join(" ")}
        >
          {institution.name}
        </h3>
      </div>
    </article>
  )
}

