"use client";
import { Star, CheckCircle2, ChevronDown, ListFilter } from "lucide-react";

const ReviewsTab = () => {

  const reviews = [
    {
      id: 1,
      name: "محمد أحمد",
      grade: "طالب بالصف الثالث الثانوي",
      rating: 5,
      comment:
        "أفضل معلم رياضيات تعاملت معه، شرحه مبسط جداً ويحل معانا أسئلة الامتحانات السابقة بالتفصيل، بفضله مادة التفاضل بقت أسهل مادة عندي.",
    },
    {
      id: 2,
      name: "سارة سامي",
      grade: "طالبة بالصف الثاني الثانوي",
      rating: 4,
      comment:
        "المذكرات بتاعته منظمة جداً وبتساعدني في المراجعة، الحصص اللايف كمان ممتازة وبيرد على كل أسئلتنا.",
    },
    {
      id: 3,
      name: "سارة سامي",
      grade: "طالبة بالصف الثاني الثانوي",
      rating: 5,
      comment:
        "المذكرات بتاعته منظمة جداً وبتساعدني في المراجعة، الحصص اللايف كمان ممتازة وبيرد على كل أسئلتنا.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
     
      <div className="flex flex-col md:flex-row gap-6 mb-10">
      
        <div className="bg-white rounded-2xl py-8 px-20 border border-slate-100 shadow-sm flex flex-col items-center justify-center">
          <h2 className="text-6xl font-bold text-[#4B5563] mb-2 tracking-tighter">
            4.9
          </h2>
          <div className="flex gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={20} fill="#FFDBCC" color="#FFDBCC" />
            ))}
          </div>
          <p className="text-[#16313F] text-lg font-normal whitespace-nowrap">
            بناءً على 1,240 تقييم حقيقي
          </p>
        </div>
        <div className="p-8 bg-white rounded-2xl shadow-sm flex flex-col lg:flex-row">
          
          <div className="w-full flex flex-col justify-center ml-4">
            {[5, 4, 3, 2, 1].map((star, index) => (
              <div
                key={star}
                className="flex items-center gap-4 mb-3 last:mb-0"
              >
                <span className="text-[#191C1D] text-xs font-bold whitespace-nowrap w-8">
                  {star} نجوم
                </span>
                <div className="flex-1 h-1.5 bg-[#E1E3E4] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#003F87] rounded-full"
                    style={{ width: `${[85, 10, 3, 1, 1][index]}%` }}
                  ></div>
                </div>
                <span className="text-[#424752] text-sm font-normal w-6">
                  {[85, 10, 3, 1, 1][index]}%
                </span>
              </div>
            ))}
          </div>
          
          <div className="bg-[#F3F4F5] rounded-2xl p-8  mt-4 lg:mt-0 flex flex-col items-center text-center">
            <CheckCircle2
              size={32}
              strokeWidth={2.5}
              className="text-[#003F87]"
            />

            <h3 className="text-xl font-bold text-[#191C1D] mb-2">
              تقييمات موثقة
            </h3>
            <p className="text-[#424752] text-sm font-normal leading-relaxed">
              جميع التقييمات صادرة من طلاب مسجلين بالفعل في الدورات التعليمية
              لضمان المصداقية الكاملة
            </p>
          </div>
        </div>
      </div>


      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
      
        <div className="p-8 border-b border-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-2 shadow-lg shadow-[0px_1px_2px_rgba(0, 0, 0, 0.05)] rounded-lg">
              <Star className="text-[#EAB308] fill-[#EAB308]" size={24} />{" "}
            </div>
            <h3 className="text-2xl font-semibold text-[#191C1D]">
              تقييمات الطلاب
            </h3>
          </div>
          <div className="flex items-center gap-4">
            <button className="py-2 px-4 rounded-xl bg-[#E1E3E4] hover:bg-[#c0c2c3] text-sm font-bold text-[#191C1D] cursor-pointer flex items-center gap-2">
              <ListFilter size={16} />
              الأحدث أولاً
            </button>
            <button className="py-2 px-4 rounded-xl bg-[#E1E3E4] hover:bg-[#c0c2c3] text-sm font-bold text-[#191C1D] cursor-pointer flex items-center gap-2">
              <Star size={16} />
              جميع التقييمات
            </button>
          </div>
        </div>

        <div>
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-8 hover:bg-slate-50/30 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 font-black text-lg">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-slate-800">
                      {review.name}
                    </h4>
                    <p className="text-slate-400 text-[10px] font-bold">
                      {review.grade}
                    </p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={14}
                      fill={s <= review.rating ? "#FACC15" : "none"}
                      color={s <= review.rating ? "#FACC15" : "#CBD5E1"}
                    />
                  ))}
                </div>
              </div>
              <p className="text-slate-500 font-bold leading-relaxed pr-16 text-sm">
                "{review.comment}"
              </p>
            </div>
          ))}
        </div>

       
        <button className="py-3 px-12 mb-8 border-2 border-[#003F87] bg-white rounded-xl text-[16px] font-bold text-[#003F87] hover:bg-[#003F87] hover:text-white cursor-pointer mt-5 mx-auto block">
          أضف تقييمك الان
        </button>
      </div>
    </div>
  );
};

export default ReviewsTab;
