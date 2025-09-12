export function toggleBodyScroll(lock: boolean) {
   if (typeof window === "undefined") return;

   if (lock) {
      document.body.style.overflow = "hidden";
   } else {
      document.body.style.overflow = "";
   }
}
