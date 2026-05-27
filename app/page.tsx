
import EducationSection from "@/components/home/EducationSection";
import HeroSection from "@/components/home/HeroSection";
import { FeatureSection } from "@/components/projects/FeatureSection";
import ProjectSection from "@/components/projects/ProjectSectiont";


export default function HomePage() {
  return (
     <main className="max-w-full min-h-screen">
         <HeroSection/>
         <EducationSection/>
         <ProjectSection/>
         <FeatureSection/>
     </main>
  );
}
