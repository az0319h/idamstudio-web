"use client";

import { locationInfo } from "@/constants";
import { useIntersection } from "@/hooks";
import { revealStyle } from "@/utils";

export default function AboutLocation() {
   const { ref: sectionRef, isVisible } = useIntersection();

   return (
      <div ref={sectionRef}>
         <div
            style={revealStyle(isVisible, 1)}
            className="mx-4 mt-10 flex flex-col gap-10 bg-black p-4 break-keep text-white md:gap-20 md:py-5 lg:gap-30 lg:py-10"
         >
            <div className="flex flex-col gap-5 md:w-6/10 md:gap-8">
               <h3 className="text-24-medium sm:text-26-medium md:text-4xl md:font-medium lg:text-5xl">
                  {" "}
                  길 위의 이담의 자리
               </h3>
               <p className="text-16-medium sm:text-18-medium md:text-20-medium">
                  이담건축의 사무실은 언제나 열려 있으며, 건축에 대한 이야기를
                  함께 나누고자 하는 모든 분들께 열려 있습니다.
                  <br className="hidden lg:block" />
                  보다 편안하게 찾아오실 수 있도록 상세한 주소와 안내를 마련해
                  두었으니, 언제든지 방문해 주시면 따뜻하게 맞이하겠습니다.
               </p>
            </div>
            <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-5 md:gap-y-16">
               {locationInfo.map((item, index) => (
                  <li
                     key={index}
                     style={revealStyle(isVisible, index + 2)}
                     className="border-line-white-15 grid h-fit grid-cols-1 gap-3 border-t pt-5 md:gap-8 md:pt-8 lg:grid-cols-2"
                  >
                     <span className="text-20-medium sm:text-22-medium md:text-24-medium lg:text-26-medium">
                        {item.title}
                     </span>
                     <span className="text-14-regular sm:text-16-regular md:text-18-regular lg:text-20-regular">
                        {item.info}
                     </span>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
}
