"use client";

import { Building2, MonitorPlay, Users, Heart } from "lucide-react";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import CountUp from "react-countup";
export default function SuccessSection() {
  const stats = [
    {
      label: "سنتر تعليمي",
      value: 95,
      suffix: "+",
      icon: <Building2 className="text-blue-500" size={32} />,
    },
    {
      label: "مدرس أونلاين",
      value: 2860,
      suffix: "+",
      icon: <MonitorPlay className="text-emerald-500" size={32} />,
    },
    {
      label: "طالب مسجل",
      value: 15420,
      suffix: "+",
      icon: <Users className="text-orange-500" size={32} />,
    },
    {
      label: "معدل الرضا",
      value: 98,
      suffix: "%",
      icon: <Heart className="text-rose-500" size={32} />,
    },
  ];

  return (
    <section className="py-20 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <SectionHeader
          title="أرقام تتحدث عن نجاحنا"
          description="انضم الي الاف الطلاب الذي يثقون في منصة سنتر مصر"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                {stat.icon}
              </div>
              <span className="text-2xl md:text-3xl font-black text-slate-800 mb-1">
                <CountUp
                  redraw={true}
                  end={stat.value}
                  duration={3}
                  separator=","
                  suffix={stat.suffix}
                />
              </span>
              <span className="text-slate-500 font-bold">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
