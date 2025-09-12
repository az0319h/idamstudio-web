"use client";
import Image from "next/image";
import Header from "@/components/common/Header";
import { Cormorant_Garamond, Spectral } from "next/font/google";
import Lottie from "lottie-react";
import scroll from "@/components/animations/scroll.json";

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
   return (
      <div className="relative h-screen w-full">
         {/* 배경 이미지 */}
         <Image
            src="https://res.cloudinary.com/dmtmnadim/image/upload/v1757662134/heroImg_csqqoz.jpg"
            alt="Hero Background"
            fill
            priority
            unoptimized
            className="object-cover"
         />

         {/* 어두운 오버레이 */}
         <div className="absolute inset-0 bg-black/30" />

         {/* 헤더 + 콘텐츠 */}
         <Header />
         <div className="absolute top-18 w-full px-4 md:top-25 lg:px-5">
            <h2
               className={`${cormorant.className} lg:text-auto lg:text-auto text-5xl leading-14 font-semibold sm:text-6xl sm:leading-16 md:text-[10vw] md:leading-[110%]`}
            >
               공감을&nbsp;
               <br className="md:hidden" />
               불러 일으키는
               <br />
               건축물을 만들다
            </h2>
         </div>
         <div className="absolute bottom-15 px-4 sm:bottom-5 sm:left-1/2 sm:-translate-x-1/2 sm:px-0 md:bottom-10 md:left-4/10 md:-translate-x-4/10 lg:px-5">
            <p className="text-16-medium md:text-18-medium w-fit text-nowrap md:leading-7">
               사람과 공간을 이어주는 섬세한 설계,&nbsp;
               <br className="md:hidden" />
               지속 가능한 가치를 세우는 건축 철학,
               <br />
               시대를 담고 미래를 준비하는 이담 건축.
            </p>
         </div>
         <div className="text-14-regular md:text-16-regular absolute bottom-5 px-4 md:bottom-10 lg:px-5">
            <em className={`${spectral.className}`}>since 2005</em>
         </div>
         <div className="absolute right-0 bottom-3.5 md:bottom-6">
            <Lottie
               animationData={scroll}
               loop={true} // 반복 재생
               autoplay={true} // 자동 재생
               className="flex h-10 w-10 md:h-16 md:w-16"
            />
         </div>
      </div>
   );
}
