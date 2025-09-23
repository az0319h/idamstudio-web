"use client";
import { useIntersection } from "@/hooks";
import { revealStyle } from "@/utils";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function CompletedWorksToggle() {
   const router = useRouter();
   const searchParams = useSearchParams();
   const pathname = usePathname(); // 현재 경로 가져오기
   const viewType = searchParams.get("view") || "grid";

   const handleChangeView = (view: "grid" | "list") => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("view", view);
      router.push(`${pathname}?${params.toString()}`);
   };
   const { ref: sectionRef, isVisible } = useIntersection();

   return (
      <div
         ref={sectionRef}
         style={revealStyle(isVisible, 1)}
         className="border-line-black-10 border-t px-4 pt-4"
      >
         <div className="text-14-medium sm:text-16-medium lg:text-18-medium flex gap-1.5 sm:gap-2 lg:gap-2.5">
            <button
               onClick={() => handleChangeView("grid")}
               className={viewType === "grid" ? "text-black" : "text-black/60"}
            >
               갤러리 형태
            </button>
            <button
               onClick={() => handleChangeView("list")}
               className={viewType === "list" ? "text-black" : "text-black/60"}
            >
               목록 형태
            </button>
         </div>
      </div>
   );
}
