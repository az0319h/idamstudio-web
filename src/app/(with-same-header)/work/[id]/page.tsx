import { getProjectById } from "@/api/get-project.action";
import PageTitle from "@/components/common/PageTitle";
import OtherProject from "@/components/domains/work/OtherProjects";
import WorkDetail from "@/components/domains/work/WorkDetail";
import PageLayout from "@/components/layout/PageLayout";
import { Project } from "@/lib/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";

async function fetchProject(id: string): Promise<Project> {
   const { success, data } = await getProjectById(id);
   if (!success || !data) return notFound();
   return data as Project;
}

export async function generateMetadata({
   params,
}: {
   params: Promise<{ id: string }>;
}): Promise<Metadata> {
   const { id } = await params;
   const project = await fetchProject(id);

   const title = `${project.title} - 이담 건축`;
   const description =
      project.description.length > 120
         ? project.description.slice(0, 117) + "..."
         : project.description;

   const url = `https://idamstudio.kr/work/${project.id}`;
   const imageUrl = project.mainImage || "/og-image.png";

   return {
      title,
      description,
      icons: { icon: "/favicon.ico" },
      openGraph: {
         title,
         description,
         url,
         siteName: "이담 건축",
         images: [
            {
               url: imageUrl,
               width: 1200,
               height: 630,
               alt: `${project.title} 대표 이미지`,
            },
         ],
         locale: "ko_KR",
         type: "article",
      },
      twitter: {
         card: "summary_large_image",
         title,
         description,
         images: [imageUrl],
      },
   };
}

export default async function WorkDetailPage({
   params,
}: {
   params: Promise<{ id: string }>;
}) {
   const { id } = await params;
   const project = await fetchProject(id);

   return (
      <>
         <PageLayout>
            <PageTitle title={project.title} />
            <WorkDetail {...project} />
         </PageLayout>
         <PageLayout>
            <OtherProject id={project.id} />
         </PageLayout>
      </>
   );
}
