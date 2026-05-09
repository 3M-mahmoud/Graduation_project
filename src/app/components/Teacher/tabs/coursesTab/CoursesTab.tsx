import { Search, ListFilter } from "lucide-react";
import { useEffect, useState, useMemo, useCallback } from "react";
import CourseCard from "./CourseCard";
import { DOMAIN } from "@/utils/constants";

const CoursesTab = ({
  userId,
  teacherId,
  setCacheCourse,
  cashCourses,
}: any) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeGrade, setActiveGrade] = useState("الثالث الثانوي");

  const getData = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${DOMAIN}courses?id=${teacherId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const json = await res.json();
      setCacheCourse(json.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  }, [teacherId, setCacheCourse]);

  useEffect(() => {
    getData();
  }, [getData]);

const filteredCourses = useMemo(() => {
    const allCourses = Array.isArray(cashCourses) 
      ? cashCourses 
      : (cashCourses?.courses || []);

    return allCourses.filter((course: any) => {
      const search = searchQuery.trim().toLowerCase();
      const matchesSearch = (course?.title || "")
        .toLowerCase()
        .includes(search);

      const serverGrade = (course?.classRoom || "").trim();
      const UIActiveGrade = activeGrade.trim();

     
      const matchesGrade = 
        !UIActiveGrade || 
        serverGrade.includes(UIActiveGrade) || 
        UIActiveGrade.includes(serverGrade);

      return matchesGrade && matchesSearch;
    });
  }, [cashCourses, activeGrade, searchQuery]);


  const studeMaterial = ["الثالث الثانوي", "الثاني الثانوي", "الأول الثانوي"];

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white rounded-lg">
      <div
        data-aos="fade-up"
        className="p-4 shadow-sm border border-[#E5E6EC] mb-4 flex flex-col md:flex-row items-center gap-8 rounded-lg"
      >
        <div className="flex flex-col md:flex-row items-center gap-2 overflow-x-auto pb-2 md:pb-0 order-2 md:order-1">
          {studeMaterial.map((grade) => (
            <button
              key={grade}
              onClick={() => setActiveGrade(grade)}
              className={`px-6 py-2  text-[16px] whitespace-nowrap cursor-pointer transition-all ${
                activeGrade === grade
                  ? "bg-[#2E637C] text-white rounded-lg font-normal"
                  : "text-[#424752] font-semibold hover:bg-slate-50"
              }`}
            >
              {grade}
            </button>
          ))}
        </div>

        <div className="relative flex-1 w-full order-1 md:order-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="البحث عن دورة..."
            className="w-full border-[0.5px] border-[#BCBABA] rounded-[10px] py-2 px-12 focus:outline-none focus:ring-2 focus:ring-[#2E637C]/20 text-right font-bold text-[#424752]"
          />
          <Search
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#B6B8BC]"
            size={25}
          />
        </div>

        <div className="order-3">
          <ListFilter className="text-black cursor-pointer" size={20} />
        </div>
      </div>

      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-500">
          {filteredCourses.map((course: any) => (
            <CourseCard key={course?.id} course={course} userId={userId} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
          <p className="text-slate-400 font-bold text-lg">
            لا توجد دورات تطابق بحثك حالياً.
          </p>
        </div>
      )}
    </div>
  );
};

export default CoursesTab;
