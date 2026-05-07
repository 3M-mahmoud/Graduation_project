"use client";
import { Plus, SlidersHorizontal } from "lucide-react";
import centerLogo from "@/assets/ceterProfile/teacherTap1.jpeg";
import { Post } from "@/app/components/dashboard/center/Post";
import { useSocket } from "@/context/WsSocket";

const PostsPage = () => {
  // معرف السنتر (يمكنك جلبه من الـ Auth context أو الـ LocalStorage)
  const { senderId } = useSocket();

  return (
    <div className="max-w-[1000px] mx-auto pb-10">
      {/* عنوان الصفحة */}
      <div className="mb-8 text-right">
        <h1 className="text-2xl font-black text-slate-800">المنشورات</h1>
        <p className="text-slate-400 text-sm font-bold mt-1">
          قم بإنشاء وإدارة منشوراتك التعليمية
        </p>
      </div>

      {/* شريط إضافة منشور جديد - مطابق للصورة Verbatim */}
      <div className="bg-white rounded-2xl p-4 mb-8 border border-slate-100 shadow-sm flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1">
          {/* لوجو السنتر الصغير */}
          <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-100 shrink-0 relative">
            <img
              src={centerLogo?.src}
              alt="Center Logo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* زر فتح مودال المنشور الجديد */}
          <button className="flex-1 bg-slate-50 text-right px-6 py-2.5 rounded-xl text-slate-400 text-xs font-bold hover:bg-slate-100 transition-all flex items-center justify-between">
            <span>منشور جديد ..</span>
            <Plus size={16} className="text-slate-300" />
          </button>
        </div>

        {/* زر الفلترة الجانبي */}
        <button className="p-2.5 bg-white border border-slate-100 rounded-xl text-slate-400 hover:bg-slate-50 transition-colors">
          <SlidersHorizontal size={18} />
        </button>
      </div>

      {/* استدعاء مكون التغذية الذي قمنا بتعديله */}
      {/* سيتولى هذا المكون عملية الـ Fetch والـ Mapping تلقائياً */}
      {senderId && <Post centerId={senderId} />}
    </div>
  );
};

export default PostsPage;
