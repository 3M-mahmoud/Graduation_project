import CourseCard from "../CourseCard";

const MySessions = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 animate-in slide-in-from-bottom-4 duration-500">
      {/* البيانات هنا تخص الحصص فقط */}
      <CourseCard subject="لغة عربية" teacher="أ. محمد على" icon="🌐" />
      <CourseCard subject="كيمياء" teacher="أ. محمد على" icon="🧪" />
      {/* ... */}
    </div>
  );
};
export default MySessions;
