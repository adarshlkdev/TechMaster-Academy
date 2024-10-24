"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Error() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to TechMaster Academy, the best platform for learning technical skills
          on the web. We provide reliable, scalable, and customizable learning
          solutions for your career growth. Whether you&apos;re learning programming,
          web development, or data science, TechMaster has got you covered.
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
