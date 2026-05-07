"use client";

import { useEffect, useState } from "react";
import { ProfileFeed } from "@/app/components/profile/ProfileFeed";
import { ProfileHeader } from "@/app/components/profile/ProfileHeader";
import { ProfileTabs } from "@/app/components/profile/ProfileTabs";
import { ProfileSidebar } from "@/app/components/profile/ProfileSidebar";
import TeachersTab from "@/app/components/profile/TeachersTab";
import ScheduleTab from "@/app/components/profile/ScheduleTab";
import LocationTab from "@/app/components/profile/LocationTap";
import { DOMAIN } from "@/utils/constants";
import { useParams } from "next/navigation";

export default function CenterProfilePage() {
  const param = useParams() as { id: string };
  const [centerData, setCenterData] = useState({});
  const [cash, setCash] = useState({
    posts: [],
    reviews: [],
    courses: [],
  });
  const [activeTab, setActiveTab] = useState("الرئيسية");

  const renderTabContent = () => {
    switch (activeTab) {
      case "الرئيسية":
        return (
          <ProfileFeed
            centerId={centerData?.id}
            setCash={setCash}
            cashPosts={cash.posts || []}
          />
        );
      case "المدرسين":
        return <TeachersTab />;
      case "جدول الحصص":
        return (
          <ScheduleTab
            centerId={centerData?.id}
            setCash={setCash}
            cashCourses={cash.courses || []}
          />
        );
      case "الموقع الجغرافي":
        return <LocationTab geography={centerData?.geography || ""} />;
      default:
        return (
          <ProfileFeed
            centerId={centerData?.id}
            setCash={setCash}
            cashPosts={cash.posts || []}
          />
        );
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const getData = async () => {
      const res = await fetch(`${DOMAIN}users/${param.id}?role=center`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      setCenterData(json.data);
    };

    if (param) getData();
  }, [param]);

  return (
    <main className="bg-[#F3F4F6] min-h-screen pb-20" dir="rtl">
      <ProfileHeader data={centerData} />

      <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {activeTab === "الرئيسية" && (
            <div className="lg:col-span-4 space-y-6">
              <ProfileSidebar data={centerData} />
            </div>
          )}

          <div
            className={`${
              activeTab === "الرئيسية" ? "lg:col-span-8" : "lg:col-span-12"
            }`}
          >
            <div className="space-y-6">{renderTabContent()}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
