"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { DOMAIN } from "@/utils/constants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { changePasswordSchema } from "@/lib/schema/schema";

type PasswordFields = "oldPassword" | "newPassword" | "confirmPassword";
export const forgetPassword = [
  { name: "oldPassword", title: "كلمة المرور الحالية" },
  { name: "newPassword", title: "كلمة المرور الجديدة" },
  { name: "confirmPassword", title: "تأكيد كلمة المرور" },
];

type FormData = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const ChangePasswordPage = () => {
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState<
    Record<PasswordFields, boolean>
  >({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const handleShowPasswordFun = (field: PasswordFields) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const res = await axios.patch(
        `${DOMAIN}auth/change-password`,
        {
          oldPassword: data.oldPassword,
          newPassword: data.newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );

      toast.success(res.data.message || "تم تحديث كلمة المرور");
    } catch (err: any) {
      toast.error(err.response?.data?.message || "حدث خطأ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white max-w-[600px] min-h-[400px] rounded-lg p-5 max-lg:mx-auto sm:p-6 space-y-6">
      <div className="w-fit font-bold pr-2 border-r-4 border-[#003F87] text-[#003F87]">
        الامان وكلمة المرور
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-7 text-black">
        {forgetPassword.map((i) => {
          const field = i.name as PasswordFields;

          return (
            <div key={i.name} className="w-full space-y-3">
              <label className="block">{i.title}</label>

              <div className="flex items-center gap-2 border border-[#9CA3AF] p-2 rounded-lg">
                <span
                  onClick={() => handleShowPasswordFun(field)}
                  className="text-[#003F87] cursor-pointer"
                >
                  {showPassword[field] ? (
                    <Eye size={22} />
                  ) : (
                    <EyeOff size={22} />
                  )}
                </span>

                <input
                  {...register(field)}
                  type={showPassword[field] ? "text" : "password"}
                  className="w-full outline-none px-2"
                />
              </div>

              {errors[field] && (
                <p className="text-red-500 text-sm">{errors[field]?.message}</p>
              )}
            </div>
          );
        })}

        <button
          type="submit"
          disabled={loading}
          className="bg-[#0a4a91] hover:bg-blue-900 text-white px-8 py-3 rounded-xl font-bold cursor-pointer"
        >
          {loading ? "جاري التحديث..." : "تحديث كلمة المرور"}
        </button>
      </form>
    </div>
  );
};

export default ChangePasswordPage;
