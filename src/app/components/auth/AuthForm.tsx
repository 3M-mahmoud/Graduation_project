"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { User, Mail, Lock, Loader2 } from "lucide-react";
import { DOMAIN } from "@/utils/constants";
import { authSchema, AuthFormData } from "@/lib/validation";
import { AuthInput } from "./AuthInput";
import { AuthResponse } from "@/types/auth";
import { useRouter } from "next/navigation";

interface AuthFormProps {
  mode: "login" | "signup";
}

export default function AuthForm({ mode }: AuthFormProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormData>({
    resolver: zodResolver(authSchema(mode)),
    defaultValues: { role: "student" },
  });

  const onSubmit = async (values: AuthFormData) => {
    setLoading(true);
    const { terms, ...apiPayload } = values;
    const endpoint = mode === "signup" ? "/auth/signup" : "/auth/login";

    try {
      const { data } = await axios.post<AuthResponse>(
        `${DOMAIN}${endpoint}`,
        apiPayload
      );


      localStorage.setItem("token", data.token);
      const userData = data.data.user.newUser || data.data.user.user;
      localStorage.setItem("userRole", userData?.role || "");
      localStorage.setItem(
        "profileId",
        data.data.user.userTeacherOrCenterOrStudent.id
      );

      toast.success(data.message || "تمت العملية بنجاح");
      window.dispatchEvent(new Event("storage"));
    
      setTimeout(() => {
        router.push("/");
      }, 500);
    } catch (error: any) {
      const apiErrors = error.response?.data?.errors;
      if (Array.isArray(apiErrors)) {
        apiErrors.forEach((err: any) => toast.error(err.message));
      } else {
        toast.error(error.response?.data?.message || "فشل الاتصال بالسيرفر");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl animate-in fade-in zoom-in duration-500">
      <Toaster position="top-center" />

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[#003F87] mb-3">
          {mode === "signup" ? "إنشاء حساب جديد" : "تسجيل الدخول"}
        </h1>
        <p className="text-[#424752] font-normal text-lg">
          {mode === "signup"
            ? "انضم إلى مجتمعنا التعليمي وابدأ رحلة نجاحك اليوم"
            : "سجل دخولك للوصول إلى حسابك"}
        </p>
      </div>

    
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-8 md:p-12">
    
          <div className="mb-8 border-r-4 border-[#003F87] pr-4">
            <h2 className="text-xl font-bold text-[#191C1D]">
              {mode === "signup" ? "أدخل بيانات الحساب" : "مرحبا بعودتك"}
            </h2>
            <p className="text-[#424752] font-normal text-sm">
              يرجى ملء كافة الخانات التالية بدقة
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {mode === "signup" && (
              <>
                <AuthInput
                  label="الاسم بالكامل"
                  icon={<User size={20} />}
                  type="text"
                  placeholder="أدخل اسمك الثلاثي"
                  register={register("name")}
                  error={errors.name?.message}
                />

                <div>
                  <label className="block text-sm font-bold text-[#424752] mb-2">
                    نوع الحساب
                  </label>
                  <select
                    {...register("role")}
                    className="w-full px-4 py-3.5 bg-[#E1E3E4] rounded-md focus:outline-none font-normal text-sm text-[#424752] appearance-none cursor-pointer"
                  >
                    <option value="student">طالب</option>
                    <option value="teacher">مدرس</option>
                    <option value="center">سنتر</option>
                  </select>
                </div>
              </>
            )}

            <AuthInput
              label="البريد الإلكتروني"
              icon={<Mail size={20} />}
              type="email"
              placeholder="example@center.com"
              register={register("email")}
              error={errors.email?.message}
            />

            <AuthInput
              label="كلمة المرور"
              icon={<Lock size={20} />}
              type="password"
              placeholder="**********"
              register={register("password")}
              error={errors.password?.message}
            />
            {mode === "signup" && (
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3 mb-4">
                  <input
                    type="checkbox"
                    id="terms"
                    {...register("terms")}
                    className="w-5 h-5 rounded border-slate-300 text-[#003F87] focus:ring-[#003F87] cursor-pointer transition-all"
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium text-[#424752] cursor-pointer select-none"
                  >
                    أوافق علي
                    <span className="text-[#003F87] font-bold mx-1 hover:underline">
                      شروط الخدمة
                    </span>
                    و
                    <span className="text-[#003F87] font-bold mx-1 hover:underline">
                      سياسة الخصوصية
                    </span>
                    الخاصة بسنتر مصر.
                  </label>
                </div>
                
                {errors.terms && (
                  <p className="text-red-500 text-xs text-right font-bold -mt-3 mb-4">
                    {errors.terms.message as string}
                  </p>
                )}
              </div>
            )}
            {mode === "login" && (
              <div className="flex justify-end mt-4 mb-2">
                <button
                  type="button"
                  onClick={() => router.push("/forgot-password")}
                  className="text-sm font-semibold text-[#003F87] hover:underline transition-colors cursor-pointer"
                >
                  نسيت كلمة المرور؟
                </button>
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#003F87] hover:bg-[#003366] shadow-lg text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-900/10 transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-70 mt-6 cursor-pointer"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={24} />
              ) : mode === "signup" ? (
                "إنشاء حساب"
              ) : (
                "تسجيل الدخول"
              )}
            </button>
          </form>

         
          <div className="mt-6 py-6 bg-[#F3F4F5] text-center ">
            <p className="text-[#424752] text-sm font-normal">
              {mode === "signup" ? "لديك حساب بالفعل؟" : "ليس لديك حساب؟"}
              <button
                onClick={() =>
                  router.push(mode === "signup" ? "/login" : "/signup")
                }
                className="text-[#004C99] font-black mr-2 hover:underline cursor-pointer"
              >
                {mode === "signup" ? "تسجيل الدخول" : "إنشاء حساب جديد"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
