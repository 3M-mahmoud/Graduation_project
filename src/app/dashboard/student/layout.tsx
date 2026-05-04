"use client";
import StudentSidebar from "@/app/components/layouts/studentSidebar/StudentSidebar";
import React from "react";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto pl-3 pt-1 pb-20">
        <div className="flex gap-4 md:gap-8">
          {/* السايد بار مخصص للطالب بتصميمه الفريد */}
          <aside className="w-fit lg:w-80">
            <StudentSidebar />
          </aside>
          <main className="flex-1 mt-6 overflow-hidden">{children}</main>

        </div>
      </div>
    </div>
  );
}
