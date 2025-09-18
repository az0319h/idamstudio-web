"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useScaleIntersection } from "@/hooks";

export default function VisualCard({ visualImage }: { visualImage: string }) {
   const { ref, isVisible } = useScaleIntersection();

   return (
      <div ref={ref} className="relative mb-4 overflow-hidden">
         <motion.div
            animate={{ scale: isVisible ? 1.05 : 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
         >
            <Image
               src={visualImage}
               alt="visual"
               width={0}
               height={0}
               sizes="100vw"
               className="h-auto w-full"
            />
         </motion.div>

         {/* 블랙 오버레이 */}
         <div className="pointer-events-none absolute inset-0 bg-black/30" />
      </div>
   );
}
