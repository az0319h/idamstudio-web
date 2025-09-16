"use server";

import { delay } from "@/utils";
import nodemailer from "nodemailer";

export async function createContact(formData: {
   name: string;
   phone: string;
   message: string;
}) {
   await delay(1000);
   try {
      const transporter = nodemailer.createTransport({
         service: "gmail",
         auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
         },
      });

      await transporter.sendMail({
         from: `"${formData.name}" <${process.env.EMAIL_USER}>`,
         to: process.env.EMAIL_USER,
         subject: `[문의] ${formData.name}님`,
         text: `
        성함: ${formData.name}
        연락처: ${formData.phone}
        내용: ${formData.message}
      `,
         html: `
<div style="font-family: Arial, sans-serif; font-size: 15px; color: #333;">
  <h2 style="margin-bottom: 10px;">새 견적이 도착했습니다</h2>
  <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
    <tr>
      <td style="padding: 8px; font-weight: bold; width: 120px;">성함</td>
      <td style="padding: 8px;">${formData.name}</td>
    </tr>
    <tr style="background: #f9f9f9;">
      <td style="padding: 8px; font-weight: bold;">연락처</td>
      <td style="padding: 8px;">${formData.phone}</td>
    </tr>
    <tr>
      <td style="padding: 8px; font-weight: bold;">내용</td>
      <td style="padding: 8px; white-space: pre-line;">${formData.message}</td>
    </tr>
  </table>
</div>
      `,
      });

      return {
         success: true,
         message:
            "견적 문의가 성공적으로 발송되었습니다. 곧 연락 드리겠습니다.",
      };
   } catch (error) {
      console.error("Email Send Failed!", error);
      return {
         success: false,
         message:
            "견적 문의 전송이 정상적으로 처리되지 않았습니다. 연락처로 문자 남겨주시면 신속히 연락드리겠습니다.",
      };
   }
}
