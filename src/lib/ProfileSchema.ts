import * as z from "zod";

export const profileSchema = z.object({
  firstName: z.string().min(2, "الاسم الأول يجب أن يكون حرفين على الأقل"),
  lastName: z.string().min(2, "اسم العائلة يجب أن يكون حرفين على الأقل"),
  educationalStage: z.string().min(1, "يرجى اختيار المرحلة الدراسية"),
  academicYear: z.string().min(1, "يرجى اختيار الصف الدراسي"),
  phoneNumber: z.string().regex(/^\+?[0-9]{10,15}$/, "رقم الهاتف غير صحيح")
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
