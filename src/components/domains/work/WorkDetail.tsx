"use client";

import { Project } from "@/lib/types";
import Image from "next/image";
import { RxSlash } from "react-icons/rx";
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
                  <ul className="text-14-regular sm:text-16-regular md:text-18-regular grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-5 md:gap-y-16 [&_li]:flex [&_li]:flex-col [&_li]:gap-2">
                     <li>
                        <h5 className="text-16-medium sm:text-18-medium md:text-20-medium">
                           기본 정보
                        </h5>
                        <hr className="border-line-black-10" />
                        <div className="flex flex-col gap-1 [&_span]:flex [&_span]:items-center [&_span]:gap-1">
                           <span>
                              위치 <RxSlash className="size-4" /> {location}
                           </span>
                           <span>
                              준공 연도 <RxSlash className="size-4" /> {year}년
                           </span>
                           <span>
                              완공일 <RxSlash className="size-4" />{" "}
                              {completionDate}월
                           </span>
                           <span>
                              건축 면적 <RxSlash className="size-4" />{" "}
                              {siteArea}㎡
                           </span>
                           <span>
                              층수 <RxSlash className="size-4" /> {floors}
                           </span>
                        </div>
                     </li>
                     <li>
                        <h5 className="text-16-medium sm:text-18-medium md:text-20-medium">
                           건축 유형
                        </h5>
                        <hr className="border-line-black-10" />
                        <div className="flex flex-col gap-1 [&_span]:flex [&_span]:items-center [&_span]:gap-1">
                           <span>
                              타입 <RxSlash className="size-4" /> {type}
                           </span>
                           <span>
                              용도 <RxSlash className="size-4" /> {usage}
                           </span>
                        </div>
                     </li>
                     <li>
                        <h5 className="text-16-medium sm:text-18-medium md:text-20-medium">
                           주요 요소
                        </h5>
                        <hr className="border-line-black-10" />
                        <div className="flex flex-col gap-1 [&_span]:flex [&_span]:flex-wrap [&_span]:items-center [&_span]:gap-1">
                           <span>
                              외장재 <RxSlash className="size-4" />
                              {exterior.map((item, index) => (
                                 <em key={index}>
                                    {item}
                                    {index !== exterior.length - 1 && ","}
                                 </em>
                              ))}
                           </span>
                           <span>
                              내장제 <RxSlash className="size-4" />
                              {interior.map((item, index) => (
                                 <em key={index}>
                                    {item}
                                    {index !== interior.length - 1 && ","}
                                 </em>
                              ))}
                           </span>
                           <span>
                              특징 <RxSlash className="size-4" />
                              {features.map((item, index) => (
                                 <em key={index}>
                                    {item}
                                    {index !== features.length - 1 && ","}
                                 </em>
                              ))}
                           </span>
                        </div>
                     </li>
                     <li>
                        <h5 className="text-16-medium sm:text-18-medium md:text-20-medium">
                           공간 이야기
                        </h5>
                        <hr className="border-line-black-10" />
                        <div className="flex flex-col gap-1 [&_span]:flex [&_span]:items-center [&_span]:gap-1">
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
