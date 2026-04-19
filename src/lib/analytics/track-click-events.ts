/** GA4: 전화번호 클릭 시 호출 */
export function trackPhoneClick() {
   if (typeof window === "undefined") return;
   const { gtag } = window;
   if (typeof gtag !== "function") return;

   gtag("event", "phone_click", {
      event_category: "contact",
      event_label: "phone_number",
   });
}

/** GA4: 이메일 클릭 시 호출 */
export function trackEmailClick() {
   if (typeof window === "undefined") return;
   const { gtag } = window;
   if (typeof gtag !== "function") return;

   gtag("event", "email_click", {
      event_category: "contact",
      event_label: "email_address",
   });
}

/** GA4: 카카오톡 채널 클릭 시 호출 */
export function trackKakaoChannelClick() {
   if (typeof window === "undefined") return;
   const { gtag } = window;
   if (typeof gtag !== "function") return;

   gtag("event", "kakao_channel_click", {
      event_category: "contact",
      event_label: "kakao_channel",
   });
}
