"use client";
const students = [
  {
    id: 1,
    name: "أحمد محمود علي",
    grade: "الثالث الثانوي",
    course: "دورة الجبر الشاملة",
    date: "2024-12-01",
    time: "10:30 ص",
  },
  {
    id: 2,
    name: "سارة كمال حسن",
    grade: "الثالث الثانوي",
    course: "دورة التفاضل",
    date: "2024-12-01",
    time: "11:15 ص",
  },
  {
    id: 3,
    name: "ياسين مصطفى",
    grade: "الثاني الثانوي",
    course: "دورة الهندسة الفراغية",
    date: "2024-11-30",
    time: "09:45 ص",
  },
  {
    id: 4,
    name: "ليلى عبد العزيز",
    grade: "الثالث الثانوي",
    course: "دورة الاحصاء والاحتمالات",
    date: "2024-11-28",
    time: "01:20 م",
  },
  {
    id: 5,
    name: "ليلى عبد العزيز",
    grade: "الثالث الثانوي",
    course: "دورة الاحصاء والاحتمالات",
    date: "2024-11-28",
    time: "01:20 م",
  },
  {
    id: 6,
    name: "ليلى عبد العزيز",
    grade: "الثالث الثانوي",
    course: "دورة الاحصاء والاحتمالات",
    date: "2024-11-28",
    time: "01:20 م",
  },
  {
    id: 7,
    name: "ليلى عبد العزيز",
    grade: "الثالث الثانوي",
    course: "دورة الاحصاء والاحتمالات",
    date: "2024-11-28",
    time: "01:20 م",
  },
  {
    id: 8,
    name: "ليلى عبد العزيز",
    grade: "الثالث الثانوي",
    course: "دورة الاحصاء والاحتمالات",
    date: "2024-11-28",
    time: "01:20 م",
  },
  {
    id: 9,
    name: "ليلى عبد العزيز",
    grade: "الثالث الثانوي",
    course: "دورة الاحصاء والاحتمالات",
    date: "2024-11-28",
    time: "01:20 م",
  },
];
import { useSocket } from "@/context/WsSocket";
import { DOMAIN } from "@/utils/constants";
import axios from "axios";
import { Search, MoreVertical, Users } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const LIMIT_PER_PAGE = 5;

const StudentsTable = () => {
  const { senderId } = useSocket();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [coursesCount, setCoursesCount] = useState(0);
  const [coursesData, setCoursesData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGetTeachers = async () => {
    const token = localStorage.getItem("token");
    setLoading(true);
    const { data } = await axios.get(`${DOMAIN}teacher-dashboard/students`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setLoading(true);
    setCoursesData(data?.data?.bookings);
    setCoursesCount(data?.data?.studentCounts);
  };

  useEffect(() => {
    handleGetTeachers();
  }, []);

  const totalPages = Math.ceil(coursesCount / LIMIT_PER_PAGE);

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-12 font-sans" dir="rtl">
      {/* Main Card */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        {/* Search and Stats Row */}
        <div className="p-6 flex flex-col md:flex-row justify-between items-center gap-4 border-b border-gray-50">
          <div className="relative w-full md:w-2/3">
            <input
              type="text"
              placeholder="ابحث باسم الطالب أو المدرس أو المادة .."
              className="w-full bg-white border border-gray-200 pr-12 pl-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#204658]/10 focus:border-[#204658] transition-all"
            />
            <Search
              className="absolute right-4 top-3.5 text-gray-400"
              size={20}
            />
          </div>

          <div className="flex items-center gap-4 bg-white border border-gray-100 p-2 rounded-2xl shadow-sm pr-6">
            <div className="text-right">
              <p className="text-[10px] text-gray-400 font-bold">
                إجمالي الطلاب
              </p>
              <p className="text-xl font-black text-[#204658]">
                {coursesCount}
              </p>
            </div>
            <div className="bg-[#D9E3E3] p-3 rounded-xl text-[#204658]">
              <Users size={24} />
            </div>
          </div>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead>
              <tr className="text-[#204658] text-sm font-bold bg-white">
                <th className="px-6 py-5 min-w-64">اسم الطالب</th>
                <th className="px-6 py-5 min-w-40">الصف</th>
                <th className="px-6 py-5 min-w-56">الدورة</th>
                <th className="px-6 py-5 min-w-56">تاريخ الدفع</th>
                <th className="px-6 py-5 min-w-56">توقيت الدفع</th>
                <th className="px-6 py-5 min-w-10"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {coursesData?.map((student) => (
                <tr
                  key={student.id}
                  className="hover:bg-gray-50 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-xl bg-[#204658] flex items-center justify-center text-white font-bold overflow-hidden">
                        <Image src="" alt={student.name} />
                      </div>
                      <span className="font-bold text-gray-800 text-sm">
                        {student.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {student.grade}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {student.course}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {student.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 font-medium">
                    {student.time}
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-gray-400 hover:text-[#204658] p-1 rounded-lg transition-colors">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-6 bg-white border-t border-gray-50 flex justify-between items-center">
          <div className="text-sm text-gray-400 font-medium">
            عرض <span className="text-gray-800">{coursesData?.length}</span> من
            أصل <span className="text-gray-800">{coursesCount}</span> طلاب
          </div>

          <div className="flex items-center gap-2">
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
            {/* <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-400 transition-all">
              <ChevronLeft size={18} />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsTable;
