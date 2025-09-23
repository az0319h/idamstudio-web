"use client";
import { useIntersection } from "@/hooks";
import useKakaoLoader from "@/hooks/useKakaoLoader";
import { revealStyle } from "@/utils";
import {
   Map,
   MapMarker,
   MapTypeControl,
   ZoomControl,
} from "react-kakao-maps-sdk";
export default function LocationMap() {
   useKakaoLoader();
   const { ref: sectionRef, isVisible } = useIntersection();

   return (
      <div ref={sectionRef}>
         <div
            style={revealStyle(isVisible, 1)}
            className="border-line-black-10 border-t"
         >
            <div className="h-[40vh] px-4 pt-4 md:h-[60vh] lg:h-[80vh]">
               <Map
                  id="map"
                  center={{ lat: 37.9392521191163, lng: 127.06118830562747 }}
                  style={{ width: "100%", height: "100%" }}
                  level={1}
                  mapTypeId="HYBRID"
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
      </div>
   );
}
