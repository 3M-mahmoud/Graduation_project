"use client";
import { useEffect, useState } from "react";
import { BookOpen, GraduationCap, ClipboardList } from "lucide-react";
import MySessions from "@/app/components/dashboard/student/tabs/MySessions";
import MyAssignments from "@/app/components/dashboard/student/tabs/MyAssignments";
import MyLessons from "@/app/components/dashboard/student/tabs/MyLessons";
import { DOMAIN } from "@/utils/constants";
import axios from "axios";
import { useSocket } from "@/context/WsSocket";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("الحصص الحالية");
  const [cash, setCash] = useState({
    Sessions: [],
    Assignments: [],
    Lessons: [],
  });

  const handleGetSessions = async () => {
    const token = localStorage.getItem("token");

    const {
      data: { data },
    } = await axios.get(`${DOMAIN}dashboard-student/shares`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setCash((prev) => ({
      ...prev,
      Sessions: data,
    }));
  };

  const handleGetAssignments = async () => {
    const token = localStorage.getItem("token");
    const {
      data: { data },
    } = await axios.get(`${DOMAIN}dashboard-student/exam-home-worke`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setCash((prev) => ({
      ...prev,
      Assignments: data,
    }));
  };

  const handleGetLessons = async () => {
    const token = localStorage.getItem("token");
    const {
      data: { data },
    } = await axios.get(`${DOMAIN}dashboard-student/lessons`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setCash((prev) => ({
      ...prev,
      Lessons: data,
    }));
  };

  const tabComponents: { [key: string]: React.ReactNode } = {
    "الحصص الحالية": (
      <MySessions
        handleGetSessions={handleGetSessions}
        cash={cash?.Sessions || []}
      />
    ),
    الدروس: (
      <MyLessons
        handleGetLessons={handleGetLessons}
        cash={cash?.Lessons || []}
      />
    ),
    "الواجبات والامتحانات": (
      <MyAssignments
        handleGetAssignments={handleGetAssignments}
        cash={cash?.Assignments || []}
      />
    ),
  };
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-black text-slate-800 mb-8 text-center lg:text-right">
          الحصص
        </h1>

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
                activeTab === tab.id
                  ? "text-slate-900"
                  : "text-slate-400 hover:text-slate-600"
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

      <div className="mt-8">{tabComponents[activeTab]}</div>
    </div>
  );
}
