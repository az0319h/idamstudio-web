"use client";
import Lottie from "lottie-react";
import notfound from "@/components/animations/404.json";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
   const router = useRouter();

   useEffect(() => {
      const timer = setTimeout(() => {
         router.replace("/");
      }, 10000); // 10초 (10000ms)

      return () => clearTimeout(timer);
   }, []);
   return (
      <div className="h-screen w-screen bg-black">
         <Lottie
            animationData={notfound}
            loop
            autoplay
            className="h-full w-full"
         />
      </div>
   );
}
