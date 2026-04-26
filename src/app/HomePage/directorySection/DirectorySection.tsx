import { ArrowLeft } from "lucide-react";
import centerCard1 from "../../../assets/Center Card/1.jpg";
import centerCard2 from "../../../assets/Center Card/2.png";
import centerCard3 from "../../../assets/Center Card/3.jpg";
import TeacherCardImg from "../../../assets/TeacherCard/TeacherCardImg.png";
import Link from "next/link";
import CenterCard from "@/app/components/Center/CenterCard";
import TeacherCard from "@/app/components/Teacher/TeacherCard";

const SectionHeader = ({ title }: { title: string }) => (
  <div className="bg-white rounded-2xl shadow-sm p-5 mb-8 flex items-center justify-between border border-slate-100">
    <h2 className="text-sm sm:xl md:text-2xl font-bold text-slate-800">
      {title}
    </h2>
    <button className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-medium">
      <Link className="flex items-center justify-center gap-2" href="/">
        <span>عرض الكل</span>
        <ArrowLeft size={18} />
      </Link>
    </button>
  </div>
);

export default function DirectorySection() {
  return (
    <main className="bg-slate-50 min-h-screen py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <section className="mb-20">
          <SectionHeader title="اكتشف أفضل السناتر التعليمية فى مصر" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CenterCard
              center={{
                id: 1,
                name: "سنتر النزهة التعليمي",
                location: "حي النزهة، القاهرة",
                rating: "4.8",
                image: centerCard1,
                stages: [
                  "المرحلة الثانوية",
                  "المرحلة الإعدادية",
                  "المرحلة الإبتدائية",
                ],
                systems: ["عربي", "لغات"],
              }}
            />
            <CenterCard
              center={{
                id: 2,
                name: "سنتر المتألق التعليمي",
                location: "فيصل, القاهرة",
                rating: "4.9",
                image: centerCard2,
                stages: [
                  "المرحلة الثانوية",
                  "المرحلة الإعدادية",
                  "المرحلة الإبتدائية",
                ],
                systems: ["عربي"],
              }}
            />
            <CenterCard
              center={{
                id: 3,
                name: "سنتر النزهة التعليمي",
                location: "العبودي, الفيوم",
                rating: "4.6",
                image: centerCard3,
                stages: ["المرحلة الثانوية"],
                systems: ["عربي"],
              }}
            />
            {/* Repeat for other centers... */}
          </div>
        </section>

        {/* Teachers Section */}
        <section className="mb-20">
          <SectionHeader title="تعلم أونلاين مع نخبة من افضل المدرسين في مصر" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Teacher */}
            <TeacherCard
              teacher={{
                id: 1,
                name: "أ. فاطمه أحمد",
                subject: "اللغة الإنجليزية",
                rating: "4.8",
                experience: "خبرة 8 سنين",
                avatar: TeacherCardImg,
                bio: "مدرسة متخصصة في تدريس اللغة الإنجليزية للمرحلة الابتدائية",
                stages: ["الصف الأول حتى الرابع الابتدائي"],
                systems: ["عربي"],
              }}
            />
            <TeacherCard
              teacher={{
                id: 2,
                name: "أ. فاطمه أحمد",
                subject: "اللغة الإنجليزية",
                rating: "4.8",
                experience: "خبرة 8 سنين",
                avatar: TeacherCardImg,
                bio: "مدرسة متخصصة في تدريس اللغة الإنجليزية للمرحلة الابتدائية",
                stages: ["الصف الأول حتى الرابع الابتدائي"],
                systems: ["عربي"],
              }}
            />
            <TeacherCard
              teacher={{
                id: 3,
                name: "أ. فاطمه أحمد",
                subject: "اللغة الإنجليزية",
                rating: "4.8",
                experience: "خبرة 8 سنين",
                avatar: TeacherCardImg,
                bio: "مدرسة متخصصة في تدريس اللغة الإنجليزية للمرحلة الابتدائية",
                stages: ["الصف الأول حتى الرابع الابتدائي"],
                systems: ["عربي"],
              }}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
