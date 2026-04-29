export type GoogleReview = {
  id: string
  reviewerName: string
  reviewerMeta?: string
  rating: number
  relativeDate?: string
  service?: string
  destination?: string
  category?: "study-visa" | "work-permit" | "immigration" | "admission" | "scholarship"
  shortTitle?: string
  reviewText: string
  displayExcerpt?: string
  featured?: boolean
}

export const googleReviews: GoogleReview[] = [
  {
    id: "amaan-moldova-work-permit",
    reviewerName: "Amaan",
    reviewerMeta: "1 review",
    rating: 5,
    relativeDate: "a week ago",
    category: "work-permit",
    service: "Moldova Work Permit",
    destination: "Moldova",
    shortTitle: "Moldova work permit with practical country guidance",
    reviewText:
      "I am 36 years old with 2 kids, and I was very tense about my future and family. I contacted many consultants for work visas and immigration; most of them offered me a Canada LMIA, but the timeline was very long, like 1.5 years, and the cost was also too high around 80 lakhs, which was not possible for me.\n\nThen I contacted Evernest Consultants. They explained different country options properly, like Canada, the US, Turkey, Moldova, and Romania. My budget was around 30 lakhs, so they suggested a Moldova work permit because of the fast process and access to Europe.\n\nThey have direct contact with recruitment agencies there, and they arranged a job for me in a car wash company. The whole work permit application process took only around 4 months, which was very surprising for me.\n\nNow, Alhamdulillah, I am in Moldova and have been working for the last 6 months. Life is not easy, but I am earning and supporting my family. My plan now is to move to Germany in the future, and they still guide me from time to time.\n\nThe Evernest team is very helpful for work visas and immigration, especially for people who have budget issues and want a fast process. I recommend them.",
    featured: true,
  },
  {
    id: "huzaifa-ahmed-hungary-study-visa",
    reviewerName: "Huzaifa Ahmed",
    reviewerMeta: "2 reviews · 1 photo",
    rating: 5,
    relativeDate: "a week ago",
    category: "study-visa",
    service: "Hungary Study Visa",
    destination: "Hungary",
    shortTitle: "Hungary admission and study visa support",
    reviewText:
      "I was looking for affordable study options in Europe and came across Hungary study visa options but was very confused about universities and process. I contacted Evernest Consultants for guidance.\n\nThey helped me with Hungary student visa, university selection, and complete admission process. I got admission in University of Debrecen and my Hungary study visa was processed smoothly.\n\nNow I am in Hungary studying and everything went well. Highly recommend Evernest for Hungary study visa and Europe study abroad options.",
  },
  {
    id: "suspicious-monger-canada-study-visa",
    reviewerName: "Suspicious Monger",
    reviewerMeta: "2 reviews",
    rating: 5,
    relativeDate: "a week ago",
    category: "study-visa",
    service: "Canada Study Visa",
    destination: "Canada",
    shortTitle: "Canada admission support for University of Alberta",
    reviewText:
      "I wanted to study in Canada but I was confused about process and requirements. I contact Evernest Consultants and they guide me properly for study visa and admission.\n\nThey help me get admission in University of Alberta for Bachelors in Computer Science and complete my whole process smoothly.\n\nNow I am in Canada and studying, everything went good. I recommend them for Canada study visa.",
  },
  {
    id: "moeed-sheikh-uk-study-visa",
    reviewerName: "Moeed Sheikh",
    reviewerMeta: "4 reviews",
    rating: 5,
    relativeDate: "a week ago",
    category: "study-visa",
    service: "UK Study Visa",
    destination: "United Kingdom",
    shortTitle: "UK admission and visa guidance",
    reviewText:
      "I wanted to study in UK but I was confused about process and university selection. I contact Evernest Consultants and they guide me properly for study visa and admission. They help me get admission in University of Hertfordshire and complete my whole process smoothly. Now I am in UK and studying, everything went good. I recommend them for UK study visa.",
  },
  {
    id: "owais-ahmed-turkey-study-visa",
    reviewerName: "Owais Ahmed",
    reviewerMeta: "3 reviews",
    rating: 5,
    relativeDate: "2 weeks ago",
    category: "study-visa",
    service: "Turkey Study Visa",
    destination: "Turkey",
    shortTitle: "Turkey pathway after document challenges",
    reviewText:
      "I initially planned to study in Europe, but due to budget constraints and some document issues, I had to reconsider my options. That’s when Evernest Consultants suggested Turkey as an alternative.\n\nThe main issue in my case was my academic documents. My equivalency was delayed, and there were inconsistencies in my transcripts which could have caused rejection. On top of that, I was confused about whether to go for a public university or private, especially since public universities required a Turkish language pathway.\n\nEvernest handled this very strategically. They guided me to start with a one year Turkish language program and aligned my documents accordingly. They also helped fix my transcript issues and advised me on what to submit and what to hold back to avoid complications.\n\nI ended up securing admission at Istanbul Aydın University for a Bachelor’s in Civil Engineering, and the process went much smoother than I expected after that.\n\nThere were definitely challenges, but the way they handled each issue step by step made the entire journey manageable.",
    featured: true,
  },
  {
    id: "mujtaba-baloch-eb2-niw",
    reviewerName: "Mujtaba Baloch",
    reviewerMeta: "1 review",
    rating: 5,
    relativeDate: "2 weeks ago",
    category: "immigration",
    service: "USA EB-2 NIW",
    destination: "United States",
    shortTitle: "EB-2 NIW guidance for a PhD faculty member",
    reviewText:
      "I’m currently a PhD faculty member teaching in the Computer Science department at Sir Syed University of Engineering and Technology, and around two years ago I started looking into US immigration options.\n\nWhen I connected with Evernest, Sir Raza reviewed my profile and told me straight up that I was a strong fit for the EB-2 National Interest Waiver. I was honestly skeptical at first, but the way they explained everything made sense.\n\nThe process itself was long and required a lot of documentation, but they handled it properly from start to finish. No false promises, just clear guidance.\n\nI’ve now been in the US for the past 2 years, and looking back, I’m really glad I trusted them with my case.",
    featured: true,
  },
  {
    id: "muhammad-saad-saleem-canada-bscs",
    reviewerName: "Muhammad Saad Saleem",
    reviewerMeta: "1 review",
    rating: 5,
    relativeDate: "2 weeks ago",
    category: "study-visa",
    service: "Canada Study Visa",
    destination: "Canada",
    shortTitle: "Canada BSCS process with practical university selection",
    reviewText:
      "Did my BSCS process for Canada through Evernest and honestly the biggest difference was how practical they were with everything.\n\nI initially had a few random universities in mind, but after discussing budget and chances, they narrowed it down and suggested University of Saskatchewan as the safest and most sensible option. That decision alone saved a lot of time.\nAfter that, it was mostly them pushing things forward.\n\nThey kept following up for documents, corrected mistakes before submission, and made sure nothing weak went into the visa file. Financials and SOP were handled properly which is where most people mess up.\nNo long gaps, no confusion, no chasing them around. Things just kept moving.\n\nReached Canada alhumdullilah without any issues, so overall it worked out exactly how it should.",
  },
  {
    id: "wasay-ahmed-usa-study-visa",
    reviewerName: "Wasay Ahmed",
    reviewerMeta: "1 review",
    rating: 5,
    relativeDate: "2 weeks ago",
    category: "study-visa",
    service: "USA Study Visa",
    destination: "United States",
    shortTitle: "USA admission and I-20 intake transfer support",
    reviewText:
      "I came to Evernest Consultants back in February while I was preparing for my A2 exams and exploring options for the US. At that point, I had no clarity on where I would end up.\n\nThey handled my applications and helped me secure multiple admissions, but I decided to go with University of Texas at Austin since I have family there.\n\nI got my visa by August, but due to some family issues I could not travel for the Fall intake, which honestly made me feel like all my effort was wasted. Evernest stepped in right away, and Sir Raza personally got my I-20 transferred to the Winter intake and reassured me throughout.\n\nNow I am here in Texas, heading into my first semester finals, Alhamdulillah. Really grateful for how they handled everything when it mattered most.",
    featured: true,
  },
  {
    id: "rehan-khan-cyprus-study-visa",
    reviewerName: "Rehan Khan",
    reviewerMeta: "4 reviews",
    rating: 5,
    relativeDate: "2 weeks ago",
    category: "study-visa",
    service: "Cyprus Study Visa",
    destination: "Cyprus",
    shortTitle: "Cyprus software engineering admission support",
    reviewText:
      "Cyprus was not something I initially considered, but most of my other options were either too expensive or complicated. Evernest Consultants suggested it as a practical alternative and explained everything clearly.\n\nI ended up applying to Near East University for a Bachelor’s in Software Engineering. The process was straightforward, and they guided me through documents, application, and visa steps without any confusion.\n\nI have now secured my admission and am preparing for the next stage. Looking back, it turned out to be a smart and realistic option for me.",
  },
  {
    id: "mehdi-imam-usa-study-visa",
    reviewerName: "Mehdi Imam",
    reviewerMeta: "1 review",
    rating: 5,
    relativeDate: "2 weeks ago",
    category: "study-visa",
    service: "USA Study Visa",
    destination: "United States",
    shortTitle: "USA visa appointment support",
    reviewText:
      "I applied for the US this year, and the entire process has honestly been stressful, especially when it came to securing the visa appointment.\n\nAfter completing my application, I found out that embassy slots were extremely limited. The earliest available appointments were showing from September 17th, which is after my classes are supposed to start, so that really worried me.\n\nEvernest Consultants stepped in at that point and handled it for me. Through their guidance and connections, they were able to secure me an appointment on April 29th, which honestly felt like a huge relief.\n\nRight now I am just waiting for my interview and hoping everything goes smoothly, so wish me luck.\n\nOverall, throughout this whole process, they have been nothing but supportive and professional.",
  },
  {
    id: "hasan-ali-saudi-arabia-admission",
    reviewerName: "Hasan Ali",
    reviewerMeta: "1 review",
    rating: 5,
    relativeDate: "2 weeks ago",
    category: "scholarship",
    service: "Saudi Arabia Admission",
    destination: "Saudi Arabia",
    shortTitle: "KFUPM admission with 50% scholarship",
    reviewText:
      "I completed my A Levels from Nixor College in 2024 with all Bs, and during my A2 year I was honestly very unsure about my options for studying abroad. In December 2023, Evernest Consultants visited our campus, and that is when I first got introduced to them. At that point I was quite stressed because most countries either required higher grades or were too expensive for me.\n\nAfter speaking with their team, they suggested Saudi Arabia as an option. I had not really considered it before, but when they explained the universities, costs, and overall pathway, it actually seemed like a very practical and smart choice.\n\nWe started the application process soon after that. They guided me through everything step by step, including university selection, document preparation, and submissions. The process felt structured and clear, which made a big difference because I had no prior experience with admissions.\n\nI ended up securing admission in a Bachelor’s in Civil Engineering at King Fahd University of Petroleum and Minerals with a 50 percent scholarship. I flew out in September 2024, just a few months after completing my A Levels.\n\nIt has now been almost a year since I moved. I will be honest, adjusting to life abroad has been challenging at times. Managing studies, living independently, and adapting to a new environment is not easy. But at the same time, I can clearly see that this decision has put me on the right path for my future.\n\nLooking back, Evernest Consultants played a major role in making this happen. From that first interaction during A2 to finally flying out, they handled everything professionally and made the whole process manageable for me.\n\nI would definitely recommend them to students who feel unsure about their options or think their grades might limit them.",
    featured: true,
  },
]

export const homepageGoogleReviews = googleReviews.filter((review) =>
  ["amaan-moldova-work-permit", "mujtaba-baloch-eb2-niw", "hasan-ali-saudi-arabia-admission"].includes(review.id),
)

export const successStoriesGoogleReviews = googleReviews.slice(0, 15)
