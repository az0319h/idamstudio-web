"use client";
import parse from "html-react-parser";
import { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import { RxDotFilled } from "react-icons/rx";
import { FiPlus, FiMinus } from "react-icons/fi";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "@/constants";
import { useIntersection } from "@/hooks";
import { revealStyle } from "@/utils";

interface ServiceItem {
   id: string;
   title: string;
   subTitle: string;
   content: string;
   serviceImage1: string;
   serviceImage2: string;
   tools: string[];
}

export default function ServiceSection() {
   const { ref: sectionRef, isVisible } = useIntersection();
   const [openItems, setOpenItems] = useState<string[]>(["01"]);

   const toggleItem = (id: string) => {
      if (openItems.includes(id)) {
         setOpenItems(openItems.filter((item) => item !== id));
      } else {
         setOpenItems([...openItems, id]);
      }
   };

   return (
      <DefaultLayout>
         <div ref={sectionRef}>
            <div
               style={revealStyle(isVisible, 0)}
               className="border-line-black-10 border-b pb-3 md:pb-5"
            >
               <h2 className="text-5xl font-semibold sm:text-6xl md:text-7xl lg:text-8xl">
                  시공 프로세스
               </h2>
            </div>

            {services.map((service: ServiceItem, index) => (
               <div
                  key={service.id}
                  style={revealStyle(isVisible, index + 1)}
                  className={`break-keep ${
                     index !== services.length - 1
                        ? "border-line-black-10 border-b"
                        : ""
                  }`}
               >
                  <div className="w-full lg:flex lg:flex-col lg:items-end">
                     <div
                        onClick={() => toggleItem(service.id)}
                        className="flex w-full cursor-pointer py-4 sm:justify-between sm:py-6 lg:py-8"
                     >
                        <span className="text-32-medium hidden sm:block lg:text-5xl lg:font-medium">
                           {service.id}
                        </span>
                        <div className="flex w-full items-center justify-between sm:w-8/10">
                           <span className="text-24-medium sm:text-32-medium lg:text-5xl lg:font-medium">
                              {service.title}
                           </span>
                           {openItems.includes(service.id) ? (
                              <FiMinus className="size-6 sm:size-8 lg:size-10" />
                           ) : (
                              <FiPlus className="size-6 sm:size-8 lg:size-10" />
                           )}
                        </div>
                     </div>

                     {/* 애니메이션 적용 부분 */}
                     <AnimatePresence initial={false}>
                        {openItems.includes(service.id) && (
                           <motion.div
                              key="content"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{
                                 duration: 0.4,
                                 ease: "easeInOut",
                              }}
                              className="overflow-hidden text-left lg:w-8/10"
                           >
                              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:py-4">
                                 <Image
                                    src={service.serviceImage1}
                                    alt={`${service.title}`}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="h-auto w-full"
                                 />
                                 <Image
                                    src={service.serviceImage2}
                                    alt={`${service.title}`}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="h-auto w-full"
                                 />
                              </div>
                              <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:py-16">
                                 <div className="flex flex-col gap-3">
                                    <h5 className="text-16-medium md:text-18-medium lg:text-20-medium">
                                       {service.subTitle}
                                    </h5>
                                    <hr className="border-line-black-10" />
                                    <p className="text-14-regular md:text-16-regular lg:text-18-regular">
                                       {parse(service.content)}
                                    </p>
                                 </div>

                                 <ul className="lg:text-18-regular text-14-regular md:text-16-regular md:ml-auto md:w-8/10">
                                    <h5 className="border-line-black-10 border-b pb-2">
                                       맞춤 솔루션
                                    </h5>
                                    {service.tools.map((tool, index) => (
                                       <li
                                          key={index}
                                          className={`border-line-black-10 flex items-center justify-between py-2 ${
                                             index !== service.tools.length - 1
                                                ? "border-b"
                                                : ""
                                          }`}
                                       >
                                          <span>{tool}</span>
                                          <RxDotFilled className="size-4 md:size-6" />
                                       </li>
                                    ))}
                                 </ul>
                              </div>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
               </div>
            ))}
         </div>
      </DefaultLayout>
   );
}
