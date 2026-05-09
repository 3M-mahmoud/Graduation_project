"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import CenterCard from "@/app/components/Center/CenterCard";
import TeacherCard from "@/app/components/Teacher/TeacherCard";
import { DOMAIN } from "@/utils/constants";
import axios from "axios";
import { useEffect, useState } from "react";

const SectionHeader = ({ title, type }: { title: string; type: string }) => (
  <div className="bg-white rounded-2xl shadow-sm p-5 mb-8 flex items-center justify-between border border-slate-100">
    <h2 className="text-sm md:text-2xl font-normal md:font-bold text-slate-800">
      {title}
    </h2>
    <button className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-normal md:font-medium text-sm md:text-lg">
      <Link
        className="flex items-center justify-center gap-2"
        href={`/${type}`}
      >
        <span>عرض الكل</span>
        <ArrowLeft size={18} />
      </Link>
    </button>
  </div>
);

export default function DirectorySection() {
  const [data, setData] = useState({
    center: [],
    teacher: [],
  });

  const handleDataHomePage = async () => {
    const { data } = await axios.get(`${DOMAIN}users/home-page`, {});
    setData(data.data);
  };

  useEffect(() => {
    handleDataHomePage();
  }, []);
  return (
    <>
      {data ? (
        <main className="bg-slate-50 min-h-screen py-12 px-4 md:px-16">
          <div className="max-w-7xl mx-auto">
            <section className="mb-20">
              <SectionHeader
                title="اكتشف أفضل السناتر التعليمية فى مصر"
                type="centers"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data?.centers?.map((center: any) => (
                  <CenterCard key={center.id} center={center} />
                ))}
              </div>
            </section>

            <section className="mb-20">
              <SectionHeader
                title="تعلم أونلاين مع نخبة من افضل المدرسين في مصر"
                type="teachers"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data?.teachers?.map((teacher: any) => (
                  <TeacherCard key={teacher.id} teacher={teacher} />
                ))}
              </div>
            </section>
          </div>
        </main>
      ) : (
        <div>00</div>
      )}
    </>
  );
}
