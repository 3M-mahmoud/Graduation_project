import {
  User,
  GraduationCap,
  BarChart3,
  BookOpen,
  Star,
  MessageCircle,
  FileText,
  CheckCircle2,
  ArrowBigLeft,
} from "lucide-react";
import { formatDate } from "../../helper";
import { OverviewSkeleton } from "./OverviewSkeleton";

const OverviewTab = ({ data }: any) => {
  if (!data?.id) return <OverviewSkeleton />;
  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <div
        data-aos="zoom-in"
        className="bg-white rounded-2xl p-8 shadow-sm border border-slate-50"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
            <User size={24} />
          </div>
          <h2 className="text-xl font-black text-slate-800">نبذة تعريفية</h2>
        </div>
        <p className="text-slate-600 leading-relaxed font-medium">
          {data.teacher?.bio}
        </p>
      </div>

      <div className="max-w-6xl flex flex-col md:flex-row gap-6">
        <div
          data-aos="fade-up"
          className="flex flex-col gap-6 w-full md:w-2/5"
        >
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-50 text-[#191C1D]">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-[#CBE7F5] text-[#48626E] rounded">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-2xl font-semibold ">المؤهلات العلمية</h3>
            </div>
            <p className="font-semibold text-[16px]">
              {data.teacher.educationalQualification}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-50 text-[#191C1D]">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-[#FFDBCC] text-[#722B00] rounded">
                <BarChart3 size={32} />
              </div>
              <h3 className="text-2xl font-semibold ">التخصصات</h3>
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
              <span className="px-3 py-1 bg-white text-[#003F87] rounded-md text-[16px] font-semibold border border-[#003F870D]">
                {data.teacher.educationalStage}
              </span>
            </div>

            <h4 className="text-sm font-black text-slate-800 mb-3 flex items-center gap-2">
              <BookOpen size={16} /> المراحل الدراسية:
            </h4>
            <div className="flex gap-2">
              {data.teacher.classRoom.map((grade) => (
                <span
                  key={grade}
                  className="px-2 py-1 bg-blue-50 text-slate-500 rounded text-[10px] font-bold"
                >
                  {grade}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-col gap-3 w-full md:w-3/5"
        >
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-50 text-[#191C1D]">
            <h3 className="text-2xl font-semibold mb-6 pb-2">إحصائيات سريعة</h3>
            <div className="space-y-4 text-[16px] font-semibold">
              <StatItem label="الخبرة" value={data.teacher.experienceYear} />
              <StatItem
                label="تاريخ الانضمام للمنصة"
                value={formatDate(data.createdAt)}
              />
              <StatItem
                label="سعر الحصة الواحدة"
                value={data.teacher.sharePrice}
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-50">
            <h3 className="text-2xl font-semibold text-[#191C1D] mb-8">
              المحتوى التعليمي
            </h3>
            <div className="grid grid-cols-1 gap-x-12 gap-y-6">
              <ContentItem
                icon={<MessageCircle size={20} />}
                label="الدروس المسجلة"
                count={data.teacher.lessonCounts}
                color="text-blue-600"
              />
              <ContentItem
                icon={<FileText size={20} />}
                label="المذكرات والملخصات"
                count={data.teacher.noteCounts}
                color="text-cyan-600"
              />
              <ContentItem
                icon={<CheckCircle2 size={20} />}
                label="الواجبات المنزلية"
                count={data.teacher.homeworkCounts}
                color="text-indigo-600"
              />
              <ContentItem
                icon={<BookOpen size={20} />}
                label="الاختبارات الدورية"
                count={data.teacher.courseCounts}
                color="text-blue-900"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="bg-white rounded-2xl p-6 shadow-sm border border-slate-50"
      >
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="p-2 shadow-lg shadow-[0px_1px_2px_rgba(0, 0, 0, 0.05)] rounded-lg">
              <Star
                className="text-yellow-400 fill-yellow-400"
                size={24}
              />{" "}
            </div>
            <h3 className="text-lg md:text-2xl font-semibold text-[#191C1D]">
              تقييمات الطلاب
            </h3>
          </div>

          <button className="text-[16px] font-normal text-[#003F87] hover:text-[#022955] cursor-pointer flex items-center gap-2">
            <span> مشاهدة الكل (320)</span>
            <ArrowBigLeft size={16} />
          </button>
        </div>

        <div className="space-y-4">
          <ReviewItem
            name="محمد أحمد"
            role="طالب بالصف الثالث الثانوي"
            text="أفضل معلم رياضيات تعاملت معه، شرحه مبسط جداً ويحل معنا أسئلة الامتحانات السابقة بالتفصيل، بفضله مادة التفاضل بقت أسهل مادة عندي."
            initials="م أ"
          />
          <ReviewItem
            name="سارة سامي"
            role="طالبة بالصف الثاني الثانوي"
            text="المذكرات بتاعته منظمة جداً وبتساعدني في المراجعة، الحصص اللايف كمان ممتازة وبيجيب على كل أسئلتنا."
            initials="س س"
          />
        </div>
      </div>
    </div>
  );
};

const StatItem = ({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) => (
  <div className="flex justify-between items-center text-sm">
    <span className="text-slate-400 font-bold">{label}</span>
    <span className="text-slate-700 font-black">{value}</span>
  </div>
);

const ContentItem = ({ icon, label, count, color }: any) => (
  <div className="flex items-center justify-between group cursor-pointer">
    <div className="flex items-center gap-3">
      <div className={`${color} bg-slate-50 p-2 rounded-lg`}>{icon}</div>
      <span className="font-bold text-slate-700">{label}</span>
    </div>
    <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded text-xs font-black">
      {count}
    </span>
  </div>
);

const ReviewItem = ({ name, role, text, initials }: any) => (
  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-4">
      <div className="flex gap-4 mb-3">
        <div className="w-12 h-12 bg-blue-100 text-blue-600 whitespace-nowrap rounded-xl flex items-center justify-center font-black">
          {initials}
        </div>
        <div>
          <h4 className="font-black text-slate-800 whitespace-nowrap">{name}</h4>
          <p className="text-xs text-slate-400 font-bold">{role}</p>
        </div>
      </div>
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>
    </div>
    <p className="text-slate-600 text-sm leading-relaxed font-medium">
      "{text}"
    </p>
  </div>
);

export default OverviewTab;
