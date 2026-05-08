"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Settings,
  Users,
  GraduationCap,
  FileText,
} from "lucide-react";
import avatarImage from "../../../../assets/ceterProfile/teacherTap1.jpeg";
import Image from "next/image";

const DashboardSidebar = () => {
  const pathname = usePathname();

  const isCenter = pathname.startsWith("/dashboard/center");

  const centerMenuItems = [
    { name: "المدرسين", icon: Users, href: "/dashboard/center" },
    { name: "الطلاب", icon: GraduationCap, href: "/dashboard/center/students" },
    { name: "المنشورات", icon: FileText, href: "/dashboard/center/posts" },
    { name: "الإعدادات", icon: Settings, href: "/dashboard/center/settings" },
  ];

  const studentMenuItems = [
    {
      name: "الحصص والدروس",
      icon: LayoutDashboard,
      href: "/dashboard/student",
    },
    {
      name: "تعديل الملف الشخصي",
      icon: Settings,
      href: "/dashboard/student/editProfile",
    },
  ];

  const menuItems = isCenter ? centerMenuItems : studentMenuItems;

  return (
    <div
      className="bg-white h-screen p-3 md:p-8 border border-slate-100 shadow-sm sticky top-1"
      dir="rtl"
    >
      <div className="flex flex-col lg:flex-row items-center gap-3 text-center mb-10">
        <div className="relative w-12 md:w-24 h-12 md:h-24 rounded-full overflow-hidden shrink-0">
          {isCenter ? (
            <div className="w-full h-full bg-[#D12026] flex items-center justify-center">
              <span className="text-white font-black text-[10px] text-center leading-tight">
                سنتر
                <br />
                المتخصص
              </span>
            </div>
          ) : (
            <Image
              src={avatarImage}
              alt={"username"}
              fill
              className="object-contain"
              unoptimized
            />
          )}
        </div>
        <div className="flex flex-col items-start w-20 md:w-full">
          <h2 className="text-sm md:text-xl font-medium text-black">
            {isCenter ? "سنتر المتخصص" : "محمد أحمد حسن"}
          </h2>
          <p className="text-[#DD5A00] font-semibold text-xs md:text-sm mt-1">
            {isCenter ? "فرع الهرم" : "الصف الثالث الثانوي"}
          </p>
        </div>
      </div>

      <nav className="space-y-3">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`w-full flex items-center justify-between py-3 px-2 rounded-md font-normal text-[16px] transition-all ${
                isActive
                  ? "bg-[#0D2D2A] text-white border-r-4 border-[#F59E0B]"
                  : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon
                  size={22}
                  className={isActive ? "text-white" : "text-slate-400"}
                />
                <span className="hidden md:flex">{item.name}</span>
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default DashboardSidebar;
