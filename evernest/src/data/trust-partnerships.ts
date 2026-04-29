export type TrustSignalIcon =
  | "shield"
  | "award"
  | "globe"
  | "building"
  | "graduation"

export type TrustSignalCard = {
  title: string
  category: string
  description: string
  icon: TrustSignalIcon
  featured?: boolean
}

export type CredibilityMediaItem = {
  title: string
  category: string
  caption: string
  imagePath?: string
  assetSlot: string
  link?: string
}

export type UniversityPartnerMediaItem = {
  title: string
  category: string
  imagePath?: string
  assetSlot: string
  link?: string
}

export const trustPartnershipSection = {
  heading: "Global Trust, Certified Partnerships",
  subtitle:
    "From British Council recognition to university partnerships and in-house IELTS training, EN Consultants has built a credibility network that supports students with confidence, structure, and international reach.",
  paragraph:
    "For over a decade, EN Consultants has built its reputation through ICEF certification, British Council recognition, IELTS-related engagement, institutional partnerships, and direct collaboration with international education networks. These relationships help our students receive informed counselling, stronger documentation support, and clearer guidance across study and immigration pathways.",
}

export const trustSignalCards: TrustSignalCard[] = [
  {
    title: "ICEF Certified Agency",
    category: "Certification",
    description:
      "EN Consultants is an ICEF-certified agency, reflecting internationally recognized standards in student recruitment, ethical counselling, and global education advisory.",
    icon: "shield",
    featured: true,
  },
  {
    title: "British Council UK Certified Agent",
    category: "Recognition",
    description:
      "Professional recognition aligned with trusted student guidance, documentation quality, and responsible international education support.",
    icon: "award",
  },
  {
    title: "IELTS Partner Recognition",
    category: "Partner Network",
    description:
      "Ongoing IELTS-related engagement that reinforces structured preparation, informed advising, and credible student-facing support.",
    icon: "globe",
  },
  {
    title: "University Partnership Network",
    category: "Institutional Links",
    description:
      "Partnership-led visibility across international education networks that helps students navigate admissions with clearer institutional context.",
    icon: "building",
  },
  {
    title: "In-House Training & Student Guidance",
    category: "Training",
    description:
      "Continuous team development designed to strengthen counselling quality, documentation discipline, and student communication standards.",
    icon: "graduation",
  },
]

export const featuredCredibilityGallery: CredibilityMediaItem[] = [
  {
    title: "Recognized in the IELTS Partner Network",
    category: "Recognition",
    caption:
      "Sir Raza representing EN Consultants at an annual IELTS partners gathering, reflecting the company’s long-standing role in international student guidance and English-language preparation.",
    imagePath: "/images/trust/ielts/ielts-partner-network.jpg",
    assetSlot: "/images/trust/ielts/ielts-partner-network.jpg",
  },
  {
    title: "IELTS Recognition at Our Office",
    category: "Partner Network",
    caption:
      "EN Consultants receiving IELTS-related recognition at our office, reinforcing our commitment to structured test preparation, student counselling, and international education pathways.",
    imagePath: "/images/trust/ielts/ielts-office-recognition.jpg",
    assetSlot: "/images/trust/ielts/ielts-office-recognition.jpg",
  },
  {
    title: "Continuous Training for Better Counselling",
    category: "Training",
    caption:
      "Our team regularly participates in training sessions to stay aligned with admission standards, visa expectations, documentation quality, and student counselling best practices.",
    imagePath: "/images/trust/training/team-training-session.jpg",
    assetSlot: "/images/trust/training/team-training-session.jpg",
  },
]

export const certificationRecognitionItems: CredibilityMediaItem[] = [
  {
    title: "ICEF-Certified Global Education Agency",
    category: "Certification",
    caption:
      "ICEF certification reinforces EN Consultants’ commitment to professional student recruitment, transparent counselling, and internationally aligned education advisory practices.",
    assetSlot: "/images/trust/icef/icef-certificate.jpg",
  },
  {
    title: "British Council UK Certified Agent",
    category: "Recognition",
    caption:
      "British Council UK agent and counsellor training certification supports EN Consultants’ emphasis on informed student guidance, documentation awareness, and responsible international education counselling.",
    imagePath: "/images/trust/british-council/british-council-certified-agent.png",
    assetSlot: "/images/trust/british-council/british-council-certified-agent.png",
  },
  {
    title: "IELTS Partner / Recognition Certificate",
    category: "Partner Network",
    caption:
      "IELTS-related recognition reinforces EN Consultants’ active role in English-language pathway awareness and preparation-focused student support.",
    imagePath: "/images/trust/certificates/ielts-recognition-certificate.png",
    assetSlot: "/images/trust/certificates/ielts-recognition-certificate.png",
  },
]

export const universityPartnerMedia: UniversityPartnerMediaItem[] = [
  {
    title: "University Partnership Certificate",
    category: "Certificate",
    assetSlot: "/images/partners/universities/university-partner-certificate-01.jpg",
  },
  {
    title: "Institutional Collaboration Media",
    category: "Representative",
    assetSlot: "/images/partners/universities/institutional-collaboration-01.jpg",
  },
  {
    title: "Admissions Network Partner",
    category: "Partner Network",
    assetSlot: "/images/partners/universities/admissions-network-partner-01.jpg",
  },
  {
    title: "University Relations Recognition",
    category: "Recognition",
    assetSlot: "/images/partners/universities/university-relations-recognition-01.jpg",
  },
  {
    title: "Representative Visit Record",
    category: "Representative",
    assetSlot: "/images/partners/universities/representative-visit-01.jpg",
  },
  {
    title: "Campus Partnership Media",
    category: "Institutional",
    assetSlot: "/images/partners/universities/campus-partnership-media-01.jpg",
  },
]
