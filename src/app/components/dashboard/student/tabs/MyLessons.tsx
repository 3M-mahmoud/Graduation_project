"use client";
import React, { useState, useMemo } from "react";
import { MapPin, Calendar, Clock } from "lucide-react";

const MyLessons = () => {
  // 1. تحديد اليوم المختار (الافتراضي هو تاريخ اليوم)
  const [selectedDate, setSelectedDate] = useState(
    new Date().getDate().toString(),
  );

  // 2. توليد أيام الأسبوع الحالي ديناميكياً
  const weekDays = useMemo(() => {
    const now = new Date();
    const startOfWeek = new Date(now);
    // ضبط البداية لتكون يوم السبت (بداية الأسبوع التعليمي في مصر)
    const dayDiff = now.getDay() === 6 ? 0 : now.getDay() + 1;
    startOfWeek.setDate(now.getDate() - dayDiff);

    const daysNameAr = [
      "السبت",
      "الأحد",
      "الاثنين",
      "الثلاثاء",
      "الأربعاء",
      "الخميس",
      "الجمعة",
    ];

    return daysNameAr.map((name, index) => {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + index);
      return {
        name,
        date: date.getDate().toString(),
        fullDate: date.toDateString(),
      };
    });
  }, []);

  // 3. بيانات الدروس (مثال لمحتوى يتغير حسب اليوم)
  const lessonsData: { [key: string]: any[] } = {
    "25": [
      // مثال ليوم 24 الموضح في الصورة
      {
        id: 1,
        subject: "الرياضيات - أ/ خالد",
        center: "سنتر النور - الدقى",
        time: "الساعة 4:00 عصراً",
      },
      {
        id: 2,
        subject: "الفيزياء - أ/ محمود",
        center: "أونلاين",
        time: "الساعة 8:00 مساءً",
      },
    ],
    // باقي الأيام ستكون فارغة في هذا المثال
  };

  const currentLessons = lessonsData[selectedDate] || [];

  return (
    <div className="animate-in fade-in duration-500">
      {/* قسم الجدول القادم - ديناميكي */}
      <section className="mb-10">
        <h3 className="text-2xl font-normal text-black mb-6">الجدول القادم</h3>
        <div className="flex flex-row justify-between gap-2 overflow-x-auto pb-4 scrollbar-hide">
          {weekDays.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedDate(item.date)}
              className={`flex flex-col items-center w-28 p-4 rounded-xl border transition-all duration-300 cursor-pointer text-2xl font-normal ${
                selectedDate === item.date
                  ? "bg-[#AEACAC] text-black border-black shadow-lg"
                  : "bg-white text-black border-[#BAB8B8] hover:border-slate-200"
              }`}
            >
              <span className="mb-1">{item.name}</span>
              <span>{item.date}</span>
            </button>
          ))}
        </div>
      </section>

      {/* قسم الحصص المحجوزة - يتغير حسب اليوم المختار */}
      <section>
        <h3 className="text-2xl font-normal text-black mb-4">الحصص المحجوزة</h3>

        <div className="space-y-4">
          {currentLessons.length > 0 ? (
            currentLessons.map((lesson) => (
              <div
                key={lesson.id}
                className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col md:flex-row gap-2 items-center justify-between shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <h4 className="font-normal text-black text-xl">
                      {lesson.subject}
                    </h4>
                    <div className="flex flex-col gap-1 mt-2 text-slate-400 font-bold text-sm">
                      <span className="flex items-center gap-2 text-lg text-[#525252] font-normal">
                        <MapPin size={16} />
                        {lesson.center}
                      </span>
                      <span className="flex items-center gap-2 text-lg text-[#525252] font-normal">
                        <Calendar size={16} /> الاثنين {selectedDate} أكتوبر
                      </span>
                      <span className="flex items-center gap-2 text-lg text-[#525252] font-normal">
                        <Clock size={16} />
                        {lesson.time}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl grayscale group-hover:grayscale-0 transition-all">
                  🗺️
                </div>
                <div className="px-6 py-2 bg-emerald-50 text-emerald-600 rounded-lg font-bold text-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  مؤكد
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white py-16 rounded-[2.5rem] border border-dashed border-slate-200 text-center">
              <p className="text-slate-400 font-bold">
                لا توجد حصص محجوزة لهذا اليوم
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MyLessons;
