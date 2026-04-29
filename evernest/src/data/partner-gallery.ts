export type PartnerGalleryItem = {
  id: string;
  imagePath: string;
  imageAlt: string;
  caption: string;
  category: "university" | "council" | "event" | "meeting";
};

export const partnerGallery: PartnerGalleryItem[] = [
  // Examples to be filled by the user later:
  // {
  //   id: "uni-meeting-1",
  //   imagePath: "/images/partners/uni-meeting-1.jpg",
  //   imageAlt: "Institutional meeting with university representative",
  //   caption: "Representative meeting with UK University delegates",
  //   category: "meeting"
  // }
];
