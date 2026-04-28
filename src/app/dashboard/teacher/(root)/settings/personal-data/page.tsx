"use client";
import { Camera } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  classRoom,
  educationalStage,
  studyMaterial,
} from "@/app/components/dashboard/teacher/constant/constant";
import {
  ClassRoomDashboardTeacher,
  StudyMaterialDashboardTeacher,
} from "@/types/listing";
import image from "@/../public/boys-profile-pic.webp";

const profileSchema = z.object({
  name: z.string().min(5, "الاسم يجب أن يكون أكثر من 5 أحرف"),
  nickName: z.string().min(1, "يرجى اختيار المسمى الوظيفي"),
  educationalStage: z.string().min(1, "يرجى اختيار المرحلة الدراسية"),
  grade: z.string().min(1, "يرجى اختيار الصف الدراسي"),
  imageUrl: z.string().url("الصورة غير صحيحة"),
  email: z.string().email("البريد الإلكتروني غير صحيح"),
  studyMaterial: z.string().min(1, "يرجى اختيار المادة"),
  qualification: z
    .string()
    .min(10, "يرجى كتابة المؤهل بالتفصيل (10 أحرف على الأقل)"),
  experience: z.string().min(1, "يرجى تحديد سنوات الخبرة"),
  bio: z
    .string()
    .min(50, "النبذة يجب ألا تقل عن 50 حرفاً")
    .max(500, "النبذة يجب ألا تتجاوز 500 حرف"),
});

type ProfileFormData = z.infer<typeof profileSchema>;

const sectionHeaderCss =
  "text-xl pr-3 border-r-4 border-[#003F87] text-[#003F87] font-bold mb-6";
const labelCss = "text-sm font-bold mr-1 block";

const PersonalDataPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "أ. حسن علي عبدالله",
      nickName: "أ.",
      email: "Alaa.el.khalil@gmail.com",
      imageUrl: "",
      educationalStage: "المرحلة الثانوية",
      grade: "الصف الثالث الثانوي",
      studyMaterial: "اللغة العربية",
      qualification: "بكالوريوس رياضيات - جامعة القاهرة",
      experience: "15",
      bio: "مدرس رياضيات متخصص مع خبرة واسعة في تدريس جميع المراحل التعليمية حاصل على دكتوراة في الرياضيات من جامعة القاهرة ولدي شغف كبير بتبسيط المفاهيم الرياضية الصعبة للطلاب..",
    },
  });

  const watchedStage = watch("educationalStage");

  const onSubmit = (data: ProfileFormData) => {
    console.log("Form Data:", data);
    alert("تم حفظ البيانات بنجاح!");
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] p-4 lg:p-10" dir="rtl">
      <div className="max-w-4xl mx-auto space-y-8 text-black">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Image
              src={watch("imageUrl") || image}
              alt={watch("name")}
              className="rounded-full size-20 object-cover"
            />
            <button className="absolute bottom-0 left-0 p-0.5 rounded-sm bg-[#003F87] cursor-pointer">
              <Camera size={14} color="white" className="" />
            </button>
          </div>
          <div className="space-y-1">
            <div className="text-[#204658] font-bold text-2xl">
              {watch("name")}
            </div>
            <div className="text-[#A9363D] font-normal text-md">
              <span>{watch("studyMaterial")}</span>-
              <span>{watch("educationalStage")}</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className={sectionHeaderCss}>المعلومات الشخصية</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className={labelCss}>الأسم بالكامل</label>
                <input
                  {...register("name")}
                  className={`w-full p-3 border rounded-xl outline-none transition-all ${errors.name ? "border-red-500" : "border-gray-200 focus:border-[#003F87]"}`}
                />
                {errors.name && (
                  <span className="text-red-500 text-xs pr-1">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <label className={labelCss}>اللقب / المسمى الوظيفي</label>
                <select
                  {...register("nickName")}
                  className="w-full p-3 border border-gray-200 rounded-xl outline-none bg-white appearance-none"
                >
                  <option value="أ.">أ. أستاذ</option>
                  <option value="د.">د. دكتور</option>
                </select>
                {errors.nickName && (
                  <span className="text-red-500 text-xs pr-1">
                    {errors.nickName.message}
                  </span>
                )}
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className={sectionHeaderCss}>البيانات التعليمية</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className={labelCss}>المرحلة الدراسية</label>
                <select
                  {...register("educationalStage")}
                  className="w-full p-3 border border-gray-200 rounded-xl outline-none bg-white"
                >
                  {educationalStage.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className={labelCss}>الصف الدراسي</label>
                <select
                  {...register("grade")}
                  className="w-full p-3 border border-gray-200 rounded-xl outline-none bg-white"
                >
                  {classRoom[watchedStage as ClassRoomDashboardTeacher]?.map(
                    (item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ),
                  )}
                </select>
                {errors.grade && (
                  <span className="text-red-500 text-xs pr-1">
                    {errors.grade.message}
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <label className={labelCss}>المادة العلمية</label>
                <select
                  {...register("studyMaterial")}
                  className="w-full p-3 border border-gray-200 rounded-xl outline-none bg-white"
                >
                  {studyMaterial[
                    watchedStage as StudyMaterialDashboardTeacher
                  ]?.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className={sectionHeaderCss}>المؤهلات الأكاديمية</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-3 space-y-2">
                <label className={labelCss}>المؤهل الدراسي</label>
                <input
                  {...register("qualification")}
                  className={`w-full p-3 border rounded-xl outline-none ${errors.qualification ? "border-red-500" : "border-gray-200"}`}
                />
                {errors.qualification && (
                  <span className="text-red-500 text-xs pr-1">
                    {errors.qualification.message}
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <label className={labelCss}>سنوات الخبرة</label>
                <input
                  min={1}
                  max={35}
                  type="number"
                  {...register("experience")}
                  className="w-full p-3 border border-gray-200 rounded-xl outline-none"
                />
                {errors.experience && (
                  <span className="text-red-500 text-xs pr-1">
                    {errors.experience.message}
                  </span>
                )}
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className={sectionHeaderCss}>معلومات التواصل</h3>
            <div className="space-y-2">
              <label className={labelCss}>البريد الإلكتروني</label>
              <input
                disabled
                {...register("email")}
                className="w-full p-3 border border-gray-100 rounded-xl bg-gray-50 text-gray-400 cursor-not-allowed text-center tracking-widest"
              />
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className={sectionHeaderCss}>النبذة الشخصية</h3>
            <div className="space-y-2">
              <label className="text-gray-700 text-sm font-bold mr-1 block">
                عن المعلم
              </label>
              <textarea
                {...register("bio")}
                rows={4}
                className={`w-full p-4 border rounded-xl bg-[#FDFDFD] text-gray-600 text-sm outline-none ${errors.bio ? "border-red-500" : "border-gray-200"} max-h-40 min-h-40`}
              />
              {errors.bio && (
                <p className={`text-red-500 ${labelCss}`}>
                  {errors.bio.message}
                </p>
              )}
            </div>
          </section>

          <div className="flex justify-start pt-4">
            <button
              type="submit"
              className="bg-[#003F87] text-white px-12 py-3 rounded-lg font-bold hover:bg-[#002d61] transition-all shadow-lg active:scale-95"
            >
              حفظ التعديلات
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalDataPage;
