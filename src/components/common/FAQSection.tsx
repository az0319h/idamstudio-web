"use client";

import { faqList } from "@/constants/faq";
import { useIntersection } from "@/hooks";
import { revealStyle } from "@/utils";
import { IoMdHelpCircle } from "react-icons/io";
import { PiStarFourFill } from "react-icons/pi";

interface FAQItem {
   question: string;
   answer: string;
}

export default function FAQSection() {
   const { ref: sectionRef, isVisible } = useIntersection({ threshold: 0.1 });

   return (
      <div
         ref={sectionRef}
         style={revealStyle(isVisible, 0)}
         className="bg-black p-4 break-keep text-white"
      >
         <div className="pb-12 md:pb-32">
            <h2 className="text-14-regular md:text-16-regular">
               이담 건축이 답합니다
            </h2>
            <p className="md:indent-8rem text-24-medium md:text-30-medium lg:indent-20rem pt-4 lg:text-5xl lg:leading-14">
               이담 건축은 단순한 시공업체가 아니라, 처음 상담부터
               설계·시공·완공 이후 관리까지 함께하는 파트너입니다. 고객이 가장
               궁금해하는 부분을 명확하게 안내드리고, 작은 공사부터 큰
               프로젝트까지 투명하고 책임 있게 진행합니다. 아래에서 자주 문의
               주시는 질문들을 확인해 보실 수 있습니다.
            </p>
         </div>
         <ul className="flex flex-col gap-4">
            {faqList.map((item: FAQItem, index: number) => (
               <li
                  key={index}
                  style={revealStyle(isVisible, index + 1)}
                  className={`first:border-line-white-15 grid grid-cols-1 gap-4 pb-4 first:border-t first:pt-4 sm:pb-8 md:grid-cols-8 md:pb-16 lg:grid-cols-12 lg:pb-24 ${
                     index !== faqList.length - 1
                        ? "border-line-white-15 border-b"
                        : ""
                  }`}
               >
                  <div className="md:col-span-1 md:col-start-1 lg:col-span-1 lg:col-start-1">
                     {index % 2 === 0 ? (
                        <IoMdHelpCircle className="size-5 md:size-6" />
                     ) : (
                        <PiStarFourFill className="size-5 md:size-6" />
                     )}
                  </div>

                  <h3 className="text-16-medium md:text-18-medium md:col-start-3 md:col-end-5 lg:col-start-4 lg:col-end-7">
                     {item.question}
                  </h3>
                  <p className="text-14-regular md:text-16-regular md:col-start-6 md:col-end-9 lg:col-start-10 lg:col-end-13">
                     {item.answer}
                  </p>
               </li>
            ))}
         </ul>
      </div>
   );
}
