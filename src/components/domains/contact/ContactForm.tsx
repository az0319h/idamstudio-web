"use client";

import { usePathname } from "next/navigation";
import { useForm, type DefaultValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
   CONSULTATION_AREA_LABELS,
   CONSULTATION_AREA_VALUES,
} from "@/constants/consultationAreas";
import {
   ContactFormData,
   ContactFormValues,
   contactSchema,
} from "@/lib/schemas";
import { createContact } from "@/api/create-contact.action";
import { useNotification } from "@/context/NotificationContext";
import { trackContactFormSubmit } from "@/lib/analytics/track-contact-submit";
import ContactConsentBlocks from "@/components/domains/contact/ContactConsentBlocks";

const defaultFormValues = {
   name: "",
   phonePrefix: "010",
   phoneMiddle: "",
   phoneLast: "",
   consultationArea: "",
   message: "",
   privacyConsent: false,
   marketingConsent: false,
} as unknown as DefaultValues<ContactFormValues>;

export default function ContactForm() {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors, isSubmitting },
      reset,
   } = useForm<ContactFormValues, unknown, ContactFormData>({
      resolver: zodResolver(contactSchema),
      mode: "onChange",
      defaultValues: defaultFormValues,
   });

   const { showNotification } = useNotification();
   const pathname = usePathname();

   const consultationArea = watch("consultationArea");

   const onSubmit = async (data: ContactFormData) => {
      const result = await createContact(data);
      showNotification(result.message, result.success);
      if (result.success) {
         trackContactFormSubmit(pathname);
         reset(defaultFormValues);
      }
   };

   return (
      <div className="flex min-w-0 flex-col gap-12 bg-black p-4 text-white md:p-8 lg:w-5/10">
         <h2 className="text-22-medium break-keep sm:text-3xl sm:font-medium lg:text-5xl lg:leading-14">
            이담건축에 견적 문의를 남겨주세요!
         </h2>
         <form
            onSubmit={handleSubmit(onSubmit)}
            className="[&_p]:text-14-regular md:[&_p]:text-16-regular lg:[&_p]:text-18-regular md:[&_input]:text-18-regular md:[&_select]:text-18-regular lg:[&_input]:text-22-regular lg:[&_select]:text-22-regular flex flex-col gap-7 [&_input:not([type='checkbox'])]:w-full [&_select]:w-full [&_p]:py-1 md:[&_p]:py-1.5"
         >
            <div>
               <input
                  type="text"
                  {...register("name")}
                  placeholder="성함"
                  autoComplete="off"
                  className="border-line-white-15 border-b py-2 focus:border-white"
               />
               {errors.name && <p>{errors.name.message}</p>}
            </div>

            <div>
               <span className="sr-only">연락처</span>
               <div className="flex w-full items-center gap-2 md:gap-3">
                  <input
                     type="text"
                     inputMode="numeric"
                     autoComplete="tel-national"
                     aria-label="앞자리 (지역·통신사 번호)"
                     maxLength={4}
                     {...register("phonePrefix", {
                        setValueAs: (v) =>
                           String(v).replace(/\D/g, "").slice(0, 4),
                     })}
                     className="border-line-white-15 min-w-0 !w-0 flex-1 basis-0 border-b py-2 focus:border-white"
                  />
                  <span className="shrink-0 text-white/50" aria-hidden>
                     -
                  </span>
                  <input
                     type="text"
                     inputMode="numeric"
                     autoComplete="off"
                     aria-label="가운데 번호"
                     maxLength={4}
                     {...register("phoneMiddle", {
                        setValueAs: (v) =>
                           String(v).replace(/\D/g, "").slice(0, 4),
                     })}
                     className="border-line-white-15 min-w-0 !w-0 flex-[1.15] basis-0 border-b py-2 focus:border-white"
                  />
                  <span className="shrink-0 text-white/50" aria-hidden>
                     -
                  </span>
                  <input
                     type="text"
                     inputMode="numeric"
                     autoComplete="off"
                     aria-label="마지막 번호"
                     maxLength={4}
                     {...register("phoneLast", {
                        setValueAs: (v) =>
                           String(v).replace(/\D/g, "").slice(0, 4),
                     })}
                     className="border-line-white-15 min-w-0 !w-0 flex-1 basis-0 border-b py-2 focus:border-white"
                  />
               </div>
               {(errors.phonePrefix ||
                  errors.phoneMiddle ||
                  errors.phoneLast) && (
                  <p>
                     {errors.phonePrefix?.message ??
                        errors.phoneMiddle?.message ??
                        errors.phoneLast?.message}
                  </p>
               )}
            </div>

            <div>
               <label htmlFor="contact-consultation-area" className="sr-only">
                  상담분야
               </label>
               <div className="relative">
                  <select
                     id="contact-consultation-area"
                     {...register("consultationArea")}
                     className={`border-line-white-15 w-full cursor-pointer appearance-none border-b bg-black py-2 pr-10 outline-none transition-[color,border-color] focus:border-white md:text-18-regular lg:text-22-regular ${
                        consultationArea ? "text-white" : "text-white/40"
                     }`}
                  >
                     <option value="" disabled>
                        상담분야
                     </option>
                     {CONSULTATION_AREA_VALUES.map((value) => (
                        <option key={value} value={value}>
                           {CONSULTATION_AREA_LABELS[value]}
                        </option>
                     ))}
                  </select>
                  <span
                     className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-white"
                     aria-hidden
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     >
                        <path d="m6 9 6 6 6-6" />
                     </svg>
                  </span>
               </div>
               {errors.consultationArea && (
                  <p>{errors.consultationArea.message}</p>
               )}
            </div>

            <div>
               <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="문의 내용을 간략하게 남겨주세요"
                  className="border-line-white-15 md:text-18-regular lg:text-22-regular w-full border-b py-3 focus:border-white"
               />
               {errors.message && <p>{errors.message.message}</p>}
            </div>

            <ContactConsentBlocks register={register} errors={errors} watch={watch} />

            <div>
               <button
                  type="submit"
                  className="text-16-medium md:text-18-medium lg:text-22-medium border-b border-white pt-2 pb-1 hover:opacity-70"
                  disabled={isSubmitting}
               >
                  {isSubmitting ? "전송 중..." : "전송하기"}
               </button>
            </div>
         </form>
      </div>
   );
}
