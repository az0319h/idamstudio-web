import { CONSULTATION_AREA_VALUES } from "@/constants/consultationAreas";
import { z } from "zod";

const contactFormFields = z.object({
   name: z
      .string()
      .min(2, "\uC774\uB984\uC740 \uCD5C\uC18C 2\uAE00\uC790 \uC774\uC0C1 \uC785\uB825\uD574\uC8FC\uC138\uC694.")
      .max(20, "\uC774\uB984\uC740 \uCD5C\uB300 20\uAE00\uC790\uAE4C\uC9C0 \uAC00\uB2A5\uD569\uB2C8\uB2E4."),
   phonePrefix: z
      .string()
      .regex(
         /^\d{2,4}$/,
         "\uC55E\uC790\uB9AC(\uC9C0\uC5ED\u00B7\uD1B5\uC2E0\uC0AC\uBC88\uD638)\uB294 2~4\uC790\uB9AC \uC22B\uC790\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
      ),
   phoneMiddle: z
      .string()
      .regex(/^\d{3,4}$/, "\uAC00\uC6B4\uB370 \uBC88\uD638\uB294 3~4\uC790\uB9AC \uC22B\uC790\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694."),
   phoneLast: z
      .string()
      .regex(/^\d{4}$/, "\uB9C8\uC9C0\uB9C9 \uBC88\uD638\uB294 4\uC790\uB9AC \uC22B\uC790\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694."),
   consultationArea: z.enum(CONSULTATION_AREA_VALUES, {
      errorMap: () => ({ message: "\uC0C1\uB2F4\uBD84\uC57C\uB97C \uC120\uD0DD\uD574\uC8FC\uC138\uC694." }),
   }),
   message: z
      .string()
      .min(2, "\uB0B4\uC6A9\uC740 \uCD5C\uC18C 2\uC790 \uC774\uC0C1 \uC785\uB825\uD574\uC8FC\uC138\uC694.")
      .max(1000, "\uB0B4\uC6A9\uC740 \uCD5C\uB300 1000\uC790\uAE4C\uC9C0 \uC785\uB825\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."),
   privacyConsent: z
      .boolean()
      .refine((v) => v === true, {
         message:
            "\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1\u00B7\uC774\uC6A9\uC5D0 \uB3D9\uC758\uD574\uC8FC\uC138\uC694.",
      }),
   marketingConsent: z.boolean(),
});

export const contactSchema = contactFormFields.transform(
   ({ phonePrefix, phoneMiddle, phoneLast, ...rest }) => ({
      ...rest,
      phone: `${phonePrefix}-${phoneMiddle}-${phoneLast}`,
   }),
);

export type ContactFormData = z.output<typeof contactSchema>;
export type ContactFormValues = z.input<typeof contactSchema>;
