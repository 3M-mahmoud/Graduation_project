"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Search, Users, CheckCircle, UserCheck, UserMinus } from "lucide-react";

const studentsData = [
  {
    id: 1,
    name: "محمد احمد سالم",
    grade: "الثالث الثانوي",
    course: "دورة التفاضل والتكامل",
    date: "20 / 1 / 2026",
    progress: 75,
    status: "نشط",
    progressColor: "bg-orange-500",
  },
  {
    id: 2,
    name: "محمد احمد سالم",
    grade: "الثاني الثانوي",
    course: "دورة الجبر الشاملة",
    date: "5 / 12 / 2025",
    progress: 90,
    status: "نشط",
    progressColor: "bg-green-500",
  },
  {
    id: 3,
    name: "محمد احمد سالم",
    grade: "الثاني الثانوي",
    course: "دورة الهندسة الفراغية",
    date: "7 / 3 / 2026",
    progress: 45,
    status: "نشط",
    progressColor: "bg-red-400",
  },
  {
    id: 4,
    name: "محمد احمد سالم",
    grade: "الثاني الثانوي",
    course: "دورة الاحصاء والاحتمالات",
    date: "12 / 2 / 2026",
    progress: 25,
    status: "غير نشط",
    progressColor: "bg-red-600",
  },
  {
    id: 5,
    name: "محمد احمد سالم",
    grade: "الاول الثانوي",
    course: "دورة التفاضل والتكامل",
    date: "30 / 1 / 2026",
    progress: 60,
    status: "نشط",
    progressColor: "bg-orange-500",
  },
];

const stats = [
  {
    label: "اجمالي الطلاب",
    value: "512",
    icon: <Users className="text-gray-400" />,
    color: "text-gray-700",
  },
  {
    label: "اكملو الدورة",
    value: "64",
    icon: <CheckCircle className="text-yellow-500" />,
    color: "text-gray-700",
  },
  {
    label: "طلاب نشطون",
    value: "432",
    icon: <UserCheck className="text-green-500" />,
    color: "text-gray-700",
  },
  {
    label: "غير نشطين",
    value: "10",
    icon: <UserMinus className="text-red-500" />,
    color: "text-gray-700",
  },
];

const minWidthHeaders = "min-w-36 text-center";

export default function StudentsDashboard() {
  const [filter, setFilter] = useState("");

  const dataStudents = useMemo(() => {
    if (filter === "") return studentsData;

    return studentsData.filter((s) =>
      s.course.toLowerCase().includes(filter.toLowerCase()),
    );
  }, [filter]);

  return (
    <main
      className="min-h-screen bg-[#F4F7F9] px-6 lg:px-10 font-sans"
      dir="rtl"
    >
      <div className="max-w-6xl w-full mx-auto space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center space-y-2 border border-gray-50"
            >
              <div className="p-3 bg-gray-50 rounded-full">{stat.icon}</div>
              <span className="text-3xl font-bold text-[#204658]">
                {stat.value}
              </span>
              <span className="text-gray-400 text-sm font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-white text-black p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              value={filter}
              onChange={(e) =>
                setFilter(
                  e.target.value.trim().length > 1
                    ? e.target.value
                    : e.target.value.trim(),
                )
              }
              placeholder="ابحث باسم الطالب أو الدورة.."
              className="w-full pr-10 pl-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-[#003F87] text-sm"
            />
            <Search className="absolute right-3 top-2.5" size={18} />
          </div>
        </div>

        {dataStudents.length === 0 ? (
          <div className="">0000000000</div>
        ) : (
          <div className="mt-6 rounded-xl0 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto max-h-[500px] overflow-y-auto text-black">
              <table className="text-sm w-full text-right">
                <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 text-sm font-medium">
                  <tr>
                    <th className="min-w-80 p-5">الطالب</th>
                    <th className={minWidthHeaders}>الصف</th>
                    <th className={minWidthHeaders}>الدورة</th>
                    <th className={minWidthHeaders}>تاريخ الانضمام</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {dataStudents.map((student) => (
                    <tr key={student.id} className="hover:bg-gray-50">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="size-8 rounded-full bg-gray-200 overflow-hidden">
                            <Image
                              src="/avatar-placeholder.png"
                              alt=""
                              width={32}
                              height={32}
                            />
                          </div>
                          <span className="font-bold text-[#204658]">
                            {student.name}
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-center text-gray-600">
                        {student.grade}
                      </td>
                      <td className="p-4 text-center text-gray-600 font-medium">
                        {student.course}
                      </td>
                      <td className="p-4 text-center text-gray-400">
                        {student.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
