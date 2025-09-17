"use server";

import { Project } from "@/lib/types";

interface GetProjectResult {
   success: boolean;
   data: Project[] | null;
}

export default async function getProjects(): Promise<GetProjectResult> {
   try {
      const endpoint = `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/projects.json`;

      const res = await fetch(endpoint, {
         method: "GET",
         next: { revalidate: 600 }, // 10분에 한 번씩 fetch
      });

      if (!res.ok) {
         throw new Error("Firebase fetch failed");
      }

      const data = await res.json();

      // Firebase 객체 → Project[] 변환
      let projects: Project[] = data ? (Object.values(data) as Project[]) : [];

      projects = projects.sort((a, b) => {
         if (a.year === null) return 1;
         if (b.year === null) return -1;
         return b.year - a.year; // 내림차순 (최신순)
      });

      return {
         success: true,
         data: projects,
      };
   } catch (error) {
      console.log("getProjects Error: ", error);
      return {
         success: false,
         data: null,
      };
   }
}
