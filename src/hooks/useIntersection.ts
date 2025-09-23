import { useEffect, useRef, useState } from "react";

export function useIntersection(
   options: IntersectionObserverInit = {
      threshold: 0.3,
      rootMargin: "0px 0px -50px 0px",
   },
) {
   const [isVisible, setIsVisible] = useState(false);
   const ref = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const node = ref.current;
      if (!node) return;

      const observer = new IntersectionObserver(([entry]) => {
         if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // 한 번 보이면 더는 감시 안 함
         }
      }, options);

      observer.observe(node);

      // 새로고침 시, 이미 화면에 있으면 바로 true 처리
      if (node.getBoundingClientRect().top < window.innerHeight) {
         setIsVisible(true);
      }

      return () => {
         if (node) observer.unobserve(node);
      };
   }, [options]);

   return { ref, isVisible };
}
