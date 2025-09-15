import ProjectsList from "@/components/common/ProjectsList";
import ProjectCardSkeleton from "@/components/skeleton/ProjectCardSkeleton";
import SkeletonLayout from "@/components/skeleton/SkeletonLayout";
import { Suspense } from "react";

export default function WorkBodySection() {
   return (
      <Suspense
         fallback={
            <div className="grid grid-cols-1 gap-8 pt-3 md:grid-cols-2 md:gap-x-5 md:gap-y-16 md:pt-5">
               <SkeletonLayout
                  count={4}
                  SkeletonComponent={ProjectCardSkeleton}
               />
            </div>
         }
      >
         <ProjectsList />
      </Suspense>
   );
}
