export type VideoReel = {
  id: string
  title: string
  label: string
  description: string
  youtubeId: string
  sourceUrl: string
  embedUrl: string
  active: boolean
}

export const videoReels: VideoReel[] = [
  {
    id: "hanzala-sapienza-success",
    title: "Hanzala's Sapienza University Success",
    label: "Student Success Reel",
    description:
      "Hanzala secured admission to Sapienza University of Rome, Italy's top-ranked university and one of the oldest universities in the world, with EverNest's study abroad guidance.",
    youtubeId: "srLSVZ4eDj8",
    sourceUrl: "https://youtube.com/shorts/srLSVZ4eDj8?feature=share",
    embedUrl: "https://www.youtube.com/embed/srLSVZ4eDj8",
    active: true,
  },
]

export const activeVideoReels = videoReels.filter((reel) => reel.active)
