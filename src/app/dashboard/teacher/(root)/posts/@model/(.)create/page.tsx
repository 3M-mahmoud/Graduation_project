"use client";
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
  return <div>CreateCourseDashBoardTeacher</div>;
};

export default CreateCourseDashBoardTeacher;
