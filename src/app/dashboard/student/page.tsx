"use client";
import { useState } from "react";
import { BookOpen, GraduationCap, ClipboardList } from "lucide-react";
import MySessions from "@/app/components/dashboard/student/tabs/MySessions";
import MyAssignments from "@/app/components/dashboard/student/tabs/MyAssignments";
import MyLessons from "@/app/components/dashboard/student/tabs/MyLessons";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("الحصص الحالية");
  const tabComponents: { [key: string]: React.ReactNode } = {
    "الحصص الحالية": <MySessions />,
    "الدروس": <MyLessons />,
    "الواجبات والامتحانات": <MyAssignments />,
  };
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-black text-slate-800 mb-8 text-center lg:text-right">
          الحصص
        </h1>

        {/* التابات العلوية الثابتة */}
        <div className="flex items-center justify-center lg:justify-start gap-8 md:gap-12 border-b border-slate-200 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {[
            { id: "الحصص الحالية", icon: BookOpen },
            { id: "الدروس", icon: GraduationCap },
            { id: "الواجبات والامتحانات", icon: ClipboardList },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 text-lg font-bold transition-all relative flex items-center gap-2 cursor-pointer group ${
                activeTab === tab.id ? "text-slate-900" : "text-slate-400 hover:text-slate-600"
              }`}
            >
              <tab.icon size={20} />
              <span className="hidden md:flex">{tab.id}</span>
              {activeTab === tab.id && (
                <div className="absolute bottom-0 right-0 left-0 h-1 bg-slate-800 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* عرض المكون المختار بناءً على التاب */}
      <div className="mt-8">
        {tabComponents[activeTab]}
      </div>
    </div>
  );
}
