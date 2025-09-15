"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

export default function HamburgerMenu({ onClose }: { onClose: () => void }) {
   return (
      <motion.div
         initial={{ x: "-100%" }}
         animate={{ x: 0 }}
         exit={{ x: "-100%" }}
         transition={{
            type: "tween",
            duration: 0.4,
            ease: "easeOut",
         }}
         className="fixed inset-0 z-50 flex min-h-screen w-full flex-col bg-black"
      >
         {/* Close 버튼 */}
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{
               duration: 0.5,
               delay: 0.55,
               ease: "easeIn",
            }}
            className="flex h-12.75 items-center justify-end"
         >
            <button onClick={onClose} className="text-16-medium flex px-4">
               Close
            </button>
         </motion.div>

         {/* 네비게이션 메뉴 */}
         <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{
               duration: 0.5,
               delay: 0.4,
               ease: "easeIn",
            }}
            className="flex flex-col gap-4 p-4 text-5xl font-medium sm:gap-5 sm:text-6xl [&_a]:w-fit"
         >
            <Link href={"/work"}>건축 갤러리</Link>
            <Link href={"/about"}>철학과 이야기</Link>
            <Link href={"/location"}>오시는 길</Link>
            <Link href={"/contact"}>견적 문의</Link>
         </motion.nav>

         {/* 하단 소셜 링크 영역 */}
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{
               duration: 0.5,
               delay: 0.55,
               ease: "easeIn",
            }}
            className="flex flex-1 flex-col justify-end p-4"
         >
            <ul className="[&_a]:flex [&_a]:items-center [&_a]:justify-between [&_li]:py-1.5 sm:[&_li]:py-2">
               <li className="border-line-white-15 border-b">소셜 링크</li>
               <li className="border-line-white-15 border-b">
                  <a
                     href="https://www.instagram.com/ida.mstudio/"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     인스타그램
                     <GoArrowUpRight size={22} />
                  </a>
               </li>
               <li className="border-line-white-15 border-b">
                  <a
                     href="https://www.youtube.com/"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     유튜브
                     <GoArrowUpRight size={22} />
                  </a>
               </li>
               <li>
                  <a
                     href="https://github.com/az0319h/idamstudio-web"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     깃허브
                     <GoArrowUpRight size={22} />
                  </a>
               </li>
            </ul>
            <span className="block pt-8">©2025</span>
         </motion.div>
      </motion.div>
   );
}
