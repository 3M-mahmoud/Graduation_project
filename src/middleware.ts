import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token")?.value;
  const role = request.cookies.get("role")?.value;

  const { pathname } = request.nextUrl;

  const isCentersList = pathname === "/centers";

  if (isCentersList) {
    return NextResponse.next();
  }

  const isCenterProfileRoute = /^\/centers\/[^/]+(\/.*)?$/.test(pathname);

  if (isCenterProfileRoute && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const isTeacherProfileRoute = /^\/teachers\/[^/]+(\/.*)?$/.test(pathname);

  if (isTeacherProfileRoute && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (pathname.startsWith("/dashboard/") && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token && role) {
    if (pathname.startsWith("/dashboard/student") && role !== "student") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    if (pathname.startsWith("/dashboard/teacher") && role !== "teacher") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    if (pathname.startsWith("/dashboard/center") && role !== "center") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/centers/:id*", "/teachers/:id*", "/dashboard/:path*"],
};
