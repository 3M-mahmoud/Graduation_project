"use client";

import { useState } from "react";
import { Search, Atom, ChevronDown } from "lucide-react";

const MyAssignments = () => {
  // 1. البيانات الأصلية (مثال)
  const allAssignments = [
    {
      id: 1,
      title: "الواجب المنزلى:",
      subject: "فيزياء",
      deadline: "25 أكتوبر - 10:00م",
    },
    {
      id: 2,
      title: "الواجب المنزلى:",
      subject: "كيمياء",
      deadline: "26 أكتوبر - 09:00م",
    },
    {
      id: 3,
      title: "الواجب المنزلى:",
      subject: "رياضيات",
      deadline: "27 أكتوبر - 08:00م",
    },
    {
      id: 4,
      title: "الواجب المنزلى:",
      subject: "أحياء",
      deadline: "28 أكتوبر - 07:00م",
    },
  ];

  const allExams = [
    {
      id: 1,
      title: "امتحان نصف الترم:",
      subject: "فيزياء",
      date: "20 أكتوبر - 9:00",
      duration: "60 دقيقة",
    },
    {
      id: 2,
      title: "امتحان شهرى:",
      subject: "كيمياء",
      date: "21 أكتوبر - 10:00",
      duration: "45 دقيقة",
    },
    {
      id: 3,
      title: "امتحان تجريبى:",
      subject: "لغة عربية",
      date: "22 أكتوبر - 11:00",
      duration: "90 دقيقة",
    },
  ];

  // 2. حالات التحكم (State)
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleAssignments, setVisibleAssignments] = useState(2);
  const [visibleExams, setVisibleExams] = useState(2);

  // 3. منطق البحث والفلترة
  const filteredAssignments = allAssignments.filter((item) =>
    item.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredExams = allExams.filter((item) =>
    item.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animate-in fade-in zoom-in duration-500">
      {/* شريط البحث */}
      <div className="relative mb-10">
        <input
          type="text"
          placeholder="ابحث عن مادة معينة..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-4 pr-12 rounded-2xl border border-slate-100 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-200 text-right font-bold"
        />
        <Search
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
          size={20}
        />
      </div>

      {/* قسم الواجبات */}
      <div className="mb-12">
        <h3 className="text-xl font-bold text-slate-800 mb-6 text-right">
          الواجبات
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAssignments.slice(0, visibleAssignments).map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm flex flex-col items-start text-start animate-in fade-in duration-300"
            >
              <div className="flex gap-2 mb-3">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 mb-4">
                  <Atom size={32} />
                </div>
                <div className="flex flex-col gap-2 text-[22px] font-medium text-black">
                  <h4>{item.title}</h4>

                  <p>{item.subject}</p>
                </div>
              </div>
              <div className="bg-[#F53636] text-white px-2 py-1 rounded-lg text-[16px] font-medium mb-6">
                ينتهي في : {item.deadline}
              </div>
              <button className="w-full py-4 bg-[#0D2D2A] text-white rounded-lg text-[22px] font-medium hover:bg-[#083a32] transition-colors cursor-pointer">
                بدأ الحل
              </button>
            </div>
          ))}
        </div>

        {/* زر عرض المزيد للواجبات */}
        {visibleAssignments < filteredAssignments.length && (
          <button
            onClick={() => setVisibleAssignments((prev) => prev + 2)}
            className="mx-auto mt-6 flex items-center gap-2 px-6 py-2 bg-[#003F87] text-white rounded-lg text-[22px] font-semibold hover:bg-[#003f87c8] transition-colors cursor-pointer"
          >
            عرض المزيد <ChevronDown size={16} />
          </button>
        )}
      </div>

      {/* قسم الامتحانات */}
      <div>
        <h3 className="text-xl font-bold text-slate-800 mb-6 text-right">
          الامتحانات
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredExams.slice(0, visibleExams).map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-start text-start animate-in fade-in duration-300"
            >
              <div className="flex gap-2 mb-3">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 mb-4">
                  <Atom size={32} />
                </div>
                <div className="flex flex-col gap-2 text-[22px] font-medium text-black">
                  <h4>{item.title}</h4>

                  <p>{item.subject}</p>
                </div>
              </div>
              <div className="text-[#525252] font-medium text-lg space-y-2 mb-6">
                <p>الموعد: {item.date}</p>
                <p>المدة : {item.duration}</p>
              </div>

              <button className="w-full py-4 bg-[#0D2D2A] text-white rounded-lg text-[22px] font-medium hover:bg-[#083a32] transition-colors cursor-pointer">
                بدأ الامتحان
              </button>
            </div>
          ))}
        </div>

        {/* زر عرض المزيد للامتحانات */}
        {visibleExams < filteredExams.length && (
          <button
            onClick={() => setVisibleExams((prev) => prev + 2)}
            className="mx-auto mt-6 flex items-center gap-2 px-6 py-2 bg-[#003F87] text-white rounded-lg text-[22px] font-semibold hover:bg-[#003f87c8] transition-colors cursor-pointer"
          >
            عرض المزيد <ChevronDown size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default MyAssignments;
