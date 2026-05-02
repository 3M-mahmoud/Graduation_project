"use client";
import {
  HeroSectionDashboardTeacher,
  SideBarDashboardTeacher,
} from "@/app/components/dashboard/teacher";
import { useState } from "react";

const LayoutDashboardTeacher = ({
  children,
  model,
}: {
  children: React.ReactNode;
  model: React.ReactNode;
}) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <main dir="ltr" className="mx-auto w-full flex justify-between items-start">
      <div
        dir="rtl"
        className="lg:w-[calc(100%-256px)] w-full bg-[#F5F7FA] lg:py-10 p-5 min-h-screen"
      >
        <HeroSectionDashboardTeacher setOpenSidebar={setOpenSidebar} />
        {children}
      </div>

      {model}
      <SideBarDashboardTeacher
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />
    </main>
  );
};

export default LayoutDashboardTeacher;
