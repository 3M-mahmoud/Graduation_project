import {
  Building2,
  MonitorPlay,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  GraduationCap,
  Users,
} from "lucide-react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-[#333333] text-white pt-20 pb-10" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 text-center mb-24">
        <h2 className="text-3xl md:text-4xl font-black mb-6">
          ابدأ رحلتك التعليمية اليوم
        </h2>
        <p className="text-slate-300 text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
          انضم الي الاف الطلاب أو المدرسين أو السناتر التعليمية الذين يحققون
          اهدافهم التعليمية مع سنتر مصر
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-[2.5rem] p-8 text-slate-800 flex flex-col items-center shadow-xl">
            <div className="bg-slate-50 p-4 rounded-2xl mb-4">
              <Users className="text-slate-700" size={32} />
            </div>
            <h3 className="text-xl font-black mb-3">للطلاب</h3>
            <p className="text-slate-500 text-sm mb-8">
              تعلم بسهولة و ابحث عن أفضل المدرسين والسناتر
            </p>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-all">
              سجل كطالب
            </button>
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 text-slate-800 flex flex-col items-center shadow-xl">
            <div className="bg-slate-50 p-4 rounded-2xl mb-4">
              <MonitorPlay className="text-slate-700" size={32} />
            </div>
            <h3 className="text-xl font-black mb-3">للمدرسين</h3>
            <p className="text-slate-500 text-sm mb-8">
              انضم وابدأ رحلتك في التدريس أونلاين بكل سهولة
            </p>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-all">
              سجل كمدرس أونلاين
            </button>
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 text-slate-800 flex flex-col items-center shadow-xl">
            <div className="bg-slate-50 p-4 rounded-2xl mb-4">
              <Building2 className="text-slate-700" size={32} />
            </div>
            <h3 className="text-xl font-black mb-3">للسناتر</h3>
            <p className="text-slate-500 text-sm mb-8">
              أنشئ صفحتك وأدر حصصك ومواعيدك بكل سهولة
            </p>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-all">
              سجل كسنتر تعليمي
            </button>
          </div>
        </div>
      </div>

      <hr className="border-slate-600 mb-16 max-w-7xl mx-auto" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-right">
        <div>
          <div className="flex items-center gap-2 text-2xl font-bold mb-6">
            <GraduationCap size={32} />
            <span>سنتر مصر</span>
          </div>
          <p className="text-slate-400 leading-loose text-sm">
            منصة تعليمية مصرية تجمع بين السناتر والمدرسين في مكان واحد، لتوفير
            أفضل تجربة تعليمية للطلاب في جميع المراحل الدراسية.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">روابط سريعة</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                عن المنصة
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                الأسئلة الشائعة
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                سياسة الخصوصية
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                شروط الاستخدام
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">تواصل معنا</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                اتصل بنا
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                الدعم الفني
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">تابعنا على</h4>
          <div className="flex gap-4">
            <Link
              href="#"
              className="p-2 bg-slate-700 rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="#"
              className="p-2 bg-slate-700 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="#"
              className="p-2 bg-slate-700 rounded-lg hover:bg-pink-600 transition-colors"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="#"
              className="p-2 bg-slate-700 rounded-lg hover:bg-sky-500 transition-colors"
            >
              <Twitter size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-slate-700 text-center text-white text-sm">
        سنتر مصر . جميع الحقوق محفوظة {new Date().getFullYear()}
      </div>
    </footer>
  );
}
