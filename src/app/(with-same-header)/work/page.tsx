import PageTitle from "@/components/common/PageTitle";
import CompletedWorksGrid from "@/components/domains/work/CompletedWorksGrid";
import CompletedWorksList from "@/components/domains/work/CompletedWorksList";
import CompletedWorksToggle from "@/components/domains/work/CompletedWorksToggle";
import PageLayout from "@/components/layout/PageLayout";
import { redirect } from "next/navigation";

export default async function WorkPage({
   searchParams,
}: {
   searchParams: Promise<{ view: string }>;
}) {
   const { view } = await searchParams;

   if (!view) {
      redirect("?view=list");
   }

   let content;
   switch (view) {
      case "grid":
         content = <CompletedWorksGrid />;
         break;
      case "list":
         content = <CompletedWorksList />;
         break;
      default:
         redirect("?tab=1");
   }
   return (
      <PageLayout>
         <PageTitle title="완공 작품" />
         <div>
            <CompletedWorksToggle />
            {content}
         </div>
      </PageLayout>
   );
}
