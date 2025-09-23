import MapSection from "@/components/common/MapSection";
import ServiceSection from "@/components/common/ServiceSection";
import VisualCard from "@/components/common/VisualCard";
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
         <VisualCard visualImage="https://res.cloudinary.com/dmtmnadim/image/upload/v1758207419/visualImage1_iweiaj.jpg" />
         <MapSection />
      </div>
   );
}
