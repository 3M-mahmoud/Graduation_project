"use client";
import React from "react";
import { Search, Atom, ChevronDown } from "lucide-react";

const MyAssignments = () => {
  return (
    <div className="animate-in fade-in zoom-in duration-500">
      {/* شريط البحث */}
      <div className="relative mb-10">
        <input
          type="text"
          placeholder="الواجبات"
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
          {[1, 2].map((_, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 mb-4">
                <Atom size={32} />
              </div>
              <h4 className="text-lg font-black text-slate-800">
                الواجب المنزلى:
              </h4>
              <p className="text-slate-500 font-bold mb-4">فيزياء</p>
              <div className="bg-red-500 text-white px-4 py-1 rounded-full text-xs font-bold mb-6">
                ينتهي في : 25 أكتوبر - 10:00م
              </div>
              <button className="w-full py-4 bg-[#062D27] text-white rounded-xl font-black hover:bg-[#083a32] transition-colors">
                بدأ الحل
              </button>
            </div>
          ))}
        </div>
        <button className="mx-auto mt-6 flex items-center gap-2 px-6 py-2 bg-slate-800 text-white rounded-lg text-sm font-bold">
          عرض المزيد <ChevronDown size={16} />
        </button>
      </div>

      {/* قسم الامتحانات */}
      <div>
        <h3 className="text-xl font-bold text-slate-800 mb-6 text-right">
          الامتحانات
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((_, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 mb-4">
                <Atom size={32} />
              </div>
              <h4 className="text-lg font-black text-slate-800">
                امتحان نصف الترم:
              </h4>
              <p className="text-slate-500 font-bold mb-4">فيزياء</p>
              <div className="text-slate-400 font-bold text-sm space-y-1 mb-6">
                <p>الموعد: 20 أكتوبر - 9:00</p>
                <p>المدة : 60 دقيقة</p>
              </div>
              <button className="w-full py-4 bg-[#062D27] text-white rounded-xl font-black hover:bg-[#083a32] transition-colors">
                بدأ الامتحان
              </button>
            </div>
          ))}
        </div>
        <button className="mx-auto mt-6 flex items-center gap-2 px-6 py-2 bg-slate-800 text-white rounded-lg text-sm font-bold">
          عرض المزيد <ChevronDown size={16} />
        </button>
      </div>
    </div>
  );
};

export default MyAssignments;
