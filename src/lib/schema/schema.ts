import * as z from "zod";

const passwordRegex =
  /^(?=(?:.*[A-Z]){3,})(?=(?:.*[a-z]){3,})(?=(?:.*\d){3,}).{9,}$/;

const profileTeacherSchema = z
  .object({
    name: z.string().min(2, "الاسم يجب أن يكون أكثر من 5 أحرف"),
    educationalStage: z.string().min(1, "يرجى اختيار المرحلة الدراسية"),
    classRoom: z.string().min(1, "يرجى اختيار الصف الدراسي"),
    imageUrl: z.string().url("الصورة غير صحيحة").optional(),
    email: z.string().email("البريد الإلكتروني غير صحيح"),
    studyMaterial: z.string().min(1, "يرجى اختيار المادة"),
    qualification: z
      .string()
      .min(10, "يرجى كتابة المؤهل بالتفصيل (10 أحرف على الأقل)"),
    experience: z.string(),
    bio: z
      .string()
      .min(10, "النبذة يجب ألا تقل عن 10 حرفاً")
      .max(500, "النبذة يجب ألا تتجاوز 500 حرف"),
  })
  .optional();

export type ProfileTeacherFormData = z.infer<typeof profileTeacherSchema>;

const changePasswordSchema = z
  .object({
    oldPassword: z
      .string()
      .regex(passwordRegex, "كلمة المرور القديمة غير صحيحة"),

    newPassword: z
      .string()
      .regex(
        passwordRegex,
        "كلمة المرور الجديدة ضعيفة (يجب 3 حروف كبيرة + 3 صغيرة + 3 أرقام + 9 أحرف على الأقل)",
      ),

    confirmPassword: z.string().min(1, "أكد كلمة المرور"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "كلمتا المرور غير متطابقتين",
    path: ["confirmPassword"],
  })
  .refine((data) => data.oldPassword !== data.newPassword, {
    message: "لا يمكن استخدام نفس كلمة المرور القديمة",
    path: ["newPassword"],
  });

export { profileTeacherSchema, changePasswordSchema };
