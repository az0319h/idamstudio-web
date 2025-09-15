"use client";

import createProject from "@/api/create-project.action";
import { useActionState, useEffect } from "react";

export default function CreatePage() {
   const [state, formAction, isPending] = useActionState(createProject, null);

   useEffect(() => {
      // 작업이 끝났고 && 실패 상태일 때만
      if (!isPending && state) {
         alert(state.message);
      }
   }, [isPending, state]);

   //    // 서버 액션 시뮬레이션 (비밀번호 체크 포함)
   //    async function handleSubmit(prevState: any, formData: FormData) {
   //       const adminPassword = formData.get("adminPassword") as string;

   //       if (adminPassword !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
   //          return { error: "관리자 비밀번호가 일치하지 않습니다." };
   //       }

   //       // 실제 Firebase 전송 로직은 이 자리에 작성
   //       // 예: await push(ref(database, "projects"), { ...formData })

   //       return { success: true };
   //    }

   //    const [state, formAction] = useActionState(handleSubmit, {
   //       error: "",
   //       success: false,
   //    });

   return (
      <div className="flex min-h-screen items-center justify-center bg-black p-6 text-white">
         <form
            action={formAction}
            className="flex w-full max-w-3xl flex-col gap-4"
         >
            {/* Title */}
            <input
               type="text"
               name="title"
               placeholder="프로젝트명"
               className="rounded border border-gray-700 bg-gray-900 p-2"
               required
            />

            {/* Location */}
            <input
               type="text"
               name="location"
               placeholder="위치"
               className="rounded border border-gray-700 bg-gray-900 p-2"
            />

            {/* Year */}
            <input
               type="number"
               name="year"
               placeholder="준공연도 (예: 2024)"
               className="rounded border border-gray-700 bg-gray-900 p-2"
            />

            {/* Completion Date */}
            <input
               type="month"
               name="completionDate"
               placeholder="완공일"
               className="rounded border border-gray-700 bg-gray-900 p-2"
            />

            {/* Site Area */}
            <input
               type="number"
               name="siteArea"
               placeholder="건축면적 (㎡)"
               className="rounded border border-gray-700 bg-gray-900 p-2"
            />

            {/* Floors */}
            <input
               type="text"
               name="floors"
               placeholder="층수 (예: 지상 3층)"
               className="rounded border border-gray-700 bg-gray-900 p-2"
            />

            {/* Type */}
            <input
               type="text"
               name="type"
               placeholder="건축 타입"
               className="rounded border border-gray-700 bg-gray-900 p-2"
            />

            {/* Usage */}
            <input
               type="text"
               name="usage"
               placeholder="용도 (예: 주택, 상업)"
               className="rounded border border-gray-700 bg-gray-900 p-2"
            />

            {/* Exterior */}
            <input
               type="text"
               name="exterior"
               placeholder="외장재 (쉼표 구분)"
               className="rounded border border-gray-700 bg-gray-900 p-2"
            />

            {/* Interior */}
            <input
               type="text"
               name="interior"
               placeholder="내장재 (쉼표 구분)"
               className="rounded border border-gray-700 bg-gray-900 p-2"
            />

            {/* Features */}
            <input
               type="text"
               name="features"
               placeholder="건축 특징 (쉼표 구분)"
               className="rounded border border-gray-700 bg-gray-900 p-2"
            />

            {/* Description */}
            <textarea
               name="description"
               placeholder="건축물 설명"
               className="h-28 rounded border border-gray-700 bg-gray-900 p-2"
            />

            {/* Youtube URL */}
            <input
               type="url"
               name="youtubeUrl"
               placeholder="YouTube URL"
               className="rounded border border-gray-700 bg-gray-900 p-2"
            />

            {/* Main Image */}
            <input
               type="url"
               name="mainImage"
               placeholder="대표 이미지 URL"
               className="rounded border border-gray-700 bg-gray-900 p-2"
            />

            {/* Sub Images */}
            <textarea
               name="subImages"
               placeholder="서브 이미지 URL들을 쉼표로 구분"
               className="h-20 rounded border border-gray-700 bg-gray-900 p-2"
            />

            {/* Admin Password */}
            <input
               type="password"
               name="adminPassword"
               placeholder="관리자 비밀번호"
               className="rounded border border-gray-700 bg-gray-900 p-2"
               required
            />

            {/* Submit */}
            <button
               type="submit"
               disabled={isPending}
               className="rounded bg-white p-2 font-bold text-black hover:bg-gray-200"
            >
               {isPending ? "등록 중.." : "프로젝트 등록"}
            </button>
         </form>
      </div>
   );
}
