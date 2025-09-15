"use client";
import { useIntersection } from "@/hooks";
import { revealStyle } from "@/utils";
import Link from "next/link";

export default function WorkHeaderSection() {
   const { ref: sectionRef, isVisible } = useIntersection();

   return (
      <div ref={sectionRef}>
         <div
            style={revealStyle(isVisible, 0)}
            className="border-line-black-10 flex flex-wrap items-end justify-between gap-y-2 border-b pb-3 md:pb-5"
         >
            <h2 className="text-5xl font-semibold sm:text-6xl md:text-7xl lg:text-8xl">
               건축 갤러리
            </h2>
            <span className="text-14-regular md:text-16-regular lg:text-18-regular sm:hidden md:block">
               (2021 ~ 2025)
            </span>
            <Link
               href={"/work"}
               className="text-14-regular lg:text-18-regular md:text-16-regular hidden underline sm:block"
            >
               작업 사례 더 보기
            </Link>
         </div>
         <div
            style={revealStyle(isVisible, 0)}
            className="pt-3 text-right sm:hidden"
         >
            <Link href={"/work"} className="text-14-regular underline">
               작업 사례 더 보기
            </Link>
         </div>
      </div>
   );
}
