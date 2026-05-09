"use client";
import { useEffect, useState, useMemo, useCallback } from "react";
import {
  GraduationCap,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import { DOMAIN } from "@/utils/constants";
import axios from "axios";

// سنترك هذه المصفوفات للقيم الافتراضية فقط
const stages = [
  "المراحل التعليمية",
  "المرحلة الابتدائية",
  "المرحلة الإعدادية",
  "المرحلة الثانوية",
];
const subjects = [
  "المادة التعليمية",
  "اللغة العربية",
  "الرياضيات",
  "العلوم",
  "اللغة الإنجليزية",
];

export default function TeachersTab({ centerId, cache, setsetCache }: any) {
  const [selectedStage, setSelectedStage] = useState("المراحل التعليمية");
  const [selectedSubject, setSelectedSubject] = useState("المادة التعليمية");

  const [isStageOpen, setIsStageOpen] = useState(false);
  const [isSubjectOpen, setIsSubjectOpen] = useState(false);

  // 1. منطق الفلترة الجديد: يعرض الكل إذا لم يتم اختيار قيمة محددة
  const filteredTeachers = useMemo(() => {
    // التأكد من أن cache مصفوفة، وإلا نستخدم مصفوفة فارغة
    const data = Array.isArray(cache) ? cache : [];

    if (
      selectedStage === "المراحل التعليمية" &&
      selectedSubject === "المادة التعليمية"
    ) {
      return data; // إرجاع كل البيانات فوراً إذا لم يتم اختيار فلتر
    }

    return data.filter((teacher: any) => {
      const stageMatch =
        selectedStage === "المراحل التعليمية" ||
        teacher?.educationalStage === selectedStage;

      const subjectMatch =
        selectedSubject === "المادة التعليمية" ||
        teacher?.studyMaterial === selectedSubject;

      return stageMatch && subjectMatch;
    });
  }, [cache, selectedStage, selectedSubject]);

  // 2. دالة جلب البيانات باستخدام useCallback لضمان استقرار المرجع
  const handleGetTeachers = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `${DOMAIN}center-dashboard/teachers/${centerId}?limit=9`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      // تحديث الكاش بالبيانات الجديدة
      setsetCache((pre: any) => {
        // إذا كان pre مصفوفة نحدثها مباشرة، إذا كان كائن نحدث المفتاح المطلوب
        if (Array.isArray(pre)) return res.data.data;
        return {
          ...pre,
          students: res.data.data, // حافظت على كلمة students بناءً على كودك الأصلي
        };
      });
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }, [centerId, setsetCache]);

  useEffect(() => {
    handleGetTeachers();
  }, [handleGetTeachers]);

  return (
    <div className="bg-[#f9fafb] min-h-screen p-4 md:p-8 space-y-10 animate-in fade-in duration-500">
      <div className="max-w-6xl mx-auto bg-white p-4 rounded border border-[#eee] flex items-center justify-between gap-4">
        {/* قائمة المراحل - التنسيق كما هو */}
        <div className="relative md:flex-none md:w-fit">
          <button
            onClick={() => setIsStageOpen(!isStageOpen)}
            className="w-full flex items-center justify-between text-sm md:text-xl font-bold text-[#2E637C] cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span>{selectedStage}</span>
              <ChevronDown
                size={18}
                className={`transition-transform ${isStageOpen ? "rotate-180" : ""}`}
              />
            </div>
          </button>

          {isStageOpen && (
            <div className="absolute top-full right-0 mt-2 w-full bg-white border border-slate-100 shadow-xl rounded-2xl z-50 overflow-hidden py-2 animate-in slide-in-from-top-2 duration-200">
              {stages.map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    setSelectedStage(s);
                    setIsStageOpen(false);
                  }}
                  className="w-full text-right px-6 py-3 text-sm font-bold text-slate-600 hover:bg-orange-50 hover:text-orange-600 transition-colors cursor-pointer"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="hidden md:flex text-[#2E637C] font-bold">
          <GraduationCap size={35} />
        </div>

        {/* قائمة المواد - التنسيق كما هو */}
        <div className="relative md:flex-none md:w-fit">
          <button
            onClick={() => setIsSubjectOpen(!isSubjectOpen)}
            className="w-full flex items-center justify-between text-sm md:text-xl font-bold text-[#2E637C] cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span>{selectedSubject}</span>
              <ChevronDown
                size={18}
                className={`transition-transform ${isSubjectOpen ? "rotate-180" : ""}`}
              />
            </div>
          </button>

          {isSubjectOpen && (
            <div className="absolute top-full left-0 mt-2 w-40 bg-white border border-slate-100 shadow-xl rounded-2xl z-50 overflow-hidden py-2 animate-in slide-in-from-top-2 duration-200">
              {subjects.map((sub) => (
                <button
                  key={sub}
                  onClick={() => {
                    setSelectedSubject(sub);
                    setIsSubjectOpen(false);
                  }}
                  className="w-full text-right px-6 py-3 text-sm font-bold text-slate-600 hover:bg-orange-50 hover:text-orange-600 transition-colors cursor-pointer whitespace-break-spaces"
                >
                  {sub}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* عرض المدرسين - تم تغيير المصدر ليكون filteredTeachers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredTeachers?.map((teacher: any) => (
          <div
            data-aos="flip-left"
            key={teacher.id}
            className="bg-white rounded-3xl p-8 border-[1.5px] border-[#BDBBBB] flex flex-col items-center group hover:translate-y-[-5px] transition-all duration-300"
          >
            <div className="relative w-28 h-28 mb-4">
              <div className="absolute inset-0 rounded-full scale-110 opacity-50"></div>
              {teacher?.imageUrl && (
                <Image
                  src={teacher.imageUrl}
                  alt={teacher.name}
                  width={80}
                  height={80}
                  className="w-full h-full rounded-full object-cover relative z-10 border-2 border-[#E7F2EF] shadow-sm"
                />
              )}
            </div>

            <div className="text-center w-full">
              <h4 className="text-xl font-black text-[#204658] mb-1">
                {teacher.name}
              </h4>
              <p className="text-black text-[16px] mb-4">
                {teacher.studyMaterial}
              </p>
              <p className="text-[#A9363D] text-xs font-bold mb-4">
                {teacher.studyMaterial}
              </p>

              <div className="flex items-center justify-center gap-4 text-[15px] text-[#5F5F60] mb-4">
                <span className="flex items-center gap-1">
                  <Clock size={15} /> {teacher.classRoom?.[0]}
                </span>
              </div>

              <div className="space-y-2">
                <button className="text-[16px] text-[#204658] flex items-center gap-1 mx-auto">
                  عن المدرس
                </button>
                <p className="text-slate-500 text-[14px] leading-relaxed text-center px-2 line-clamp-6">
                  {teacher.bio}
                </p>
              </div>

              <div className="flex items-center justify-center gap-5 mt-4">
                <Facebook size={18} className="text-slate-800" />
                <Instagram size={18} className="text-slate-800" />
                <Youtube size={18} className="text-slate-800" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* رسالة في حال عدم وجود نتائج */}
      {filteredTeachers?.length === 0 && (
        <div className="text-center h-80 flex items-center justify-center bg-white rounded-2xl border border-[#C0BEBE] max-w-3xl mx-auto">
          <p className="text-[#204658] text-2xl font-bold">
            لا يوجد مدرسين يطابقون الاختيارات الحالية
          </p>
        </div>
      )}
    </div>
  );
}
