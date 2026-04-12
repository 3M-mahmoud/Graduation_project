import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { Building2, Users } from "lucide-react";
import eduction1 from "../../../assets/Eduction/eduction-1.png";
import eduction2 from "../../../assets/Eduction/eduction-2.png";
import eduction3 from "../../../assets/Eduction/eduction-3.png";
import Link from "next/link";
import SectionHeader from "@/app/components/sectionHeader/SectionHeader";


interface EducationalStage {
  id: number;
  title: string;
  description: string;
  imageSrc: StaticImageData;
  imageAlt: string;
}


const educationalStages: EducationalStage[] = [
  {
    id: 1,
    title: "المرحلة الثانوية",
    description: "تعليم متكامل للصفوف من الأول الي الثالث الثانوي",
    imageSrc: eduction1,
    imageAlt: "مجموعة من الطلاب في المرحلة الثانوية",
  },

  {
    id: 2,
    title: "المرحلة الأعدادية",
    description: "اعداد منظم للطلاب فى الصفوف من الأول الي الثالث الاعدادى",
    imageSrc: eduction2,
    imageAlt: "مجموعة من الطلاب في المرحلة الإعدادية",
  },
  {
    id: 3,
    title: "المرحلة الأبتدائية",
    description: "تعليم أساسى متميز للصفوف من الأول إلى السادس الابتدائى",
    imageSrc: eduction3,
    imageAlt: "مجموعة من الطلاب في المرحلة الابتدائية",
  },
];


const StageCard: React.FC<{ stage: EducationalStage }> = ({ stage }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg transition-transform hover:scale-105">
   
      <div className="relative aspect-video w-full">
        <Image
          src={stage.imageSrc}
          alt={stage.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-6 md:p-8 flex flex-col gap-5">
        <h3 className="text-xl md:text-2xl font-semibold text-slate-800 text-right">
          {stage.title}
        </h3>
        <p className="text-base text-slate-600 leading-relaxed text-right min-h-[60px]">
          {stage.description}
        </p>

       
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-2">
         
          <button className=" rounded-xl bg-[#3770AC] text-white font-medium text-sm w-full sm:w-auto hover:bg-[#306298] transition-colors">
            {/* Custom SVG combined from Monitor and User Cog for detailed representation */}
            <Link
              href={"/"}
              className="flex items-center justify-center gap-2.5 px-6 py-3"
            >
              <span className="flex items-center gap-1.5">
                <Users size={18} className="ml-[-5px]" />
              </span>
              <span className="text-nowrap">مدرس أونلاين</span>
            </Link>
          </button>

          <button className="rounded-xl bg-[#2C7F58] text-white font-medium text-sm w-full sm:w-auto hover:bg-emerald-700 transition-colors">
            <Link
              href="/"
              className="flex items-center justify-center gap-2.5 px-6 py-3"
            >
              <span className="flex items-center gap-1.5">
                <Building2 size={20} />
              </span>
              <span className="text-nowrap">سنتر تعليمي</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

const EducationalStagesSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-8">
     
        <SectionHeader
          title="المراحل التعليمية"
          description="اختر المرحلة التعليمية المناسبة واكتشف السناتر والمدرسين المختصين"
        />

    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 xl:gap-12">
          {educationalStages.map((stage) => (
            <StageCard key={stage.id} stage={stage} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationalStagesSection;
