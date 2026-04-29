export type OfficeBranch = "Karachi" | "Lahore" | (string & {})

export type OfficeMediaItem = {
  id: string
  branch: OfficeBranch
  type: "image" | "video"
  src: string
  poster?: string
  title?: string
  caption?: string
  alt: string
  featured?: boolean
}

export type OfficeBranchMeta = {
  branch: OfficeBranch
  label: string
  address: string
}

export const officeBranches: OfficeBranchMeta[] = [
  {
    branch: "Karachi",
    label: "Karachi Office",
    address:
      "Office #912 Portway Trade Center (PTC) - Business Center, SMCHS, Shahrah-e-Faisal, Karachi, Pakistan.",
  },
  {
    branch: "Lahore",
    label: "Lahore Office",
    address:
      "Venture Hub, Plot No. 744, Office No. G02, Johar Town, Block G4 Phase 2, Lahore, Pakistan.",
  },
]

export const officeMedia: OfficeMediaItem[] = [
  {
    id: "karachi-pic-1",
    branch: "Karachi",
    type: "image",
    src: "/images/offices/karachi/karachi-pic-1.png",
    title: "Consultation Room",
    caption: "Karachi office consultation room and student guidance workspace.",
    alt: "Consultation room inside Evernest Consultants Karachi office",
    featured: true,
  },
  {
    id: "karachi-pic-2",
    branch: "Karachi",
    type: "image",
    src: "/images/offices/karachi/karachi-pic-2.png",
    title: "Private Office",
    caption: "Private office space inside the Karachi branch for one-to-one counselling and case handling.",
    alt: "Private office inside Evernest Consultants Karachi branch",
  },
  {
    id: "lahore-pic-1",
    branch: "Lahore",
    type: "image",
    src: "/images/offices/lahore/lahore-pic-1.jpg",
    title: "Work Floor",
    caption: "Lahore branch operations and student support desks.",
    alt: "Evernest Consultants Lahore office work floor",
    featured: true,
  },
  {
    id: "lahore-pic-3",
    branch: "Lahore",
    type: "image",
    src: "/images/offices/lahore/lahore-pic-3.jpg",
    title: "Student Campaign Display",
    caption: "Branch media and destination-focused student outreach display.",
    alt: "Promotional display inside Evernest Consultants Lahore office",
  },
  {
    id: "lahore-pic-4",
    branch: "Lahore",
    type: "image",
    src: "/images/offices/lahore/lahore-pic-4.jpg",
    title: "Consultation Space",
    caption: "A consultation and waiting area designed for in-person student guidance.",
    alt: "Consultation area inside Evernest Consultants Lahore office",
  },
  // Future examples:
  // {
  //   id: "karachi-pic-1",
  //   branch: "Karachi",
  //   type: "image",
  //   src: "/images/offices/karachi/karachi-pic-1.jpg",
  //   title: "Reception Area",
  //   caption: "Front-desk and client welcome area in Karachi.",
  //   alt: "Reception area of Evernest Consultants Karachi office",
  // },
  // {
  //   id: "karachi-vid-1",
  //   branch: "Karachi",
  //   type: "video",
  //   src: "/videos/offices/karachi/karachi-vid-1.mp4",
  //   poster: "/images/offices/karachi/karachi-vid-1-poster.jpg",
  //   title: "Karachi Office Walkthrough",
  //   caption: "Muted preview of the Karachi office interior.",
  //   alt: "Muted walkthrough preview of Evernest Consultants Karachi office",
  // },
]
