"use client";
import Link from "next/link";

const HeroSectionDashboardTeacherCursers = ({
  classRoom,
  filter,
  setFilterFun,
}: {
  classRoom: string[];
  filter: string;
  setFilterFun: (e: string) => void;
}) => (
  <div className="bg-white flex flex-wrap items-center justify-center lg:justify-between">
    <div className="group flex flex-wrap items-center max-lg:justify-center gap-2 p-2 max-lg:w-full">
      {classRoom.map((item, i) => (
        <div
          key={i}
          className={`${filter === item ? "bg-[#064E3B] text-white" : "bg-[#EFEFEF] hover:bg-[#064E3B] hover:text-white"} flex items-center justify-center lg:w-46 h-10 md:w-2/5 w-[90%] rounded-3xl cursor-pointer`}
          onClick={() => setFilterFun(item)}
        >
          {item}
        </div>
      ))}
    </div>

    <Link
      href="/dashboard/teacher/create"
      className="lg:w-46 md:mx-auto xl:m-0 mt-5 w-[90%] bg-orange-500 text-white text-xl text-center px-4 py-2 rounded-2xl cursor-pointer block"
    >
      + إضافة دورة
    </Link>
  </div>
);

export default HeroSectionDashboardTeacherCursers;
