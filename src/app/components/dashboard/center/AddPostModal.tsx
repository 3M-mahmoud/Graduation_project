"use client";
import React, { useState, useRef } from "react";
import { X, Image as ImageIcon, Send, Paperclip } from "lucide-react";
import toast from "react-hot-toast";

interface AddPostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const AddPostModal = ({ isOpen, onClose, onSuccess }: AddPostModalProps) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  // معالجة اختيار الصورة
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handlePublish = async () => {
    // التحقق من وجود نص أو صورة على الأقل
    if (!content.trim() && !image) {
      toast.error("يجب كتابة نص أو اختيار صورة للمنشور");
      return;
    }

    setLoading(true);
    try {
      // هنا يتم الربط مع الـ API الخاص بالباك اند
      const formData = new FormData();
      formData.append("content", content);
      if (image) formData.append("image", image);

      // مثال للطلب (تعدل حسب الـ Endpoint الخاص بك)
      // await axios.post(`${DOMAIN}/posts`, formData);

      toast.success("تم نشر المنشور بنجاح");
      onSuccess();
      onClose();
      setContent("");
      setImage(null);
      setImagePreview(null);
    } catch (error) {
      toast.error("حدث خطأ أثناء النشر");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4"
      dir="rtl"
    >
      <div className="bg-white rounded-[2rem] w-full max-w-[550px] shadow-2xl animate-in zoom-in duration-300 border border-slate-100 overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-50 flex items-center justify-between bg-white">
          <h2 className="text-lg font-black text-slate-800">
            إنشاء منشور جديد
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          {/* حقل النص */}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="بماذا تفكر اليوم؟"
            className="w-full min-h-[120px] p-4 bg-slate-50 border border-slate-100 rounded-2xl text-right text-sm font-bold outline-none focus:ring-2 focus:ring-emerald-500/10 resize-none"
          ></textarea>

          {/* عرض الصورة المختارة */}
          {imagePreview && (
            <div className="relative w-full h-48 rounded-2xl overflow-hidden border border-slate-100 group">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => {
                  setImage(null);
                  setImagePreview(null);
                }}
                className="absolute top-2 left-2 p-1.5 bg-red-500 text-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
              >
                <X size={14} />
              </button>
            </div>
          )}

          {/* أدوات الإضافة */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
                accept="image/*"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-500 rounded-xl font-bold text-xs hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <ImageIcon size={16} className="text-emerald-600" />
                <span>إضافة صورة</span>
              </button>
            </div>

            <p className="text-[10px] text-slate-300 font-bold">
              اختياري: صورة أو نص
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-slate-50/50 flex gap-3">
          <button
            onClick={handlePublish}
            disabled={loading}
            className="flex-1 py-3.5 bg-[#062D27] text-white rounded-xl font-black text-sm hover:bg-[#083a32] transition-all shadow-lg active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
          >
            {loading ? (
              "جاري النشر..."
            ) : (
              <>
                <span>نشر المنشور</span>
                <Send size={16} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPostModal;
