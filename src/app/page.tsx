import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeatureSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";

export default function Home() {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
     <HeroSection />
     <FeaturesSection />
     <WhyChooseUsSection />
     <TestimonialCards />
     <UpcomingWebinars />
     <Instructors />
    </div>
      
  );
}
