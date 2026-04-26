import { BookOpen } from "lucide-react";
import { UsersRound } from "lucide-react";
import { MessageSquareText } from "lucide-react";
import { Settings } from "lucide-react";
import { KeyRound } from "lucide-react";
import { CircleUser } from "lucide-react";

const dataTeacherDaashboardTeacher = {
  name: "أ. حسن علي عبدالله",
  studyMaterial: "رياضيات",
  edugationalStage: "المرحلة الثانوية",
  icon: <BookOpen size={20} />,
};

const sidebarDaashboardTeacher = [
  {
    name: "الدورات",
    path: "/dashboard-teacher",
    icon: <BookOpen size={20} />,
  },
  {
    name: "الطلاب",
    path: "/dashboard-teacher/students",
    icon: <UsersRound size={20} />,
  },
  {
    name: "المنشورات",
    path: "/dashboard-teacher/posts",
    icon: <MessageSquareText size={20} />,
  },
];

const settingSideBar = {
  name: "الإعدادات",
  icon: <Settings size={20} />,
  include: [
    "/dashboard-teacher/settings/personal-data",
    "/dashboard-teacher/settings/change-password",
  ],
  list: [
    {
      name: "البيانات الشخصية",
      path: "/dashboard-teacher/settings/personal-data",
      icon: <CircleUser />,
    },
    {
      name: "الأمان",
      path: "/dashboard-teacher/settings/change-password",
      icon: <KeyRound />,
    },
  ],
};

// const formDashBoardTeacher = {
//   data: [
//     {
//       name: "المعلومات الشخصية",
//       data: [
//         {
//           name: "name",
//           title: "الأسم بالكامل",
//           type: "text",
//           select: false,
//           placeholder: "حسن علي عبدالله",
//           selectData: [],
//         },
//         {
//           name: "nickName",
//           title: "اللقب / المسمى الوظيفي",
//           type: "text",
//           select: false,
//           placeholder: "أ. ( أستاذ )",
//           selectData: [],
//         },
//       ],
//     },
//     {
//       name: "المرحلة الدراسية",
//       data: [
//         {
//           name: "educationalStage",
//           title: "اللقب / المسمى الوظيفي",
//           type: "",
//           select: true,
//           placeholder: "",
//           selectData: {
//             data: [
//               "المرحلة الأبتدائية",
//               "المرحلة الأعدادية",
//               "المرحلة الثانوية",
//             ],
//           },
//         },
//         {
//           name: "classRoom",
//           title: "الصف الدراسي",
//           type: "",
//           select: true,
//           placeholder: "",
//           selectData: {
//             "المرحلة الأبتدائية": [
//               "الصف الاول الأبتدائية",
//               "الصف الثاني الأبتدائية",
//               "الصف الثالث الأبتدائية",
//               "الصف الرابع الأبتدائية",
//               "الصف الخامس الأبتدائية",
//               "الصف السادس الأبتدائية",
//             ],
//             "المرحلة الأعدادية": [
//               "الصف الاول الأعدادي",
//               "الصف الثاني الأعدادي",
//               "الصف الثالث الأعدادي",
//             ],
//             "المرحلة الثانوية": [
//               "الصف الاول الثانوي",
//               "الصف الثاني الثانوي",
//               "الصف الثالث الثانوي",
//             ],
//           },
//         },
//         {
//           name: "studyMaterial",
//           title: "المادة العلمية",
//           type: "",
//           select: true,
//           placeholder: "",
//           selectData: {
//             "المرحلة الأبتدائية": [
//               "اللغة العربية",
//               "الرياضيات",
//               "اللغة الانجليزية",
//               "الدراسات الاجتماعية",
//               "العلوم",
//             ],
//             "المرحلة الأعدادية": [
//               "اللغة العربية",
//               "اللغة الاجنبية الثانية",
//               "الرياضيات",
//               "الدراسات الاجتماعية",
//               "العلوم",
//             ],
//             "المرحلة الثانوية": [
//               "اللغة العربية",
//               "اللغة الانجليزية",
//               "اللغة الاجنبية الثانية",
//               "الاحياء",
//               "الكيمياء",
//               "الفيزياء",
//               "رياضيات",
//               "التاريخ",
//               "الجغرافيا",
//               "علم النفس",
//               "الفلسفة والمنطق",
//             ],
//           },
//         },
//       ],
//     },
//     {
//       name: "المؤهلات الأكاديمية",
//       data: [
//         {
//           name: "qualification",
//           title: "المؤهل الدراسي",
//           type: "text",
//           select: false,
//           placeholder: "بكالوريوس رياضيات - جامعة القاهرة",
//           selectData: [],
//         },
//         {
//           name: "experience",
//           title: "سنوات الخبرة",
//           type: "number",
//           select: true,
//           placeholder: "5",
//           selectData: [],
//         },
//       ],
//     },
//     {
//       name: "معلومات التواصل",
//       data: [
//         {
//           name: "email",
//           title: "البريد الإلكتروني",
//           type: "text",
//           select: false,
//           placeholder: "********************************",
//           selectData: [],
//         },
//       ],
//     },
//     {
//       name: "النبذة الشخصية",
//       data: [
//         {
//           name: "bio",
//           title: "عن المعلم",
//           type: "area",
//           select: false,
//           placeholder: "",
//           bio: "اكتب نبذة مختصرة عنك من 100 إلي 150 كلمة",
//           selectData: [],
//         },
//       ],
//     },
//   ],
//   btn: "حفظ التعديلات",
// };

const educationalStage = [
  "المرحلة الأبتدائية",
  "المرحلة الأعدادية",
  "المرحلة الثانوية",
];

const classRoom = {
  "المرحلة الأبتدائية": [
    "الصف الاول الأبتدائية",
    "الصف الثاني الأبتدائية",
    "الصف الثالث الأبتدائية",
    "الصف الرابع الأبتدائية",
    "الصف الخامس الأبتدائية",
    "الصف السادس الأبتدائية",
  ],
  "المرحلة الأعدادية": [
    "الصف الاول الأعدادي",
    "الصف الثاني الأعدادي",
    "الصف الثالث الأعدادي",
  ],
  "المرحلة الثانوية": [
    "الصف الاول الثانوي",
    "الصف الثاني الثانوي",
    "الصف الثالث الثانوي",
  ],
};

const studyMaterial = {
  "المرحلة الأبتدائية": [
    "اللغة العربية",
    "الرياضيات",
    "اللغة الانجليزية",
    "الدراسات الاجتماعية",
    "العلوم",
  ],
  "المرحلة الأعدادية": [
    "اللغة العربية",
    "اللغة الاجنبية الثانية",
    "الرياضيات",
    "الدراسات الاجتماعية",
    "العلوم",
  ],
  "المرحلة الثانوية": [
    "اللغة العربية",
    "اللغة الانجليزية",
    "اللغة الاجنبية الثانية",
    "الاحياء",
    "الكيمياء",
    "الفيزياء",
    "رياضيات",
    "التاريخ",
    "الجغرافيا",
    "علم النفس",
    "الفلسفة والمنطق",
  ],
};

const forgetPassword = [
  {
    name: "OldPassword",
    title: "كلمة المرور الحالية",
  },
  {
    name: "newPassword",
    title: "كلمة المرور الجديدة",
  },
  {
    name: "confirmPassword",
    title: "تأكيد كلمة المرور",
  },
];

type HeroSection = {
  nameBio: string;
  bio: string;
};

const heroSectioDashboardTeacher: {
  [key: string]: HeroSection;
} = {
  "dashboard-teacher": {
    nameBio: "لوحة التحكم",
    bio: "مرحباً بك، هنا نظرة",
  },
  "dashboard-teacher/courses": {
    nameBio: "إدارة الدورات",
    bio: "إدارة وتنظيم دوراتك التعليمية",
  },
  "dashboard-teacher/students": {
    nameBio: "الطلاب المشتركون",
    bio: "متابعة الطلاب المشتركين في دوراتك",
  },
  "dashboard-teacher/posts": {
    nameBio: "إدارة المنشورات",
    bio: "ادارة و انشاء منشوراتك التعليمية",
  },
  "dashboard-teacher/settings": {
    nameBio: "إدارة الطلاب",
    bio: "ادارة االمنشورات",
  },
  "dashboard-teacher/settings/personal-data": {
    nameBio: "اعدادات الحساب",
    bio: "قم بتحديث معلوماتك الأكاديمية والمهنية لتظهر بشكل أفضل للطلاب",
  },
  "dashboard-teacher/settings/change-password": {
    nameBio: "اعدادات الحساب",
    bio: "تغيير كلمة المرور",
  },
};

const profileTeacher: string[] = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9l90Cbw3HXzmP7KHa0u4TnnDgHTEUAzc_Ow&s",
  "د. احمد محمد علي",
  "الرياضيات",
  "4.9",
];

export {
  profileTeacher,
  settingSideBar,
  forgetPassword,
  // formDashBoardTeacher,
  educationalStage,
  classRoom,
  studyMaterial,
  sidebarDaashboardTeacher,
  heroSectioDashboardTeacher,
  dataTeacherDaashboardTeacher,
};
