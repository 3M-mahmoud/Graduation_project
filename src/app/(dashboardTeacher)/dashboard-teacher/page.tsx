"use client";

import HeroSectionDashboardTeacherCursers from "@/app/components/dashboardTeacher/HeroSectionDashboardTeacherCursers";
import { Trash, Pencil } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

type Course = {
  id: number;
  title: string;
  grade: string;
  students: number;
  price: number;
  rating: number;
  reviews: number;
};

const coursesData: Course[] = [
  {
    id: 1,
    title: "دورة الجبر الشاملة",
    grade: "الأول الثانوي",
    students: 118,
    price: 1200,
    rating: 4.8,
    reviews: 35,
  },
  {
    id: 2,
    title: "دورة التفاضل والتكامل",
    grade: "الثاني الثانوي",
    students: 142,
    price: 1400,
    rating: 4.9,
    reviews: 56,
  },
  {
    id: 3,
    title: "دورة الجبر الشاملة",
    grade: "الثالث الثانوي",
    students: 118,
    price: 1200,
    rating: 4.8,
    reviews: 35,
  },
  {
    id: 4,
    title: "دورة التفاضل والتكامل",
    grade: "الأول الثانوي",
    students: 142,
    price: 1400,
    rating: 4.9,
    reviews: 56,
  },
  {
    id: 5,
    title: "دورة الجبر الشاملة",
    grade: "الثاني الثانوي",
    students: 118,
    price: 1200,
    rating: 4.8,
    reviews: 35,
  },
  {
    id: 6,
    title: "دورة التفاضل والتكامل",
    grade: "الثالث الثانوي",
    students: 142,
    price: 1400,
    rating: 4.9,
    reviews: 56,
  },
  {
    id: 7,
    title: "دورة الجبر الشاملة",
    grade: "الأول الثانوي",
    students: 118,
    price: 1200,
    rating: 4.8,
    reviews: 35,
  },
  {
    id: 8,
    title: "دورة التفاضل والتكامل",
    grade: "الثاني الثانوي",
    students: 142,
    price: 1400,
    rating: 4.9,
    reviews: 56,
  },
  {
    id: 9,
    title: "دورة الجبر الشاملة",
    grade: "الثالث الثانوي",
    students: 118,
    price: 1200,
    rating: 4.8,
    reviews: 35,
  },
  {
    id: 10,
    title: "دورة التفاضل والتكامل",
    grade: "الأول الثانوي",
    students: 142,
    price: 1400,
    rating: 4.9,
    reviews: 56,
  },
  {
    id: 11,
    title: "دورة الجبر الشاملة",
    grade: "الثالث الثانوي",
    students: 118,
    price: 1200,
    rating: 4.8,
    reviews: 35,
  },
  {
    id: 12,
    title: "دورة التفاضل والتكامل",
    grade: "الثالث الثانوي",
    students: 142,
    price: 1400,
    rating: 4.9,
    reviews: 56,
  },
  {
    id: 13,
    title: "دورة الجبر الشاملة",
    grade: "الأول الثانوي",
    students: 118,
    price: 1200,
    rating: 4.8,
    reviews: 35,
  },
  {
    id: 14,
    title: "دورة التفاضل والتكامل",
    grade: "الثاني الثانوي",
    students: 142,
    price: 1400,
    rating: 4.9,
    reviews: 56,
  },
];

const minWidthHeaders = "min-w-[100px] text-center";
const ITEMS_PER_PAGE = 5;
const classRooms = [
  "الكل",
  "الأول الثانوي",
  "الثاني الثانوي",
  "الثالث الثانوي",
];

const CoursesPage = () => {
  const [filter, setFilter] = useState<string>("الكل");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filteredCourses = useMemo(() => {
    if (filter === "الكل") return coursesData;

    return coursesData.filter((c) =>
      c.grade.toLowerCase().includes(filter.toLowerCase()),
    );
  }, [filter]);

  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);

  return (
    <main className="w-full">
      <div className="py-4 lg:sticky top-0 z-20 bg-white text-black">
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
                <th className={minWidthHeaders}>السعر</th>
                <th className={minWidthHeaders}>التقييم</th>
                <th className={minWidthHeaders}>المشتركين</th>
                <th className="min-w-52 text-center">إجراءات</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-50">
              {filteredCourses.map((course) => (
                <tr
                  key={course.id}
                  className="hover:bg-gray-50 transition-colors group"
                >
                  <td className="p-3 flex flex-col gap-1">
                    <span className="font-semibold">{course.title}</span>
                    <span className="text-gray-400 text-xs font-medium">
                      الثلاثاء . الساعة 8:00 م
                    </span>
                  </td>

                  <td className="text-center font-semibold">{course.grade}</td>

                  <td className="text-center font-bold">{course.students}</td>

                  <td className="text-green-600 text-center font-bold">
                    {course.price}
                    <span className="block text-xs font-bold">جنيه</span>
                  </td>

                  <td className="text-center text-black font-bold">
                    ⭐ {course.rating}
                  </td>

                  <td className="text-center text-black font-bold">
                    {course.reviews}
                  </td>

                  <td className="flex gap-2 p-3 justify-center">
                    <button className="bg-gray-100 px-3 py-1 rounded-lg text-sm hover:bg-gray-200 font-bold">
                      المحتوى
                    </button>

                    <Link
                      href={`/dashboard-teacher/edit/${course.id}`}
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

              {filteredCourses.length === 0 && (
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
