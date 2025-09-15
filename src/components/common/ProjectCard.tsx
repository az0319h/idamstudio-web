"use client";
import { useIntersection } from "@/hooks";
import { revealStyle } from "@/utils";
import { Spectral } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const spectral = Spectral({
   subsets: ["latin"],
   weight: ["400"],
   style: ["normal", "italic"],
});

export default function ProjectCard({ ...props }) {
   const { ref: sectionRef, isVisible } = useIntersection();
   const { id, title, usage, type, mainImage } = props;

   return (
      <div ref={sectionRef}>
         <Link
            href={`/project/${id}`}
            style={revealStyle(isVisible, 0)}
            className="group flex flex-col gap-2"
         >
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
            <div>
               <h3 className="text-14-medium sm:text-16-medium md:text-20-medium relative w-fit after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 group-hover:after:origin-left group-hover:after:scale-x-100">
                  {title}
               </h3>
               <em
                  className={`${spectral.className} text-14-regular sm:text-16-regular md:text-18-regular`}
               >
                  {usage} · {type}
               </em>
            </div>
         </Link>
      </div>
   );
}
