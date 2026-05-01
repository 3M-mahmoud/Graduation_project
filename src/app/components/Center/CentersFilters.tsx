"use client";
import { Search, MapPin, GraduationCap, ChevronDown } from "lucide-react";
export default function CentersFilters({
  search,
  setSearch,
  location,
  setLocation,
  stage,
  setStage,
  onFilter,
}: any) {
  return (
    <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
      <div data-aos="fade-up" className="bg-white text-[#9CA3AF] rounded-2xl shadow-xl p-4 md:p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
       
        <div className="relative">
          <Search className="absolute right-3 top-3" size={20} />
          <input
            type="text"
            placeholder="أبحث عن سنتر..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pr-10 pl-4 py-2.5 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div className="relative">
          <MapPin className="absolute right-3 top-3" size={20} />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full pr-10 text-black pl-4 py-2.5 border border-[#9CA3AF] rounded-xl appearance-none focus:outline-none cursor-pointer"
          >
            <option>أختر المحافظة</option>
            <option value="القاهرة">القاهرة</option>
            <option value="الجيزة">الجيزة</option>
            <option value="الإسكندرية">الإسكندرية</option>
          </select>
          <ChevronDown
            className="absolute left-3 top-3 text-slate-400"
            size={18}
          />
        </div>

      
        <div className="relative">
          <GraduationCap className="absolute right-3 top-3" size={20} />
          <select
            value={stage}
            onChange={(e) => setStage(e.target.value)}
            className="w-full pr-10 pl-4 py-2.5 border border-[#9CA3AF] text-black rounded-xl appearance-none focus:outline-none cursor-pointer"
          >
            <option>أختر المرحلة</option>
            <option value="المرحلة الإبتدائية">ابتدائي</option>
            <option value="المرحلة الإعدادية">إعدادي</option>
            <option value="المرحلة الثانوية">ثانوي</option>
          </select>
          <ChevronDown
            className="absolute left-3 top-3 text-slate-400"
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
