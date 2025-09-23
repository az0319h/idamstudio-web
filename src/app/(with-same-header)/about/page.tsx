import FAQSection from "@/components/common/FAQSection";
import PageTitle from "@/components/common/PageTitle";
import ServiceSection from "@/components/common/ServiceSection";
import VisualCard from "@/components/common/VisualCard";
import IntroductionSection from "@/components/domains/about/IntroductionSection";
import PageLayout from "@/components/layout/PageLayout";

export default function AboutPage() {
   return (
      <>
         <PageLayout>
            <PageTitle title="스토리텔링" />
            <IntroductionSection />
            <VisualCard visualImage="https://res.cloudinary.com/dmtmnadim/image/upload/v1758207085/visualImage0_kjfgxj.jpg" />
            <div className="pt-4">
               <ServiceSection />
            </div>
            <FAQSection />
         </PageLayout>
         <VisualCard visualImage="https://res.cloudinary.com/dmtmnadim/image/upload/v1758216554/visualImage3_biof9e.jpg" />
      </>
   );
}
