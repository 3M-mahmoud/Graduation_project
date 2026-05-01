"use client";
import { useEffect, useState } from "react";
import {
  Bell,
  MessageSquare,
  ChevronDown,
  User,
  Settings,
  LayoutDashboard,
  LogOut,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import avatarImage from "../../../../assets/ceterProfile/teacherTap1.jpeg";
import { DOMAIN } from "@/utils/constants";
import Cookies from "js-cookie";

interface UserMenuProps {
  userName: string;
  userImage?: string | null;
}

export const UserMenu = ({ userName, userImage }: UserMenuProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();
  const [userRole, setUserRole] = useState<string>("student");
  const handleLogout = async () => {
    try {
      const token = Cookies.get("token");
      await axios.post(
        `${DOMAIN}/auth/logout`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      toast.success("تم تسجيل الخروج بنجاح");
      router.push("/login");
    } catch (error: any) {
      toast.error("حدث خطأ أثناء تسجيل الخروج");
      router.push("/login");
    }
    Cookies.remove("token");
    Cookies.remove("role");
    localStorage.clear();
    window.dispatchEvent(new Event("storage"));
  };
  const getDashboardPath = () => {
    switch (userRole) {
      case "student":
        return "/dashboard/student";
      case "teacher":
        return "/dashboard/teacher";
      case "center":
        return "/dashboard/center";
      default:
        return "/dashboard/student";
    }
  };
  useEffect(() => {
    const role = Cookies.get("role") || "student";
    setUserRole(role);
  }, []);
  return (
    <div className="flex items-center gap-3 md:gap-6">
      <div className="flex items-center gap-2 md:gap-4 border-l border-slate-200 pl-3 md:pl-6">
        <div className="relative p-2.5 bg-orange-50 rounded-full text-orange-500 cursor-pointer hover:bg-orange-100 transition-colors">
          <MessageSquare size={22} />
          <span className="absolute top-1 right-1 w-3 h-3 bg-orange-500 border-2 border-white rounded-full"></span>
        </div>

        <div className="relative p-2.5 bg-slate-100 rounded-full text-slate-600 cursor-pointer hover:bg-slate-200 transition-colors">
          <Bell size={22} />
          <span className="absolute top-1 right-1 w-3 h-3 bg-orange-500 border-2 border-white rounded-full"></span>
        </div>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <div className="flex items-center gap-2 md:gap-3 cursor-pointer group py-2">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-slate-100 shadow-sm">
            <Image
              src={avatarImage}
              alt={userName}
              fill
              className="object-contain"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#64748B] font-bold text-lg hidden md:block">
              {userName}
            </span>
            <ChevronDown
              size={18}
              className={`text-slate-400 transition-transform ${
                showDropdown ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>

        {showDropdown && (
          <div className="absolute md:left-0 top-full">
            <div className="mt-0 md:mt-3 w-72 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden p-3 md:p-6 animate-in fade-in zoom-in duration-200">
              <div className="hidden md:flex flex-col items-center mb-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden mb-3 border-4 border-slate-50">
                  <Image
                    src={avatarImage}
                    alt="user"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-black text-slate-800">
                  {userName}
                </h3>
                <p className="text-red-500 font-bold text-lg mt-1">الرياضيات</p>
              </div>

              <div className="md:space-y-2 md:border-t border-slate-100 md:pt-4">
                <Link
                  href="/profile"
                  className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors group"
                >
                  <span className="text-xl font-bold text-slate-700">
                    عرض الملف الشخصى
                  </span>
                  <User
                    className="text-slate-400 group-hover:text-blue-600"
                    size={24}
                  />
                </Link>

                <Link
                  href="/settings"
                  className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors group"
                >
                  <span className="text-xl font-bold text-slate-700">
                    اعدادات الحساب
                  </span>
                  <Settings
                    className="text-slate-400 group-hover:text-blue-600"
                    size={24}
                  />
                </Link>

                <Link
                  href={getDashboardPath()}
                  className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors group"
                >
                  <span className="text-xl font-bold text-slate-700">
                    لوحة التحكم
                  </span>
                  <LayoutDashboard
                    className="text-slate-400 group-hover:text-blue-600"
                    size={24}
                  />
                </Link>

                <button
                  onClick={handleLogout}
                  className="flex items-center justify-between w-full p-3 hover:bg-red-50 rounded-xl transition-colors group border-t border-slate-50 mt-2 pt-4 cursor-pointer"
                >
                  <span className="text-xl font-black text-red-500">
                    تسجيل الخروج
                  </span>
                  <LogOut className="text-red-500" size={24} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
