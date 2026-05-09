"use client";
import React, { useState, useMemo } from "react";
import {
  Search,
  MoreVertical,
  ChevronRight,
  ChevronLeft,
  Users,
} from "lucide-react";

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
  // توليد المزيد من البيانات لتجربة التنقل بين الصفحات
  ...Array.from({ length: 25 }, (_, i) => ({
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

const ITEMS_PER_PAGE = 8;

const StudentsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // 1. منطق البحث: تصفية البيانات الثابتة
  const filteredData = useMemo(() => {
    return ALL_STUDENTS.filter(
      (student) =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.teacher.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // 2. منطق الترقيم (Pagination): حساب البيانات المعروضة حالياً
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const lastPageIndex = firstPageIndex + ITEMS_PER_PAGE;
    return filteredData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filteredData]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // العودة للصفحة الأولى عند كل بحث جديد
  };

  return (
    <div className="max-w-7xl mx-auto pb-10 bg-white rounded-xl p-4" dir="rtl">
      {/* رأس الصفحة */}
      <div className="mb-8 text-right bg-white shadow-md p-6 rounded-2xl border border-slate-50">
        <h1 className="text-2xl font-bold text-[#134E4A]">الطلاب</h1>
        <p className="text-[#424752] text-lg font-normal mt-1">
          متابعة الطلاب المسجلين وحضورهم (نسخة تجريبية)
        </p>
      </div>

      {/* شريط الإحصائيات والبحث */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3 bg-white p-3 rounded-2xl shadow-sm border border-slate-100 min-w-[250px]">
          <div className="w-12 h-12 bg-[#CBE7F5] rounded-xl flex items-center justify-center text-blue-600">
            <Users size={24} />
          </div>
          <div className="text-right px-4">
            <p className="text-sm text-slate-500 font-bold">إجمالي الطلاب</p>
            <p className="text-2xl font-black text-[#2E637C]">{filteredData.length}</p>
          </div>
        </div>

        <div className="relative w-full md:w-2/3">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="ابحث باسم الطالب أو المدرس أو المادة .."
            className="w-full p-4 pr-12 rounded-2xl border border-[#9CA3AF] shadow-sm focus:ring-2 focus:ring-[#134E4A]/10 outline-none text-slate-700 text-right transition-all"
          />
          <Search
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
            size={20}
          />
        </div>
      </div>

      {/* الجدول */}
      <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden flex flex-col">
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="p-5 text-slate-400 font-bold text-xs uppercase">اسم الطالب</th>
                <th className="p-5 text-slate-400 font-bold text-xs uppercase">الصف</th>
                <th className="p-5 text-slate-400 font-bold text-xs uppercase">المادة المحجوزة</th>
                <th className="p-5 text-slate-400 font-bold text-xs uppercase">اسم المدرس</th>
                <th className="p-5 text-slate-400 font-bold text-xs uppercase">تاريخ الدفع</th>
                <th className="p-5 text-slate-400 font-bold text-xs uppercase">توقيت الدفع</th>
                <th className="p-5"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {currentTableData.map((student) => (
                <tr
                  key={student.id}
                  className="hover:bg-slate-50/80 transition-colors group animate-in fade-in duration-300"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3 justify-start">
                      <div className="w-10 h-10 bg-[#1B3D39] rounded-xl flex items-center justify-center text-white text-xs">
                        {student.name.charAt(0)}
                      </div>
                      <span className="font-bold text-slate-700 text-sm">{student.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-slate-500 font-medium text-xs">{student.level}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-lg font-bold text-[10px] ${student.badgeColor}`}>
                      {student.subject}
                    </span>
                  </td>
                  <td className="p-4 text-slate-600 font-bold text-xs">{student.teacher}</td>
                  <td className="p-4 text-slate-500 text-xs font-medium">{student.date}</td>
                  <td className="p-4 text-slate-400 text-xs font-medium">{student.time}</td>
                  <td className="p-4 text-left">
                    <button className="text-slate-300 hover:text-slate-600 transition-colors">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredData.length === 0 && (
            <div className="p-20 text-center text-slate-400 font-medium">
              لا توجد نتائج تطابق بحثك حالياً
            </div>
          )}
        </div>

        {/* الترقيم (Pagination) */}
        {totalPages > 1 && (
          <div className="p-6 flex items-center justify-between border-t border-slate-100 bg-white">
            <p className="text-slate-400 text-xs font-bold">
              عرض {currentTableData.length} من أصل {filteredData.length} طالب
            </p>
            <div className="flex items-center gap-2" dir="ltr">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg bg-slate-50 text-slate-400 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft size={16} />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
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
              ))}

              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
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