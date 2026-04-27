export type MediaFeature = {
  id: string;
  title: string;
  description?: string;
  platform: "youtube" | "podcast" | "news";
  url: string;
  youtubeId?: string; // e.g. 'dQw4w9WgXcQ'
  thumbnailPath?: string;
  date?: string;
};

export const mediaFeatures: MediaFeature[] = [
  // Examples to be filled by the user later:
  // {
  //   id: "podcast-1",
  //   title: "Global Education Trends 2024",
  //   description: "Discussing the future of study abroad opportunities.",
  //   platform: "youtube",
  //   url: "https://youtube.com/watch?v=...",
  //   youtubeId: "...",
  // }
];
