import { Calendar, Clock, Users, BookOpen, Star } from "lucide-react";
import { useRouter } from "next/navigation";
interface CourseCardProps {
  title: string;
  grade: string;
  day: string;
  time: string;
  students: number;
  lessons: number;
  rating: number;
  teacherId: number;
}

const CourseCard = ({
  title,
  grade,
  day,
  time,
  students,
  lessons,
  rating,
  teacherId,
}: CourseCardProps) => {
  const router = useRouter();
  const handleNavigation = () => {
    router.push(`/teachers/${teacherId}/courses/${title}`);
  };
  return (
    <div data-aos="zoom-in" className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col p-5  transition-shadow">
     
      <div className="flex flex-col items-start mb-4">
        <h3 className="text-xl font-bold text-[#191C1D] mb-1">{title}</h3>
        <p className="text-[#424752] text-sm font-normal flex items-center gap-1">
          <BookOpen size={14} />
          {grade}
        </p>
      </div>

   
      <div className="bg-[#a6a6a624] rounded-lg p-4 mb-4 flex flex-col gap-2 border border-[#C4C4C4]">
        <div className="flex items-center gap-2 text-[#424752] text-sm">
          <Calendar size={16} />
          <span className="font-normal">{day}</span>
        </div>
        <div className="flex items-center gap-2 text-[#424752] text-sm">
          <Clock size={16} />
          <span className="font-bold">{time}</span>
        </div>
      </div>

   
      <div className="flex items-center justify-between border-t border-b border-[#E7E8E9] py-4 mb-5 text-sm font-bold text-[#727784]">
        <div className="flex flex-col items-center">
          <span className="mb-1">الطلاب</span>
          <span className="text-[#2E637C]">{students}</span>
        </div>
        <div className="flex flex-col items-center border-x border-[#E7E8E9] px-6">
          <span className="mb-1">الدروس</span>
          <span className="text-[#2E637C]">{lessons}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="mb-1">التقييم</span>
          <div className="flex items-center gap-1 text-[#FFC700] font-black">
            <Star size={14} fill="currentColor" />
            <span>{rating}</span>
          </div>
        </div>
      </div>

   
      <button
        onClick={handleNavigation}
        className="w-full py-3 mb-4 rounded-lg text-[#5A5A5A] font-bold shadow-md hover:bg-slate-50 transition-colors cursor-pointer"
      >
        محتوى الدورة
      </button>
    </div>
  );
};

export default CourseCard;
