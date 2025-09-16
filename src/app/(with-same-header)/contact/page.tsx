"use client";
import PageTitle from "@/components/common/PageTitle";
import ContactForm from "@/components/domains/contact/ContactForm";
import PageLayout from "@/components/layout/PageLayout";
import { useIntersection } from "@/hooks";
import { revealStyle } from "@/utils";

export default function ContactPage() {
   const { ref: sectionRef, isVisible } = useIntersection();

   return (
      <PageLayout>
         <PageTitle title="안녕하세요" />
         <div
            ref={sectionRef}
            style={revealStyle(isVisible, 1)}
            className="border-line-black-10 flex flex-col gap-12 border-t p-4 lg:flex-row lg:justify-between"
         >
            <ul className="text-14-regular md:text-16-regular lg:text-18-regular grid-col1s-1 grid gap-y-8 break-keep lg:h-fit lg:w-1/3 lg:gap-y-16 [&_li]:grid [&_li]:grid-cols-2 [&_li]:items-start lg:[&_li]:h-fit">
               <li>
                  <div>
                     <h3>소셜 링크</h3>
                  </div>
                  <div className="flex flex-col [&_a]:w-fit">
                     <a
                        href="https://www.instagram.com/ida.mstudio/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline"
                     >
                        인스타그램
                     </a>
                     <a
                        href="https://www.youtube.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline"
                     >
                        유튜브
                     </a>
                     <a
                        href="https://github.com/az0319h/idamstudio-web"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline"
                     >
                        깃허브
                     </a>
                  </div>
               </li>
               <li className="border-line-black-10 border-t pt-2">
                  <div>
                     <h3>운영 시간</h3>
                  </div>
                  <div>
                     <p>월–금 09:00 ~ 18:00</p>
                     <p>토요일 09:00 ~ 13:00</p>
                     <p>일요일 및 공휴일 휴무</p>
                  </div>
               </li>
               <li className="border-line-black-10 border-t pt-2">
                  <div>
                     <h3>연락처</h3>
                  </div>
                  <div>
                     <p>010-7123-0261</p>
                     <p className="break-words">
                        idamstudio.doodream@gmail.com
                     </p>
                  </div>
               </li>
            </ul>
            <ContactForm />
         </div>
      </PageLayout>
   );
}
