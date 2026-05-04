"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
export default function DashboardRedirect() {
  const router = useRouter();

  useEffect(() => {
    const userRole = Cookies.get("role"); 
    const token = Cookies.get("token");

    if (!token || !userRole) {
      router.replace("/login");
      return;
    }

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
