"use client";
import Image from "next/image";
import logo from "@/assets/logo_black.svg";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { Spectral } from "next/font/google";
import { useIntersection } from "@/hooks";
import { revealStyle } from "@/utils";

const spectral = Spectral({
   subsets: ["latin"],
   weight: ["300", "400"],
   style: ["normal", "italic"],
});
export default function Footer() {
   const { ref: sectionRef, isVisible } = useIntersection();
   return (
      <footer ref={sectionRef}>
         <div
            style={revealStyle(isVisible, 3)}
            className="border-line-black-10 border-t"
         ></div>

         <div className="flex flex-col gap-24 p-4 md:gap-34">
            <div className="flex flex-col gap-12 md:grid md:grid-cols-3">
               <Image
                  src={logo}
                  alt="logo"
                  width={60}
                  className="md:w-17 lg:w-18.5"
                  style={revealStyle(isVisible, 0)}
               />
               <nav
                  style={revealStyle(isVisible, 1)}
                  className="text-24-medium flex flex-col gap-2.5 md:gap-4 md:text-4xl md:font-medium [&_a]:w-fit [&_a]:py-0.5"
               >
                  <Link href={"/work"} className="link-underline">
                     건축 갤러리
                  </Link>
                  <Link href={"/about"} className="link-underline">
                     철학과 이야기
                  </Link>
                  <Link href={"/location"} className="link-underline">
                     오시는 길
                  </Link>
                  <Link href={"/contact"} className="link-underline">
                     견적 문의
                  </Link>
               </nav>
               <ul
                  style={revealStyle(isVisible, 2)}
                  className="md:text-18-regular [&_a]:flex [&_a]:items-center [&_a]:justify-between [&_li]:py-1.5 sm:[&_li]:py-2"
               >
                  <li className="border-line-black-10 border-b">소셜 링크</li>
                  <li className="border-line-black-10 hover:border-line-white-15 group border-b transition-all duration-300 hover:bg-black">
                     <a
                        href="https://www.instagram.com/ida.mstudio/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group-hover:px-1 group-hover:text-white group-hover:transition-all group-hover:duration-300"
                     >
                        인스타그램
                        <GoArrowUpRight size={22} className="md:size-6" />
                     </a>
                  </li>
                  <li className="border-line-black-10 hover:border-line-white-15 group border-b transition-all duration-300 hover:bg-black">
                     <a
                        href="https://www.youtube.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group-hover:px-1 group-hover:text-white group-hover:transition-all group-hover:duration-300"
                     >
                        유튜브
                        <GoArrowUpRight size={22} className="md:size-6" />
                     </a>
                  </li>
                  <li className="border-line-black-10 hover:border-line-white-15 group border-b transition-all duration-300 hover:bg-black">
                     <a
                        href="https://github.com/az0319h/idamstudio-web"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group-hover:px-1 group-hover:text-white group-hover:transition-all group-hover:duration-300"
                     >
                        깃허브
                        <GoArrowUpRight size={22} className="md:size-6" />
                     </a>
                  </li>
               </ul>
            </div>
            <div
               style={revealStyle(isVisible, 3)}
               className="flex flex-col gap-4 md:gap-5"
            >
               <div className="flex flex-col gap-3 md:mx-auto md:gap-[1vw]">
                  <span className="text-14-regular sm:text-16-regular md:text-[1.3vw]">
                     이담 건축과 함께 새로운 공간을 이야기해요.
                  </span>
                  <Link
                     href={"/contact"}
                     className="w-fit text-5xl font-semibold sm:text-[9.5vw] md:text-[8vw]"
                  >
                     건축 견적 문의
                  </Link>
               </div>
               <div
                  style={revealStyle(isVisible, 3)}
                  className="border-line-black-10 border-t"
               ></div>
               <div className="text-14-regular sm:text-16-regular md:text-18-regular flex flex-wrap items-center justify-between gap-4">
                  <em className={`${spectral.className} order-2 md:order-1`}>
                     Architecture Studio
                  </em>
                  <p className="order-1 sm:order-3 md:order-2">
                     ©2025 idam architecture. all rights reserved.
                  </p>
                  <p className="order-3 sm:order-2 md:order-3">
                     <span className="text-12-regular sm:text-14-regular">
                        (주)
                     </span>
                     이담건축
                  </p>
               </div>
            </div>
         </div>
      </footer>
   );
}
