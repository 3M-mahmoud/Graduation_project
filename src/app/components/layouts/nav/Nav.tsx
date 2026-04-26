"use client";

import { useState } from "react";
import { LogIn, UserPlus, GraduationCap, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  return (
    <nav className="relative bg-white text-[#204658] shadow-sm z-50">
      <div className="flex items-center justify-between px-6 py-4 md:px-16">
        <div className="flex items-center gap-2 text-2xl font-bold text-[#204658] shrink-0">
          <span className="order-2">سنتر مصر</span>
          <GraduationCap className="order-1 text-[#204658]" size={32} />
        </div>

        <ul className="hidden lg:flex items-center gap-8 text-[#204658]">
          <li>
            <Link
              href="/"
              className={`hover:text-blue-600 transition-colors ${
                pathname === "/" ? "font-bold" : "font-medium"
              }`}
            >
              الرئيسية
            </Link>
          </li>

          <li>
            <Link
              href="/centers"
              className={`hover:text-blue-600 transition-colors ${
                pathname === "/centers" ? "font-bold" : "font-medium"
              }`}
            >
              سناتر تعليمية
            </Link>
          </li>

          <li>
            <Link
              href="/teachers"
              className={`hover:text-blue-600 transition-colors ${
                pathname === "/teachers" ? "font-bold" : "font-medium"
              }`}
            >
              مدرسين أونلاين
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <LogIn size={18} />
              <span>تسجيل الدخول</span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2 text-white bg-slate-600 rounded-lg hover:bg-slate-700 transition-colors"
            >
              <UserPlus size={18} />
              <span>انضم الآن</span>
            </Link>
          </div>

          {/* Toggle Button for Mobile */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-slate-600 cursor-pointer hover:bg-slate-100 rounded-md transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`
          fixed inset-0 top-[72px] bg-white z-40 transition-transform duration-300 ease-in-out lg:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col p-6 gap-6">
          <ul className="flex flex-col gap-6 text-lg font-bold">
            <li className="border-b border-slate-50 pb-2">
              <Link
                href="/"
                onClick={closeMenu}
                className={`hover:text-blue-600 transition-colors ${
                  pathname === "/" ? "font-bold" : "font-medium"
                }`}
              >
                الرئيسية
              </Link>
            </li>
            <li className="border-b border-slate-50 pb-2">
              <Link
                href="/centers"
                onClick={closeMenu}
                className={`hover:text-blue-600 transition-colors ${
                  pathname === "/centers" ? "font-bold" : "font-medium"
                }`}
              >
                سناتر تعليمية
              </Link>
            </li>
            <li className="border-b border-slate-50 pb-2">
              <Link
                href="/teachers"
                onClick={closeMenu}
                className={`hover:text-blue-600 transition-colors ${
                  pathname === "/teachers" ? "font-bold" : "font-medium"
                }`}
              >
                مدرسين أونلاين
              </Link>
            </li>
          </ul>

          <div className="flex flex-col gap-4 pt-4">
            <Link
              href="/"
              onClick={toggleMenu}
              className="flex items-center justify-center gap-2 w-full py-4 border border-slate-200 rounded-xl font-bold"
            >
              <LogIn size={20} />
              تسجيل الدخول
            </Link>
            <Link
              href="/"
              onClick={toggleMenu}
              className="flex items-center justify-center gap-2 w-full py-4 bg-slate-600 text-white rounded-xl font-bold"
            >
              <UserPlus size={20} />
              انضم الآن
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
