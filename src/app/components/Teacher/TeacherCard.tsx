import Image from "next/image";
import { Star, Globe, Clock, Pencil, Tags } from "lucide-react";
import Badge from "../ui/Badge";
import Link from "next/link";
import { Teacher } from "@/types/teacher";

type Props = {
  teacher: Teacher;
};
export default function TeacherCard({ teacher }: Props) {
  return (
    <div data-aos="zoom-in" className="bg-white rounded-[2rem] shadow-md border border-slate-50 p-6 flex flex-col text-right h-full transition-transform hover:scale-105 hover:shadow-xl">
      <div className="flex flex-row items-center gap-3 mb-4">
        <div className="relative w-20 h-20 rounded-full overflow-hidden mb-2 border-2 border-slate-100">
          <Image
            src={teacher.avatar}
            alt={teacher.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-800">{teacher.name}</h3>
          <p className="text-orange-500 font-bold">{teacher.subject}</p>
          <div className="flex items-center gap-1 text-[#D09539] font-bold text-sm">
            <Star size={14} fill="currentColor" />
            <span className="text-[#5F5F60]">{teacher.rating}</span>
          </div>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <Clock size={16} />
          <span>{teacher.experience}</span>
        </div>
        <div className="flex items-start gap-2 text-slate-500 text-sm leading-relaxed">
          <Pencil size={16} className="mt-1 shrink-0" />
          <span className="text-right">{teacher.bio}</span>
        </div>

        <div>
          <p className="text-[#204658] text-sm mb-2 flex items-center gap-2">
            <Tags size={14} /> المراحل التعليمية:
          </p>
          <div className="flex flex-wrap gap-2">
            {teacher.stages.map((s: string) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[#204658] text-sm mb-2 flex items-center gap-2">
            <Globe size={14} /> النظام الدراسي:
          </p>
          <div className="flex flex-wrap gap-2">
            {teacher.systems.map((s: string) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto flex gap-3">
        <button className="flex-1 py-2 bg-[#204658] text-white rounded-lg text-sm font-bold hover:bg-slate-700">
          <Link className="flex items-center justify-center" href={`/teachers/${teacher.id}`}>
            عرض الصفحة الشخصية
          </Link>
        </button>
        <button className="bg-[#F97216] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-orange-600">
          <Link className="flex items-center justify-center" href="/">
            احجز الآن
          </Link>
        </button>
      </div>
    </div>
  );
}
