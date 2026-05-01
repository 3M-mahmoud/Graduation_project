import React from "react";
import {
  Search,
  Calendar,
  MonitorPlay,
  Users,
  Wallet,
  Star,
} from "lucide-react";
import SectionHeader from "../../components/sectionHeader/SectionHeader";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
}

const FeatureCard = ({
  title,
  description,
  icon,
  iconBg,
  iconColor,
}: FeatureProps) => (
  <div  data-aos="flip-left" className="bg-white p-8 rounded-[2rem] shadow-md hover:shadow-xl transition-shadow flex flex-col items-center text-center border border-slate-50">
    <div
      className={`w-14 h-14 ${iconBg} ${iconColor} rounded-2xl flex items-center justify-center mb-6`}
    >
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-4">{title}</h3>
    <p className="text-slate-500 leading-relaxed text-sm md:text-base">
      {description}
    </p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      title: "بحث متقدم",
      description:
        "ابحث عن المدرس أو السنتر المناسب حسب المادة والمرحلة والمنطقة.",
      icon: <Search size={28} />,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      title: "جدولة مرنة",
      description: "مواعيد مرنة تناسب جدولك الدراسي مع إمكانية الحجز المباشر.",
      icon: <Calendar size={28} />,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-500",
    },
    {
      title: "حصص اونلاين",
      description:
        "تعلم من المنزل مع حصص تفاعلية عبر الإنترنت مع مدرسين معتمدين ومؤهلين.",
      icon: <MonitorPlay size={28} />,
      iconBg: "bg-purple-50",
      iconColor: "text-purple-500",
    },
    {
      title: "نظام تفاعلي",
      description:
        "صفحات تفاعلية تجمع بين الطلاب والمدرسين والسناتر في مكان واحد.",
      icon: <Users size={28} />,
      iconBg: "bg-rose-50",
      iconColor: "text-rose-500",
    },
    {
      title: "دفع آمن",
      description:
        "طرق دفع متعددة وآمنة عبر الكارت البنكي والمحفظة الإلكترونية وفوري.",
      icon: <Wallet size={28} />,
      iconBg: "bg-orange-50",
      iconColor: "text-orange-500",
    },
    {
      title: "تقييمات شفافة",
      description: "نظام تقييم شامل يساعدك في اختيار أفضل مدرس أو سنتر.",
      icon: <Star size={28} />,
      iconBg: "bg-sky-50",
      iconColor: "text-sky-500",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-16 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="لماذا سنتر مصر؟"
          description="نوفر لك أفضل تجربة من خلال مجموعة من المميزات الفريدة"
        />

  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
