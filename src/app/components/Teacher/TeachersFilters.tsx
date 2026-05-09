"use client";
import {
  Search,
  Globe,
  GraduationCap,
  BookOpen,
  ChevronDown,
} from "lucide-react";
import { useMemo } from "react";

export default function TeachersFilters({
  search,
  setSearch,
  system,
  setSystem,
  grade,
  setGrade,
  subject,
  setSubject,
  onFilter,
  data = [],
}: any) {
  const options = useMemo(() => {
    const systems = new Set<string>();
    const grades = new Set<string>();
    const subjects = new Set<string>();

    data.forEach((teacher: any) => {
      teacher?.teacher?.studySystem?.forEach((s: string) => systems.add(s));
      teacher?.teacher?.classRoom?.forEach((g: string) => grades.add(g));
      subjects.add(teacher?.teacher?.studyMaterial);
    });

    return {
      systems: Array.from(systems),
      grades: Array.from(grades),
      subjects: Array.from(subjects),
    };
  }, [data]);

  return (
    <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
      <div
        data-aos="fade-up"
        className="bg-white text-[#9CA3AF] rounded-2xl shadow-xl p-4 md:p-6 grid grid-cols-1 md:grid-cols-5 gap-4"
      >
        <div className="relative">
          <Search className="absolute right-3 top-3" size={20} />
          <input
            type="text"
            placeholder="أبحث عن اسم المدرس..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pr-10 pl-4 py-2.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-black"
          />
        </div>

        <div className="relative">
          <Globe className="absolute right-3 top-3" size={20} />
          <select
            value={system}
            onChange={(e) => setSystem(e.target.value)}
            className="w-full pr-10 text-black pl-4 py-2.5 border border-[#9CA3AF] rounded-xl appearance-none focus:outline-none cursor-pointer"
          >
            <option value="">النظام الدراسي</option>
            {options.systems.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <ChevronDown
            className="absolute left-3 top-3 text-slate-400 pointer-events-none"
            size={18}
          />
        </div>

        <div className="relative">
          <GraduationCap className="absolute right-3 top-3" size={20} />
          <select
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className="w-full pr-10 pl-4 py-2.5 border border-[#9CA3AF] text-black rounded-xl appearance-none focus:outline-none cursor-pointer"
          >
            <option value="">اختر الصف</option>
            {options.grades.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
          <ChevronDown
            className="absolute left-3 top-3 text-slate-400 pointer-events-none"
            size={18}
          />
        </div>

        <div className="relative">
          <BookOpen className="absolute right-3 top-3" size={20} />
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full pr-10 pl-4 py-2.5 border border-[#9CA3AF] text-black rounded-xl appearance-none focus:outline-none cursor-pointer"
          >
            <option value="">اختر المادة</option>
            {options.subjects.map((sub) => (
              <option key={sub} value={sub}>
                {sub}
              </option>
            ))}
          </select>
          <ChevronDown
            className="absolute left-3 top-3 text-slate-400 pointer-events-none"
            size={18}
          />
        </div>

        <button
          onClick={onFilter}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl py-2.5 transition-colors cursor-pointer"
        >
          تطبيق
        </button>
      </div>
    </div>
  );
}
