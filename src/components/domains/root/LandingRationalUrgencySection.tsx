"use client";

import Link from "next/link";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { landingValueProps } from "@/constants/landingValue";
import { useIntersection } from "@/hooks";
import { revealStyle } from "@/utils";

export default function LandingRationalUrgencySection() {
   const { ref: sectionRef, isVisible } = useIntersection();

   return (
      <DefaultLayout>
         <section
            ref={sectionRef}
            className="py-20 md:py-28 lg:py-36"
         >
            <div
               className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
               style={revealStyle(isVisible, 0)}
            >
               <h2 className="text-5xl leading-tight font-semibold whitespace-pre-line tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                  {landingValueProps.headline}
               </h2>
               <div className="flex flex-col gap-4 md:max-w-sm md:items-end md:text-right lg:max-w-md">
                  <p className="text-14-regular md:text-16-regular lg:text-18-regular text-black/70 break-keep">
                     {landingValueProps.description}
                  </p>
                  <Link
                     href="/contact"
                     className="text-14-medium md:text-16-medium w-fit border-b border-black pb-0.5 transition-opacity hover:opacity-60"
                  >
                     {landingValueProps.cta}
                  </Link>
               </div>
            </div>
         </section>
      </DefaultLayout>
   );
}
