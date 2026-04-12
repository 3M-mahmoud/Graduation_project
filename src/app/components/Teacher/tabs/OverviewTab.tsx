"use client";
const teacherDetails = [
  { title: "المؤهلات العلمية", content: "دكتوراة في الرياضيات - جامعة القاهرة" },
  { title: "المراحل التعليمية", content: "الصف الأول الثانوي - الصف الثاني الثانوي - الصف الثالث الثانوي" },
  { title: "النظام الدراسي", content: "عربي" },
  { title: "السناتر التي يدرس بها", content: "سنتر النجاح التعليمي" },
];

const quickStats = [
  { label: "الخبرة", value: "25 أعوام" },
  { label: "تاريخ الانضمام للمنصة", value: "11/7/2025" },
  { label: "الطلاب", value: "+ 500" },
  { label: "التقييمات", value: "4.9/5" },
];

export default function OverviewTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in duration-700" dir="rtl">
      
    
      <div className="lg:col-span-2 space-y-4">
        {teacherDetails.map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm transition-all hover:shadow-md"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
            <p className="text-slate-500 font-medium text-sm leading-relaxed">
              {item.content}
            </p>
          </div>
        ))}
      </div>

  
      <div className="space-y-6">
        
    
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-slate-800 mb-6">إحصائيات سريعة</h3>
          <div className="space-y-5">
            {quickStats.map((stat, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-[#4B5563] font-normal text-lg">{stat.label}</span>
                <span className="text-[#204658] font-norma text-[16px]">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

       
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-slate-800 mb-4 text-center md:text-right">سعر الحصة</h3>
          <div className="flex flex-col items-center md:items-start">
             <div className="flex items-baseline gap-1">
                <span className="text-lg font-medium text-[#4B5563]">200-350</span>
                <span className="text-lg font-medium text-[#4B5563]">جنيه</span>
             <span className="text-sm text-black mr-1 font-light">للحصة الواحدة</span>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}