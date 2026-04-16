import MapSection from "@/components/common/MapSection";
import ServiceSection from "@/components/common/ServiceSection";
import VisualCard from "@/components/common/VisualCard";
import AboutSection from "@/components/domains/root/AboutSection";
import HeroSection from "@/components/domains/root/HeroSection";
import LandingConsultationFlowSection from "@/components/domains/root/LandingConsultationFlowSection";
import LandingContactSection from "@/components/domains/root/LandingContactSection";
import LandingFaqTeaserSection from "@/components/domains/root/LandingFaqTeaserSection";
import LandingInquiryCtaSection from "@/components/domains/root/LandingInquiryCtaSection";
import LandingProofStripSection from "@/components/domains/root/LandingProofStripSection";
import LandingRationalUrgencySection from "@/components/domains/root/LandingRationalUrgencySection";
import LandingTestimonialsMarqueeSection from "@/components/domains/root/LandingTestimonialsMarqueeSection";
import WorkSection from "@/components/domains/root/WorkSection";

export default function HomePage() {
   return (
      <div>
         <HeroSection />
         <AboutSection />
         <LandingProofStripSection />
         <LandingRationalUrgencySection />
         <LandingConsultationFlowSection />
         <WorkSection />
         <LandingTestimonialsMarqueeSection />
         <LandingInquiryCtaSection />
         <ServiceSection />
         <VisualCard visualImage="https://res.cloudinary.com/dmtmnadim/image/upload/v1758207419/visualImage1_iweiaj.jpg" />
         <MapSection />
         <LandingFaqTeaserSection />
         <LandingContactSection />
      </div>
   );
}
