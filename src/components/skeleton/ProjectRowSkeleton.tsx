import Image from "next/image";

export default function ProjectRowSkeleton() {
   return (
      <div className="lg:w-8/10">
         <div className="group border-line-black-10 flex justify-between gap-6 border-b py-4 break-keep">
            {/* 왼쪽 텍스트 영역 */}
            <div className="flex flex-col flex-wrap gap-1 sm:flex-row sm:gap-4 md:gap-8 lg:gap-12">
               {/* year */}
               <div className="subtle-pulse h-4 w-10 bg-black/70 sm:h-6 sm:w-12 md:h-7 md:w-14 lg:h-8 lg:w-16" />
               {/* title */}
               <div className="subtle-pulse h-6 w-28 bg-black/80 sm:h-7 sm:w-36 md:h-8 md:w-44 lg:h-9 lg:w-52" />
               {/* usage · type */}
               <div className="subtle-pulse relative hidden h-5 w-20 bg-black/60 lg:block" />
            </div>

            {/* 오른쪽 이미지 영역 */}
            <div className="w-2/8">
               <div className="overflow-hidden">
                  <Image
                     src="https://res.cloudinary.com/dmtmnadim/image/upload/v1757934745/skeleton_rn1c1r.jpg"
                     alt="skeletonImage"
                     width={0}
                     height={0}
                     sizes="100vw"
                     className="h-auto w-full"
                  />
               </div>
            </div>
         </div>
      </div>
   );
}
