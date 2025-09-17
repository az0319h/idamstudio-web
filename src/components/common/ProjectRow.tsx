"use client";

import { useIntersection } from "@/hooks";
import { Project } from "@/lib/types";
import { revealStyle } from "@/utils";
import Image from "next/image";
import Link from "next/link";

export default function ProjectRow(props: Project) {
   const { id, title, year, mainImage, usage, type } = props;
   const { ref: sectionRef, isVisible } = useIntersection();

   return (
      <div ref={sectionRef} className="lg:w-8/10">
         <Link
            href={`/work/${id}`}
            style={revealStyle(isVisible, 1)}
            className="group border-line-black-10 flex justify-between gap-6 border-b py-4 break-keep"
         >
            <div className="flex-wrap sm:flex sm:gap-4 md:gap-8 lg:gap-12">
               <span className="text-14-medium sm:text-16-medium md:text-18-medium lg:text-20-regular">
                  {year}
               </span>
               <h4 className="text-20-medium sm:text-24-medium md:text-28-medium lg:text-30-medium">
                  {title}
               </h4>
               <span className="text-14-medium sm:text-16-medium md:text-18-medium lg:text-20-medium relative hidden h-fit w-fit text-nowrap after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 group-hover:after:origin-left group-hover:after:scale-x-100 lg:block">
                  {usage} · {type}
               </span>
            </div>
            <div className="w-2/8">
               <div className="overflow-hidden">
                  <Image
                     src={mainImage}
                     alt={`${title}-Image`}
                     width={0} // Next.js에서 required, 0 넣고
                     height={0}
                     sizes="100vw" // 뷰포트 기준으로 꽉 채움
                     className="h-auto w-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
               </div>
            </div>
         </Link>
      </div>
   );
}
