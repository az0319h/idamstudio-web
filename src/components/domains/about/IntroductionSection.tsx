"use client";

import { useIntersection } from "@/hooks";
import { revealStyle } from "@/utils";
import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";

// 이거 숫자 증거하는 거 제거하기

function Counter({ target, start }: { target: number; start: boolean }) {
   const count = useMotionValue(0);
   const [display, setDisplay] = useState(0);

   useEffect(() => {
      if (!start) return;
      const controls = animate(count, target, {
         duration: 2,
         ease: "easeOut",
         onUpdate: (latest) => setDisplay(Math.floor(latest)),
      });

      return controls.stop;
   }, [start, target, count]);

   return <motion.span>{display}</motion.span>;
}
export default function IntroductionSection() {
   const { ref: sectionRef, isVisible } = useIntersection();

   const [startAnimation, setStartAnimation] = useState(false);

   useEffect(() => {
      if (!isVisible) {
         setStartAnimation(false);
         return;
      }

      const timer = setTimeout(() => {
         setStartAnimation(true);
      }, 150); // 150ms 지연

      return () => clearTimeout(timer);
   }, [isVisible]);

   return (
      <div ref={sectionRef}>
         <div
            style={revealStyle(isVisible, 1)}
            className="border-line-black-10 flex flex-col gap-20 border-t p-4 break-keep sm:gap-40"
         >
            <div>
               <h2 className="text-14-regular md:text-16-regular">이담 건축</h2>
               <p className="md:indent-8rem text-24-medium md:text-30-medium lg:indent-20rem pt-4 md:pt-0 lg:text-5xl lg:leading-14">
                  이담 건축의 진정한 힘은 건축의 본질을 이해하고 그것을 울림
                  있는 공간으로 구현하는 데 있습니다. 철골 구조, 목조 주택, 판넬
                  시공, 인테리어 등 다양한 경험을 바탕으로, 우리는 단순한 건축을
                  넘어 삶과 시간을 담는 공간을 만듭니다. 눈에 보이는 형태보다
                  공간이 주는 감정과 경험을 중시하며, 작은 디테일에도 진심을
                  담아 머무는 이가 편안함과 따뜻함을 느낄 수 있는 환경을
                  만들어갑니다. 우리의 목표는 완공 순간의 감동을 넘어, 시간이
                  흐를수록 더욱 깊은 가치를 품는 건축을 실현하는 것입니다.
               </p>
            </div>

            <ul className="[&>li]:border-line-black-10 lg:[&>li>span]:text-18-medium [&>li>span]:text-14-medium md:[&>li>span]:text-16-medium grid w-full grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 xl:grid-cols-4 [&>li]:border-l [&>li]:px-4 [&>li>p]:text-8xl md:[&>li>p]:text-[10rem] xl:[&>li>p]:text-[10.5rem]">
               <li>
                  <p>
                     <Counter target={22} start={startAnimation} />
                  </p>
                  <span>
                     <em>
                        시공 경험
                        <br />
                        (Years of Experience)
                     </em>
                  </span>
               </li>
               <li>
                  <p>
                     <Counter target={33} start={startAnimation} />
                  </p>
                  <span>
                     <em>
                        완공 프로젝트
                        <br />
                        (Completed Projects)
                     </em>
                  </span>
               </li>
               <li>
                  <p>
                     <Counter target={0} start={startAnimation} />0
                  </p>
                  <span>
                     <em>
                        무재해 시공 <br />
                        (Zero Accidents)
                     </em>
                  </span>
               </li>
               <li>
                  <p>
                     <Counter target={95} start={startAnimation} />%
                  </p>
                  <span>
                     <em>
                        정시 준공률
                        <br />
                        (On-time Delivery)
                     </em>
                  </span>
               </li>
            </ul>
         </div>
      </div>
   );
}
