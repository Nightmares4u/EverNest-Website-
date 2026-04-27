import { PlayCircle, Star, Quote } from "lucide-react"
import { FinalCTA } from "@/components/sections/FinalCTA"

const stories = [
  {
    name: "Ahmed Raza",
    category: "Study Visa",
    destination: "Italy",
    program: "Masters in Data Science",
    quote: "Evernest made my study visa process incredibly smooth. Their team guided me through every documentation step, ensuring my admission to a top Italian university. The pre-departure briefing was especially helpful.",
    type: "video"
  },
  {
    name: "Fatima & Family",
    category: "Immigration",
    destination: "Canada",
    program: "Express Entry (PR)",
    quote: "After months of confusion, the experts at Evernest provided a clear strategy for our Canada PR. We just received our ITA and couldn't be happier. Highly recommend their transparent process.",
    type: "text"
  },
  {
    name: "Usman Ali",
    category: "Immigration",
    destination: "USA",
    program: "EB-2 NIW",
    quote: "The level of professionalism here is unmatched. They handled my complex EB-2 NIW case with complete transparency and diligence. Building the National Interest Waiver profile was flawless.",
    type: "text"
  },
  {
    name: "Ayesha Malik",
    category: "Study Visa",
    destination: "France",
    program: "MBA",
    quote: "Securing admission in a top French Business School seemed impossible until I met the Evernest team. They helped with my SOP, interview prep for Campus France, and accommodation.",
    type: "video"
  },
  {
    name: "Hassan Family",
    category: "Immigration",
    destination: "Australia",
    program: "Subclass 189",
    quote: "The skills assessment phase was daunting, but Evernest's step-by-step guidance made it seamless. We are now happily settled in Melbourne.",
    type: "text"
  },
  {
    name: "Zainab R.",
    category: "Study Visa",
    destination: "Germany",
    program: "BSc Engineering",
    quote: "Opening the blocked account and getting the Visa appointment was so stressful, but Evernest handled the bureaucracy perfectly. I'm now enjoying my tuition-free education in Berlin.",
    type: "text"
  }
]

export default function SuccessStoriesPage() {
  return (
    <>
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-brand-ice overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-brand-blue mb-6">
            Real People. <span className="text-brand-red">Real Success.</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 mb-10 leading-relaxed max-w-2xl mx-auto">
            Thousands of students and professionals have trusted Evernest with their global aspirations. Here are some of their stories.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, i) => (
              <div key={i} className="flex flex-col bg-brand-neutral rounded-3xl p-8 border border-border-subtle relative overflow-hidden group hover:shadow-card transition-all hover:-translate-y-1">
                {story.type === 'video' && (
                  <div className="absolute inset-0 bg-brand-blue/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer z-10 backdrop-blur-[2px]">
                    <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-lg text-brand-red transform transition-transform group-hover:scale-110">
                      <PlayCircle className="h-8 w-8" />
                    </div>
                  </div>
                )}
                
                <div className="flex justify-between items-start mb-6">
                  <div className="flex text-brand-red">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-white px-3 py-1 rounded-full border border-border-subtle shadow-sm">
                    {story.category}
                  </div>
                </div>
                
                <Quote className="h-8 w-8 text-brand-ice mb-4 rotate-180" />
                
                <p className="text-foreground/80 italic mb-8 flex-grow leading-relaxed relative z-0">
                  "{story.quote}"
                </p>
                
                <div className="mt-auto pt-6 border-t border-border-subtle flex items-center justify-between">
                  <div>
                    <div className="font-bold text-brand-blue text-lg">{story.name}</div>
                    <div className="text-sm text-foreground/60">{story.program}</div>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-white border border-border-subtle flex items-center justify-center text-brand-blue font-bold text-sm shadow-sm">
                    {story.destination.substring(0, 2).toUpperCase()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}