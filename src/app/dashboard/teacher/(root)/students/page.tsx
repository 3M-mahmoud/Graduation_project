// "use client";

// import { useMemo, useState } from "react";
// import Image from "next/image";
// import { Search, Users, CheckCircle, UserCheck, UserMinus } from "lucide-react";

// const studentsData = [
//   {
//     id: 1,
//     name: "محمد احمد سالم",
//     grade: "الثالث الثانوي",
//     course: "دورة التفاضل والتكامل",
//     date: "20 / 1 / 2026",
//     progress: 75,
//     status: "نشط",
//     progressColor: "bg-orange-500",
//   },
//   {
//     id: 2,
//     name: "محمد احمد سالم",
//     grade: "الثاني الثانوي",
//     course: "دورة الجبر الشاملة",
//     date: "5 / 12 / 2025",
//     progress: 90,
//     status: "نشط",
//     progressColor: "bg-green-500",
//   },
//   {
//     id: 3,
//     name: "محمد احمد سالم",
//     grade: "الثاني الثانوي",
//     course: "دورة الهندسة الفراغية",
//     date: "7 / 3 / 2026",
//     progress: 45,
//     status: "نشط",
//     progressColor: "bg-red-400",
//   },
//   {
//     id: 4,
//     name: "محمد احمد سالم",
//     grade: "الثاني الثانوي",
//     course: "دورة الاحصاء والاحتمالات",
//     date: "12 / 2 / 2026",
//     progress: 25,
//     status: "غير نشط",
//     progressColor: "bg-red-600",
//   },
//   {
//     id: 5,
//     name: "محمد احمد سالم",
//     grade: "الاول الثانوي",
//     course: "دورة التفاضل والتكامل",
//     date: "30 / 1 / 2026",
//     progress: 60,
//     status: "نشط",
//     progressColor: "bg-orange-500",
//   },
// ];

// const stats = [
//   {
//     label: "اجمالي الطلاب",
//     value: "512",
//     icon: <Users className="text-gray-400" />,
//     color: "text-gray-700",
//   },
//   {
//     label: "اكملو الدورة",
//     value: "64",
//     icon: <CheckCircle className="text-yellow-500" />,
//     color: "text-gray-700",
//   },
//   {
//     label: "طلاب نشطون",
//     value: "432",
//     icon: <UserCheck className="text-green-500" />,
//     color: "text-gray-700",
//   },
//   {
//     label: "غير نشطين",
//     value: "10",
//     icon: <UserMinus className="text-red-500" />,
//     color: "text-gray-700",
//   },
// ];

// const minWidthHeaders = "min-w-36 text-center";

// export default function StudentsDashboard() {
//   const [filter, setFilter] = useState("");

//   const dataStudents = useMemo(() => {
//     if (filter === "") return studentsData;

//     return studentsData.filter((s) =>
//       s.course.toLowerCase().includes(filter.toLowerCase()),
//     );
//   }, [filter]);
//   return (
//     <main
//       className="min-h-screen bg-[#F4F7F9] px-6 lg:px-10 font-sans"
//       dir="rtl"
//     >
//       <div className="max-w-6xl w-full mx-auto space-y-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center space-y-2 border border-gray-50"
//             >
//               <div className="p-3 bg-gray-50 rounded-full">{stat.icon}</div>
//               <span className="text-3xl font-bold text-[#204658]">
//                 {stat.value}
//               </span>
//               <span className="text-gray-400 text-sm font-medium">
//                 {stat.label}
//               </span>
//             </div>
//           ))}
//         </div>

//         <div className="bg-white text-black p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
//           <div className="relative w-full md:w-96">
//             <input
//               type="text"
//               value={filter}
//               onChange={(e) =>
//                 setFilter(
//                   e.target.value.trim().length > 1
//                     ? e.target.value
//                     : e.target.value.trim(),
//                 )
//               }
//               placeholder="ابحث باسم الطالب أو الدورة.."
//               className="w-full pr-10 pl-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-[#003F87] text-sm"
//             />
//             <Search className="absolute right-3 top-2.5" size={18} />
//           </div>
//         </div>

//         {dataStudents.length === 0 ? (
//           <div className="">0000000000</div>
//         ) : (
//           <div className="mt-6 rounded-xl0 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
//             <div className="overflow-x-auto max-h-[500px] overflow-y-auto text-black">
//               <table className="text-sm w-full text-right">
//                 <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 text-sm font-medium">
//                   <tr>
//                     <th className="min-w-80 p-5">الطالب</th>
//                     <th className={minWidthHeaders}>الصف</th>
//                     <th className={minWidthHeaders}>الدورة</th>
//                     <th className={minWidthHeaders}>تاريخ الانضمام</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-50">
//                   {dataStudents.map((student) => (
//                     <tr key={student.id} className="hover:bg-gray-50">
//                       <td className="p-4">
//                         <div className="flex items-center gap-3">
//                           <div className="size-8 rounded-full bg-gray-200 overflow-hidden">
//                             <Image
//                               src="/avatar-placeholder.png"
//                               alt=""
//                               width={32}
//                               height={32}
//                             />
//                           </div>
//                           <span className="font-bold text-[#204658]">
//                             {student.name}
//                           </span>
//                         </div>
//                       </td>
//                       <td className="p-4 text-center text-gray-600">
//                         {student.grade}
//                       </td>
//                       <td className="p-4 text-center text-gray-600 font-medium">
//                         {student.course}
//                       </td>
//                       <td className="p-4 text-center text-gray-400">
//                         {student.date}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }
"use client";
const students = [
  {
    id: 1,
    name: "أحمد محمود علي",
    grade: "الثالث الثانوي",
    course: "دورة الجبر الشاملة",
    date: "2024-12-01",
    time: "10:30 ص",
  },
  {
    id: 2,
    name: "سارة كمال حسن",
    grade: "الثالث الثانوي",
    course: "دورة التفاضل",
    date: "2024-12-01",
    time: "11:15 ص",
  },
  {
    id: 3,
    name: "ياسين مصطفى",
    grade: "الثاني الثانوي",
    course: "دورة الهندسة الفراغية",
    date: "2024-11-30",
    time: "09:45 ص",
  },
  {
    id: 4,
    name: "ليلى عبد العزيز",
    grade: "الثالث الثانوي",
    course: "دورة الاحصاء والاحتمالات",
    date: "2024-11-28",
    time: "01:20 م",
  },
  {
    id: 5,
    name: "ليلى عبد العزيز",
    grade: "الثالث الثانوي",
    course: "دورة الاحصاء والاحتمالات",
    date: "2024-11-28",
    time: "01:20 م",
  },
  {
    id: 6,
    name: "ليلى عبد العزيز",
    grade: "الثالث الثانوي",
    course: "دورة الاحصاء والاحتمالات",
    date: "2024-11-28",
    time: "01:20 م",
  },
  {
    id: 7,
    name: "ليلى عبد العزيز",
    grade: "الثالث الثانوي",
    course: "دورة الاحصاء والاحتمالات",
    date: "2024-11-28",
    time: "01:20 م",
  },
  {
    id: 8,
    name: "ليلى عبد العزيز",
    grade: "الثالث الثانوي",
    course: "دورة الاحصاء والاحتمالات",
    date: "2024-11-28",
    time: "01:20 م",
  },
  {
    id: 9,
    name: "ليلى عبد العزيز",
    grade: "الثالث الثانوي",
    course: "دورة الاحصاء والاحتمالات",
    date: "2024-11-28",
    time: "01:20 م",
  },
];
import { useSocket } from "@/context/WsSocket";
import { DOMAIN } from "@/utils/constants";
import { Search, MoreVertical, Users } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const LIMIT_PER_PAGE = 5;

const StudentsTable = () => {
  const { senderId } = useSocket();
  const [filter, setFilter] = useState<string>("الكل");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [coursesData, setCoursesData] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(senderId);
  const handleGetTeachers = async () => {
    if (filter === "الكل") return;
    const token = localStorage.getItem("token");
    setLoading(true);
    const { data } = await axios.get(
      `${DOMAIN}courses?id=${senderId}&classRoom=الصف ${filter}&role=center`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    console.log(data);

    setLoading(true);
    setCoursesData(data.data.courses);
  };

  useEffect(() => {
    handleGetTeachers();
  }, [filter]);
  console.log(coursesData);

  const totalPages = Math.ceil(coursesData.length / LIMIT_PER_PAGE);

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-12 font-sans" dir="rtl">
      {/* Main Card */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        {/* Search and Stats Row */}
        <div className="p-6 flex flex-col md:flex-row justify-between items-center gap-4 border-b border-gray-50">
          <div className="relative w-full md:w-2/3">
            <input
              type="text"
              placeholder="ابحث باسم الطالب أو المدرس أو المادة .."
              className="w-full bg-white border border-gray-200 pr-12 pl-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#204658]/10 focus:border-[#204658] transition-all"
            />
            <Search
              className="absolute right-4 top-3.5 text-gray-400"
              size={20}
            />
          </div>

          <div className="flex items-center gap-4 bg-white border border-gray-100 p-2 rounded-2xl shadow-sm pr-6">
            <div className="text-right">
              <p className="text-[10px] text-gray-400 font-bold">
                إجمالي الطلاب
              </p>
              <p className="text-xl font-black text-[#204658]">10</p>
            </div>
            <div className="bg-[#D9E3E3] p-3 rounded-xl text-[#204658]">
              <Users size={24} />
            </div>
          </div>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto">
          <table className="w-full text-right">
            <thead>
              <tr className="text-[#204658] text-sm font-bold bg-white">
                <th className="px-6 py-5 min-w-64">اسم الطالب</th>
                <th className="px-6 py-5 min-w-40">الصف</th>
                <th className="px-6 py-5 min-w-56">الدورة</th>
                <th className="px-6 py-5 min-w-56">تاريخ الدفع</th>
                <th className="px-6 py-5 min-w-56">توقيت الدفع</th>
                <th className="px-6 py-5 min-w-10"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="hover:bg-gray-50 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-xl bg-[#204658] flex items-center justify-center text-white font-bold overflow-hidden">
                        <Image src="" alt={student.name} />
                      </div>
                      <span className="font-bold text-gray-800 text-sm">
                        {student.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {student.grade}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {student.course}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {student.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 font-medium">
                    {student.time}
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-gray-400 hover:text-[#204658] p-1 rounded-lg transition-colors">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-6 bg-white border-t border-gray-50 flex justify-between items-center">
          <div className="text-sm text-gray-400 font-medium">
            عرض <span className="text-gray-800">12</span> من أصل{" "}
            <span className="text-gray-800">25</span> طلاب
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => p - 1)}
              disabled={currentPage === 1}
              className={`${currentPage === 1 ? "disabled:cursor-not-allowed" : ""} px-3 py-1 rounded-md bg-gray-100 disabled:opacity-50 cursor-pointer`}
            >
              {"<"}
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded-md ${
                  currentPage === i + 1 ? "bg-green-600" : "bg-gray-100"
                } cursor-pointer`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => p + 1)}
              disabled={currentPage === totalPages}
              className={`${currentPage === totalPages ? "disabled:cursor-not-allowed" : ""} px-3 py-1 rounded-md bg-gray-100 disabled:opacity-50 cursor-pointer`}
            >
              {">"}
            </button>
            {/* <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-400 transition-all">
              <ChevronLeft size={18} />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsTable;
