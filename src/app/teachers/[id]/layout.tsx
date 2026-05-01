import type { Metadata } from "next";
import background from "../../../assets/background.jpeg";
import { MessageSquare, Star, Plus } from "lucide-react";
import { teacherInfo } from "@/data/teacherData";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Teacher Profile",
  description: "Teacher Profile for show data teacher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-[#F8FAFC] min-h-screen pb-20" dir="rtl">
        <div className="h-15 md:h-20 relative">
          <div className="absolute inset-0 opacity-2 pointer-events-none select-none">
            <Image src={background} alt="background" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-8 pb-6">
          <div className="flex flex-col md:flex-row items-center gap-6 mt-12 relative z-10">
            <div data-aos="fade-up" className="w-60 h-60 mb-3 rounded-full overflow-hidden">
              <Image
                src={teacherInfo.image}
                className="w-full h-full object-cover"
                alt={teacherInfo.name}
              />
            </div>

            <div data-aos="fade-up" className="flex-1 text-center md:text-right">
              <h1 className="text-2xl md:text-3xl font-bold text-[#204658] mb-2">
                {teacherInfo.name}
              </h1>
              <p className="text-[#A9363D] font-normal text-2xl mb-2">
                {teacherInfo.subject}
              </p>
              <div className="flex justify-center md:justify-start items-center gap-1 text-[#204658] font-light mb-6">
                <span className="ml-2 text-xl">
                  {teacherInfo.followers} متابع
                </span>
                <span className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      className={
                        index < Math.floor(teacherInfo.rating)
                          ? "text-[#FFC700] fill-[#FFC700]"
                          : "text-slate-200 fill-slate-200"
                      }
                    />
                  ))}

                  <span className="mr-2 text-[#4B5563] text-lg font-light">
                    {teacherInfo.rating}
                  </span>
                </span>
              </div>
              <div className="flex gap-3 mb-2">
                <button className="flex items-center gap-2 bg-[#2E637C] text-white px-6 py-2.5 rounded-xl font-bold shadow-lg cursor-pointer hover:bg-[#215167] transition-all">
                  <Plus size={18} /> متابعة
                </button>
                <button className="flex items-center gap-2 border border-[#818181] text-[#343A40] text-sm px-6 py-2.5 rounded-xl font-bold cursor-pointer hover:bg-[#343A40] hover:text-white transition-all">
                  <MessageSquare size={18} /> مراسلة
                </button>
              </div>
            </div>
          </div>
        </div>
      {children}
    </main>
  );
}
