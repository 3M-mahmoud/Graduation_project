import Image from "next/image";
import { Star, MapPin, GraduationCap, Globe } from "lucide-react";
import Badge from "../ui/Badge";
import Link from "next/link";
import { Center } from "@/types/listing";
type Props = {
  center: Center;
};
export default function CenterCard({ center }: Props) {
  return (
    <div className="bg-white rounded-[2rem] shadow-md border border-slate-50 overflow-hidden flex flex-col h-full transition-transform hover:scale-105 hover:shadow-xl">
      <div className="relative h-48 w-full">
        <Image
          src={center.image}
          alt={center.name}
          fill
          className="object-center"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-[#081A28]">{center.name}</h3>
          <div className="flex items-center gap-1 text-orange-500 font-bold">
            <Star size={16} fill="currentColor" />
            <span className="text-black">{center.rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-slate-400 text-sm mb-4">
          <MapPin size={14} />
          <span>{center.location}</span>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <p className="text-[#204658] text-sm mb-2 flex items-center gap-2">
              <GraduationCap size={16} /> المراحل التعليمية:
            </p>
            <div className="flex flex-wrap gap-2">
              {center.stages.map((s: string) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[#204658] text-sm mb-2 flex items-center gap-2">
              <Globe size={16} /> النظام الدراسي
            </p>
            <div className="flex flex-wrap gap-2">
              {center.systems.map((s: string) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-auto flex gap-3">
          <button className="flex-1 py-2 bg-slate-800 text-white rounded-lg text-sm font-bold hover:bg-slate-700">
            <Link
              className="flex items-center justify-center"
              href={`/centers/${center.id}`}
            >
              عرض الصفحة الشخصية
            </Link>
          </button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-orange-600">
            <Link className="flex items-center justify-center" href="/">
              احجز الآن
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
