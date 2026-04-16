"use client";

import Link from "next/link";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { landingUrgency } from "@/constants/landingValue";
import { useIntersection } from "@/hooks";
import { revealStyle } from "@/utils";

export default function LandingInquiryCtaSection() {
   const { ref: sectionRef, isVisible } = useIntersection();

   return (
      <DefaultLayout>
         <section
            ref={sectionRef}
            className="bg-black px-4 py-20 text-white md:px-6 md:py-28 lg:px-8 lg:py-36"
         >
            <div
               className="flex flex-col gap-12 md:gap-16 lg:flex-row lg:items-end lg:justify-between"
               style={revealStyle(isVisible, 0)}
            >
               <h2 className="text-4xl font-semibold whitespace-pre-line leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  {landingUrgency.headline}
               </h2>
               <div className="flex flex-col gap-6 lg:max-w-lg lg:items-end lg:text-right">
                  <p className="text-14-regular md:text-16-regular lg:text-18-regular text-white/70 break-keep leading-relaxed">
                     {landingUrgency.description}
                  </p>
                  <Link
                     href="/contact"
                     className="text-16-medium md:text-18-medium w-fit border-b border-white pb-1 transition-opacity hover:opacity-70"
                  >
                     {landingUrgency.cta}
                  </Link>
               </div>
            </div>
         </section>
      </DefaultLayout>
   );
}
