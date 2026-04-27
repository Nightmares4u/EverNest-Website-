export type LeadershipProfile = {
  name: string;
  title: string;
  bio: string[];
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
  name: "Mr. Raza",
  title: "CEO & Senior Consultant",
  bio: [
    "Sir Raza is the founder and leading force behind EN Consultants (Pvt) Ltd. With over a decade of experience navigating global education systems and immigration policies, he has successfully guided countless students and professionals toward their international goals.",
    "His expertise spans across major study destinations, complex immigration advisory, and fostering strong institutional partnerships worldwide.",
  ],
  experienceSince: 2013,
  areasOfExpertise: [
    "Study Abroad Consulting",
    "Immigration Advisory",
    "Institutional Partnerships",
    "B2B Partnerships",
    "University Relationships",
  ],
  credentials: [
    {
      label: "Decade of Excellence",
      description: "Company registered and operating successfully since 2013.",
    },
    {
      label: "Global Network",
      description: "Extensive engagements with universities and educational institutions globally.",
    },
    {
      label: "Trusted Advisory",
      description: "Providing credible, transparent, and expert guidance for international students.",
    },
  ],
  galleryImages: [
    // Expecting files under /public/images/leadership/sir-raza/
    // Example format:
    // { src: "/images/leadership/sir-raza/event-1.jpg", alt: "Sir Raza speaking at an event", caption: "Public speaking session" }
  ],
};
