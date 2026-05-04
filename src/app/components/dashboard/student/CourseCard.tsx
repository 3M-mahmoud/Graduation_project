interface CourseCardProps {
  subject: string;
  teacher: string;
  icon: string;
}

const CourseCard = ({ subject, teacher, icon }: CourseCardProps) => {
  return (
    <div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center group">
      {/* أيقونة المادة */}
      <div className="w-20 h-20 bg-[#FDF7E7] rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>

      {/* تفاصيل المادة */}
      <h3 className="text-lg font-black text-slate-800 mb-1">{subject}</h3>
      <p className="text-slate-400 font-bold text-sm mb-6">{teacher}</p>

      {/* زر الاستكمال */}
      <button className="w-full py-4 bg-[#062D27] text-white rounded-xl font-black text-base hover:bg-[#083a32] transition-colors shadow-lg cursor-pointer">
        استكمال التعلم
      </button>
    </div>
  );
};

export default CourseCard;
