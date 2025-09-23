"use client";

import { useIntersection } from "@/hooks";
import { revealStyle } from "@/utils";

export default function PageTitle({ title }: { title: string }) {
   const { ref: sectionRef, isVisible } = useIntersection();

   return (
      <div ref={sectionRef} className="px-4 pb-20 md:pb-40 lg:pb-47.5">
         <h2
            style={revealStyle(isVisible, 0)}
            className="text-5xl leading-14 font-semibold break-keep sm:text-[9vw] sm:leading-[115%]"
         >
            {title}
         </h2>
      </div>
   );
}
