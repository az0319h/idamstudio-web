"use client";

import { useEffect, useRef, useState } from "react";

export function useScaleIntersection(options?: IntersectionObserverInit) {
   const [isVisible, setIsVisible] = useState(false);
   const ref = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const node = ref.current;
      if (!node) return;

      const observer = new IntersectionObserver(
         ([entry]) => {
            setIsVisible(entry.isIntersecting);
         },
         {
            threshold: 0.7,
            rootMargin: "0px",
            ...options,
         },
      );

      observer.observe(node);

      return () => {
         if (node) observer.unobserve(node);
      };
   }, [options]);

   return { ref, isVisible };
}
