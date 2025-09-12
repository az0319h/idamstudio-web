"use client";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import Link from "next/link";
import { Spectral } from "next/font/google";

const spectral = Spectral({
   subsets: ["latin"],
   weight: ["300", "400"],
   style: ["normal", "italic"],
});

export default function Header() {
   return (
      <header className="border-line-white-15 absolute top-0 left-0 z-30 w-full border-b">
         <div className="flex items-center justify-between">
            <div className="border-line-white-15 border-r px-4 py-2 sm:flex sm:w-5/10 sm:items-center sm:justify-between md:py-3">
               <Link href={"/"}>
                  <Image
                     src={logo}
                     alt="logo"
                     width={60}
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
               <button className="text-16-medium flex md:hidden">Menu</button>
               <div className="hidden md:block [&_a]:px-4 [&_a]:py-2">
                  <Link href={"/work"}>건축 작품</Link>
                  <Link href={"/about"}>회사 소개</Link>
                  <Link href={"/location"}>회사 위치</Link>
               </div>
               <div className="hidden md:block">
                  <Link href={"/contact"} className="p-4">
                     문의하기
                  </Link>
               </div>
            </nav>
         </div>
      </header>
   );
}
