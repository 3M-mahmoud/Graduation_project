"use client";
import React, { useState } from "react";
import {
  X,
  User,
  BookOpen,
  Layers,
  Globe,
  DollarSign,
  Calendar,
  Clock,
} from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

interface AddTeacherModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void; // لتحديث القائمة بعد الإضافة الناجحة
}

const AddTeacherModal = ({
  isOpen,
  onClose,
  onSuccess,
}: AddTeacherModalProps) => {
  const [loading, setLoading] = useState(false);

  // الحالة الابتدائية للبيانات المطلوبة
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    classLevel: "الثالث الثانوي",
    system: "عربي",
    price: "",
    day: "السبت",
    time: "",
  });

  if (!isOpen) return null;

const handleAddTeacher = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const token =
      typeof window !== "undefined"
        ? localStorage.getItem("token")
        : null;

    const response = await axios.post(
      `YOUR_BACKEND_API_URL/teachers`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

  return (
// الجزء الخاص بالحاوية داخل الـ Modal
<div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 md:p-10" dir="rtl">
  <div className="bg-white rounded-[2.5rem] w-full max-w-[500px] max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in duration-300 border border-slate-100 scrollbar-hide">
    {/* محتوى الـ Modal هنا */}
    
    {/* Header */}
    <div className="p-6 border-b border-slate-50 flex items-center justify-between sticky top-0 bg-white z-10">
      <div className="text-right">
        <h2 className="text-lg font-black text-slate-800">إضافة مدرس جديد</h2>
      </div>
      <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400">
        <X size={20} />
      </button>
    </div>

    {/* Form */}
    <form onSubmit={handleAddTeacher} className="p-6 space-y-5">
      <div className="space-y-4">
        {/* جعلت الحقول تظهر تحت بعضها في الموبايل لتوفير مساحة */}
        <div className="grid grid-cols-1 gap-4">
           {/* حقل الاسم */}
           <div className="space-y-1">
             <label className="text-slate-500 font-bold text-[11px] pr-1">اسم المدرس</label>
             <input type="text" className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl text-right text-sm font-bold outline-none" />
           </div>
           
           {/* حقل المادة */}
           <div className="space-y-1">
             <label className="text-slate-500 font-bold text-[11px] pr-1">المادة</label>
             <input type="text" className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl text-right text-sm font-bold outline-none" />
           </div>

           {/* السعر واليوم في سطر واحد حتى في المساحات الصغيرة */}
           <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-slate-500 font-bold text-[11px] pr-1">السعر</label>
                <input type="number" className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl text-right text-sm font-bold outline-none" />
              </div>
              <div className="space-y-1">
                <label className="text-slate-500 font-bold text-[11px] pr-1">النظام</label>
                <select className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl text-right text-sm font-bold outline-none">
                  <option>عربي</option>
                  <option>لغات</option>
                </select>
              </div>
           </div>

           {/* الساعة واليوم */}
           <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-slate-500 font-bold text-[11px] pr-1">اليوم</label>
                <select className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl text-right text-sm font-bold outline-none">
                   <option>السبت</option>
                   {/* باقي الأيام */}
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-slate-500 font-bold text-[11px] pr-1">الساعة</label>
                <input type="text" placeholder="9 ص" className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl text-right text-sm font-bold outline-none" />
              </div>
           </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-4">
        <button type="submit" className="w-full py-3.5 bg-[#062D27] text-white rounded-xl font-black text-sm hover:bg-[#083a32] transition-all shadow-lg active:scale-95 cursor-pointer">
          حفظ البيانات
        </button>
        <button type="button" onClick={onClose} className="w-full py-3.5 bg-slate-100 text-slate-500 rounded-xl font-bold text-sm hover:bg-slate-200 transition-all cursor-pointer">
          إلغاء
        </button>
      </div>
    </form>
  </div>
</div>
  );
};

export default AddTeacherModal;
