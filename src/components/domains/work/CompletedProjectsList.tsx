import getProjects from "@/api/get-projects.action";
import ProjectRow from "@/components/common/ProjectRow";

export default async function CompletedProjectsList() {
   const { success, data } = await getProjects();
   if (!success || !data)
      return (
         <p className="text-16-regular md:text-18-regular py-10 text-center">
            갤러리 데이터를 불러올 수 없습니다.
         </p>
      );
   return (
      <div className="lg:flex lg:flex-col lg:items-end">
         {data.map((project) => (
            <ProjectRow key={project.id} {...project} />
         ))}
      </div>
   );
}
