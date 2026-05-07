"use client";

import { DOMAIN } from "@/utils/constants";
import { Heart } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const ButtonLikes = ({ likesCount, id }: any) => {
  const [loading, setLoading] = useState(false);
  const [likesCounts, setLikesCounts] = useState(likesCount);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = async () => {
    if (loading) return;

    const token = localStorage.getItem("token");

    if (!token) {
      return toast.error("يرجى تسجيل الدخول أولاً");
    }

    setLoading(true);

    try {
      const res = await fetch(`${DOMAIN}likes/${id}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const dataRes = await res.json();

      if (res.ok && dataRes.status !== "fail") {
        const isNowLiked = dataRes.data.isLiked;

        setIsLiked(isNowLiked);

        setLikesCounts((prev: number) => (isNowLiked ? prev + 1 : prev - 1));

        toast.success(isNowLiked ? "تم تسجيل الإعجاب" : "تم إزالة الإعجاب");
      } else {
        toast.error(dataRes.message || "حدث خطأ ما");
      }
    } catch (error) {
      toast.error("مشكلة في الاتصال بالخادم");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleLike} disabled={loading}>
      <div
        className={`flex items-center gap-2 transition-colors ${
          isLiked ? "text-red-500" : "text-slate-400 hover:text-red-500"
        }`}
      >
        <span className="text-[11px] font-black">{likesCounts}</span>

        <Heart size={16} fill={isLiked ? "currentColor" : "none"} />
      </div>
    </button>
  );
};

export default ButtonLikes;
