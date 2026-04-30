export type JourneyMilestone = {
  year: string
  tag: string
  title: string
  body: string
  proof?: {
    src: string
    alt: string
  }
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    year: "2013",
    tag: "Founded",
    title: "Founded in Karachi",
    body: "EN Consultants (Pvt) Ltd. is founded with a single conviction — that Pakistani students deserve world-class advisory.",
  },
  {
    year: "2022",
    tag: "Expansion",
    title: "Islamabad office opens",
    body: "A flagship office opens in the federal capital, bringing in-person counselling to clients across Islamabad and Rawalpindi.",
  },
  {
    year: "2023",
    tag: "Recognition",
    title: "British Council UK Certified Agent",
    body: "Formally certified by the British Council UK as a trained agent and counsellor — recognition awarded to consultancies meeting the highest standards for ethical, accountable international student guidance.",
    proof: {
      src: "/images/trust/british-council/british-council-certified-agent.png",
      alt: "British Council UK Certified Agent certificate",
    },
  },
  {
    year: "2023",
    tag: "Partnership",
    title: "AEO / IELTS Certified Partner",
    body: "Approved as an authorized IELTS partner and collection center for AEO Pakistan — placing IELTS registration, preparation, and recognition directly inside our practice.",
    proof: {
      src: "/images/trust/certificates/aeo-ielts-certificate.png",
      alt: "AEO IELTS Certified Collection Partner certificate",
    },
  },
  {
    year: "2023",
    tag: "Global Desk",
    title: "Europe Desk, Naples",
    body: "A global desk launches in Naples, Italy — providing in-region liaison for European universities, embassies, and clients across the EU.",
  },
  {
    year: "2024",
    tag: "Global Desk",
    title: "North America Desk, Edmonton",
    body: "A second global desk opens in Edmonton, Canada — extending direct, on-ground support across Canadian and US study and mobility pathways.",
  },
  {
    year: "2026",
    tag: "Expansion",
    title: "Lahore office launched",
    body: "A third Pakistan office opens in Lahore, deepening our Punjab footprint and bringing the EverNest standard of advisory to one of South Asia's largest student communities.",
  },
]

export type CapstoneCounter = {
  value: number | null
  display?: string
  suffix?: string
  label: string
}

export const todayCapstone = {
  eyebrow: "Today",
  headline: "The route now reaches every major study destination",
  body: "Three offices across Pakistan. Two global desks across Europe and North America. One connected advisory network built around outcomes, not promises.",
  counters: [
    { value: 18, suffix: "+", label: "Countries" },
    { value: 500, suffix: "+", label: "Institutions" },
    { value: 2000, suffix: "+", label: "Global Network" },
    { value: null, display: "Thousands", label: "of Cases" },
  ] satisfies CapstoneCounter[],
}

export const journeyTrustBadges = [
  {
    label: "British Council UK Certified Agent",
    src: "/images/trust/british-council/british-council-certified-agent.png",
  },
  {
    label: "AEO / IELTS Certified Partner",
    src: "/images/trust/certificates/aeo-ielts-certificate.png",
  },
  {
    label: "IELTS Partner Network",
    src: "/images/trust/certificates/ielts-recognition-certificate.png",
  },
]
