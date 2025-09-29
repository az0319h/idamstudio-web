"use client";

import { useIntersection } from "@/hooks";
import { revealStyle } from "@/utils/revealStyle";
import Image from "next/image";

export default function WorkSubImage({
   src,
   index,
   span,
}: {
   src: string;
   index: number;
   span?: boolean;
}) {
   const { ref, isVisible } = useIntersection({ threshold: 0.1 });

   return (
      <div
         ref={ref}
         style={revealStyle(isVisible, index, 150)}
         className={span ? "md:col-span-2" : ""}
      >
         <Image
            src={src}
            alt={`${src}-Image`}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full"
         />
      </div>
   );
}
