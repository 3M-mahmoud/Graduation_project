"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const CreateCourseDashBoardTeacher = () => {
  useEffect(() => {
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollBarWidth}px`;
    return () => {
      document.body.style.overflow = originalStyle;
      document.body.style.paddingRight = "0px";
    };
  }, []);

  const route = useRouter();
  return (
    <div className="fixed inset-0 top-0 ring-0 w-screen h-screen flex items-center justify-center z-50 text-black space-x-10">
      <div className="">CreateCourseDashBoardTeacher</div>
      <div className="" onClick={() => route.back()}>
        Close
      </div>
    </div>
  );
};

export default CreateCourseDashBoardTeacher;
