"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { ListFilter } from "lucide-react";

import TeachersHeader from "../components/Teacher/TeachersHeader";
import TeachersFilters from "../components/Teacher/TeachersFilters";
import TeacherCard from "../components/Teacher/TeacherCard";

import type { Teacher, TeachersResponse } from "@/types/teacher";
import { DOMAIN } from "@/utils/constants";

export default function TeachersPage() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [filteredTeachers, setFilteredTeachers] = useState<Teacher[]>([]);

  const [search, setSearch] = useState("");
  const [system, setSystem] = useState("");
  const [grade, setGrade] = useState("");
  const [subject, setSubject] = useState("");

  const [isFiltered, setIsFiltered] = useState(false);
  const [isSorted, setIsSorted] = useState(false);

  // ✅ fetch from API
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const res = await axios.get<TeachersResponse>(
          `${DOMAIN}/users?page=1&limit=10`,
        );

        setTeachers(res.data.data);
        setFilteredTeachers(res.data.data);
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    };

    fetchTeachers();
  }, []);

  // ✅ فلترة
  const handleFilter = () => {
    const result = teachers.filter((teacher) => {
      const matchSearch = teacher.name
        .toLowerCase()
        .includes(search.toLowerCase());

      // ⚠️ مؤقت لحد ما API يدعم باقي الفيلدز
      return matchSearch;
    });

    setFilteredTeachers(result);
    setIsFiltered(true);
    setIsSorted(false);
  };

  const showAllTeachers = () => {
    setSearch("");
    setSystem("");
    setGrade("");
    setSubject("");
    setFilteredTeachers(teachers);
    setIsFiltered(false);
  };

  // ✅ ترتيب
  const handleSort = () => {
    if (!isSorted) {
      const sorted = [...filteredTeachers]; // مفيش rating حالياً
      setFilteredTeachers(sorted);
      setIsSorted(true);
    } else {
      setFilteredTeachers(teachers);
      setIsSorted(false);
    }
  };

  return (
    <main className="bg-slate-50 min-h-screen pb-20" dir="rtl">
      <TeachersHeader />

      <TeachersFilters
        search={search}
        setSearch={setSearch}
        system={system}
        setSystem={setSystem}
        grade={grade}
        setGrade={setGrade}
        subject={subject}
        setSubject={setSubject}
        onFilter={handleFilter}
      />

      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-slate-700">
            النتائج ({filteredTeachers.length} مدرس)
          </h2>

          {isFiltered && <button onClick={showAllTeachers}>عرض الكل</button>}

          <div onClick={handleSort}>
            {isSorted ? "إرجاع الترتيب الطبيعي" : "ترتيب"}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>

        {filteredTeachers.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">لم يتم العثور على مدرسين</p>
          </div>
        )}
      </div>
    </main>
  );
}
