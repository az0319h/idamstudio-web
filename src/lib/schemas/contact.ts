import { z } from "zod";

export const contactSchema = z.object({
   name: z
      .string()
      .min(2, "이름은 최소 2글자 이상 입력해주세요.")
      .max(20, "이름은 최대 20글자까지 가능합니다."),
   phone: z
      .string()
      .min(8, "연락처를 입력해주세요.")
      .regex(/^[0-9-]+$/, "연락처는 숫자와 하이픈(-)만 입력할 수 있습니다."),
   message: z
      .string()
      .min(10, "내용은 최소 10자 이상 입력해주세요.")
      .max(1000, "내용은 최대 1000자까지 입력할 수 있습니다."),
});

export type ContactFormData = z.infer<typeof contactSchema>;
