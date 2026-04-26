"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function DashboardRedirect() {
  const router = useRouter();

  useEffect(() => {
    // جلب الرتبة والتوكن من الكوكيز لضمان الدقة
    const userRole = localStorage.getItem("role");
    const token = localStorage.getItem("token");

    // التحقق من وجود الجلسة أولاً
    if (!token || !userRole) {
      router.replace("/login");
      return;
    }

    // التوجيه بناءً على الرتبة المسجلة
    switch (userRole) {
      case "student":
        router.replace("/dashboard/student");
        break;
      case "teacher":
        router.replace("/dashboard/teacher");
        break;
      case "center":
        router.replace("/dashboard/center");
        break;
      default:
        // في حال وجود رتبة غير معروفة أو خطأ في البيانات
        router.replace("/login");
        break;
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
    </div>
  );
}
