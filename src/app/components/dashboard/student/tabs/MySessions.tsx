import { useEffect } from "react";
import CourseCard from "../CourseCard";

const MySessions = ({ handleGetSessions, cash }: any) => {
  useEffect(() => {
    if (cash.length > 0) return;
    handleGetSessions();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 animate-in slide-in-from-bottom-4 duration-500">
      {/* {cash?.map((session: any) => (
        <CourseCard
          key={session.id}
          title={session.title}
          teacher={session.teacher}
          icon={session.icon}
        />
      ))} */}
      <CourseCard subject="لغة عربية" teacher="أ. محمد على" icon="🌐" />
      <CourseCard subject="كيمياء" teacher="أ. محمد على" icon="🧪" />
      <CourseCard subject="لغة عربية" teacher="أ. محمد على" icon="🌐" />
      <CourseCard subject="كيمياء" teacher="أ. محمد على" icon="🧪" />
      <CourseCard subject="لغة عربية" teacher="أ. محمد على" icon="🌐" />
      <CourseCard subject="كيمياء" teacher="أ. محمد على" icon="🧪" />
    </div>
  );
};
export default MySessions;
