"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import {
  homepageFeaturedInstitutions,
  institutionalNetworkSection,
  type Institution,
} from "@/data/institutional-network"
import { getInstitutionMonogram } from "@/lib/institutions"

export function PartnerStrip() {
  const marqueeItems = [...homepageFeaturedInstitutions, ...homepageFeaturedInstitutions]

  return (
    <section className="relative overflow-hidden border-y border-border-subtle bg-brand-ice/20 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(11,27,58,0.05),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(225,29,46,0.06),transparent_30%)]" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-red">
            Institutional Network
          </p>
          <h2 className="mt-4 text-3xl font-display font-bold text-brand-blue md:text-4xl">
            {institutionalNetworkSection.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/70 md:text-lg">
            A selected global network across study-abroad pathways and admissions support.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-7xl"
        >
          <div className="relative overflow-hidden rounded-[36px] border border-brand-blue/10 bg-[linear-gradient(180deg,#ffffff_0%,#f7faff_100%)] p-5 shadow-[0_24px_70px_rgba(15,23,42,0.08)] md:p-7">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white via-white/88 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white via-white/88 to-transparent" />

            <div className="overflow-hidden">
              <div className="flex min-w-max animate-marquee gap-5 hover:[animation-play-state:paused]">
                {marqueeItems.map((institution, index) => (
                  <InstitutionMarqueeCard
                    key={`${institution.name}-${index}`}
                    institution={institution}
                  />
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4 border-t border-brand-blue/8 pt-5">
              <p className="text-sm uppercase tracking-[0.2em] text-brand-blue/45">
                Auto-Rolling Featured Universities
              </p>
              <Link
                href="/about/credentials"
                className="inline-flex items-center justify-center rounded-full bg-brand-blue px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-2"
              >
                View Full Network
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function InstitutionMarqueeCard({ institution }: { institution: Institution }) {
  return (
    <article className="group flex w-[260px] shrink-0 flex-col rounded-[28px] border border-brand-blue/10 bg-white/96 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.05)] transition-transform duration-300 hover:-translate-y-1">
      <div className="flex min-h-[126px] items-center justify-center rounded-[22px] border border-brand-blue/8 bg-[radial-gradient(circle_at_top,rgba(11,27,58,0.03),transparent_55%),linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-5 py-5">
        {institution.logoPath ? (
          <Image
            src={institution.logoPath}
            alt={institution.name}
            width={220}
            height={88}
            unoptimized={institution.logoPath.endsWith(".svg")}
            className="max-h-16 w-auto max-w-full object-contain"
          />
        ) : (
          <div className="flex h-16 w-full max-w-[11rem] items-center justify-center rounded-[20px] bg-[linear-gradient(135deg,#0b1b3a_0%,#102447_70%,#e11d2e_180%)] px-4 text-center text-sm font-bold uppercase tracking-[0.24em] text-white">
            {getInstitutionMonogram(institution.name)}
          </div>
        )}
      </div>

      <div className="mt-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-red">
          {institution.region}
        </p>
        <h3 className="mt-2 line-clamp-2 text-lg font-display font-bold tracking-tight text-brand-blue">
          {institution.name}
        </h3>
      </div>
    </article>
  )
}

