import { getRandomProjects } from "@/api/get-random-projects.action";
import ProjectCard from "@/components/common/ProjectCard";

export default async function OtherProject({ id }: { id: string }) {
   const projects = await getRandomProjects(id);
   return (
      <div className="border-line-black-10 border-t p-4 lg:flex lg:justify-end">
         <div className="sm:flex sm:gap-10 md:gap-12 lg:max-w-[70%] lg:gap-20">
            <p className="text-16-medium pb-4 text-nowrap">또 다른 공간들</p>
            <div className="grid grid-cols-1 gap-4 sm:gap-8 md:grid-cols-2 md:gap-4">
               {projects.map((project) => (
                  <ProjectCard key={project.id} {...project} />
               ))}
            </div>
         </div>
      </div>
   );
}
