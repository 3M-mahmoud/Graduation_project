"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowRight, Search, Settings2, Video, ShieldUser } from "lucide-react";
import LessonsTab from "./tabs/LessosTab";
import NotesTab from "./tabs/NotesTab";
import { DOMAIN } from "@/utils/constants";
import axios from "axios";
import { formatDate, formatDateYear } from "@/app/components/helper";

const CourseContentContainer = () => {
  const [activeTab, setActiveTab] = useState("الحصص");
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const params = useParams();
  const tabs = ["الحصص", "المذكرات", "الواجبات", "الامتحانات"];
  const [cache, setCache] = useState({
    lessons: [],
    notes: [],
    homeWorks: [],
    exams: [],
  });
  const courseId = params?.courseName || "";
  const [course, setCourse] = useState({});

  const handleGetCourse = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get(`${DOMAIN}courses/${courseId}?id=${courseId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setCourse(res.data.data);
  };
  useEffect(() => {
    handleGetCourse();
  }, []);

  return (
    <div className="min-h-scree pb-20">
      <div
        data-aos="zoom-in"
        className="max-w-6xl mx-auto bg-white px-4 pt-8 pb-12 shadow-md mb-6"
      >
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-[#191C1D] font-bold mb-10 text-sm hover:opacity-70 cursor-pointer"
        >
          <ArrowRight size={18} /> رجوع للدورات
        </button>

        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 bg-[#F9F9F9] text-[#5C5D5D] text-xs font bold rounded-xl">
              {course?.classRoom}
            </span>
            <span className="px-3 py-1 bg-[#F9F9F9] text-[#5C5D5D] text-xs font bold rounded-xl">
              {course?.studyMaterial}
            </span>
            <span className="px-3 py-1 bg-[#F9F9F9] text-[#5C5D5D] text-xs font bold rounded-xl">
              {formatDateYear(course?.createdAt)}
            </span>
          </div>
          <h1 className="text-[32px] font-semibold text-[#191C1D] mb-4">
            {course?.title}
          </h1>
          <div className="flex items-center gap-6 text-[#656768] font-semibold text-[16px]">
            <span className="flex items-center gap-2 tracking-wide">
              <ShieldUser size={18} /> {course?.teacher?.user?.name}
            </span>
            <span className="flex items-center gap-2 tracking-wide">
              <Video size={18} /> {course?.lessonCounts} حصص
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
        <div
          data-aos="fade-up"
          className="flex flex-col md:flex-row border-b border-[#F8FAFC]"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-6 text-[16px] font-bold transition-all cursor-pointer ${
                activeTab === tab
                  ? "text-[#0D2D2A]  border-b-2 border-[#134E4A] bg-[#F6F6F6]"
                  : "text-[#424752]"
              }`}
            >
              {tab}
            </button>
          ))}

          <div className="p-5  flex items-center gap-4 w-full">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث هنا..."
                className="w-full border-[0.5px] border-[##BCBABA] rounded-[10px] py-2 pr-12 text-right font-normal text-lg text-[#B6B8BC] focus:outline-none"
              />
              <Search
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#B6B8BC]"
                size={25}
              />
            </div>
          </div>
          <button className="hidden md:block p-3 text-[#94A3B8] cursor-pointer">
            <Settings2 size={25} />
          </button>
        </div>

        <div className="bg-white">
          {activeTab === "الحصص" && (
            <LessonsTab
              cache={cache.lessons || []}
              setCache={setCache}
              searchQuery={searchQuery}
              courseId={courseId}
            />
          )}
          {activeTab === "المذكرات" && (
            <NotesTab
              cache={cache}
              setCache={setCache}
              searchQuery={searchQuery}
              courseId={courseId}
              mode="notes"
            />
          )}
          {activeTab === "الواجبات" && (
            <NotesTab
              cache={cache}
              setCache={setCache}
              searchQuery={searchQuery}
              courseId={courseId}
              mode="homeWorks"
            />
          )}
          {activeTab === "الامتحانات" && (
            <NotesTab
              cache={cache}
              setCache={setCache}
              searchQuery={searchQuery}
              courseId={courseId}
              mode="exams"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseContentContainer;
