"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ProfileDashboardTeacher from "./profileDashboard";
import { settingSideBar, sidebarDaashboardTeacher } from "./constant/constant";
import { useState } from "react";

const hoverAndActiveColor =
  "text-white border-r-4 border-[#F59E0B] bg-[#0D2D2A]";

const baseItem = "flex items-center gap-2 py-2 px-3 rounded-lg transition-all";

const SideBarDashboardTeacher = ({
  openSidebar,
  setOpenSidebar,
}: {
  openSidebar: boolean;
  setOpenSidebar: (open: boolean) => void;
}) => {
  const pathname = usePathname();

  const isSettingRoute = settingSideBar.include.includes(pathname);

  const [manualOpenSetting, setManualOpenSetting] = useState(false);

  const openSetting = isSettingRoute || manualOpenSetting;

  return (
    <>
      {openSidebar && (
        <div
          className="fixed top-0 right-0 h-screen inset-0 bg-black/40 z-50 lg:hidden"
          onClick={() => {
            setOpenSidebar(false);
            setManualOpenSetting(false);
          }}
        />
      )}

      <aside
        dir="rtl"
        className={`
          lg:sticky fixed top-0 right-0 z-50 h-screen w-65 bg-white shadow-lg
          transform transition-transform duration-300
          ${openSidebar ? "translate-x-0" : "translate-x-full"}

          lg:translate-x-0 lg:static lg:block
          `}
      >
        <div className="relative pt-6 flex items-center gap-6">
          <ProfileDashboardTeacher />
        </div>

        <ul className="mt-6 flex flex-col gap-1 px-2">
          {sidebarDaashboardTeacher.map((item) => (
            <li
              key={item.name}
              className={`
                  list-none rounded-lg cursor-pointer
                  ${
                    pathname === item.path
                      ? hoverAndActiveColor
                      : "text-black hover:bg-[#0D2D2A] hover:text-white hover:border-r-4 hover:border-[#F59E0B]"
                  }
                  `}
              onClick={() => {
                setOpenSidebar(false);
                setManualOpenSetting(false);
              }}
            >
              <Link
                href={item.path}
                className="flex py-2 px-3 items-center gap-2"
              >
                <span className="group-hover:text-white">{item.icon}</span>
                <span className="text-lg font-bold">{item.name}</span>
              </Link>
            </li>
          ))}
          <ul
            className={`
              list-none rounded-lg cursor-pointer
              ${
                openSetting || settingSideBar.include.includes(pathname)
                  ? "text-white bg-[#0D2D2A]"
                  : "text-black hover:bg-[#0D2D2A] hover:text-white"
              }`}
          >
            <li
              className="flex justify-between items-center py-2 px-3"
              onClick={() => setManualOpenSetting((prev) => !prev)}
            >
              <div className="flex items-center gap-2">
                <span className="group-hover:text-white">
                  {settingSideBar.icon}
                </span>
                <span className="text-lg font-bold">{settingSideBar.name}</span>
              </div>
              <span
                className={`transition-transform ${
                  openSetting ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </li>
          </ul>

          <ul className="rounded-xl overflow-hidden space-y-2 bg-[#0a2e2a]">
            {openSetting
              ? settingSideBar.list.map((settingItem) => {
                  const active = pathname === settingItem.path;
                  return (
                    <li key={settingItem.path}>
                      <Link
                        href={settingItem.path}
                        onClick={() => setOpenSidebar(false)}
                        className={`${baseItem} text-sm ${
                          active
                            ? "text-green-600 border-r-4 border-[#F59E0B]"
                            : "text-white"
                        } w-full flex items-center gap-3 p-3 hover:bg-[#0a2e2a] transition-colors bg-[#0a2e2a] `}
                      >
                        {settingItem.icon}
                        <span>{settingItem.name}</span>
                      </Link>
                    </li>
                  );
                })
              : null}
          </ul>
        </ul>
      </aside>
    </>
  );
};

export default SideBarDashboardTeacher;

// "use client";
// import React, { useState } from "react";
// import {
//   BookOpen,
//   Users,
//   MessageSquare,
//   Settings,
//   UserCircle,
//   Key,
//   ChevronUp,
//   ChevronDown,
//   Menu,
//   X,
// } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Sidebar() {
//   const [isOpen, setIsOpen] = useState(true); // حالة إظهار/إخفاء السايدبار بالكامل
//   const [isSettingsOpen, setIsSettingsOpen] = useState(true); // حالة قائمة الإعدادات

//   return (
//     <div className="flex" dir="rtl">
//       {/* زر التحكم في الإظهار/الإخفاء للجوال أو الشاشات الصغيرة */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="fixed top-4 right-4 z-50 p-2 bg-teal-900 text-white rounded-md lg:hidden"
//       >
//         {isOpen ? <X size={20} /> : <Menu size={20} />}
//       </button>

//       {/* Sidebar Container */}
//       <aside
//         className={`
//         ${isOpen ? "translate-x-0" : "translate-x-full"}
//         fixed lg:relative lg:translate-x-0
//         w-72 h-screen bg-white border-l border-gray-100 flex flex-col p-6 transition-transform duration-300 ease-in-out z-40
//       `}
//       >
//         {/* User Profile Section */}
//         <div className="flex flex-col items-center mb-10">
//           <div className="relative">
//             <Image
//               src="" // ضع مسار صورتك هنا
//               alt="Profile"
//               className="w-20 h-20 rounded-full object-cover border-2 border-gray-100"
//             />
//             <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
//           </div>
//           <div className="text-center mt-4">
//             <h3 className="text-xl font-bold text-gray-700">
//               د. احمد محمد علي
//             </h3>
//             <p className="text-red-500 font-medium">الرياضيات</p>
//             <div className="flex items-center justify-center gap-1 mt-1 text-orange-400">
//               <span className="font-bold">4.9</span>
//               <span className="text-lg">★</span>
//             </div>
//           </div>
//         </div>

//         {/* Navigation Links */}
//         <nav className="flex-1 space-y-2">
//           <NavItem
//             icon={<BookOpen size={24} />}
//             label="الدورات"
//             link="/dashboard-teacher/courses"
//           />
//           <NavItem
//             icon={<Users size={24} />}
//             label="الطلاب"
//             link="/dashboard-teacher/students"
//           />
//           <NavItem
//             icon={<MessageSquare size={24} />}
//             label="المنشورات"
//             link="/dashboard-teacher/posts"
//           />

//           {/* Settings Accordion */}
//           <div className="mt-4">
//             <button
//               onClick={() => setIsSettingsOpen(!isSettingsOpen)}
//               className={`
//                 w-full flex items-center justify-between p-3 rounded-xl transition-all
//                 ${isSettingsOpen ? "bg-[#0a2e2a] text-white" : "text-gray-700 hover:bg-gray-50"}
//               `}
//             >
//               <div className="flex items-center gap-3">
//                 <Settings size={24} />
//                 <span className="font-bold text-lg">الإعدادات</span>
//               </div>
//               {isSettingsOpen ? (
//                 <ChevronUp size={20} />
//               ) : (
//                 <ChevronDown size={20} />
//               )}
//             </button>

//             {/* Sub Menu Items */}
//             {isSettingsOpen && (
//               <div className="mt-2 mr-2 space-y-1 relative">
//                 {/* خط التمييز الأصفر الجانبي */}
//                 <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-orange-400 rounded-l-md"></div>

//                 <div className="bg-[#0a2e2a] rounded-xl overflow-hidden">
//                   <button className="w-full flex items-center gap-3 p-3 text-green-400 bg-[#0c3631]">
//                     <UserCircle size={22} />
//                     <span className="font-medium">البيانات الشخصية</span>
//                   </button>
//                   <button className="w-full flex items-center gap-3 p-3 text-white hover:bg-[#0c3631] transition-colors">
//                     <Key size={22} />
//                     <span className="font-medium text-gray-300">الأمان</span>
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </nav>
//       </aside>

//       {/* Overlay للموبايل عند فتح القائمة */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/20 z-30 lg:hidden"
//           onClick={() => setIsOpen(false)}
//         ></div>
//       )}
//     </div>
//   );
// }

// // مكون فرعي لعناصر القائمة لتقليل تكرار الكود
// function NavItem({
//   icon,
//   label,
//   link,
//   active = false,
// }: {
//   icon: React.ReactNode;
//   label: string;
//   link: string;
//   active?: boolean;
// }) {
//   return (
//     <Link
//       href={link}
//       className={`
//       w-full flex items-center gap-3 p-3 rounded-xl font-bold text-lg transition-all
//       ${active ? "text-teal-900 bg-gray-50" : "text-gray-800 hover:bg-gray-50"}
//     `}
//     >
//       <span className="text-gray-600">{icon}</span>
//       {label}
//     </Link>
//   );
// }
