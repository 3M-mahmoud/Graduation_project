"use client";
import background from "../../../assets/background.jpeg";
import { useState } from "react";
import {
  MessageSquare,
  Star,
  GraduationCap,
  BookOpen,
  School,
  Clock,
  Plus,
} from "lucide-react";
// استيراد البيانات من الملف الذي أنشأناه
import {
  teacherInfo,
  teacherStats,
  teacherDetails,
  pricing,
} from "@/data/teacherData";
import Image from "next/image";
import OverviewTab from "@/app/components/Teacher/tabs/OverviewTab";

export default function TeacherProfile() {
  const [activeTab, setActiveTab] = useState("نظرة عامة");

  const renderTabContent = () => {
    switch (activeTab) {
      case "نظرة عامة":
        return <OverviewTab />; 
      case "المنشورات":
        return (
          <div className="p-10 text-center bg-white rounded-2xl border">
            قريباً: المنشورات
          </div>
        );
      case "الحصص التعليمية":
        return (
          <div className="p-10 text-center bg-white rounded-2xl border">
            قريباً: الحصص التعليمية
          </div>
        );
      case "الدورات التعليمية":
        return (
          <div className="p-10 text-center bg-white rounded-2xl border">
            قريباً: الدورات التعليمية
          </div>
        );
      default:
        return <OverviewTab />;
    }
  };
  return (
    <main className="bg-[#F8FAFC] min-h-screen pb-20" dir="rtl">
     
      <section className="bg-white border-b shadow-sm relative">
     
        <div className="h-15 md:h-20 relative">
          <div className="absolute inset-0 opacity-2 pointer-events-none select-none">
          
            <Image src={background} alt="background" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-8 pb-6">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6 -mt-12 relative z-10">
            <div className="w-60 h-60 mb-3 rounded-full overflow-hidden">
              <img
                src={teacherInfo.image}
                className="w-full h-full object-cover"
                alt={teacherInfo.name}
              />
            </div>

            <div className="flex-1 text-center md:text-right pt-4">
              <h1 className="text-2xl md:text-3xl font-bold text-[#204658]">
                {teacherInfo.name}
              </h1>
              <p className="text-[#A9363D] font-normal text-2xl mb-2">
                {teacherInfo.subject}
              </p>
              <div className="flex justify-center md:justify-start items-center gap-1 text-[#204658] font-light">
                <span className="ml-2 text-xl">
                  {teacherInfo.followers} متابع
                </span>
                <span className="flex items-center gap-0.5">
              
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      className={
                        index < Math.floor(teacherInfo.rating)
                          ? "text-[#FFC700] fill-[#FFC700]" 
                          : "text-slate-200 fill-slate-200" 
                      }
                    />
                  ))}

        
                  <span className="mr-2 text-[#4B5563] text-lg font-light">
                    {teacherInfo.rating}
                  </span>
                </span>
              </div>
              <p className="mt-3 mb-3 text-[#4B5563] max-w-2xl leading-relaxed text-[16px] font-normal">
                {teacherInfo.bio}
              </p>
              <div className="flex gap-3 mb-2">
                <button className="flex items-center gap-2 bg-[#2E637C] text-white px-6 py-2.5 rounded-xl font-bold shadow-lg cursor-pointer hover:bg-[#215167] transition-all">
                  <Plus size={18} /> متابعة
                </button>
                <button className="flex items-center gap-2 border border-[#818181] text-[#343A40] text-sm px-6 py-2.5 rounded-xl font-bold cursor-pointer hover:bg-[#343A40] hover:text-white transition-all">
                  <MessageSquare size={18} /> مراسلة
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-8 flex gap-8">
          {[
            "نظرة عامة",
            "المنشورات",
            "الحصص التعليمية",
            "الدورات التعليمية",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-2 font-bold transition-all relative whitespace-nowrap cursor-pointer ${
                activeTab === tab
                  ? "text-orange-500"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div
            className={`${
              activeTab === "نظرة عامة" ? "lg:col-span-12" : "lg:col-span-12"
            }`}
          >
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}
