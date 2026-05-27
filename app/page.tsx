
import CompanyMarquee from "@/components/animations/CompanyMarquee";
import { TestimonialSection } from "@/components/animations/TestimonialSection";
import { ContactSection } from "@/components/contact/ContactSection";
import EducationSection from "@/components/home/EducationSection";
import HeroSection from "@/components/home/HeroSection";
import { FeatureSection } from "@/components/projects/FeatureSection";
import FutureFeatureSection from "@/components/projects/FutureFeatureSection";
import ProjectSection from "@/components/projects/ProjectSectiont";


export default function HomePage() {
  return (
     <main className="max-w-full min-h-screen">
         <HeroSection/>
         <EducationSection/>
         <ProjectSection/>
         <FeatureSection/>
         <CompanyMarquee/>
         <FutureFeatureSection/>
         <TestimonialSection/>
         <ContactSection/>
     </main>
  );
}
