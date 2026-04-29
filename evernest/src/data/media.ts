export type MediaPlatform = "youtube" | "tiktok" | "facebook" | "coming-soon";

export type MediaFeature = {
  id: string;
  title: string;
  description: string;
  platform: MediaPlatform;
  label?: string;
  url?: string;
  youtubeEmbedUrl?: string;
  ctaLabel?: string;
  featured?: boolean;
};

export const sirRazaMediaSection = {
  heading: "In Conversation with Mr. Raza",
  subtitle:
    "Watch selected podcasts and public sessions where Mr. Raza discusses study abroad, immigration pathways, scholarships, visas, and global opportunities.",
};

export const mediaFeatures: MediaFeature[] = [
  {
    id: "syed-raza-the-visa-expert",
    title: "Syed Raza: The Visa Expert",
    description:
      "Mr. Raza shares practical guidance on visas, international education, and global pathways.",
    platform: "youtube",
    label: "YouTube Feature",
    url: "https://youtu.be/aHTRGpQ85vE?si=rSAnINNPtinef3_W",
    youtubeEmbedUrl: "https://www.youtube.com/embed/aHTRGpQ85vE",
    ctaLabel: "Watch on YouTube",
    featured: true,
  },
  {
    id: "scholarships-visas-eu",
    title: "How to Get Scholarships and Visas for the EU",
    description:
      "A focused discussion on scholarships, European study options, and visa planning.",
    platform: "youtube",
    label: "YouTube Podcast",
    url: "https://www.youtube.com/watch?v=OJKEuyWwNZ8",
    youtubeEmbedUrl: "https://www.youtube.com/embed/OJKEuyWwNZ8",
    ctaLabel: "Watch on YouTube",
  },
  {
    id: "how-to-get-canadian-pr",
    title: "How to Get Canadian PR",
    description:
      "Mr. Raza discusses Canadian PR pathways and practical immigration planning.",
    platform: "youtube",
    label: "YouTube Podcast",
    url: "https://www.youtube.com/watch?v=TNCQAHXmipA",
    youtubeEmbedUrl: "https://www.youtube.com/embed/TNCQAHXmipA",
    ctaLabel: "Watch on YouTube",
  },
  {
    id: "jinnah-polytechnic-seminar",
    title: "Seminar at Jinnah Polytechnic",
    description:
      "A public seminar session by Mr. Raza at Jinnah Polytechnic, highlighting education and immigration guidance for students.",
    platform: "coming-soon",
    label: "Upcoming Session",
    ctaLabel: "Coming Soon",
  },
];
