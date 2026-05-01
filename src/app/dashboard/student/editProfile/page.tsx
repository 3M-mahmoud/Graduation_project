"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";
import Image from "next/image";
import { DOMAIN } from "@/utils/constants";
import { profileSchema, ProfileFormValues } from "@/lib/ProfileSchema";
import avatarImage from "../../../../assets/ceterProfile/teacherTap1.jpeg";
import Cookies from "js-cookie";
import { UserData } from "@/types/dashboard";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const API_URL = `${DOMAIN}/auth/me`;

const EditProfilePage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [userDashboard, setUserDashboard] = useState<UserData | null>(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = Cookies.get("token");
        const response = await axios.get(API_URL, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.data.status === "success") {
          const user = response.data.data;
          setUserDashboard(user);
          const nameParts = user.name.split(" ");

          reset({
            firstName: nameParts[0] || "",
            lastName: nameParts.slice(1).join(" ") || "",
            email: user.email || "",
            phoneNumber: user.phone || "",
            educationalStage: user.student?.educationalStage || "",
            academicYear: user.student?.classRoom || "",
          });
        }
      } catch (error) {
        toast.error("فشل في جلب بيانات المستخدم");
      }
    };

    fetchUserData();
  }, [reset]);

  const onSubmit = async (data: ProfileFormValues) => {
    setLoading(true);
    try {
      const userId = localStorage.getItem("userId");
      const token = Cookies.get("token");
      const role = Cookies.get("role");

      await axios.patch(
        `${DOMAIN}/users/${userId}`,
        {
          role,
          userData: {
            name: data.firstName + data.lastName,
            phone: data.phoneNumber,
          },
          profileData: {
            // بيانات البروفايل الأساسية
          },
          extraProfileData: {
            // teacher/center فقط
          },
          student: {
            id: userDashboard?.student?.id,
            educationalStage: data?.educationalStage,
            classRoom: data?.academicYear,
          },
        },
        {
          headers: {Authorization: `Bearer ${token}`}
        },
      );

      toast.success("تم حفظ التعديلات بنجاح");
      router.push("/dashboard/student");
    } catch (error) {
      console.log(error);
      toast.error("حدث خطأ أثناء الحفظ");
    } finally {
      setLoading(false);
    }
  };

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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
          {/* الصورة الشخصية */}
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
          {/* قسم المعلومات الشخصية */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-black border-r-4 border-[#062D27] pr-3">
              المعلومات الشخصية
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-medium text-black pr-2 text-[16px]">
                  الاسم الأول
                </label>
                <input
                  {...register("firstName")}
                  placeholder="جاري التحميل..."
                  className="p-4 border border-[#9CA3AF] rounded-2xl text-right text-[#9CA3AF] text-[16px] focus:ring-2 focus:ring-slate-200 outline-none transition-all font-bold"
                />
                {errors.firstName && (
                  <span className="text-red-500 text-xs pr-2">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium text-black pr-2 text-[16px]">
                  اسم العائلة
                </label>
                <input
                  {...register("lastName")}
                  placeholder="جاري التحميل..."
                  className="p-4 border border-[#9CA3AF] rounded-2xl text-right text-[#9CA3AF] text-[16px] focus:ring-2 focus:ring-slate-200 outline-none transition-all font-bold"
                />
              </div>
            </div>
          </div>

          {/* البيانات التعليمية */}
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
                  {...register("educationalStage")}
                  placeholder="مثال: الثانوي"
                  className="p-4 border border-[#9CA3AF] rounded-2xl text-right text-[#9CA3AF] text-[16px] focus:ring-2 focus:ring-slate-200 outline-none transition-all font-bold"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium text-black pr-2 text-[16px]">
                  الصف الدراسي
                </label>
                <input
                  {...register("academicYear")}
                  placeholder="مثال: الثالث الثانوي"
                  className="p-4 border border-[#9CA3AF] rounded-2xl text-right text-[#9CA3AF] text-[16px] focus:ring-2 focus:ring-slate-200 outline-none transition-all font-bold"
                />
              </div>
            </div>
          </div>

          {/* بيانات التواصل */}
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
                  {...register("phoneNumber")}
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
                  {...register("email")}
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
              disabled={isSubmitting}
              className="px-16 py-4 bg-[#F59E0B] text-white font-black rounded-2xl hover:bg-[#db8c05] shadow-lg transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? <Loader2 className="animate-spin" size={24} /> : "حفظ التغييرات"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfilePage;
