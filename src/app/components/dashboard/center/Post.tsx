"use client";
import { DOMAIN } from "@/utils/constants";
import { MessageSquare, Clock, Heart, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import ButtonLikes from "../../button/ButtonLike";

export const Post = ({ centerId }: any) => {
  const [posts, setPosts] = useState<any>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const getData = async () => {
      const res = await fetch(
        `${DOMAIN}posts?userId=${centerId}&role=teacher&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const json = await res.json();
      setPosts(json?.data?.posts || []);
    };
    getData();
  }, [centerId, page]);

  return (
    <>
      {posts?.length > 0 ? (
        <div className="space-y-4">
          {posts?.map((post: any) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm relative group transition-all hover:border-slate-200"
            >
              {/* أزرار التحكم الجانبية - كما في الصورة */}
              <div className="absolute top-6 left-6 flex items-center gap-3">
                <button className="text-slate-300 hover:text-blue-500 transition-colors">
                  <Pencil size={16} />
                </button>
                <button className="text-slate-300 hover:text-red-500 transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {/* رأس المنشور */}
                <div className="flex items-center gap-3">
                  <div className="text-right flex-1">
                    <h4 className="font-black text-slate-800 text-sm">
                      {post.author}
                    </h4>
                    <div className="flex items-center justify-end gap-1 text-[10px] text-slate-400 mt-0.5 font-bold">
                      {post.time} <Clock size={10} />
                    </div>
                  </div>
                  <div className="w-11 h-11 rounded-full bg-slate-100 border border-slate-50 overflow-hidden relative">
                    <Image
                      src={post.imageUrl || "/default-avatar.png"}
                      alt={post.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-slate-600 text-xs leading-relaxed font-medium whitespace-pre-wrap">
                    {post.content}
                  </p>
                </div>

                {post.image && (
                  <div className="w-full mt-2 rounded-xl overflow-hidden border border-slate-50">
                    <Image
                      src={post.image}
                      alt="Post Attachment"
                      width={800}
                      height={400}
                      className="w-full object-cover"
                    />
                  </div>
                )}

                {/* التفاعلات - تصميم مطابق للصورة */}
                <div className="flex items-center gap-6 pt-4 border-t border-slate-50 mt-2">
                  <ButtonLikes likesCount={post.likesCount} id={post.id} />
                  <div className="flex items-center gap-2 text-slate-400 hover:text-blue-500 cursor-pointer transition-colors">
                    <span className="text-[11px] font-black">
                      {post.commentsCount || 0} تعليق
                    </span>
                    <MessageSquare size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-[2.5rem] border border-dashed border-slate-200">
          <p className="text-slate-400 font-bold text-lg">
            لا توجد منشورات متاحة حالياً.
          </p>
        </div>
      )}
    </>
  );
};
