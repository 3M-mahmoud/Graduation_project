"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import ButtonSendChat from "@/app/components/button/ButtonSendChat";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import TeacherProfile from "./page";
import ButtonFollow from "@/app/components/button/ButtonFollow";
import { DOMAIN } from "@/utils/constants";

export default function RootLayout() {
  const param = useParams() as { id: string };
  const [data, setData] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    const getData = async () => {
      const res = await fetch(`${DOMAIN}users/${param.id}?role=teacher`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      setData(json.data);
    };

    if (param?.id) getData();
  }, [param?.id]);

  console.log(data);
  if (!data?.id)
    return <div className="flex items-center justify-center">loading...</div>;

  return (
    <main className="bg-[#F8FAFC] min-h-screen pb-20" dir="rtl">
      <div className="h-15 md:h-20 relative" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 pb-6">
        <div className="flex flex-col md:flex-row items-center gap-6 mt-12 relative z-10">
          <div className="w-60 h-60 mb-3 group">
            {/* إطار الصورة */}
            <div className="w-full h-full rounded-full p-1 border-2 border-[#2E637C]/10 group-hover:border-[#2E637C]/30 transition-all duration-500">
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-inner">
                {/* <Image
                  src={data.imageUrl || "/default-avatar.png"}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={data.name}
                /> */}
              </div>
            </div>
          </div>

          <div className="flex-1 text-center md:text-right">
            <h1 className="text-2xl md:text-3xl font-bold text-[#204658] mb-2">
              {data?.name}
            </h1>
            <p className="text-[#A9363D] font-normal text-2xl mb-2">
              {data?.teacher?.studyMaterial}
            </p>

            <div className="flex justify-center md:justify-start items-center gap-1 text-[#204658] mb-6">
              <span className="ml-2 text-xl">{data?.followerCounts} متابع</span>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    className={
                      index < Math.floor(data.teacher?.star || 0)
                        ? "text-[#FFC700] fill-[#FFC700]"
                        : "text-slate-200 fill-slate-200"
                    }
                  />
                ))}
              </div>
            </div>

            <div className="flex gap-3 mb-2 justify-center md:justify-start">
              <ButtonFollow id={param.id} data={data} setData={setData} />
              <ButtonSendChat id={param.id} />
            </div>
          </div>
        </div>
      </div>
      <TeacherProfile data={data} />
    </main>
  );
}
