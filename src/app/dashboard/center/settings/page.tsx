"use client";
import React from "react";
import Image from "next/image";
import centerLogo from "@/assets/ceterProfile/teacherTap1.jpeg";

const SettingsPage = () => {
  return (
    <div className="max-w-[850px] mx-auto pb-10 text-right" dir="rtl">
      <div className="mb-8">
        <h1 className="text-2xl font-black text-slate-800">البيانات الشخصية</h1>
        <p className="text-slate-400 text-sm font-bold mt-1">
          قم بتحديث بياناتك الشخصية
        </p>
      </div>

      <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-sm space-y-12">
        <section>
          <div className="flex items-center justify-start gap-2 mb-6 border-r-4 border-blue-600 pr-3">
            <h2 className="text-lg font-black text-slate-800">
              المعلومات الشخصية
            </h2>
          </div>

          <div className="flex flex-col items-start gap-6">
            <div className="flex items-center gap-4 flex-row-reverse">
              <div className="text-right">
                <h3 className="font-bold text-slate-700 text-sm">
                  سنتر المتخصص
                </h3>
                <p className="text-orange-500 text-xs font-bold">الهرم</p>
              </div>
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-slate-50 shadow-sm">
                <Image
                  src={centerLogo}
                  alt="Logo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <label className="block text-slate-500 text-xs font-bold mb-2">
                اسم السنتر
              </label>
              <input
                type="text"
                placeholder="سنتر المتخصص"
                className="w-full p-3 rounded-xl border border-slate-100 bg-slate-50/30 focus:outline-none focus:ring-2 focus:ring-blue-50 text-right text-sm font-bold text-slate-400"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-start gap-2 mb-6 border-r-4 border-blue-600 pr-3">
            <h2 className="text-lg font-black text-slate-800">
              الموقع الجغرافي
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-slate-500 text-xs font-bold mb-2">
                المدينة
              </label>
              <input
                type="text"
                placeholder="الجيزة"
                className="w-full p-3 rounded-xl border border-slate-100 bg-slate-50/30 text-right text-sm font-bold text-slate-400"
              />
            </div>
            <div>
              <label className="block text-slate-500 text-xs font-bold mb-2">
                المنطقة
              </label>
              <input
                type="text"
                placeholder="الهرم"
                className="w-full p-3 rounded-xl border border-slate-100 bg-slate-50/30 text-right text-sm font-bold text-slate-400"
              />
            </div>
          </div>
          <div>
            <label className="block text-slate-500 text-xs font-bold mb-2">
              الموقع
            </label>
            <input
              type="text"
              placeholder="مثال : خرائط google"
              className="w-full p-3 rounded-xl border border-slate-100 bg-slate-50/30 text-right text-sm font-bold text-slate-400"
            />
          </div>
        </section>

        <section>
          <div className="flex items-center justify-start gap-2 mb-6 border-r-4 border-blue-600 pr-3">
            <h2 className="text-lg font-black text-slate-800">
              البيانات التعليمية
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-slate-500 text-xs font-bold mb-2">
                المرحلة الدراسية
              </label>
              <select className="w-full p-3 rounded-xl border border-slate-100 bg-slate-50/30 text-right text-sm font-bold text-slate-400 appearance-none bg-no-repeat bg-[left_1rem_center] bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23CBD5E1%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px]">
                <option>المرحلة الإعدادية - المرحلة الثانوية</option>
              </select>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-start gap-2 mb-6 border-r-4 border-blue-600 pr-3">
            <h2 className="text-lg font-black text-slate-800">
              بيانات التواصل
            </h2>
          </div>
          <div>
            <label className="block text-slate-500 text-xs font-bold mb-2">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full p-3 rounded-xl border border-slate-100 bg-slate-50/30 text-right text-sm font-bold text-slate-400"
            />
          </div>
        </section>

        <section>
          <div className="flex items-center justify-start gap-2 mb-6 border-r-4 border-blue-600 pr-3">
            <h2 className="text-lg font-black text-slate-800">
              النبذة الشخصية
            </h2>
          </div>
          <div>
            <label className="block text-slate-500 text-xs font-bold mb-2">
              عن السنتر
            </label>
            <textarea
              rows={4}
              className="w-full p-4 rounded-2xl border border-slate-100 bg-slate-50/30 text-right text-xs font-bold text-slate-400 leading-loose outline-none focus:ring-2 focus:ring-blue-50"
              placeholder="اكتب نبذة مختصرة عن السنتر..."
            ></textarea>
          </div>
        </section>

        <button className="w-full py-4 bg-[#1B4B79] hover:bg-[#153a5e] text-white rounded-xl font-black text-sm transition-all shadow-md">
          حفظ التعديلات
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
