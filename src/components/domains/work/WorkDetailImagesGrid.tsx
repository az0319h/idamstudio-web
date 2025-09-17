"use client";

import WorkSubImage from "./WorkSubImage";

export default function WorkDetailImagesGrid({
   subImages,
}: {
   subImages: string[];
}) {
   return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
         {subImages.slice(0, 6).map((src, index) => (
            <WorkSubImage
               key={index}
               src={src}
               index={index}
               span={index === 2 || index === 5}
            />
         ))}
      </div>
   );
}
