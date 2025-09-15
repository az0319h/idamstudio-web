"use server";

import { Project } from "@/lib/types";
import { delay } from "@/utils";

interface GetProjectResult {
   success: boolean;
   data: Project[] | null;
}

export default async function getProjects(): Promise<GetProjectResult> {
   await delay(1000);
   try {
      const endpoint = `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/projects.json`;

      const res = await fetch(endpoint, {
         method: "GET",
         cache: "no-store",
      });

      if (!res.ok) {
         throw new Error("Firebase fetch failed");
      }

      const data = await res.json();

      // Firebase 객체 → Project[] 변환
      const projects: Project[] = data
         ? (Object.values(data) as Project[])
         : [];

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
