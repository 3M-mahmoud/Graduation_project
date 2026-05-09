"use client";

import { useState, useEffect } from "react";
import { Search, Plus, MoreVertical } from "lucide-react";
import AddTeacherModal from "@/app/components/dashboard/center/AddTeacherModal";
import { DOMAIN } from "@/utils/constants";
import axios from "axios";

const TeachersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchTeachers = async () => {
      try {
        setLoading(true);

        let category = activeCategory;
        if (activeCategory === "الكل") category = "";

        const token = localStorage.getItem("token");

        const res = await axios.get(`${DOMAIN}center-dashboard/teachers`, {
          params: {
            name: searchTerm,
            educationalStage: category,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
          signal: controller.signal,
        });

        setData(res?.data?.data || []);
      } catch (err: any) {
        if (err.name !== "CanceledError") {
          console.error("Error fetching teachers:", err);
        }
      } finally {
        setLoading(false);
      }
    };

    // debounce علشان نقلل عدد requests
    const delayDebounce = setTimeout(() => {
      fetchTeachers();
    }, 400);

    return () => {
      clearTimeout(delayDebounce);
      controller.abort();
    };
  }, [searchTerm, activeCategory]);

  return (
    <div className="max-w-6xl mx-auto bg-white p-6 rounded-2xl">
      {/* Header */}
      <div className="mb-10 text-right">
        <h1 className="text-2xl font-bold text-[#134E4A]">المدرسين</h1>
        <p className="text-[#424752] font-normal text-[16px] mt-1">
          إدارة وتنظيم مدرسين السنتر
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="ابحث باسم المدرس أو الحصة .."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 pr-12 rounded-lg border border-[#9CA3AF] shadow-sm outline-none text-right"
          />
          <Search
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
            size={18}
          />
        </div>

        <div className="flex items-center gap-2 pb-2">
          {[
            "الكل",
            "ابتدائي",
            "اعدادي",
            "ثانوي",
          ].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-lg ${
                activeCategory === cat
                  ? "bg-[#0D2D2A] text-white"
                  : "bg-white text-slate-400"
              }`}
            >
              {cat}
            </button>
          ))}

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#F97216] text-white px-5 py-2 rounded-lg flex items-center whitespace-nowrap gap-2"
          >
            إضافة مدرس <Plus size={18} />
          </button>
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center py-10 text-slate-400">
          جاري تحميل المدرسين...
        </div>
      )}

      {/* Teachers */}
      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-[2.5rem] border p-6 shadow-sm"
            >
              <div className="flex justify-between mb-6">
                <div className="text-right">
                  <h4 className="font-medium text-lg">{teacher.name}</h4>
                  <p className="text-[#DD5A00] font-semibold">
                    {teacher.studyMaterial}
                  </p>
                </div>
                <MoreVertical />
              </div>

              <div className="grid grid-cols-3 text-center text-xs gap-3">
                <div>
                  <p>الصف</p>
                  <p>{teacher.level}</p>
                </div>
                <div>
                  <p>النظام</p>
                  <p>{teacher.system}</p>
                </div>
                <div>
                  <p>السعر</p>
                  <p>{teacher.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty */}
      {!loading && data.length === 0 && (
        <div className="text-center py-20 text-slate-400">لا يوجد مدرسين</div>
      )}

      <AddTeacherModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default TeachersPage;
