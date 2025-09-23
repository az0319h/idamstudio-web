import { getProjectById } from "@/api/get-project.action";
import PageTitle from "@/components/common/PageTitle";
import OtherProject from "@/components/domains/work/OtherProjects";
import WorkDetail from "@/components/domains/work/WorkDetail";
import PageLayout from "@/components/layout/PageLayout";
import { notFound } from "next/navigation";

export default async function WorkDetailPage({
   params,
}: {
   params: Promise<{ id: string }>;
}) {
   const { id } = await params;
   const { success, data } = await getProjectById(id);
   if (!success || !data) return notFound();
   return (
      <>
         <PageLayout>
            <PageTitle title={data.title} />
            <WorkDetail {...data} />
         </PageLayout>
         <PageLayout>
            <OtherProject id={data.id} />
         </PageLayout>
      </>
   );
}
