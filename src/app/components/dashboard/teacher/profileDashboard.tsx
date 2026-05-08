"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import { profileTeacher } from "./constant/constant";
import { useDashboardTeacherContext } from "@/context/DashboardTeacher";

const ProfileDashboardTeacher = () => {
  const [imageUrl, name, studyMaterial, starts] = profileTeacher;
  const { dataProfile } = useDashboardTeacherContext();
  console.log(dataProfile);

  // const [data, setData] = useState({})

  return (
    <div className="flex flex-col items-center px-4">
      <div className="relative">
        {dataProfile?.imageUrl && (
          <Image
            src={dataProfile?.imageUrl}
            alt={dataProfile?.name}
            width={100}
            height={100}
            className="rounded-full"
            unoptimized
          />
        )}
        <span className="border-2 border-[#134E4A] bg-[#22C55E] size-3 rounded-full absolute bottom-0 -right-1"></span>
      </div>

      <div className="flex flex-col justify-center items-center mt-2">
        <p className="text-xl font-bold text-[#6B7280]">{dataProfile?.name}</p>
        <p className="text-xl font-semibold text-[#A9363D]">
          {dataProfile?.studyMaterial}
        </p>
        <p className="flex items-center gap-1 text-md font-bold text-[#F59E0B]">
          <Star color="#F59E0B" size={16} />
          {dataProfile?.teacher?.star}
        </p>
      </div>
    </div>
  );
};

export default ProfileDashboardTeacher;
