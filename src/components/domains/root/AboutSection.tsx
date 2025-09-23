"use client";

import DefaultLayout from "@/components/layout/DefaultLayout";
import { useIntersection } from "@/hooks";
import { revealStyle } from "@/utils";
import Link from "next/link";

export default function AboutSection() {
   const { ref: sectionRef, isVisible } = useIntersection();

   return (
      <DefaultLayout>
         <div ref={sectionRef}>
            <h2
               className="text-14-regular md:text-16-regular"
               style={revealStyle(isVisible, 1)}
            >
               철학과 이야기
            </h2>

            <p
               className="md:indent-8rem text-24-medium md:text-30-medium lg:indent-20rem pt-4 break-keep md:pt-0 lg:text-5xl lg:leading-14"
               style={revealStyle(isVisible, 0)}
            >
               이담 건축의 진정한 힘은 건축의 본질을 이해하고, 그것을 사람들에게
               울림이 되는 공간으로 구현하는 데 있습니다. 철골 구조에서부터
               인테리어, 판넬 시공, 목조 주택까지 다양한 경험을 바탕으로, 우리는
               단순한 건축을 넘어 삶을 담아내는 공간을 만들어갑니다. 사람과
               공간에 대한 깊은 이해를 토대로, 마음을 움직이고 가치를 연결하며
               오래도록 기억되는 건축을 실현합니다.
            </p>

            <div
               className="pt-10 md:flex md:justify-end md:pt-20 lg:pt-30"
               style={revealStyle(isVisible, 1)}
            >
               <div className="flex flex-col gap-8 md:w-6/10 md:gap-12 lg:mr-[20%] lg:max-w-3/10">
                  <p
                     className="text-14-medium lg:text-18-medium md:text-16-medium hidden break-keep sm:block"
                     style={revealStyle(isVisible, 1)}
                  >
                     이담 건축은 건축을 단순한 구조물이 아닌, 사람들의 삶과
                     시간을 담는 그릇으로 바라봅니다. 우리는 눈에 보이는
                     형태보다 공간이 주는 감정과 경험을 더 중요하게 생각합니다.
                     그래서 작은 디테일 하나에도 진심을 담아, 머무는 이가
                     편안함과 따뜻함을 느낄 수 있는 환경을 만들어갑니다. 우리의
                     목표는 완공 순간의 감동을 넘어서, 시간이 흐를수록 더욱 깊은
                     가치를 품는 건축을 실현하는 것입니다.
                  </p>

                  <Link
                     href={"/about"}
                     className="text-14-regular md:text-16-regular lg:text-18-regular block w-fit underline"
                     style={revealStyle(isVisible, 1)}
                  >
                     철학과 가치 더 보기
                  </Link>
               </div>
            </div>
         </div>
      </DefaultLayout>
   );
}
