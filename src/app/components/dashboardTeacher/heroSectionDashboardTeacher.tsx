"use client";
import { usePathname } from "next/navigation";
import { heroSectioDashboardTeacher } from "./constant/constant";
import { PanelRightOpen } from "lucide-react";

const HeroSectionDashboardTeacher = ({
  setOpenSidebar,
}: {
  setOpenSidebar: (open: boolean) => void;
}) => {
  const pathname = usePathname().slice(1);
  const data = heroSectioDashboardTeacher[pathname];
  console.log(pathname);

  return (
    <div className="pb-5 mb-5">
      <button
        onClick={() => setOpenSidebar(true)}
        className="rounded-lg shadow-md lg:hidden cursor-pointer"
      >
        <PanelRightOpen size={35} color="black" />
      </button>
      <div className="text-[#134E4A] font-bold text-2xl pb-2">
        {data?.nameBio}
      </div>
      <p className="text-[#6B7280] font-medium">{data?.bio}</p>
    </div>
  );
};

export default HeroSectionDashboardTeacher;
