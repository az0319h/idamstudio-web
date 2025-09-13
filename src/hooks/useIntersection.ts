// hooks/useIntersection.ts
import { useEffect, useRef, useState } from "react";

export function useIntersection(
   options: IntersectionObserverInit = {
      threshold: 0.5,
      rootMargin: "0px 0px -50px 0px",
   },
) {
   const [isVisible, setIsVisible] = useState(false);
   const ref = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
         if (entry.isIntersecting) {
            setIsVisible(true);
         }
      }, options);

      if (ref.current) observer.observe(ref.current);

      return () => {
         if (ref.current) observer.unobserve(ref.current);
      };
   }, [options]);

   return { ref, isVisible };
}
