"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Globe2,
  MapPin,
  PlayCircle,
  Route,
} from "lucide-react"
import { Counter } from "@/components/ui/Counter"
import {
  journeyMilestones,
  todayCapstone,
  journeyTrustBadges,
  type JourneyMilestone,
} from "@/data/journey"
import { mediaFeatures, sirRazaMediaSection } from "@/data/media"

const ease = [0.22, 1, 0.36, 1] as const

export function OurJourney() {
  const reduce = !!useReducedMotion()

  return (
    <section
      id="our-journey"
      className="relative overflow-hidden scroll-mt-24 bg-[linear-gradient(180deg,#ffffff_0%,#f7faff_45%,#ffffff_100%)] py-20 md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(68% 42% at 50% 0%, rgba(11,27,58,0.10) 0%, transparent 68%)",
            "radial-gradient(38% 42% at 96% 22%, rgba(225,29,46,0.07) 0%, transparent 62%)",
            "radial-gradient(42% 45% at 4% 86%, rgba(26,58,110,0.08) 0%, transparent 58%)",
          ].join(", "),
        }}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <SectionHeader reduce={reduce} />
        <RouteBoard reduce={reduce} />
      </div>
    </section>
  )
}

function SectionHeader({ reduce }: { reduce: boolean }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease }}
        className="inline-flex items-center gap-2.5 rounded-full border border-brand-blue/12 bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-blue shadow-sm"
      >
        <Route className="h-3.5 w-3.5 text-brand-red" />
        Trusted Since 2013
      </motion.div>

      <motion.h2
        initial={reduce ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease, delay: 0.08 }}
        className="mt-6 text-[2.35rem] font-display font-bold tracking-[-0.022em] text-brand-blue leading-[1.06] sm:text-5xl lg:text-[3.25rem]"
      >
        From Karachi{" "}
        <span className="relative inline-block text-brand-red">
          to the World
          <motion.span
            aria-hidden="true"
            initial={reduce ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease, delay: 0.5 }}
            className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-brand-red"
          />
        </span>
      </motion.h2>

      <motion.p
        initial={reduce ? false : { opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease, delay: 0.18 }}
        className="mt-6 text-lg leading-relaxed text-brand-blue/70"
      >
        A route of offices, credentials, and global desks that lifted EverNest
        from one Karachi advisory office into a connected international network.
      </motion.p>
    </div>
  )
}

function RouteBoard({ reduce }: { reduce: boolean }) {
  const featuredPodcast = mediaFeatures.find((item) => item.featured) ?? mediaFeatures[0]

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease, delay: 0.12 }}
      className="relative mx-auto mt-12 max-w-7xl overflow-hidden rounded-[2rem] border border-brand-blue/10 bg-brand-blue text-white shadow-[0_32px_90px_-34px_rgba(11,27,58,0.62)] md:mt-16"
    >
      <MapBackdrop />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.16),transparent_42%),linear-gradient(180deg,rgba(7,18,42,0.08)_0%,rgba(7,18,42,0.68)_100%)]"
      />

      <div className="relative z-10 px-5 py-7 sm:px-7 md:px-9 lg:px-10 lg:py-10">
        <div className="mb-8 grid gap-4 border-b border-white/10 pb-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-brand-ice">
              <MapPin className="h-3.5 w-3.5 text-brand-red" />
              Live route map
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-ice/72 md:text-base">
              Each stop marks a real operating milestone: a new city, a
              recognized credential, or a global desk expanding the company&apos;s
              reach.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center sm:gap-3">
            {["Pakistan", "Europe", "North America"].map((region) => (
              <div
                key={region}
                className="rounded-xl border border-white/10 bg-white/[0.06] px-2.5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white/78"
              >
                {region}
              </div>
            ))}
          </div>
        </div>

        {featuredPodcast ? <FounderPodcastProof podcast={featuredPodcast} /> : null}

        <div className="relative">
          <motion.div
            aria-hidden="true"
            initial={reduce ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 1.2, ease }}
            className="absolute left-[15px] top-3 bottom-6 w-px origin-top bg-gradient-to-b from-transparent via-white/30 to-transparent lg:left-1/2 lg:-translate-x-1/2"
          />
          <motion.div
            aria-hidden="true"
            initial={reduce ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 1.35, ease, delay: 0.18 }}
            className="absolute left-[15px] top-16 bottom-16 w-px origin-top bg-gradient-to-b from-brand-red via-white/70 to-brand-red/50 shadow-[0_0_22px_rgba(225,29,46,0.38)] lg:left-1/2 lg:-translate-x-1/2"
          />

          <div className="space-y-5 lg:space-y-0">
            {journeyMilestones.map((milestone, index) => (
              <RouteStop
                key={`${milestone.year}-${milestone.title}`}
                milestone={milestone}
                index={index}
                reduce={reduce}
              />
            ))}
          </div>
        </div>

        <TodayCapstone reduce={reduce} />
      </div>
    </motion.div>
  )
}

function RouteStop({
  milestone,
  index,
  reduce,
}: {
  milestone: JourneyMilestone
  index: number
  reduce: boolean
}) {
  const side = index % 2 === 0 ? "left" : "right"
  const delay = reduce ? 0 : index * 0.075

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.62, ease, delay }}
      className="relative grid grid-cols-[2rem_minmax(0,1fr)] gap-4 lg:min-h-[142px] lg:grid-cols-[minmax(0,1fr)_5.5rem_minmax(0,1fr)] lg:gap-0"
    >
      <div
        className={`hidden lg:block ${
          side === "left" ? "col-start-1 pr-8" : "col-start-3 pl-8"
        }`}
      >
        <MilestoneCard milestone={milestone} index={index} side={side} />
      </div>

      <div className="relative col-start-1 flex justify-center pt-5 lg:col-start-2 lg:row-start-1">
        <RouteNode milestone={milestone} index={index} reduce={reduce} />
        <div
          aria-hidden="true"
          className={`absolute top-[31px] hidden h-px w-10 bg-gradient-to-r lg:block ${
            side === "left"
              ? "right-[calc(50%+1rem)] from-transparent to-brand-red/70"
              : "left-[calc(50%+1rem)] from-brand-red/70 to-transparent"
          }`}
        />
      </div>

      <div className="col-start-2 min-w-0 lg:hidden">
        <MilestoneCard milestone={milestone} index={index} side="right" />
      </div>
    </motion.article>
  )
}

function RouteNode({
  milestone,
  index,
  reduce,
}: {
  milestone: JourneyMilestone
  index: number
  reduce: boolean
}) {
  const isCredential = milestone.tag === "Recognition" || milestone.tag === "Partnership"

  return (
    <motion.div
      initial={reduce ? false : { scale: 0.72, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.42, ease, delay: reduce ? 0 : index * 0.075 + 0.18 }}
      className="relative z-10"
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-full bg-brand-red/40 blur-lg" />
      <div className="relative grid h-8 w-8 place-items-center rounded-full border border-white/30 bg-white text-brand-blue shadow-[0_0_0_5px_rgba(255,255,255,0.07),0_0_28px_rgba(225,29,46,0.42)]">
        {isCredential ? (
          <CheckCircle2 className="h-4 w-4 text-brand-red" />
        ) : (
          <span className="h-2.5 w-2.5 rounded-full bg-brand-red" />
        )}
      </div>
    </motion.div>
  )
}

function FounderPodcastProof({
  podcast,
}: {
  podcast: (typeof mediaFeatures)[number]
}) {
  return (
    <article className="mb-9 overflow-hidden rounded-[1.5rem] border border-white/12 bg-white/[0.07] shadow-[0_22px_58px_-36px_rgba(0,0,0,0.72)] backdrop-blur md:mb-10">
      <div className="grid gap-0 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,1.05fr)] lg:items-stretch">
        <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-8">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/14 bg-white/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.26em] text-brand-ice">
            <PlayCircle className="h-3.5 w-3.5 text-brand-red" />
            {sirRazaMediaSection.heading}
          </div>
          <h3 className="mt-4 text-2xl font-display font-bold tracking-[-0.02em] text-white md:text-3xl">
            Hear the thinking behind the journey.
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-7 text-brand-ice/72 md:text-base">
            A public conversation with Mr. Raza gives visitors another trust
            signal: direct guidance, clear views on global pathways, and the
            leadership voice behind EverNest&apos;s advisory standard.
          </p>

          {podcast.url ? (
            <Link
              href={podcast.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-md border border-white/16 bg-white px-4 py-2.5 text-sm font-bold text-brand-blue transition-all hover:bg-brand-ice"
            >
              Watch on YouTube
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          ) : null}
        </div>

        <div className="border-t border-white/10 bg-slate-950/35 p-3 sm:p-4 lg:border-l lg:border-t-0">
          <div className="overflow-hidden rounded-[1.15rem] border border-white/10 bg-slate-950 shadow-[0_18px_46px_-28px_rgba(0,0,0,0.88)]">
            <div className="aspect-video">
              {podcast.youtubeEmbedUrl ? (
                <iframe
                  src={podcast.youtubeEmbedUrl}
                  title={podcast.title}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : null}
            </div>
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3 px-1 text-xs text-brand-ice/58">
            <span className="font-semibold text-white/86">{podcast.title}</span>
            <span>{podcast.label || "YouTube Feature"}</span>
          </div>
        </div>
      </div>
    </article>
  )
}

function MilestoneCard({
  milestone,
  index,
  side,
}: {
  milestone: JourneyMilestone
  index: number
  side: "left" | "right"
}) {
  return (
    <div
      className={`group relative h-full overflow-hidden rounded-2xl border border-white/12 bg-white/[0.94] p-5 text-brand-blue shadow-[0_18px_48px_-28px_rgba(0,0,0,0.62)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white sm:p-6 ${
        side === "left" ? "lg:text-right" : ""
      }`}
    >
      <div
        aria-hidden="true"
        className={`absolute top-0 h-full w-1 bg-gradient-to-b from-brand-red via-brand-red/70 to-brand-blue/10 ${
          side === "left" ? "right-0" : "left-0"
        }`}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(225,29,46,0.08),transparent_34%),radial-gradient(circle_at_90%_110%,rgba(11,27,58,0.09),transparent_36%)] opacity-80"
      />

      <div className="relative">
        <div className={`flex items-start gap-4 ${side === "left" ? "lg:flex-row-reverse" : ""}`}>
          <div className="min-w-0 flex-1">
            <div
              className={`flex flex-wrap items-center gap-2 ${
                side === "left" ? "lg:justify-end" : ""
              }`}
            >
              <span className="text-4xl font-display font-bold leading-none tracking-[-0.02em] text-brand-blue">
                {milestone.year}
              </span>
              <span className="rounded-full border border-brand-red/20 bg-brand-red/8 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-red">
                Stop {index + 1}
              </span>
            </div>
            <div
              className={`mt-3 inline-flex items-center gap-2 rounded-full bg-brand-blue/6 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue/68 ${
                side === "left" ? "lg:flex-row-reverse" : ""
              }`}
            >
              {milestone.tag === "Global Desk" ? (
                <Globe2 className="h-3.5 w-3.5 text-brand-red" />
              ) : milestone.tag === "Expansion" || milestone.tag === "Founded" ? (
                <Building2 className="h-3.5 w-3.5 text-brand-red" />
              ) : (
                <CheckCircle2 className="h-3.5 w-3.5 text-brand-red" />
              )}
              {milestone.tag}
            </div>
          </div>

          {milestone.proof && (
            <Link
              href="/about/credentials"
              aria-label={milestone.proof.alt}
              className="relative mt-1 h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-brand-blue/12 bg-white shadow-sm transition-transform duration-300 group-hover:scale-105"
            >
              <Image
                src={milestone.proof.src}
                alt={milestone.proof.alt}
                fill
                sizes="56px"
                className="object-cover"
              />
            </Link>
          )}
        </div>

        <h3 className="mt-4 text-xl font-display font-bold leading-snug text-brand-blue">
          {milestone.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-foreground/70">
          {milestone.body}
        </p>
      </div>
    </div>
  )
}

function TodayCapstone({ reduce }: { reduce: boolean }) {
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, ease, delay: 0.1 }}
      className="relative mt-8 overflow-hidden rounded-[1.75rem] border border-white/14 bg-white text-brand-blue shadow-[0_26px_70px_-34px_rgba(0,0,0,0.72)] lg:mt-10"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(225,29,46,0.12),transparent_34%),radial-gradient(circle_at_100%_20%,rgba(26,58,110,0.13),transparent_36%),linear-gradient(135deg,#ffffff_0%,#f6f9ff_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-brand-red/50 to-transparent"
      />

      <div className="relative z-10 grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10 xl:p-12">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-brand-red/18 bg-brand-red/8 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-red">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping-ring absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-red" />
            </span>
            {todayCapstone.eyebrow}
          </div>
          <h3 className="mt-4 text-3xl font-display font-bold tracking-[-0.02em] leading-tight text-brand-blue md:text-4xl lg:text-[2.6rem]">
            {todayCapstone.headline}
          </h3>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground/70">
            {todayCapstone.body}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/about/credentials"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-blue px-5 py-3 text-sm font-bold text-white transition-all hover:bg-brand-blue/92"
            >
              View Credentials
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-red px-5 py-3 text-sm font-bold text-white transition-all hover:bg-brand-red-2"
            >
              Book Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {todayCapstone.counters.map((counter, index) => (
            <motion.div
              key={counter.label}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: reduce ? 0 : index * 0.06 + 0.16 }}
              className="relative overflow-hidden rounded-2xl border border-brand-blue/10 bg-white/82 p-4 shadow-sm sm:p-5"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-red via-brand-red/65 to-brand-blue/20"
              />
              <div className="text-[2rem] font-display font-bold leading-none tracking-[-0.02em] text-brand-blue tabular-nums sm:text-[2.4rem]">
                {counter.value !== null ? (
                  <Counter to={counter.value} suffix={counter.suffix ?? ""} duration={1.7} />
                ) : (
                  <span>{counter.display}</span>
                )}
              </div>
              <div className="mt-3 text-sm font-semibold leading-snug text-foreground/68">
                {counter.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-wrap items-center gap-4 border-t border-brand-blue/8 px-6 py-5 sm:px-8 lg:px-10 xl:px-12">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-blue/48">
          Credentials on the route
        </span>
        <div className="flex flex-wrap items-center gap-3">
          {journeyTrustBadges.map((badge) => (
            <Link
              key={badge.label}
              href="/about/credentials"
              title={badge.label}
              aria-label={badge.label}
              className="group relative flex h-11 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-brand-blue/10 bg-white shadow-sm transition-all hover:border-brand-blue/22 hover:shadow-card"
            >
              <Image
                src={badge.src}
                alt={badge.label}
                width={56}
                height={44}
                className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
              />
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function MapBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden [contain:paint]">
      <div className="absolute inset-0 bg-grid-soft opacity-[0.045]" />
      <svg
        className="absolute inset-0 h-full w-full overflow-hidden opacity-[0.17]"
        viewBox="0 0 1200 720"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M64 360H1136" stroke="white" strokeOpacity="0.45" strokeWidth="1" />
        <path d="M600 28V692" stroke="white" strokeOpacity="0.38" strokeWidth="1" />
        {[180, 300, 420, 540].map((y) => (
          <path
            key={y}
            d={`M82 ${y}C278 ${y - 36} 468 ${y + 36} 600 ${y}C732 ${y - 36} 922 ${
              y + 36
            } 1118 ${y}`}
            stroke="white"
            strokeOpacity="0.28"
            strokeWidth="1"
          />
        ))}
        {[180, 330, 480, 720, 870, 1020].map((x) => (
          <path
            key={x}
            d={`M${x} 40C${x - 54} 188 ${x - 54} 532 ${x} 680`}
            stroke="white"
            strokeOpacity="0.22"
            strokeWidth="1"
          />
        ))}
        <path
          d="M274 384C350 324 426 338 500 286C586 226 671 236 760 192C850 147 944 170 1026 118"
          stroke="#e11d2e"
          strokeOpacity="0.58"
          strokeWidth="2"
          strokeDasharray="10 12"
        />
        <path
          d="M318 484C420 438 512 484 604 430C710 368 812 380 930 320"
          stroke="#f1f5ff"
          strokeOpacity="0.38"
          strokeWidth="1.5"
          strokeDasharray="6 10"
        />
        {[
          [274, 384],
          [500, 286],
          [760, 192],
          [1026, 118],
          [604, 430],
          [930, 320],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill="#e11d2e" opacity="0.8" />
        ))}
      </svg>
      <div className="absolute left-4 top-12 h-64 w-64 rounded-full bg-brand-red/12 blur-3xl" />
      <div className="absolute right-4 bottom-4 h-72 w-72 rounded-full bg-brand-blue-light/34 blur-3xl" />
    </div>
  )
}
