"use client";
import { Camera } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  classRoom,
  educationalStage,
  studyMaterial,
} from "@/app/components/dashboard/teacher/constant/constant";
import { openCloudinaryWidget } from "@/lib/cloudinary/widget";
import { useEffect, useState } from "react";
import { DOMAIN } from "@/utils/constants";
import axios from "axios";

import toast from "react-hot-toast";
import {
  ProfileTeacherFormData,
  profileTeacherSchema,
} from "@/lib/schema/schema";

const sectionHeaderCss =
  "text-xl pr-3 border-r-4 border-[#003F87] text-[#003F87] font-bold mb-6";
const labelCss = "text-sm font-bold mr-1 block";

const PersonalDataPage = () => {
  const [userId, setUserId] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ProfileTeacherFormData>({
    resolver: zodResolver(profileTeacherSchema),
    defaultValues: {
      name: "",
      imageUrl: "",
      email: "",
      educationalStage: "",
      classRoom: "",
      studyMaterial: "",
      qualification: "",
      experience: "",
      bio: "",
    },
  });

  useEffect(() => {
    const getmedata = async () => {
      const token = localStorage.getItem("token");

      const res = await axios.get(`${DOMAIN}auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const user = res.data.data;

      setUserId(user.id);
      setValue("name", user.name);
      setValue("imageUrl", user.imageUrl);
      setValue("email", user.email);
      setValue("educationalStage", user.teacher.educationalStage);
      setValue("classRoom", user.teacher.classRoom[0]);
      setValue("studyMaterial", user.teacher.studyMaterial);
      setValue("qualification", user.teacher.educationalQualification);
      setValue("experience", Number(user.teacher.experienceYear));
      setValue("bio", user.teacher.bio);
    };

    getmedata();
  }, []);
  const watchedStage = watch("educationalStage");

  const onSubmit = async (formData: ProfileTeacherFormData) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.patch(
        `${DOMAIN}users/${userId}`,
        {
          user: {
            name: formData.name,
            imageUrl: formData?.imageUrl || "",
          },
          teacher: {
            bio: formData?.bio || "",
            classRoom: [formData?.classRoom] || [],
            educationalStage: formData?.educationalStage || "",
            studyMaterial: formData?.studyMaterial || "",
            educationalQualification: formData?.qualification || "",
            experienceYear: Number(formData?.experience) || 0,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );

      toast.success("تم حفظ البيانات بنجاح!");
    } catch (err) {
      toast.error("حدث خطأ أثناء الحفظ");
      console.error("ERROR:", err.response?.data || err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] p-4 lg:p-10" dir="rtl">
      <div className="max-w-4xl mx-auto space-y-8 text-black">
        <div className="flex items-center gap-3">
          <div className="relative">
            {watch("imageUrl") && (
              <Image
                width={80}
                height={80}
                src={watch("imageUrl")}
                alt={watch("name")}
                className="rounded-full size-20 object-cover"
                unoptimized
              />
            )}
            <div className="flex flex-col">
              <button
                type="button"
                onClick={() =>
                  openCloudinaryWidget((url) => {
                    // setImageValue(url); // 👈 يحط الصورة في الفورم
                    setValue("imageUrl", url);
                  })
                }
                className="absolute bottom-0 left-0 p-0.5 rounded-sm bg-[#003F87] cursor-pointer"
              >
                <Camera size={14} color="white" />
              </button>
            </div>
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
            <div className="grid grid-cols-1 gap-6">
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
              {/* <div className="space-y-2">
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
              </div> */}
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className={sectionHeaderCss}>البيانات التعليمية</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className={labelCss}>المرحلة الدراسية</label>
                <select
                  {...register("educationalStage")}
                  value={watch("educationalStage")}
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
                  {...register("classRoom")}
                  value={watch("classRoom")}
                  className="w-full p-3 border border-gray-200 rounded-xl outline-none bg-white"
                >
                  {/* {classRoom[watchedStage as ClassRoomDashboardTeacher]?.map( */}
                  {(classRoom[watchedStage] || [])?.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                {errors.classRoom && (
                  <span className="text-red-500 text-xs pr-1">
                    {errors.classRoom.message}
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <label className={labelCss}>المادة العلمية</label>
                <select
                  {...register("studyMaterial")}
                  value={watch("studyMaterial")}
                  className="w-full p-3 border border-gray-200 rounded-xl outline-none bg-white"
                >
                  {(studyMaterial[watchedStage] || [])?.map((item) => (
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
              className="bg-[#003F87] text-white px-12 py-3 rounded-lg font-bold hover:bg-[#002d61] transition-all shadow-lg active:scale-95 cursor-pointer"
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
