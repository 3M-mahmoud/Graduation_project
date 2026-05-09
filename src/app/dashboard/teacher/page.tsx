"use client";

import HeroSectionDashboardTeacherCursers from "@/app/components/dashboard/teacher/HeroSectionDashboardTeacherCursers";
import { formatDate } from "@/app/components/helper";
import { useDashboardTeacherContext } from "@/context/DashboardTeacher";
import { useSocket } from "@/context/WsSocket";
import { DOMAIN } from "@/utils/constants";
import axios from "axios";
import { Trash, Pencil } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type Course = {
  id: number;
  title: string;
  grade: string;
  students: number;
  price: number;
  rating: number;
  reviews: number;
};

const minWidthHeaders = "min-w-[100px] text-center";
const LIMIT_PER_PAGE = 5;
const classRooms = [
  // "الكل",
  "الثالث الثانوي",
  "الثاني الثانوي",
  "الاول الثانوي",
];

const CoursesPage = () => {
  const [filter, setFilter] = useState<string>("الثالث الثانوي");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [coursesData, setCoursesData] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);

  const handleGetTeachers = async () => {
    const token = localStorage.getItem("token");
    const { data } = await axios.get(
      `${DOMAIN}teacher-dashboard/courses?classRoom=الصف ${filter}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    setCoursesData(data.data.courses);
  };

  useEffect(() => {
    handleGetTeachers();
  }, [filter]);

  // const filteredCourses = useMemo(() => {
  //   if (filter === "الكل") return coursesData;

  //   return coursesData.filter((c) =>
  //     c.grade.toLowerCase().includes(filter.toLowerCase()),
  //   );
  // }, [filter]);

  const totalPages = Math.ceil(coursesData.length / LIMIT_PER_PAGE);

  return (
    <main className="w-full max-w-7xl mx-auto">
      <div className="py-4 pl-4 lg:sticky top-0 z-20 bg-white text-black">
        <HeroSectionDashboardTeacherCursers
          classRoom={classRooms}
          filter={filter}
          setFilterFun={setFilter}
        />
      </div>

      <div className="mt-6 rounded-xl0 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto max-h-[500px] overflow-y-auto text-black">
          <table className="text-sm w-full text-right">
            <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 text-sm font-medium">
              <tr>
                <th className="min-w-80 p-5">الدورة</th>
                <th className={minWidthHeaders}>الصف</th>
                <th className={minWidthHeaders}>الطلاب</th>
                <th className={minWidthHeaders}>الحصص</th>
                <th className="min-w-52 text-center">إجراءات</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-50">
              {coursesData.map((course) => (
                <tr
                  key={course.id}
                  className="hover:bg-gray-50 transition-colors group"
                >
                  <td className="p-3 flex flex-col gap-1">
                    <span className="font-semibold">{course.title}</span>
                    <span className="text-gray-400 text-xs font-medium">
                      {formatDate(course.time)}
                    </span>
                  </td>

                  <td className="text-center font-semibold">
                    {course.classRoom}
                  </td>

                  <td className="text-center font-bold">
                    {course.studentCounts}
                  </td>

                  <td className="text-center text-black font-bold">
                    {course.studentCounts}
                  </td>

                  <td className="flex gap-2 p-3 justify-center">
                    <Link
                      href={`/dashboard/teacher/edit/${course.id}`}
                      className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200"
                    >
                      <Pencil size={16} />
                    </Link>

                    <button className="bg-red-50 text-red-600 p-2 rounded-lg hover:bg-red-100">
                      <Trash size={16} />
                    </button>
                  </td>
                </tr>
              ))}

              {coursesData.length === 0 && (
                <tr>
                  <td colSpan={7} className="text-center py-10 text-gray-400">
                    لا توجد بيانات
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-center p-4 border-t text-black">
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage((p) => p - 1)}
              disabled={currentPage === 1}
              className={`${currentPage === 1 ? "disabled:cursor-not-allowed" : ""} px-3 py-1 rounded-md bg-gray-100 disabled:opacity-50 cursor-pointer`}
            >
              {"<"}
            </button>

            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded-md ${
                  currentPage === i + 1 ? "bg-green-600" : "bg-gray-100"
                } cursor-pointer`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => p + 1)}
              disabled={currentPage === totalPages}
              className={`${currentPage === totalPages ? "disabled:cursor-not-allowed" : ""} px-3 py-1 rounded-md bg-gray-100 disabled:opacity-50 cursor-pointer`}
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CoursesPage;
