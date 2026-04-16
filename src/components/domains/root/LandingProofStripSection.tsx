"use client";

import DefaultLayout from "@/components/layout/DefaultLayout";
import { landingProofPoints } from "@/constants/landingPersuasion";
import { useIntersection } from "@/hooks";
import { revealStyle } from "@/utils";

export default function LandingProofStripSection() {
   const { ref: sectionRef, isVisible } = useIntersection();

   return (
      <DefaultLayout>
         <div
            ref={sectionRef}
            className="border-line-black-10 border-y py-12 md:py-16 lg:py-20"
            style={revealStyle(isVisible, 0)}
         >
            <ul className="flex flex-col gap-8 sm:flex-row sm:justify-between sm:gap-4">
               {landingProofPoints.map((item, index) => (
                  <li
                     key={item.label}
                     className={`flex flex-col gap-1 ${
                        index > 0 ? "sm:border-l sm:border-line-black-10 sm:pl-8 lg:pl-12" : ""
                     }`}
                  >
                     <span className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        {item.value}
                     </span>
                     <span className="text-12-regular md:text-14-regular text-black/50">
                        {item.label}
                     </span>
                  </li>
               ))}
            </ul>
         </div>
      </DefaultLayout>
   );
}
