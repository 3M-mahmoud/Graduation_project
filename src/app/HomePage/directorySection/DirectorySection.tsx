import { ArrowLeft } from "lucide-react";
import centerCard1 from "../../../assets/Center Card/1.jpg";
import centerCard2 from "../../../assets/Center Card/2.png";
import centerCard3 from "../../../assets/Center Card/3.jpg";
import TeacherCardImg from "../../../assets/TeacherCard/TeacherCardImg.png";
import Link from "next/link";
import CenterCard from "@/app/components/Center/CenterCard";
import TeacherCard from "@/app/components/Teacher/TeacherCard";
import { DOMAIN } from "@/utils/constants";
import axios from "axios";

const SectionHeader = ({ title, role }: { title: string; role: string }) => (
  <div className="bg-white rounded-2xl shadow-sm p-5 mb-8 flex items-center justify-between border border-slate-100">
    <h2 className="text-sm sm:xl md:text-2xl font-bold text-slate-800">
      {title}
    </h2>
    <button className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-medium">
      <Link
        className="flex items-center justify-center gap-2"
        href={`/${role}`}
      >
        <span>عرض الكل</span>
        <ArrowLeft size={18} />
      </Link>
    </button>
  </div>
);

export default async function DirectorySection() {
  const { data } = await axios.get(`${DOMAIN}users/home-page`, {
    // method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  // const data = await res.json();
  console.log(data);

  return (
    <main className="bg-slate-50 min-h-screen py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <section className="mb-20">
          <SectionHeader
            title="اكتشف أفضل السناتر التعليمية فى مصر"
            role="centers"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.data?.centers?.map((center: any, i) => (
              <CenterCard key={i} center={center} />
            ))}
          </div>
        </section>

        <section className="mb-20">
          <SectionHeader
            title="تعلم أونلاين مع نخبة من افضل المدرسين في مصر"
            role="teachers"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Teacher */}
            {data.data?.teachers?.map((teacher: any, i) => (
              <TeacherCard key={i} teacher={teacher} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
