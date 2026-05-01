import { Search, ListFilter } from "lucide-react";
import { useMemo, useState } from "react";
import CourseCard from "./CourseCard";
import { useParams } from "next/navigation";

const CoursesTab = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeGrade, setActiveGrade] = useState("الثالث الثانوي");
  const params = useParams();
  const teacherId = params.id;

  const allCourses = [
    {
      title: "الجبر",
      grade: "الثالث الثانوي",
      day: "الاثنين",
      time: "09:00 صباحاً",
      students: 72,
      lessons: 6,
      rating: 4.8,
    },
    {
      title: "التفاضل",
      grade: "الثالث الثانوي",
      day: "الاثنين",
      time: "09:00 صباحاً",
      students: 48,
      lessons: 4,
      rating: 4.5,
    },
    {
      title: "التكامل",
      grade: "الثالث الثانوي",
      day: "الاثنين",
      time: "09:00 صباحاً",
      students: 16,
      lessons: 1,
      rating: 3.1,
    },
    {
      title: "استاتيكا",
      grade: "الثالث الثانوي",
      day: "الاثنين",
      time: "09:00 صباحاً",
      students: 21,
      lessons: 4,
      rating: 3.9,
    },
    {
      title: "ديناميكا",
      grade: "الثالث الثانوي",
      day: "الاثنين",
      time: "09:00 صباحاً",
      students: 31,
      lessons: 2,
      rating: 3.7,
    },
    {
      title: "هندسة فراغية",
      grade: "الثالث الثانوي",
      day: "الاثنين",
      time: "09:00 صباحاً",
      students: 1,
      lessons: 1,
      rating: 4.6,
    },

    {
      title: "فيزياء",
      grade: "الثاني الثانوي",
      day: "الثلاثاء",
      time: "10:00 صباحاً",
      students: 100,
      lessons: 10,
      rating: 4.9,
    },
    {
      title: "كيمياء",
      grade: "الأول الثانوي",
      day: "الأربعاء",
      time: "12:00 مساءً",
      students: 150,
      lessons: 8,
      rating: 4.2,
    },
  ];

  const filteredCourses = useMemo(() => {
    return allCourses.filter((course) => {
      const matchesGrade = course.grade === activeGrade;
      const matchesSearch = course.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesGrade && matchesSearch;
    });
  }, [searchQuery, activeGrade]);

  const grades = ["الثالث الثانوي", "الثاني الثانوي", "الأول الثانوي"];

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white rounded-lg">
      <div data-aos="fade-up" className="p-4 shadow-sm border border-[#E5E6EC] mb-4 flex flex-col md:flex-row items-center gap-8 rounded-lg">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 order-2 md:order-1">
          {grades.map((grade) => (
            <button
              key={grade}
              onClick={() => setActiveGrade(grade)}
              className={`px-6 py-2  text-[16px] whitespace-nowrap cursor-pointer ${
                activeGrade === grade
                  ? "bg-[#2E637C] text-white rounded-lg font-normal"
                  : "text-[#424752] font-semibold"
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
            className="w-full border-[0.5px] border-[#BCBABA] rounded-[10px] py-2 px-12 focus:outline-none focus:ring-2 focus:ring-blue-100 text-right font-bold text-[#B6B8BC]"
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
          {filteredCourses.map((course, index) => (
            <CourseCard key={index} {...course} teacherId={Number(teacherId)} />
          ))}
        </div>
      ) : (
        
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
          <p className="text-slate-400 font-bold text-lg">
            لا توجد دورات تطابق بحثك في هذا الصف.
          </p>
        </div>
      )}
    </div>
  );
};

export default CoursesTab;
