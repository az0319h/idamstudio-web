import PageTitle from "@/components/common/PageTitle";
import AboutLocation from "@/components/domains/location/AboutLocation";
import LocationMap from "@/components/domains/location/LocationMap";
import PageLayout from "@/components/layout/PageLayout";

export default function LocationPage() {
   return (
      <PageLayout>
         <PageTitle title="우리의 출발점" />
         <LocationMap />
         <AboutLocation />
      </PageLayout>
   );
}
