"use client";

import DefaultLayout from "@/components/layout/DefaultLayout";
import { companyData } from "@/constants/companyData";
import { landingConsultationSteps } from "@/constants/landingConsultation";
import { useIntersection } from "@/hooks";
import { revealStyle } from "@/utils";

export default function LandingConsultationFlowSection() {
   const { ref: sectionRef, isVisible } = useIntersection();
   const telHref = `tel:${companyData.phone.replace(/-/g, "")}`;

   return (
      <DefaultLayout>
         <section ref={sectionRef} className="py-20 md:py-28 lg:py-36">
            <div
               className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
               style={revealStyle(isVisible, 0)}
            >
               <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  진행 과정
               </h2>
               <a
                  href={telHref}
                  className="text-14-medium md:text-16-medium w-fit border-b border-black pb-0.5 transition-opacity hover:opacity-60"
               >
                  {companyData.phone}
               </a>
            </div>

            <ul
               className="mt-12 grid grid-cols-2 gap-8 md:mt-16 md:grid-cols-4 md:gap-6 lg:mt-20 lg:gap-8"
               style={revealStyle(isVisible, 1)}
            >
               {landingConsultationSteps.map((item) => (
                  <li key={item.num} className="flex flex-col gap-3">
                     <span className="text-5xl font-light text-black/20 md:text-6xl lg:text-7xl">
                        {item.num}
                     </span>
                     <h3 className="text-18-medium md:text-20-medium lg:text-22-medium">
                        {item.title}
                     </h3>
                     <p className="text-12-regular md:text-14-regular text-black/60">
                        {item.description}
                     </p>
                  </li>
               ))}
            </ul>
         </section>
      </DefaultLayout>
   );
}
