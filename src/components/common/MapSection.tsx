"use client";
import Link from "next/link";
import DefaultLayout from "../layout/DefaultLayout";
import {
   Map,
   MapMarker,
   MapTypeControl,
   ZoomControl,
} from "react-kakao-maps-sdk";
import useKakaoLoader from "@/hooks/useKakaoLoader";
import { useIntersection } from "@/hooks";
import { revealStyle } from "@/utils";

export default function MapSection() {
   useKakaoLoader();
   const { ref: sectionRef, isVisible } = useIntersection();
   return (
      <DefaultLayout>
         <div ref={sectionRef}>
            <div
               style={revealStyle(isVisible, 0)}
               className="border-line-black-10 flex flex-wrap items-end justify-between gap-y-2 border-b pt-8 pb-3 md:pb-5"
            >
               <h2 className="text-5xl font-semibold sm:text-6xl md:text-7xl lg:text-8xl">
                  오시는 길
               </h2>
               <Link
                  href={"/location"}
                  className="text-14-regular lg:text-18-regular md:text-16-regular underline"
               >
                  위치 안내 더보기
               </Link>
            </div>
            <div
               style={revealStyle(isVisible, 1)}
               className="h-[50vh] pt-3 md:h-[80vh] md:pt-5"
            >
               <Map
                  id="map"
                  center={{ lat: 37.9392521191163, lng: 127.06118830562747 }}
                  style={{ width: "100%", height: "100%" }}
                  level={1}
                  mapTypeId="HYBRID" // 이렇게 문자열로 지정
               >
                  {/* 마커 */}
                  <MapMarker
                     position={{
                        lat: 37.9392521191163,
                        lng: 127.06118830562747,
                     }}
                  >
                     <div className="text-14-medium md:text-16-medium lg:text-18-medium p-1 text-center text-nowrap">
                        이담건축 · Idam Studio
                     </div>
                  </MapMarker>
                  {/* 지도 타입(일반/스카이뷰) 컨트롤 */}
                  <MapTypeControl position={"TOPRIGHT"} />

                  {/* 줌 컨트롤 */}
                  <ZoomControl position={"RIGHT"} />
               </Map>
            </div>
         </div>
      </DefaultLayout>
   );
}
