export type LeadershipProfile = {
  name: string;
  title: string;
  bio: string[];
  portraitImage?: {
    src: string;
    alt: string;
  };
  experienceSince: number;
  areasOfExpertise: string[];
  credentials: {
    label: string;
    description: string;
    icon?: string;
  }[];
  galleryImages: {
    src: string;
    alt: string;
    caption?: string;
  }[];
};

export const sirRazaProfile: LeadershipProfile = {
  name: "Syed Raza",
  title: "CEO & Senior Consultant",
  portraitImage: {
    src: "/images/leadership/sir-raza/sir-raza-portrait.png",
    alt: "Mr. Raza at a corporate partnership event",
  },
  bio: [
    "With over 25 years of experience across immigration consulting, corporate leadership, and financial management, Syed Raza leads EverNest Consultants with a global outlook and a strong commitment to ethical guidance.",
    "As a Certified International Student Coach and experienced immigration consultant, he has advised clients across study visas, skilled migration, business migration, investor pathways, and citizenship-by-investment programs.",
    "Through his leadership, EN Consultants (Pvt) Ltd. has grown into a trusted international education and immigration consultancy, supporting students, families, professionals, and investors in building secure global futures.",
  ],
  experienceSince: 1999,
  areasOfExpertise: [
    "Study Visas",
    "Skilled Migration",
    "Business Migration",
    "Investor Pathways",
    "Citizenship-by-Investment",
    "International Education Strategy",
  ],
  credentials: [
    {
      label: "25+ Years of Experience",
      description: "Leadership across immigration consulting, business operations, and long-term client advisory.",
    },
    {
      label: "Trusted Trading Brand",
      description: "Public-facing guidance delivered through EverNest Consultants, the trading brand of EN Consultants (Pvt) Ltd.",
    },
    {
      label: "Ethical, Practical Guidance",
      description: "Focused on clear next steps across visas, scholarships, migration planning, and global opportunities.",
    },
  ],
  galleryImages: [
    // Expecting files under /public/images/leadership/sir-raza/
    // Example format:
    // { src: "/images/leadership/sir-raza/event-1.jpg", alt: "Sir Raza speaking at an event", caption: "Public speaking session" }
  ],
};
