"use client";
import React, { useState, useMemo, useEffect } from "react";
import {
  Search,
  MoreVertical,
  ChevronRight,
  ChevronLeft,
  Users,
} from "lucide-react";
import { DOMAIN } from "@/utils/constants";
import axios from "axios";

// بيانات تجريبية موسعة لاختبار الـ Pagination
const ALL_STUDENTS = [
  {
    id: 1,
    name: "أحمد محمود علي",
    level: "الثالث الثانوي",
    subject: "الرياضيات",
    teacher: "أ. محمد إبراهيم",
    date: "2024-12-01",
    time: "10:30 ص",
    badgeColor: "bg-blue-50 text-blue-500",
  },
  {
    id: 2,
    name: "سارة جمال حسن",
    level: "الثالث الثانوي",
    subject: "الفيزياء",
    teacher: "أ. سامي يوسف",
    date: "2023-12-01",
    time: "11:15 ص",
    badgeColor: "bg-orange-50 text-orange-500",
  },
  {
    id: 3,
    name: "ياسر مصطفى",
    level: "الثاني الثانوي",
    subject: "الأحياء",
    teacher: "أ. دينا محمد",
    date: "2024-11-30",
    time: "08:45 ص",
    badgeColor: "bg-green-50 text-green-500",
  },
  {
    id: 4,
    name: "ليلي عبد العزيز",
    level: "الثالث الثانوي",
    subject: "الكيمياء",
    teacher: "أ. محمود شاكر",
    date: "2024-11-28",
    time: "01:20 م",
    badgeColor: "bg-purple-50 text-purple-500",
  },
  {
    id: 5,
    name: "عمر خالد",
    level: "الأول الثانوي",
    subject: "اللغة العربية",
    teacher: "أ. أحمد حسن",
    date: "2024-11-25",
    time: "12:00 م",
    badgeColor: "bg-red-50 text-red-500",
  },
  {
    id: 6,
    name: "مريم إيهاب",
    level: "الثالث الثانوي",
    subject: "اللغة الإنجليزية",
    teacher: "أ. سمر علي",
    date: "2024-11-24",
    time: "02:30 م",
    badgeColor: "bg-indigo-50 text-indigo-500",
  },
  // إضافة المزيد من البيانات الوهمية لتفعيل الصفحات
  ...Array.from({ length: 15 }, (_, i) => ({
    id: i + 7,
    name: `طالب تجريبي ${i + 7}`,
    level: "الثالث الثانوي",
    subject: "الفيزياء",
    teacher: "أ. محمود شاكر",
    date: "2024-11-28",
    time: "01:20 م",
    badgeColor: "bg-purple-50 text-purple-500",
  })),
];

const ITEMS_PER_PAGE = 8; // عدد الطلاب في كل صفحة

const StudentsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [studentCounts, setStudentCounts] = useState(0);
  const [bookings, setBookings] = useState([]);

  // 1. منطق البحث: تصفية البيانات بناءً على الاسم أو المادة أو المدرس
  const filteredData = useMemo(() => {
    return ALL_STUDENTS.filter(
      (student) =>
        student.name.includes(searchTerm) ||
        student.subject.includes(searchTerm) ||
        student.teacher.includes(searchTerm),
    );
  }, [searchTerm]);

  // 2. منطق الترقيم: حساب البيانات التي ستظهر في الصفحة الحالية فقط
  const totalPages = Math.ceil(bookings?.length / ITEMS_PER_PAGE);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const lastPageIndex = firstPageIndex + ITEMS_PER_PAGE;
    return setBookings(bookings?.slice(firstPageIndex, lastPageIndex));
  }, [currentPage, filteredData]);

  // إعادة الترقيم للصفحة الأولى عند البحث
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleGetAllTeachers = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get(`${DOMAIN}center-dashboard/students`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setStudentCounts(res.data?.studentCounts || 0);
    setBookings(res.data?.bookings || []);
  };

  useEffect(() => {
    handleGetAllTeachers();
  }, []);

  return (
    <div className="max-w-7xl mx-auto pb-10 bg-white rounded-xl p-4" dir="rtl">
      {/* رأس الصفحة */}
      <div className="mb-8 text-right bg-white shadow-md p-3 round-lg">
        <h1 className="text-2xl font-bold text-[#134E4A]">الطلاب</h1>
        <p className="text-[#424752] text-xl font-normal mt-1">
          متابعة الطلاب المسجلين وحضورهم
        </p>
      </div>

      {/* شريط الأدوات والبحث */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3 bg-white p-2 rounded-2xl shadow-sm border border-slate-50">
          <div className="w-10 h-10 bg-[#CBE7F5] rounded-xl flex items-center justify-center text-slate-500">
            <Users size={20} />
          </div>
          <div className="text-right px-4">
            <p className="text-[20px] text-[#424752] font-bold">
              إجمالي الطلاب
            </p>
            <p className="text-base font-bold text-[#424752]">
              {studentCounts}
            </p>
          </div>
        </div>
        <div className="relative w-full md:w-2/3">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="ابحث باسم الطالب أو المدرس أو الحصة .."
            className="w-full p-4 pr-12 rounded-2xl border border-[#9CA3AF]  shadow-sm focus:ring-2 focus:ring-[#062D27]/10 outline-none text-[#9CA3AF] text-right font-normal text-base transition-all"
          />
          <Search
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
            size={18}
          />
        </div>
      </div>

      {/* الجدول */}
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-50 overflow-hidden min-h-[500px] flex flex-col">
        <div className="flex-1 overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="border-b border-slate-50">
                <th className="p-5 text-slate-400 font-bold text-xs">
                  اسم الطالب
                </th>
                <th className="p-5 text-slate-400 font-bold text-xs">الصف</th>
                <th className="p-5 text-slate-400 font-bold text-xs">
                  المادة المحجوزة
                </th>
                <th className="p-5 text-slate-400 font-bold text-xs">
                  اسم المدرس
                </th>
                <th className="p-5 text-slate-400 font-bold text-xs">
                  تاريخ الدفع
                </th>
                <th className="p-5 text-slate-400 font-bold text-xs">
                  توقيت الدفع
                </th>
                <th className="p-5"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {bookings?.map((student) => (
                <tr
                  key={student.id}
                  className="hover:bg-slate-50 transition-colors group animate-in fade-in duration-300"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3 justify-start">
                      <div className="w-10 h-10 bg-[#1B3D39] rounded-xl flex items-center justify-center overflow-hidden shrink-0">
                        <span className="text-white text-[10px]">👤</span>
                      </div>
                      <span className="font-black text-slate-700 text-sm">
                        {student.name}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 text-slate-500 font-bold text-xs">
                    {student.level}
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-4 py-1.5 rounded-lg font-black text-[10px] ${student.badgeColor}`}
                    >
                      {student.subject}
                    </span>
                  </td>
                  <td className="p-4 text-slate-600 font-bold text-xs">
                    {student.teacher}
                  </td>
                  <td className="p-4 text-slate-500 font-bold text-xs">
                    {student.date}
                  </td>
                  <td className="p-4 text-slate-400 font-bold text-xs">
                    {student.time}
                  </td>
                  <td className="p-4">
                    <button className="text-slate-300 hover:text-slate-600 transition-colors">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {bookings?.length === 0 && (
            <div className="p-20 text-center text-slate-400 font-bold">
              لا توجد نتائج تطابق بحثك
            </div>
          )}
        </div>

        {/* الترقيم (Pagination) - مطابق للصورة تماماً */}
        {totalPages > 0 && (
          <div className="p-6 flex items-center justify-between border-t border-slate-50 bg-white">
            <p className="text-slate-400 text-xs font-bold">
              عرض {bookings?.length} من أصل {studentCounts} طالب
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg bg-slate-50 text-slate-400 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft size={16} />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (num) => (
                  <button
                    key={num}
                    onClick={() => setCurrentPage(num)}
                    className={`w-8 h-8 rounded-lg font-bold text-xs flex items-center justify-center transition-all ${
                      currentPage === num
                        ? "bg-[#062D27] text-white shadow-lg shadow-emerald-900/20"
                        : "bg-white border border-slate-100 text-slate-400 hover:bg-slate-50"
                    }`}
                  >
                    {num}
                  </button>
                ),
              )}

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages || totalPages === 0}
                className="p-2 rounded-lg bg-slate-50 text-slate-400 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentsPage;
