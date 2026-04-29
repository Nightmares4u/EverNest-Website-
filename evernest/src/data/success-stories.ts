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
  imageFit?: "cover" | "contain";
  imagePosition?: string;
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
  {
    id: "kashif-arain-italy",
    clientName: "Kashif Arain",
    serviceType: "Italy Student Visa",
    destinationCountry: "Italy",
    outcomeLabel: "Visa Approved",
    reviewSource: "direct",
    testimonialQuote:
      "I am delighted to say that I got my Italy student visa, Alhamdulillah, through Evernest Consultancy. I am grateful to Sir Raza for providing me guidance, securing my admission in Italy's number one university, Sapienza University, and helping me manage the bank statements and FBR returns in a way that looked proper and authentic. To accomplish my goal, Sir Raza always guided me, answered my calls, and responded to my messages on time. The overall process was stress-free and well guided. I highly recommend Evernest Consultancy.",
    displayQuote:
      "Evernest Consultancy helped me secure admission to Sapienza University and guided me through my Italy student visa process, including support with bank statements and FBR returns. Sir Raza stayed responsive throughout and made the whole journey stress-free. I highly recommend them.",
    imagePath: "/images/success-stories/kashif-arain-italy.jpg",
    imageAlt: "Kashif Arain with Sir Raza after Italy student visa approval",
    imageFit: "contain",
    imagePosition: "center 72%",
    featured: true,
    privacyMode: "full",
  },
  {
    id: "muhammad-ashar",
    clientName: "Muhammad Ashar",
    serviceType: "Malaysia Study Permit",
    destinationCountry: "Malaysia",
    outcomeLabel: "Visa Approved",
    rating: 5,
    reviewSource: "direct",
    testimonialQuote:
      "I had a great experience with Evernest Consultant for my visa process. Their team was professional, supportive, and guided me through every step smoothly. A special thanks to Sir Raza for his constant help, expert advice, and dedication, which played a key role in the successful approval of my visa. Highly recommended!",
    displayQuote:
      "Evernest Consultant guided me smoothly through my visa process with professional, supportive service at every step. Sir Raza's constant help, expert advice, and dedication played a key role in my successful visa approval. Highly recommended.",
    imagePath: "/images/success-stories/muhammad-ashar.jpg",
    imageAlt: "Muhammad Ashar with Sir Raza after Malaysia study permit approval",
    imageFit: "contain",
    imagePosition: "center 86%",
    featured: true,
    privacyMode: "full",
  },
  {
    id: "saboor-quadwai",
    clientName: "Saboor Quadwai",
    serviceType: "Immigration Process",
    outcomeLabel: "Visa Approved",
    rating: 5,
    reviewSource: "direct",
    testimonialQuote:
      "I had an outstanding experience with Mr. Raza. From start to till date, he provided impeccable service and guidance that surpassed my expectations. Mr. Raza is highly knowledgeable about immigration processes and laws, ensuring that every step of my application was handled with precision and expertise. He patiently answered all my questions and concerns, making me feel confident throughout the entire process. Moreover, his professionalism is remarkable as he kept me updated and promptly responded to any inquiries I had. I truly felt like he cared about my case and was committed to helping me achieve my immigration goals. I highly recommend Evernest to anyone seeking immigration services. Their dedication to their clients and extensive expertise make them stand out in the field. Thank you once again for your exceptional service!",
    displayQuote:
      "Mr. Raza provided expert guidance, clear communication, and dependable support throughout my immigration process. He handled every step with professionalism, kept me updated, and made me feel confident from start to finish. I highly recommend Evernest for immigration services.",
    imagePath: "/images/success-stories/saboor-quadwai.jpg",
    imageAlt: "Saboor Quadwai holding his visa with Evernest branding in the background",
    imageFit: "contain",
    imagePosition: "center 84%",
    featured: true,
    privacyMode: "full",
  },
];
