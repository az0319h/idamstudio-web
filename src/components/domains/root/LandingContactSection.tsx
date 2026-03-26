"use client";

import Link from "next/link";
import { useEffect } from "react";
import DefaultLayout from "@/components/layout/DefaultLayout";
import ContactForm from "@/components/domains/contact/ContactForm";
import { useIntersection } from "@/hooks";
import { revealStyle } from "@/utils";

export default function LandingContactSection() {
   const { ref: sectionRef, isVisible } = useIntersection();

   useEffect(() => {
      const scrollToContact = () => {
         if (window.location.hash !== "#contact") return;
         document.getElementById("contact")?.scrollIntoView({
            behavior: "smooth",
         });
      };

      scrollToContact();
      window.addEventListener("hashchange", scrollToContact);
      return () => window.removeEventListener("hashchange", scrollToContact);
   }, []);

   return (
      <DefaultLayout>
         <section
            id="contact"
            ref={sectionRef}
            className="scroll-mt-20 md:scroll-mt-24"
         >
            <div
               style={revealStyle(isVisible, 0)}
               className="border-line-black-10 flex flex-wrap items-end justify-between gap-y-2 border-b pt-8 pb-3 md:pb-5"
            >
               <h2 className="text-5xl font-semibold sm:text-6xl md:text-7xl lg:text-8xl">
                  견적 문의
               </h2>
               <Link
                  href="/contact"
                  className="text-14-regular md:text-16-regular lg:text-18-regular underline"
               >
                  상세 안내 더보기
               </Link>
            </div>
            <div
               style={revealStyle(isVisible, 1)}
               className="pt-3 md:pt-5"
            >
               <div className="w-full lg:[&>div]:!w-full">
                  <ContactForm />
               </div>
            </div>
         </section>
      </DefaultLayout>
   );
}
