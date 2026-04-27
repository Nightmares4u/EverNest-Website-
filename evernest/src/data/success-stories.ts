export type SuccessStory = {
  id: string;
  clientName: string;
  serviceType: string;
  destinationCountry?: string;
  outcomeLabel: string;
  testimonialQuote: string;
  displayQuote?: string; // Optional shortened version for display
  imagePath: string;
  imageAlt: string;
  reviewSource?: "google" | "facebook" | "direct" | "video";
  rating?: 1 | 2 | 3 | 4 | 5; // Only if real verified review
  featured: boolean;
  date?: string;
  privacyMode?: "full" | "initials" | "firstName";
  videoUrl?: string; // Optional video paths
  videoPath?: string;
  youtubeUrl?: string;
  instagramUrl?: string;
};

export const successStories: SuccessStory[] = [
  {
    id: "syed-uneeb-south-cyprus",
    clientName: "Syed Uneeb Ur Rehman",
    serviceType: "South Cyprus Study Process",
    destinationCountry: "South Cyprus",
    outcomeLabel: "Visa Approved",
    rating: 5,
    reviewSource: "google",
    testimonialQuote:
      "I had a great experience with Evernest Consultant for my South Cyprus study process. Their team provided excellent support with university admission, documentation, and the visa application. Everything was handled professionally and smoothly, and they were always responsive to my queries. I highly recommend Evernest Consultant to anyone planning to study abroad.",
    displayQuote:
      "EN Consultants supported my South Cyprus study process from university admission to documentation and visa application. The team handled everything professionally, responded to my queries, and made the process smooth. I highly recommend them to anyone planning to study abroad.",
    imagePath: "/images/success-stories/syed-uneeb-south-cyprus.jpg",
    imageAlt: "Syed Uneeb Ur Rehman - South Cyprus Study Visa Success",
    featured: true,
    privacyMode: "full",
  },
  {
    id: "hazique-hina-family-canada",
    clientName: "Hazique & Hina Zaheer",
    serviceType: "Canada Immigration",
    destinationCountry: "Canada",
    outcomeLabel: "Process Success",
    rating: 5,
    reviewSource: "google",
    testimonialQuote:
      "Having our process done with Evernest has been a great experience. Their staff members are really helpful and most importantly friendly and available to help whenever needed. Raza sir has been amazing with all his knowledge and expertise in guiding us through every single path. I would suggest anyone planning to go abroad to go for Evernest.",
    imagePath: "/images/success-stories/hazique-hina-family.jpg",
    imageAlt: "Hazique Zaheer and Hina Khan Family - Canada Immigration Success",
    featured: true,
    privacyMode: "full",
  },
];
