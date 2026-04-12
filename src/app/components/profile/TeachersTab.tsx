"use client";
import { useState } from "react";
import { teachersData } from "@/data/centerProfile";
import {
  GraduationCap,
  Users,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";

export default function TeachersTab() {
  const [selectedStage, setSelectedStage] = useState("المراحل التعليمية");
  const [selectedSubject, setSelectedSubject] = useState("المادة التعليمية");

  const [isStageOpen, setIsStageOpen] = useState(false);
  const [isSubjectOpen, setIsSubjectOpen] = useState(false);

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

  const filteredTeachers = teachersData.filter((teacher) => {
    const stageMatch =
      selectedStage === "المراحل التعليمية" || teacher.stage === selectedStage;
    const subjectMatch =
      selectedSubject === "المادة التعليمية" ||
      teacher.subject === selectedSubject;
    return stageMatch && subjectMatch;
  });

  return (
    <div className="bg-[#f9fafb] min-h-screen p-4 md:p-8 space-y-10 animate-in fade-in duration-500">
      <div className="max-w-6xl mx-auto bg-white p-4 rounded border border-[#eee] flex items-center justify-between gap-4">
        <div className="relative md:flex-none md:w-fit">
          <button
            onClick={() => setIsStageOpen(!isStageOpen)}
            className="w-full flex items-center justify-between text-sm md:text-xl font-bold text-[#2E637C] cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span>{selectedStage}</span>
              <ChevronDown
                size={18}
                className={`transition-transform ${
                  isStageOpen ? "rotate-180" : ""
                }`}
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

        <div className="relative md:flex-none md:w-fit">
          <button
            onClick={() => setIsSubjectOpen(!isSubjectOpen)}
            className="w-full flex items-center justify-between text-sm md:text-xl font-bold text-[#2E637C] cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span>{selectedSubject}</span>
              <ChevronDown
                size={18}
                className={`transition-transform ${
                  isSubjectOpen ? "rotate-180" : ""
                }`}
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredTeachers.map((teacher) => (
          <div
            key={teacher.id}
            className="bg-white rounded-3xl p-8 border-[1.5px] border-[##BDBBBB] flex flex-col items-center group hover:translate-y-[-5px] transition-all duration-300"
          >
            <div className="relative w-28 h-28 mb-4">
              <div className="absolute inset-0 rounded-full scale-110 opacity-50"></div>
              <Image
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-full rounded-full object-cover relative z-10 border-2 border-[#E7F2EF] shadow-sm"
              />
            </div>

            <div className="text-center w-full">
              <h4 className="text-xl font-black text-[#204658] mb-1">
                {teacher.name}
              </h4>
              <p className="text-[#A9363D] text-xs font-bold mb-4">
                {teacher.subject}
              </p>

              <div className="flex items-center justify-center gap-4 text-[15px] text-[#5F5F60] mb-4">
                <span className="flex items-center gap-1">
                  <Users size={15} /> {teacher.experience}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={15} /> {teacher.yearsInCenter}
                </span>
              </div>

              <p className="text-black text-[16px] mb-4">{teacher.grade}</p>

              <div className="space-y-2">
                <button className="text-[16px] text-[#204658] flex items-center gap-1 mx-auto">
                  عن المدرس
                </button>
                <p className="text-slate-500 text-[14px] leading-relaxed text-center px-2 line-clamp-6">
                  {teacher.bio}
                </p>
              </div>

              <div className="flex items-center justify-center gap-5 mt-4">
                <Facebook
                  size={18}
                  className="text-slate-800 hover:text-blue-600 cursor-pointer transition-colors"
                />
                <Instagram
                  size={18}
                  className="text-slate-800 hover:text-pink-600 cursor-pointer transition-colors"
                />
                <Youtube
                  size={18}
                  className="text-slate-800 hover:text-red-600 cursor-pointer transition-colors"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredTeachers.length === 0 && (
        <div className="text-center h-80 flex items-center justify-center bg-white rounded-2xl border border-[#C0BEBE] max-w-3xl mx-auto">
          <p className="text-[#204658] text-2xl font-bold">
            أختر المرحلة التعليمية والصف الدراسي لعرض مدرسين السناتر
          </p>
        </div>
      )}
    </div>
  );
}
