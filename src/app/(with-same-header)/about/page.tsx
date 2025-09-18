import PageTitle from "@/components/common/PageTitle";
import IntroductionSection from "@/components/domains/about/IntroductionSection";
import PageLayout from "@/components/layout/PageLayout";

export default function AboutPage() {
   return (
      <PageLayout>
         <PageTitle title="스토리텔링" />
         <IntroductionSection />
      </PageLayout>
   );
}
