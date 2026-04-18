"use client";

import Link from "next/link";
import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { ContactFormValues } from "@/lib/schemas";

type Props = {
   register: UseFormRegister<ContactFormValues>;
   errors: FieldErrors<ContactFormValues>;
};

export default function ContactConsentBlocks({ register, errors }: Props) {
   return (
      <>
         <div className="border-line-white-15 space-y-3 border p-4 md:p-5">
            <label className="flex cursor-pointer items-start gap-3">
               <input
                  type="checkbox"
                  {...register("privacyConsent")}
                  className="border-line-white-15 mt-1 h-4 w-4 shrink-0 rounded-sm border bg-black accent-white"
               />
               <span className="text-14-regular md:text-16-regular lg:text-18-regular leading-snug text-white">
                  [필수] 개인정보 수집·이용 동의
               </span>
            </label>
            <ul className="text-14-regular md:text-16-regular space-y-1.5 pl-7 text-white/75 leading-relaxed">
               <li>
                  <span className="text-white/50">수집항목</span>{" "}
                  성함, 연락처, 상담분야, 문의내용
               </li>
               <li>
                  <span className="text-white/50">이용목적</span>{" "}
                  견적 상담
               </li>
               <li>
                  <span className="text-white/50">보유기간</span>{" "}
                  상담 종료 후 3년
               </li>
            </ul>
            <div className="pl-7">
               <Link
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-14-regular md:text-16-regular underline decoration-white/35 underline-offset-4 hover:opacity-80"
               >
                  개인정보처리방침 전문보기
               </Link>
            </div>
            {errors.privacyConsent && (
               <p className="!py-0 pl-7">{errors.privacyConsent.message}</p>
            )}
         </div>

         <div className="border-line-white-15 space-y-3 border p-4 md:p-5">
            <label className="flex cursor-pointer items-start gap-3">
               <input
                  type="checkbox"
                  {...register("marketingConsent")}
                  className="border-line-white-15 mt-1 h-4 w-4 shrink-0 rounded-sm border bg-black accent-white"
               />
               <span className="text-14-regular md:text-16-regular lg:text-18-regular leading-snug text-white">
                  [선택] 마케팅 정보 수신 동의
               </span>
            </label>
            <p className="text-14-regular md:text-16-regular pl-7 text-white/75 leading-relaxed">
               카카오톡·문자·이메일로 신규 시공 사례, 이벤트 정보를 받습니다.
            </p>
            <div className="pl-7">
               <Link
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-14-regular md:text-16-regular underline decoration-white/35 underline-offset-4 hover:opacity-80"
               >
                  전문보기
               </Link>
            </div>
         </div>
      </>
   );
}
