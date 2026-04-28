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
    path: "/dashboard/teacher",
    icon: <BookOpen size={20} />,
  },
  {
    name: "الطلاب",
    path: "/dashboard/teacher/students",
    icon: <UsersRound size={20} />,
  },
  {
    name: "المنشورات",
    path: "/dashboard/teacher/posts",
    icon: <MessageSquareText size={20} />,
  },
];

const settingSideBar = {
  name: "الإعدادات",
  icon: <Settings size={20} />,
  include: [
    "/dashboard/teacher/settings/personal-data",
    "/dashboard/teacher/settings/change-password",
  ],
  list: [
    {
      name: "البيانات الشخصية",
      path: "/dashboard/teacher/settings/personal-data",
      icon: <CircleUser />,
    },
    {
      name: "الأمان",
      path: "/dashboard/teacher/settings/change-password",
      icon: <KeyRound />,
    },
  ],
};

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
  teacher: {
    nameBio: "لوحة التحكم",
    bio: "مرحباً بك، هنا نظرة",
  },
  "teacher/courses": {
    nameBio: "إدارة الدورات",
    bio: "إدارة وتنظيم دوراتك التعليمية",
  },
  "teacher/students": {
    nameBio: "الطلاب المشتركون",
    bio: "متابعة الطلاب المشتركين في دوراتك",
  },
  "teacher/posts": {
    nameBio: "إدارة المنشورات",
    bio: "ادارة و انشاء منشوراتك التعليمية",
  },
  "teacher/settings": {
    nameBio: "إدارة الطلاب",
    bio: "ادارة االمنشورات",
  },
  "teacher/settings/personal-data": {
    nameBio: "اعدادات الحساب",
    bio: "قم بتحديث معلوماتك الأكاديمية والمهنية لتظهر بشكل أفضل للطلاب",
  },
  "teacher/settings/change-password": {
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
  educationalStage,
  classRoom,
  studyMaterial,
  sidebarDaashboardTeacher,
  heroSectioDashboardTeacher,
  dataTeacherDaashboardTeacher,
};
