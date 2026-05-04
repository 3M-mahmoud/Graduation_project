import { z } from "zod";

export const authSchema = (mode: "login" | "signup") =>
  z.object({
    name:
      mode === "signup"
        ? z.string().min(3, "الاسم مطلوب")
        : z.string().optional(),
    email: z.string().email("بريد إلكتروني غير صالح"),
    password: z
      .string()
      .min(9, "يجب أن تكون كلمة المرور 9 أحرف على الأقل")
      .refine(
        (val) => {
          if (mode === "login") return true;
          const upper = (val.match(/[A-Z]/g) || []).length >= 3;
          const lower = (val.match(/[a-z]/g) || []).length >= 3;
          const num = (val.match(/[0-9]/g) || []).length >= 3;
          return upper && lower && num;
        },
        {
          message: "يجب أن تحتوي على: 3 أحرف كبيرة، 3 صغيرة، و3 أرقام",
        }
      ),
    role: z.any().optional(),
    terms:
      mode === "signup"
        ? z
            .boolean()
            .refine((val) => val === true, "يجب الموافقة على الشروط للمتابعة")
        : z.boolean().optional(),
  });

export type AuthFormData = z.infer<ReturnType<typeof authSchema>>;
