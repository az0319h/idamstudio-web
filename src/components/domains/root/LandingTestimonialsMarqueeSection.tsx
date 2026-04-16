"use client";

import DefaultLayout from "@/components/layout/DefaultLayout";
import { landingTestimonials } from "@/constants/landingTestimonials";
import { useIntersection } from "@/hooks";
import { revealStyle } from "@/utils";
import { useEffect, useState } from "react";

function StarRating({ rating }: { rating: number }) {
   return (
      <div className="flex gap-0.5" aria-label={`5점 만점 ${rating}점`}>
         {Array.from({ length: 5 }).map((_, i) => {
            const fill = i < Math.floor(rating) ? 1 : i < rating ? 0.5 : 0;
            return (
               <svg
                  key={i}
                  viewBox="0 0 20 20"
                  className="size-3.5 text-black md:size-4"
               >
                  <defs>
                     <linearGradient id={`star-${i}-${rating}`}>
                        <stop offset={`${fill * 100}%`} stopColor="currentColor" />
                        <stop offset={`${fill * 100}%`} stopColor="transparent" />
                     </linearGradient>
                  </defs>
                  <path
                     d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.172c.969 0 1.371 1.24.588 1.81l-3.374 2.452a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.374-2.452a1 1 0 00-1.175 0l-3.374 2.452c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.172a1 1 0 00.95-.69l1.286-3.967z"
                     fill={`url(#star-${i}-${rating})`}
                     stroke="currentColor"
                     strokeWidth={1}
                  />
               </svg>
            );
         })}
      </div>
   );
}

function TestimonialCard({
   name,
   role,
   rating,
   quote,
}: {
   name: string;
   role: string;
   rating: number;
   quote: string;
}) {
   return (
      <div className="flex h-full flex-col justify-between gap-6 border border-line-black-10 p-6 md:p-8">
         <p className="text-14-regular md:text-16-regular break-keep leading-relaxed text-black/80">
            "{quote}"
         </p>
         <div className="flex flex-col gap-1.5">
            <StarRating rating={rating} />
            <div className="flex items-baseline gap-2">
               <span className="text-14-medium md:text-16-medium">{name}</span>
               <span className="text-12-regular text-black/50">{role}</span>
            </div>
         </div>
      </div>
   );
}

export default function LandingTestimonialsMarqueeSection() {
   const { ref: headerRef, isVisible } = useIntersection();
   const [reduceMotion, setReduceMotion] = useState(false);

   useEffect(() => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      const update = () => setReduceMotion(mq.matches);
      update();
      mq.addEventListener("change", update);
      return () => mq.removeEventListener("change", update);
   }, []);

   return (
      <DefaultLayout>
         <section className="py-20 md:py-28 lg:py-36">
            <div
               ref={headerRef}
               style={revealStyle(isVisible, 0)}
               className="flex items-end justify-between gap-4"
            >
               <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  고객 후기
               </h2>
            </div>

            <div
               className="relative -mx-4 mt-10 md:mx-0 md:mt-14 lg:mt-16"
               style={revealStyle(isVisible, 1)}
            >
               {reduceMotion ? (
                  <ul className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:gap-6 md:px-0 lg:grid-cols-3">
                     {landingTestimonials.map((item) => (
                        <li key={item.name + item.role}>
                           <TestimonialCard {...item} />
                        </li>
                     ))}
                  </ul>
               ) : (
                  <div className="relative overflow-hidden">
                     <div
                        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white to-transparent md:w-12"
                        aria-hidden
                     />
                     <div
                        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white to-transparent md:w-12"
                        aria-hidden
                     />
                     <div className="landing-testimonials-marquee gap-4 md:gap-6">
                        <ul className="flex shrink-0 gap-4 md:gap-6">
                           {landingTestimonials.map((item, idx) => (
                              <li
                                 key={`a-${idx}`}
                                 className="w-[min(80vw,18rem)] shrink-0 md:w-72 lg:w-80"
                              >
                                 <TestimonialCard {...item} />
                              </li>
                           ))}
                        </ul>
                        <ul className="flex shrink-0 gap-4 md:gap-6" aria-hidden>
                           {landingTestimonials.map((item, idx) => (
                              <li
                                 key={`b-${idx}`}
                                 className="w-[min(80vw,18rem)] shrink-0 md:w-72 lg:w-80"
                              >
                                 <TestimonialCard {...item} />
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               )}
            </div>
         </section>
      </DefaultLayout>
   );
}
