import { useEffect, useState } from "react";

export function useScrollVisibility(offset = 0) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;

      if (scrollTop <= offset || scrollTop + windowHeight >= docHeight - offset) {
        // 최상단 or 최하단일 경우
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 실행
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return isVisible;
}
