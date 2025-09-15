import getProjects from "@/api/get-projects.action";
import ProjectCard from "./ProjectCard";

export default async function ProjectsList() {
   const { success, data } = await getProjects();
   if (!success || !data)
      return (
         <p className="text-16-regular md:text-18-regular py-10 text-center">
            갤러리 데이터를 불러올 수 없습니다.
         </p>
      );
   const limitedProjects = data.slice(0, 4);
   return (
      <div className="grid grid-cols-1 gap-8 pt-3 md:grid-cols-2 md:gap-x-5 md:gap-y-16 md:pt-5">
         {limitedProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
         ))}
      </div>
   );
}
