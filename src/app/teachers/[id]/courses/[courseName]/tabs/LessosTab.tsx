import { Video, Lock } from "lucide-react";

const LessonsTab = ({ searchQuery }: { searchQuery: string }) => {
  const lessons = [
    {
      id: 1,
      title: "الأعداد المركبة",
      duration: "45 دقيقة",
      date: "01 - 03 - 2025",
      isLocked: false,
    },
    {
      id: 2,
      title: "الأعداد المركبة - خواص الوحدة التخيلية",
      duration: "45 دقيقة",
      date: "01 - 03 - 2025",
      isLocked: false,
    },
    {
      id: 3,
      title: "تطبيقات علي خواص الوحدة التخيلية",
      duration: "45 دقيقة",
      date: "01 - 03 - 2025",
      isLocked: true,
    },
  ];
  const filtered = lessons.filter(l => l.title.includes(searchQuery));
  return (
    <div className="divide-y divide-[#F8FAFC]">
      {filtered.map((lesson) => (
        <div
        data-aos="zoom-in"
          key={lesson.id}
          className="p-8 flex flex-col md:flex-row items-center justify-between group"
        >
          
          <div className="flex items-center gap-8">
            <div className="text-center">
              <p className="text-[#9CA3AF] text-xs font-bold mb-1 uppercase">
                حصة
              </p>
              <p className="text-3xl/relaxed font-bold text-[#9CA3AF] leading-none">
                {lesson.id}
              </p>
            </div>
            <div
              className={`p-5 rounded-2xl ${
                lesson.isLocked
                  ? "bg-[#F4F4F4] text-[#231F20]"
                  : "bg-[#f6f6f6] text-[#0D2D2A]"
              }`}
            >
              {lesson.isLocked ? <Lock size={28} /> : <Video size={28} />}
            </div>
            <div className="text-right">
              <h3 className="text-sm md:text-[20px] font-black text-[#334155] mb-2">
                {lesson.title}
              </h3>
              <p className="text-[#94A3B8] text-xs font-bold tracking-wide">
                {lesson.duration} . {lesson.date}
              </p>
            </div>
          </div>
        
          <button
            className={`px-12 py-3.5 mt-4 md:mt-0 rounded-lg font-bold text-sm transition-all cursor-pointer ${
              lesson.isLocked
                ? "bg-[#F97216] text-white shadow-[0_8px_20px_-6px_rgba(249,115,22,0.45)]"
                : "bg-white text-[#64748B] shadow-md hover:bg-[#F8FAFC]"
            }`}
          >
            {lesson.isLocked ? "احجز الحصة" : "مشاهدة"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default LessonsTab;
