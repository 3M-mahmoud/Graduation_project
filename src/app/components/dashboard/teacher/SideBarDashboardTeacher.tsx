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
