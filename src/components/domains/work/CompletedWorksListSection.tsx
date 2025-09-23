import { Suspense } from "react";
import CompletedProjectsList from "./CompletedProjectsList";
import SkeletonLayout from "@/components/skeleton/SkeletonLayout";
import ProjectRowSkeleton from "@/components/skeleton/ProjectRowSkeleton";

export default function CompletedWorksListSection() {
   return (
      <Suspense
         fallback={
            <div className="lg:flex lg:flex-col lg:items-end">
               <SkeletonLayout
                  count={6}
                  SkeletonComponent={ProjectRowSkeleton}
               />
            </div>
         }
      >
         <CompletedProjectsList />
      </Suspense>
   );
}
