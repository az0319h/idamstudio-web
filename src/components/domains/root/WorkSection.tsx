import DefaultLayout from "@/components/layout/DefaultLayout";
import WorkHeaderSection from "./WorkHeaderSection";
import WorkBodySection from "./WorkBodySection";

export default function WorkSection() {
   return (
      <DefaultLayout>
         <WorkHeaderSection />
         <WorkBodySection />
      </DefaultLayout>
   );
}
