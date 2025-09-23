"use server";

import { Project } from "@/lib/types";
import getProjects from "./get-projects.action";
export async function getRandomProjects(excludeId: string): Promise<Project[]> {
   const result = await getProjects();

   if (!result.success || !result.data) return [];

   // 현재 id 제외
   const filtered = result.data.filter((p) => p.id !== excludeId);

   // 무작위 섞기
   const shuffled = filtered.sort(() => Math.random() - 0.5);

   // 2개만 반환
   return shuffled.slice(0, 2);
}
