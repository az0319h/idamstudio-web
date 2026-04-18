"use client";

import Link from "next/link";
import type { UseFormRegister, FieldErrors, UseFormWatch } from "react-hook-form";
import type { ContactFormValues } from "@/lib/schemas";

type Props = {
   register: UseFormRegister<ContactFormValues>;
   errors: FieldErrors<ContactFormValues>;
   watch: UseFormWatch<ContactFormValues>;
};

function Checkbox({
   register,
   name,
   checked,
}: {
   register: UseFormRegister<ContactFormValues>;
   name: "privacyConsent" | "marketingConsent";
   checked: boolean;
}) {
   return (
      <div className="relative mt-0.5 h-5 w-5 shrink-0">
         <input
            type="checkbox"
            {...register(name)}
            className="absolute h-5 w-5 cursor-pointer opacity-0"
         />
         <div
            className={`pointer-events-none flex h-5 w-5 items-center justify-center rounded-sm border transition-colors ${
               checked
                  ? "border-white bg-white"
                  : "border-line-white-15 bg-transparent"
            }`}
         >
            {checked && (
               <svg
                  className="h-3 w-3 text-black"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M2 6L5 9L10 3"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  />
               </svg>
            )}
         </div>
      </div>
   );
}

export default function ContactConsentBlocks({ register, errors, watch }: Props) {
   const privacyChecked = watch("privacyConsent");
   const marketingChecked = watch("marketingConsent");

   return (
      <>
         <div className="border-line-white-15 space-y-3 border p-4 md:p-5">
            <label className="flex cursor-pointer items-start gap-3">
               <Checkbox register={register} name="privacyConsent" checked={privacyChecked} />
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
               <Checkbox register={register} name="marketingConsent" checked={marketingChecked} />
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
