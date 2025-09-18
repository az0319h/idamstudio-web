"use server";

import { Project } from "@/lib/types";

interface GetProjectByIdResult {
   success: boolean;
   data: Project | null;
}

export async function getProjectById(
   id: string,
): Promise<GetProjectByIdResult> {
   try {
      const endpoint = `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/projects/${id}.json`;

      const res = await fetch(endpoint, {
         method: "GET",
         next: { revalidate: 600 }, // 10분에 한 번씩 fetch
      });

      if (!res.ok) {
         throw new Error("Firebase fetch failed");
      }

      const data: Project | null = await res.json();

      return {
         success: true,
         data,
      };
   } catch (error) {
      console.log("getProjectById Error: ", error);
      return {
         success: false,
         data: null,
      };
   }
}
