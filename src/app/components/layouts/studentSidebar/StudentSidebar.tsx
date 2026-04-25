"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Settings } from "lucide-react";
import avatarImage from "../../../../assets/ceterProfile/teacherTap1.jpeg";
import Image from "next/image";

const StudentSidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      name: "الحصص والدروس",
      icon: LayoutDashboard,
      href: "/dashboard/student",
      active: pathname === "/dashboard/student",
    },
    {
      name: "الإعدادات",
      icon: Settings,
      href: "/dashboard/student/settings",
      active: pathname === "/dashboard/student/settings",
    },
  ];

  return (
    <div className="bg-white h-screen p-3 md:p-8 border border-slate-100 shadow-sm sticky top-1">
      {/* بروفايل الطالب */}
      <div className="flex flex-col lg:flex-row items-center gap-3 text-center mb-10">
        <div className="relative w-12 md:w-24 h-12 md:h-24 rounded-full overflow-hidden">
          <Image
            src={avatarImage}
            alt={"username"}
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col items-start w-20 md:w-full">
          <h2 className="text-sm md:text-xl font-medium text-black">محمد أحمد حسن</h2>
          <p className="text-[#DD5A00] font-semibold text-xs md:text-sm mt-1">
            الصف الثالث الثانوي
          </p>
        </div>
      </div>

      {/* الروابط */}
      <nav className="space-y-3">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`w-full flex items-center justify-between py-3 px-2 rounded-md font-normal text-[16px] transition-all ${
              item.active
                ? "bg-[#0D2D2A] text-white border-r-4 border-[#F59E0B]"
                : "text-slate-500 hover:bg-slate-50"
            }`}
          >
            <div className="flex items-center gap-3">
              <item.icon size={22} />
              <span className="hidden md:flex">{item.name}</span>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default StudentSidebar;
