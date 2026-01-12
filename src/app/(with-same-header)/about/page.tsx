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
            <VisualCard visualImage="https://res.cloudinary.com/dmtmnadim/image/upload/v1768182068/%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB1_egrw3e.jpg" />
            <div className="pt-4">
               <ServiceSection />
            </div>
            <FAQSection />
         </PageLayout>
         <VisualCard visualImage="https://res.cloudinary.com/dmtmnadim/image/upload/v1768182397/about2_wljjme.jpg" />
      </>
   );
}
