import Cookies from "js-cookie";
import { Calendar, Clock, Users, BookOpen, Star } from "lucide-react";
import { useRouter } from "next/navigation";
// interface CourseCardProps {
//   title: string;
//   grade: string;
//   day: string;
//   time: string;
//   students: number;
//   lessons: number;
//   rating: number;
//   teacherId: number;
// }

interface CourseCardProps {
  id: string;
  teacherId: string;
  time: string;
  classRoom: string;
  studyMaterial: string;
  lessonCounts: number;
  studentCounts: number;
}

const CourseCard = ({
  course,
  teacherId,
}: {
  course: CourseCardProps;
  teacherId: string;
}) => {
  // const router = useRouter();
  // const handleNavigation = () => {
  //   router.push(`/teachers/${teacherId}/courses/${title}`);
  // };

  const { time, classRoom, studyMaterial, lessonCounts, studentCounts } =
    course;

  const router = useRouter();

  if (!course) return <div>loading...</div>;

  const handleNavigation = () => {
    const token = Cookies.get("token");
    if (token) {
      router.push(`/teachers/${teacherId}/courses/${studyMaterial}`);
    } else {
      router.push(`/login`);
    }
  };
  return (
    <div
      data-aos="zoom-in"
      className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col p-5  transition-shadow"
    >
      <div className="flex flex-col items-start mb-4">
        <h3 className="text-xl font-bold text-[#191C1D] mb-1">
          {studyMaterial}
        </h3>
        <p className="text-[#424752] text-sm font-normal flex items-center gap-1">
          <BookOpen size={14} />
          {classRoom}
        </p>
      </div>

      <div className="bg-[#a6a6a624] rounded-lg p-4 mb-4 flex flex-col gap-2 border border-[#C4C4C4]">
        <div className="flex items-center gap-2 text-[#424752] text-sm">
          <Calendar size={16} />
          <span className="font-normal">{time}</span>
        </div>
        <div className="flex items-center gap-2 text-[#424752] text-sm">
          <Clock size={16} />
          <span className="font-bold">{time}</span>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-b border-[#E7E8E9] py-4 mb-5 text-sm font-bold text-[#727784]">
        <div className="flex flex-col items-center">
          <span className="mb-1">الطلاب</span>
          <span className="text-[#2E637C]">{studentCounts}</span>
        </div>
        <div className="flex flex-col items-center border-x border-[#E7E8E9] px-6">
          <span className="mb-1">الدروس</span>
          <span className="text-[#2E637C]">{lessonCounts}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="mb-1">التقييم</span>
          <div className="flex items-center gap-1 text-[#FFC700] font-black">
            <Star size={14} fill="currentColor" />
            <span>{}</span>
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
