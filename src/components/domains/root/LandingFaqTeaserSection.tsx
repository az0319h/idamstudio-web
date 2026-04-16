"use client";

import Link from "next/link";
import { faqList } from "@/constants/faq";
import { landingFaqTeaserIndices } from "@/constants/landingPersuasion";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { useIntersection } from "@/hooks";
import { revealStyle } from "@/utils";

export default function LandingFaqTeaserSection() {
   const { ref: sectionRef, isVisible } = useIntersection();
   const items = landingFaqTeaserIndices.map((i) => faqList[i]);

   return (
      <DefaultLayout>
         <section ref={sectionRef} className="py-20 md:py-28 lg:py-36">
            <div
               style={revealStyle(isVisible, 0)}
               className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
            >
               <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  자주 묻는 질문
               </h2>
               <Link
                  href="/about"
                  className="text-14-medium md:text-16-medium w-fit border-b border-black pb-0.5 transition-opacity hover:opacity-60"
               >
                  전체 보기
               </Link>
            </div>

            <ul className="mt-10 flex flex-col md:mt-14 lg:mt-16">
               {items.map((item, index) => (
                  <li
                     key={item.question}
                     className="border-line-black-10 grid gap-4 border-t py-8 md:grid-cols-[1fr_2fr] md:gap-8 md:py-10 lg:py-12"
                     style={revealStyle(isVisible, index + 1)}
                  >
                     <p className="text-16-medium md:text-18-medium lg:text-20-medium">
                        {item.question}
                     </p>
                     <p className="text-14-regular md:text-16-regular text-black/70 break-keep">
                        {item.answer}
                     </p>
                  </li>
               ))}
            </ul>
         </section>
      </DefaultLayout>
   );
}
