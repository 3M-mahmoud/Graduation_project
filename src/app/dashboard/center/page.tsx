"use client";
import { useState, useMemo, useEffect } from "react";
import { Search, Plus, MoreVertical } from "lucide-react";
import axios from "axios";
import { DOMAIN } from "@/utils/constants";

const INITIAL_TEACHERS = [
  {
    id: 1,
    name: "أ. محمد خالد",
    subject: "رياضيات",
    price: "100 ج",
    system: "عربي",
    level: "الثالث الثانوي",
    category: "ثانوي",
  },
  {
    id: 2,
    name: "أ. محمود أحمد",
    subject: "اللغة الإنجليزية",
    price: "150 ج",
    system: "عربي",
    level: "الثالث الثانوي",
    category: "ثانوي",
  },
  {
    id: 3,
    name: "أ. ياسر علي",
    subject: "فيزياء",
    price: "120 ج",
    system: "لغات",
    level: "الثاني الثانوي",
    category: "ثانوي",
  },
  {
    id: 4,
    name: "أ. ابراهيم حسن",
    subject: "كيمياء",
    price: "100 ج",
    system: "عربي",
    level: "الأول الثانوي",
    category: "ثانوي",
  },
];

const TeachersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [data, setData] = useState([]);

  // const filteredTeachers = useMemo(() => {
  //   return INITIAL_TEACHERS.filter((teacher) => {
  //     const matchesSearch =
  //       teacher.name.includes(searchTerm) ||
  //       teacher.subject.includes(searchTerm);
  //     const matchesCategory =
  //       activeCategory === "الكل" || teacher.category === activeCategory;
  //     return setData(matchesSearch && matchesCategory);
  //   });
  // }, [searchTerm, activeCategory]);

  const handleGetAllTeachers = async () => {
    let category = activeCategory;

    if (activeCategory === "الكل") category = "";
    const token = localStorage.getItem("token");
    const res = await axios.get(
      `${DOMAIN}center-dashboard/teachers?name=${searchTerm}&educationalStage=${category}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    setData(res?.data?.data || []);
  };

  useEffect(() => {
    handleGetAllTeachers();
  }, []);

  return (
    <div className="max-w-6xl mx-auto bg-white p-6 rounded-2xl">
      {/* Header */}
      <div className="mb-10 text-right">
        <h1 className="text-2xl font-bold text-[#134E4A]">المدرسين</h1>
        <p className="text-[#424752] font-normal text-[16px] mt-1">
          إدارة وتنظيم مدرسين السنتر
        </p>
      </div>

      {/* Controls: Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
        <div className="relative w-full flx-1">
          <input
            type="text"
            placeholder="ابحث باسم المدرس أو الحصة .."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 pr-12 rounded-lg border border-[#9CA3AF] shadow-sm focus:ring-2 focus:ring-[#062D27]/10 outline-none text-right font-normal text-[16px] text-[#9CA3AF]"
          />
          <Search
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
            size={18}
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto">
          {[
            "الكل",
            "المرحلة الأبتدائية",
            "المرحلة الأعدادية",
            "المرحلة الثانوية",
          ].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-lg font-normal text-[16px] transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#0D2D2A] text-white shadow-md"
                  : "bg-white text-slate-400 border border-slate-100 hover:bg-slate-50"
              }`}
            >
              {cat}
            </button>
          ))}
          <button className="bg-[#F97216] text-white px-5 py-2 rounded-lg font-normal text-[15px] flex items-center gap-2 mr-4 hover:bg-orange-600 transition-all shadow-lg shadow-orange-100 cursor-pointer">
            إضافة مدرس <Plus size={18} />
          </button>
        </div>
      </div>

      {/* Teachers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((teacher) => (
          <div
            key={teacher.id}
            className="bg-white rounded-[2.5rem] border border-slate-100 p-6 shadow-sm hover:shadow-md transition-all group animate-in zoom-in duration-300"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-slate-100 rounded-2xl overflow-hidden relative border border-slate-50">
                  {/* صورة المدرس الافتراضية */}
                  <div className="bg-slate-200 w-full h-full flex items-center justify-center text-slate-400 font-black">
                    🧑‍🏫
                  </div>
                </div>
                <div className="text-right">
                  <h4 className="font-medium text-black text-lg">
                    {teacher.name}
                  </h4>
                  <p className="text-[#DD5A00] text-base font-semibold">
                    {teacher.studeyMaterial}
                  </p>
                </div>
              </div>
              <button className="text-slate-300 hover:text-slate-600 transition-colors">
                <MoreVertical size={20} />
              </button>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-3 gap-y-4 gap-x-1 mb-8 border-t border-slate-50 pt-4">
              <div className="text-center border-l border-slate-50">
                <p className="text-[10px] text-slate-400 font-bold mb-1">
                  الصف
                </p>
                <p className="text-[10px] font-black text-slate-800">
                  {teacher.level}
                </p>
              </div>
              <div className="text-center border-l border-slate-50">
                <p className="text-[10px] text-slate-400 font-bold mb-1">
                  النظام
                </p>
                <p className="text-[10px] font-black text-slate-800">
                  {teacher.system}
                </p>
              </div>
              <div className="text-center">
                <p className="text-[10px] text-slate-400 font-bold mb-1">
                  سعر الحصة
                </p>
                <p className="text-[10px] font-black text-slate-800">
                  {teacher.price}
                </p>
              </div>
              {/* <div className="text-center border-l border-slate-50">
                <p className="text-[10px] text-slate-400 font-bold mb-1">
                  اليوم
                </p>
                <p className="text-[10px] font-black text-slate-500">
                  {teacher.day}
                </p>
              </div>
              <div className="text-center">
                <p className="text-[10px] text-slate-400 font-bold mb-1">
                  الساعة
                </p>
                <p className="text-[10px] font-black text-slate-500">
                  {teacher.time}
                </p>
              </div> */}
            </div>

            <button className="w-full py-3.5 bg-white border border-slate-100 rounded-2xl text-slate-400 font-black text-xs hover:bg-[#062D27] hover:text-white hover:border-[#062D27] transition-all duration-300">
              التفاصيل
            </button>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {data?.length === 0 && (
        <div className="text-center py-20 bg-white rounded-[2.5rem] border border-dashed border-slate-200">
          <p className="text-slate-400 font-bold">
            لا يوجد مدرسين يطابقون بحثك
          </p>
        </div>
      )}
    </div>
  );
};

export default TeachersPage;
