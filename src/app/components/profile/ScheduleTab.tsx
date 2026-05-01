"use client";
import { useMemo, useState } from "react";
import { ChevronDown, GraduationCap } from "lucide-react";
import { scheduleData } from "@/data/centerProfile";

const stageConfig: Record<string, string[]> = {
  "المرحلة الثانوية": [
    "الصف الأول الثانوي",
    "الصف الثاني الثانوي",
    "الصف الثالث الثانوي",
  ],
  "المرحلة الإعدادية": [
    "الصف الأول الإعدادي",
    "الصف الثاني الإعدادي",
    "الصف الثالث الإعدادي",
  ],
  "المرحلة الابتدائية": [
    "الصف الرابع الابتدائي",
    "الصف الخامس الابتدائي",
    "الصف السادس الابتدائي",
  ],
};

export default function ScheduleTab() {
  const [selectedStage, setSelectedStage] = useState("المرحلة التعليمية");
  const [selectedGrade, setSelectedGrade] = useState("الصف التعليمي");
  const [isStageOpen, setIsStageOpen] = useState(false);
  const [isGradeOpen, setIsGradeOpen] = useState(false);

  const handleStageSelect = (stage: string) => {
    setSelectedStage(stage);
    setSelectedGrade("الصف التعليمي");
    setIsStageOpen(false);
  };

  const days = [
    "السبت",
    "الأحد",
    "الإثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
  ];

  const filteredSchedule = useMemo(() => {
    if (selectedGrade === "الصف التعليمي") return [];

    return scheduleData.map((dayGroup) => ({
      ...dayGroup,
      lessons: dayGroup.lessons.filter(
        (lesson: any) => lesson.grade === selectedGrade
      ),
    }));
  }, [selectedGrade]);

  const isFilterSelected = selectedGrade !== "الصف التعليمي";

  return (
    <div className="space-y-6 animate-in fade-in duration-500" dir="rtl">
      <div data-aos="fade-up" className="max-w-6xl mx-auto bg-white p-4 rounded-xl border border-[#eee] flex items-center justify-between gap-4 shadow-sm">
        <div className="relative md:flex-none">
          <button
            onClick={() => {
              setIsStageOpen(!isStageOpen);
              setIsGradeOpen(false);
            }}
            className="flex items-center gap-2 text-sm md:text-xl font-extrabold text-[#2E637C] cursor-pointer outline-none"
          >
            <span>{selectedStage}</span>
            <ChevronDown
              size={20}
              className={`transition-transform ${
                isStageOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isStageOpen && (
            <div className="absolute top-full right-0 mt-3 w-56 bg-white border border-slate-100 shadow-xl rounded-2xl z-50 overflow-hidden py-2 animate-in slide-in-from-top-2">
              {Object.keys(stageConfig).map((s) => (
                <button
                  key={s}
                  className="w-full text-right px-6 py-3 text-sm font-bold text-slate-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                  onClick={() => handleStageSelect(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="hidden md:flex text-[#2E637C]">
          <GraduationCap size={35} />
        </div>

        <div className="relative md:flex-none">
          <button
            disabled={selectedStage === "المرحلة التعليمية"}
            onClick={() => {
              setIsGradeOpen(!isGradeOpen);
              setIsStageOpen(false);
            }}
            className="flex items-center gap-2 text-sm md:text-xl font-extrabold cursor-pointer outline-none text-[#2E637C]"
          >
            <span>{selectedGrade}</span>
            <ChevronDown
              size={20}
              className={`transition-transform ${
                isGradeOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isGradeOpen && selectedStage !== "المرحلة التعليمية" && (
            <div className="absolute top-full left-0 mt-3 w-56 bg-white border border-slate-100 shadow-xl rounded-2xl z-50 overflow-hidden py-2 animate-in slide-in-from-top-2">
              {stageConfig[selectedStage].map((g) => (
                <button
                  key={g}
                  className="w-full text-right px-6 py-3 text-sm font-bold text-slate-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                  onClick={() => {
                    setSelectedGrade(g);
                    setIsGradeOpen(false);
                  }}
                >
                  {g}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div data-aos="fade-up" className="bg-[#22432D] rounded-2xl p-4 md:p-8 shadow-2xl min-h-[500px]">
        <div className="border rounded-2xl p-2">
          <div className="text-center my-6">
            <h3 className="text-white font-bold text-lg md:text-xl pb-4 inline-block">
              {isFilterSelected
                ? selectedGrade
                : "أختر المرحلة التعليمية والصف الدراسي لعرض جدول الحصص"}
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px p-3 border-t overflow-hidden">
            {days.map((day) => {
              const dayGroup = filteredSchedule.find((d) => d.day === day);
              const lessons = dayGroup?.lessons || [];

              return (
                <div key={day} className="flex flex-col min-h-[400px]">
                  <div
                    className={`py-4 text-center border-b ${
                      day !== "الجمعة" ? "md:border-l" : ""
                    }`}
                  >
                    <span className="text-white font-black text-sm">{day}</span>
                  </div>

                  <div className="flex-1">
                    {isFilterSelected &&
                      lessons.map((lesson, index) => {
                        const isLastLesson = index === lessons.length - 1;
                        return (
                          <div
                            key={lesson.id}
                            className={`p-4 text-center group transition-all hover:bg-white/5 
                            ${day !== "الجمعة" ? "md:border-l" : ""} 
                            ${isLastLesson ? "border-b-0" : "border-b"}`}
                          >
                            <div className="w-15 h-15 rounded-full overflow-hidden mx-auto mb-3 shadow-lg shadow-black/20">
                              <img
                                src="https://i.pravatar.cc/150"
                                alt=""
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <p className="text-[10px] text-white/80 truncate font-medium">
                              {lesson.teacher}
                            </p>
                            <h4 className="text-white font-black text-[11px] my-1.5">
                              {lesson.subject}
                            </h4>
                            <p className="text-white font-black text-[10px] mb-3">
                              {lesson.time}
                            </p>

                            <button
                              className={`w-full py-2 rounded-xl text-[10px] font-black transition-all active:scale-95 ${
                                lesson.status === "booked"
                                  ? "bg-slate-700/50 text-white/30 cursor-not-allowed"
                                  : "bg-orange-500 text-white hover:bg-orange-600 cursor-pointer"
                              }`}
                            >
                              {lesson.status === "booked"
                                ? "تم الحجز"
                                : "احجز الحصة"}
                            </button>
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
