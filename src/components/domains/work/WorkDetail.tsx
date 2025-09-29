"use client";

import { Project } from "@/lib/types";
import Image from "next/image";
import WorkDetailImagesGrid from "./WorkDetailImagesGrid";
import { useNotification } from "@/context/NotificationContext";
import { useIntersection } from "@/hooks";
import { revealStyle } from "@/utils";

export default function WorkDetail(props: Project) {
   const {
      title,
      location,
      year,
      completionDate,
      siteArea,
      floors,
      type,
      usage,
      exterior,
      interior,
      features,
      description,
      youtubeUrl,
      mainImage,
      subImages,
   } = props;

   const { ref, isVisible } = useIntersection();

   const { showNotification } = useNotification();

   const onUrlClick = () => {
      if (youtubeUrl.length !== 0) {
         window.open(youtubeUrl, "_blank");
      } else {
         showNotification(
            "현재 이 건축의 유튜브 영상은 준비 중입니다. 곧 만나보실 수 있도록 하겠습니다.",
            false,
         );
      }
   };

   return (
      <div
         ref={ref}
         style={revealStyle(isVisible, 1)} // 여기서 애니메이션 스타일 적용
         className="px-4"
      >
         <div className="flex flex-col gap-4">
            {/* 연도 + 버튼 */}
            <div className="border-line-black-10 flex items-end justify-between border-b pb-4 font-medium">
               <h4 className="text-24-medium md:text-4xl lg:text-5xl">
                  {year}
               </h4>
               <button
                  onClick={onUrlClick}
                  className="text-14-medium md:text-18-medium lg:text-20-medium underline"
               >
                  유튜브에서 보기
               </button>
            </div>

            {/* 메인 이미지 */}
            <div>
               <Image
                  src={mainImage}
                  alt={`${title}-Image`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-full"
               />
            </div>

            {/* 상세 정보 */}
            <div>
               <div className="flex flex-col gap-16 pt-10 md:gap-40 md:pt-20 lg:gap-48 lg:pt-30">
                  <ul className="text-14-regular sm:text-16-regular md:text-18-regular lg:text-20-regular grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-5 md:gap-y-16 [&_h5]:pb-2 [&_li]:flex [&_li]:flex-col">
                     <li>
                        <h5 className="text-16-medium sm:text-18-medium md:text-20-medium lg:text-22-medium">
                           기본 정보
                        </h5>
                        <hr className="border-line-black-10" />
                        <div className="[&_div]:border-line-black-10 flex flex-col [&_div]:grid [&_div]:grid-cols-8 [&_div]:border-b [&_div]:py-2 md:[&_div]:grid-cols-10 md:[&_div]:py-3 [&_p]:col-start-4 [&_p]:col-end-9 md:[&_p]:col-end-11 lg:[&_p]:col-start-3 [&_span]:col-span-3 [&_span]:text-gray-100 lg:[&_span]:col-span-2">
                           <div>
                              <span>위치</span> <p>{location}</p>
                           </div>
                           <div>
                              <span>준공 연도</span> <p>{year}년</p>
                           </div>
                           <div>
                              <span>완공일</span>
                              <p>
                                 {completionDate.split("-")[0]}년{" "}
                                 {completionDate.split("-")[1]}월
                              </p>
                           </div>
                           <div>
                              <span>건축 면적</span>
                              <p>{siteArea}㎡</p>
                           </div>
                           <div>
                              <span>층수</span> <p>{floors}</p>
                           </div>
                        </div>
                     </li>
                     <li>
                        <h5 className="text-16-medium sm:text-18-medium md:text-20-medium lg:text-22-medium">
                           건축 유형
                        </h5>
                        <hr className="border-line-black-10" />
                        <div className="[&_div]:border-line-black-10 flex flex-col [&_div]:grid [&_div]:grid-cols-8 [&_div]:border-b [&_div]:py-2 md:[&_div]:grid-cols-10 md:[&_div]:py-3 [&_p]:col-start-4 [&_p]:col-end-9 md:[&_p]:col-start-3 md:[&_p]:col-end-11 lg:[&_p]:col-start-2 [&_span]:col-span-3 [&_span]:text-gray-100 md:[&_span]:col-span-2 lg:[&_span]:col-span-1">
                           <div>
                              <span>타입</span>
                              <p>{type}</p>
                           </div>
                           <div>
                              <span>용도</span>
                              <p>{usage}</p>
                           </div>
                        </div>
                     </li>
                     <li>
                        <h5 className="text-16-medium sm:text-18-medium md:text-20-medium lg:text-22-medium">
                           주요 요소
                        </h5>
                        <hr className="border-line-black-10" />
                        <div className="[&_div]:border-line-black-10 flex flex-col [&_div]:grid [&_div]:grid-cols-8 [&_div]:border-b [&_div]:py-2 md:[&_div]:grid-cols-10 md:[&_div]:py-3 [&_p]:col-start-4 [&_p]:col-end-9 md:[&_p]:col-end-11 lg:[&_p]:col-start-3 [&_span]:col-span-3 [&_span]:text-gray-100 lg:[&_span]:col-span-2">
                           <div>
                              <span>외장재</span>
                              <p className="">
                                 {exterior.map((item, index) => (
                                    <em key={index}>
                                       {item}
                                       {index !== exterior.length - 1 && ","}
                                       &nbsp;
                                    </em>
                                 ))}
                              </p>
                           </div>
                           <div>
                              <span>내장재</span>
                              <p>
                                 {interior.map((item, index) => (
                                    <em key={index}>
                                       {item}
                                       {index !== interior.length - 1 && ","}
                                       &nbsp;
                                    </em>
                                 ))}
                              </p>
                           </div>
                           <div>
                              <span>특징</span>
                              <p>
                                 {features.map((item, index) => (
                                    <em key={index}>
                                       {item}
                                       {index !== features.length - 1 && ","}
                                       &nbsp;
                                    </em>
                                 ))}
                              </p>
                           </div>
                        </div>
                     </li>
                     <li>
                        <h5 className="text-16-medium sm:text-18-medium md:text-20-medium lg:text-22-medium">
                           공간 이야기
                        </h5>
                        <hr className="border-line-black-10" />
                        <div className="flex flex-col gap-1 pt-2 md:pt-3 [&_span]:flex [&_span]:items-center [&_span]:gap-1">
                           <span className="break-keep">{description}</span>
                        </div>
                     </li>
                  </ul>
                  <WorkDetailImagesGrid subImages={subImages} />
               </div>
            </div>
         </div>
      </div>
   );
}
