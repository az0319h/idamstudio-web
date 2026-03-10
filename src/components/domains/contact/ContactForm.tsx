"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormData, contactSchema } from "@/lib/schemas";
import { createContact } from "@/api/create-contact.action";
import { useNotification } from "@/context/NotificationContext";

export default function ContactForm() {
   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      reset,
   } = useForm<ContactFormData>({
      resolver: zodResolver(contactSchema),
      mode: "onChange",
   });

   const { showNotification } = useNotification();

   const onSubmit = async (data: ContactFormData) => {
      const result = await createContact(data);
      showNotification(result.message, result.success);
      if (result.success) reset();
   };

   return (
      <div className="flex flex-col gap-12 bg-black p-4 text-white md:p-8 lg:w-5/10">
         <h2 className="text-22-medium break-keep sm:text-3xl sm:font-medium lg:text-5xl lg:leading-14">
            이담건축에 견적 문의를 남겨주세요!
         </h2>
         <form
            onSubmit={handleSubmit(onSubmit)}
            className="[&_p]:text-14-regular md:[&_p]:text-16-regular lg:[&_p]:text-18-regular md:[&_input]:text-18-regular lg:[&_input]:text-22-regular flex flex-col gap-7 [&_input]:w-full [&_p]:py-1 md:[&_p]:py-1.5"
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
               <input
                  type="text"
                  {...register("phone")}
                  placeholder="연락처"
                  autoComplete="off"
                  className="border-line-white-15 border-b py-2 focus:border-white"
               />
               {errors.phone && <p>{errors.phone.message}</p>}
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
