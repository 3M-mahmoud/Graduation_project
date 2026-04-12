import {
  GraduationCap,
  Globe,
  Phone,
  Mail,
  Info,
  BookOpen,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import iconImage from "../../../assets/ceterProfile/icon.png";
export const ProfileSidebar = ({ data }: any) => {
  return (
    <aside className="space-y-6 sticky top-16">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2 text-2xl">
          <Info size={18} className="text-orange-500" /> عن السنتر
        </h3>
        <p className="text-[#4B5563] text-sm leading-relaxed mb-6">
          {data.bio}
        </p>

        <div className="space-y-4 pt-4 border-t border-slate-50">
          <div className="flex items-center gap-2 mb-2 text-[#204658]">
            <BookOpen size={26} />
            <p className="text-xl">المواد التعليمية :</p>
          </div>
          <div className="flex flex-wrap gap-1">
            {data.subjects.map((s: string) => (
              <span
                key={s}
                className="bg-[#E2F5FE] text-[#0F3D2E] text-[12px] px-3 py-1 rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 mb-2 text-[#204658]">
            <GraduationCap size={26} />
            <p className="text-xl">المراحل التعليمية</p>
          </div>
          <div className="flex flex-wrap gap-1">
            {data.stages.map((s: string) => (
              <span
                key={s}
                className="bg-[#E2F5FE] text-[#0F3D2E] text-[12px] px-3 py-1 rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 mb-2 text-[#204658]">
            <Globe size={24} />
            <p className="text-xl">النظام الدراسي :</p>
          </div>
          <div className="flex flex-wrap gap-1">
            {data.systems.map((s: string) => (
              <span
                key={s}
                className="bg-[#E2F5FE] text-[#0F3D2E] text-[12px] px-3 py-1 rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <h3 className="font-bold text-slate-800 mb-4">تواصل معنا</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-9 h-9 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
              <Phone size={18} />
            </div>
            <span className="text-sm text-slate-600 font-medium" dir="ltr">
              {data.contact.phones}
            </span>
          </div>
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
              <Smartphone size={18} />
            </div>
            <span className="text-sm text-slate-600 font-medium" dir="ltr">
              {data.contact.whats}
            </span>
          </div>
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <Mail size={18} />
            </div>
            <span className="text-sm text-slate-600 font-medium">
              {data.contact.email}
            </span>
          </div>
          <div className="icon-image mt-16">
            <Image src={iconImage} alt="icon image" />
          </div>
        </div>
      </div>
    </aside>
  );
};
