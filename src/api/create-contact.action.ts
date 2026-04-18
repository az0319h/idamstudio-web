"use server";

import { CONSULTATION_AREA_LABELS } from "@/constants/consultationAreas";
import type { ContactFormData } from "@/lib/schemas";
import { delay } from "@/utils";
import nodemailer from "nodemailer";

export async function createContact(formData: ContactFormData) {
   await delay(1000);
   try {
      const transporter = nodemailer.createTransport({
         service: "gmail",
         auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
         },
      });

      const areaLabel = CONSULTATION_AREA_LABELS[formData.consultationArea];
      const privacyLabel = formData.privacyConsent
         ? "\uB3D9\uC758(\uD544\uC218)"
         : "\uBBF8\uB3D9\uC758";
      const marketingLabel = formData.marketingConsent
         ? "\uB3D9\uC758"
         : "\uBBF8\uB3D9\uC758";

      await transporter.sendMail({
         from: `"${formData.name}" <${process.env.EMAIL_USER}>`,
         to: process.env.EMAIL_USER,
         subject: `[\uBB38\uC758] ${areaLabel} \u00B7 ${formData.name}\uB2D8`,
         text: `
        \uC131\uD568: ${formData.name}
        \uC5F0\uB77D\uCC98: ${formData.phone}
        \uC0C1\uB2F4\uBD84\uC57C: ${areaLabel}
        \uB0B4\uC6A9: ${formData.message}
        \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1\u00B7\uC774\uC6A9 \uB3D9\uC758: ${privacyLabel}
        \uB9C8\uCF00\uD305 \uC815\uBCF4 \uC218\uC2E0 \uB3D9\uC758: ${marketingLabel}
      `,
         html: `
<div style="font-family: Arial, sans-serif; font-size: 15px; color: #333;">
  <h2 style="margin-bottom: 10px;">\uC0C8 \uACAC\uC801\uC774 \uB3C4\uCC29\uD588\uC2B5\uB2C8\uB2E4</h2>
  <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
    <tr>
      <td style="padding: 8px; font-weight: bold; width: 120px;">\uC131\uD568</td>
      <td style="padding: 8px;">${formData.name}</td>
    </tr>
    <tr style="background: #f9f9f9;">
      <td style="padding: 8px; font-weight: bold;">\uC5F0\uB77D\uCC98</td>
      <td style="padding: 8px;">${formData.phone}</td>
    </tr>
    <tr>
      <td style="padding: 8px; font-weight: bold;">\uC0C1\uB2F4\uBD84\uC57C</td>
      <td style="padding: 8px;">${areaLabel}</td>
    </tr>
    <tr style="background: #f9f9f9;">
      <td style="padding: 8px; font-weight: bold;">\uB0B4\uC6A9</td>
      <td style="padding: 8px; white-space: pre-line;">${formData.message}</td>
    </tr>
    <tr>
      <td style="padding: 8px; font-weight: bold;">\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1\u00B7\uC774\uC6A9</td>
      <td style="padding: 8px;">${privacyLabel}</td>
    </tr>
    <tr style="background: #f9f9f9;">
      <td style="padding: 8px; font-weight: bold;">\uB9C8\uCF00\uD305 \uC815\uBCF4 \uC218\uC2E0</td>
      <td style="padding: 8px;">${marketingLabel}</td>
    </tr>
  </table>
</div>
      `,
      });

      return {
         success: true,
         message:
            "\uACAC\uC801 \uBB38\uC758\uAC00 \uC131\uACF5\uC801\uC73C\uB85C \uBC1C\uC1A1\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uACE7 \uC5F0\uB77D \uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4.",
      };
   } catch (error) {
      console.error("Email Send Failed!", error);
      return {
         success: false,
         message:
            "\uACAC\uC801 \uBB38\uC758 \uC804\uC1A1\uC774 \uC815\uC0C1\uC801\uC73C\uB85C \uCC98\uB9AC\uB418\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4. \uC5F0\uB77D\uCC98\uB85C \uBB38\uC790 \uB0A8\uACA8\uC8FC\uC2DC\uBA74 \uC2E0\uC18D\uD788 \uC5F0\uB77D\uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4.",
      };
   }
}
