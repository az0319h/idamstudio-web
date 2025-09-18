import ServiceSection from "@/components/common/ServiceSection";
import AboutSection from "@/components/domains/root/AboutSection";
import HeroSection from "@/components/domains/root/HeroSection";
import WorkSection from "@/components/domains/root/WorkSection";

export default function HomePage() {
   return (
      <div>
         <HeroSection />
         <AboutSection />
         <WorkSection />
         <ServiceSection />
      </div>
   );
}
