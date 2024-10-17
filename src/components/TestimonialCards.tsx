'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-card";

const techSchoolTestimonials = [
  {
    quote:
      'Joining the TechMaster Academy transformed my understanding of programming and helped me to truly discover my own potential. The instructors are world-class!',
    name: 'Alex Johnson',
    title: 'Python Student',
  },
  {
    quote:
      "The community and support at this school are unmatched. I've grown not just as a web developer, but also as a professional, thanks to their comprehensive approach.",
    name: 'Samantha Lee',
    title: 'Web Development Student',
  },
  {
    quote:
      "This school offered me the tools and confidence to take my coding skills to the next level. I'm endlessly grateful for the personalized coaching.",
    name: 'Michael Chen',
    title: 'JavaScript Student',
  },
  {
    quote:
      'As a data scientist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.',
    name: 'Emily Taylor',
    title: 'Data Science Student',
  },
  {
    quote:
      'The machine learning courses here opened my eyes to the intricacies of algorithms and models. Highly recommend for any aspiring data scientists!',
    name: 'Chris Morales',
    title: 'Machine Learning Student',
  },
];

function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10 text-white">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={techSchoolTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default MusicSchoolTestimonials
