"use server";

import { database } from "@/lib/firebase/firebase";
import { ref, push, set } from "firebase/database";
import { revalidatePath } from "next/cache";

interface CreateProjectResult {
   success: boolean;
   message: string;
}

export default async function createProject(
   _: unknown,
   formData: FormData,
): Promise<CreateProjectResult> {
   try {
      // 관리자 비밀번호 검증
      const password = formData.get("adminPassword");
      if (password !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
         return {
            success: false,
            message: "관리자만 프로젝트를 생성할 수 있습니다.",
         };
      }

      // 문자열 필드를 쉼표로 나눠 배열로 변환하는 helper
      const splitToArray = (value: FormDataEntryValue | null) =>
         value
            ? (value as string)
                 .split(",")
                 .map((v) => v.trim())
                 .filter((v) => v.length > 0)
            : [];

      // 폼 데이터 가져오기
      const title = formData.get("title") as string;
      const location = formData.get("location") as string;
      const year = formData.get("year") as string;
      const completionDate = formData.get("completionDate") as string;
      const siteArea = formData.get("siteArea") as string;
      const floors = formData.get("floors") as string;
      const type = formData.get("type") as string;
      const usage = formData.get("usage") as string;

      // 쉼표 분리 필드
      const exterior = splitToArray(formData.get("exterior"));
      const interior = splitToArray(formData.get("interior"));
      const features = splitToArray(formData.get("features"));
      const subImages = splitToArray(formData.get("subImages"));

      const description = formData.get("description") as string;
      const youtubeUrl = formData.get("youtubeUrl") as string;
      const mainImage = formData.get("mainImage") as string;

      // Firebase push key 생성
      const projectRef = ref(database, "projects");
      const newProjectRef = push(projectRef);
      const id = newProjectRef.key;

      // 저장할 데이터 객체
      const projectData = {
         id,
         title,
         location,
         year: year ? parseInt(year, 10) : null,
         completionDate,
         siteArea: siteArea ? parseInt(siteArea, 10) : null,
         floors,
         type,
         usage,
         exterior, // 배열
         interior, // 배열
         features, // 배열
         description,
         youtubeUrl,
         mainImage,
         subImages, // 배열
         createdAt: new Date().toISOString(),
      };

      // Firebase에 데이터 저장
      await set(newProjectRef, projectData);

      // 캐시 무효화
      revalidatePath("/work"); // /work 페이지 전체 다시 fetch
      revalidatePath("/"); // 홈에서 ProjectsList 쓰면 같이 리프레시 가능

      return {
         success: true,
         message: "프로젝트가 성공적으로 생성되었습니다.",
      };
   } catch (error) {
      console.error("Server Error : ", error);
      return {
         success: false,
         message: "프로젝트 생성 중 오류가 발생했습니다.",
      };
   }
}
