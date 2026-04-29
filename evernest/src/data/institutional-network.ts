export type InstitutionRegion =
  | "Canada"
  | "UK"
  | "USA"
  | "Germany"
  | "Malaysia"
  | "Italy"
  | "South Korea"
  | "Turkey / Cyprus"

export type Institution = {
  name: string
  region: InstitutionRegion
  logoPath?: string
  featuredOnHome?: boolean
  featuredOnAbout?: boolean
}

export const institutionalNetworkSection = {
  heading: "Global University & Institutional Network",
  subtitle:
    "A selected view of universities and institutions connected to our global study-abroad pathways, admissions support, and student placement network.",
}

export const institutions: Institution[] = [
  {
    name: "University of Toronto",
    region: "Canada",
    logoPath: "/images/partners/logos/university-of-toronto.jpg",
    featuredOnHome: true,
    featuredOnAbout: true,
  },
  {
    name: "University of Alberta",
    region: "Canada",
    logoPath: "/images/partners/logos/university-of-alberta.jpeg",
    featuredOnHome: true,
    featuredOnAbout: true,
  },
  {
    name: "University of Waterloo",
    region: "Canada",
    logoPath: "/images/partners/logos/university-of-waterloo.avif",
    featuredOnHome: true,
    featuredOnAbout: true,
  },
  {
    name: "University of Oxford",
    region: "UK",
    logoPath: "/images/partners/logos/university-of-oxford.svg",
    featuredOnHome: true,
    featuredOnAbout: true,
  },
  {
    name: "University of Cambridge",
    region: "UK",
    logoPath: "/images/partners/logos/university-of-cambridge.svg",
    featuredOnHome: true,
    featuredOnAbout: true,
  },
  {
    name: "University of Manchester",
    region: "UK",
    logoPath: "/images/partners/logos/university-of-manchester.png",
    featuredOnHome: true,
    featuredOnAbout: true,
  },
  {
    name: "University of Birmingham",
    region: "UK",
    logoPath: "/images/partners/logos/university-of-birmingham.svg",
    featuredOnAbout: true,
  },
  {
    name: "University of Glasgow",
    region: "UK",
    logoPath: "/images/partners/logos/university-of-glasgow.jpeg",
    featuredOnAbout: true,
  },
  {
    name: "Arizona State University",
    region: "USA",
    logoPath: "/images/partners/logos/arizona-state-university.png",
    featuredOnHome: true,
    featuredOnAbout: true,
  },
  {
    name: "Kent State University",
    region: "USA",
    logoPath: "/images/partners/logos/kent-state-university.svg",
    featuredOnAbout: true,
  },
  {
    name: "Purdue University",
    region: "USA",
    logoPath: "/images/partners/logos/purdue-university.png",
    featuredOnHome: true,
    featuredOnAbout: true,
  },
  {
    name: "Florida State University",
    region: "USA",
    logoPath: "/images/partners/logos/florida-state-university.png",
    featuredOnAbout: true,
  },
  {
    name: "Technical University of Munich",
    region: "Germany",
    logoPath: "/images/partners/logos/technical-university-of-munich.png",
    featuredOnHome: true,
    featuredOnAbout: true,
  },
  {
    name: "University of Europe for Applied Sciences",
    region: "Germany",
    logoPath: "/images/partners/logos/university-of-europe-for-applied-sciences.png",
    featuredOnAbout: true,
  },
  {
    name: "Humboldt University of Berlin",
    region: "Germany",
    logoPath: "/images/partners/logos/humboldt-university-of-berlin.png",
    featuredOnAbout: true,
  },
  {
    name: "Asia Pacific University",
    region: "Malaysia",
    logoPath: "/images/partners/logos/asia-pacific-university.jpeg",
    featuredOnAbout: true,
  },
  {
    name: "Taylor's University",
    region: "Malaysia",
    logoPath: "/images/partners/logos/taylors-university.png",
    featuredOnHome: true,
    featuredOnAbout: true,
  },
  {
    name: "SEGi University",
    region: "Malaysia",
    logoPath: "/images/partners/logos/segi-university.png",
    featuredOnAbout: true,
  },
  {
    name: "University of Milan",
    region: "Italy",
    logoPath: "/images/partners/logos/university-of-milan.png",
  },
  {
    name: "University of Padua",
    region: "Italy",
    logoPath: "/images/partners/logos/university-of-padua.png",
  },
  {
    name: "Sapienza University of Rome",
    region: "Italy",
    logoPath: "/images/partners/logos/sapienza-university-of-rome.png",
    featuredOnHome: true,
    featuredOnAbout: true,
  },
  {
    name: "University of Naples Federico II",
    region: "Italy",
    logoPath: "/images/partners/logos/university-of-naples-federico-ii.png",
  },
  {
    name: "Kunsan National University",
    region: "South Korea",
    logoPath: "/images/partners/logos/kunsan-national-university.jpeg",
  },
  {
    name: "Sejong University",
    region: "South Korea",
    logoPath: "/images/partners/logos/sejong-university.jpg",
    featuredOnHome: true,
    featuredOnAbout: true,
  },
  {
    name: "Cyprus West University",
    region: "Turkey / Cyprus",
    logoPath: "/images/partners/logos/cyprus-west-university.svg",
  },
  {
    name: "Koç University",
    region: "Turkey / Cyprus",
    logoPath: "/images/partners/logos/koc-university.png",
  },
  {
    name: "Sabancı University",
    region: "Turkey / Cyprus",
    logoPath: "/images/partners/logos/sabanci-university.svg",
  },
  {
    name: "Istanbul University",
    region: "Turkey / Cyprus",
    logoPath: "/images/partners/logos/istanbul-university.png",
  },
  {
    name: "Istanbul Technical University",
    region: "Turkey / Cyprus",
    logoPath: "/images/partners/logos/istanbul-technical-university.png",
  },
]

export const homepageFeaturedInstitutions = institutions.filter(
  (institution) => institution.featuredOnHome,
)

export const aboutInstitutionPreview = institutions.filter(
  (institution) => institution.featuredOnAbout,
)

export const institutionRegions: InstitutionRegion[] = [
  "Canada",
  "UK",
  "USA",
  "Germany",
  "Malaysia",
  "Italy",
  "South Korea",
  "Turkey / Cyprus",
]

export const institutionsByRegion = institutionRegions.map((region) => ({
  region,
  institutions: institutions.filter((institution) => institution.region === region),
}))
