"use client";
import { useEffect, useState } from "react";
import OverviewTab from "@/app/components/Teacher/tabs/OverviewTab";
import { centerData } from "@/data/centerProfile";
import { ProfileFeed } from "@/app/components/profile/ProfileFeed";
import CoursesTab from "@/app/components/Teacher/tabs/coursesTab/CoursesTab";
import ReviewsTab from "@/app/components/Teacher/tabs/ReviewsTab";
import { OverviewSkeleton } from "@/app/components/Teacher/tabs/OverviewSkeleton";
import { DOMAIN } from "@/utils/constants";
import { useParams } from "next/navigation";
import { useSocket } from "@/context/WsSocket";

export default function TeacherProfile() {
  const [activeTab, setActiveTab] = useState("نظرة عامة");
  const [cachePosts, setCachePosts] = useState({
    meta: {},
    data: [],
  });
  const [cashCourses, setCacheCourse] = useState([]);
  const [cacheReviews, setCacheReviews] = useState([]);
  const param = useParams() as { id: string };
  const { socket } = useSocket();
  const [data, setData] = useState({});

  const renderTabContent = () => {
    switch (activeTab) {
      case "نظرة عامة":
        return <OverviewTab data={data} />;
      case "المنشورات":
        return (
          <ProfileFeed
            userName={data?.name}
            userImage={data?.imageUrl}
            role="teacher"
            userId={data?.id}
            setCachePosts={setCachePosts}
            cachePosts={cachePosts || []}
          />
        );
      case "الدورات التعليمية":
        return (
          <CoursesTab
            userId={data?.id}
            teacherId={data?.teacher?.id}
            setCacheCourse={setCacheCourse}
            cashCourses={cashCourses || []}
          />
        );
      case "التقييمات":
        return (
          <ReviewsTab
            teacherId={data?.id}
            setCacheReviews={setCacheReviews}
            cacheReviews={cacheReviews || []}
          />
        );
      default:
        return <OverviewTab data={data} />;
    }
  };
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

    if (!socket || !param.id) return;
    socket.send(
      JSON.stringify({
        type: "get_user_presence",
        payload: {
          userId: param.id,
        },
      }),
    );
  }, [param?.id]);
  if (!data?.id) return <OverviewSkeleton />;

  return (
    <>
      <div
        data-aos="fade-up"
        className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col gap-8 border-t border-[#B0B0B0] py-3 shadow-lg overflow-auto"
      >
        {["نظرة عامة", "المنشورات", "الدورات التعليمية", "التقييمات"].map(
          (tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-2 font-bold transition-all relative whitespace-nowrap cursor-pointer ${
                activeTab === tab
                  ? "text-orange-500"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 rounded-full" />
              )}
            </button>
          ),
        )}
      </div>

      <main className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div
            className={`${
              activeTab === "نظرة عامة" ? "lg:col-span-12" : "lg:col-span-12"
            }`}
          >
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
