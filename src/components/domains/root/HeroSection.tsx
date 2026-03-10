"use client";
import Image from "next/image";
import Header from "@/components/common/Header";
import { Cormorant_Garamond, Spectral } from "next/font/google";
import Lottie from "lottie-react";
import scroll from "@/components/animations/scroll.json";
import { motion } from "framer-motion";
import { HERO_IMAGES } from "@/constants";
import { useEffect, useState } from "react";

const cormorant = Cormorant_Garamond({
   subsets: ["latin"],
   weight: ["400", "500", "600", "700"],
});

const spectral = Spectral({
   subsets: ["latin"],
   weight: ["400"],
   style: ["normal", "italic"],
});

export default function HeroSection() {
   const [randomImage, setRandomImage] = useState<string | null>(null);

   useEffect(() => {
      const randomIndex = Math.floor(Math.random() * HERO_IMAGES.length);
      setRandomImage(HERO_IMAGES[randomIndex]);
   }, []);

   return (
      <div className="relative h-screen w-full text-white">
         {/* 배경 이미지 */}
         {randomImage && (
            <Image
               src={randomImage}
               alt="Hero Background"
               fill
               priority
               unoptimized
               className="object-cover"
            />
         )}

         {/* 어두운 오버레이 */}
         <div className="absolute inset-0 bg-black/30" />

         {/* 헤더 + 콘텐츠 */}
         <Header />

         <div className="absolute top-18 w-full px-4 md:top-25 lg:px-5">
            {/* h2 태그 - 먼저 나타남 */}
            <motion.h2
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.1,
               }}
               //    className={`${cormorant.className} lg:text-auto lg:text-auto text-5xl leading-14 font-bold sm:text-6xl sm:leading-17.5 md:text-[9.5vw] md:leading-[110%] md:font-semibold`}
               className={`${cormorant.className} text-[10vw] leading-[120%] font-bold md:text-[9.5vw] md:leading-[110%] md:font-medium`}
            >
               공감을&nbsp;
               <br className="md:hidden" />
               불러 일으키는
               <br />
               건축물을 완성하다
            </motion.h2>
         </div>

         {/* 나머지 요소들 - h2 이후에 함께 나타남 */}
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
               duration: 0.5,
               delay: 0.1, // h2 애니메이션 완료 후 나타남
            }}
         >
            {/* 설명 텍스트 */}
            <div className="absolute bottom-15 px-4 sm:bottom-5 sm:left-1/2 sm:-translate-x-1/2 sm:px-0 md:bottom-10 md:left-4/10 md:-translate-x-4/10 lg:px-5">
               <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                     duration: 0.5,
                     delay: 0.3,
                  }}
                  className="text-16-medium md:text-18-medium w-fit text-nowrap md:leading-7"
               >
                  • 편안하고 안락함을 추구하는 건축,&nbsp;
                  <br className="md:hidden" />
                  사람과 공간을 이어주는 건축,
                  <br />
                  꼼꼼한 마무리와 완성도를 추구하는 이담건축.
               </motion.p>
            </div>

            {/* Since 2005 */}
            <div className="text-14-regular md:text-16-regular absolute bottom-5 px-4 md:bottom-10 lg:px-5">
               <motion.em
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                     duration: 0.5,
                     delay: 0.3, // h2 애니메이션 완료 후 나타남
                  }}
                  className={`${spectral.className}`}
               >
                  since 2021
               </motion.em>
            </div>

            {/* 스크롤 애니메이션 */}
            <div className="absolute right-0 bottom-3.5 md:bottom-6">
               <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                     duration: 0.5,
                     delay: 0.3, // h2 애니메이션 완료 후 나타남
                  }}
               >
                  <Lottie
                     animationData={scroll}
                     loop={true}
                     autoplay={true}
                     className="flex h-10 w-10 md:h-16 md:w-16"
                  />
               </motion.div>
            </div>
         </motion.div>
      </div>
   );
}
