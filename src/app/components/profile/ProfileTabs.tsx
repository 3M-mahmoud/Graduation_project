"use client";
import { LayoutGrid, Users, CalendarDays, MapPin } from "lucide-react";
interface ProfileTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const ProfileTabs = ({ activeTab, setActiveTab }: ProfileTabsProps) => {
  const tabs = [
    { name: "الرئيسية", icon: <LayoutGrid size={18} /> },
    { name: "المدرسين", icon: <Users size={18} /> },
    { name: "جدول الحصص", icon: <CalendarDays size={18} /> },
    { name: "الموقع الجغرافي", icon: <MapPin size={18} /> },
  ];

  return (
    <div data-aos="fade-up" className="bg-white border-b sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
    
        <div className="grid sm:grid-cols-4 gap-8 overflow-x-auto no-scrollbar scroll-smooth">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.name;
            return (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`py-4 text-sm font-bold transition-all whitespace-nowrap cursor-pointer relative group flex items-center justify-center gap-2 ${
                  isActive
                    ? "text-orange-500"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                <span
                  className={`transition-transform duration-300 ${
                    isActive ? "scale-110" : "group-hover:scale-105"
                  }`}
                >
                  {tab.icon}
                </span>
                {tab.name}

            
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full transition-all duration-300 ${
                    activeTab === tab.name
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-50"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
