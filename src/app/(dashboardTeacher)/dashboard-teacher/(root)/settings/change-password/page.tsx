"use client";
import { forgetPassword } from "@/app/components/dashboardTeacher/constant/constant";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
// import { useRouter } from "next/navigation";

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
  // const [showPassword, setShowPassword] = useState({
  //   OldPassword: false,
  //   newPassword: false,
  //   confirmPassword: false,
  // });
  //  const router = useRouter();

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
    //  handleLogin(form, router, setUserId, setLoading, setUserEmail);
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
        {/* <BtnCAEd loading={loading} title="Sign Up" NoCancel /> */}
      </form>
    </div>
  );
};

export default ChangePasswordPage;

// import React from "react";

// const SecuritySection = () => {
//   return (
//     <div className="max-w-3xl mx-auto mt-8" dir="rtl">
//       <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
//         {/* العنوان الجانبي مع الخط الأزرق */}
//         <div className="flex items-center gap-3 mb-8">
//           <h3 className="text-blue-900 font-bold text-xl pr-3 border-r-4 border-blue-900">
//             الامان وكلمة المرور
//           </h3>
//         </div>

//         {/* نموذج إدخال البيانات */}
//         <div className="space-y-6">
//           {/* كلمة المرور الحالية */}
//           <div className="flex flex-col gap-2">
//             <label className="text-gray-600 text-sm font-medium mr-1">
//               كلمة المرور الحالية
//             </label>
//             <input
//               type="password"
//               placeholder="******************"
//               className="w-full p-4 border border-gray-200 rounded-xl bg-white text-left placeholder:text-right outline-none focus:border-blue-500 transition-all"
//             />
//           </div>

//           {/* كلمة المرور الجديدة */}
//           <div className="flex flex-col gap-2">
//             <label className="text-gray-600 text-sm font-medium mr-1">
//               كلمة المرور الجديدة
//             </label>
//             <input
//               type="password"
//               placeholder="******************"
//               className="w-full p-4 border border-gray-200 rounded-xl bg-white text-left placeholder:text-right outline-none focus:border-blue-500 transition-all"
//             />
//           </div>

//           {/* تأكيد كلمة المرور */}
//           <div className="flex flex-col gap-2">
//             <label className="text-gray-600 text-sm font-medium mr-1">
//               تأكيد كلمة المرور
//             </label>
//             <input
//               type="password"
//               placeholder="******************"
//               className="w-full p-4 border border-gray-200 rounded-xl bg-white text-left placeholder:text-right outline-none focus:border-blue-500 transition-all"
//             />
//           </div>

//           {/* زر التحديث */}
//           <div className="flex justify-end pt-4">
//             <button className="bg-[#0a4a91] hover:bg-blue-900 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-md">
//               تحديث كلمة المرور
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SecuritySection;
