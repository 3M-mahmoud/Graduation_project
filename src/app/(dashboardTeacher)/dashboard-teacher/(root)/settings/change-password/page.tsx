"use client";
import { forgetPassword } from "@/app/components/dashboardTeacher/constant/constant";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

type PasswordFields = "OldPassword" | "newPassword" | "confirmPassword";

const ChangePasswordPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<
    Record<PasswordFields, boolean>
  >({
    OldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const [form, setForm] = useState({
    OldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleShowPasswordFun = (field: PasswordFields) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((pre) => ({ ...pre, [e.target.name]: e.target.value }));

  const handleLoginFun = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !form.OldPassword.trim() ||
      !form.newPassword.trim() ||
      !form.confirmPassword.trim()
    ) {
      return console.log("1111111111");
    }
    if (form.newPassword !== form.confirmPassword) {
      return console.log("0000000000000");
    }
  };
  return (
    <div className="bg-white max-w-[600px] min-h-[400px] rounded-lg p-5 max-lg:mx-auto sm:p-6 space-y-6">
      <div className="w-fit font-bold pr-2 border-r-4 border-[#003F87] text-[#003F87]">
        الامان وكلمة المرور
      </div>
      <form
        onSubmit={handleLoginFun}
        className="space-y-7 text-black font-bold"
      >
        {forgetPassword.map((i) => (
          <div key={i.name} className="focus:border-[#877EFF] w-full space-y-3">
            <label htmlFor="password" className="block">
              تأكيد كلمة المرور
            </label>
            <div className="flex items-center justify-center gap-2 border border-[#9CA3AF] p-2 rounded-lg">
              <span
                onClick={() => handleShowPasswordFun(i.name as PasswordFields)}
                className=" text-[#003F87] cursor-pointer"
              >
                {showPassword[i.name as PasswordFields] ? (
                  <Eye size={25} />
                ) : (
                  <EyeOff size={25} />
                )}
              </span>
              <input
                name={i.name}
                type={
                  showPassword[i.name as PasswordFields] ? "text" : "password"
                }
                value={form[i.name as PasswordFields]}
                onChange={handleChange}
                className="w-full outline-none px-2 font-bold"
                placeholder="**********************"
              />
            </div>
          </div>
        ))}

        <button className="bg-[#0a4a91] hover:bg-blue-900 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-md cursor-pointer">
          تحديث كلمة المرور
        </button>
      </form>
    </div>
  );
};

export default ChangePasswordPage;
