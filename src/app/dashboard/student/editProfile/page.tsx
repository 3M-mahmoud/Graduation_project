"use client";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import avatarImage from "../../../../assets/ceterProfile/teacherTap1.jpeg";
import { useForm } from "react-hook-form";
import { ProfileFormValues } from "@/lib/ProfileSchema";

const EditProfilePage = () => {
  const { register, handleSubmit, formState } = useForm<ProfileFormValues>();
  const { isSubmitting } = formState;
  return (
    <div>
      <div className="text-right mb-6 font-normal text-black">
        <h1 className="text-3xl mb-1">تعديل الملف الشخصي</h1>
        <p className="text-xl">قم بتحديث بياناتك الشخصية</p>
      </div>
      <div
        className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-sm"
        dir="rtl"
      >
        <form className="space-y-10">
          <div className="flex flex-col md:flex-row gap-4 items-center relative">
            <div className="relative w-28 h-28 rounded-full overflow-hidden">
              <Image
                src={avatarImage}
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4 text-right">
              <h3 className="font-bold text-[20px] text-[#204658]">
                محمد أحمد حسن
              </h3>
              <p className="text-[#A9363D] text-[16px] font-normal">
                الصف الثالث الثانوي
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-black border-r-4 border-[#062D27] pr-3">
              المعلومات الشخصية
            </h2>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-medium text-black pr-2 text-[16px]">
                  الاسم
                </label>
                <input
                  placeholder="الاسم"
                  className="p-4 border border-[#9CA3AF] rounded-2xl text-right text-[#9CA3AF] text-[16px] focus:ring-2 focus:ring-slate-200 outline-none transition-all font-bold"
                />
              </div>
              {/* <div className="flex flex-col gap-2">
                <label className="font-medium text-black pr-2 text-[16px]">
                  اسم العائلة
                </label>
                <input
                  {...register("lastName")}
                  placeholder="جاري التحميل..."
                  className="p-4 border border-[#9CA3AF] rounded-2xl text-right text-[#9CA3AF] text-[16px] focus:ring-2 focus:ring-slate-200 outline-none transition-all font-bold"
                />
              </div> */}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-black text-slate-800 border-r-4 border-[#062D27] pr-3">
              البيانات التعليمية
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-medium text-black pr-2 text-[16px]">
                  المرحلة الدراسية
                </label>
                <input
                  placeholder="مثال: الثانوي"
                  className="p-4 border border-[#9CA3AF] rounded-2xl text-right text-[#9CA3AF] text-[16px] focus:ring-2 focus:ring-slate-200 outline-none transition-all font-bold"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium text-black pr-2 text-[16px]">
                  الصف الدراسي
                </label>
                <input
                  placeholder="مثال: الثالث الثانوي"
                  className="p-4 border border-[#9CA3AF] rounded-2xl text-right text-[#9CA3AF] text-[16px] focus:ring-2 focus:ring-slate-200 outline-none transition-all font-bold"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-black text-slate-800 border-r-4 border-[#062D27] pr-3">
              بيانات التواصل
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-medium text-black pr-2 text-[16px]">
                  رقم الهاتف
                </label>
                <input
                  dir="ltr"
                  placeholder="+20*** **** ***"
                  className="p-4 border border-[#9CA3AF] rounded-2xl text-right text-[#9CA3AF] text-[16px] focus:ring-2 focus:ring-slate-200 outline-none transition-all font-bold"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium text-black pr-2 text-[16px]">
                  البريد الإلكتروني
                </label>
                <input
                  dir="ltr"
                  placeholder="example@gmail.com"
                  className="p-4 border border-[#9CA3AF] rounded-2xl text-right text-[#9CA3AF] text-[16px] focus:ring-2 focus:ring-slate-200 outline-none transition-all font-bold"
                  readOnly
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-start pt-6">
            <button
              type="submit"
              className="px-16 py-4 bg-[#F59E0B] text-white font-black rounded-2xl hover:bg-[#db8c05] shadow-lg transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin" size={24} />
              ) : (
                "حفظ التغييرات"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfilePage;
