"use client";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import otherColorLogo from "@/assets/logo_black.svg";
import Link from "next/link";
import { Spectral } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { toggleBodyScroll } from "@/utils";
import { usePathname } from "next/navigation";

const spectral = Spectral({
   subsets: ["latin"],
   weight: ["300", "400"],
   style: ["normal", "italic"],
});

export default function Header() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const pathname = usePathname();

   useEffect(() => {
      toggleBodyScroll(isMenuOpen); // 메뉴 열리면 스크롤 잠금
   }, [isMenuOpen]);

   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth >= 768) {
            setIsMenuOpen(false); // md 이상이면 메뉴 강제 닫기
         }
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);

   const isDarkStyle =
      pathname === "/contact" ||
      pathname.startsWith("/work") ||
      pathname === "/about" ||
      pathname === "/location";

   return (
      <>
         <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
               duration: 0.5,
               delay: 0.3,
            }}
            className={`absolute top-0 left-0 z-30 w-full border-b ${isDarkStyle ? "border-line-black-10 bg-white" : "border-line-white-15"}`}
         >
            <div className="flex items-center justify-between">
               <div
                  className={`border-r px-4 py-2 sm:flex sm:w-5/10 sm:items-center sm:justify-between md:py-3 ${isDarkStyle ? "border-line-black-10" : "border-line-white-15"}`}
               >
                  <Link href={"/"}>
                     <Image
                        src={isDarkStyle ? otherColorLogo : logo}
                        alt="logo"
                        width={60}
                        height={0}
                        className="md:w-17 lg:w-18.5"
                     />
                  </Link>
                  <em
                     className={`text-14-regular md:text-16-regular lg:text-18-regular hidden tracking-tight sm:flex ${spectral.className}`}
                  >
                     Architecture Studio
                  </em>
               </div>
               <nav className="md:text-16-medium px-4 md:flex md:w-5/10 md:justify-between md:px-0">
                  <button
                     className="text-16-medium flex md:hidden"
                     onClick={() => setIsMenuOpen(true)}
                  >
                     Menu
                  </button>

                  <div className="hidden text-nowrap md:block [&_a]:mx-4 [&_a]:py-0.5">
                     <Link href={"/work"} className="link-underline">
                        건축 작품
                     </Link>
                     <Link href={"/about"} className="link-underline">
                        회사 소개
                     </Link>
                     <Link href={"/location"} className="link-underline">
                        회사 위치
                     </Link>
                  </div>
                  <div className="hidden text-nowrap md:block">
                     <Link href={"/contact"} className="p-4">
                        견적문의
                     </Link>
                  </div>
               </nav>
            </div>
         </motion.header>

         <div className="block md:hidden">
            <AnimatePresence mode="wait">
               {isMenuOpen && (
                  <HamburgerMenu
                     key={Date.now()}
                     onClose={() => setIsMenuOpen(false)}
                  />
               )}
            </AnimatePresence>
         </div>
      </>
   );
}
