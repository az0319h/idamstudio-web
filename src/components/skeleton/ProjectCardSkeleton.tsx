import Image from "next/image";

export default function ProjectCardSkeleton() {
   return (
      <div className="subtle-pulse flex flex-col gap-2">
         {/* 이미지 영역 */}
         {/* <div className="aspect-[2000/1157] h-auto w-full overflow-hidden bg-black" /> */}

         <Image
            src={
               "https://res.cloudinary.com/dmtmnadim/image/upload/v1757934745/skeleton_rn1c1r.jpg"
            }
            alt={`skeletonImage`}
            width={0}
            height={0}
            sizes="100vw" // 뷰포트 기준으로 꽉 채움
            className="h-auto w-full"
         />
         {/* 텍스트 영역 */}
         <div className="space-y-2">
            {/* 제목 */}
            <div className="h-5 w-1/3 bg-black/80" />
            {/* usage · type */}
            <div className="h-4 w-1/4 bg-black/60" />
         </div>
      </div>
   );
}
