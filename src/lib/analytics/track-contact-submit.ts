function formLocationFromPathname(pathname: string | null): string {
   if (!pathname || pathname === "/") return "home";
   const trimmed = pathname.replace(/\/$/, "") || "/";
   if (trimmed === "/contact") return "contact";
   return trimmed.slice(1) || "unknown";
}

/** GA4: 문의 전송이 서버에서 성공했을 때 한 번 호출 */
export function trackContactFormSubmit(pathname: string | null) {
   if (typeof window === "undefined") return;
   const { gtag } = window;
   if (typeof gtag !== "function") return;

   gtag("event", "form_submit", {
      event_category: "lead",
      event_label: "contact_form_submission",
      form_location: formLocationFromPathname(pathname),
      value: 1,
   });
}
